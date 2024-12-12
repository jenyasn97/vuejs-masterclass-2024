<template>
  <div>
    <h1>Single project {{ route.params?.id }}</h1>
    <RouterLink to="/">Go home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style scoped></style>
