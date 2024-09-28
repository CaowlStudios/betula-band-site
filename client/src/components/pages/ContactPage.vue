<script setup lang="ts">
import Navbar from "../Navbar.vue";
import { ref } from 'vue';

const emailAddress = import.meta.env.VITE_EMAIL;

const emailContent = ref('');

</script>

<template>
  <Navbar />
  <div>
    <h1>Get in touch with us</h1>
    <h3>Book us for venues, events or shows</h3>
    
  </div>
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

    <h1 class="Instagramtext"> <svg class="Instalogo" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0016 14.2501C16.3774 14.2501 14.2515 16.3767 14.2515 19.0001C14.2515 21.6241 16.3782 23.7501 19.0016 23.7501C21.6256 23.7501 23.7516 21.6235 23.7516 19.0001C23.7516 16.376 21.625 14.2501 19.0016 14.2501ZM19.0016 11.0834C23.3722 11.0834 26.9182 14.6255 26.9182 19.0001C26.9182 23.3709 23.3762 26.9167 19.0016 26.9167C14.6308 26.9167 11.0849 23.3747 11.0849 19.0001C11.0849 14.6293 14.627 11.0834 19.0016 11.0834ZM29.2932 10.6862C29.2932 11.7789 28.4053 12.6654 27.3141 12.6654C26.2214 12.6654 25.3349 11.7775 25.3349 10.6862C25.3349 9.59492 26.2227 8.70841 27.3141 8.70841C28.4039 8.70704 29.2932 9.59492 29.2932 10.6862ZM19.0016 6.33341C15.0836 6.33341 14.445 6.34379 12.6228 6.42493C11.3812 6.48321 10.549 6.65019 9.77575 6.95039C9.08858 7.2169 8.59289 7.53513 8.06473 8.06328C7.53456 8.59346 7.21689 9.08783 6.95146 9.77531C6.65056 10.5503 6.48363 11.3813 6.4264 12.6211C6.34446 14.3691 6.33488 14.9801 6.33488 19.0001C6.33488 22.918 6.34525 23.5566 6.42638 25.3787C6.4847 26.6197 6.65189 27.4532 6.95137 28.2246C7.21857 28.9127 7.53745 29.4095 8.06306 29.9352C8.59533 30.4667 9.09116 30.7855 9.77212 31.0483C10.5548 31.3509 11.3865 31.5181 12.6225 31.5752C14.3706 31.6571 14.9815 31.6667 19.0016 31.6667C22.9195 31.6667 23.5581 31.6563 25.3802 31.5752C26.6185 31.5171 27.4526 31.3494 28.2261 31.0502C28.9123 30.7837 29.4107 30.4637 29.9367 29.9385C30.469 29.4054 30.7871 28.9108 31.0503 28.2282C31.3521 27.4484 31.5196 26.6156 31.5767 25.3792C31.6586 23.631 31.6682 23.02 31.6682 19.0001C31.6682 15.0822 31.6578 14.4436 31.5767 12.6214C31.5185 11.3828 31.3508 10.5474 31.0512 9.77428C30.7854 9.08902 30.466 8.5918 29.9383 8.06328C29.4072 7.53224 28.9142 7.21522 28.2262 6.95C27.4518 6.64935 26.6196 6.48218 25.3805 6.42495C23.6325 6.34299 23.0215 6.33341 19.0016 6.33341ZM19.0016 3.16675C23.3029 3.16675 23.8399 3.18258 25.5289 3.26175C27.2137 3.3396 28.363 3.60612 29.3724 3.998C30.416 4.40043 31.2974 4.94404 32.1774 5.8241C33.0562 6.70418 33.5999 7.58821 34.0037 8.62925C34.3941 9.63731 34.6607 10.7879 34.7399 12.4728C34.8151 14.1617 34.8349 14.6987 34.8349 19.0001C34.8349 23.3015 34.8191 23.8384 34.7399 25.5274C34.662 27.2124 34.3941 28.3615 34.0037 29.3709C33.6012 30.4146 33.0562 31.2959 32.1774 32.1761C31.2974 33.0549 30.412 33.5984 29.3724 34.0022C28.363 34.3928 27.2137 34.6592 25.5289 34.7384C23.8399 34.8136 23.3029 34.8334 19.0016 34.8334C14.7002 34.8334 14.1631 34.8176 12.4743 34.7384C10.7893 34.6605 9.6414 34.3928 8.63071 34.0022C7.58834 33.5997 6.70563 33.0549 5.82557 32.1761C4.9455 31.2959 4.40321 30.4107 3.99946 29.3709C3.60759 28.3615 3.34238 27.2124 3.26321 25.5274C3.188 23.8384 3.16821 23.3015 3.16821 19.0001C3.16821 14.6987 3.18405 14.1617 3.26321 12.4728C3.34105 10.7865 3.60759 9.63862 3.99946 8.62925C4.40188 7.58689 4.9455 6.70418 5.82557 5.8241C6.70563 4.94404 7.58967 4.40175 8.63071 3.998C9.64009 3.60612 10.788 3.34091 12.4743 3.26175C14.1631 3.18654 14.7002 3.16675 19.0016 3.16675Z" fill="#F0F0F0"/>
