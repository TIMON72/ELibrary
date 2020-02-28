
const path = require('path');
const bundleFolder = "./wwwroot/assets/";
const srcFolder = "./App/";

module.exports = {
    entry: [
        srcFolder + "index.jsx"
    ], // входная точка - исходный файл
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, bundleFolder),     // путь к каталогу выходных файлов - папка public
        publicPath: 'assets/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module: {
        rules: [   //загрузчик для js
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["es2015", "stage-0", "react"]    // используемые плагины
                }
            }
        ]
    }
};


