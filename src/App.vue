<script setup lang="ts">
import AuthLayout from '@/components/Layout/main/AuthLayout.vue'
import { useErrorStore } from './stores/errors'
import AppErrorPage from './components/AppError/AppErrorPage.vue'
import { storeToRefs } from 'pinia'

const { activeError } = storeToRefs(useErrorStore())
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <component :is="Component" :key="route.name">Hi</component>
        <template #fallback>
          <span>Loading....</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
