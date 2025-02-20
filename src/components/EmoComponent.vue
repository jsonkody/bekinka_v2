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
  bekiSmile: {
    type: 'webp',
    name: 'bekiSmile',
  },
  bekiLurk: {
    type: 'webp',
    name: 'bekiLurk',
  },
  KEKW: {
    type: 'webp',
    name: 'KEKW',
  },
  KEKLEO: {
    type: 'webp',
    name: 'KEKLEO',
  },
  bekiChamp: {
    type: 'webp',
    name: 'bekiChamp',
  },
  bekiRagey: {
    type: 'webp',
    name: 'bekiRagey',
  },
  bekiSleeper: {
    type: 'webp',
    name: 'bekiSleeper',
  },
  bekiStare: {
    type: 'webp',
    name: 'bekiStare',
  },
  bekiSure: {
    type: 'webp',
    name: 'bekiSure',
  },
  bekiKek: {
    type: 'webp',
    name: 'bekiKek',
  },
  bekiMald: {
    type: 'webp',
    name: 'bekiMald',
  },
  bekiStar: {
    type: 'webp',
    name: 'bekiStar',
  },
  bekiPray: {
    type: 'webp',
    name: 'bekiPray',
  },
  bekiPog: {
    type: 'webp',
    name: 'bekiPog',
  },
  bekiMeh: {
    type: 'webp',
    name: 'bekiMeh',
  },
  bekiKona: {
    type: 'webp',
    name: 'bekiKona',
  },
  bekiAha: {
    type: 'webp',
    name: 'bekiAha',
  },
  bekiClown: {
    type: 'webp',
    name: 'bekiClown',
  },
  bekiCmon: {
    type: 'webp',
    name: 'bekiCmon',
  },
  bekiCoze: {
    type: 'webp',
    name: 'bekiCoze',
  },
  bekiDementos: {
    type: 'webp',
    name: 'bekiDementos',
  },
  bekiDiosMios: {
    type: 'webp',
    name: 'bekiDiosMios',
  },
  bekiOk: {
    type: 'webp',
    name: 'bekiOk',
  },
  bekiTired: {
    type: 'webp',
    name: 'bekiTired',
  },
  bekiWeirdo: {
    type: 'webp',
    name: 'bekiWeirdo',
  },
  LUL: {
    type: 'webp',
    name: 'LUL',
  },
  bekiMlady: {
    type: 'webp',
    name: 'bekiMlady',
  },
  bekiBlankies: {
    type: 'webp',
    name: 'bekiBlankies',
  },
  oooo: {
    type: 'webp',
    name: 'oooo',
  },
  pogTasty: {
    type: 'webp',
    name: 'pogTasty',
  },
  bekiPls: {
    type: 'webp',
    name: 'bekiPls',
  },
  Clap: {
    type: 'webp',
    name: 'Clap',
  },
  catJAM: {
    type: 'webp',
    name: 'catJAM',
  },
  andullHello: {
    type: 'webp',
    name: 'andullHello',
  },
  shilLove: {
    type: 'webp',
    name: 'shilLove',
  },
  shilEZY: {
    type: 'webp',
    name: 'shilEZY',
  },
  bekiNerd: {
    type: 'webp',
    name: 'bekiNerd',
  },
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
                 src="/images/emo/${emote.name}.${emote.type}"
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
