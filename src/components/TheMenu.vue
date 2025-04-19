<script setup lang="ts">
import { useRoute } from 'vue-router'
import SocialComponent from '@/components/SocialComponent.vue'

const route = useRoute()
</script>

<template>
  <section
    class="pb-5 sm:pt-8 mt-0 md:mt-0 md:h-24 flex flex-col-reverse sm:flex-row items-center justify-between"
  >
    <!-- Bekinka logo -->
    <div class="flex items-center">
      <router-link to="/" class="px-5">
        <div class="px-5 hidden md:inline-block">
          <div class="inline-block flex h-full">
            <div class="glitch group ml-2 relative inline-block w-32">
              <div
                class="bekinka-logo text-5xl font-streamster text-purple-400 group-hover:text-purple-200 trans-200"
              >
                Bekinka
              </div>
              <div class="kata text-purple-400 group-hover:text-purple-200 trans-200">ベキンカ</div>
              <div class="hira text-purple-400 group-hover:text-purple-200 trans-200">
                なに これ
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <!-- meme secret -->
      <a
        target="_blank"
        href="https://snejk.bekinka.cz"
        class="z-20 absolute left-1 top-1 sm:left-5 sm:top-5 lg:left-52 lg:top-5 md:hidden lg:block"
      >
        <img
          class="opacity-0 hover:opacity-100 trans-200"
          alt="beki smile"
          width="65"
          height="65"
          src="/images/beki_smile.avif"
        />
      </a>
    </div>

    <div class="pt-13 sm:pt-0">
      <nav class="font-pixel flex flex-col sm:flex-row justify-center items-center">
        <!-- Home -->
        <router-link to="/" custom v-slot="{ navigate, isExactActive }">
          <div class="menu-link" :class="{ active: isExactActive }" @click="navigate">
            <span class="left" :class="{ invisible: !isExactActive }">{</span>
            Sbírka
            <span class="right" :class="{ invisible: !isExactActive }">}</span>
          </div>
        </router-link>

        <!-- Games -->
        <router-link to="/games" custom v-slot="{ navigate, isExactActive }">
          <div class="menu-link" :class="{ active: isExactActive }" @click="navigate">
            <span class="left" :class="{ invisible: !isExactActive }">{</span>
            Games
            <span class="right" :class="{ invisible: !isExactActive }">}</span>
          </div>
        </router-link>

        <!-- Art -->
        <router-link to="/art" custom v-slot="{ navigate, isExactActive }">
          <div class="menu-link" :class="{ active: isExactActive }" @click="navigate">
            <span class="left" :class="{ invisible: !isExactActive }">{</span>
            Art
            <span class="right" :class="{ invisible: !isExactActive }">}</span>
          </div>
        </router-link>
      </nav>
    </div>

    <SocialComponent />
  </section>
</template>

<style scoped></style>
