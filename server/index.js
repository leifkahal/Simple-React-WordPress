#!/usr/bin/env nodejs

require('ignore-styles')

require('@babel/register') ({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')

const http = require('http')
const options = {
  hostname: 'admin.simplereactwordpress.com',
  port: 80,
  path: '/wp-content/themes/build/js/config.php',
  method: 'GET'
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    global.Configs = d;
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()