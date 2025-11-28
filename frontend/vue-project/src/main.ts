import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import '@/assets/global.css'
import { createVuetify } from 'vuetify'
import { vuetifyTheme } from './assets/vuetify'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(vuetifyTheme)
app.mount('#app')
