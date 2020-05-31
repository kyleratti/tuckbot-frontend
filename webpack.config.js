"use strict";
const { resolve, join } = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const dotenv = require("dotenv");
const DotenvWebpack = require("dotenv-webpack");

const isDev = process.env["NODE_ENV"] === "development";

dotenv.config();

const PUBLIC_PATH = "/";
const API_SERVER_ROOT = process.env.API_SERVER_ROOT;
const SRC = resolve("src");
const DIST = resolve("dist");

console.log("Webpack build", isDev ? "[development]" : "[production]");
console.log("Targeting API server at", API_SERVER_ROOT);

module.exports = {
  mode: isDev ? "development" : "production",

  devtool: "source-map",

  devServer: {
    contentBase: DIST,
    hot: isDev,
    historyApiFallback: true,
  },

  entry: {
    client: [join(SRC, "./App.tsx")],
  },

  output: {
    filename: "[name]_[hash].bundle.js",
    path: DIST,
    publicPath: isDev ? "/" : PUBLIC_PATH,
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": SRC,
    },
  },

  module: {
    rules: [
      // Process source maps in input sources
      //  All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.(jsx?|tsx?)$/,
        loader: "source-map-loader",
        include: [/src\/.+\.tsx?/],
      },

      //  Run typescript through react-hot-loader to rewrite react components for hot loading.
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },

      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },

      {
        test: /\.s[ac]ss$/,
        loader: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name]_[hash].[ext]",
        },
      },
    ],
  },

  plugins: [
    isDev && new webpack.NamedModulesPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),

    new DotenvWebpack({
      silent: false,
    }),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(isDev ? "development" : "production"),
      },
      API_SERVER_ROOT: JSON.stringify(API_SERVER_ROOT),
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(SRC, "index.ejs"),
    }),
  ].filter((x) => x != false),

  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: true,
    minimize: !isDev,
  },
};
