/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#8a172b',
        },
        accent: {
          500: '#d9b036',
        },
        navy: {
          500: '#1c2c5e'
        },
        gray:{
          500:'#6b7280'
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        accent:  ['Cinzel', 'serif'],
        sans:    ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}