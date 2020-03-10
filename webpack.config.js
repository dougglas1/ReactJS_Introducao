const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // para não enviar o caminho src\index.js, pois pode ter SO que não entenda
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Termine com .js
        exclude: /node_modules/, // Excluir tudo que tenha dentro do node_modules
        use: { 
          loader: 'babel-loader' 
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }, // Permitir importar arquivos dentro do CSS (imagem, fontes, etc)
        ]
      }
    ]
  }
};