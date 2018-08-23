/**
 * Created by lipeng.
 */
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  /*devServer: {
    contentBase: './dist',
    hot: true
  },*/
  entry: [
    "webpack-hot-middleware/client",
    "./src/index.js" // Your appʼs entry point
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/main.bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: "css/styles.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]_[local]_[hash:4]"
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }
})
