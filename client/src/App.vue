<script setup lang="ts">
// @ts-ignore
import IntroPage from "./components/pages/IntroPage.vue";
import MusicPage from "./components/pages/MusicPage.vue";
import CalendarPage from "./components/pages/CalendarPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";
import GallaryPage from "./components/pages/GallaryPage.vue";
import VueScrollSnap from "vue-scroll-snap";
</script>

<template>
  <vue-scroll-snap :fullscreen="true" ref="snapContainer">
    <div class="item">
      <IntroPage />
    </div>
    <div class="item">
      <MusicPage />
    </div>
    <div class="item">
      <CalendarPage />
    </div>
    <div class="item">
      <ContactPage />
    </div>
    <div class="item">
      <GallaryPage />
    </div>
  </vue-scroll-snap>
</template>

<style scoped>
.scroll-snap-container {
  scroll-behavior: smooth;
  transition: scroll 1.5s ease; /* TODO: adjust for slower scroll */
}
</style>
