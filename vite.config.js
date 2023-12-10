import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/flexicon_forum_app_front_01/',
  plugins: [react()],
})
