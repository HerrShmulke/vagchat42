import { createApp } from 'vue'
import './shared/config/style.css'
import App from './app/App.vue'
import { router } from './app/router'

createApp(App).use(router).mount('#app')