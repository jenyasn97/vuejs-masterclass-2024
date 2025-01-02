<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'
import { useErrorStore } from '@/stores/errors'

useErrorStore().setError({ error: 'Page not found', customCode: 404 })
</script>

<template>
  <AppErrorPage />
</template>

<style scoped></style>
