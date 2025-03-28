import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: 'terser',
    sourcemap: false,
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Advanced chunk splitting strategy
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue' // Vue core
            }
            if (id.includes('vue-router')) {
              return 'vue-router'
            }
            if (id.includes('pinia')) {
              return 'pinia'
            }
            if (id.includes('lodash') || id.includes('ramda')) {
              return 'utils'
            }
            if (id.includes('axios') || id.includes('fetch')) {
              return 'network'
            }
            return 'vendor' // Other node_modules
          }

          // Split large UI components
          if (id.includes('src/components/') && id.endsWith('.vue')) {
            const match = id.match(/components\/(.*)\//)
            return match ? `ui-${match[1]}` : 'ui'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        pure_funcs: ['console.debug'], // Keep warnings/errors
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', '@heroicons/vue'],
    exclude: ['vue-demi'],
  },
})
