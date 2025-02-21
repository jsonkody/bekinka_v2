<script setup lang="ts">
import FancyboxWrapper from './FancyboxWrapper.vue'
import { useArt } from '../../stores/Art'
const art = useArt()

const photos = art.photos
</script>

<template>
  <FancyboxWrapper>
    <div class="gallery-wrapper">
      <a
        class="gallery-item"
        href="/images/art/bex-hex-asset.avif"
        data-fancybox="gallery"
        data-caption="testuji AVIF pro iPhony"
      >
        <img
          class="thumbnail"
          src="/images/art/thumb/bex-hex-asset.avif_thumb.webp"
          alt="testuji AVIF pro iPhony"
        />
      </a>
    </div>
  </FancyboxWrapper>
  <FancyboxWrapper>
    <div class="gallery-wrapper">
      <a
        class="gallery-item"
        v-for="photo in photos"
        :key="photo.alt"
        :href="`/images/art/${photo.name}.webp`"
        data-fancybox="gallery"
        :data-caption="photo.alt"
      >
        <img
          class="thumbnail"
          :src="`/images/art/thumb/${photo.name}_thumb.webp`"
          :alt="photo.alt"
        />
      </a>
    </div>
  </FancyboxWrapper>
</template>
