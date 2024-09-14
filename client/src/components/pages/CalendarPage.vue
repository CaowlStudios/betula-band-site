<script lang="ts">
import { ref, onMounted } from "vue";
import Navbar from "../Navbar.vue";
import dayjs from "dayjs";

interface Event {
  name: string;
  location: string | null;
  description: string | null;
  start: string; // ISO date string
}

export default {
  components: {
    Navbar, // Register Navbar component
  },
  setup() {
    const events = ref<Event[]>([]);

    onMounted(async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const calendarId = import.meta.env.VITE_CALENDAR_ID;
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Sort events by date (descending order)
        const sortedEvents = (data.items || [])
          .filter((event: any) => event.start && event.start.dateTime) // Ensure the event has a start dateTime
          .sort((a: any, b: any) => new Date(b.start.dateTime).getTime() - new Date(a.start.dateTime).getTime())
          .slice(0, 3); // Get the 3 most recent events

          events.value = sortedEvents.map((event: any) => ({
  name: event.summary || event.title || event.name, // Use the correct key for the concert name
  location: event.location || null,
  description: event.description || null,
  start: event.start.dateTime,
}));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    });

    // Format date function
    function formatDate(dateString: string): string {
      return dayjs(dateString).format("MMM D, YYYY h:mm A");
    }

    return { events, formatDate };
  },
};
</script>

<template>
  <div class="calendar-container">
    <Navbar />
    <h1 class="title">Upcoming Events</h1>
    <ul class="event-list">
      <li v-for="event in events" :key="event.name" class="event-item">
        <!-- Event Date -->
        <div class="event-date-container">
          <div class="event-date">
            <span class="date-day">{{ formatDate(event.start).split(' ')[1] }}</span>
            <span class="date-month">{{ formatDate(event.start).split(' ')[0] }}</span>
            
          </div>
        </div>

        <!-- Event Details -->
        <div class="event-details">
          <h2 class="event-name">{{ event.name }}</h2>
          <div class="event-time-location">
            <!-- Time Box -->
            <div class="time-box" > 
              
              <!-- fix later -->
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.86668 18.0667C4.08021 18.0667 0.200012 14.1865 0.200012 9.40007C0.200012 4.6136 4.08021 0.733398 8.86668 0.733398C13.6531 0.733398 17.5333 4.6136 17.5333 9.40007C17.5333 14.1865 13.6531 18.0667 8.86668 18.0667ZM8.86668 16.3334C12.6959 16.3334 15.8 13.2293 15.8 9.40007C15.8 5.57089 12.6959 2.46673 8.86668 2.46673C5.0375 2.46673 1.93335 5.57089 1.93335 9.40007C1.93335 13.2293 5.0375 16.3334 8.86668 16.3334ZM9.30001 9.8334H11.0333H13.6333V11.1334H8.00001V4.20007H9.30001V7.2334V9.8334Z" fill="#F7F7F7"/>
</svg>
   <!-- fix later -->

              <i class="fas fa-clock"></i>
              {{ formatDate(event.start).split(' ')[2] + ' ' + formatDate(event.start).split(' ')[3] }}
            </div>
            <!-- Location Box -->
            <div class="location-box">
              <i class="fas fa-map-marker-alt"></i>
              {{ event.location || 'Location not specified' }}
            </div>
          </div>
          <!-- White line inside the gray box (divider) -->
          <hr class="event-divider" />
        </div>

        <!-- Bell Icon -->
        <div class="event-bell">
          <i class="fas fa-bell"></i> <!-- Bell icon, adjust based on your icon set -->
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.calendar-container {
  background-color: #000205;
  color: #f5f5f5;
  padding: 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #ff5722;
}

.event-list {
  list-style: none;
  padding: 0;
}

.event-item {
  display: flex;
  align-items: center;
  background: #333;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

.event-date-container {
  background-color: #673ab7;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date-day {
  font-size: 1.5rem;
  font-weight: bold;
}

.date-month {
  font-size: 1rem;
}

.event-details {
  flex-grow: 1;
  position: relative;
}

.event-name {
  font-size: 1.4rem;
  margin: 0 0 10px 0;
  color: #ffab40;
  text-align: left;
}

.event-time-location {
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.time-box, .location-box {
  background-color: #673ab7; /* Purple background */
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
}

.event-bell {
  color: #ffab40;
  font-size: 1.5rem;
  margin-left: 15px;
}

.event-divider {
  border: 1px solid white;
  margin-top: 10px;
}
</style>
