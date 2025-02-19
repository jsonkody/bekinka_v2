<script setup lang="ts">
import { shallowRef, watch, defineAsyncComponent, defineComponent } from 'vue'
import type { IconName } from '@/typings/types'

const props = defineProps<{
   name: IconName
   size: string
}>()

// Použijeme shallowRef pro theIcon aby se zabránilo reaktivnímu sledování
const theIcon = shallowRef<ReturnType<typeof defineComponent> | null>(null)

watch(
   () => props.name,
   async (newName: IconName) => {
      // console.log(`new name ${props.name}`)
      // Dynamický import ikony na základě jména, s využitím defineAsyncComponent pro načtení
      theIcon.value = defineAsyncComponent(() => import(`./icons/${newName}.vue`))
   },
   { immediate: true }
) // Aktivujeme watcher ihned při inicializaci
</script>

<template>
   <div v-if="theIcon" class="inline-block p-0 m-0 align-middle icon-component">
      <component :key="props.name" :is="theIcon" :size="size || '1.5rem'" />
   </div>
</template>

<style lang="scss" scoped>
.icon-component {
   min-width: 1.25rem;
   min-height: 1.25rem;
   max-width: 4rem;
   max-height: 4rem;
}
// Další styly...
</style>
