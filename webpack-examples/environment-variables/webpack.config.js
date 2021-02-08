const path = require('path');

module.exports = (env) => {
    console.group();
    console.log('Environment Variables:');

    // NODE_ENV is conventionally used to define the environment type
    console.log('NODE_ENV', env.NODE_ENV);

    // E.g. --env development
    console.log('Development?', env.development);
    console.log('Production?', env.production);
    console.groupEnd();

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    };
};