const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common');

module.exports = merge(commonConfiguration, {
  mode: 'development',
  devServer: {
    open: false,
    compress: true,
    hot: true,
  },
});
