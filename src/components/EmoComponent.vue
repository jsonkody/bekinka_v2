<script setup lang="ts">
import type { EmoteObj } from '@/typings/types'
import { computed, useSlots, ref, watchEffect } from 'vue'
import { emotes } from './Emotes'

const slots = useSlots()
const emote_size = 30
const raw_text = ref('')

// Funkce pro escapování speciálních znaků v regexu (aby např. <3 nezbořilo regex)
const escape_regex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Regex získá všechny klíče emotů. Závorky ( ) zajistí, že při použití
// funkce split() samotný oddělovač (emote) nezmizí z výsledného pole.
const emote_regex = computed(() => {
  const keys = Object.keys(emotes).map(escape_regex)
  return new RegExp(`(${keys.join('|')})`, 'g')
})

// Vytáhneme text ze slotu, abychom zachovali možnost psát obsah rovnou do tagu
watchEffect(() => {
  const default_slot = slots.default?.()
  if (!default_slot) {
    raw_text.value = ''
    return
  }

  // Bezpečně spojíme text ze všech uzlů uvnitř slotu
  raw_text.value = default_slot
    .map((node) =>
      typeof node.children === 'string' ? node.children : String(node.children || ''),
    )
    .join('')
})

type ParsedChunk =
  | { id: number; type: 'emote'; value: EmoteObj; raw: string }
  | { id: number; type: 'text'; raw: string }

const parsed_chunks = computed<ParsedChunk[]>(() => {
  if (!raw_text.value) return []

  return (
    raw_text.value
      .split(emote_regex.value)
      // Přidáme návratový typ : ParsedChunk přímo sem:
      .map((chunk, index): ParsedChunk => {
        const emote_data = emotes[chunk]

        if (emote_data) {
          return { id: index, type: 'emote', value: emote_data, raw: chunk }
        }

        return { id: index, type: 'text', raw: chunk }
      })
      .filter((chunk) => chunk.raw !== '')
  )
})
</script>

<template>
  <span class="whitespace-pre-wrap">
    <template v-for="chunk in parsed_chunks" :key="chunk.id">
      <span v-if="chunk.type === 'text'">{{ chunk.raw }}</span>

      <span v-else-if="chunk.type === 'emote' && chunk.value.type === 'emoji'">
        {{ chunk.value.emoji }}
      </span>

      <img
        v-else-if="chunk.type === 'emote'"
        class="inline-block rounded-sm align-middle"
        :src="`/images/emo/${chunk.value.type}/${chunk.value.name}.${chunk.value.type}`"
        :title="chunk.value.name"
        :alt="chunk.value.name"
        :width="emote_size"
        :height="emote_size"
        loading="lazy"
      />
    </template>
  </span>
</template>
