import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],

  animation: {
  'pop-pulse': 'popPulse 1.8s ease-out forwards',
},
keyframes: {
  popPulse: {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '30%': { transform: 'scale(1.05)', opacity: 1 },
    '70%': { transform: 'scale(1)', opacity: 1 },
    '100%': { transform: 'scale(0.95)', opacity: 0 },
  },
}

},



)


