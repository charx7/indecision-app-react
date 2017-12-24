// Importacion del modulo de path para la configuracion de webpack
const path = require('path');

module.exports = {
    // Donde WebPack debe buscar el archivo de entrada
    entry: './src/app.js',
    // Donde va el archivo de salida
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    }
};