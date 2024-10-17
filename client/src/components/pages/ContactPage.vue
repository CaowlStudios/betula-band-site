<script setup lang="ts">
import Navbar from "../Navbar.vue";
import { ref } from 'vue';

const emailAddress = import.meta.env.VITE_EMAIL;

const emailContent = ref('');

</script>

<template>
<div class="main-container">
  <Navbar />
  <h1>Get in touch with us</h1>
  <h3>Book us for venues, events or shows</h3>
  <div class="email-details-container">
    <!-- Email Address Input -->
    <div class="email-address-container">
      <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" fill="#F5F5F5" fill-opacity="0.7"/>
      </svg>
      <input id="email-address" type="email" placeholder="Email address*" />
    </div>

    <!-- Email Content Box -->
    <div class="email-content-container">
      <textarea v-model="emailContent" placeholder="Tell us about the inquiry here!*"></textarea>
    </div>

    <!-- Send Button -->
    <div class="send-button-container">
    <a
      :href="`mailto:${emailAddress}?subject=Inquiry&body=${encodeURIComponent(emailContent)}`"
    >
    <svg class="sendbutton" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z" fill="#F5F5F5" fill-opacity="0.9"/>
    </svg>
  </a>
  </div>
  </div>
</div>
</template>

<style scoped>
h1 {
  font-size: 35px;
  color: #f7f7f7;
  text-align: center;
  margin-top: 40px;
  margin-bottom: -20px;
  margin-left: 15px;
  font-family: "Literata", serif;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
  -webkit-text-stroke: 5px #000205;
  font-style: normal;
  font-weight: 400;

}
h3 {
  font-size: 20px;
  color: #f7f7f7;
  margin-left: 5px;
  text-align: center;
  margin-left: 15px;
  font-family: "Literata", serif;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
  -webkit-text-stroke: 5px #000205;
  font-style: normal;
  font-weight: 400;
}

.email-details-container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Add gap between the elements */
  padding: 40px;
  border-radius: 10px;
}


.main-container {
  background-color: #000205;
  background-image: url('contact-page-background.png');
  background-size: cover;
  background-position: center 10%;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
}

/* Add the translucent layer */
.main-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000205b5; /* Adjust opacity and color as needed */
  z-index: 1;
}

/* Ensure other content within the container is above the overlay */
.main-container > * {
  position: relative;
  z-index: 2;
}
.email-address-container {
  display: flex;
  align-items: center;
  background-color: #14181D;
  padding: 0px; /* Adjusted padding for better alignment */
  border-radius: 5px; /* Match the border-radius of input */
  border: 1px solid rgba(255, 204, 0, 0.3);
  min-height: 5px; /* Smaller height for the email address input */
  margin-bottom: -5px;
}


.email-address-container .icon {
  margin-right: -2px; /* Space between icon and input */
  margin-left: 10px;
}

.email-address-container input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-style: italic;
  box-sizing: border-box;
  font-family: 'Literata', light italic; 
  font-weight: 300; 
  line-height: 24px; 
  color: rgb(254, 254, 254);
  font-size: 16px;
  background-color: #14181D; 
  -webkit-text-stroke: 2px #0202023c;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #0202023c;
  outline: none; /* Add this line to remove the focus outline */
}

.email-content-container {
  background-color: #14181D;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid rgba(255, 204, 0, 0.3);
  min-height: 300px; /* Larger height for the email content box */
  
}



.email-content-container textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%; /* Ensure the textarea fills the container */
  font-family: 'Literata', light italic; 
  font-weight: 300; 
  line-height: 24px; 
  color: rgba(247, 247, 247);
  font-size: 16px; 
  background-color: #14181D; 
  -webkit-text-stroke: 2px #0202023c;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #0202023c;
  outline: none;
  resize: none; 
}

.send-button-container {
  display: flex;
  justify-content: center; /* Center align the send button horizontally */
}

.sendbutton {
  cursor: pointer; /* Change cursor to pointer for better UX */
}




/* För mindre skärmar (mobiler) */
@media (max-height: 844px) {
  h1 {
    font-size: 35px;
    margin-top: 20px;
    margin-bottom: -15px;
    margin-left: 10px;
    -webkit-text-stroke: 3px #000205;
    
  }
  
  h3 {
    font-size: 19px;
    margin-left: 10px;
    -webkit-text-stroke: 3px #000205;
  }
  
  .email-details-container {
    padding: 30px;
    margin-top:40px;

  }
  .email-content-container{
    min-height: 345px;
  }
  .email-address-container input,
  .email-content-container textarea {
    font-size: 14px;
    padding: 8px;
  }

  .sendbutton{

    width:40px;
    height:40px;
  }
}




</style>