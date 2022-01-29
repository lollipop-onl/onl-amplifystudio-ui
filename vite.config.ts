import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: 'components',
      entry: 'src/components.ts',
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].[format].js',
      }
    },
  },
})
