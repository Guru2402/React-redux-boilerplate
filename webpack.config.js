module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/bin",
    filename: "src.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["react-hot-loader/webpack", "babel-loader"]
      }
    ]
  }
};
