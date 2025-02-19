<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenu from '@/components/TheMenu.vue'
</script>

<template>
  <header>
    <TheMenu />
  </header>

  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
</template>

<style>
:root {
  scroll-behavior: smooth;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-complete-item {
  transition: all 0.15s;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}

.list-complete-leave-active {
  position: relative;
}
</style>
