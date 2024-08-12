<script setup lang="ts">
import IntroPage from "./components/pages/IntroPage.vue";
import MusicPage from "./components/pages/MusicPage.vue";
import CalendarPage from "./components/pages/CalendarPage.vue";
import VueScrollSnap from "vue-scroll-snap";
</script>

<template>
  <vue-scroll-snap :fullscreen="true">
    <div class="item">
      <IntroPage />
    </div>
    <div class="item">
      <MusicPage />
    </div>
    <div class="item">
      <CalendarPage />
    </div>
  </vue-scroll-snap>
</template>

<style scoped>
.scroll-snap-container {
  scroll-behavior: smooth;
  transition: scroll 1.5s ease; /* TODO: adjust for slower scroll */
}
</style>
