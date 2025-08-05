// import { ref, computed } from 'vue'
import type { Picture } from '@/typings/types'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useGalleryArt = defineStore('GalleryArt', () => {
  const fancybox_config = {
    Thumbs: {
      type: 'modern' as const,
    },
    Carousel: {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['fullscreen', 'close'],
        },
      },
    },
  }

  const pictures = ref<Picture[]>([
    // {
    //   name: '1_sylvanas',
    //   description: 'sylvanas #1',
    // },
    // {
    //   name: '2_grogu',
    //   description: 'grogu #2',
    // },
    // {
    //   name: '3_ned',
    //   description: 'ned #3',
    // },
    {
      name: '4_malenia',
      description: 'malenia #4',
    },
    {
      name: '5_jihiro',
      description: 'jihirø #5',
    },
    {
      name: '6_me',
      description: 'me #6',
    },
    {
      name: '7_boyfriend',
      description: 'boyfriend #7',
    },
    {
      name: '8_brother',
      description: 'brøther #8',
    },
    {
      name: '9_runningupthehill',
      description: 'runningupthehill #9',
    },
    // {
    //   name: '10_shepherd',
    //   description: 'Pastýř',
    // },
    // {
    //   name: '11_elf_with_butterfly',
    //   description: 'Elf with butterfly',
    // },
    // {
    //   name: '12_good_hunter',
    //   description: 'Bloodborne, Good hunter',
    // },
    {
      name: '13_hamster',
      description: 'Spirited Away, hamster',
    },
    {
      name: '14_bekhi',
      description: 'Bekhi, The Star Guardian',
    },
    {
      name: '15_freya',
      description: 'Freya',
    },
    {
      name: '16_mononoke_mask',
      description: 'Mononoke mask',
    },
    {
      name: '17_death_stranding',
      description: 'Death Stranding',
    },
    {
      name: '18_my_dad',
      description: 'My dad',
    },
    {
      name: '19_bmt_horizon',
      description: 'Bring me the Horizon',
    },
    // {
    //   name: '20_medisa',
    //   description: 'Medisā, Medusa of Death',
    // },
    // {
    //   name: '21_munai',
    //   description: 'Munåi, The Moon seed',
    // },
    // {
    //   name: '22_auerra',
    //   description: 'Auerra, The Shadow rogue',
    // },
    {
      name: '23_hjom',
      description: 'Hjôm, The Tired djin',
    },
    // {
    //   name: '24_ravena',
    //   description: 'Ravena, dangerous beauty',
    // },
    {
      name: '25_zayda',
      description: 'Zayda, the rabbit',
    },
    // {
    //   name: '26_kasandra',
    //   description: 'Kasandra, shadow hunter',
    // },
    {
      name: '27_d3monia',
      description: 'D3MONÌA',
    },
    {
      name: '28_sad_one',
      description: 'ėM, Sad one',
    },
    {
      name: '29_ned',
      description: 'Ned, HAPPY BIRTHDAY',
    },
    {
      name: '30_goru',
      description: 'Grogu, happy birthday',
    },
    {
      name: '31_daniel_fortesque',
      description: 'Sir Daniel Fortesque',
    },
    {
      name: '32_boo',
      description: 'Boo, Curious girl',
    },
    {
      name: '33_no_face_ghost',
      description: 'No face ghost',
    },
    {
      name: '34_out_of_time_girl',
      description: 'out_of_time_girl',
    },
    {
      name: '35_cheryl_mason',
      description: 'Cheryl Mason from Dead by Daylight',
    },
    {
      name: '36_hellga',
      description: 'Hellga',
    },
    {
      name: '37_hida',
      description: 'Hida',
    },
    // {
    //   name: '38_darrke',
    //   description: 'Darrkē',
    // },
    {
      name: '39_beauty',
      description: 'Every body is beautiful in some way',
    },
    {
      name: '40_butterfli_girl',
      description: 'Butterfli-girl',
    },
    {
      name: '41_coraline',
      description: 'Coraline',
    },
    {
      name: '42_princess_mononoke',
      description: 'Princess Mononoke',
    },
    {
      name: '43_diablo',
      description: 'Diablo',
    },
    {
      name: '44_chihiro',
      description: 'Chihiro',
    },
    {
      name: '45_delicate_weapon',
      description: 'Delicate weapon',
    },
    {
      name: '46_sirena',
      description: 'Siréna',
    },
    {
      name: '47_nea',
      description: 'Nea',
    },
    {
      name: '48_ela',
      description: 'Ela',
    },
    {
      name: '49_staria',
      description: 'Ståria',
    },
    {
      name: '50_alesa',
      description: 'Alessa',
    },
    {
      name: '51_lea',
      description: 'Lea',
    },
    {
      name: '52_boh',
      description: 'Boh',
    },
    {
      name: '53_darka',
      description: 'Darka',
    },
    // {
    //   name: '54_sleepy',
    //   description: 'ii sleepy',
    // },
    {
      name: '55_vessel',
      description: 'Vessel, Sleep Token',
    },
    {
      name: '56_cheryl_mason',
      description: 'Cheryl Mason from DBD',
    },
    {
      name: '57_thalia_lyra',
      description: 'Thalita Lyra, Dead by Daylight',
    },
    {
      name: '58_feng_min',
      description: 'Feng Min',
    },
    {
      name: '59_the_artist',
      description: 'The Artist',
    },
    {
      name: '60_sable_ward',
      description: 'Sable Ward',
    },
    {
      name: '61_katara',
      description: 'Katara',
    },
    {
      name: '62_wasek',
      description: 'Wasek',
    },
    {
      name: '63_studiez_1',
      description: 'Studiez 1',
    },
    {
      name: '64_padme',
      description: 'Padme',
    },
    {
      name: '65_geralt',
      description: 'Geralt The Witcher',
    },
    {
      name: '66_senua_hellblade',
      description: 'Senua, Hellblade',
    },
    {
      name: '67_melina',
      description: 'Melina, Elden Ring',
    },
    {
      name: '68_gw1_necromancer',
      description: 'Necromancer from Guild Wars 1',
    },
    {
      name: '69_gw1_monk',
      description: 'Monk from Guild Wars 1',
    },
    {
      name: '70_elden_king',
      description: 'Elden Ring / Elden Lord (!! ELDEN KING !! - pozn. od JsonKody)',
    },
    {
      name: '71_mr_chapadlak',
      description: 'mr_chapadlak',
    },
    {
      name: '72_next_gen_bmth',
      description: 'NexGen Bring Me The Horizon',
    },
    {
      name: '73_courtney_la_plante',
      description: 'Courtney LaPlante, Spiritbox',
    },
    {
      name: '74_maria_sh',
      description: 'Maria, Silent Hill',
    },
    {
      name: '75_mary_sh',
      description: 'Mary, Silent Hill 2',
    },
    {
      name: '76_upgrade',
      description: 'UPGRADE',
    },
    {
      name: '77_happy_christmas_sh',
      description: 'happy christmas from silent hill',
    },
    {
      name: '78_jack_skelington',
      description: 'Jack Skelington - Snowman',
    },
    // {
    //   name: '79_studiez_2',
    //   description: 'Studiez2',
    // },
    {
      name: '80_lilith',
      description: 'Lilith, Diablo IV',
    },
    {
      name: '81_mantis',
      description: 'Mantis, Marvel Rivals',
    },
    // {
    //   name: '82_corsets_study',
    //   description: 'Corsets, study',
    // },
    {
      name: '83_bayonetta',
      description: 'Bayonetta',
    },
    {
      name: '84_ciri',
      description: 'Ciri, The Witcher',
    },
    {
      name: '85_galadriel',
      description: 'Galadriel, Lord of the Rings',
    },
    {
      name: '86_bex',
      description: 'Bex, Me',
    },
    {
      name: '87_plava_laguna',
      description: 'Plava Laguna, Fifth Element',
    },
    {
      name: '88_malenia',
      description: 'Malenia, Elden Ring',
    },
    {
      name: '89_nightblade',
      description: 'Nightblade',
    },
    {
      name: '90_orin_the_red',
      description: 'Orin The Red, Baldurs Gate 3',
    },
    {
      name: '91_revenant_nightreign',
      description: 'Revenant, Elden Ring Nightreign',
    },
  ])

  const is_desc = ref(true)

  // const shuffle = () => {
  //   for (let i = pictures.value.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1))
  //     ;[pictures.value[i], pictures.value[j]] = [pictures.value[j], pictures.value[i]]
  //   }
  // }

  const sort_photos = () => {
    pictures.value.sort((a, b) => {
      const numA = parseInt(a.name.split('_')[0], 10)
      const numB = parseInt(b.name.split('_')[0], 10)
      return is_desc.value ? numB - numA : numA - numB
    })
  }

  const is_mobile = ref(window.innerWidth < 768)
  window.addEventListener('resize', () => {
    is_mobile.value = window.innerWidth < 768
  })

  const animate_and_sort = () => {
    sort_photos()

    // if (is_mobile.value) {
    //   sort_photos()
    //   return
    // }

    // // on PC shuffle then sort - better animation
    // shuffle()
    // setTimeout(() => {
    //   sort_photos()
    // }, 300)
  }

  watch(is_desc, () => {
    animate_and_sort()
  })

  // animate_and_sort()
  sort_photos()

  return { is_desc, pictures, fancybox_config }
})
