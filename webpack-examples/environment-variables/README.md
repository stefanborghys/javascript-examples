# Webpack

## Environment Variables

Guide: [https://webpack.js.org/guides/environment-variables/](https://webpack.js.org/guides/environment-variables/)

### Setup
Initial project setup:  
`npm init --force`

Install 'webpack' and 'webpack-cli' as dev dependencies:  
`npm install --save-dev webpack webpack-cli`

Create `src` folder

Create `src/index.js` file

Add a 'build' script with value 'webpack' to package.json

Build the project:
`npm run build`

Add .gitignore

### Webpack configuration

Add `webpack.config.js`

Allow the configuration to accept the `env` environment variable.
By converting `module.exports` into a function.

Run and add npm scripts:  
`npm run build`  
`npm run build-dev`  
`npm run build-prod`  
`npm run build-local`  