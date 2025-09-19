<script setup lang="ts">
import { IconExternalLink } from '@tabler/icons-vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import EmoComponent from '@/components/EmoComponent.vue'
import HeartComponent from '@/components/HeartComponent.vue'
import GalleryHomeComponent from '@/components/gallery/GalleryHomeComponent.vue'
</script>

<template>
  <div class="">
    <div class="text-center">
      <div class="mb-6 p-3 md:p-8 leading-relaxed rounded-xl bg-black/50 text-left">
        <h1 class="mt-2 font-semibold mb-8 text-center text-emerald-400 text-2xl font-asap">
          🐰🥕 Novinka 🥚🐣
        </h1>
        <p class="my-3 font-asap text-lg">
          Někde na stránce je schován nově malý easter-egg .. někde mezi Bekinkou a týpkem. Je to
          první funkční prototyp a ještě na tom bude asi hodně práce, ale už nyní si to můžete
          vyzkoušet ( ͡° ͜ʖ ͡°)
        </p>
      </div>
      <div class="mb-6 p-3 md:p-8 leading-relaxed rounded-xl bg-black/50 text-left">
        <h1 class="mt-2 font-semibold mb-8 text-center text-emerald-400 text-2xl font-asap">
          Update - Březen 2024
        </h1>
        <p class="my-3 font-asap text-lg">
          Zdravím. Ráda Vám oznamuji že mám již potvrzeno že léčba zabrala a jsem zdravá. Stále tedy
          bojuji s únavou, občastnými bolestmi a nevolnostmi ale to se časem zlepší. Každým měsícem
          se to vše lepší. Budu několik let chodit na kontroly, jelikož se má nemoc občas ráda
          vrací. Už jsem se pomalu vrátila k aktivitám co mám ráda a mám z toho velkou radost,
          hlavně z toho že ten velký kámen ze srdce už pomalu opadá.
        </p>

        <h2 class="text-right mr-7 text-xl text-emerald-400 font-asap">S láskou, Beki</h2>
      </div>
      <div class="mb-6 p-3 md:p-8 leading-relaxed rounded-xl bg-black/50 text-left">
        <h1 class="mt-2 font-semibold mb-8 text-center text-emerald-400 text-2xl font-asap">
          Update - listopad 2023
        </h1>
        <p class="my-3 font-asap text-lg">
          Ahoj všichni. Chci vám poskytnout nejnovější aktualizaci mého zdravotního stavu. Jak víte,
          poslední rok byl pro mě plný výzev, ale i naděje. Mám za sebou intenzivní chemoterapii a
          biologickou léčbu, které byly doprovázeny několika návštěvami CT.
        </p>
        <p class="my-3 font-asap text-lg">
          Zatímco výsledky stále čekají na konečné potvrzení, předběžné zprávy jsou povzbuzující -
          vypadá to, že všechny známky nemoci zmizely! I když to je úžasná zpráva, cesta ještě není
          u konce.
        </p>
        <p class="my-3 font-asap text-lg">
          Budu pravidelně navštěvovat nemocnici pro kontrolní prohlídky, abychom zajistili, že se
          stav udržuje stabilní a že se nemoc nevrátí. Chci poděkovat každému z vás za vaši
          neustálou podporu a pozitivní myšlenky, které mi pomáhají zůstat silná a optimistická.
        </p>
        <p class="my-3 font-asap text-lg">
          Navíc, pro ty z vás, kteří sledují moji uměleckou stránku na
          <a target="_blank" class="pl-3 px-2 link" href="https://www.artstation.com/rebecapro">
            Artstation
          </a>
          jsem přidala několik nových obrázků, které jsem vytvořila během posledních měsíců. Tyto
          obrázky jsou pro mě zvláštní, protože odrážejí moje pocity a zkušenosti během tohoto
          náročného období.
        </p>

        <h2 class="text-right mr-7 text-xl text-emerald-400 font-asap">S láskou, Beki</h2>

        <p class="mt-4">
          PS: updatovali jsme
          <a class="link" href="#galerie"> fotografie v galerii. </a>
        </p>
      </div>

      <div class="my-16 lg:my-24">
        <div class="my-8 text-purple-200 text-lg font-asap">
          Veliké díky za podporu v nemoci posílá Beki & její rodina
        </div>

        <HeartComponent />
      </div>

      <div class="mt-8 p-3 md:p-8 leading-relaxed dark-wrap text-left">
        <h1 class="mt-5 mb-8 text-center text-green-400 text-3xl font-asap">
          Co se vlastně stalo?
        </h1>
        <p class="mt-4">
          Dne 11.11.2022 bylo Rebece zjištěno nádorové onemocnění lymfarického systému (lymfom) na
          několika místech v těle. Hospitalizaci předcházely týdny bolestí, které už nešly vydržet.
        </p>
        <p class="mt-4">
          Nyní má stanovenou léčbu formou biologické léčby a chemoterapie, na kterou bude docházet
          vždy po dvaceti dnech na jeden týden do nemocnice.
        </p>
        <p class="mt-4">
          První léčba potrvá minimálně šest cyklů (přibližně 5-6 měsíců) a poté se uvidí.
          Chemoterapie je velmi náročná pro celé tělo a Beka je díky ní velmi oslabena a vystavena
          spoustě vedlejších účinků léčby, tudíž musí být co nejvíce v klidu a co nejvíce odpočívat.
        </p>
        <p class="mt-4">
          Nepochybujeme že léčba dopadne dobře, přesto následující období bude těžké a
          vyčerpávající. Proto děkujeme všem, kteří Bekinku na její cestě podporujete jakýmkoliv
          způsobem 💜
        </p>
        <p class="text-center mt-8 mb-2 text-green-400 text-xl font-asap">
          Díky Vašim finančním darům může Beky:
        </p>

        <div class="flex justify-center">
          <ul class="text-left">
            <li class="ml-6 md:ml-20 list-disc">bydlet nadále ve svém bytě</li>
            <li class="ml-6 md:ml-20 list-disc">jíst vydatně a dodržovat stanovenou dietu</li>
            <li class="ml-6 md:ml-20 list-disc">zaplatit nutné měsíční výdaje</li>
            <li class="ml-6 md:ml-20 list-disc">vybrat si paruky dle svého gusta</li>
            <li class="ml-6 md:ml-20 list-disc">zaplatit lepší pokoj v nemocnici</li>
            <li class="ml-6 md:ml-20 list-disc">a spoustu dalšího ...</li>
          </ul>
        </div>

        <p class="mt-4">
          Také jsme část peněz použili při nákupu auta, kterým bude sestru vozit její
          pritel/snoubenec do nemocnice, protože kvůli chemoterapii a bolestem nemůže jezdit MHD -
          nemůže pořádně chodit a nesmí se nakazit.
        </p>
        <p class="m-6 mt-12 text-xl text-center font-semibold font-asap">💚 Děkujeme Vám 💚</p>
      </div>

      <div id="andullie" class="my-24 flex items-center justify-center">
        <div>
          <h2 class="mb-5 text-xl text-green-400">
            <EmoComponent>:Clap :andullHello </EmoComponent>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/andullie"
              class="whitespace-nowrap mx-2 link"
            >
              Andullie
              <IconExternalLink :size="20" class="external_link" />
            </a>
            <EmoComponent>
              zorganizovala stream na podporu Beky :bekiPray :bekiPog :bekiAha :bekiLurk
              :bekiBlankies</EmoComponent
            >
          </h2>

          <div
            class="video_container border-4 trans border-purple-600 rounded-3xl hover:border-green-400"
          >
            <div>
              <LiteYouTubeEmbed
                id="K1nnc2njUAk"
                title="Andullie zorganizovala stream na podporu Beky"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="shilou" class="my-24 flex items-center justify-center">
        <div>
          <h2 class="mb-5 text-xl text-green-400">
            <EmoComponent>:Clap :shilLove Charitativní stream od </EmoComponent>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/shil0u_"
              class="whitespace-nowrap mx-2 link"
            >
              Shil0u_
              <IconExternalLink :size="20" class="external_link" />
            </a>
            <EmoComponent
              >:shilEZY na podporu Bekinky :bekiPray :bekiPog :bekiAha :bekiBlankies
              :shilLove</EmoComponent
            >
          </h2>

          <div
            class="video_container border-4 trans border-purple-600 rounded-3xl hover:border-green-400"
          >
            <div>
              <LiteYouTubeEmbed
                id="gC92KzksRFU"
                title="Charitativní stream od Shil0u_ na podporu Bekinky"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="galerie" class="mb-2 w-4 h-4 opacity-0"></div>

      <div class="mb-12">
        <div class="mb-4 dark-wrap">
          <h2 class="font-asap text-lg m-3">
            Beki si přála přidat pár fotek. Vybrali jsme takové, co ukazují skutečné momenty - někdy
            pláč, jindy zase smích. Fotky jsou většinou seřazené podle toho, kdy byly pořízené.
          </h2>
        </div>

        <GalleryHomeComponent />
      </div>
    </div>
  </div>
</template>
