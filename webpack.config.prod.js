const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = resolve(__dirname, 'build', 'assets');

module.exports = {
  entry: [
    'babel-polyfill',
    './index.js',
  ],
  output: {
    filename: './js/bundle.js',
    path: assetsPath,
    publicPath: '/assets/js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: 'cssm-[name]_[local]_[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
        }),
			},
      {
       test: /\.svg$/,
       loader: 'svg-inline-loader?classPrefix',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      views: resolve('./src/views/index.js'),
      components: resolve('./src/components/index.js'),
    },
  },
  plugins: [
    new ExtractTextPlugin({
			filename: '/style/main.css',
			disable: false,
			allChunks: true,
		}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }),
  ],
};
