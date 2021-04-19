const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HandlebarHelpers = require('handlebars-helpers')();
const HandlebarsData = require(path.join(__dirname, "html-dev/handlebars-data.js"));

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  entry: ['babel-polyfill', './assets-dev/js/main.js', './assets-dev/scss/main.scss'],
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, './assets'),
  },
  module: {
    rules: [{
      test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'css/app.css',
        }
      },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader?-url'
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        }]
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './assets-dev/images',
        to: './images'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: './assets-dev/fonts',
        to: './fonts'
      }
    ]),
    new HandlebarsPlugin({
      entry: path.join(__dirname, "html-dev", "pages", "*.hbs"),
      output: path.join(process.cwd(), "static_html", "[name].html"),
      data: HandlebarsData,
      partials: [
        path.join(__dirname, "html-dev", "partials", "**", "*.hbs"),
      ],
      helpers: {
        ...HandlebarHelpers
      }
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['static_html'],
        index: 'home.html',
        routes: {
          "/assets": "assets"
        }
      },
      files: ['assets/css/**/*.css', 'assets/js/**/*.js']
    })
  ]
};