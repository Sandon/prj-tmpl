/**
 * Created by lipeng.
 */
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  /*
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  */
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|eot|woff)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "font/[hash:16].[ext]"
          }
        }],
        exclude: [
          path.resolve(__dirname, "./node_modules")
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "img/[hash:16].[ext]"
          }
        }]
      }
    ]
  }
}
