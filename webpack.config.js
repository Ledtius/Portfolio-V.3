const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './js/menu.js',  // Cambia esto para apuntar a tu archivo JS de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Se guardará en la carpeta 'dist'
    clean: true, // Limpia la carpeta 'dist' antes de generar nuevos archivos
  },
  mode: 'production',  // Esto activará la minificación automáticamente
  module: {
    rules: [
      {
        test: /\.css$/, // Para archivos CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nombre del archivo CSS minificado
    }),
  ],
  optimization: {
    minimize: true, // Activar la minificación
    minimizer: [
      new TerserPlugin(), // Para minificar JS
      new CssMinimizerPlugin(), // Para minificar CSS
    ],
  },
};
