const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = common.map(entry => merge(entry, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map'
}))
