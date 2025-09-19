<script setup lang="ts">
import { computed } from 'vue'
import { IconArrowUp, IconArrowDown } from '@tabler/icons-vue'

const props = defineProps<{
  modelValue: string // např. '-stream_index' nebo '+score'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isSortedByDate = computed(() => props.modelValue.includes('stream_index'))
const isDesc = computed(() => props.modelValue.startsWith('-'))

const handleDateClick = () => {
  if (isSortedByDate.value) {
    // Pokud už třídíme podle data, jen otočíme směr
    emit('update:modelValue', isDesc.value ? '+stream_index' : '-stream_index')
  } else {
    // Jinak přepneme na třídění podle data (defaultně od nejnovějších)
    emit('update:modelValue', '-stream_index')
  }
}

const handleScoreClick = () => {
  if (!isSortedByDate.value) {
    // Pokud už třídíme podle skóre, jen otočíme směr
    emit('update:modelValue', isDesc.value ? '+score' : '-score')
  } else {
    // Jinak přepneme na třídění podle skóre (defaultně od nejlepších)
    emit('update:modelValue', '-score')
  }
}
</script>

<template>
  <div class="flex items-center space-x-4">
    <button
      @click="handleDateClick"
      class="select-none font-asap font-semibold text-lg cursor-pointer p-2 focus:outline-none trans-200 inline-flex items-center"
      :class="{
        'text-pink-400 hover:text-pink-300': isSortedByDate,
        'text-purple-300/30 hover:text-purple-300/50': !isSortedByDate,
      }"
    >
      <template v-if="isSortedByDate">
        <template v-if="isDesc">
          Od nejnovějších
          <IconArrowDown class="ml-1" size="1.5rem" />
        </template>
        <template v-else>
          Od nejstarších
          <IconArrowUp class="ml-1" size="1.5rem" />
        </template>
      </template>
      <template v-else> Podle data </template>
    </button>

    <button
      @click="handleScoreClick"
      class="select-none font-asap font-semibold text-lg cursor-pointer p-2 focus:outline-none trans-200 inline-flex items-center"
      :class="{
        'text-pink-400 hover:text-pink-300': !isSortedByDate,
        'text-purple-300/30 hover:text-purple-300/50': isSortedByDate,
      }"
    >
      <template v-if="!isSortedByDate">
        <template v-if="isDesc">
          Od nejlepších
          <IconArrowDown class="ml-1" size="1.5rem" />
        </template>
        <template v-else>
          Od nejhorších
          <IconArrowUp class="ml-1" size="1.5rem" />
        </template>
      </template>
      <template v-else> Podle hodnocení </template>
    </button>
  </div>
</template>