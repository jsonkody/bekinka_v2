<script setup lang="ts"></script>

<template>
  <div class="my-5 flex justify-center">
    <!-- <div class="w-48 flex justify-between bg-purple-200/10 rounded-xl p-3"> -->
    <div class="p-3 flex bg-purple-200/10 rounded-xl">
      <div v-pop:bottom="'dobrodružné srdce'">
        <img
          width="21"
          height="21"
          class="mx-2"
          src="/images/heart_green.webp"
          alt="dobrodružné srdce"
        />
      </div>
      <div v-pop:bottom="'diamantové srdce'">
        <img
          width="21"
          height="21"
          class="mx-2"
          src="/images/heart_cyan.webp"
          alt="diamantové srdce"
        />
      </div>
      <div v-pop:bottom="'statečné srdce'">
        <img
          width="21"
          height="21"
          class="mx-2"
          src="/images/heart_purple.webp"
          alt="statečné srdce"
        />
      </div>
      <div v-pop:bottom="'milující srdce'">
        <img
          width="21"
          height="21"
          class="mx-2"
          src="/images/heart_red.webp"
          alt="milující srdce"
        />
      </div>
      <div v-pop:bottom="'zlaté srdce'">
        <img width="21" height="21" class="mx-2" src="/images/heart_gold.webp" alt="zlaté srdce" />
      </div>
    </div>
  </div>
</template>
