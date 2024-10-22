<script setup>
import { ref, watchEffect } from 'vue';

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

// Слушаем изменение темы в системе
watchEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  isDarkMode.value = mediaQuery.matches;
  document.documentElement.classList.toggle('dark', isDarkMode.value);

  const listener = (event) => {
    isDarkMode.value = event.matches;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  };

  mediaQuery.addEventListener('change', listener);
  return () => {
    mediaQuery.removeEventListener('change', listener);
  };
});
</script>

<template>
  <button @click="toggleTheme" class="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded">
    {{ theme.isDark ? 'Светлая тема' : 'Темная тема' }}
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>