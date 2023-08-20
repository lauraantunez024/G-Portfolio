import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AnimeJSPlugin from './plugins/vue-anime'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
.use(AnimeJSPlugin)

app.mount('#app')
