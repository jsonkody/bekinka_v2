<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import PocketBase, { type RecordModel } from "pocketbase";
import GameCard from "@/components/games/GameCard.vue";
import GameSort from "@/components/games/GameSort.vue";
import EmoComponent from "@/components/EmoComponent.vue";
import { IconX } from "@tabler/icons-vue";

const reviews = ref<RecordModel[]>([]);
const genres = ref<RecordModel[]>([]);
const page_num = ref(1);
const per_page = 12;
const total_pages = ref(1);
const is_loading = ref(false);
const search_query = ref("");
const selected_genre = ref<string | null>(null);
const sort_by = ref("-stream_index");

const pb = new PocketBase("https://db.bekinka.cz");

let debounce_timer: number;

const fetch_reviews = async (load_more_flag = false) => {
  is_loading.value = true;
  try {
    if (!load_more_flag) {
      page_num.value = 1;
    }

    const filter_parts: string[] = [];
    if (search_query.value) {
      filter_parts.push(`game.title ~ "${search_query.value}"`);
    }
    if (selected_genre.value) {
      filter_parts.push(`game.genres.id ?= "${selected_genre.value}"`);
    }

    if (sort_by.value.slice(1) === "score" || selected_genre.value) {
      filter_parts.push("score > 0");
    } else {
      filter_parts.push("score != -1");
    }

    const filter_str = filter_parts.join(" && ");

    const result_list = await pb.collection("reviews").getList(page_num.value, per_page, {
      sort: sort_by.value,
      filter: filter_str || undefined,
      expand: "game, game.genres, game.request.people",
    });

    if (load_more_flag) {
      reviews.value.push(...result_list.items);
    } else {
      reviews.value = result_list.items;
    }

    total_pages.value = result_list.totalPages;
  } catch (error) {
    console.error("Chyba při načítání recenzí:", error);
  } finally {
    is_loading.value = false;
  }
};

const fetch_genres = async () => {
  try {
    const all_genres = await pb.collection("genres").getFullList({ sort: "name_cs" });
    genres.value = all_genres;
  } catch (error) {
    console.error("Chyba při načítání žánrů:", error);
  }
};

const load_more = () => {
  if (page_num.value < total_pages.value) {
    page_num.value++;
    fetch_reviews(true);
  }
};

const clear_search = () => {
  search_query.value = "";
};

const toggle_genre = (genre_id: string) => {
  if (selected_genre.value === genre_id) {
    selected_genre.value = null;
  } else {
    selected_genre.value = genre_id;
  }
};

watch(search_query, (new_val, old_val) => {
  if (new_val !== old_val) {
    clearTimeout(debounce_timer);
    debounce_timer = setTimeout(() => {
      fetch_reviews();
    }, 300);
  }
});

watch([selected_genre, sort_by], () => {
  fetch_reviews();
});

onMounted(() => {
  fetch_genres();
  fetch_reviews();
});
</script>

<template>
  <div>
    <div class="pt-6 px-3 pb-2 bg-black/40 rounded-2xl">
      <div class="flex justify-center intems-center">
        <div class="grow"></div>
        <div class="relative">
          <input
            @keydown.esc="clear_search"
            placeholder="Vyhledej hru ..."
            class="pl-3 pr-8 cursor-text bg-white font-asap font-semibold text-purple-950 text-xl rounded-md border-2 border-purple-400 hover:border-green-400 focus:border-green-400 focus:outline-none trans w-64"
            type="text"
            v-model="search_query"
          />
          <IconX
            v-pop:right="'Zrušit'"
            v-if="search_query"
            @click="clear_search"
            :size="24"
            stroke-width="3"
            class="mr-1 h-full cursor-pointer trans absolute top-0 right-0 text-slate-400 hover:text-slate-600"
          />
        </div>
        <div class="grow flex items-center">
          <div :class="{ invisible: !is_loading }" class="ml-2" role="status">
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
            v-pop:bottom="genre.id === selected_genre ? 'Zrušit žánr' : 'Vybrat žánr'"
            @click="toggle_genre(genre.id)"
            class="select-none font-asap mr-1 mb-1 py-1 px-3 text-sm rounded-md trans"
            :class="{
              'border border-green-300/90 bg-green-300/90 text-black': genre.id === selected_genre,
              'border border-white/20 hover:border-green-300/90 bg-black/25 text-white hover:bg-black/70':
                selected_genre !== genre.id,
            }"
          >
            {{ genre.name_cs }}
          </div>
        </div>
      </div>

      <div
        v-else
        class="mb-2 mt-3 pb-1 pt-2 flex flex-wrap items-center justify-center animate-pulse border border-purple-400/10 bg-purple-400/10 rounded-md font-sans font-medium"
      >
        <div v-for="n in 15" :key="n" class="mr-1 mb-1 py-1">
          <div
            class="h-[22px] rounded-md bg-black/25"
            :class="{
              'w-16': n % 3 === 0,
              'w-24': n % 3 === 1,
              'w-20': n % 3 === 2,
            }"
          ></div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <!-- {{ sort_by }} -->
        <GameSort v-model="sort_by" />
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
        :search-query="search_query"
        :selected-genre="selected_genre"
        @update-genre-filter="toggle_genre($event)"
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
        :loading="is_loading"
        :search-query="search_query"
        :selected-genre="selected_genre"
        @update-genre-filter="toggle_genre($event)"
      />
    </div>

    <div v-if="is_loading && !reviews.length" class="flex flex-wrap -m-2">
      <div
        v-for="n in per_page"
        :key="n"
        class="font-pixel p-1 inline-block w-full md:w-1/2 xl:w-1/3"
      >
        <div class="pr-2 pt-1 rounded bg-white/5 m-2 animate-pulse">
          <div class="lista-skeleton flex items-center justify-between px-1 h-[25px]">
            <div class="h-5 grow mx-2 bg-white/5 rounded-sm"></div>
            <div class="h-5 w-5 bg-white/10 rounded-sm"></div>
          </div>

          <div class="flex min-h-36">
            <div class="p-3">
              <div class="w-22.5 h-30 bg-white/10 rounded-xl"></div>
            </div>
            <div class="p-3 pl-1 grow flex flex-col">
              <div class="flex justify-end gap-1 mb-2">
                <div class="h-4 w-12 bg-white/5 rounded"></div>
                <div class="h-4 w-16 bg-white/5 rounded"></div>
              </div>
              <div class="grow space-y-2">
                <div class="h-3 w-full bg-white/5 rounded"></div>
                <div class="h-3 w-5/6 bg-white/5 rounded"></div>
                <div class="h-3 w-3/4 bg-white/5 rounded"></div>
              </div>
              <div class="mt-3">
                <div class="h-3 w-1/2 bg-white/5 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!is_loading && !reviews.length" class="text-center p-10 text-white/80">
      Žádné hry neodpovídají zadaným kritériím.
    </div>
  </div>

  <div v-if="!is_loading && page_num < total_pages" class="text-center my-24">
    <button @click="load_more" class="btn-cyber">Načíst další</button>
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
      catJAM :andullHello andullHello :shilLove shilLove :shilEZY shilEZY :NotLikeThis NotLikeThis
      :bekiGg bekiGg :bekiKodamaHi bekiKodamaHi :bekiKodamaLove bekiKodamaLove :bekiLove bekiLove
      :bekiMhm bekiMhm :bekiMonka bekiMonka :bekiPenny bekiPenny :bekiThisisfine bekiThisisfine
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
  font-family: "Pixel";

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

  content: "Načíst další";
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
