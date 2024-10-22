   /** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
}