</svg>
 Betula_Band</h1> 
    

    <!-- Instagram Box -->
    <div class="insta-container">
  
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/betula_band/?utm_source=ig_embed&amp;utm_campaign=loading"
       data-instgrm-version="14" style=" background:#ffffff67;
        border:0; border-radius:6px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); 
        margin: 1px; max-width:540px; min-width:326px; max-height: 235px;
        padding:0; width:99.375%; width:-webkit-calc(100% - 2px); 
        width:calc(10% - 2px);"><div style="padding:16px;"> 
        <a href="https://www.instagram.com/betula_band/?utm_source=ig_embed&amp;utm_campaign=loading"
         style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" 
         target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4;
          border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; 
          flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> 
          <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; 
          height:20px; margin:0 auto 12px; width:50px;">
          <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> 
            <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this profile on Instagram</div>
          </div>
          <div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> 
            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> 
            <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> 
            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;">
               <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> 
               <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)">
              </div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
              <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> 
              <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> 
              <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> 
                <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> 
                <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">@<a href="https://www.instagram.com/betula_band/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank">betula_band</a> • Instagram photos and videos</p></div></blockquote>
    </div>

  </div>
</template>

<style scoped>
h1 {
  font-size: 35px;
  color: #f7f7f7;
  text-align: left;
  margin-top: 40px;
  margin-bottom: -20px;
  margin-left: 45px;
  font-family: "Literata", serif;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
  -webkit-text-stroke: 5px #000205;
  font-style: normal;
  font-weight: 400;

}
.Instagramtext{

  color: #f7f7f7;
  font-weight: 400;
  font-size: 35px;
  margin-top: 25px;
  margin-bottom: -20px;
}

.Instalogo {

margin-left: -45px;
margin-bottom: -6px;
}
h3 {
  font-size: 20px;
  color: #f7f7f7;
  margin-left: 5px;

  text-align: center;
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

.email-address-container {
  display: flex;
  align-items: center;
  background-color: #000205;
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
  border-radius: 5px;
  font-style: italic;
  box-sizing: border-box;
  font-family: 'Literata', light italic; 
  font-weight: 300; 
  line-height: 24px; 
  color: rgb(254, 254, 254);
  font-size: 16px; 
  background-color: #000205; 
  -webkit-text-stroke: 2px #0202023c;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #0202023c;
  outline: none; /* Add this line to remove the focus outline */
  
}

.email-content-container {
  background-color: #000205;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid rgba(255, 204, 0, 0.3);
  min-height: 150px; /* Larger height for the email content box */
  
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
  background-color: #000205; 
  -webkit-text-stroke: 2px #0202023c;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #0202023c;
  outline: none; /* Add this line to remove the focus outline */
  
}

.send-button-container {
  display: flex;
  justify-content: center; /* Center align the send button horizontally */
}

.sendbutton {
  cursor: pointer; /* Change cursor to pointer for better UX */
}

.insta-container {
  background-color: #000205;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 204, 0, 0.3);
}
</style>
