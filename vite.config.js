import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    // Shto këto për CSS
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        },
        // Shto këto për assets
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router']
  },
  server: {
    port: 3000,
    host: true
  },
  // Shto këtë seksion të ri për CSS
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/style.css";`
      }
    }
  }
})