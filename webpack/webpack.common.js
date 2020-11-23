const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const buildFolder = (innerFolder) => path.resolve(__dirname, '../build', (innerFolder || ''))

const baseConfigObject = {
  output: {
    path: buildFolder('javascript'),
    publicPath: '/javascript/',
    chunkFilename: '[id].chunk.js',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: true
            }
          }
        ]
      }
    ]
  }
}

const appCompiler = {
  ...baseConfigObject,
  entry: {
    index: './src/index.js'
  },
  externals: {
    'React': 'React',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'ReactDOM': 'ReactDOM'
  }
}

const externalsAndStaticCompiler = {
  ...baseConfigObject,
  entry: {
    externals: './src/externals.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'assets',
          to: buildFolder('assets')
        },
        {
          from: 'src/html/index.html',
          to: buildFolder()
        }
      ]
    })
  ]
}

module.exports = [
  externalsAndStaticCompiler,
  appCompiler
]
