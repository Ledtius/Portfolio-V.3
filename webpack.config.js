const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/menu.js",
  output: {
    filename: "bundle.[contenthash].js", // hash en JS
    path: path.resolve(__dirname, "dist"),
    clean: true, // limpia dist antes de cada build
    assetModuleFilename: "image/[name].[contenthash][ext]", // por si se usa asset/resource global
  },
  mode: "production",
  module: {
    rules: [
      // Para procesar HTML y detectar imágenes
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              "...", // incluye las reglas por defecto
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "link",
                attribute: "href",
                type: "src",
              },
            ],
          },
        },
      },
      // Para CSS
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // Para imágenes y otros assets
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "image/[name].[contenthash][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css", // hash en CSS
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "_headers", to: "." }, // copia headers para Netlify
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
