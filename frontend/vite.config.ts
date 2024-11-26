import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['chart.js', 'react-chartjs-2', 'recharts'],
          ui: ['lucide-react', 'clsx', 'tailwind-merge'],
          db: ['sql.js', 'drizzle-orm'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['sql.js'],
  },
  plugins: [react()],
  server: {
    port: 15000,
    strictPort: true,
    host: true,
    hmr: {
      clientPort: 15000,
    },
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});