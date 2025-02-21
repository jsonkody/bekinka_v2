// import { ref, computed } from 'vue'
import type { Photo } from '@/typings/types'
import { defineStore } from 'pinia'

export const useGalleryHome = defineStore('GalleryHome', () => {
  const photos: Photo[] = [
    {
      name: '1',
      alt: 'První hospitalizace',
    },
    {
      name: '2',
      alt: 'První hospitalizace',
    },
    {
      name: '3',
      alt: 'První hospitalizace',
    },
    {
      name: '4',
      alt: 'První hospitalizace',
    },
    {
      name: '5',
      alt: 'První hospitalizace',
    },
    {
      name: '6',
      alt: 'Bolesti',
    },
    {
      name: '7',
      alt: 'Beky a Váša (přítel)',
    },
    {
      name: '8',
      alt: 'Přišla kytička',
    },
    {
      name: '9',
      alt: 'Beky / Beki / Beka / Bekinka / Rebeca :)',
    },
    {
      name: '10',
      alt: 'Lepší den',
    },
    {
      name: '11',
      alt: 'Horší den',
    },
    {
      name: '12',
      alt: ':(',
    },
    {
      name: '13',
      alt: ":'(",
    },
    {
      name: '14',
      alt: 'Prášky na bolest asi zabraly :)',
    },
    {
      name: '15',
      alt: ":'(",
    },
    {
      name: '16',
      alt: 'Pennynka & Bekinka',
    },
    {
      name: '17',
      alt: 'Je to náročné',
    },
    {
      name: '18',
      alt: 'Je to náročné',
    },
    {
      name: '19',
      alt: 'Je to náročné',
    },
    {
      name: '20',
      alt: 'Je to náročné',
    },
    {
      name: '21',
      alt: 'Beki a táta',
    },
    {
      name: '22',
      alt: 'Doma',
    },
    {
      name: '23',
      alt: 'Zase v nemocnici',
    },
    {
      name: '24',
      alt: 'Beky a mamka',
    },
    {
      name: '25',
      alt: 'Já a Beki - zrovna radioaktivní v proton centru',
    },
    {
      name: '26',
      alt: 'Desetimetrové kapačky :O',
    },
    {
      name: '27',
      alt: 'Proton Center',
    },
    {
      name: '28',
      alt: 'Beki a Já (starší brácha Daniel - JsonKody)',
    },
    {
      name: '29',
      alt: 'Beki a Páťa (mladší brácha Patrick)',
    },
    {
      name: '30',
      alt: 'V nemocnici',
    },
    // {
    //   name: "31",
    //   width: 150,
    //   height: 200,
    //   alt: 'Oooo .. TV :)',
    // },
    // {
    //   name: "32",
    //   width: 150,
    //   height: 200,
    //   alt: 'Banán',
    // },
    // {
    //   name: "33",
    //   width: 150,
    //   height: 200,
    //   alt: 'ThumbsUp',
    // },
    // {
    //   name: "34",
    //   width: 150,
    //   height: 200,
    //   alt: 'Port nainstalován - Cyberpunk 2077',
    // },
    // {
    //   name: "35",
    //   width: 150,
    //   height: 200,
    //   alt: 'Unavená',
    // },
    // {
    //   name: "36",
    //   width: 150,
    //   height: 200,
    //   alt: 'Nemocnice',
    // },
    // {
    //   name: "37",
    //   width: 150,
    //   height: 200,
    //   alt: 'Konečně s Vaškem',
    // },
    // {
    //   name: "38",
    //   width: 150,
    //   height: 200,
    //   alt: 'Po operaci - port vede do tepny u srdce',
    // },
    // {
    //   name: "39",
    //   width: 150,
    //   height: 200,
    //   alt: 'Měření :)',
    // },
    // {
    //   name: "40",
    //   width: 150,
    //   height: 200,
    //   alt: 'Po dvou měsících konečně vylezlo sluníčko',
    // },
    // {
    //   name: "41",
    //   width: 150,
    //   height: 200,
    //   alt: '24. konečně domů - po chemoterapi rovnou na štědrý večer',
    // },
    // {
    //   name: "42",
    //   width: 150,
    //   height: 200,
    //   alt: 'Prví paruka :)',
    // },
    // {
    //   name: "43",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ještě fotka z nemocnice',
    // },
    // {
    //   name: "44",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ještě fotka z nemocnice',
    // },
    // {
    //   name: "45",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ještě fotka z nemocnice',
    // },
    // {
    //   name: "46",
    //   width: 150,
    //   height: 200,
    //   alt: 'Šťastné a veselé - rodina',
    // },
    // {
    //   name: "47",
    //   width: 150,
    //   height: 200,
    //   alt: 'Mamka doma dělá salát na Vánoce a má Beku na videohovoru z nemocnice :)',
    // },
    // {
    //   name: "48",
    //   width: 150,
    //   height: 200,
    //   alt: 'Krátké vlásky + studený ručník na bolesti hlavy po chemo',
    // },
    // {
    //   name: "49",
    //   width: 150,
    //   height: 200,
    //   alt: 'Krátké vlásky',
    // },
    // {
    //   name: "50",
    //   width: 150,
    //   height: 200,
    //   alt: 'V půjčeném autě, čekání na výsledky z krve - čekárna byla plná lidí, a Beki se pri chemo nesmi nakazit + sezení jí bolí',
    // },
    // {
    //   name: "51",
    //   width: 150,
    //   height: 200,
    //   alt: 'Bekinki Svjet (pojmenovano podle discord serveru - interni meme ;) )',
    // },
    // {
    //   name: "52",
    //   width: 150,
    //   height: 200,
    //   alt: 'Bolesti hlavy po chemo',
    // },
    // {
    //   name: "53",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ještě z auta - někdo chtěl vědět co je to ten port',
    // },
    // {
    //   name: "54",
    //   width: 150,
    //   height: 200,
    //   alt: 'Unavená po chemo, hlava stále bolí',
    // },
    // {
    //   name: "55",
    //   width: 150,
    //   height: 200,
    //   alt: 'Hlava je asi lepší :D',
    // },
    // {
    //   name: "56",
    //   width: 150,
    //   height: 200,
    //   alt: 'Unavená doma',
    // },
    // {
    //   name: "57",
    //   width: 150,
    //   height: 200,
    //   alt: 'Dorazil dárešek :) Ghibliotéka',
    // },
    // {
    //   name: "58",
    //   width: 150,
    //   height: 200,
    //   alt: 'Maminka uvařila ňamku :)',
    // },
    // {
    //   name: "59",
    //   width: 150,
    //   height: 200,
    //   alt: 'Pořádnej zásobník',
    // },
    // {
    //   name: "60",
    //   width: 150,
    //   height: 200,
    //   alt: 'Květiny od Bubliny <3',
    // },
    // {
    //   name: "61",
    //   width: 150,
    //   height: 200,
    //   alt: 'Bylo mi to krátké a nepohodlné, tak jsme to už vzali všechno 💜',
    // },
    // {
    //   name: "62",
    //   width: 150,
    //   height: 200,
    //   alt: 'Bylo mi to krátké a nepohodlné, tak jsme to už vzali všechno 💜',
    // },
    // {
    //   name: "63",
    //   width: 150,
    //   height: 200,
    //   alt: 'Triss Merigold-Ranuncul',
    // },
    // {
    //   name: "64",
    //   width: 150,
    //   height: 200,
    //   alt: '"Multipasss!"',
    // },
    // {
    //   name: "65",
    //   width: 150,
    //   height: 200,
    //   alt: 'Sakura',
    // },
    // {
    //   name: "66",
    //   width: 150,
    //   height: 200,
    //   alt: 'Alice',
    // },
    // {
    //   name: "67",
    //   width: 150,
    //   height: 200,
    //   alt: 'Sophie',
    // },
    // {
    //   name: "68",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ciri',
    // },
    // {
    //   name: "69",
    //   width: 150,
    //   height: 200,
    //   alt: "Sinéad O'Connor",
    // },
    // {
    //   name: "70",
    //   width: 150,
    //   height: 200,
    //   alt: 'Trochu předbíháme - druhá chemoterapie',
    // },
    // {
    //   name: "71",
    //   width: 150,
    //   height: 200,
    //   alt: 'Nemocnice - vraťme se ale o týden zpět :O',
    // },
    // {
    //   name: "72",
    //   width: 150,
    //   height: 200,
    //   alt: 'Doma s Vaškem',
    // },
    // {
    //   name: "73",
    //   width: 150,
    //   height: 200,
    //   alt: 'Dostala jsem květiny od tety Dráži a sestřenky Elišky <3',
    // },
    // {
    //   name: "74",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ciri & Penny 💚💛🧡',
    // },
    // {
    //   name: "75",
    //   width: 150,
    //   height: 200,
    //   alt: 'Beki & Penny',
    // },
    // {
    //   name: "76",
    //   width: 150,
    //   height: 200,
    //   alt: 'Hvězda těsně před koncertem :O',
    // },
    // {
    //   name: "77",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ano! V sobotu před chemo jsme byli celý den v Kutné Hoře na výletě a Beki to celé zvládla 😁 (a to před měsícem nemohla ani dojít na záchod 😥)',
    // },
    // {
    //   name: "78",
    //   width: 150,
    //   height: 200,
    //   alt: 'Další dárek od Elišky',
    // },
    // {
    //   name: "79",
    //   width: 150,
    //   height: 200,
    //   alt: 'Část peněz ze sbírky byla použita na zaplacení části tohoto autíčka .. seznamte se .. Hugo xDDD',
    // },
    // {
    //   name: "80",
    //   width: 150,
    //   height: 200,
    //   alt: 'Hurááááá .. jedeme na první výlet v novém autě a vlastně na první výlet od doby co mi bylo špatně :D',
    // },
    // {
    //   name: "81",
    //   width: 150,
    //   height: 200,
    //   alt: 'Na doporučení od tety se zastavujeme v Nových Dvorech v restauraci U Hájků',
    // },
    // {
    //   name: "82",
    //   width: 150,
    //   height: 200,
    //   alt: 'Beki & Váša',
    // },
    // {
    //   name: "83",
    //   width: 150,
    //   height: 200,
    //   alt: 'Pořádně najezeni jsme vyrazili na cestu za sv. Barborkou .. Beki & Váša 2',
    // },
    // {
    //   name: "84",
    //   width: 150,
    //   height: 200,
    //   alt: 'S maminkou <3 ..',
    // },
    // {
    //   name: "85",
    //   width: 150,
    //   height: 200,
    //   alt: 'a se starším bráchou Danem - JsonKody',
    // },
    // {
    //   name: "86",
    //   width: 150,
    //   height: 200,
    //   alt: 'Tohle už jsme viděli v traileru xD',
    // },
    // {
    //   name: "87",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ještě s maminkou. Byla docela kosa :O',
    // },
    // {
    //   name: "88",
    //   width: 150,
    //   height: 200,
    //   alt: 'Už se připozdívá - zvládli jsme celý den!',
    // },
    // {
    //   name: "89",
    //   width: 150,
    //   height: 200,
    //   alt: 'Byl to skvělý výlet :)',
    // },
    // {
    //   name: "90",
    //   width: 150,
    //   height: 200,
    //   alt: 'A krásný den <3',
    // },
    // {
    //   name: "91",
    //   width: 150,
    //   height: 200,
    //   alt: 'No dobrá, tady je část našeho oběda U Hájků - zbytek je tajemství :D',
    // },
    // {
    //   name: "92",
    //   width: 150,
    //   height: 200,
    //   alt: 'A tady je můj fondán z kavárny, kam se běžel Dan rozmrazit :)',
    // },
    // {
    //   name: "93",
    //   width: 150,
    //   height: 200,
    //   alt: 'Takže teď jsem zase v nemocnici na týden na druhém kole chemo',
    // },
    // {
    //   name: "94",
    //   width: 150,
    //   height: 200,
    //   alt: 'Ale díky rodině a vám všem ...',
    // },
    // {
    //   name: "95",
    //   width: 150,
    //   height: 200,
    //   alt: 'se cítím o hodně silnější  💚💛🧡',
    // },
    // {
    //   name: "96",
    //   width: 150,
    //   height: 200,
    //   alt: 'PewDiePie obal dorazil do nemocnice :D .. zde vidíte pravý bekiSmile',
    // },
  ]

  return { photos }
})
