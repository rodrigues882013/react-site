
process.noDeprecation = true;

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

//Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//Html plugin config
const htmlPluginConfig = {
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
};

//Plugins in use to production
const plugins = [
  new ExtractTextPlugin('assets/css/style.min.css'),
  new HtmlWebpackPlugin(htmlPluginConfig),
  new webpack.optimize.UglifyJsPlugin({mangle: false})
];

const config = {
  context: path.resolve(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./App.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss?/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      }

    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.min.js"
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;
