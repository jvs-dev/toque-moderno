import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import * as path from 'path'

export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@assets': `${path.resolve(__dirname, './src/assets/')}`
    }
  }
})
