module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {},
      // Add more PostCSS plugins as needed
      // Handle charset conflicts or ignore them
      // Example:
      'postcss-browser-comments': {
        browsers: ['last 2 versions', '> 2%'],
      },
    },
  };
  