<script setup lang="ts">
import { ref } from "vue";

let isActive = ref(false);

function toggleNavbar() {
  isActive.value = !isActive.value;
}
</script>

/* Betula */

font-family: 'Literata';
font-style: italic;
font-weight: 800;
font-size: 24px;
line-height: 36px;

color: #F7F7F7;

border: 1px solid #14181D;


<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="navbar-text">Betula</p>
        <img
          src="/nav.svg"
          class="nav-icon"
          alt="nav-icon"
          @click="toggleNavbar"
          :class="{ 'is-active': isActive }"
        />
      </div>

      <div
        id="navbarBasic"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <div class="navbar-start">
          <!-- Add navbar items here -->
        </div>
        <div class="navbar-end">
          <!-- Add navbar items here -->
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
}

.navbar-brand {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.navbar-text {
  font-family: "Literata", serif;
  font-style: italic;
  font-weight: 700; 
  font-size: 24px; 
  color: #f7f7f7; /* Adjust color as needed */
  margin-right: 1em; /* Space between text and the icon */
  line-height: 36px;
}

.navbar-burger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2em;
  height: 2em;
  background: none;
  border: none;
  cursor: pointer;
}

.navbar-burger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.navbar-menu {
  display: none;
}

.navbar-menu.is-active {
  display: flex;
  flex-direction: column;
}

.navbar-start,
.navbar-end {
  display: flex;
  align-items: center;
}
</style>
