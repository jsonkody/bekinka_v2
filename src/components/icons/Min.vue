<script setup lang="ts">
const { size } = defineProps({
  size: {
    type: String,
    default: '24', // Výchozí velikost pro šířku a výšku SVG
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    class="h-5 w-5 inline-block"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5 12H11V11H10.5V12ZM4 12H10.5V11H4V12Z" fill="currentColor" />
  </svg>
</template>
