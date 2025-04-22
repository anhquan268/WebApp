import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WebApp/', // 👈 thay bằng tên repo
  plugins: [react()],
});