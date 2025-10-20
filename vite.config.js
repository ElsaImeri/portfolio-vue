import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Konfigurime specifike për Vercel
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          styles: ['/src/style.css'] // Siguron që CSS të bundle-ohet mirë
        }
      }
    }
  },
  // Optimizime për production
  optimizeDeps: {
    include: ['vue', 'vue-router']
  },
  server: {
    port: 3000,
    host: true // I lejon lidhjet e jashtme
  }
})