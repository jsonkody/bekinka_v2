<script setup lang="ts"></script>

<template>
  <div class="social-block m-3 md:m-0 md:mr-6">
    <div class="flex flex-row flex-wrap">
      <a
        v-pop="'Instagram'"
        class="social-link"
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/bexhex__/?hl=en"
        aria-label="Odkaz na Instagram"
      >
        <IconComponent name="Instagram" size="1.6rem" />
      </a>

      <a
        v-pop="'Twitch'"
        class="social-link"
        rel="noreferrer"
        target="_blank"
        href="https://twitch.tv/bekinka"
        aria-label="Odkaz na Twitch"
      >
        <IconComponent name="Twitch" size="1.6rem" />
      </a>

      <a
        v-pop="'Discord'"
        class="social-link"
        rel="noreferrer"
        target="_blank"
        href="https://discord.com/invite/JB49XFU"
        aria-label="Odkaz na Discord"
      >
        <IconComponent name="Discord" size="1.6rem" />
      </a>

      <a
        v-pop="'YouTube'"
        class="social-link"
        rel="noreferrer"
        target="_blank"
        href="https://www.youtube.com/@bekinka"
        aria-label="Odkaz na YouTube"
      >
        <IconComponent name="Youtube" size="1.6rem" />
      </a>
    </div>
  </div>
</template>
