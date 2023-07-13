import { defineConfig } from 'vite';
import multiplePagesPlugin from './vite-plugins/multiplePagesPlugin';

const viteConfig = defineConfig({
  plugins: [multiplePagesPlugin()],
  server: {
    host: 'localhost',
    port: 3000,
  },
});

export default viteConfig;
