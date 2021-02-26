const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            'fix': true,
            'formatter': 'table'
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'models',
        libraryTarget: 'umd'
    }
};