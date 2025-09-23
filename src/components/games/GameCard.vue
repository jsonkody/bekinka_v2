<script setup lang="ts">
import type { RecordModel } from 'pocketbase'
import type PocketBase from 'pocketbase'
import { computed } from 'vue'
import EmoComponent from '../EmoComponent.vue'
import { useHighlightText } from '@/composables/useHighlightText'

const { highlightText } = useHighlightText()

const props = defineProps<{
  review: RecordModel
  pb: PocketBase
  searchQuery: string
  selectedGenre: string | null
  loading: boolean
}>()

const emit = defineEmits(['update-genre-filter'])

// Používáme 'computed' pro lepší přehlednost a reaktivitu
const game = computed(() => props.review.expand?.game)
const requestedBy = computed(() => {
  const people = game.value?.expand?.request?.expand?.people
  return people ? people.map((p: any) => p.nickname).join(', ') : ''
})
const coverImageUrl = computed(() => {
  if (game.value && game.value.cover_image) {
    // Správný způsob, jak získat URL souboru z PocketBase
    return props.pb.getFileUrl(game.value, game.value.cover_image, { thumb: '180x240' })
  }
  // Záložní obrázek, pokud není k dispozici
  return 'https://via.placeholder.com/90x120?text=No+Image'
})

const scoreColor = (score: number) => {
  if (score >= 80) return 'score-green'
  if (score >= 65) return 'score-yellow'
  if (score >= 45) return 'score-red'
  return 'score-gray'
}
</script>

<template>
  <div v-if="game" class="font-pixel group p-2 inline-block w-full md:w-1/2 xl:w-1/3">
    <div class="shadow-lg hover:shadow-2xl window" :class="{ 'animate-pulse': loading }">
      <div
        class="lista flex items-center justify-between"
        :class="{
          played: review.score > -1,
          requested: requestedBy,
        }"
      >
        <span class="mx-1">{{ review.stream_index }}.</span>

        <span
          class="mx-1 window-title overflow-x-scroll select-text"
          v-html="highlightText(game.title, searchQuery)"
        ></span>
        <span v-pop="'( ͡° ͜ʖ ͡°)'" class="cursor-pointer button justify-self-end mr-1">
          <span class="select-none font-normal text-gray-700 buttonX">x</span>
        </span>
      </div>

      <div class="font-inter flex text-gray-900 min-h-[144px] leading-6 tracking-normal">
        <div class="p-3">
          <div
            class="font-pixel group rounded-lg overflow-hidden inline-block relative"
            :class="[scoreColor(review.score || 0), { 'border-t-4': review.score }]"
          >
            <div class="image">
              <img :alt="game.title" width="90" height="120" :src="coverImageUrl" />
            </div>
            <div v-if="review.score" class="score">
              <span>{{ review.score }}%</span>
            </div>
          </div>
        </div>

        <div class="p-3 pl-1 window-content text-center">
          <div
            v-if="game.expand?.genres"
            class="mb-1 flex justify-end flex-wrap text-xs text-gray-600"
          >
            <div
              v-for="genre in game.expand.genres"
              :key="genre.id"
              class="cursor-pointer"
              @click.stop="emit('update-genre-filter', genre.id)"
            >
              <div
                v-pop="genre.id === selectedGenre ? 'Zrušit žánr' : 'Vybrat žánr'"
                class="pt-0.5 px-1 m-0.5 border rounded trans"
                :class="{
                  'border-blue-600 text-blue-600': genre.id === selectedGenre,
                  'border-gray-400 hover:border-gray-600 hover:text-gray-900':
                    genre.id !== selectedGenre,
                }"
              >
                {{ genre.name_cs }}
              </div>
            </div>
          </div>

          <div class="text-left sm:select-text">
            <span v-if="review.emoji" class="text-2xl mr-2">{{ review.emoji }}</span>
            <EmoComponent>{{ review.text }}</EmoComponent>
          </div>

          <div v-if="requestedBy" class="text-left font-inter mt-3">
            <span class="text-violet-900">requested by: </span>
            <span class="font-semibold text-violet-700 hover:text-violet-700 trans">
              {{ requestedBy }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tvé stávající styly zde - ponechány beze změny */
.lista {
  transition: opacity 0.2s;
  color: white;
  position: relative;
  box-shadow: 0 2px 1px -1px rgb(147, 147, 147);
}
.lista.played {
  background: linear-gradient(90deg, #1d44ed 0%, #000083 100%);
}
.lista.requested {
  background: linear-gradient(90deg, #7500da 0%, #000082 100%);
}
.lista span {
  z-index: 20;
}
.lista::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgb(111, 0, 255) 5%,
    rgb(255, 193, 249) 35%,
    rgb(255, 240, 156) 60%,
    rgb(80, 255, 202) 100%
  );
  z-index: 0;
  transition: opacity 0.1s linear;
  opacity: 0;
}
.window-content {
  width: 100%;
}
.score {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27%;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 1.7rem;
  transition: all 0.2s;
}
.window {
  user-select: none;
  transition: all 0.2s;
  border: 3px outset #c3c3c3;
  background: #e7e7e7;
}
.window:hover {
  transform: scale(1.04);
  background: #f7f7f7;
  border: 3px outset #d8d8d8;
}
.window:hover .lista::before {
  z-index: 0;
  opacity: 1;
}
.window:hover .score {
  height: 100%;
  font-size: 2.4rem;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.25);
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
.button {
  border: 2px outset #c3c3c3;
  background: #c3c3c3;
  display: inline-block;
  width: 1.1rem;
  height: 1.06rem;
  color: black;
}
.buttonX {
  position: relative;
  bottom: 0.5rem;
  left: 0.05rem;
}
.button:hover {
  border: 2px inset #c3c3c3;
}
.button:hover .buttonX {
  bottom: 0.4rem;
  left: 0.1rem;
}
.button:hover .buttonX:active {
  color: #79ffff;
}
.image {
  width: 90px;
  height: 120px;
  background-color: #333; /* Placeholder color */
}
.window:hover .window-title {
  color: black;
}
.window-title {
  overflow-x: auto;
  text-wrap: nowrap;
  max-height: 2rem;
  transition: all 0.2s;
}
.window-title::-webkit-scrollbar {
  height: 0.2rem;
  width: 0.2rem;
}
.window-title::-webkit-scrollbar-track {
  background: #00000000;
}
.window-title::-webkit-scrollbar-thumb {
  background: #ffffff96;
  border-radius: 1rem;
}
.window-title::-webkit-scrollbar-thumb:hover {
  background: #1600336b;
  cursor: pointer;
}
</style>
