import type { Picture } from '@/typings/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGalleryHome = defineStore('GalleryHome', () => {
  const pictures = ref<Picture[]>([
    {
      name: '1',
      description: 'V nemocnici s Vášou',
    },
    {
      name: '2',
      description: '24. konečně domů - po chemoterapi rovnou na štědrý večer',
    },
    {
      name: '3',
      description: 'Vánoce - bylo mi to krátké a nepohodlné, tak jsme to už vzali všechno 💜',
    },
    {
      name: '4',
      description: 'Kontrola a čekání v autě',
    },
    {
      name: '5',
      description: 'S Pennynkou - první paruka :)',
    },
    {
      name: '6',
      description: ':/',
    },
    {
      name: '7',
      description: 'Příprava na ztrátu obočí',
    },
    {
      name: '8',
      description: 'Po operaci - port vede do tepny u srdce',
    },
    {
      name: '9',
      description: 'Je to náročné',
    },
    {
      name: '10',
      description: 'Je to náročné',
    },
    {
      name: '11',
      description: 'Po dvou měsících konečně vylezlo sluníčko',
    },
    {
      name: '12',
      description: 'Přišla kytička',
    },
    {
      name: '13',
      description: ":'(",
    },
    {
      name: '14',
      description: 'V nemocnici',
    },
    {
      name: '15',
      description: 'Gaming na hematologii',
    },
    {
      name: '16',
      description: 'S maminkou <3 .. velikonoční vajíčko',
    },
    {
      name: '17',
      description: 'Zase domů z chemoterapie',
    },
    {
      name: '18',
      description: 'Ahoj, držte palce',
    },
    {
      name: '19',
      description: 'Přišla kytička',
    },
    {
      name: '20',
      description: 'Je to náročné',
    },
    {
      name: '21',
      description: 'S bráchou',
    },
    {
      name: '22',
      description: 'Doma',
    },
    {
      name: '23',
      description: 'Focení u šeříku',
    },
    {
      name: '24',
      description: 'Focení u šeříku',
    },
    {
      name: '25',
      description: 'S Vášou na dovolené',
    },
    {
      name: '26',
      description: 'Proton Center',
    },
    {
      name: '27',
      description: 'Ve Španělsku s mamkou',
    },
    {
      name: '28',
      description: 'Španělsko po léčbě',
    },
    {
      name: '29',
      description: 'S Vášou na dovolené',
    },
    {
      name: '30',
      description: 'Vlasy a rekonvalescence',
    },
  ])

  return { pictures }
})
