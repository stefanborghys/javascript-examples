# Javascript Models

## Setup
1. project setup  
`npm init --force`

2. webpack setup 
   1. install webpack  
      `npm install --save-dev webpack webpack-cli`
   2. create `src/index.js`
   3. create and configure `webpack.config.js` in the project's root folder
      1. add entry
      2. configure output management
      3. add `dist` clean-up  
      `npm install --save-dev clean-webpack-plugin`
3. Jest (test) setup
   1. install Jest  
   `npm install --save-dev jest`
   2. install `babel-jest`  
   `npm install --save-dev babel-jest`
   3. add Jest configuration to `package.json` and add `babel-jest` as the transformer
   4. install Babel JS  
   Babel is needed to allow Jest to handle the EcmaScript modules used in the example.  
   `npm install --save-dev @babel/core @babel/preset-env`
   5. create and configure `babel.config.json` in the project's root folder
4. JSDoc setup
   1. install JSDoc  
   `npm install --save-dev jsdoc`
   2. add `document` script to the `package.json`  
   This starts JSDoc from it's local `node_modules` location and points where to find it's cumstom config.
   3. create and configure `jsdoc.conf.json` in the project's root folder   
   Contains custom JSDoc configuration.

