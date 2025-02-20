<script setup lang="ts">
const props = defineProps<{
  isDesc: boolean
  fromBest: boolean
  sortByDate: boolean
}>()

const emit = defineEmits<{
  (e: 'update:isDesc', value: boolean): void
  (e: 'update:fromBest', value: boolean): void
  (e: 'update:sortByDate', value: boolean): void
}>()

const handleDateClick = () => {
  if (props.sortByDate) {
    emit('update:isDesc', !props.isDesc)
  } else {
    emit('update:sortByDate', true)
  }
}

const handleScoreClick = () => {
  if (props.sortByDate) {
    emit('update:sortByDate', false)
  } else {
    emit('update:fromBest', !props.fromBest)
  }
}
</script>

<template>
  <div>
    <!-- Date Sort -->
    <button
      @click="handleDateClick"
      class="font-asap font-semibold text-lg cursor-pointer p-2 focus:outline-none trans"
      :class="{
        'text-pink-400 hover:text-pink-300': sortByDate,
        'text-purple-300 opacity-30 hover:opacity-50': !sortByDate,
      }"
    >
      <template v-if="isDesc">
        Od nejnovějších
        <IconComponent name="ArrDown" />
      </template>
      <template v-else>
        Od nejstarších
        <IconComponent name="ArrUp" />
      </template>
    </button>

    <!-- Score Sort -->
    <button
      @click="handleScoreClick"
      class="font-asap font-semibold text-lg cursor-pointer p-2 focus:outline-none trans"
      :class="{
        'text-purple-300 opacity-30 hover:opacity-50': sortByDate,
        'text-pink-400 hover:text-pink-300': !sortByDate,
      }"
    >
      <template v-if="fromBest"> Od nejlepších <IconComponent name="ArrDown" /> </template>
      <template v-else> Od nejhorších <IconComponent name="ArrUp" /> </template>
    </button>
  </div>
</template>

<style scoped>
.trans {
  transition: all 0.2s ease-in-out;
}
</style>
