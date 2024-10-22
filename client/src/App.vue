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
}
</style>
