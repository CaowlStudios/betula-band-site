<script lang="ts">
import { ref, onMounted } from "vue";
import Navbar from "../Navbar.vue";

export default {
  components: {
    Navbar // Register the Navbar component
  },
  setup() {
    const events = ref([]);

    onMounted(async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const calendarId = import.meta.env.VITE_CALENDAR_ID;
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        events.value = data.items.map((event: any) => ({
          name: event.summary,
          location: event.location,
          description: event.description,
        }));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    });

    return { events };
  },
};
</script>

<template>
  <div>
    <Navbar />
    <h1>Upcoming Events</h1>
    <ul>
      <li v-for="event in events" :key="event.name">
        <h2>{{ event.name }}</h2>
        <p>{{ event.location }}</p>
        <p>{{ event.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h2 {
  margin: 0;
  font-size: 20px;
  color: #f7f7f7;
}

p {
  margin: 0;
  color: #ccc;
}
</style>
