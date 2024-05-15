import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import million from '@million/lint'

export default defineConfig({
  plugins: [million.vite(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
