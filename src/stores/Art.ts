// import { ref, computed } from 'vue'
import type { Photo } from '@/typings/types'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useArt = defineStore('Art', () => {
  const photos = ref<Photo[]>([
    {
      name: '1_sylvanas',
      alt: '',
    },
    {
      name: '2_grogu',
      alt: '',
    },
    {
      name: '3_ned',
      alt: '',
    },
    {
      name: '4_malenia',
      alt: '',
    },
    {
      name: '5_jihiro',
      alt: '',
    },
    {
      name: '6_me',
      alt: '',
    },
    {
      name: '7_boyfriend',
      alt: '',
    },
    {
      name: '8_brother',
      alt: '',
    },
    {
      name: '9_runningupthehill',
      alt: '',
    },
    {
      name: '10_shepherd',
      alt: '',
    },
    {
      name: '11_elf_with_butterfly',
      alt: '',
    },
    {
      name: '12_good_hunter',
      alt: '',
    },
    {
      name: '13_hamster',
      alt: '',
    },
    {
      name: '14_bekhi',
      alt: '',
    },
    {
      name: '15_freya',
      alt: '',
    },
    {
      name: '16_mononoke_mask',
      alt: '',
    },
    {
      name: '17_death_stranding',
      alt: '',
    },
    {
      name: '18_my_dad',
      alt: '',
    },
    {
      name: '19_bmt_horizon',
      alt: '',
    },
    {
      name: '20_medisa',
      alt: '',
    },
    {
      name: '21_munai',
      alt: '',
    },
    {
      name: '22_auerra',
      alt: '',
    },
    {
      name: '23_hjom',
      alt: '',
    },
    {
      name: '24_ravena',
      alt: '',
    },
    {
      name: '25_zayda',
      alt: '',
    },
    {
      name: '26_kasandra',
      alt: '',
    },
    {
      name: '27_d3monia',
      alt: '',
    },
    {
      name: '28_sad_one',
      alt: '',
    },
    {
      name: '29_ned',
      alt: '',
    },
    {
      name: '30_goru',
      alt: '',
    },
    {
      name: '31_daniel_fortesque',
      alt: '',
    },
    {
      name: '32_boo',
      alt: '',
    },
    {
      name: '33_no_face_ghost',
      alt: '',
    },
    {
      name: '34_out_of_time_girl',
      alt: '',
    },
    {
      name: '35_cheryl_mason',
      alt: '',
    },
    {
      name: '36_hellga',
      alt: '',
    },
    {
      name: '37_hida',
      alt: '',
    },
    {
      name: '38_darrke',
      alt: '',
    },
    {
      name: '39_beauty',
      alt: '',
    },
    {
      name: '40_butterfli_girl',
      alt: '',
    },
    {
      name: '41_coraline',
      alt: '',
    },
    {
      name: '42_princess_mononoke',
      alt: '',
    },
    {
      name: '43_diablo',
      alt: '',
    },
    {
      name: '44_chihiro',
      alt: '',
    },
    {
      name: '45_delicate_weapon',
      alt: '',
    },
    {
      name: '46_sirena',
      alt: '',
    },
    {
      name: '47_nea',
      alt: '',
    },
    {
      name: '48_ela',
      alt: '',
    },
    {
      name: '49_staria',
      alt: '',
    },
    {
      name: '50_alesa',
      alt: '',
    },
    {
      name: '51_lea',
      alt: '',
    },
    {
      name: '52_boh',
      alt: '',
    },
    {
      name: '53_darka',
      alt: '',
    },
    {
      name: '54_sleepy',
      alt: '',
    },
    {
      name: '55_vessel',
      alt: '',
    },
    {
      name: '56_cheryl_mason',
      alt: '',
    },
    {
      name: '57_thalia_lyra',
      alt: '',
    },
    {
      name: '58_feng_min',
      alt: '',
    },
    {
      name: '59_the_artist',
      alt: '',
    },
    {
      name: '60_sable_ward',
      alt: '',
    },
    {
      name: '61_katara',
      alt: '',
    },
    {
      name: '62_wasek',
      alt: '',
    },
    {
      name: '63_studiez_1',
      alt: '',
    },
    {
      name: '64_padme',
      alt: '',
    },
    {
      name: '65_geralt',
      alt: '',
    },
    {
      name: '66_senua_hellblade',
      alt: '',
    },
    {
      name: '67_melina',
      alt: '',
    },
    {
      name: '68_gw1_necromancer',
      alt: '',
    },
    {
      name: '69_gw1_monk',
      alt: '',
    },
    {
      name: '70_elden_king',
      alt: '',
    },
    {
      name: '71_mr_chapadlak',
      alt: '',
    },
    {
      name: '72_next_gen_bmth',
      alt: '',
    },
    {
      name: '73_courtney_la_plante',
      alt: '',
    },
    {
      name: '74_maria_sh',
      alt: '',
    },
    {
      name: '75_mary_sh',
      alt: '',
    },
    {
      name: '76_upgrade',
      alt: '',
    },
    {
      name: '77_happy_christmas_sh',
      alt: '',
    },
    {
      name: '78_jack_skelington',
      alt: '',
    },
    {
      name: '79_studiez_2',
      alt: '',
    },
    {
      name: '80_lilith',
      alt: '',
    },
    {
      name: '81_mantis',
      alt: '',
    },
    {
      name: '82_corsets_study',
      alt: '',
    },
    {
      name: '83_bayonetta',
      alt: '',
    },
    {
      name: '84_ciri',
      alt: '',
    },
    {
      name: '85_galadriel',
      alt: '',
    },
    {
      name: '86_bex',
      alt: '',
    },
    {
      name: '87_plava_laguna',
      alt: '',
    },
  ])

  const is_desc = ref(true)

  const sort_photos = () => {
    photos.value.sort((a, b) => {
      const numA = parseInt(a.name.split('_')[0], 10)
      const numB = parseInt(b.name.split('_')[0], 10)
      return is_desc.value ? numB - numA : numA - numB
    })
  }

  watch(is_desc, () => {
    sort_photos()
  })

  sort_photos()

  return { is_desc, photos }
})
