module.exports = () => {
  return {
    postcssPlugin: 'postcss-remove-charset',
    AtRule: {
      charset: (atRule) => {
        atRule.remove();
      }
    }
  };
};
module.exports.postcss = true;
