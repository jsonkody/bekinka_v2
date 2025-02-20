<!-- components/FancyboxWrapper.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const props = defineProps<{
  delegate?: string
  options?: object
}>()

onMounted(() => {
  Fancybox.bind('[data-fancybox="gallery"]', props.options || {})
})

onUnmounted(() => {
  Fancybox.destroy()
})
</script>

<template>
  <div class="z-100">
    <slot></slot>
  </div>
</template>
