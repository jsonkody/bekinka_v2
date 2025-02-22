<script setup lang="ts">
import FancyboxWrapper from './FancyboxWrapper.vue'
import { useGalleryHome } from '../../stores/GalleryHome'
const galery = useGalleryHome()

const photos = galery.pictures
</script>

<template>
  <div>
    <FancyboxWrapper>
      <div class="gallery-wrapper">
        <a
          class="gallery-item"
          v-for="photo in photos"
          :key="photo.description"
          :href="`/images/cesta_new/${photo.name}.avif`"
          data-fancybox="gallery"
          :data-caption="photo.description"
        >
          <img
            class="thumbnail"
            :src="`/images/cesta_new/thumb/${photo.name}.avif`"
            :alt="photo.description"
          />
        </a>
      </div>
    </FancyboxWrapper>
  </div>
</template>
