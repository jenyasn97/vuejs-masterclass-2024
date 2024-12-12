<template>
  <div>
    <h1>Home page</h1>
    <RouterLink
      :to="{
        name: '/projects/[id]',
        params: {
          id: 1,
        },
      }"
      >Go to projects</RouterLink
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
