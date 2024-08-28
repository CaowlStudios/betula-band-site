<script setup lang="ts">
import Navbar from "../Navbar.vue";

// Add the Spotify iFrame API script
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.src = "https://open.spotify.com/embed/iframe-api/v1";
  script.async = true;
  document.body.appendChild(script);
}

// Initialize Spotify Embed once the API is ready
if (typeof window !== 'undefined') {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
      uri: 'spotify:album:0623OHXfWOVDd74K8lrwO6' // Replace with your track or playlist URI
    };
    IFrameAPI.createController(element, options, () => {
      console.log('Spotify Embed is ready!');
    });
  };
}
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
        <img src="/box.svg" class="box" alt="box live" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  width: calc(100% - 40px);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Add gap between sections */
}

.listen,
.live {
  flex: 1; /* Allow each section to take up equal space */
}

.text {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 47.52px;
  color: #f7f7f7;
  margin-bottom: 10px;
  text-align: left;
}

#embed-iframe {
  width: 100%;
  max-width: 100%;
  height: 380px; /* Set a fixed height */
}

.box {
  width: 100%;
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .text {
    font-size: 24px;
  }

  #embed-iframe {
    height: 300px; /* Adjust height for smaller screens */
  }
}
</style>
