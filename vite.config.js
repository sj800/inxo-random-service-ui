import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 👈 load .env files

  return {
    base: '/inxo-random-service-ui/' , // 👈 dynamic base path
    plugins: [react(), tailwindcss()],
    css: {
      preprocessorOptions: {
        // Optional if you use custom animations here
      },
    },
  }
})
