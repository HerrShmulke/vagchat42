<script setup lang="ts">
import { initAuth } from '../shared/api/supabase/auth';

const isInitialized = ref(false);

async function bootstrap() {
  await initAuth()
  isInitialized.value = true;
}

bootstrap()
</script>

<template>
  <RouterView v-if="isInitialized" />
</template>