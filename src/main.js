import { createApp } from 'vue'
import App from './App.vue'

// Import your router
import router from './router'

// Import Pinia
import { createPinia } from 'pinia'

// Optional: import global styles
import './assets/styles.css'

// Create Vue app
const app = createApp(App)

// Create Pinia instance
const pinia = createPinia()

// Register Pinia + Router
app.use(pinia)
app.use(router)

// Mount app
app.mount('#app')
