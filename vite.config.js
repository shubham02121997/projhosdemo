import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/st-joseph-hospital-demo/',
  server: {
    port: 8080,
    host: '127.0.0.1'
  }
})