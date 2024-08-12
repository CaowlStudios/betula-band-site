<script setup lang="ts">
import IntroPage from "./components/pages/IntroPage.vue";
import MusicPage from "./components/pages/MusicPage.vue";
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
  </vue-scroll-snap>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Literata:wght@400;700;800;900&display=swap");

* {
  background-color: #000205;
}

.item {
  min-height: 500px;
}

.scroll-snap-container {
  height: 500px;
  width: 500px;
  scroll-behavior: smooth;
  transition: scroll 1.5s ease; /* TODO: adjust for slower scroll */
}
</style>
