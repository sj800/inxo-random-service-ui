import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// log mode and base path
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 👈 load .env files

  return {
    // 👈 log the current mode
    base: '/inxo-random-service-ui/' , // 👈 dynamic base path
    plugins: [react(), tailwindcss()],
    css: {
      preprocessorOptions: {
        // Optional if you use custom animations here
      },
    },
  }

})
