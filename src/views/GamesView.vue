<script setup lang="ts">
import GameCard from '@/components/games/GameCard.vue'
import GameSort from '@/components/games/GameSort.vue'
import EmoComponent from '@/components/EmoComponent.vue'
import { ref, computed } from 'vue'

// Types
enum Genre {
  Adventure = 101,
  RPG = 102,
  FPS = 103,
  Shooter = 104,
  Racing = 105,
  HackNslash = 106,
  Horror = 107,
  Survival = 108,
  Puzzle = 109,
  Platform = 110,
  Simulator = 111,
  Souls = 112,
  Indie = 113,
  MMO = 114,
}

interface GenreObj {
  title: string
  id: number
}

interface Game {
  index: number
  title: string
  requested?: string
  rating?: number
  genre: Genre[]
  emoji: string
  text: string
  img: {
    url: string
  }
}

// Reaktivní stav
const gameName = ref('')
const genre = ref<Genre>()
const isDesc = ref(true)
const fromBest = ref(true)
const sortByDate = ref(true)

const handleChangeGenre = (new_genre: Genre) => {
  genre.value = new_genre
}

const genres: Record<Genre, GenreObj> = {
  [Genre.Adventure]: { title: 'Adventura', id: Genre.Adventure },
  [Genre.RPG]: { title: 'RPG', id: Genre.RPG },
  [Genre.FPS]: { title: 'FPS', id: Genre.FPS },
  [Genre.Shooter]: { title: 'Střílečka', id: Genre.Shooter },
  [Genre.Racing]: { title: 'Závodní', id: Genre.Racing },
  [Genre.HackNslash]: { title: 'Mlátička', id: Genre.HackNslash },
  [Genre.Horror]: { title: 'Hororovka', id: Genre.Horror },
  [Genre.Survival]: { title: 'Survival', id: Genre.Survival },
  [Genre.Puzzle]: { title: 'Logická', id: Genre.Puzzle },
  [Genre.Platform]: { title: 'Plošinovka', id: Genre.Platform },
  [Genre.Simulator]: { title: 'Simulátor', id: Genre.Simulator },
  [Genre.Souls]: { title: 'Souls', id: Genre.Souls },
  [Genre.Indie]: { title: 'Nezávislá', id: Genre.Indie },
  [Genre.MMO]: { title: 'MMO', id: Genre.MMO },
  // ... ostatní žánry
}

const allGames = ref<Game[]>([
  {
    index: 1,
    title: 'Witcher 2',
    requested: 'JsonKody',
    rating: 90,
    genre: [Genre.Adventure, Genre.RPG],
    emoji: '🙂',
    text: `Na doporučení od bráchy...`,
    img: { url: 'co1wy4' },
  },
  // ... další hry
])

// Metody
const changeGenre = (g: Genre | undefined) => {
  gameName.value = ''
  genre.value = genre.value === g ? undefined : g
}

const setSearch = (e: Event) => {
  genre.value = undefined
  gameName.value = (e.target as HTMLInputElement).value
}

// Computed property pro filtrované hry
const filteredGames = computed(() => {
  return allGames.value
    .sort((a, b) => {
      if (sortByDate.value) {
        return isDesc.value ? b.index - a.index : a.index - b.index
      }
      return fromBest.value ? (b.rating || 0) - (a.rating || 0) : (a.rating || 0) - (b.rating || 0)
    })
    .filter((game) => {
      if (genre.value) return game.genre.includes(genre.value)
      return true
    })
    .filter((game) => game.title.toLowerCase().includes(gameName.value.toLowerCase()))
})
</script>

<template>
  <div class="dark-wrap py-6">
    <!-- Vyhledávání -->
    <div class="flex justify-center intems-center">
      <input
        placeholder="Vyhledej hru ..."
        class="bg-white font-asap font-semibold text-purple-950 text-xl px-3 mb-2 rounded-md border-2 border-purple-400 hover:border-green-400 focus:border-green-400 focus:outline-none trans"
        type="text"
        :value="gameName"
        @input="setSearch"
      />
    </div>

    <!-- Žánry -->
    <div
      class="border border-purple-400/10 bg-purple-400/10 pb-1 pt-2 rounded-md mb-2 mt-3 font-sans font-medium flex flex-wrap items-center justify-center"
    >
      <div v-for="g in Object.keys(genres)" :key="g" class="cursor-pointer">
        <div
          @click="changeGenre(Number(g) as Genre)"
          class="font-asap mr-1 mb-1 py-1 px-3 text-sm rounded opacity-90 trans"
          :class="{
            'bg-green-300 text-black': genre === Number(g),
            'bg-black text-white bg-opacity-25 hover:bg-opacity-70': genre !== Number(g),
          }"
        >
          {{ genres[Number(g) as Genre].title }}
        </div>
      </div>
    </div>

    <!-- Třídění -->
    <div class="flex items-center justify-center">
      <GameSort
        :is-desc="isDesc"
        :from-best="fromBest"
        :sort-by-date="sortByDate"
        @update:is-desc="isDesc = $event"
        @update:from-best="fromBest = $event"
        @update:sort-by-date="sortByDate = $event"
      />
    </div>
  </div>

  <!-- Hláška -->
  <div class="my-3 text-center">
    <h2>
      <span class="font-asap text-sm text-white opacity-50 hover:opacity-90 trans">
        Hodnocení = míra zábavy pro Beku...
      </span>
    </h2>
  </div>

  <!-- Seznam her -->
  <div class="flex flex-wrap">
    <GameCard
      v-for="game in filteredGames"
      :key="game.index + 'game'"
      :game="game"
      :genres="genres"
      :from-best="fromBest"
      :genre="genre"
      @change-genre="handleChangeGenre"
    />
  </div>

  <!-- Emo test -->
  <div id="emo"></div>
  <p class="mt-12">Testuji emouty v textu ...</p>
  <div class="flex flex-wrap">
    <EmoComponent>bekiSmile Smile</EmoComponent>
    <!-- ... ostatní emo komponenty -->
  </div>
</template>
