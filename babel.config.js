// Transforma os arquivos feito em React para que o Navegador possa entender
module.exports = {
  presets: [
    "@babel/preset-env", // Importa / altera os pacotes que o navegador não entende
    "@babel/preset-react" // Transforma o que o navegador não entender do React
  ]
};