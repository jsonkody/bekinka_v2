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
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 inline-block"
    viewBox="0 0 22 22"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
      clipRule="evenodd"
    />
  </svg>
</template>
