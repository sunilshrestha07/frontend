import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: '',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
