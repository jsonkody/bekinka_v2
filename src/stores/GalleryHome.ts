// import { ref, computed } from 'vue'
import type { Photo } from '@/typings/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGalleryHome = defineStore('GalleryHome', () => {
  const photos = ref<Photo[]>([
    {
      name: '1',
      alt: 'V nemocnici s Vášou',
    },
    {
      name: '2',
      alt: '24. konečně domů - po chemoterapi rovnou na štědrý večer',
    },
    {
      name: '3',
      alt: 'Vánoce - bylo mi to krátké a nepohodlné, tak jsme to už vzali všechno 💜',
    },
    {
      name: '4',
      alt: 'Kontrola a čekání v autě',
    },
    {
      name: '5',
      alt: 'S Pennynkou - první paruka :)',
    },
    {
      name: '6',
      alt: ':/',
    },
    {
      name: '7',
      alt: 'Příprava na ztrátu obočí',
    },
    {
      name: '8',
      alt: 'Po operaci - port vede do tepny u srdce',
    },
    {
      name: '9',
      alt: 'Je to náročné',
    },
    {
      name: '10',
      alt: 'Je to náročné',
    },
    {
      name: '11',
      alt: 'Po dvou měsících konečně vylezlo sluníčko',
    },
    {
      name: '12',
      alt: 'Přišla kytička',
    },
    {
      name: '13',
      alt: ":'(",
    },
    {
      name: '14',
      alt: 'V nemocnici',
    },
    {
      name: '15',
      alt: 'Gaming na hematologii',
    },
    {
      name: '16',
      alt: 'S maminkou <3 .. velikonoční vajíčko',
    },
    {
      name: '17',
      alt: 'Zase domů z chemoterapie',
    },
    {
      name: '18',
      alt: 'Ahoj, držte palce',
    },
    {
      name: '19',
      alt: 'Přišla kytička',
    },
    {
      name: '20',
      alt: 'Je to náročné',
    },
    {
      name: '21',
      alt: 'S bráchou',
    },
    {
      name: '22',
      alt: 'Doma',
    },
    {
      name: '23',
      alt: 'Focení u šeříku',
    },
    {
      name: '24',
      alt: 'Focení u šeříku',
    },
    {
      name: '25',
      alt: 'S Vášou na dovolené',
    },
    {
      name: '26',
      alt: 'Proton Center',
    },
    {
      name: '27',
      alt: 'Ve Španělsku s mamkou',
    },
    {
      name: '28',
      alt: 'Španělsko po léčbě',
    },
    {
      name: '29',
      alt: 'S Vášou na dovolené',
    },
    {
      name: '30',
      alt: 'Vlasy a rekonvalescence',
    },
  ])

  return { photos }
})
