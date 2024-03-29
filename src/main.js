import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-persistedstate';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia().use(piniaPersistedstate()))
app.use(router)

app.mount('#app')