import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./style.css"
import store from "./store/index";
import * as filter from "./filters/index"

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')

app.config.globalProperties.$filters = filter
