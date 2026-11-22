import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo at /E_Com/ (set by the deploy workflow)
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
