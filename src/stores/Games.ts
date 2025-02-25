import { ref, computed } from 'vue'
import type { Game } from '@/typings/types'
import { defineStore } from 'pinia'

export const useGames = defineStore('Games', () => {
  enum Genre {
    Adventure = 101,
    RPG = 102,
    FPS = 103,
    Shooter = 104,
    Racing = 105,
    HackNslash = 106,
    Horror = 107,
    Survival = 108,
    Puzzle = 109,
    Platform = 110,
    Simulator = 111,
    Souls = 112,
    Indie = 113,
    MMO = 114,
  }

  interface GenreObj {
    title: string
    id: number
  }

  const genres: Record<Genre, GenreObj> = {
    [Genre.Adventure]: { title: 'Adventura', id: Genre.Adventure },
    [Genre.RPG]: { title: 'RPG', id: Genre.RPG },
    [Genre.FPS]: { title: 'FPS', id: Genre.FPS },
    [Genre.Shooter]: { title: 'Střílečka', id: Genre.Shooter },
    [Genre.Racing]: { title: 'Závodní', id: Genre.Racing },
    [Genre.HackNslash]: { title: 'Mlátička', id: Genre.HackNslash },
    [Genre.Horror]: { title: 'Hororovka', id: Genre.Horror },
    [Genre.Survival]: { title: 'Survival', id: Genre.Survival },
    [Genre.Puzzle]: { title: 'Logická', id: Genre.Puzzle },
    [Genre.Platform]: { title: 'Plošinovka', id: Genre.Platform },
    [Genre.Simulator]: { title: 'Simulátor', id: Genre.Simulator },
    [Genre.Souls]: { title: 'Souls', id: Genre.Souls },
    [Genre.Indie]: { title: 'Nezávislá', id: Genre.Indie },
    [Genre.MMO]: { title: 'MMO', id: Genre.MMO },
  }

  // Reaktivní stav
  const gameName = ref('')
  const genre = ref<Genre>()
  const isDesc = ref(true)
  const fromBest = ref(true)
  const sortByDate = ref(true)
  const games = get_data()

  const handleChangeGenre = (new_genre: Genre) => {
    if (new_genre === genre.value) {
      genre.value = undefined
      return
    }
    genre.value = new_genre
  }

  // Metody
  const changeGenre = (g: Genre | undefined) => {
    gameName.value = ''
    genre.value = genre.value === g ? undefined : g
  }

  const setSearch = (e: Event) => {
    genre.value = undefined
    gameName.value = (e.target as HTMLInputElement).value
  }

  // Computed property pro filtrované hry
  const filteredGames = computed(() => {
    return games
      .sort((a, b) => {
        if (sortByDate.value) {
          return isDesc.value ? b.index - a.index : a.index - b.index
        }
        return fromBest.value
          ? (b.rating || 0) - (a.rating || 0)
          : (a.rating || 0) - (b.rating || 0)
      })
      .filter((game) => {
        if (genre.value) return game.genre.includes(genre.value)
        return true
      })
      .filter((game) => game.title.toLowerCase().includes(gameName.value.toLowerCase()))
  })

  function get_data(): Game[] {
    return [
      {
        index: 1,
        title: 'Witcher 2',
        requested: 'JsonKody',
        rating: 90,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: '🙂',
        text: `Na doporučení od bráchy...`,
        img: { url: 'co1wy4' },
      },
      {
        index: 2,
        title: 'Witcher 3',
        requested: 'Danek94CZ',
        rating: 99,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: '😀',
        text: `Witcher 3 je perfektní hra - dokonalý svět, postavy i příběh. Nejlepší fantasy hra, kterou si mužeš zahrát. TOP!`,
        img: {
          url: 'co1wyy',
        },
      },
      {
        index: 3,
        title: 'Far Cry 3',
        requested: 'JsonKody',
        rating: 93,
        genre: [Genre.FPS, Genre.Adventure],
        emoji: '😅',
        text: `Úžasná střílečka s příběhem, kterej tě dojme až k slzám? To je Far Cry 3! A má naprosto dokonalej soundtrack.`,
        img: {
          url: 'co1vpd',
        },
      },
      {
        index: 4,
        title: 'Far Cry 4',
        requested: undefined,
        rating: 75,
        genre: [Genre.FPS, Genre.Adventure],
        emoji: '😟',
        text: `Oproti předchozímu dílu je čtyřka o dost slabší, příběh nemastnej neslanej a jenom lehce vylepšená hratelnost.
      Jestli ti ale stačí obstojná řežba, bez kdovíjak srdceryvného příběhu, je to fajn odpočinková záležitost.`,
        img: {
          url: 'co2npa',
        },
      },
      {
        index: 5,
        title: 'Last of Us',
        requested: undefined,
        rating: 96,
        genre: [Genre.Adventure],
        emoji: '😍',
        text: `Jedna z nejdokonalejších her co kdy spatřila světlo světa! Postavy i příběh si jednoduše musí zamilovat každý,
        kdo má srdce na správném místě. Druhý díl je za mě ještě lepší. Na PS je to MUST PLAY!`,
        img: {
          url: 'co1r7f',
        },
      },
      {
        index: 6,
        title: 'Tomb Raider',
        requested: undefined,
        rating: 75,
        genre: [Genre.Adventure],
        emoji: '😈',
        text: `Lařiny kopečky jsou pěkné a dokonce i gameplay je good. Lara mě svojí uřvaností sice občas otravovala,
        ale příběh má pár skvělých momentů co stojí za to prožít. A hraje se to jedna báseň.`,
        img: {
          url: 'co1rbu',
        },
      },
      {
        index: 7,
        title: 'Rise of the Tomb Raider',
        requested: undefined,
        rating: 70,
        genre: [Genre.Adventure],
        emoji: '👿',
        text: `Nudnější příběh, nudnější Lara, nudnější lokace. Ale pořád to dokáže být místy zábavné.
      Tvář a kopečky Lary jsou ale trochu hezčí než posledně, takže to nakonec nebude tak zlé ;)`,
        img: {
          url: 'co1rqa',
        },
      },
      {
        index: 8,
        title: 'Uncharted 4',
        requested: undefined,
        rating: 94,
        genre: [Genre.Adventure],
        emoji: '🤠',
        text: `Za mě je Uncharted 4 lepší, domyšlenejší a hezčí Tomb Raider. Nathan Drake sice nemá postavu jako Lara,
        ale ten příběh stojí za to! Určitě vás chytne za srdíčko. Vřele doporučuji ;)`,
        img: {
          url: 'co1r7h',
        },
      },
      {
        index: 9,
        title: 'GTA V',
        requested: undefined,
        rating: 80,
        genre: [Genre.Adventure, Genre.Racing, Genre.Shooter],
        emoji: '🤑 ',
        text: `Příběh GTA V je fajn, ale druhý den na něj zapomeneš. Sranda spíš začíná po splnění příběhové linky nebo v Multiplayeru.
      Pokud máš rád spoustu volnosti a možností, bude to pro tebe dokonalá hra.`,
        img: {
          url: 'co2lbd',
        },
      },
      {
        index: 10,
        title: 'South Park: The Stick of Truth',
        requested: undefined,
        rating: 88,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: '😆',
        text: `Jestli miluješ South Park budeš milovat i tuto hru. SoT má skvělej soubojovej systém - zábavnej a dostatečně jednoduchej.
      Ale největší plus hry je rozhodně humor! Totální vtipnej RPG nářez :D`,
        img: {
          url: 'co1v8x',
        },
      },
      {
        index: 11,
        title: 'Uncharted Lost Legacy',
        requested: undefined,
        rating: 70,
        genre: [Genre.Adventure],
        emoji: '🤠',
        text: `Nádherná krajina. To je jediné co si vybavím z hraní tohohle kratšího titulu. Příběh má šest hodin a takže je to spíše takový
      dezert pro Uncharted fanoušky.`,
        img: {
          url: 'co1tp9',
        },
      },
      {
        index: 12,
        title: 'God of War',
        requested: undefined,
        rating: 95,
        genre: [Genre.Adventure, Genre.HackNslash],
        emoji: '💪😡',
        text: `Pro mě první setkání s Kratosem, a totálně mě dostalo. Ta hratelnost! Dle mého je to jedna z nejzábavnějších her co znám.
      Příběh je skvělý, krajiny dechberoucí a zabíjení se jentak neomrzí. Určitě se nebudeš nudit!`,
        img: {
          url: 'co1tmu',
        },
      },
      {
        index: 13,
        title: 'Resident Evil 2',
        requested: 'JsonKody',
        rating: 89,
        genre: [Genre.Horror, Genre.Survival],
        emoji: '💊☂️',
        text: `Jednou si budeš připadat jako nejvetší badass, jindy budeš brečet ať už to skončí. Příběh obou hlavních postav je
      vyprávěn ve dvou propletených dějových linkách, takže pro real-ending musíte dohrát obě. Enjoy! Přeju pevný nervy.`,
        img: {
          url: 'co1ir3',
        },
      },
      {
        index: 14,
        title: 'A Plague Tale: Innocence',
        requested: undefined,
        rating: 96,
        genre: [Genre.Adventure, Genre.Indie],
        emoji: '🐀🐭🐁',
        text: `Dokonalá “pohádková” hra. Tahle hra určitě každého chytne za srdce. Prostředí je odporně krásné a skvělý příběh
      všechen ten hnus vyrovnává. Tak přestaň číst a mazej zachránit brášku Huga!`,
        img: {
          url: 'co1lat',
        },
      },
      {
        index: 15,
        title: 'Mafia II',
        requested: undefined,
        rating: 90,
        genre: [Genre.Adventure, Genre.Racing, Genre.Shooter],
        emoji: '🕵️',
        text: `Vito! Mafia II je velmi kvalitní pařba z mafiánského prostředí, lepší nenajdeš! Více říkat netřeba.
      Spíše by mě zajímalo, kdo by chtěl za kámoše Joea?!`,
        img: {
          url: 'co2n13',
        },
      },
      {
        index: 16,
        title: 'Portal 2',
        requested: 'JsonKody',
        rating: 65,
        genre: [Genre.Platform, Genre.Puzzle],
        emoji: '🕳️',
        text: `Velmi chytrá hra pro chytré hráče. Proto byla pro mě spíše utrpení 😅 Ale musím ocenit velmi kvalitně
      zpracovaný příběh a celkový "feeling" ze hry.`,
        img: {
          url: 'co1rs4',
        },
      },
      {
        index: 17,
        title: 'Life is Strange',
        requested: undefined,
        rating: 50,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: '🕒',
        text: `Life is Strange mi bohužel vůbec nesedlo. Tempo je velmi pomalé, bez akce a příbeh mě moc nezaujal.`,
        img: {
          url: 'co1r8e',
        },
      },
      {
        index: 18,
        title: 'Crysis 3',
        requested: 'JsonKody',
        rating: 50,
        genre: [Genre.FPS],
        emoji: '👾',
        text: `Crysis 3 má perfektní multiplayer, ale slabší příbeh v singleplayeru. Pokud jseš kovanej pařan FPSek
      bude se ti asi líbit, ale pro mě to úplně nebylo.`,
        img: {
          url: 'co28p6',
        },
      },
      {
        index: 19,
        title: 'Mafia',
        requested: undefined,
        rating: 80,
        genre: [Genre.Adventure, Genre.Shooter, Genre.Racing],
        emoji: '🚬💎',
        text: `Mafia je skvělá. Na její průchod nikdy nezapomenu. Teď se musím omluvit všem srdcařům, ale já jakožto
      zoomer jsem si více užila remake verzi.`,
        img: {
          url: 'co1qrt',
        },
      },
      {
        index: 20,
        title: 'BioShock Infinite',
        requested: undefined,
        rating: 70,
        genre: [Genre.FPS, Genre.Adventure],
        emoji: '🗽',
        text: `Zajímavý gameplay, zajímavý příbeh. V půlce jsem si ale bohužel přála, aby to už skončilo.
      Trochu zklamání - čekala jsem víc.`,
        img: {
          url: 'co2n12',
        },
      },
      {
        index: 21,
        title: 'LIMBO',
        requested: undefined,
        rating: 70,
        genre: [Genre.Adventure, Genre.Puzzle, Genre.Indie],
        emoji: '😬',
        text: `Moc pěkná atmosférická hra. I když se ve hře neřekne jediné slovo, každý pochopí o čem to je.`,
        img: {
          url: 'co1qrs',
        },
      },
      {
        index: 22,
        title: 'INSIDE',
        requested: undefined,
        rating: 72,
        genre: [Genre.Adventure, Genre.Puzzle, Genre.Indie],
        emoji: '😶',
        text: `Jako nástupce je Inside Limbu podobé, ale propracovanější, delší a smutnější.`,
        img: {
          url: 'co2fca',
        },
      },
      {
        index: 23,
        title: 'GRIS',
        requested: undefined,
        rating: 82,
        genre: [Genre.Platform, Genre.Indie],
        emoji: '👩',
        text: `Za mě nejkrásnější skákačka, kterou jsem kdy viděla. Zábavná hratelnost a nádherné prostředí.
      Úrovně rozdělené po barvách, roztomilí kamarádíčci, dojemný příbeh. To vše tato hra má.`,
        img: {
          url: 'co1qv5',
        },
      },
      {
        index: 24,
        title: 'Firewatch',
        requested: undefined,
        rating: 77,
        genre: [Genre.Adventure, Genre.Indie],
        emoji: '🔥',
        text: `Hra jako žádná jiná. Velmi jedinečný vizuál i příběh. Chvílemi mi ale přišla zbytecně zdlouhavá.`,
        img: {
          url: 'co1m35',
        },
      },
      {
        index: 25,
        title: 'Outlast',
        requested: undefined,
        rating: 2,
        genre: [Genre.Horror],
        emoji: '😱',
        text: `STOP - ANI TO NEZKOUŠEJ ZAPÍNAT! A jestli tě moje varování neodradilo, doporucuji: jas na 100% a Pampers
      Premium Care 1 Newborn pleny (78ks).`,
        img: {
          url: 'co1yat',
        },
      },
      {
        index: 26,
        title: 'Trine 4',
        requested: undefined,
        rating: 60,
        genre: [Genre.Platform],
        emoji: '⚗️',
        text: `Trine 4 je kouzelná hra. Doporučuji ji ale hrát s přáteli v co-opu - alespoň ve dvou, pak je to skvělá
      řež a zábava.`,
        img: {
          url: 'co1qsm',
        },
      },
      {
        index: 27,
        title: 'Papers, Please',
        requested: undefined,
        rating: 80,
        genre: [Genre.Puzzle, Genre.Simulator, Genre.Indie],
        emoji: '📝',
        text: `Super hra. Vvypadá tak snadně. No řekněme že po pár hodinách hraní ti mrtvá tchýně a nemocný syn budou
      připadat jako celkem dobrej kompromis 😅`,
        img: {
          url: 'co1vep',
        },
      },
      {
        index: 28,
        title: 'The Evil Within 2',
        requested: undefined,
        rating: 88,
        genre: [Genre.Adventure, Genre.Shooter, Genre.Horror],
        emoji: '💀',
        text: `Pro mě veliké překvapení. Střílení je zábavné, hledání hnusáků taky. A příběh super, co víc si přát?`,
        img: {
          url: 'co1y8x',
        },
      },
      {
        index: 29,
        title: 'Heavy Rain',
        requested: undefined,
        rating: 70,
        genre: [Genre.Adventure],
        emoji: '🌧️🌧️',
        text: `Hra mi byla vychválena, ale abych řekla pravdu, zas tolik mě nedostala. Main story je dojemné, ale
      pokud jste tele, rozsype se vám jako domeček z karet :(`,
        img: {
          url: 'co2lpl',
        },
      },
      {
        index: 30,
        title: 'The Wolf Among Us',
        requested: undefined,
        rating: 55,
        genre: [Genre.Adventure],
        emoji: '🐺',
        text: `Hra o nejznámějších pohádkách, které nejsou zas tak pohádkové. Hrajete za Vlka z Karkulky a řešíte
      vraždy pohádkových postav. Nápad zajímavý, ale provedení pokulhává. Bohužel.`,
        img: {
          url: 'co1rcy',
        },
      },
      {
        index: 31,
        title: 'Resident Evil 7',
        requested: 'NearZoner',
        rating: 90,
        genre: [Genre.Horror, Genre.Survival],
        emoji: '♿',
        text: `Hororovka, která stojí za to! A to jsem človek co se bojí jít večer na záchod! Takže konec výmluv
      mazej zachránit svoji skvělou přítelkyni.`,
        img: {
          url: 'co1vcl',
        },
      },
      {
        index: 32,
        title: 'Far Cry 5',
        requested: 'Gollfy',
        rating: 80,
        genre: [Genre.FPS, Genre.Adventure],
        emoji: '☁️👼⛅',
        text: `Hra o hipsterovi, co si myslí že je Bůh. Je zábavnejší jak předešlý díl a má zajímavější příbeh.
      Napište mi ale, až tu hru projdete pouze s pistolkou jako já! BIG FLEX 😅`,
        img: {
          url: 'co21a6',
        },
      },
      {
        index: 33,
        title: 'Shadow of the Tomb Raider',
        requested: undefined,
        rating: 82,
        genre: [Genre.Adventure],
        emoji: '👥',
        text: `Rozhodně nejzajímavější díl z celé série. Příběh dává smysl, Lara méně piští a brečí. Podle mě super!`,
        img: {
          url: 'co1vcn',
        },
      },
      {
        index: 34,
        title: 'Alan Wake',
        requested: 'Koreek',
        rating: 69,
        genre: [Genre.Adventure, Genre.Horror],
        emoji: '🔋🔦',
        text: `Má to něco do sebe ALE - po hodinách bezcílného běhání s baterkou už doslova brečíte, aby tam už bylo
      něco z příběhu. Zážitek asi jako kdyby jste meli snist malou porci uzasneho jidla a pak tři pecny suchého chleba ...
      a tak pořád dokola.`,
        img: {
          url: 'co2dft',
        },
      },
      {
        index: 35,
        title: 'The Last of Us II',
        requested: 'Croofy7',
        rating: 99,
        genre: [Genre.Adventure, Genre.Survival],
        emoji: '😭',
        text: `WTF? Co to je?! Emoce jako kdybyste jeli na horské dráze a zároveň koukali na Shindlerův seznam.
      U žádné hry jsem nikdy nebrečela. Kromě jedné. OPRAVA: teď už u dvou .. ehm .. RedDeadII`,
        img: {
          url: 'co1r0o',
        },
      },
      {
        index: 36,
        title: 'Ghost of Tsushima',
        requested: undefined,
        rating: 97,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: '🗻',
        text: `DOKONALOST! Tahle hra nemá žádnou chybu. Nejzábavnejší bojový systém! Skvělý příběh! A ta krajina? 😍`,
        img: {
          url: 'co2crj',
        },
      },
      {
        index: 37,
        title: 'Resident Evil 3',
        requested: 'NearZoner',
        rating: 70,
        genre: [Genre.Horror, Genre.Survival],
        emoji: '🎃',
        text: `Jak rychle hra začne, tak rychle zase skončí. Smutně krátký, předvídatelný příběh. Škoda 😐`,
        img: {
          url: 'co22l7',
        },
      },
      {
        index: 38,
        title: 'Mafia: Definitive Edition',
        requested: undefined,
        rating: 93,
        genre: [Genre.Adventure, Genre.Shooter, Genre.Racing],
        emoji: '👮',
        text: `Tak tohle bylo super! Doporučuji si ale nejdříve zahrát původní verzi. Tato vám děj ještě rozšíří,
      což je super. Ani minutu jsem se nenudila.`,
        img: {
          url: 'co26vl',
        },
      },
      {
        index: 39,
        title: 'The Elder Scrolls V: Skyrim',
        requested: undefined,
        rating: 82,
        genre: [Genre.RPG],
        emoji: '🐉🐲',
        text: `Hra, která nudně pouze vypadá. Dost jsem ji podcenila. Hlavní příběh je dost krátký. Gameplay
      je spíše než na něm postaven na prozkoumávání světa a na vedlejších úkolech, kterých jsou ve hře stovky.`,
        img: {
          url: 'co1tnw',
        },
      },
      {
        index: 40,
        title: 'Wolfenstein II: The New Colossus',
        requested: 'JsonKody',
        rating: 73,
        genre: [Genre.FPS],
        emoji: '⚡⚡',
        text: `Hodně drsný! Při několika scénách si budeš říkat “What the fu…”. Třeba až před tebou Führer usne ve
      vlastních zvratkách nebo kdyz ti uříznou <SPOIL> a pak ti <SPOIL> <SPOIL>. Enjoy!`,
        img: {
          url: 'co21c5',
        },
      },
      {
        index: 41,
        title: 'Dark Souls 3',
        requested: undefined,
        rating: 83,
        genre: [Genre.RPG, Genre.Souls],
        emoji: '⚔️🔥',
        text: `Oh ano! Můj největší životní úspech. Pokud se toho bojíš, neboj ... po pár hodinách to budeš fetovat. (safeword Ember;)`,
        img: {
          url: 'co1vcf',
        },
      },
      {
        index: 42,
        title: 'Metro Exodus',
        requested: 'NearZoner',
        rating: 80,
        genre: [Genre.FPS],
        emoji: '🚇',
        text: `K tomuto asi jen: neopakujte moji chybu, že jsem začala rovnou třetím dílem a věřím že si tu hru oblíbíte.
      Celkově mě hra překvapila realistickým gameplayem.`,
        img: {
          url: 'co1iuj',
        },
      },
      {
        index: 43,
        title: 'Ghostrunner',
        requested: undefined,
        rating: 75,
        genre: [Genre.Platform, Genre.Shooter],
        emoji: '👻',
        text: `Myslíš si, že nejsi nervák? Zkus si zahrát Ghostrunnera a uvidíme 😉`,
        img: {
          url: 'co2nbk',
        },
      },
      {
        index: 44,
        title: 'Dishonored',
        requested: 'Danek94CZ',
        rating: 80,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: '🐭',
        text: `Neumíš stealth? F5 a F9 budou tví nejlepší kámoši. Hra má zajímavý, místy překvapivý příběh a krásně temnou atmosféru.`,
        img: {
          url: 'co1y2j',
        },
      },
      {
        index: 45,
        title: 'Detroit: Become Human',
        requested: undefined,
        rating: 90,
        genre: [Genre.Adventure, Genre.Puzzle],
        emoji: `👨‍🎤`,
        text: `Mistrovské dílo! Pokud jsi jako já nerozhodný člověk, tahle hra tě vytrénuje. Jde tu pouze o tvoje rozhodování
      a zda ti přežijou postavy nebo celé město je pouze na tobě. S mým koncem jsem byla vcelku spokojená kdybych nepokazila
      ty příšerné time eventy!`,
        img: {
          url: 'co2md2',
        },
      },
      {
        index: 46,
        title: 'GTA San Andreas',
        requested: undefined,
        rating: 90,
        genre: [Genre.Adventure, Genre.Racing, Genre.Shooter],
        emoji: `🚔🚲`,
        text: `Stará hra co nikdy neomrzí! Jako malá jsem hrávala GTA pouze stylem "Jů hele auto! Jdu jezdit!" a netušila jsem
      o jaký poklad se jedná. San Andreas je určitě nejlepší a nejvtipnější díl celé série. V několika momentech jsem
      řvala smíchy - občas ale i vztekem! Kdyby se vynechali letecké mise, byla bych hned spokojenější!`,
        img: {
          url: 'co2lb9',
        },
      },
      {
        index: 47,
        title: 'GTA Vice City',
        requested: undefined,
        rating: 85,
        genre: [Genre.Adventure, Genre.Racing, Genre.Shooter],
        emoji: `🚓🏩`,
        text: `Tommy je drsňák, moc toho nenamluví a humorem obdařen jako CJ nebyl. Hru miluji ale díky atmosféře, vizuálu či
      hudbě která ve hře je. Příběh byl slabší a systém misí alá šetři prachy pro content není úplně můj šálek kávy.
      Jsou tady ale lepší mise s vrtulníčkem jak v SA! 😅`,
        img: {
          url: 'co2lbb',
        },
      },
      {
        index: 48,
        title: 'Red Dead Redemption II',
        requested: undefined,
        rating: 99,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: `🤠🐴`,
        text: `Této hře nejde skoro nic vytknout. U žádné hry/filmu jsem nebrečela jako tady. Hlavní postava je perfektní,
      zasazení je úchvatné, hratelnost je bombastická a zábavná, příběh srcervoucí! Ale bohužel až od půlky hry. Celková
      doba gameplaye se může vyšplhat až na 60-80 hodin a já jsem při prvním průchodu nevydržela déle jak patnáct.
      Rozjezd je velmi pomalý a mrzí mě že hodně lidí to může odradit. Slibuji vám ale, že vydržet stojí za to a hra se stane
      vaší srdcovou záležitostí!`,
        img: {
          url: 'co1q1f',
        },
      },
      {
        index: 49,
        title: "Hellblade: Senua's Sacrifice",
        requested: 'ThaKrejzy, Koreek',
        rating: 85,
        genre: [Genre.Adventure, Genre.HackNslash, Genre.Indie],
        emoji: `❤️‍🔥`,
        text: `Strašně originální hra-námět. Jedná se o hru která ve fantasy světě znázorňuje nemoc zvanou "psychóza".
      Hra byla vytvořena za pomoci odborníků na nemoc a lidí kteří nemocí trpí a ukázuje vám svět očima nemocného člověka.
      Celou hrou vás provází hlasy, které má hlavní postava v hlavě, radí vám, pomlouvají vás, snaží se vás potopit
      nebo vám připomínají vaše životní chyby. Uchvátilo mě že tyto hlasy byly nahrány podobně jako ASMR (closeup našeptávání),
      takže jestli máte sluchátka začnete z toho šílet i vy sami. Zážitek to je pro mě určitě nezapomenutelný.`,
        img: {
          url: 'co2l7l',
        },
      },
      {
        index: 50,
        title: 'Devil May Cry 5',
        requested: 'Levnerko',
        rating: 75,
        genre: [Genre.HackNslash],
        emoji: `😈`,
        text: `Mlátička při které se zastavíš a umřeš, tudíž jsem si před každým hraním protáhla zápěstí a prsty na rukou a stejně jsem je po několika lvlech měla odrovnané.
      Prostředí pekla a zničeného města je pekné a postavy ve hře ještě hezčí. Combíčka mě teda velmi vyčerpávaly ale hra má dobré tempo které vás nutí nezastavovat.
      Nejradši jsem hrála za pana V u kterého bylo nejméně zbraní a kombinací a dokonce měl poskoky, kteří dělali práci za něj.
      Jedná se o pátý díl tak hlavně nebuďte hloupý jako já a začněte dřívějšími díly. PS: hra obsahuje velmi auvajs Danteho moment, buďte na to připravení:D`,
        img: {
          url: 'co1rb4',
        },
      },
      {
        index: 51,
        title: 'Far Cry Primal',
        requested: 'Perma_Terka',
        rating: 50,
        genre: [Genre.FPS, Genre.Adventure],
        emoji: `💩`,
        text: `Už nikdy o té hře nechci slyšet..nejen že se jedná vlastně o naskinovaný 4 díl, hra má strašně moc nudných částí a je skoro nemožné ji dohrát.
          Protože je moc těžká? ne...Po dokončení všech hlavních misí, které musíte získat stavěním domečků lidičkám ve vesnici, se vám ani neobjeví titulky.
          Proč? asi nemáte hotové vedlejší aktivity, třeba uloveného mamuta. To že je to povinné se samozřejmě dozvíte náhodou na internetu protože hra vám to neřekne.
          Příběh je nezajímavý, některé úkoly mě budou spíše sraly a nudily, vedlejší aktivity mě vůbec nelákaly a souboje byly zklamání taky.
          Pro nadšence této doby to zajímavé něčím být může ale zda to stojí za dohrání? spíše ne.`,
        img: {
          url: 'co28ha',
        },
      },
      {
        index: 52,
        title: 'Dying Light',
        requested: 'Danek94cz',
        rating: 70,
        genre: [Genre.Adventure, Genre.Shooter],
        emoji: `⚰️🏃‍`,
        text: `Zombie parkour hra zní zajímavě, bohužel to nebylo úplně moje kafe. Nevyhovalo mi že hra spíše klade důraz na melee zbraně než na střelné, taky příběh mě tolik nezaujal a parkour mi nešel :D
          Hra je pro mě ale určitě nadprůměrná ale nenabídla mi úplně to co jsem očekávala. Více se mi líbila třeba hra Days Gone.
          Chybělo mi tam pár herních mechanik a mapa mi přišla občas hrozně zmatečná, možná jsem ale jen tele :D `,
        img: {
          url: 'co1r7i',
        },
      },
      {
        index: 53,
        title: 'Until Dawn',
        requested: undefined,
        rating: 88,
        genre: [Genre.Adventure],
        emoji: `🎥🔪`,
        text: `Hororovka se studenty na chatě,ve které jsou jejich životy jen ve tvých rukách.
          Pokud neumíš střílet nebo jakkoliv hrát, nevadí, zde totiž pouze rozhoduješ o tom co jaká postava udělá.
          Atmosféra pro mě byla strašně silná, člověk se opravdu bojí zla které tam číhá a ještě víc o to že špatně rozhodne o osudu svých oblíbenců.
          Jsou zde také pasáže kdy se s ovladačem nesmíš ani pohnout a i to ti může pokazit průchod jako mně. Takže dávej bacha a ani nedýchej!`,
        img: {
          url: 'co2s5q',
        },
      },
      {
        index: 54,
        title: 'Diablo III',
        requested: undefined,
        rating: 80,
        genre: [Genre.HackNslash, Genre.RPG],
        emoji: `🔥🔥`,
        text: `Moje první setkání se sérií Diablo a velmi příjemné. Hrála jsem s kamarádem a i vám velmi doporučuji najít si nějakého parťáka.
          Hra je hnedka zábavnější, můžete si pomáhat při dungeonech nebo si vyměňovat itemy. Příběh je velmi zajímavý a hra má skvělou atmosféru.
          Hra je spíše relax než výzva. Pokud chceš ale průchod složitější, na druhý run ti to hra samozřejmě umožní, na to jsem ale už ale něměla :D`,
        img: {
          url: 'co2l1u',
        },
      },
      {
        index: 55,
        title: 'Kingdom Come Deliverence',
        requested: 'Ironstrike97',
        rating: 90,
        genre: [Genre.Adventure, Genre.RPG, Genre.Simulator],
        emoji: `🎲🎲🎲`,
        text: `Popravdě mě tato hra bavila až na druhý průchod. Při prvním jsem po několika hodinách skončila, protože jsem čekala RPG podobné Zaklínači.
          Když mi bylo ale vysvětleno, že na hru se mám koukat spíše na realné zobrazení událostí v 15. století, hned se hra hraje jinak.
          Hra je velmi zábavná, úkoly jsou záživné a postraní aktivity možná ještě více. Díky KCD jsem se naučila hrát kostky a strávila u nich polovinu mého herního času :D
          Po dohrání jsem začala v batohu nosit kostky vlastní a vysvětlovala jsem je všem blízkým. Líbí se mi že hra působí velmi živě a jediný můj problém byly realistické souboje, naštěstí se získanou silou už potom nejsou takový problém.`,
        img: {
          url: 'co1m02',
        },
      },
      {
        index: 56,
        title: 'DOOM 2016',
        requested: 'Veena01',
        rating: 80,
        genre: [Genre.FPS],
        emoji: `👹`,
        text: `Moje první setkání s DOOMEM. Zpočátku docela bolestivá zkušenost, která mě dost vyčerpala (a to jsem ještě něvěděla co mě čeká v Eternalu).
          Jelikož jsem pomalejší osoba, můj průchod hrou byl plný nadávek a nasranosti, což stejně nejspíš k takové hře sedí.
          Soudtrack mě ale po pár hodinách vtáhl takovým způsobem, že lebky démonů lítaly vzduchem. Zhruba v půlce hry jsem zvýšila obtížnost (hard), abych byla za drsňáka :)`,
        img: {
          url: 'co1nc7',
        },
      },
      {
        index: 57,
        title: 'DOOM Eternal',
        requested: undefined,
        rating: 85,
        genre: [Genre.FPS],
        emoji: `👹👹`,
        text: `Nechapu. Nechapu, najeťáky, kteří tohle tempo zvládají.
          Nějakým způsobem jsem to protrpěla, ubylo vlasů, vyschly oči 😬 Po dohrání DLC vlasů už moc nezbylo 💀
          Doom Ethernal je jízda, ze které ale pravděpodobně někde cestou zešílíte 😜 ...`,
        img: {
          url: 'co3lgc',
        },
      },
      {
        index: 58,
        title: 'Cyberpunk 2077',
        requested: 'Levnerko',
        rating: 80,
        genre: [Genre.Shooter, Genre.Racing],
        emoji: `🌃🌃`,
        text: `Příběh je fakt zajímavý, vizuál ještě víc. Jen ta hratelnost, auvajs. Hra je plná bugů a velmi často mi ovládaní přišlo strašně nekomfortní.
          Jela jsem spíše melee build a hackování. Sekání bylo takové neuspokojující, hackování nešikovné a ze střelných zbraní jsem měla vždy divný pocit.
          Po několika hodinách jsem si ale zvykla a díky krásnému vizuálu a příběhu, který se mi líbíl musím tuto hru pochválit, i přes všechny bugy, které snad časem zmizí.`,
        img: {
          url: 'co2mjs',
        },
      },
      {
        index: 59,
        title: 'Resident Evil Village',
        requested: undefined,
        rating: 98,
        genre: [Genre.Adventure, Genre.Horror, Genre.Survival],
        emoji: `🍄`,
        text: `Moje láska! Po dohraní na normální obtížnost jsem ihned zapla druhý průchod na těžkou. To se mi u žádné hry zatím nestalo!
          Ty lokace! Ta atmosféra! Ten příběh! Miluji to vše! AŽ NA MIMINO! Mimino ne-e. Jinak za mě nejlepší díl RE - určitě se k němu ještě vrátím.`,
        img: {
          url: 'co2zpu',
        },
      },
      {
        index: 60,
        title: 'Resident Evil 4',
        requested: undefined,
        rating: 80,
        genre: [Genre.Adventure, Genre.Horror, Genre.Survival],
        emoji: `😒👩`,
        text: `Tato hra mě příjemně překvapila. Jen to ovládání bylo bolestivé a za celou dobu hraní se na to nedalo zvyknout :D
          Jinak příběh jednoduchý, ale bavil mě a občas i rozesmál. Plusové body dávám samozřejmě i za Leona a za dokonalé řvaní slečny Ashley!
          Lokace a hádanky byly pretty good a myslím, že kromě ovládání bylo vše vpořádku.`,
        img: {
          url: 'co2wki',
        },
      },
      {
        index: 61,
        title: 'Days Gone',
        requested: 'Cakvy',
        rating: 90,
        genre: [Genre.Adventure, Genre.Horror, Genre.Survival],
        emoji: `🏃‍  🏃🏻🏃🏻🏃🏻🏃🏻🏃🏻🏃🏻`,
        text: `Nečekala jsem, že mě Days Gone bude tak moc bavit. Hlavní hrdina je sympaťák a příběh je krásně dojemný.
          Některé postavy Vás velmi naštvou, jiné velmi oslní. Moc se mi líbilo, že emoce, které postavy vyjadřovaly byly uvěřitelné a tím pádem jsem se do děje dost vžila.
          Ovládní je skvělé, intuitivní a hra není nijak náročná. Pouze hordy vám občas trochu zatopí.`,
        img: {
          url: 'co1izz',
        },
      },
      {
        index: 62,
        title: 'Untitled Goose Game',
        requested: undefined,
        rating: 70,
        genre: [Genre.Puzzle, Genre.Indie],
        emoji: `🦆`,
        text: `Krásná a roztomilá odreagovačka na pár hodin. Hrála jsem hru když spadly servery v ESO a neměla jsem co dělat se životem.
          Ze srandy jsem ji zapla, ale hra je tak zábavná, že jsem ji rovnou dohrála. Dokonce má v sobě i jednoduchý příběh s v tipným koncem.`,
        img: {
          url: 'co1vqc',
        },
      },
      {
        index: 63,
        title: 'Alien: Isolation',
        requested: 'Koreek',
        rating: 83,
        genre: [Genre.Adventure, Genre.Horror],
        emoji: `👽`,
        text: `UŽ NIKDY! Za mě toto byl nejděsivější zážitek ever! Hra s neuvěřitelnou atmosférou.
          Alien se přizpůsobuje vašemu průchodu, je postupně chytřejší a odolnější, hnus že?
          Ráda bych zmínila i to že hra má neskutečné audio a dech i mrknutí aliena slyšíte krásně na míle daleko, tudíž jsem radši při průchodu ani nedýchala abych ho nevylekala.
          Pokud patříte mezi funily, radši to nezapínejte, najde si Vás jinak hned.`,
        img: {
          url: 'co1vzu',
        },
      },
      {
        index: 64,
        title: 'Star Wars Jedi: Fallen Order',
        requested: 'honzik_2',
        rating: 92,
        genre: [Genre.Adventure, Genre.Souls],
        emoji: `⭐⚔️`,
        text: `Toto bylo pro mě nečekané zamilování. Hra mi dle trailerů nepřišla zajímavá ale JE! HROZNĚ MOC!
          Druhá hra kterou jsem musela instantně dohrát 2x zasebou - podruhé rovnou na nejtěžší obtížnost! Ty mechaniky
          ve hře jsou dokonalé, každá planeta úžasná, hlavní postava je :Kreygasm: a ta hudba!
          ZKRÁTKA JI MILUJI! A i ty budeš, nevadí když nejsi fanda Star Wars!`,
        img: {
          url: 'co1rbi',
        },
      },
      {
        index: 65,
        title: 'Chernobylite',
        requested: undefined,
        rating: 65,
        genre: [Genre.Adventure, Genre.Shooter, Genre.Indie],
        emoji: `⚠️`,
        text: `Auvajs! Hra dobrá, ale úplně něco jiného než jsem čekala. Je to spíše survival a stealth a má mnoho věcí, které by šly udělat jinak.
          Na můj vkus moc upovídaná a zbytečně natahovaná. Ovšem prostředí hry je krásně tajemné a realistické, což je velmi cenné plus.`,
        img: {
          url: 'co39vi',
        },
      },
      {
        index: 66,
        title: "Demon's Souls",
        requested: 'Danek94CZ',
        rating: 89,
        genre: [Genre.RPG, Genre.Souls],
        emoji: `🛡️🤕🗡️`,
        text: `Podle mě nejlepší soulsovka. Z mnoha důvodů. Krása a různorodost bossů i lokací,
               úžasná haptická odezva ovladače a trochu nižší obtížnost bossfightů oproti Dark Souls xD`,
        img: {
          url: 'co2kj9',
        },
      },
      {
        index: 67,
        title: 'Death Stranding',
        requested: undefined,
        rating: 92,
        genre: [Genre.Adventure, Genre.Shooter],
        emoji: `📦👶💥`,
        text: `Hra na kterou nikdy nezapomenete. Dodnes jsou dny, kdy si na hlavní postavu vzpomenu
      a mrzí mě že naše dobrodružství skončilo. Všechno to chození sem a tam, se občas zdá nekonečné,
      ale ten příběh a svět je takovým způsobem zvláštní a složitý, že to rozhodně stojí za to.`,
        img: {
          url: 'co316v',
        },
      },
      {
        index: 68,
        title: 'Kena: Bridge of Spirits',
        requested: 'ThaKrejzy',
        rating: 75,
        genre: [Genre.Adventure, Genre.Souls],
        emoji: `🏹👿💣`,
        text: `Hra je krásná a velmi, velmi zlá! 👿 Pokud se rozhodnete hrát Kenu na nejtežší obtížnost, slibuji že budete nadávat, hodně nadávat ;)
      Roztomilé příšerky jsou potom smrtící, jakoby utekly z Dark Souls. "Easy" je pro děti a "hard" vám zase natrhne zadnice.`,
        img: {
          url: 'co29lc',
        },
      },
      {
        index: 69,
        title: 'Far Cry 6',
        requested: undefined,
        rating: 69,
        genre: [Genre.FPS, Genre.Adventure],
        emoji: `🐊🐓`,
        text: `Far Cry 6 jsem si strašně užila. Ani ne tak kvůli příběhu nebo misím, ale krásnému prostředí. Miluji prostředí Kuby a mapa
      v tomto FC za mě byla nejdokonalejší z celé série. Záporák, hlavní hrdina, příběh a mise nebyly nic extra,
      ale celkově hru doporučuji. Hratelnost je jako u všech dílů super.`,
        img: {
          url: 'co2npg',
        },
      },
      {
        index: 70,
        title: 'The Corridor',
        requested: 'JsonKody',
        rating: 77,
        genre: [Genre.Indie, Genre.Adventure],
        emoji: `🖲️`,
        text: `Velmi originální a vtipná hra. Více nemohu prozradit ... zahraj si to!`,
        img: {
          url: 'co31gj',
        },
      },
      {
        index: 71,
        title: 'Control',
        requested: 'Veena01',
        rating: 60,
        genre: [Genre.Shooter, Genre.Adventure],
        emoji: `🎮`,
        text: `Originální hra se zajímavým gameplayem - ale jen na pár hodin, potom jsem se začala nudit.
      Hlavní hrdinka mi byla nesympatická ... vlastně všechny postavy ve hře. Příběh byl jednoduchý až
      nezajímavý. Ale prostředí hry a vizuál chválím.`,
        img: {
          url: 'co2evj',
        },
      },
      {
        index: 72,
        title: 'The Dark Pictures: Little Hope',
        requested: undefined,
        rating: 75,
        genre: [Genre.Adventure],
        emoji: `💀`,
        text: `Hra je jako film, ve kterém se odehrává vše podle toho jak se v danou situaci člověk rozhodne.
      Příběh mě bavil a postavy byly dobře napsané. U některých by vám ani nevadilo kdyby umřeli a za jiné zas
      bojujete zuby nehty. Jsem pyšná, že jsem zamordovala pouze jednu :D`,
        img: {
          url: 'co20xn',
        },
      },
      {
        index: 73,
        title: 'The Dark Pictures: House of Ashes',
        requested: undefined,
        rating: 70,
        genre: [Genre.Adventure],
        emoji: `💀`,
        text: `Prostředí za mě nic moc. Irák v roce 2003 a postavy vojáci, kteří byly vyslání na misi,
      která se zvrtla. Příběh není špatný a napětí je dost, je to dobře udělaná hra,
      ale za mě slabší než předchozí díl. Navíc u hlavní hrdinky mi vlasně ani nevadí že umřela.`,
        img: {
          url: 'co2kj0',
        },
      },
      {
        index: 74,
        title: 'It Takes Two',
        requested: undefined,
        rating: 90,
        genre: [Genre.Adventure, Genre.Platform],
        emoji: `👪`,
        text: `Nejlepší co-op hra na trhu! Dva manželé před rozvodem jsou proměněni na hadrové panáčky
      a společně se snaží zlomit kletbu. Hra je vtipná, každá lokace či schopnost originální a často vám
      vykouzlí úsměv na tváři.`,
        img: {
          url: 'co2t97',
        },
      },
      {
        index: 75,
        title: 'Riders Republic',
        requested: undefined,
        rating: 85,
        genre: [Genre.Racing],
        emoji: `🚴🏂`,
        text: `Za mě nejlepší závodní hra, i když - moc jsem jich nehrála :D V RR je otevřený svět a
      rovnou několik sportů ve kterých se člověk může poměřovat s kamarády. Hra má skvělou atmosféru, zábavný
      gameplay a krásnou mapu! Je to skvělý relax i pokud nemáte náladu na tryhard. Doporučuji!`,
        img: {
          url: 'co2gkd',
        },
      },
      {
        index: 76,
        title: 'Forza Horizon 5',
        requested: undefined,
        rating: 70,
        genre: [Genre.Racing],
        emoji: `🚗`,
        text: `Na auta nejsem, ani na závodění, ale tahle hra je bezva. Líbí se mi prostředí a custom skiny :D
      Taky je fajn, že si člověk může vybírat z různých druhů závodů, takže si každý najde co ho baví.`,
        img: {
          url: 'co3ofx',
        },
      },
      {
        index: 77,
        title: 'Back 4 Blood',
        requested: undefined,
        rating: 75,
        genre: [Genre.FPS],
        emoji: `👨‍👩‍👧‍👦`,
        text: `Jako milovnice L4D musím říci, že tahle hra je super. Jsou tu podobné mapy i systém boje.
      Vše je ale promakanější a v hezčím plášti. Hlavní mínusy jsou cena a náročné hledání parťáků do hry :/`,
        img: {
          url: 'co2mhj',
        },
      },
      {
        index: 78,
        title: 'GTA III',
        requested: undefined,
        rating: 70,
        genre: [Genre.Adventure, Genre.Racing, Genre.Shooter],
        emoji: `🚓🚓`,
        text: `Hra, kterou jsem v dětství hrála jen kvůli ježdění autem :D GTA je klasika
      která nikdy nezklame, i když třetí díl je za mě slabší než San Andreas nebo Vice City. Pár misí bych teda nejradši
      vynechala, ale líbí se mi, že většinou jsou mise krátké stejně jako celá hra. Mínus dávám za velmi
      zlou postavu Cataliny!`,
        img: {
          url: 'co2lb8',
        },
      },
      {
        index: 79,
        title: 'GTA IV',
        requested: 'NearZoner',
        rating: 65,
        genre: [Genre.Adventure, Genre.Racing, Genre.Shooter],
        emoji: `🐺`,
        text: `Není to špatná hra. Chápu, že ta "nebarevnost" je záměrem tvůrců, mě se to ale moc nelíbilo.
      Příběh je za mě až příliš dlouhý a úkoly mě po chvíli přestaly bavit.
      Hlavní postava mi nesedla a z celé série je GTA IV za mě nejslabší kousek. Navíc je v poslední misi bug,
      který brání dohrání hry. Hodně to celé zachraňují volnočasové aktivity - například já jsem se díky této hře "naučila" hrát kulečník.
      Díky, Romane :)`,
        img: {
          url: 'co2lbv',
        },
      },
      {
        index: 80,
        title: 'Bloodborne',
        requested: undefined,
        rating: 85,
        genre: [Genre.Souls, Genre.Adventure, Genre.RPG],
        emoji: `🕷️🔥`,
        text: `Zajímavá místa, atmosféra, zbraně i enemáci. Hra je takovým svým způsobem "hezky ošklivá" a dost jiná než
      ostatní souls tituly. Pistolku jsem tady milovala, a fistění mobek taky! 😅 Po pár hodinách jsem ale zjistila,
      že jen farmím a neprogresuji a to mě donutilo hru na půl roku opustit.
      Naštěstí jsem se mezitím IRL nafarmila na hrách jako Demons Souls atd. a pak už BB tak obtížný nebyl.
      Dodnes me ve spánku straší jezerní boss Rom nebo strašidelná Amygdala. Hra ve Vás cosi zanechá,
      určitě si ji budete pamatovat a rozhodně doporučuju si ji zahrát.
      Škoda jen, že u pár bossů dropují FPS tak moc, že hrajete obrázkovou knížku 📖`,
        img: {
          url: 'co1rba',
        },
      },

      {
        index: 81,
        title: 'Rustler',
        requested: undefined,
        rating: 80,
        genre: [Genre.Adventure, Genre.Indie],
        emoji: `🎸🐴`,
        text: `Rustler je super! Originální a plnej vtípků. Pokud máte rádi GTA, středověk a fantasy svět,
      jděte do Rustlera. Hra si dělá srandu úplně ze všeho a najdete mraky odkazů na filmy, hry a knihy.
      Úkoly jsou originální, neopakují se a většinou se u nich dost nasmějete. Doba hry je za mě je tak akorát.
      Grafika taky ok - pěkná. Celkově skvělý kousek!`,
        img: {
          url: 'co1zzf',
        },
      },
      {
        index: 82,
        title: 'Sekiro: Shadows Die Twice',
        requested: 'the_aetherwing',
        rating: 95,
        genre: [Genre.Souls, Genre.Adventure, Genre.RPG],
        emoji: `💩🐒`,
        text: `Tahle hra vám změní život! Vážně! Po všem tom utrpení na ni už nikdy nezapomenete.
      Je zde oproti jiným soulsovkám od From Software originální soubojový systém i zasazení.
      Bohužel pokud jste trouba jako já, první průchod vám potrvá přes sto hodin 🥲😅😂🤣🤣🤣
      I přes všechno to utrpení nastává po dohrání intenzivní pocit prázdnoty a touha ubližovat si znovu při dalším průchodu.
      PS: ano, do roka plánuji opáčko 🥲`,
        img: {
          url: 'co2a23',
        },
      },
      {
        index: 83,
        title: 'Half Life 2',
        requested: 'JsonKody',
        rating: 80,
        genre: [Genre.Adventure, Genre.FPS],
        emoji: `🤓🧑‍🔬👽🛸`,
        text: `Velmi nadčasový kousek, který jsem já poprvé zahrála až nyní (2022). Dala jsem si i obě
      epizody a úspěšně donesla trpaslíka do rakety v ep2! Hra je i po tolika letech skvělá.
      Kdybych si ji zahrála kdysi, asi bych z ní byla totálně unešená. I dnes to byl fajn zážitek, ale do mých TOP se nevleze.`,
        img: {
          url: 'co1nmw',
        },
      },
      {
        index: 84,
        title: 'L.A. Noire',
        requested: 'Koreek',
        rating: 85,
        genre: [Genre.Adventure, Genre.Shooter, Genre.Puzzle],
        emoji: `🕵️🌆`,
        text: `L.A. Noire jsem dohála až na druhý pokus. Dříve mi přišla moc dlouhá a těžká,
      ale napodruhé jsem byla trpělivější a vyplatilo se. Na dohrání potřebujete spoustu času,
      a bohužel se mi stávalo, že jsem hned druhý den zapomněla souvislosti předešlých případů.
      Takže je dobré to hrát co nejvíce v kuse, abyste moc nevypadli z příběhu.
      Případy jsou zábavné a spletité. Bohužel v půlce hry Vás šoupnou ze super oddělení na mnohem
      nudnější, které ale když zdoláte hra se vám odmění úžasným finišem!`,
        img: {
          url: 'co2ld0',
        },
      },
      {
        index: 85,
        title: 'Fable Anniversary',
        requested: 'JsonKody',
        rating: 75,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: `🌈😇👿🔥`,
        text: `Příjemná fantasy pohádková hra na hrdinu. Líbí se mi jak hrdina stárne a vyvíjí se a vy vybíráte jakým směrem.
      Dobrými a špatnými skutky určujete jeho životní cestu. Já samozřejmě jela na nejhodnějšího bojovníka!
      Líbilo se mi že, ač je hra celkem stará, máte zde spousty možností. Pořídit si dům, manželku, milenku,
      hrát bojovníka, kouzelníka, lučišníka, chránit či zabíjet ... zatančit vesničanům nebo jim naprdět do tváře 😂
      Minihry jako stolní golf s mincí nebo třeba Vokobere(c)/Blackjack 😅 Celkový příběh je hezky pohádkový, ale i
      lehce krutý a vaše rozhodnutí určují jak to vše nakonec dopadne 👌`,
        img: {
          url: 'co22lr',
        },
      },
      {
        index: 86,
        title: 'Sifu',
        requested: undefined,
        rating: 70,
        genre: [Genre.HackNslash],
        emoji: `🐢🐼`,
        text: `Tahle bojovka je hustá! Strašně se mi líbila mechanika stárnutí namísto smrti - vaše postava s každou "smrtí" zestárne
      a po po sedmdesátce? Konec a jde se znovu od začátku. Přišlo mi to jako bezva koncept, než jsem ve hře utopila tak dvacet
      hodin a všechny nervy.
      Vizuál je krásný a lokace velmi dobře zpracované. Hra je ale zlá, a to možná až moc.
      Po dvacátém kompletním resetu jsem ztratila motivaci pokračovat 😃
      Jednou se ale vrátím ... snad 🥲`,
        img: {
          url: 'co2tyi',
        },
      },
      {
        index: 87,
        title: 'Elden Ring',
        requested: undefined,
        rating: 97,
        genre: [Genre.Souls, Genre.RPG],
        emoji: `💍🧑‍🌾`,
        text: `Za mě rozhodně nejlepší souls titul! Ta hra nemá chybu - plný a zábavný svět, enemáci nápaditý a originální,
      profese zajímavé a ten výběr zbraní a armorů! Hru jsem dohrála a hned jsem jela new game plus, protože mě to strašně chytlo.
      Otevřený svět je za mě skvělý prvek a hrozně dobře se díky tomu můžete přeexpit. Já jela Prisonera a všem moc doporučuju.`,
        img: {
          url: 'co4jni',
        },
      },
      {
        index: 88,
        title: "Marvel's Spider-Man",
        requested: 'TheARmann',
        rating: 70,
        genre: [Genre.Adventure, Genre.Platform],
        emoji: `🕷️🕸️`,
        text: `Akční mlátička která na mě zas tolik nezapůsobila. Nejsem moc fanda spideho ale dala jsem tomu šanci.
      Nejzábavnější na celé hře je létání po celém městě. Soubojový systém mě nebavil a příběh moc taky ne
      (hlavně mě strašně srala jeho přítelkyně!!!) kdyby hra byla hratší - byla by asi lepší, protože po několika
      hodinách i samotné létání začíná být nudné.`,
        img: {
          url: 'co52vm',
        },
      },
      {
        index: 89,
        title: "Marvel's Spider-Man: Miles Morales",
        requested: undefined,
        rating: 77,
        genre: [Genre.Adventure, Genre.Platform],
        emoji: `🕷️🕸️`,
        text: `DLC které je lepší než celá původní hra. Hrajete za sympatičtějsí postavu a i příběh je lépe zpracovaný.
      Líbilo se mi jiné, kreativnější zpracování, lepší hudba a i oblečky.`,
        img: {
          url: 'co2dwe',
        },
      },
      {
        index: 90,
        title: 'We Were Here Forever',
        requested: undefined,
        rating: 85,
        genre: [Genre.Adventure, Genre.Puzzle, Genre.Platform],
        emoji: `👴🤝👨‍🦳`,
        text: `Pecka! Tato celá serie nabízí skvělý, zábavný coop který Vám zavaří dostkrát mozek. Hru jsem hrála s
      Bublinou a nasmály jsme se hrozně moc. Hra nabízí spoustu puzzlíků ale u několika z nich jsme si říkaly že
      to vzdáváme, tento díl je dost náročný - nebo aspoň mně se tak zdálo.`,
        img: {
          url: 'co5293',
        },
      },
      {
        index: 91,
        title: 'LEGO SW The Skywalker Saga',
        requested: 'peeeetrrr',
        rating: 80,
        genre: [Genre.Platform, Genre.Adventure],
        emoji: `⭐⚔️`,
        text: `Super hra u které jsem se mockrát zasmála. Puzzle jsou jednoduché a zábavné.
      Doporučuju ale nejdřív si oživit filmy ať pochopíte všechny vtípky.`,
        img: {
          url: 'co28yb',
        },
      },
      {
        index: 92,
        title: 'The Quarry',
        requested: undefined,
        rating: 72,
        genre: [Genre.Horror, Genre.Adventure],
        emoji: `🐺`,
        text: `Ze začátku mě sraly snad všechny postavy za které hrajete, tudíž je pak těžké bojovat o
      jejich záchranu. Bohužel mi všichni umřeli a ani jsem neměla moc potřebu to hrát znova a lépe
      hehe. Příběh není tak hrozný, kupujte jedině ve slevě.`,
        img: {
          url: 'co4kl4',
        },
      },
      {
        index: 93,
        title: 'The Last Guardian',
        requested: 'Pistakion',
        rating: 70,
        genre: [Genre.Platform, Genre.Puzzle, Genre.Adventure],
        emoji: `🧗‍♀️🤝`,
        text: `Strašně emotnivní hra! Vyjímečně jsem nedokázala udržet slzy. Celý gameplay mě ale
      strašně vytáčel, ovládání je hrozné a málem jsem to několikrát díky tomu vzdala. Za to
      finále ale to trápení stojí.`,
        img: {
          url: 'co271e',
        },
      },
      {
        index: 94,
        title: 'As Dusk Falls',
        requested: undefined,
        rating: 75,
        genre: [Genre.Adventure],
        emoji: `🌄`,
        text: `Hrozně jsem si tuhle hru užila! Rozhodování totiž bylo na chatu a já byla bezmocná ale
      užili jsme si hrozně srandy. Kdybych to ale měla hrát bez streamu sama, tolik by mě nebavila.`,
        img: {
          url: 'co4v2t',
        },
      },
      {
        index: 95,
        title: 'Stray',
        requested: undefined,
        rating: 70,
        genre: [Genre.Adventure, Genre.Indie],
        emoji: `😺😸😼`,
        text: `Krásná hra, akorát krátká a nezapomenutelná. Hraní za zvířátka ve hrách miluju. Vizuál,
      příběh i hudbu má tahle hra krásně unikátní a moc mě bavila.`,
        img: {
          url: 'co4tt2',
        },
      },
      {
        index: 96,
        title: 'MediEvil',
        requested: undefined,
        rating: 90,
        genre: [Genre.Adventure, Genre.HackNslash],
        emoji: `🩻🗡️`,
        text: `S českým dabingem je to naprostá bomba! Celá hra je vtipná, krásně pohádková a náročná.
      Několik levlů jsem doslova protrpěla, ale hra je podaná tak skvělým gamelpayem, že vám to ani nevadí,
      že nějaký level opakujete několikrát. Hudbu to má výbornou a hlavní postavu budete milovat!`,
        img: {
          url: 'co1tjg',
        },
      },
      {
        index: 97,
        title: 'The Dark Pictures Anthology: The Devil in Me',
        requested: undefined,
        rating: 60,
        genre: [Genre.Adventure],
        emoji: `🏨🔪`,
        text: `Serie Dark Pictures je za mě průměrná, nejsou to hry ze kterých si sednete na zadek, ale s
      kamarády na jedno zahrání to není tak zlý. Tento díl mi přijde že měl vybrané zajímavé téma, ale
      špatně ho zpracoval, byli jsme všichni zklamaní.`,
        img: {
          url: 'co4l3q',
        },
      },
      {
        index: 98,
        title: 'Hogwarts Legacy',
        requested: undefined,
        rating: 65,
        genre: [Genre.Adventure, Genre.RPG],
        emoji: `🧙💫`,
        text: `Nejvíc na této hře mě bavilo objevování. U hledání různých krásných zákoutí jsem strávila
      hodiny. Mrzelo mě trochu, že hra nenabízí moc kouzel a po několika hodinách souboje začínají být
      spíše otravné. Co mě taky štvalo byla mimika a hlas vaší postavy. Ale over all jsem si hru užila.`,
        img: {
          url: 'co2gn3',
        },
      },
      {
        index: 99,
        title: 'Dead Island 2',
        requested: undefined,
        rating: 88,
        genre: [Genre.Adventure, Genre.HackNslash, Genre.RPG, Genre.Shooter],
        emoji: `🌴🧟`,
        text: `Dohráno dvakrát a klidně bych si to zahrála ještě jednou! Hra je plná akce, super hudby a
      vtípků. Lokace jsou skvěle zpracované a příběh neurazí, ale ani nenadchne. Postavy ale jsou podle mě dobře
      napsané a to že máte i vy výber z několika hratelných postav je velké plus.`,
        img: {
          url: 'co5469',
        },
      },
      {
        index: 100,
        title: 'Diablo IV',
        requested: undefined,
        rating: 85,
        genre: [Genre.RPG, Genre.HackNslash],
        emoji: `👺`,
        text: `Příběh jsem hrála v coopu a bylo to bezvadný. Hlavní příběh, atmosféra, hudba i lokace jsou skvělý.
      Za mně super zážitek, jen pokud jste na nějaký další grind, tam už sláva upadá.
      Nové sezony jsou prázdné a nového kontentu skoro nepřibývá, pokud nepočítáte skiny za tisíce bekiSure`,
        img: {
          url: 'co69sm',
        },
      },
      {
        index: 101,
        title: 'Yes, Your Grace',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure, Genre.RPG, Genre.Simulator],
        emoji: ``,
        text: ``,
        img: {
          url: 'co2c8o',
        },
      },
      {
        index: 102,
        title: 'Resident Evil 4 remake',
        requested: undefined,
        rating: 1,
        genre: [Genre.Shooter, Genre.Adventure],
        emoji: ``,
        text: ``,
        img: {
          url: 'co6bo0',
        },
      },
      {
        index: 103,
        title: 'God of War Ragnarök',
        requested: undefined,
        rating: undefined,
        genre: [Genre.RPG, Genre.HackNslash, Genre.Adventure],
        emoji: `co6bo0`,
        text: ``,
        img: {
          url: 'co5s5v',
        },
      },
      {
        index: 104,
        title: 'God of War (2005)',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Puzzle, Genre.HackNslash, Genre.Adventure],
        emoji: ``,
        text: ``,
        img: {
          url: 'co3ddc',
        },
      },
      {
        index: 105,
        title: 'Star Wars Jedi: Survivor',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure],
        emoji: ``,
        text: ``,
        img: {
          url: 'co5uzk',
        },
      },
      {
        index: 106,
        title: "Senua's Saga: Hellblade II",
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure],
        emoji: ``,
        text: ``,
        img: {
          url: 'co81i4',
        },
      },
      {
        index: 107,
        title: 'The Casting of Frank Stone',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure],
        emoji: ``,
        text: ``,
        img: {
          url: 'co8j6w',
        },
      },
      {
        index: 108,
        title: 'Road 96: Mile 0',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure, Genre.Puzzle, Genre.Indie],
        emoji: ``,
        text: ``,
        img: {
          url: 'co6c4z',
        },
      },
      {
        index: 109,
        title: 'Silent Hill 2 Remake',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure, Genre.Puzzle],
        emoji: ``,
        text: ``,
        img: {
          url: 'co5l7s',
        },
      },
      {
        index: 110,
        title: 'Chained Together',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure, Genre.Indie],
        emoji: ``,
        text: ``,
        img: {
          url: 'co8cvi',
        },
      },
      {
        index: 111,
        title: 'Doki Doki Literature Club!',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure, Genre.Indie],
        emoji: ``,
        text: ``,
        img: {
          url: 'co6p5e',
        },
      },
      {
        index: 112,
        title: 'The Invincible',
        requested: undefined,
        rating: undefined,
        genre: [Genre.Adventure, Genre.Indie],
        emoji: ``,
        text: ``,
        img: {
          url: 'co61ol',
        },
      },
    ]
  }

  // export type { Genre }

  return {
    games,
    gameName,
    genre,
    Genre,
    genres,
    isDesc,
    fromBest,
    sortByDate,
    handleChangeGenre,
    changeGenre,
    setSearch,
    filteredGames,
  }
})
