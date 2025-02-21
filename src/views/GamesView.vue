<script setup lang="ts">
// import type { Genre } from '@/stores/Games'
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
      <input
        placeholder="Vyhledej hru ..."
        class="bg-white font-asap font-semibold text-purple-950 text-xl px-3 mb-2 rounded-md border-2 border-purple-400 hover:border-green-400 focus:border-green-400 focus:outline-none trans"
        type="text"
        :value="games.gameName"
        @input="games.setSearch"
      />
    </div>

    <!-- Žánry -->
    <div
      class="border border-purple-400/10 bg-purple-400/10 pb-1 pt-2 rounded-md mb-2 mt-3 font-sans font-medium flex flex-wrap items-center justify-center"
    >
      <div v-for="g in Object.keys(games.genres)" :key="g" class="cursor-pointer">
        <div
          @click="games.changeGenre(Number(g) as Genre)"
          class="font-asap mr-1 mb-1 py-1 px-3 text-sm rounded trans"
          :class="{
            'bg-green-300/90 text-black': games.genre === Number(g),
            'bg-black/25 text-white hover:bg-black/70': games.genre !== Number(g),
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
      <span class="font-asap text-sm text-white/50 hover:text-white/90 trans">
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
  <p class="mt-12">Testuji emouty v textu ...</p>
  <div class="flex flex-wrap">
    <EmoComponent>
      bekiSmile Smile bekiNerd Nerd bekiLurk Lurk bekiKek Kek bekiPog Pog bekiSure Sure bekiPray
      Pray bekiChamp Champ bekiMald Mald bekiMeh Meh bekiDementos Dementos bekiDiosMios bekiDios
      bekiCmon Cmon bekiOk Ok bekiStar Star bekiStare Stare catJAM JAM bekiPls Pls pogTasty Tasty
      oooo Oooo LUL lul KEKLEO kekleo KEKW kekw bekiBlankies Blankies bekiMlady Mlady bekiAha Aha
      bekiClown Clown bekiCoze Coze bekiKona Kona bekiRagey Ragey bekiSleeper Sleeper bekiTired
      Tired bekiWeirdo Weirdo Clap clap andullHello andull_hello shilLove shil_love shilEZY shil_EZY
    </EmoComponent>
  </div>
</template>
