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
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4.5H11M3.5 3.5V12.5H11.5V3.5H3.5Z" stroke="currentColor" />
  </svg>
</template>
