import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    port: 3001,        // ← Change to any free port (e.g. 3001, 5174, 8080)
    strictPort: true   // Optional: stop if port is taken
  }
})
