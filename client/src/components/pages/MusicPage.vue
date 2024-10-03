<template>
  <div class="main-container">
    <Navbar />
    <div v-if="isActive">
      <NavBarPage></NavBarPage>
    </div>
    <div class="content-container" v-else>
      <div class="listen">
        <p class="text">Listen to our music on Spotify</p>
        <div id="embed-iframe"></div>
      </div>
      <div class="live">
        <p class="text">Or come watch us live</p>
        <div class="events-container">
          <div
            v-for="(event, index) in events"
            :key="index"
            :class="['event-card', index === 0 ? 'highlight' : '']"
          >
            <div class="event-content-wrapper">
              <div class="event-date">
                <p>{{ formatDate(event.start).split(" ")[0] }}</p>
                <p>{{ formatDate(event.start).split(" ")[1].toUpperCase() }}</p>
              </div>
              <div class="event-info">
                <h3>{{ event.name }}</h3>
                <div class="event-details-container">
                  <div class="event-time-container">
                    <span class="event-time">
                      <svg width="20" height="20" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8666 19.0667C6.08018 19.0667 2.19998 15.1865 2.19998 10.4001C2.19998 5.6136 6.08018 1.7334 10.8666 1.7334C15.6531 1.7334 19.5333 5.6136 19.5333 10.4001C19.5333 15.1865 15.6531 19.0667 10.8666 19.0667ZM10.8666 17.3334C14.6958 17.3334 17.8 14.2293 17.8 10.4001C17.8 6.57089 14.6958 3.46673 10.8666 3.46673C7.03747 3.46673 3.93331 6.57089 3.93331 10.4001C3.93331 14.2293 7.03747 17.3334 10.8666 17.3334ZM11.3 10.8334H13.0333H15.6333V12.1334H9.99998V5.20007H11.3V8.2334V10.8334Z" fill="#F7F7F7"/>
                      </svg>
                      {{ formatTime(event.start) }}
                    </span>
                  </div>
                  <div class="event-location-container">
                    <span v-if="event.location" class="event-location">
                      <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2424 16.8426C14.636 17.2204 15.2716 16.8144 15.0943 16.2984L10.8917 4.07288C10.7309 3.60494 10.0691 3.60494 9.90822 4.07288L5.77952 16.0837C5.60215 16.5997 6.2378 17.0057 6.63139 16.6278L9.96495 13.4276C10.1662 13.2345 10.484 13.2345 10.6852 13.4276L14.2424 16.8426Z" stroke="#F7F7F7" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      {{ event.location }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="event-reminder" @click="downloadICS(event)">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.7617 28.47C27.867 28.1023 30.9181 27.3695 33.8517 26.2867C31.3673 23.5347 29.9945 19.9575 30 16.25V15C30 12.3478 28.9464 9.8043 27.0711 7.92893C25.1957 6.05357 22.6522 5 20 5C17.3478 5 14.8043 6.05357 12.9289 7.92893C11.0536 9.8043 10 12.3478 10 15V16.25C10.005 19.9577 8.63164 23.5349 6.14666 26.2867C9.035 27.3533 12.08 28.095 15.2383 28.47M24.7617 28.47C21.5983 28.8452 18.4017 28.8452 15.2383 28.47M24.7617 28.47C25.0018 29.2198 25.0616 30.0157 24.936 30.7929C24.8104 31.5701 24.503 32.3067 24.039 32.9426C23.5749 33.5786 22.9672 34.096 22.2653 34.4527C21.5635 34.8094 20.7873 34.9953 20 34.9953C19.2127 34.9953 18.4365 34.8094 17.7347 34.4527C17.0328 34.096 16.4251 33.5786 15.961 32.9426C15.4969 32.3067 15.1896 31.5701 15.064 30.7929C14.9384 30.0157 14.9982 29.2198 15.2383 28.47M5.20667 12.5C5.67661 9.70828 6.92966 7.10741 8.82 5M31.18 5C33.0703 7.10741 34.3234 9.70828 34.7933 12.5" stroke="#CAA24B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
import Navbar from "../Navbar.vue";
import dayjs from 'dayjs';

interface Event {
  name: string;
  location: string | null;
  description: string | null;
  start: string; // ISO date string
}

const events = ref<Event[]>([]);
const isActive = inject("isActive");

// Add the Spotify iFrame API script
if (typeof window !== 'undefined' && !document.querySelector('script[src="https://open.spotify.com/embed/iframe-api/v1"]')) {
  const script = document.createElement('script');
  script.src = "https://open.spotify.com/embed/iframe-api/v1";
  script.async = true;
  document.body.appendChild(script);
}

