<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import PocketBase, { type RecordModel } from 'pocketbase'
import GameCard from '@/components/games/GameCard.vue'
import GameSort from '@/components/games/GameSort.vue'
import EmoComponent from '@/components/EmoComponent.vue'
import { IconX } from '@tabler/icons-vue'

// --- State Management ---
const reviews = ref<RecordModel[]>([])
const genres = ref<RecordModel[]>([])
const page = ref(1)
const perPage = 12 // Kolik her se načte na jednu stránku
const totalPages = ref(1)
const loading = ref(false)
const searchQuery = ref('')
const selectedGenre = ref<string | null>(null) // ID vybraného žánru
const sortBy = ref('-stream_index') // Defaultní řazení

// --- PocketBase Initialization ---
const pb = new PocketBase('https://bekinka-db.bekinka.cz')
// const pb = new PocketBase('http://127.0.0.1:8090') // Pro lokální vývoj

// --- Data Fetching ---
let debounceTimer: number
const fetchReviews = async (loadMore = false) => {
  loading.value = true
  try {
    // Pokud nenačítáme další stránku, resetujeme pole
    if (!loadMore) {
      page.value = 1
      // reviews.value = []
    }

    // Sestavení filtru pro PocketBase
    const filterParts: string[] = ['score != 0']
    if (searchQuery.value) {
      // Filtrujeme v expandovaném poli 'game' podle 'title'
      filterParts.push(`game.title ~ "${searchQuery.value}"`)
    }
    if (selectedGenre.value) {
      // Filtrujeme podle ID žánru v expandovaném poli 'genres'
      filterParts.push(`game.genres.id ?= "${selectedGenre.value}"`)
    }
    const filter = filterParts.join(' && ')

    const resultList = await pb.collection('reviews').getList(page.value, perPage, {
      sort: sortBy.value,
      filter: filter || undefined, // Pokud je filtr prázdný, pošli undefined
      expand: 'game, game.genres, game.request.people',
    })

    if (loadMore) {
      reviews.value.push(...resultList.items)
    } else {
      reviews.value = resultList.items
    }

    totalPages.value = resultList.totalPages
  } catch (error) {
    console.error('Chyba při načítání recenzí:', error)
  } finally {
    loading.value = false
    // setTimeout(() => {

    // },3000)
  }
}

const fetchGenres = async () => {
  try {
    const allGenres = await pb.collection('genres').getFullList({ sort: 'name_cs' })
    genres.value = allGenres
  } catch (error) {
    console.error('Chyba při načítání žánrů:', error)
  }
}

// --- Event Handlers & Watchers ---
const loadMore = () => {
  if (page.value < totalPages.value) {
    page.value++
    fetchReviews(true)
  }
}

const clearSearch = () => {
  searchQuery.value = ''
}

const toggleGenre = (genreId: string) => {
  if (selectedGenre.value === genreId) {
    selectedGenre.value = null // Odznačení žánru
  } else {
    selectedGenre.value = genreId
  }
}

// Sledování změn a volání API
watch(searchQuery, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      fetchReviews()
    }, 300) // Debounce 300ms
  }
})

watch([selectedGenre, sortBy], () => {
  fetchReviews()
})

// --- Lifecycle Hooks ---
onMounted(() => {
  fetchGenres()
  fetchReviews()
})
</script>

