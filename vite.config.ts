import {defineConfig} from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: './',
  server: {
    hmr: false
  },
  build: {
    outDir: 'docs',
  }
})
