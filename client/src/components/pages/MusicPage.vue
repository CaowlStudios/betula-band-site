<template>
  <div>
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
                <p>{{ formatDate(event.start).split(" ")[1] }}</p>
                <p>{{ formatDate(event.start).split(" ")[0].toUpperCase() }}</p>
              </div>
              <div class="event-info">
                <h3>{{ event.name }}</h3>
                <div class="event-details-container">
                  <div class="event-time-container">
                    <span class="event-time">
                      <!-- Clock icon with time inside purple background -->
                      <svg width="30" height="25" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8666 19.0667C6.08018 19.0667 2.19998 15.1865 2.19998 10.4001C2.19998 5.6136 6.08018 1.7334 10.8666 1.7334C15.6531 1.7334 19.5333 5.6136 19.5333 10.4001C19.5333 15.1865 15.6531 19.0667 10.8666 19.0667ZM10.8666 17.3334C14.6958 17.3334 17.8 14.2293 17.8 10.4001C17.8 6.57089 14.6958 3.46673 10.8666 3.46673C7.03747 3.46673 3.93331 6.57089 3.93331 10.4001C3.93331 14.2293 7.03747 17.3334 10.8666 17.3334ZM11.3 10.8334H13.0333H15.6333V12.1334H9.99998V5.20007H11.3V8.2334V10.8334Z" fill="#F7F7F7"/>
                      </svg>
                      {{ formatTime(event.start) }}
                    </span>
                  </div>

                  <div class="event-location-container">
                    <span v-if="event.location" class="event-location">
                      <!-- SVG icon for the location -->
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2424 16.8426C14.636 17.2204 15.2716 16.8144 15.0943 16.2984L10.8917 4.07288C10.7309 3.60494 10.0691 3.60494 9.90822 4.07288L5.77952 16.0837C5.60215 16.5997 6.2378 17.0057 6.63139 16.6278L9.96495 13.4276C10.1662 13.2345 10.484 13.2345 10.6852 13.4276L14.2424 16.8426Z" stroke="#F7F7F7" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      {{ event.location }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="event-reminder" @click="downloadICS(event)">
                <!-- Bell icon replaced with provided SVG -->
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
import NavBarPage from "./NavBarPage.vue";
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
    iframe.src = "https://open.spotify.com/embed/track/0j2JcSeuF8ElJTrC8g6493?utm_source=generator&theme=0";
    iframe.width = '100%';
    iframe.height = '200%';
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
        .filter((event: any) => event.start && event.start.dateTime) // Ensure the event has a start dateTime
        .sort((a: any, b: any) => new Date(b.start.dateTime).getTime() - new Date(a.start.dateTime).getTime())
        .slice(0, 3); // Get the 3 most recent events

      events.value = sortedEvents.map((event: any) => ({
        name: event.summary,
        location: event.location || null,
        description: event.description || null,
        start: event.start.dateTime, // Include start date/time for additional styling
      }));
    })
    .catch(error => {
      console.error("Error fetching events:", error);
    });
});

// Format date function
function formatDate(dateString: string): string {
  return dayjs(dateString).format("D MMM"); // Full date and time
}

// Format time function to return only the time
function formatTime(dateString: string): string {
  return dayjs(dateString).format("h:mm A"); // Only returns the time, e.g., "6:00 PM"
}

// Function to download an .ics file for adding the event to the calendar
function downloadICS(event: Event) {
  // Create the .ics file content
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

  // Create a blob with the ics content and download it
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
/* Container to take the full height of the viewport */
.content-container {
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space between sections */
  padding: 0 20px; /* Add some side padding */
  box-sizing: border-box; /* Make sure padding is included in width calculation */
}

/* Listen Section */
.listen {
  flex: 1;
}

.text {
  font-family: "Literata", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px; /* Reduce font size for smaller screens */
  color: #f7f7f7;
  margin-bottom: 10px;
  text-align: left;
}

/* Spotify Embed */
#embed-iframe {
  width: 100%;
  max-width: 100%;
  height: 200px; /* Reduce the height for smaller screens */
}

/* Live Section */
.live {
  flex: 1;
}

