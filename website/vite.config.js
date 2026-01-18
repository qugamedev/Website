import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.obj', '**/*.mtl'],
  plugins: [
    react(),
  ],
  build: {
    outDir: 'build', // react-scripts's default build output
  },
  server: {
    open: true,
    port: 3000,
  },
});