<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'

usePageStore().pageData.title = 'Home page'
</script>

<style lang="scss" scoped></style>
