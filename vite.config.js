import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssMixins from 'postcss-mixins';
import postcssPresetEnv from 'postcss-preset-env';

// Custom PostCSS plugin to remove @charset rules
const removeCharset = () => {
  return {
    postcssPlugin: 'remove-charset',
    AtRule: {
      charset: atRule => {
        atRule.remove();
      }
    }
  };
};

removeCharset.postcss = true;

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        postcssUrl(),
        postcssMixins(),
        postcssPresetEnv(),
        removeCharset()
      ]
    }
  }
});
