<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from "../Navbar.vue";

// Add the Spotify iFrame API script
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.src = "https://open.spotify.com/embed/iframe-api/v1";
  script.async = true;
  document.body.appendChild(script);
}

// Append the Spotify iframe dynamically when the component mounts
onMounted(() => {
  const embedIframe = document.getElementById('embed-iframe');
  if (embedIframe) {
    const iframe = document.createElement('iframe');
    iframe.style.borderRadius = '12px';
    iframe.src = "https://open.spotify.com/embed/track/0j2JcSeuF8ElJTrC8g6493?utm_source=generator&theme=0";
    iframe.width = '100%';
    iframe.height = '200%';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';
    embedIframe.appendChild(iframe);
  }
});
</script>

<template>
  <div>
    <Navbar />
    <div class="content-container">
      <div class="listen">
        <p class="text">Listen to our music on Spotify</p>
        <div id="embed-iframe"></div>
      </div>
      <div class="live">
        <p class="text">Or come watch us live</p>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container to take the full height of the viewport */
.content-container {
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space between sections */
  padding: 0 20px; /* Add some side padding */
  box-sizing: border-box; /* Make sure padding is included in width calculation */
}

/* Listen Section */
.listen {
  flex: 1;
 
}

.text {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px; /* Reduce font size for smaller screens */
  color: #f7f7f7;
  margin-bottom: 10px;
  text-align: left;
}

/* Spotify Embed */
#embed-iframe {
  width: 100%;
  max-width: 100%;
  height: 200px; /* Reduce the height for smaller screens */
}

/* Live Section */
.live {
  flex: 1;
}

/* Box for the live section */
.box {
  width: 100%;
  height: 120px; /* Further reduced height */
  background-color: #a0522d;
  border-radius: 10px;
}

/* Adjustments for iPhone XR or similar-sized devices */
@media (max-width: 768px) { /* For iPhone XR and similar */
  .text {
    font-size: 20px; /* Slightly larger text for bigger devices */
  }

  #embed-iframe {
    height: 180px; /* Slightly larger height */
  }

  .box {
    height: 285px; /* Larger height for slightly larger screens */
  }
}

/* Adjustments for iPhone SE */
@media (max-width: 377px) { /* For iPhone SE */
  .text {
    font-size: 18px; /* Smaller text size */
  }

  #embed-iframe {
    height: 150px; /* Smaller height for iPhone SE */
  }

  .box {
    height: 130px; /* Specific box height for iPhone SE */
  }
}
</style>
