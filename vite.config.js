import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import postcssNormalize from 'postcss-normalize';
import fs from 'fs';
import path from 'path';

// Custom function to remove @charset from a CSS file
function removeCharsetFromFile(filePath) {
  const cssContent = fs.readFileSync(filePath, 'utf8');
  const cleanedContent = cssContent.replace(/@charset "UTF-8";/g, '');
  fs.writeFileSync(filePath, cleanedContent, 'utf8');
}

// Paths to the CSS files with charset declarations
const cssFiles = [
  path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
  path.resolve(__dirname, 'node_modules/slick-carousel/slick/slick-theme.css')
];

// Remove @charset from specified files
cssFiles.forEach(removeCharsetFromFile);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssImport({
          skipDuplicates: false,
        }),
        postcssNormalize({
          forceImport: true,
        }),
      ],
    },
  },
});
