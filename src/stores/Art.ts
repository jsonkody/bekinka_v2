// import { ref, computed } from 'vue'
import type { Photo } from '@/typings/types'
import { defineStore } from 'pinia'

export const useArt = defineStore('Art', () => {
  const photos: Photo[] = [
    {
      name: 'bex-hex-asset',
      alt: 'Bex hex asset - toto je taky AVIF iPhone test!',
      type: 'avif',
    },
    {
      name: 'out_of_time_girl',
      alt: 'Out of time girl',
      type: 'webp',
    },
    {
      name: 'noface_ghost',
      alt: 'No face ghost',
      type: 'webp',
    },
    {
      name: 'curious_girl_boo',
      alt: 'Boo, Curious girl',
      type: 'webp',
    },
    {
      name: 'daniel_fortesque',
      alt: 'Sir Daniel Fortesque',
      type: 'webp',
    },
    {
      name: 'cake_grogu',
      alt: 'Grogu, happy birthday',
      type: 'webp',
    },
    {
      name: 'muffin_ned',
      alt: 'Ned, HAPPY BIRTHDAY',
      type: 'webp',
    },
    {
      name: 'dark_void',
      alt: 'ėM, Sad one',
      type: 'webp',
    },
    {
      name: 'demonia2',
      alt: 'D3MONÌA',
      type: 'webp',
    },
    {
      name: 'demonia',
      alt: 'D3MONÌA',
      type: 'webp',
    },
    {
      name: 'shadow_hunter_kassandra',
      alt: 'Kasandra, shadow hunter',
      type: 'webp',
    },
    {
      name: 'zayda_the_rabbit',
      alt: 'Zayda, the rabbit',
      type: 'webp',
    },
    {
      name: 'dangerous_beauty_ravena',
      alt: 'Ravena, dangerous beauty',
      type: 'webp',
    },
    {
      name: 'hrom_the_tired_djinn',
      alt: 'Hjôm, The Tired djin',
      type: 'webp',
    },
    {
      name: 'shadow_rogue_auerra',
      alt: 'Auerra, The Shadow rogue',
      type: 'webp',
    },
    {
      name: 'munai',
      alt: 'Munåi, The Moon seed',
      type: 'webp',
    },
    {
      name: 'medusa',
      alt: 'Medisā, Medusa of Death',
      type: 'webp',
    },
    {
      name: 'horizon',
      alt: 'Bring Me the Horizon',
      type: 'webp',
    },
    {
      name: 'my_dad',
      alt: 'Dárek pro tátu',
      type: 'webp',
    },
    {
      name: 'death_stranding',
      alt: 'Death Stranding',
      type: 'webp',
    },
    {
      name: 'monomoke_mask',
      alt: 'Mononoke mask',
      type: 'webp',
    },
    {
      name: 'freya',
      alt: 'Freya',
      type: 'webp',
    },
    {
      name: 'star_guardian_bekhi',
      alt: 'Bekhi, The Star Guardian',
      type: 'webp',
    },
    {
      name: 'hamster_bou',
      alt: 'Křeček Bou',
      type: 'webp',
    },
    {
      name: 'hunter',
      alt: 'Bloodborne, hunter',
      type: 'webp',
    },
    {
      name: 'elf_with_butterfly',
      alt: 'Elfka s motýlem',
      type: 'webp',
    },
    {
      name: 'pastyr',
      alt: 'Svatební dar pro rodinu věřících',
      type: 'webp',
    },
    {
      name: 'runningupthehill',
      alt: 'Scéna ze Stranger Things tak jak tam nikdy nebyla',
      type: 'webp',
    },
    {
      name: 'brother',
      alt: 'Brácha Dan',
      type: 'webp',
    },
    {
      name: 'boyfriend',
      alt: 'Přítel Vašek',
      type: 'webp',
    },
    {
      name: 'me',
      alt: 'Já',
      type: 'webp',
    },
    {
      name: 'jihiro',
      alt: 'Hrdinka mého nejoblíbenějšího filmu všech dob',
      type: 'webp',
    },
    {
      name: 'malenia',
      alt: 'Ano, začala jsem s kreslenim těsně před Elden Ringem',
      type: 'webp',
    },
    {
      name: 'ned2',
      alt: 'Ned pro Davida',
      type: 'webp',
    },
    {
      name: 'ned',
      alt: 'Ned pro Davida',
      type: 'webp',
    },
    {
      name: 'grogu2',
      alt: 'Grogu pro Petu',
      type: 'webp',
    },
    {
      name: 'grogu',
      alt: 'Grogu',
      type: 'webp',
    },
    {
      name: 'sylvanas',
      alt: 'Sylvanas pro Daneka',
      type: 'webp',
    },
  ]

  return { photos }
})
