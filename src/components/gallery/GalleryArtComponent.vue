<script setup lang="ts">
import FancyboxWrapper from './FancyboxWrapper.vue'
import { useArt } from '../../stores/Art'
const art = useArt()

const photos = art.photos
</script>

<template>
  <div class="flex flex-wrap items-center">
    <FancyboxWrapper>
      <a
        v-for="photo in photos"
        :key="photo.alt"
        :href="`/images/art/${photo.name}.webp`"
        data-fancybox="gallery"
        :data-caption="photo.alt"
      >
        <img
          :src="`/images/art/thumb/${photo.name}_thumb.webp`"
          :width="photo.width"
          :height="photo.height"
          :alt="photo.alt"
        />
      </a>
    </FancyboxWrapper>
  </div>
</template>

<style lang="scss" scoped></style>
