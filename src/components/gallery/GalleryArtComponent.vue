<script setup lang="ts">
import FancyboxWrapper from './FancyboxWrapper.vue'
import { useArt } from '../../stores/Art'
const art = useArt()

const photos = art.photos
</script>

<template>
  <button
    @click="art.is_desc = !art.is_desc"
    class="text-pink-400 hover:text-pink-300 select-none font-asap font-semibold text-lg cursor-pointer p-2 focus:outline-none trans"
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
      <a
        class="gallery-item"
        v-for="photo in photos"
        :key="photo.name"
        :href="`/images/art/${photo.name}.avif`"
        data-fancybox="gallery"
        :data-caption="photo.alt"
      >
        <img class="thumbnail" :src="`/images/art/thumb/${photo.name}.avif`" :alt="photo.alt" />
      </a>
    </TransitionGroup>
  </FancyboxWrapper>
</template>

<style scoped>
/* Layout galerie */
.gallery-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); /* Flexibilní sloupce */
  gap: 0.1rem; /* Mezera mezi položkami */
  padding: 0;
}

/* Styl pro jednotlivé odkazy */
.gallery-item {
  display: block; /* Odkaz zabírá celou plochu */
}

/* Styl pro thumbnaily */
.thumbnail {
  width: 100%;
  height: auto;
  display: block; /* Odstraní mezeru pod obrázkem */
}

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
  transform: translateY(20px); /* Lehké posunutí dolů */
}
</style>
