<script setup lang="ts">
import { ref } from 'vue';
import { initAuth } from '../shared/api/supabase/auth';

const isInitialized = ref(false);

async function bootstrap() {
  console.log('start bootstrap')
  await initAuth()
  isInitialized.value = true;
}

bootstrap()
</script>

<template>
  <div>
    <div>{{ isInitialized }}</div>
    <RouterView v-if="isInitialized" />
  </div>
</template>