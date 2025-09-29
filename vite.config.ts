import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Exit if port is already in use instead of trying next available port
    host: true // Allow access from network
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
