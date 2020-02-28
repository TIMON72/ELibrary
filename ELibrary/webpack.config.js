
const path = require('path');
const bundleFolder = "./wwwroot/assets/";
const srcFolder = "./App/";

module.exports = {
    entry: [
        srcFolder + "index.jsx"
    ], // ������� ����� - �������� ����
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, bundleFolder),     // ���� � �������� �������� ������ - ����� public
        publicPath: 'assets/',
        filename: "bundle.js"       // �������� ������������ �����
    },
    module: {
        rules: [   //��������� ��� js
            {
                test: /\.jsx?$/, // ���������� ��� ������
                exclude: /(node_modules)/,  // ��������� �� ��������� ����� node_modules
                loader: "babel-loader",   // ���������� ���������
                options: {
                    presets: ["es2015", "stage-0", "react"]    // ������������ �������
                }
            }
        ]
    }
};