<template>
  <div>
    <div class="pt-6 px-3 pb-2 bg-black/40 rounded-2xl">
      <div class="flex justify-center intems-center">
        <div class="grow"></div>
        <div class="relative">
          <input
            @keydown.esc="clearSearch"
            placeholder="Vyhledej hru ..."
            class="pl-3 pr-8 cursor-text bg-white font-asap font-semibold text-purple-950 text-xl rounded-md border-2 border-purple-400 hover:border-green-400 focus:border-green-400 focus:outline-none trans w-64"
            type="text"
            v-model="searchQuery"
          />
          <IconX
            v-pop:right="'Zrušit'"
            v-if="searchQuery"
            @click="clearSearch"
            :size="24"
            stroke-width="3"
            class="mr-1 h-full cursor-pointer trans absolute top-0 right-0 text-slate-400 hover:text-slate-600"
          />
        </div>
        <div class="grow flex items-center">
          <div :class="{ invisible: !loading }" class="ml-2" role="status">
            <div
              class="h-5 w-5 animate-spin rounded-full border-4 border-transparent border-l-green-400 border-t-green-400"
            ></div>
          </div>
        </div>
      </div>

      <div
        v-if="genres.length"
        class="border border-purple-400/10 bg-purple-400/10 pb-1 pt-2 rounded-md mb-2 mt-3 font-sans font-medium flex flex-wrap items-center justify-center"
      >
        <div v-for="genre in genres" :key="genre.id" class="cursor-pointer">
          <div
            v-pop:bottom="genre.id === selectedGenre ? 'Zrušit žánr' : 'Vybrat žánr'"
            @click="toggleGenre(genre.id)"
            class="select-none font-asap mr-1 mb-1 py-1 px-3 text-sm rounded-md trans"
            :class="{
              'border border-green-300/90 bg-green-300/90 text-black': genre.id === selectedGenre,
              'border border-white/20 hover:border-green-300/90 bg-black/25 text-white hover:bg-black/70':
                selectedGenre !== genre.id,
            }"
          >
            {{ genre.name_cs }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <GameSort v-model="sortBy" />
      </div>
    </div>

    <div class="my-3 text-center">
      <h2>
        <span class="font-asap text-sm text-white/50 hover:text-white/90 trans">
          Hodnocení = míra zábavy pro Beku. Neslouží jako náhrada profesionálních recenzí ;)
        </span>
      </h2>
    </div>

    <!-- <div v-if="reviews.length" class="flex flex-wrap">
      <GameCard
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        :pb="pb"
        :search-query="searchQuery"
        :selected-genre="selectedGenre"
        @update-genre-filter="toggleGenre($event)"
      />
    </div>

    <div v-if="loading && !reviews.length" class="text-center p-10 text-white/80">
      Načítám hry...
    </div>
    <div v-if="!loading && !reviews.length" class="text-center p-10 text-white/80">
      Žádné hry neodpovídají zadaným kritériím.
    </div> -->

    <div v-if="reviews.length" class="flex flex-wrap">
      <GameCard
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        :pb="pb"
        :loading="loading"
        :search-query="searchQuery"
        :selected-genre="selectedGenre"
        @update-genre-filter="toggleGenre($event)"
      />
    </div>

    <div v-if="loading && !reviews.length" class="text-center p-10 text-white/80">
      Načítám hry...
    </div>
    <div v-if="!loading && !reviews.length" class="text-center p-10 text-white/80">
      Žádné hry neodpovídají zadaným kritériím.
    </div>
  </div>

  <div v-if="!loading && page < totalPages" class="text-center my-24">
    <button @click="loadMore" class="btn-cyber">Načíst další</button>
  </div>

  <div id="emo"></div>
  <p class="mt-12 mb-4">
    Tohle jsou dostupne emouty, staci pred jmeno napsat dvojtecku napr.
    <code>:bekiSmile</code>
  </p>
  <div class="flex flex-wrap">
    <EmoComponent>
      :bekiSmile bekiSmile :bekiLurk bekiLurk :bekiChamp bekiChamp :bekiRagey bekiRagey :bekiSleeper
      bekiSleeper :bekiStare bekiStare :bekiSure bekiSure :bekiKek bekiKek :bekiMald bekiMald
      :bekiStar bekiStar :bekiPray bekiPray :bekiPog bekiPog :bekiMeh bekiMeh :bekiKona bekiKona
      :bekiAha bekiAha :bekiClown bekiClown :bekiCmon bekiCmon :bekiCoze bekiCoze :bekiDementos
      bekiDementos :bekiDiosMios bekiDiosMios :bekiOk bekiOk :bekiTired bekiTired :bekiWeirdo
      bekiWeirdo :bekiNerd bekiNerd :bekiMlady bekiMlady :bekiBlankies bekiBlankies :KEKW KEKW
      :KEKLEO KEKLEO :LUL LUL :oooo oooo :pogTasty pogTasty :bekiPls bekiPls :Clap Clap :catJAM
      catJAM :andullHello andullHello :shilLove shilLove :shilEZY shilEZY
    </EmoComponent>
  </div>
</template>

<style scoped>
.btn-cyber,
.btn-cyber::after {
  /* Upravil jsem velikosti a font, aby to lépe sedělo */
  width: 250px;
  height: 50px;
  font-size: 25px;
  font-family: 'Pixel';

  /* Původní styl z tvého příkladu */
  position: relative;
  background: linear-gradient(45deg, transparent 5%, #5600b8 5%);
  border: 0;
  color: #a2f4fd;
  /* letter-spacing: 3px; */
  font-weight: bold;
  line-height: 52px;
  /* Mírně upraveno pro zarovnání */
  box-shadow: 6px 0 0 #ff00aa;
  outline: transparent;
  cursor: pointer;
}

.btn-cyber::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);

  content: 'Načíst další';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #ff00aa 3%, #ff00aa 5%, #5600b8 5%);
  text-shadow:
    -3px -3px 0px #a2f4fd,
    3px 3px 0px #ff00aa;
  clip-path: var(--slice-0);
}

.btn-cyber:hover::after {
  animation: 1.5s glitch;
  /* 'steps' zajistí trhaný, digitální pohyb */
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}
</style>
