<script setup lang="ts">
import { ref } from 'vue';
import { checkCarExistence } from '../../../features/check-car-existence/model/check-car-existence';

const response = ref()

checkCarExistence('У940ОВ142').then((res) => {
  response.value = JSON.stringify(res)
})
</script>

<template>
  Home
  {{ response }}
</template>
