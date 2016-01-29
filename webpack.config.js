var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/dist',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.json/,
        loaders: ['json']
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css?modules', 'autoprefixer', 'sass']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DS Rack',
      filename: './index.html',
      template: './index.html',
      inject: true
    })
  ]
}
