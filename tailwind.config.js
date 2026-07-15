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
          500: '#a62c2c',
        },
        accent: {
          500: '#d9b036',
        },
        navy: {
          500: '#1c2c5e'
        },
      }
    },
  },
  plugins: [],
}