const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = common.map(entry => merge(entry, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          ecma: 8,
          sourceMap: true,
          output: {
            comments: false
          },
          toplevel: true,
          safari10: true
        }
      })
    ]
  }
}))
