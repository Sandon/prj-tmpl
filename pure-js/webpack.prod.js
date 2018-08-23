/**
 * Created by lipeng on 2018/4/11.
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    /*new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production")
    }),*/
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    })*/
  ],
  module: {
    rules: [
    ]
  }
})
