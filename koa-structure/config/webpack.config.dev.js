const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  module: 'development',
  devtools: 'eval-source-map',
  status: { children: false }
})

module.exports = webpackConfig