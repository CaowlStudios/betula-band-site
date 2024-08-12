<script lang="ts"></script>

<template>
  <div class="container">
    <h1 class="betula-text">Betula</h1>
    <h2 class="new-paltz">New Paltz, NY</h2>
    <p class="discover-our-music">Discover our music</p>
    <img src="/arrow.svg" class="arrow-curved" alt="arrow curved" />
  </div>
</template>

<style scoped>
.betula-text {
  position: absolute;
  width: 400px;
  height: 100px;

  font-family: "Literata", serif;
  font-style: italic;
  font-weight: 900; /* Extra Bold */
  font-size: 110px;
  line-height: 163px;
  -webkit-text-stroke-color: #000205;
  -webkit-text-stroke-width: 1.5px;

  color: #f7f7f7;
}

.new-paltz {
  position: absolute;
  width: 349px;
  height: 130px;
  left: 25px;
  top: 165px;

  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 900; /* Extra Bold */
  font-size: 40px;
  line-height: 59px;
  -webkit-text-stroke-color: #000205;
  -webkit-text-stroke-width: 1.5px;

  color: #f7f7f7;
}

.arrow-curved {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 267px;
  top: 705px;

  transform: rotate(90deg);
}

.discover-our-music {
  position: absolute;
  width: 163px;
  height: 48px;
  left: 136px;
  top: 681px;

  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 900; /* Extra Bold */
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
}
</style>
