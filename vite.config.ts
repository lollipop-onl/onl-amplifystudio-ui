import path from 'path';
import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';

export default defineConfig({
  build: {
    lib: {
      name: 'components',
      entry: 'src/components.ts',
      formats: ['umd'],
    },
    outDir: 'dist/lib',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]'
      },
      plugins: [
        alias({
          entries: {
            '~': path.join(__dirname, 'src'),
          }
        })
      ]
    },
  },
})
