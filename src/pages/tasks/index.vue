<script setup lang="ts">
import { ref } from 'vue'
import { usePageStore } from '@/stores/page'
import { tasksWithProjectsQuery } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'
import type { tasksWithProjects } from '@/utils/supaQueries'
import DataTable from '@/components/ui/data-table/DataTable.vue'

usePageStore().pageData.title = 'Tasks page'

const tasks = ref<tasksWithProjects | null>(null)

const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)

  tasks.value = data
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
