import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// ROVELBOTS — Build estático optimizado para Hostinger (public_html).
// `base: './'` genera rutas relativas para que el dist funcione
// tanto en dominio raíz como en subcarpeta.
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
  },
  preview: {
    port: 4173,
  },
})
