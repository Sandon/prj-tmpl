/**
 * Created by lipeng.
 */
const path = require('path')
const webpack = require('webpack')
const express = require('express')
const proxy = require('http-proxy-middleware')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.dev')
const opn = require('opn')

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(hotMiddleware(compiler))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie")
  next()
})

const proxyConfig = {
  "target": "https://alpha-labs.aidigger.com",
  'pathRewrite': { '^/proxy': '' },
  'headers': {
    cookie: 'code=546480; skey="yg0ExDVDwxDTIntMh+mqs+mODMTN8ws7"; username="proxy"',
    host: 'alpha-labs.aidigger.com'
  }
}

app.use('/proxy', proxy(proxyConfig))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index-dev.html'))
})

app.listen(8877, function (err) {
  if (err) {
    return console.error(err)
  }

  opn("http://localhost:8877")
})
