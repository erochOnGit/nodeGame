const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodeExternals = require("webpack-node-externals");

const universalRules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/react"]
      }
    }
  }
];

module.exports = [
  {
    name: "client",
    mode: "development",
    entry: "./src/web/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      })
    ],
    module: {
      rules: [...universalRules]
    },
    devServer: {
      contentBase: "./build",
      host: "0.0.0.0",
      disableHostCheck: true
    }
  },
  {
    name: "server",
    mode: "development",
    target: "node",
    externals: [NodeExternals()],
    entry: [path.resolve(__dirname, "src/server/index.ts")],
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "build")
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "ts-loader"
        },
        ...universalRules
      ]
    }
  }
];
