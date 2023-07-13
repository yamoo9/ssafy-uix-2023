import { defineConfig } from 'vite';

const viteConfig = defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },

  root: '.',
  resolve: {
    alias: {
      '@': 'src/*',
    },
  },

  publicDir: 'assets',

  css: {
    devSourcemap: true,
  },
});

export default viteConfig;
