<script setup lang="ts">
import GalleryArtComponent from '@/components/gallery/GalleryArtComponent.vue'
import EmoComponent from '@/components/EmoComponent.vue'
</script>

<template>
  <div class="text-center">
    <div class="mb-2 dark-wrap font-asap">
      <h2 class="py-2 mb-1 text-4xl text-emerald-400 font-semibold text-center">Bekinki Art</h2>
      <div class="mt-4">
        <p class="text-center">
          <EmoComponent
            >Zde je vystaven vzorek Bekinčina úžasného umění :bekiPog a nesporný důkaz jejího génia
            :bekiNerd :bekiSure :bekiKek</EmoComponent
          >
        </p>
        <p class="py-4">
          Nejaktuálnější tvorbu najdete na
          <a class="px-1 text-lg link" target="_blank" href="https://www.artstation.com/rebecapro">
            Artstation
          </a>
          <EmoComponent>:bekiDementos :bekiChamp</EmoComponent>
        </p>
      </div>
    </div>
    <GalleryArtComponent />
  </div>
</template>
