import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackAssetsManifest from "webpack-assets-manifest";

/** @type {import("webpack").Configuration} */
export default {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  cache: {
    type: "filesystem",
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs|cjs|mts|cts)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new WebpackAssetsManifest({
      writeToDisk: true,
      entrypoints: true,
      entrypointsUseAssets: true,
    }),
  ],
};
