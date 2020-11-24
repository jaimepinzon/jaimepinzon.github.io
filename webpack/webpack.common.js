const path = require('path')
const buildFolder = (innerFolder) => path.resolve(__dirname, '../', (innerFolder || ''))

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
  }
}

module.exports = [
  externalsAndStaticCompiler,
  appCompiler
]
