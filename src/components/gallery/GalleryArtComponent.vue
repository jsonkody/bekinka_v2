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
        v-for="photo in photos"
        :key="photo.alt"
        :href="`/images/art/${photo.name}.webp`"
        data-fancybox="gallery"
        :data-caption="photo.alt"
      >
        <img
          class="thumbnail"
          :src="`/images/art/thumb/${photo.name}_thumb.webp`"
          :width="photo.width"
          :height="photo.height"
          :alt="photo.alt"
        />
      </a>
    </div>
  </FancyboxWrapper>
</template>

<style lang="scss" scoped>
.gallery-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  justify-content: center;
  margin: 2rem 0;
}

.gallery-item {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    flex-basis: calc(33.33% - 1rem); /* 3 sloupce */
  }

  @media (max-width: 768px) {
    flex-basis: calc(50% - 1rem); /* 2 sloupce */
  }
}

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  transition: all 0.15s ease;

  &:hover {
    // border-color: #fdd0fe;
    border-color: #e7aaff;
    box-shadow: 0 6px 16px #dd87ffd0;
  }
}
</style>
