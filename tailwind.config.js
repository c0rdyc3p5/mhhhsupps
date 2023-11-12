/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      colors: {
        light: '#F8F7F2',
        primary: {
          500: '#8F8061',
          600: '#7F6B4E',
          700: '#6F5A3B'
        },
        gray: '#4C4E49',
        dark: '#191919'
      }
    },
  },
  plugins: [],
}
