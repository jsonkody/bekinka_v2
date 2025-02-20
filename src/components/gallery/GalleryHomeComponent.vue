<script setup lang="ts">
import FancyboxWrapper from './FancyboxWrapper.vue'
import { useGalleryHome } from '../../stores/GalleryHome'
const galery = useGalleryHome()

const photos = galery.photos
</script>

<template>
  <FancyboxWrapper>
    <div class="gallery-wrapper">
      <a
        class="gallery-item"
        v-for="photo in photos"
        :key="photo.alt"
        :href="`/images/cesta_new/${photo.name}.webp`"
        data-fancybox="gallery"
        :data-caption="photo.alt"
      >
        <img
          class="thumbnail"
          :src="`/images/cesta_new/thumb/${photo.name}_thumb.webp`"
          :width="photo.width"
          :height="photo.height"
          :alt="photo.alt"
        />
      </a>
    </div>
  </FancyboxWrapper>
</template>
