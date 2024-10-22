<script setup lang="ts">
import { ref } from 'vue'

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <main
    class=" pt-8 flex items-start justify-center bg-slate-700 min-h-screen"
  >
    
      <button
        @click="toggleDark()"
        class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black"
      >
        Toggle
      </button>
    
  </main>
</template>

<style scoped>
</style>
