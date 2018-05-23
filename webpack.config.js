const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('allstyles.css');
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader' ])
      },
      {
        test: /\.(ts|tsx)$/,
        use: [ 'awesome-typescript-loader' ]
      },
      {
        test: /\.less$/,
        use: extractCSS.extract([ 'css-loader', 'less-loader' ])
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.tsx', '.ts'] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000,
    publicPath: "http://localhost:3000/dist"
  },
  plugins: [ extractCSS, new webpack.HotModuleReplacementPlugin() ]
};