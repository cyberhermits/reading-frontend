const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client",
    "./src/js/index.tsx"
  ],
  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: "bundle.js"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build/public'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};