import { createApp } from 'vue'
import './shared/config/style.css'
import App from './app/App.vue'
import { router } from './app/router'
import { initAuth } from './shared/api/supabase/auth'

async function bootstrap() {
  await initAuth()
  createApp(App).use(router).mount('#app')
}

bootstrap()