import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: build시 아래 하위 페이지 경로를 지정해야 합니다.
  // base: '하위 페이지 경로',
})
