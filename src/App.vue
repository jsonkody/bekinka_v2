<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenu from '@/components/TheMenu.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
</script>

<template>
  <div class="flex relative flex-col min-h-screen justify-between">
    <div>
      <ScrollToTop />

      <div class="head_position absolute z-10">
        <img width="283" height="430" src="/src/assets/images/head.webp" alt="head" />
      </div>

      <TheMenu />
    </div>
    <main class="grow relative px-2 py-4 md:px-8">
      <div
        class="floating_animation pointer-events-none inline-block absolute right-0 -mt-6 mr-6 md:mr-32 lg:mr-60"
      >
        <img
          alt="bekinka japanese"
          src="/src/assets/images/bekinka_jpn.webp"
          width="480"
          height="140"
        />
      </div>
      <div
        class="z-10 border border-purple-400/30 container content mx-auto pb-20 px-2 pt-2 md:pt-6 md:p-5 md:pb-20 relative"
      >
        <transition name="fade" mode="out-in">
          <RouterView />
        </transition>
      </div>
    </main>

    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style>
:root {
  scroll-behavior: smooth;
  color: white;
}

.head_position {
  display: none;
  pointer-events: none;
}

@media (min-width: 639px) {
  .head_position {
    display: none;
  }
}

@media (min-width: 1800px) {
  .head_position {
    top: -4rem;
    left: 18rem;
    display: block;
    transform: rotate(-10deg);
  }
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
