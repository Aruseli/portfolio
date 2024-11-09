<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <main class=" pt-8 flex items-start justify-center min-h-screen">
    <button
      @click="toggleDark()"
      class="py-2 px-4 bg-indigo-500 text-white rounded-md dark:bg-white dark:text-black border border-black dark:border-white"
    >
      Togglex
    </button>
  </main>
</template>

<style scoped>
</style>
