<script setup lang="ts">
import { ref, provide } from "vue";
// @ts-ignore
import NavBarPage from "./pages/NavBarPage.vue";

let isActive = ref(false);

function toggleNavbar() {
  isActive.value = !isActive.value;
}

provide("isActive", isActive);
provide("toggleNavbar", toggleNavbar);
</script>

<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img
          src="/navlogo.svg"
          class="navbar-logo"
          alt="nav-logo"
          @click="$emit('toggle-navbar')"
          :class="{ 'is-active': isActive }"
        />
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

      </div>
    </nav>
  </div>

  <div v-if="isActive" class="menu-overlay">
    <div class="menu-content">
      <NavBarPage></NavBarPage>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 4em;
  display: flex;
  align-items: center;
  padding: 0 1em;
  z-index: 10;
}

.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space out the items */
  width: 100%; /* Ensure it takes up the full width */
}

.navbar-logo {
  margin-right: auto; /* Pushes the logo to the left */
}

.nav-icon {
  cursor: pointer;
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

.menu-overlay {
  z-index: 9;
}
</style>
