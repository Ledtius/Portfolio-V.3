const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importar el plugin

module.exports = {
  entry: './js/menu.js',  // Archivo JS de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida 'dist'
    clean: true, // Limpia la carpeta 'dist' antes de cada build
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/, // Procesa archivos CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nombre del archivo CSS generado
    }),
    new HtmlWebpackPlugin({
      template: './index.html', // Archivo HTML de entrada (si ya tienes uno)
      filename: 'index.html', // Nombre del archivo HTML de salida en 'dist'
    }),
  ],
  optimization: {
    minimize: true, // Activa la minificación
    minimizer: [
      new TerserPlugin(), // Minificación de JS
      new CssMinimizerPlugin(), // Minificación de CSS
    ],
  },
};
