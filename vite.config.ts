import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
   server: {
    host: '0.0.0.0', // ✅ critical for Render
    port: 5173, // or any port, optional
  },
});
