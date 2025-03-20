import { defineConfig } from 'astro/config';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default defineConfig({
  vite: {
    plugins: [
      alias({
        entries: [
          { find: '@atoms', replacement: path.resolve(__dirname, 'src/components/atoms') },
          { find: '@molecules', replacement: path.resolve(__dirname, 'src/components/molecules') },
          { find: '@organisms', replacement: path.resolve(__dirname, 'src/components/organisms') }
        ]
      })
    ]
  }
});

