<script setup lang="ts">
import type { Game } from '@/typings/types'
import EmoComponent from '../EmoComponent.vue'
import { useGames } from '@/stores/Games'
import { ref } from 'vue'

const games = useGames()

const { game } = defineProps<{
  game: Game
  genres: Record<number, { title: string }>
  // fromBest: boolean
  // genre?: number
}>()

const emit = defineEmits(['change-genre'])

const isOpen = ref(false)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const scoreColor = (score: number) => {
  if (score >= 80) return 'score-green'
  if (score >= 65) return 'score-yellow'
  if (score >= 45) return 'score-red'
  return 'score-gray'
}
</script>

<template>
  <div @click="toggleOpen" class="font-pixel group p-2 inline-block w-full md:w-1/2 xl:w-1/3">
    <div class="shadow-lg hover:shadow-2xl window">
      <!-- Lista -->
      <div
        class="lista flex items-center justify-between"
        :class="{
          played: game.rating,
          wanted: !game.rating,
          requested: game.requested,
        }"
      >
        <span class="mx-1">{{ game.index ? `${game.index}.` : '' }}</span>
        <span class="mx-1 window-title overflow-x-scroll">{{ game.title }}</span>
        <span class="cursor-pointer button justify-self-end mr-1">
          <span class="select-none font-normal text-gray-700 buttonX">x</span>
        </span>
      </div>

      <!-- Okno obsah -->
      <div class="font-inter flex text-gray-900 minHRating leading-6 tracking-normal">
        <!-- rating & image -->
        <div v-if="Number.isInteger(game.rating)" class="p-3">
          <div
            class="font-pixel group rounded-lg overflow-hidden inline-block relative"
            :class="[scoreColor(game.rating || 0), { 'border-t-4': game.rating }]"
          >
            <div v-if="game.img.url" class="image">
              <img
                :alt="game.title"
                width="90"
                height="120"
                :src="`https://images.igdb.com/igdb/image/upload/t_cover_small/${game.img.url}.jpg`"
              />
            </div>
            <div class="score">
              <span>{{ game.rating }}%</span>
            </div>
          </div>
        </div>

        <!-- if Nehodnoceno -->
        <div
          v-if="!Number.isInteger(game.rating)"
          class="py-5 text-3xl text-red-600 window-content text-center"
        >
          <div class="font-pixel">
            <span class="mr-1">🚧</span>
            připravujeme
            <span class="mr-1">🚧</span>
          </div>
          <div class="font-roboto-mono">( ͡° ͜ʖ ͡°)</div>
        </div>
        <!-- Content -->
        <div v-if="Number.isInteger(game.rating)" class="p-3 pl-1 window-content text-center">
          <!-- Žánr -->
          <div class="mb-1 flex justify-end flex-wrap text-xs text-gray-600">
            <div
              v-for="gen in game.genre"
              :key="gen + 'cardGenre'"
              class="cursor-pointer"
              @click.stop="emit('change-genre', gen)"
            >
              <div
                class="pt-0.5 px-1 m-0.5 border rounded"
                :class="{
                  'border-blue-600 text-blue-600 hover:border-purple-500 hover:text-purple-500':
                    gen === games.genre,
                  'border-gray-400 hover:border-gray-600 hover:text-gray-900': gen !== games.genre,
                }"
              >
                {{ genres[gen]?.title }}
              </div>
            </div>
          </div>

          <!-- Text recenze a emoji -->
          <div class="text-left sm:select-text">
            <span class="text-2xl mr-2">{{ game.emoji }}</span>
            <EmoComponent>{{ game.text }}</EmoComponent>
          </div>

          <!-- Request -->
          <div v-if="game.requested" class="font-inter mt-3">
            <span class="text-gray-600">requested by: </span>
            <span class="font-semibold text-purple-700 hover:text-purple-500 trans">
              {{ game.requested }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lista {
  transition: opacity 0.2s;
  color: white;
  position: relative;
  box-shadow: 0 2px 1px -1px rgb(147, 147, 147);
}

.lista.played {
  background: linear-gradient(90deg, #1d44ed 0%, #000083 100%);
}

.lista.wanted {
  background: #747888;
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

.window-content::-webkit-scrollbar {
  width: 7px;
}

.window-content::-webkit-scrollbar-track {
  background: transparent;
}

.window-content::-webkit-scrollbar-thumb {
  background: #a7a7a7;
}

.window-content::-webkit-scrollbar-thumb:hover {
  background: #474649;
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
}

.trans {
  transition: all 0.2s ease-in-out;
}

.window:hover .window-title {
  color: black;
}

.window-title {
  overflow-x: auto;
  text-wrap: nowrap;
  max-height: 2rem;
  transition: all 0.2s;

  /* width */
  &::-webkit-scrollbar {
    height: 0.2rem;
    width: 0.2rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #00000000;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ffffff96;
    border-radius: 1rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #1600336b;
    cursor: pointer;
  }
}
</style>
