// import { ref, computed } from 'vue'
import type { Photo } from '@/typings/types'
import { defineStore } from 'pinia'

export const useArt = defineStore('Art', () => {
  const photos: Photo[] = [
    {
      name: 'out_of_time_girl',
      alt: 'Out of time girl',
    },
    {
      name: 'noface_ghost',
      alt: 'No face ghost',
    },
    {
      name: 'curious_girl_boo',
      alt: 'Boo, Curious girl',
    },
    {
      name: 'daniel_fortesque',
      alt: 'Sir Daniel Fortesque',
    },
    {
      name: 'cake_grogu',
      alt: 'Grogu, happy birthday',
    },
    {
      name: 'muffin_ned',
      alt: 'Ned, HAPPY BIRTHDAY',
    },
    {
      name: 'dark_void',
      alt: 'ėM, Sad one',
    },
    {
      name: 'demonia2',
      alt: 'D3MONÌA',
    },
    {
      name: 'demonia',
      alt: 'D3MONÌA',
    },
    {
      name: 'shadow_hunter_kassandra',
      alt: 'Kasandra, shadow hunter',
    },
    {
      name: 'zayda_the_rabbit',
      alt: 'Zayda, the rabbit',
    },
    {
      name: 'dangerous_beauty_ravena',
      alt: 'Ravena, dangerous beauty',
    },
    {
      name: 'hrom_the_tired_djinn',
      alt: 'Hjôm, The Tired djin',
    },
    {
      name: 'shadow_rogue_auerra',
      alt: 'Auerra, The Shadow rogue',
    },
    {
      name: 'munai',
      alt: 'Munåi, The Moon seed',
    },
    {
      name: 'medusa',
      alt: 'Medisā, Medusa of Death',
    },
    {
      name: 'horizon',
      alt: 'Bring Me the Horizon',
    },
    {
      name: 'my_dad',
      alt: 'Dárek pro tátu',
    },
    {
      name: 'death_stranding',
      alt: 'Death Stranding',
    },
    {
      name: 'monomoke_mask',
      alt: 'Mononoke mask',
    },
    {
      name: 'freya',
      alt: 'Freya',
    },
    {
      name: 'star_guardian_bekhi',
      alt: 'Bekhi, The Star Guardian',
    },
    {
      name: 'hamster_bou',
      alt: 'Křeček Bou',
    },
    {
      name: 'hunter',
      alt: 'Bloodborne, hunter',
    },
    {
      name: 'elf_with_butterfly',
      alt: 'Elfka s motýlem',
    },
    {
      name: 'pastyr',
      alt: 'Svatební dar pro rodinu věřících',
    },
    {
      name: 'runningupthehill',
      alt: 'Scéna ze Stranger Things tak jak tam nikdy nebyla',
    },
    {
      name: 'brother',
      alt: 'Brácha Dan',
    },
    {
      name: 'boyfriend',
      alt: 'Přítel Vašek',
    },
    {
      name: 'me',
      alt: 'Já',
    },
    {
      name: 'jihiro',
      alt: 'Hrdinka mého nejoblíbenějšího filmu všech dob',
    },
    {
      name: 'malenia',
      alt: 'Ano, začala jsem s kreslenim těsně před Elden Ringem',
    },
    {
      name: 'ned2',
      alt: 'Ned pro Davida',
    },
    {
      name: 'ned',
      alt: 'Ned pro Davida',
    },
    {
      name: 'grogu2',
      alt: 'Grogu pro Petu',
    },
    {
      name: 'grogu',
      alt: 'Grogu',
    },
    {
      name: 'sylvanas',
      alt: 'Sylvanas pro Daneka',
    },
  ]

  return { photos }
})
