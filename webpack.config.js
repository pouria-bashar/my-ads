const webpack = require('webpack');
const { resolve } = require('path');

const jsAssetsPath = resolve(__dirname, 'build', 'assets', 'js');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: jsAssetsPath,
    publicPath: '/assets/js',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
    stats: 'errors-only',
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
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader',
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
      utils: resolve('./src/utils'),
      constants: resolve('./src/constants'),
      _graphql: resolve('./src/graphql'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
