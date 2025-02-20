<script setup lang="ts">
import GalleryArtComponent from '@/components/gallery/GalleryArtComponent.vue'
</script>

<template>
  <div class="text-center">
    <div class="mb-6 dark-wrap font-asap">
      <h2 class="py-5 mb-1 text-4xl text-emerald-400 font-semibold text-center">Bekinki Art</h2>
      <div class="mt-4">
        <p class="text-center">
          <Emo
            >Zde je vystaven vzorek Bekinčina úžasného umění bekiPog a nesporný důkaz jejího génia
            bekiNerd bekiSure bekiKek</Emo
          >
        </p>
        <p class="py-4">
          Nejaktuálnější tvorbu najdete na
          <a class="px-1 text-lg link" target="_blank" href="https://www.artstation.com/rebecapro">
            Artstation
          </a>
          <Emo>bekiDementos bekiChamp</Emo>
        </p>
      </div>
    </div>
    <GalleryArtComponent />
  </div>
</template>
