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
    Navbar // Register the Navbar component
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
          name: event.summary,
          location: event.location || null,
          description: event.description || null,
          start: event.start.dateTime, // Include start date/time for additional styling
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
        <div class="event-date">{{ formatDate(event.start) }}</div>
        <h2 class="event-name">{{ event.name }}</h2>
        <p class="event-location">{{ event.location || 'Location not specified' }}</p>
        <p class="event-description">{{ event.description || 'No description available' }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.calendar-container {
  background-color: #000205;
  color: #f5f5f5;
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
  background: #333;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.event-date {
  font-size: 0.9rem;
  color: #9e9e9e;
  margin-bottom: 10px;
}

.event-name {
  font-size: 1.4rem;
  margin: 0 0 5px 0;
  color: #ffab40;
}

.event-location, .event-description {
  margin: 0;
  color: #b0bec5;
}

.event-location::before {
  content: "📍 ";
}

.event-description::before {
  content: "📝 ";
}
</style>
