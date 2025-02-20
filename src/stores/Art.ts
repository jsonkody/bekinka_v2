// import { ref, computed } from 'vue'
import type { Photo } from '@/typings/types'
import { defineStore } from 'pinia'

export const useArt = defineStore('Art', () => {
  const photos: Photo[] = [
    {
      name: 'out_of_time_girl',
      width: 200,
      height: 200,
      alt: 'Out of time girl',
    },
    {
      name: 'noface_ghost',
      width: 200,
      height: 200,
      alt: 'No face ghost',
    },
    {
      name: 'curious_girl_boo',
      width: 200,
      height: 200,
      alt: 'Boo, Curious girl',
    },
    {
      name: 'daniel_fortesque',
      width: 200,
      height: 200,
      alt: 'Sir Daniel Fortesque',
    },
    {
      name: 'cake_grogu',
      width: 200,
      height: 200,
      alt: 'Grogu, happy birthday',
    },
    {
      name: 'muffin_ned',
      width: 200,
      height: 200,
      alt: 'Ned, HAPPY BIRTHDAY',
    },
    {
      name: 'dark_void',
      width: 200,
      height: 200,
      alt: 'ėM, Sad one',
    },
    {
      name: 'demonia2',
      width: 200,
      height: 200,
      alt: 'D3MONÌA',
    },
    {
      name: 'demonia',
      width: 200,
      height: 200,
      alt: 'D3MONÌA',
    },
    {
      name: 'shadow_hunter_kassandra',
      width: 200,
      height: 200,
      alt: 'Kasandra, shadow hunter',
    },
    {
      name: 'zayda_the_rabbit',
      width: 200,
      height: 200,
      alt: 'Zayda, the rabbit',
    },
    {
      name: 'dangerous_beauty_ravena',
      width: 200,
      height: 200,
      alt: 'Ravena, dangerous beauty',
    },
    {
      name: 'hrom_the_tired_djinn',
      width: 200,
      height: 200,
      alt: 'Hjôm, The Tired djin',
    },
    {
      name: 'shadow_rogue_auerra',
      width: 200,
      height: 200,
      alt: 'Auerra, The Shadow rogue',
    },
    {
      name: 'munai',
      width: 200,
      height: 200,
      alt: 'Munåi, The Moon seed',
    },
    {
      name: 'medusa',
      width: 200,
      height: 200,
      alt: 'Medisā, Medusa of Death',
    },
    {
      name: 'horizon',
      width: 200,
      height: 200,
      alt: 'Bring Me the Horizon',
    },
    {
      name: 'my_dad',
      width: 200,
      height: 200,
      alt: 'Dárek pro tátu',
    },
    {
      name: 'death_stranding',
      width: 200,
      height: 200,
      alt: 'Death Stranding',
    },
    {
      name: 'monomoke_mask',
      width: 200,
      height: 200,
      alt: 'Mononoke mask',
    },
    {
      name: 'freya',
      width: 200,
      height: 200,
      alt: 'Freya',
    },
    {
      name: 'star_guardian_bekhi',
      width: 200,
      height: 200,
      alt: 'Bekhi, The Star Guardian',
    },
    {
      name: 'hamster_bou',
      width: 200,
      height: 200,
      alt: 'Křeček Bou',
    },
    {
      name: 'hunter',
      width: 200,
      height: 200,
      alt: 'Bloodborne, hunter',
    },
    {
      name: 'elf_with_butterfly',
      width: 200,
      height: 200,
      alt: 'Elfka s motýlem',
    },
    {
      name: 'pastyr',
      width: 200,
      height: 200,
      alt: 'Svatební dar pro rodinu věřících',
    },
    {
      name: 'runningupthehill',
      width: 200,
      height: 200,
      alt: 'Scéna ze Stranger Things tak jak tam nikdy nebyla',
    },
    {
      name: 'brother',
      width: 200,
      height: 200,
      alt: 'Brácha Dan',
    },
    {
      name: 'boyfriend',
      width: 200,
      height: 200,
      alt: 'Přítel Vašek',
    },
    {
      name: 'me',
      width: 200,
      height: 200,
      alt: 'Já',
    },
    {
      name: 'jihiro',
      width: 200,
      height: 200,
      alt: 'Hrdinka mého nejoblíbenějšího filmu všech dob',
    },
    {
      name: 'malenia',
      width: 200,
      height: 200,
      alt: 'Ano, začala jsem s kreslenim těsně před Elden Ringem',
    },
    {
      name: 'ned2',
      width: 200,
      height: 200,
      alt: 'Ned pro Davida',
    },
    {
      name: 'ned',
      width: 200,
      height: 200,
      alt: 'Ned pro Davida',
    },
    {
      name: 'grogu2',
      width: 200,
      height: 200,
      alt: 'Grogu pro Petu',
    },
    {
      name: 'grogu',
      width: 200,
      height: 200,
      alt: 'Grogu',
    },
    {
      name: 'sylvanas',
      width: 200,
      height: 200,
      alt: 'Sylvanas pro Daneka',
    },
  ]

  return { photos }
})
