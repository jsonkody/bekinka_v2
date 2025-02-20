<script setup lang="ts"></script>

<template>
  <div class="social-block m-3 md:m-0 md:mr-6">
    <div class="flex flex-row flex-wrap">
      <a v-pop="'Instagram'"
        class="social-link"
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/bekinka__/"
      >
        <IconComponent name="Instagram" size="1.6rem" />
      </a>

      <a v-pop="'Twitch'" class="social-link" rel="noreferrer" target="_blank" href="https://twitch.tv/bekinka">
        <IconComponent name="Twitch" size="1.6rem" />
      </a>

      <a v-pop="'Discord'"
        class="social-link"
        rel="noreferrer"
        target="_blank"
        href="https://discord.com/invite/JB49XFU"
      >
        <IconComponent name="Discord" size="1.6rem" />
      </a>

      <a v-pop="'YouTube'"
        class="social-link"
        rel="noreferrer"
        target="_blank"
        href="https://www.youtube.com/channel/UCJM8kUylpahRnHHFh3-z7tg/videos"
      >
        <IconComponent name="Youtube" size="1.6rem" />
      </a>
    </div>
  </div>
</template>
