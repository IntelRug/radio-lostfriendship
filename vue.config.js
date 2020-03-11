const path = require('path');

module.exports = {
  publicPath: '/',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, 'src/assets/styles/variables.styl'),
          path.resolve(__dirname, 'src/assets/styles/mixins.styl'),
        ],
      },
    },
    sourceMap: true,
  },

  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg',
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },
};
