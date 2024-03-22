const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3001/",
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  devtool: "source-map",
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_app",
      library: { type: "var", name: "remote_app" },
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.js",
      },
      // shared: {
      //   ...deps,
      //   react: {
      //     singleton: true,
      //   },
      //   "react-dom": {
      //     singleton: true,
      //   },
      // },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