.events-container {
  background-color: #14181D;
  padding: 20px; /* Increase padding to make the background bigger */
  border-radius: 10px;
  min-height: 290px; /* Set a minimum height to increase the background size */
  display: flex;
  flex-direction: column; /* Ensure that events stack vertically */
  justify-content: flex-start; /* Align items to the top */
  border: 2px solid rgba(255, 204, 0, 0.2);   /* Yellow border for the entire card */

}

/* Each event card */
.event-card {
  background-color: #2b2b2b;
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
  font-family: "Literata", serif;
  width: 100%;
}

/* Event content wrapper - align items horizontally */
.event-content-wrapper {
  display: flex;
  align-items: center; /* Vertically center items */
  justify-content: space-between; /* Space between the date, info, and bell */
  width: 100%; /* Ensure it takes up the full width */
  border-bottom: 2px solid #ffffff; /* Border across the full content width */
  padding-bottom: 5px; /* Add padding to push content up */
  margin-left: -10px;

}

.event-date {
  background-color: #5939FB;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  width: 32px; /* Adjust size to match your desired look */
  height: 30px;
  display: flex;
  flex-direction: column-reverse; /* Make the number appear above the month */
  justify-content: center;
  align-items: center;
}

.event-date p {
  margin: 0;
  font-size: 21px;
  text-transform: uppercase;
}

/* Increase font size for the day */
.event-date p:first-child {
  font-size: 20px; /* Make the day (number) bigger */
  text-transform: uppercase;
  font-weight: 50;
  line-height: 0.8;
}

/* Keep the month font size the same */
.event-date p:last-child {
  font-size: 43px; /* Smaller size for the month */
  text-transform: uppercase;
  font-weight: 20;
  line-height: 0.75;
}

.event-info {
  flex: 1;
  margin-left: 5px;
  text-align: left; /* Align text to the left */
}

.event-info h3 {
  margin: 0;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
}

/* Separated time and location containers */
.event-details-container {
  display: flex;
  align-items: center;
}

/* Time Container */
.event-time-container {
  background-color: #5939FB; /* Purple background for time */
  border-radius: 10px;
  width: 90px;
  padding: 1px 1px;
  margin-right: 5px; /* Add margin to separate time and location */
}

/* Location Container */
.event-location-container {
  background-color: #5939FB; /* Different background color for location */
  border-radius: 10px;
  padding: 2px 5px;
}

/* Ensure the text color remains readable */
.event-time, .event-location {
  display: flex;
  align-items: center;
  color: #fff; /* Keep the text white for contrast */
}

.event-reminder {
  font-size: 24px;
  cursor: pointer;
  color: #ffcc00;
}

/* Styles for the purple/blue box like in the second image */
.event-card.highlight {
  background-color: transparent;
  border-color: transparent;
  color: #fff;
}

.event-card.highlight .event-date {
  background-color: #5859ff;
  color: #fff;
}

.event-card.highlight .event-info h3 {
  color: #fff;
}

.event-card.highlight .event-details span {
  color: #e0e0e0;
}

.event-card.highlight .event-reminder {
  color: #ffcc00;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .event-info h3 {
    font-size: 16px;
  }

  .event-details span {
    font-size: 12px;
  }

  .event-reminder {
    font-size: 20px;
  }
}

/* Box for the live section */
.box {
  width: 100%;
  height: 120px; /* Further reduced height */
  background-color: #14181D;
  border-radius: 10px;
}

/* Adjustments for iPhone XR or similar-sized devices */
@media (max-width: 768px) { /* For iPhone XR and similar */
  .text {
    font-size: 20px; /* Slightly larger text for bigger devices */
  }

  #embed-iframe {
    height: 180px; /* Slightly larger height */
  }

  .box {
    height: 285px; /* Larger height for slightly larger screens */
  }
}

/* Adjustments for iPhone SE */
@media (max-width: 377px) { /* For iPhone SE */
  .text {
    font-size: 18px; /* Smaller text size */
  }

  #embed-iframe {
    height: 150px; /* Smaller height for iPhone SE */
  }

  .box {
    height: 130px; /* Specific box height for iPhone SE */
  }
}

</style>
