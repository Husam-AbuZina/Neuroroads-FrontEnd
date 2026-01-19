import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Neuroroads_Portfolio_Official/', // اسم الريبو على GitHub
  build: {
    outDir: 'dist', // عشان GitHub Pages يقرأ من مجلد docs
  },
})
