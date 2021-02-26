const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/index.js'
    },
    plugins: [new CleanWebpackPlugin()],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'models',
        libraryTarget: 'umd'
    }
};