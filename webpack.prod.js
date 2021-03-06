const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    //Remove Dist folder and re-create with new build
    new CleanWebpackPlugin(),
  ],
});
