<script setup lang="ts">
import FancyboxWrapper from './FancyboxWrapper.vue'
import { useGalleryArt } from '../../stores/GalleryArt'
const art = useGalleryArt()

const paintings = art.pictures
</script>

<template>
  <div>
    <button
      @click="art.is_desc = !art.is_desc"
      class="mb-2 text-pink-400 hover:text-pink-300 select-none font-asap font-semibold text-lg cursor-pointer p-2 focus:outline-none trans-200"
    >
      <template v-if="art.is_desc">
        Od nejnovějších
        <IconComponent name="ArrDown" size="1.5rem" />
      </template>
      <template v-else>
        Od nejstarších
        <IconComponent name="ArrUp" size="1.5rem" />
      </template>
    </button>

    <FancyboxWrapper>
      <TransitionGroup tag="div" name="wrapper" class="gallery-wrapper">
        <!-- <div class="gallery-wrapper"> -->
        <a
          class="gallery-item"
          v-for="paint in paintings"
          :key="paint.name"
          :href="`/images/art/${paint.name}.avif`"
          data-fancybox="gallery"
          :data-slug="paint.name"
          :data-caption="paint.description"
          v-pop:bottom="paint.description"
        >
          <div class="thumbnail">
            <img
              width="98"
              height="98"
              class="thumbnail-img"
              :src="`/images/art/thumb/${paint.name}.avif`"
              :alt="paint.description"
            />
          </div>
        </a>
        <!-- </div> -->
      </TransitionGroup>
    </FancyboxWrapper>
  </div>
</template>

<style scoped>
/* Animace pro přeskupení */
.wrapper-move,
.wrapper-enter-active,
.wrapper-leave-active {
  transition: all 0.5s ease; /* Plynulý přesun všech vlastností za 0.5s */
}

/* Volitelné: efekt při vstupu nebo odchodu */
.wrapper-enter-from,
.wrapper-leave-to {
  opacity: 0;
  transform: translateY(10px); /* Lehké posunutí dolů */
  transition: all 0.3s ease;
}
</style>
