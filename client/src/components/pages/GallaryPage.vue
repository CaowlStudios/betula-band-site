<script>
</script>

<template>
  <div class="container">
    <video-background src="" style="height: 100vh; width: 100%;"> <!-- horunge vi ba breaka den -->
      <div class="content-wrapper"> <!-- We used the "Run car snow pen -technique" -->
        <h1 class="Our">Our</h1>
        <h3 class="journey">journey</h3>
        <h2 class="gallery-and-biography">gallery & biography</h2>
        <div class="arrow-section">
          <img src="/arrow.svg" class="arrow-curved" alt="arrow curved" />
          <p class="discover-our-music">Have a look</p>
        </div>
      </div>
    </video-background>
  </div>
</template>
<!-- We used the "Run car snow pen -technique" -->
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

.Our {
  font-family: "Literata", serif;
  margin-top: 20px;
  margin-bottom: -35px;
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 100px;
  color: #f7f7f7;
  -webkit-text-stroke: 5px #000205;
  text-align: left; /* Placera texten till vänster */
  margin-right: 130px; /* Justera marginalen för att flytta texten in från vänster */
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
}


.journey {
  font-family: "Literata", serif;
  margin-top: -35px; /* Moves Betula down from the top */
  margin-bottom: -25px; /* Reduces space between Betula and New Paltz, NY */
  font-style: normal;
  font-weight: 800;
  font-size: 80px; /* Ensures Betula remains prominent */
  line-height: 100px;
  color: #f7f7f7;
  -webkit-text-stroke: 4px #000205;
  margin-right: 40px; /* Justera marginalen för att flytta texten in från vänster */
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
}

.gallery-and-biography {
  font-family: "Literata", serif;
  margin-top: -5px; /* Moves Betula down from the top */
  font-style: normal;
  font-weight: 800;
  font-size: 20px; /* Slightly smaller for balanced spacing */
  line-height: 0px; /* Removes additional line height */
  color: #f7f7f7;
  -webkit-text-stroke: 2.5px #000205;
  margin-right: 80px; /* Justera marginalen för att flytta texten in från vänster */
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
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
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

@media (min-width: 360px) { /*for da android mandem (samsung) */
  .Our {
    font-size: 80px;
    margin-bottom: -35px;
  }

  .journey {
    font-size: 70px;
    margin-bottom: -20px;
  }

  .gallery-and-biography {
    font-size: 19px;
  }

  .arrow-curved {
    width: 56px;
    height: 56px;
  }

  .discover-our-music {  /* This is have-a-look */
    font-size: 20px;
    margin-top: -90px; /* Adjust margin for larger screens */
  }
}


@media (min-width: 768px) { /* For tablets and larger */
  .Our {
    font-size: 120px;
    margin-bottom: -10px;
  }

  .journey {
    font-size: 90px;
    margin-bottom: -10px;
  }

  .gallery-and-biography {
    font-size: 25px;
  }

  .arrow-curved {
    width: 80px;
    height: 80px;
  }

  .discover-our-music {
    font-size: 20px;
    margin-top: -120px; /* Adjust margin for larger screens */
  }
}

@media (min-width: 1024px) { /* For desktops and larger */
  .Our {
    font-size: 120px;
    
  }

  .journey {
    font-size: 100px;
    margin-bottom: -10px;
  }

  .gallery-and-biography {
    font-size: 27px;
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