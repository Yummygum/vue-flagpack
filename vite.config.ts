import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Flag',
      fileName: 'vue-flag-rollup',
      formats: ['es', 'cjs', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'flagpack-core': 'flagpackCore'
        }
      }
    }
  }
})
