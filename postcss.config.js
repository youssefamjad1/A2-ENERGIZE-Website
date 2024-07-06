module.exports = {
    parser: 'postcss-safe-parser',
    plugins: [
      require('postcss-import'),
      require('./postcss-remove-charset'), // Add the custom plugin here
      // Add other PostCSS plugins here if needed
    ],
  };
  