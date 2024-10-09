/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      RobotoCondensed: ['Roboto Condensed', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
      Noto: ['Noto Sans TC', 'sans-serif'],
    },
    extend: {
      colors: {
      },
      textShadow: {
      },
      zIndex: {
      },
    },
  },
  plugins: [],
}
