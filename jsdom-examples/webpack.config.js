const path = require('path');

module.exports = {
    entry: './src/index.js',
    node: {
        global: true
    },
    resolve: {
        fallback: { 
            "util": false ,
            "assert": false,
        }
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
};