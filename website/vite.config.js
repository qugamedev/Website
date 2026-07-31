import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', //The public base path for the website.
  assetsInclude: ['**/*.obj', '**/*.mtl'], //Accounts for additional file types like the Blender Object type (**.obj)
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