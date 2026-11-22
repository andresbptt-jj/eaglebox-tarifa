import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base relativo para que funcione en GitHub Pages (/eaglebox-tarifa/)
export default defineConfig({ plugins: [react()], base: './', server: { port: 5173 }, test: { environment: 'jsdom' } })
