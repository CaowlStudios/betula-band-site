<script>
</script>

<template>
  <div class="container">
    <video-background src="vid.mp4"
    style="height: 100vh; width: 100%;">
      <h1 class="betula-text">Betula</h1>
      <h2 class="new-paltz">New Paltz, NY</h2>
      <p class="discover-our-music">Discover our music</p>
      <img src="/arrow.svg" class="arrow-curved" alt="arrow curved" />
    </video-background>
  </div>
</template>

<style scoped>
.container {
  background-image: url("/bg.jpeg");
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  height: 100vh; /* Full viewport height */
  width: 100%; /* Full width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Ensures absolute positioning of children works */
}

.betula-text {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 800; /* Extra Bold */
  font-size: 110px;
  line-height: 163px;
  color: #f7f7f7;
  position: absolute;
  top: 0px; /* Adjust positioning as needed */

  -webkit-text-stroke: 1px #000205;
}

.new-paltz {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 800; /* Extra Bold */
  font-size: 40px;
  line-height: 59px;
  color: #f7f7f7;
  position: absolute;
  top: 175px; /* Adjust positioning as needed */

  -webkit-text-stroke: 1px #000205;
}

.arrow-curved {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 250px; /* Adjust positioning as needed */
  transform: rotate(90deg);
}

.discover-our-music {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 900; /* Extra Bold */
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  position: absolute;
  top: 370px; /* Adjust positioning as needed */
}
</style>
