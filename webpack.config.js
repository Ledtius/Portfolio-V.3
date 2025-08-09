const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/menu.js",
  output: {
    filename: "bundle.[contenthash].js", // Hash en JS
    path: path.resolve(__dirname, "dist"),
    clean: true, // Limpia dist antes de cada build
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "image/[name].[contenthash][ext]", // Hash en imágenes
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // 👈 Necesario para procesar imágenes en HTML
        options: {
          sources: {
            list: [
              // Procesa atributos src, srcset, etc.
              "...",
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css", // Hash en CSS
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "_headers", to: "." }, // Copia headers si existen
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
