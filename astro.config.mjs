import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@atoms': path.resolve('./src/components/atoms'),
        '@molecules': path.resolve('./src/components/molecules'),
        '@organisms': path.resolve('./src/components/organisms')
      }
    }
  }
});
