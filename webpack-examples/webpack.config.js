const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Example - Development',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader','css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader']
        },
        {
            test: /\.xml$/i,
            use: ['xml-loader']
        },
        {
            test: /\.toml$/i,
            type: 'json',
            parser: {
                parse: toml.parse
            }
        },
        {
            test: /\.yaml$/i,
            type: 'json',
            parser: {
                parse: yaml.parse
            }
        },
        {
            test: /\.json5$/i,
            parser: {
                parse: json5.parse
            }
        }]
    }
};