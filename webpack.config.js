/* eslint-disable */
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (_, argv) => {
  return {
    entry: {
      main: './src/index.ts',
    },
    output: {
      path: path.join(__dirname, './public/dist'),
      filename: '[name]-[hash].js',
      publicPath: argv.mode === 'production' ? '' : 'http://localhost:4001/',
    },
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.scss'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [new ManifestPlugin(), new VueLoaderPlugin()],
    devServer: {
      contentBase: '../public/dist',
      port: 4001,
      disableHostCheck: true,
      host: '0.0.0.0',
    },
  };
};
