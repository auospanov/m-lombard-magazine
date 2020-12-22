const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/m-lombard/': '/',
  css: { sourceMap: true },
  chainWebpack: (config) => {
    config.resolve.alias.set('@shared', path.resolve(__dirname, './src/shared'));
    config.resolve.alias.set('@', path.resolve(__dirname, './src'));
  },
};
