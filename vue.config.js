const path = require('path');

module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, 'src/assets/styles/normalize.styl'),
          path.resolve(__dirname, 'src/assets/styles/typography.styl'),
        ],
      },
    },
    sourceMap: true,
  },
};
