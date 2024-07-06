const purify = require('purify-css');
const fs = require('fs');

const content = [
  './src/**/*.html',
  './src/**/*.jsx',
  './src/**/*.js',
  './src/**/*.ts',
  './src/**/*.tsx',
  './public/index.html',
];

const css = ['./dist/main.css'];

const options = {
  output: './dist/main.purified.css',
  minify: true,
};

purify(content, css, options, (result) => {
  fs.writeFileSync(options.output, result);
  console.log('PurifyCSS: unused CSS removed and output saved to', options.output);
});
