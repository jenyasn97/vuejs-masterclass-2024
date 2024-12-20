<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page'
import { projectsQuery } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'
import type { Projects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Projects page'

const projects = ref<Projects | null>(null)

const getProgects = async () => {
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  projects.value = data
}

await getProgects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
