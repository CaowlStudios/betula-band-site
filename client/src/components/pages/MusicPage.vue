<script setup lang="ts">
import Navbar from "../Navbar.vue";

</script>

<template>
    <div>
        <Navbar></Navbar>
        <div class="listen">
            <p>
                Listen to our music on Spotify
            </p>
            <img src="/box.svg" class="box" alt="box spotify" />
        </div>
        <div class="live">
            <p>
                Or come watch us live
            </p>
            <img src="/box.svg" class="box" alt="box live" />
        </div>
    </div>
</template>

<style scoped>
.listen, .live {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 400; 
  font-size: 32px;
  line-height: 47.52px;
  color: #f7f7f7;
}
</style>