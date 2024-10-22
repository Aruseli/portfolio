import { reactive, readonly } from 'vue';

const state = reactive({
  isDark: false, // По умолчанию светлая тема
});

const toggleTheme = () => {
  state.isDark = !state.isDark;
  document.body.classList.toggle('dark', state.isDark);
};

export const theme = readonly(state);
export const useTheme = () => ({
  theme: state,
  toggleTheme,
});