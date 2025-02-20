<script setup lang="ts">
import { ref, watchEffect, useSlots } from 'vue'

interface EmoteObj {
  type: 'emoji' | 'webp' | 'avif' | 'gif'
  emoji?: string
  name?: string
}

type EmotesObj = Record<string, EmoteObj>

const slots = useSlots()
const emoteSize = 30
const processedHtml = ref('')

const emotes: EmotesObj = {
  '&lt;3': { type: 'emoji', emoji: '💜' },
  ':)': { type: 'emoji', emoji: '😃' },
  ':D': { type: 'emoji', emoji: '😄' },
  Clap: { type: 'webp', name: 'Clap' },
  andullHello: { type: 'webp', name: 'andullHello' },
  bekiPray: { type: 'webp', name: 'bekiPray' },
  bekiPog: { type: 'webp', name: 'bekiPog' },
  bekiAha: { type: 'webp', name: 'bekiAha' },
  bekiLurk: { type: 'webp', name: 'bekiLurk' },
  bekiBlankies: { type: 'webp', name: 'bekiBlankies' },
  // ... (doplňte ostatní emote definice)
}

const processContent = (text: string) => {
  return text
    .split(/\s+/)
    .map((word) => {
      const emote = emotes[word.trim()]
      if (!emote) return word

      if (emote.type === 'emoji') {
        return emote.emoji
      }

      if (['avif', 'gif', 'webp'].includes(emote.type)) {
        return `<img class="inline-block rounded"
                 src="/src/assets/images/emo/${emote.name}.${emote.type}"
                 title="${emote.name}"
                 alt="${emote.name}"
                 width="${emoteSize}"
                 height="${emoteSize}" />`
      }

      return word
    })
    .join(' ')
}

watchEffect(() => {
  //@ts-ignore
  const slotContent = slots.default?.()?.[0]?.children || ''
  processedHtml.value = processContent(String(slotContent))
})
</script>

<template>
  <span class="font-asap" v-html="processedHtml"></span>
</template>
