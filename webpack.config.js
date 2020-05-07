/* eslint-disable */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = () => ({
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'cheap-module-eval-source-map' : 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/main.ts'),
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: devMode ? '[name].js' : '[name]-[hash].js',
    publicPath: devMode ? 'http://localhost:4001/' : '',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: '@vue/runtime-dom',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: devMode },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ManifestPlugin(),
  ],
  devServer: {
    contentBase: '../public/dist',
    port: 4001,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
});
