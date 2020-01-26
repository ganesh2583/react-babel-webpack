const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JavaScript files, bundle them as well.
  entry: "./src/index.js",
  // The bundled source code files shall result in a bundle.js file in the /dist folder.
  output: {
    // path: __dirname + "/dist",
    publicPath: "/",
    // filename: "bundle.js",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    //Support Dot Env to read env variables.
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  // Informing Webpack on which files to use the loader (e.g. .js and jsx files)
  // and optionally which folders to exclude from the process (e.g. node_modules):
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // Use babel loader to load js and jsx files.
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.(css|scss)$/,
        // Use style, css and sass loader for style files.
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // Use file loader for image files.
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
