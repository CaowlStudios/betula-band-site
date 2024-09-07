<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img src="/navlogo.svg" class="navbar-logo" alt="nav-logo" />
        <!-- Apply class based on `isActive` to rotate/transform the icon -->
        <img 
          :class="{'nav-icon--open': isActive}" 
          src="/nav.svg" 
          class="nav-icon" 
          alt="hamburger-icon" 
          @click="toggleNavbar" 
        />
      </div>
    </nav>

    <transition name="fade">
      <div v-if="isActive" id="fullPageMenu" class="full-page-menu">
        <div class="menu-content">
          <!-- Menu Items -->
          <a href="#" class="menu-item">
            Home
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 42H10C8.89544 42 8 41.1046 8 40V22H2L22.6546 3.22301C23.4174 2.52951 24.5826 2.52951 25.3454 3.22301L46 22H40V40C40 41.1046 39.1046 42 38 42ZM12 38H36V18.3149L24 7.40581L12 18.3149V38ZM16 30H32V34H16V30Z" fill="#CAA24B"/>
            </svg>
          </a>
          <a href="#" class="menu-item">
            Contact
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4C6.89544 4 6 4.89544 6 6V10H10V8H38V40H10V38H6V42C6 43.1046 6.89544 44 8 44H40C41.1046 44 42 43.1046 42 42V6C42 4.89544 41.1046 4 40 4H8ZM18 32C18 28.6862 20.6862 26 24 26C27.3138 26 30 28.6862 30 32H18ZM24 24C21.7908 24 20 22.2092 20 20C20 17.7909 21.7908 16 24 16C26.2092 16 28 17.7909 28 20C28 22.2092 26.2092 24 24 24ZM12 18V14H4V18H12ZM12 22V26H4V22H12ZM12 34V30H4V34H12Z" fill="#CAA24B"/>
            </svg>
          </a>
          <a href="#" class="menu-item">
            About us
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 44C12.9543 44 4 35.0456 4 24C4 12.9543 12.9543 4 24 4C35.0456 4 44 12.9543 44 24C44 35.0456 35.0456 44 24 44ZM24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM26 21V30H28V34H20V30H22V25H20V21H26ZM27 16C27 17.6569 25.6568 19 24 19C22.3432 19 21 17.6569 21 16C21 14.3431 22.3432 13 24 13C25.6568 13 27 14.3431 27 16Z" fill="#CAA24B"/>
            </svg>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isActive = ref(false);

function toggleNavbar() {
  isActive.value = !isActive.value;
}
</script>

<style scoped>
.navbar {
  height: 4em;
  display: flex;
  align-items: center;
  padding: 0 1em;
  background-color: #000;
}

.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.navbar-logo {
  margin-right: auto;
}

.nav-icon {
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 110; /* Ensure this is higher than the menu's z-index */
}

/* Rotate the hamburger icon when menu is active (open) */


.full-page-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22309%22%20height%3D%22767%22%20viewBox%3D%220%200%20309%20767%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M166.5%20182.014L165.696%20107.215C165.68%20105.712%20164.512%20104.472%20163.013%20104.366C160.074%20104.157%20160.074%2099.8425%20163.013%2099.6342C164.512%2099.5278%20165.68%2098.2884%20165.696%2096.7849L166.5%2021.9856L167.304%2096.7849C167.32%2098.2884%20168.488%2099.5278%20169.987%2099.6342C172.926%2099.8425%20172.926%20104.157%20169.987%20104.366C168.488%20104.472%20167.32%20105.712%20167.304%20107.215L166.5%20182.014Z%22%20fill%3D%22%230F0F0F%22%20stroke%3D%22%230F0F0F%22%20stroke-width%3D%220.515789%22%2F%3E%3Cpath%20d%3D%22M112.765%20738.757L112.048%20651.968C112.034%20650.304%20110.762%20648.922%20109.106%20648.769C105.744%20648.459%20105.744%20643.549%20109.106%20643.239C110.762%20643.086%20112.034%20641.704%20112.048%20640.04L112.765%20553.251L113.482%20640.04C113.496%20641.704%20114.767%20643.086%20116.424%20643.239C119.786%20643.549%20119.786%20648.459%20116.424%20648.769C114.767%20648.922%20113.496%20650.304%20113.482%20651.968L112.765%20738.757Z%22%20fill%3D%22%230F0F0F%22%20stroke%3D%22%230F0F0F%22%20stroke-width%3D%220.463158%22%2F%3E%3Cpath%20d%3D%22M305.084%20210.451C320.097%20349.521%20264.794%20543.47%20181.671%20643.687C98.5473%20743.904%2018.9297%20712.619%203.91648%20573.549C-11.0967%20434.479%2044.2059%20240.53%20127.329%20140.313C210.453%2040.0964%20290.07%2071.3809%20305.084%20210.451Z%22%20stroke%3D%22%230F0F0F%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center; /* Horizontally center content */
  align-items: center; /* Vertically center content */
}

.menu-content {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  text-align: center;
  padding: 2rem; /* Add some padding for better spacing */
}

.menu-item {
  font-family: "Literata", serif;
  font-size: 4rem;
  color: #f7f7f7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Add transitions for a smooth fade-in effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
