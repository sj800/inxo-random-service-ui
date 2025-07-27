// tailwind.config.js

import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        popPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '30%': { transform: 'scale(1.05)', opacity: '1' },
          '70%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
      },
      animation: {
        'pop-pulse': 'popPulse 1.8s ease-out forwards',
      },
    },
  },
  plugins: [],
})
