import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  optimizeDeps: {
    include: [
      '@mui/material/Tooltip',
      '@emotion/styled',
      '@mui/material/Unstable_Grid2',
      '@mui/material/Box'
    ]
  }
})
