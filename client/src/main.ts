import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VideoBackground from 'vue-responsive-video-background-player'

createApp(App).component('video-background', VideoBackground).mount('#app')
