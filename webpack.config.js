const path = require("path");

const entryPath = path.resolve(__dirname, "src/js");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    "js/reoako-tinymce-plugin": path.join(entryPath, "tinymce/tinymce.js"),
    "js/reoako-frontend": path.join(entryPath, "frontend/frontend.js"),
  },
  output: {
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
