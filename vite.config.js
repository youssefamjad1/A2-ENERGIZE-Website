import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import postcssNormalize from 'postcss-normalize';

export default defineConfig({
  plugins: [react(), postcssImport(), postcssNormalize()],
});
