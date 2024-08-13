<script setup lang="ts">
import IntroPage from "./components/pages/IntroPage.vue";
import MusicPage from "./components/pages/MusicPage.vue";
import CalendarPage from "./components/pages/CalendarPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";
import GallaryPage from "./components/pages/GallaryPage.vue";
import VueScrollSnap from "vue-scroll-snap";
import { ref, onMounted, onBeforeUnmount } from "vue";

const snapContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (snapContainer.value) {
    snapContainer.value.addEventListener('wheel', handleWheel, { passive: false });
  }
});

onBeforeUnmount(() => {
  if (snapContainer.value) {
    snapContainer.value.removeEventListener('wheel', handleWheel);
  }
});

function handleWheel(event: WheelEvent) {
  if (!snapContainer.value) return;

  const scrollTop = snapContainer.value.scrollTop || 0;

  if (scrollTop === 0 && event.deltaY < 0) {
    event.preventDefault();
  } else if (event.deltaY > 0) {
    // User is scrolling down
  }
}
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

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.item {
  scroll-snap-align: start;
  height: 100vh;
  overflow: hidden;
}
</style>
