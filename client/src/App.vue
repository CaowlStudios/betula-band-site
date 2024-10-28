<script setup lang="ts">
// @ts-ignore
import IntroPage from "./components/pages/IntroPage.vue";
import MusicPage from "./components/pages/MusicPage.vue";
// @ts-ignore
import GalleryPage from "./components/pages/GallaryPage.vue"
import ContactPage from "./components/pages/ContactPage.vue";
import VueScrollSnap from "vue-scroll-snap";


//check mobile device function
type DeviceType = 'Phone' | 'Tablet' | 'Desktop' | 'Unknown';

function getDeviceTypeAndResolution(): { deviceType: DeviceType; resolution: string } {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  const isPhone = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isTablet = /ipad|android/i.test(userAgent) && !isPhone;

  const deviceType: DeviceType = isPhone
    ? 'Phone'
    : isTablet
    ? 'Tablet'
    : window.innerWidth <= 1024
    ? 'Phone'
    : 'Desktop';

  const resolution = `${window.innerWidth}x${window.innerHeight}`;

  return {
    deviceType,
    resolution,
  };
}

// Usage
const deviceInfo = getDeviceTypeAndResolution();
console.log(deviceInfo.deviceType);  // Outputs: 'Phone', 'Tablet', or 'Desktop'
console.log(deviceInfo.resolution);  // Outputs: Screen resolution, e.g. '1920x1080'


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
      <ContactPage />
    </div>
    <div class="item">
      <GalleryPage />
    </div>
  </vue-scroll-snap>
</template>

<style scoped>


.scroll-snap-container {
  
  scroll-behavior: smooth;
  transition: scroll 1.5s ease; /* TODO: adjust for slower scroll */

  display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.scroll-snap-container {
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory; /* Mandatory vertical snap */
    scroll-behavior: smooth;
}

.scroll-snap-container.horizontal {
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory; /* Mandatory horizontal snap */
}

.scroll-snap-container.fullscreen {
    width: 100vw;
    height: 100vh;
}

.scroll-snap-container > .item {
    scroll-snap-align: start; /* Snap alignment */
    scroll-snap-stop: always; /* Prevents scrolling past snap point */
}

.scroll-snap-container.fullscreen > .item {
    min-height: 100vh; /* Full height for vertical scrolling */
    flex: 1;
}

.scroll-snap-container.fullscreen.horizontal > .item {
    min-width: 100vw; /* Full width for horizontal scrolling */
    flex: 1;
}



</style>
