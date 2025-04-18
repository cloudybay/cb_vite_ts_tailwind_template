import { createApp } from "vue"
import { createPinia } from "pinia"
import "./style.css"
import App from "./App.vue"
import router from "./router"

import "./assets/css/style.css"

const pinia = createPinia()
const app = createApp(App)
app.use(pinia).use(router).mount("#app")
