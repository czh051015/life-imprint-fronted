import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/', // 改成根路径，Netlify 部署必须这样写
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})