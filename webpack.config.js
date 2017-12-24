// Importacion del modulo de path para la configuracion de webpack
const path = require('path');

module.exports = {
    // Donde WebPack debe buscar el archivo de entrada
    entry: './src/app.js',
    // Donde va el archivo de salida
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    // Configuracion del loader
    module: {
        rules: [{
            loader: 'babel-loader',
            // verifica si el archivo termina en .js para correr el babel-loader
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    // Devtools para debugear sin pasar por el codigo del bundle.js
    devtool: 'cheap-module-eval-source-map',
    // Configuracion del WebDevServer como remplazo a live-server
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
};


