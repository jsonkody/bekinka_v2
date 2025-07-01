<script setup lang="ts">
// import type { Genre } from '@/stores/Games'
import { IconX } from '@tabler/icons-vue'
import GameCard from '@/components/games/GameCard.vue'
import GameSort from '@/components/games/GameSort.vue'
import EmoComponent from '@/components/EmoComponent.vue'
import { useGames } from '@/stores/Games'

const games = useGames()

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
</script>

<template>
  <div class="pt-6 px-3 pb-2 bg-black/40 rounded-2xl">
    <!-- Vyhledávání -->
    <div class="flex justify-center intems-center">
      <div class="mb-2 relative">
        <input
          placeholder="Vyhledej hru ..."
          class="pl-3 pr-6 cursor-text bg-white font-asap font-semibold text-purple-950 text-xl rounded-md border-2 border-purple-400 hover:border-green-400 focus:border-green-400 focus:outline-none trans-200"
          type="text"
          ref="search-input"
          v-model="games.search"
        />

        <IconX
          @click="games.search = ''"
          :size="24"
          stroke-width="3"
          :class="{ 'opacity-100': games.search, 'opacity-0': !games.search }"
          class="mr-1 h-full cursor-pointer trans absolute top-0 right-0 text-slate-300 hover:text-slate-500"
        />
      </div>
    </div>

    <!-- Žánry -->
    <div
      class="border border-purple-400/10 bg-purple-400/10 pb-1 pt-2 rounded-md mb-2 mt-3 font-sans font-medium flex flex-wrap items-center justify-center"
    >
      <div v-for="g in Object.keys(games.genres)" :key="g" class="cursor-pointer">
        <div
          @click="games.changeGenre(Number(g) as Genre)"
          class="select-none font-asap mr-1 mb-1 py-1 px-3 text-sm rounded-md trans-150"
          :class="{
            'border border-green-300/90 bg-green-300/90 text-black': games.genre === Number(g),
            'border border-white/20 hover:border-green-300/90 bg-black/25 text-white hover:bg-black/70':
              games.genre !== Number(g),
          }"
        >
          {{ games.genres[Number(g) as Genre].title }}
        </div>
      </div>
    </div>

    <!-- Třídění -->
    <div class="flex items-center justify-center">
      <GameSort
        :is-desc="games.isDesc"
        :from-best="games.fromBest"
        :sort-by-date="games.sortByDate"
        @update:is-desc="games.isDesc = $event"
        @update:from-best="games.fromBest = $event"
        @update:sort-by-date="games.sortByDate = $event"
      />
    </div>
  </div>

  <!-- Hláška -->
  <div class="my-3 text-center">
    <h2>
      <span class="font-asap text-sm text-white/50 hover:text-white/90 trans-200">
        Hodnocení = míra zábavy pro Beku. Neslouží jako náhrada profesionálních recenzí ;)
      </span>
    </h2>
  </div>

  <!-- Seznam her -->
  <div class="flex flex-wrap">
    <GameCard
      v-for="game in games.filteredGames"
      :key="game.index + 'game'"
      :game="game"
      :genres="games.genres"
      :from-best="games.fromBest"
      :genre="games.genre"
      @change-genre="games.handleChangeGenre"
    />
  </div>

  <!-- Emo test -->
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
