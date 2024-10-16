<script>
</script>

<template>
  <div class="container">
    <video-background src="vid.mp4" style="height: 100vh; width: 100%;">
      <div class="content-wrapper">
        <h1 class="betula-text">Betula</h1>
        <h2 class="new-paltz">New Paltz, NY</h2>
        <div class="arrow-section">
          <img src="/arrow.svg" class="arrow-curved" alt="arrow curved" />
          <p class="discover-our-music">Discover our music</p>
        </div>
      </div>
    </video-background>
  </div>
</template>

<style scoped>
.container {
  background-image: url("/bg.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 50px;
}

.betula-text {
  font-family: "Literata", serif;
  margin-top: 60px; /* Moves Betula down from the top */
  margin-bottom: -25px; /* Reduces space between Betula and New Paltz, NY */
  font-style: normal;
  font-weight: 800;
  font-size: 110px; /* Ensures Betula remains prominent */
  line-height: 100px;
  color: #f7f7f7;
  -webkit-text-stroke: 5px #000205;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
}

.new-paltz {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 800;
  font-size: 30px; /* Slightly smaller for balanced spacing */
  line-height: 0px; /* Removes additional line height */
  color: #f7f7f7;
  -webkit-text-stroke: 4px #000205;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
}

.arrow-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 450px; /* Ensures proper spacing below New Paltz, NY */
}

.arrow-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute; /* Position the arrow section absolutely */
  bottom: 140px; /* Adjust the bottom margin as needed */
  left: 0;
  right: 0;
  margin: 0 auto; /* Center horizontally */
}

.discover-our-music {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px; /* Visibility increased */
  line-height: 24px;
  color: #ffffff;
  margin-top: -120px; /* Position text closer to the arrow */
  -webkit-text-stroke: 2.5px #000205;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
}

/* Media queries */

/* Use dvh if the browser supports it */
@supports (height: 100dvh) {
  .full-viewport-height {
    height: 100dvh;
  }
}


@media (min-width: 360px) { /*for da android mandem (samsung) */
  .betula-text {
    font-size: 90px;
  }

  .new-paltz {
    font-size: 24px; 
  }

  .arrow-curved {
    width: 56px;
    height: 56px;
  }

  .discover-our-music {
    font-size: 20px;
    margin-top: -90px; /* Adjust margin for larger screens */
  }


}



@media (min-width: 480px) { /* For tablets and larger */
  .betula-text {
    font-size: 150px;
    margin-bottom: 0px; /* Adjusting space between Betula and New Paltz */
  }

  .new-paltz {
    font-size: 40px;
  }

  .arrow-curved {
    width: 100px;
    height: 100px;
    margin-top: -95px; /* Adjust margin for larger screens */
  }

  .discover-our-music {
    font-size: 20px;
    margin-top: -140px; /* Reduced margin to decrease space between text and arrow */
  }
}


@media (min-width: 481px) and (max-width:767px){ /* For desktops and larger */
  .betula-text {
    font-size: 200px;
  }

  .new-paltz {
    font-size: 50px;
  }

  .arrow-curved {
    width: 150px;
    height: 150px;
  }

  .discover-our-music {
    font-size: 24px;
    margin-top: -180px; /* Adjust margin for larger screens */
  }



  
}
</style>