import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

import "./assets/css/style.css"
import i18n from './i18n'


// import './libs/cb-js/cb.date.ts'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
  .use(router)
  .use(i18n)
  .mount('#app')