// Append the Spotify iframe dynamically when the component mounts
onMounted(() => {
  const embedIframe = document.getElementById('embed-iframe');
  if (embedIframe) {
    const iframe = document.createElement('iframe');
    iframe.style.borderRadius = '12px';
    iframe.src="https://open.spotify.com/embed/track/1CsMKhwEmNnmvHUuO5nryA?utm_source=generator" ;
    iframe.width = '100%';
    iframe.height = '120%';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';

    embedIframe.appendChild(iframe);
    
  }

  // Fetch the Google Calendar Events
  const apiKey = import.meta.env.VITE_API_KEY;
  const calendarId = import.meta.env.VITE_CALENDAR_ID;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const sortedEvents = (data.items || [])
        .filter((event: any) => event.start && event.start.dateTime)
        .sort((a: any, b: any) => new Date(b.start.dateTime).getTime() - new Date(a.start.dateTime).getTime())
        .slice(0, 3);

      events.value = sortedEvents.map((event: any) => ({
        name: event.summary,
        location: event.location || null,
        description: event.description || null,
        start: event.start.dateTime,
      }));
    })
    .catch(error => {
      console.error("Error fetching events:", error);
    });
});

// Format date function
function formatDate(dateString: string): string {
  return dayjs(dateString).format("DD MMM"); // Day and abbreviated month
}

// Format time function
function formatTime(dateString: string): string {
  return dayjs(dateString).format("h:mm A"); // Time in 12-hour format with AM/PM
}

// Function to download an .ics file for adding the event to the calendar
function downloadICS(event: Event) {
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your App//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${event.start}@yourapp.com
DTSTAMP:${dayjs(event.start).format('YYYYMMDDTHHmmssZ')}
DTSTART:${dayjs(event.start).format('YYYYMMDDTHHmmssZ')}
SUMMARY:${event.name}
DESCRIPTION:${event.description || ''}
LOCATION:${event.location || ''}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${event.name}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}
</script>

<style scoped>
.content-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
}

.main-container {
    /* Lägg till bakgrundsbild */
    background-image: url('background-pic.jpg');
  background-size:cover; /* Ser till att bilden täcker hela ytan */
  /*background-position: center -64px; /* Placerar bilden centrerat */
  background-position: -250px ; /* Flyttar bilden 60% åt höger och 50px uppåt */
  background-repeat: no-repeat; /* Förhindrar att bilden upprepas */
  /*background-size: 100%; /* Gör bilden 150% av containerstorleken */

    /* Lägg till en mörk överlagring och sänk exponeringen */
  background-color: rgba(0, 0, 0, 0.9); /* Svart färg med 90% transparens */
  background-blend-mode: darken; /* Använd 'darken' för att minska ljusstyrkan */
}


.listen {
  flex: 1;
}

.text {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #f7f7f7;
  margin-bottom: 10px;
  text-align: left;
  -webkit-text-stroke: 5px #000205;
  paint-order: stroke fill;
  -webkit-text-stroke-color: #000205;
}

#embed-iframe {
  width: 100%;
  max-width: 100%;
  
}

.live {
  flex: 1;
}

.events-container {
  background-color: #14181D;
  padding: 20px;
  border-radius: 10px;
  min-height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 100px;
  border: 1px solid rgba(255, 204, 0, 0.58)
}

.event-card {
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
  color: #F7F7F7;
  font-family: "Literata", serif;
  width: 100%;
}

.event-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
  margin-left: -15px;
  margin-top: -10px;
  

}

.event-date {
  background-color: #5939FB;
  padding: 5px;
  border-radius: 7px;
  text-align: center;
  color: #F7F7F7;
  font-weight: 300;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.event-date p {
  margin: 0;
  line-height: 1;
  
}

.event-date p:first-child {
  font-size: 24px;
  font-weight: 300;
}

.event-date p:last-child {
  font-size: 16px;
  text-transform: uppercase;
}

.event-info {
  flex: 1;
  margin-left: 15px;
  text-align: left;
}

.event-info h3 {
  margin: 0 0 1px 0;
  font-size: 20px;
  color: #F7F7F7;
  font-weight: 500;
    margin-left:2px;

}

.event-details-container {
  display: flex;
  align-items: center;
}

.event-time-container, .event-location-container {
  background-color: #5939FB;
  border-radius: 11px;
  padding: 5px 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.event-time, .event-location {
  display: flex;
  align-items: center;
  color: #F7F7F7;
  font-size: 14px;
}

.event-time svg, .event-location svg {
  margin-right: 5px;
}

.event-reminder {
  cursor: pointer;
}

.event-reminder svg {
  width: 30px;
  height: 30px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text {
    font-size: 32px;
  }

  #embed-iframe {
    height: 180px;
    overflow:hidden;
  }

  .event-info h3 {
    font-size: 20px;
  }

  .event-time, .event-location {
    font-size: 12px;
  }

  .event-date {
    width: 50px;
    height: 50px;
  }

  .event-date p:first-child {
    font-size: 30px;
  }

  .event-date p:last-child {
    font-size: 25px;
  }
}

@media (max-width: 377px) {
  .text {
    font-size: 18px;
  }

  #embed-iframe {
    height: 150px;
  }
}
</style>