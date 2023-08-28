import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
.use(AOS)

app.mount('#app')
