import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
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
            // priradí knihovny do samostatných chunku podle názvu balícku
            const modules = [
              'vue',
              'vue-router',
              'pinia',
              'lodash',
              'axios',
              '@floating-ui/dom',
              // a další knihovny, které by mohly tvorit významné cásti vašeho kódu
            ]

            const chunkName = modules.find((module) => id.includes(module))
            return chunkName ? `vendor-${chunkName}` : 'vendor-others'
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
    include: ['vue', 'vue-router', 'pinia',],
  },
})
