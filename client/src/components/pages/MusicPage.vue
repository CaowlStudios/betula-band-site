<script setup lang="ts">
import Navbar from "../Navbar.vue";
</script>

<template>
    <div>
      <Navbar />
      <div class="listen">
        <p class="text">Listen to our music on Spotify</p>
        <img src="/box.svg" class="box" alt="box spotify" />
      </div>
      <div class="live">
        <p class="text">Or come watch us live</p>
        <img src="/box.svg" class="box" alt="box live" />
      </div>
    </div>
  </template>
  
  <style scoped>
  .listen,
  .live {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px; /* Optional: add spacing between the sections */
  }
  
  .text {
    font-family: "Literata", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 47.52px;
    color: #f7f7f7;
    margin-bottom: 10px; /* Adds space between the text and the image */
  }
  
  .box {
    /* The image is automatically placed below the text due to flexbox */
  }
  </style>