<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
import { Fancybox } from '@fancyapps/ui/dist/fancybox/'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const props = defineProps<{
  fancyboxOptions?: object
}>()

const container = ref<HTMLElement | null>(null)


onMounted(() => {
  if (container.value) {
    Fancybox.bind(container.value, '[data-fancybox]', {
      ...(props.fancyboxOptions || {}),
    })
  }
})

onUpdated(() => {
  if (container.value) {
    Fancybox.unbind(container.value)
    Fancybox.close()

    Fancybox.bind(container.value, '[data-fancybox]', {
      ...(props.fancyboxOptions || {}),
    })
  }
})

onUnmounted(() => {
  if (container.value) {
    Fancybox.unbind(container.value)
    Fancybox.close()
  }
})
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>
