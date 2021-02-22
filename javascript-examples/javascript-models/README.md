# Javascript Models


1. project setup  
`npm init --force`

2. install webpack  
`npm install --save-dev webpack webpack-cli`

3. configure webpack  
   1. create `src/index.js`
   2. create and configure `webpack.config.js` (in the project's root)
      1. add entry
      2. configure output management
      3. add `dist` clean-up  
      `npm install --save-dev clean-webpack-plugin`
      4. add Jest  
      `npm install --save-dev jest`
      5. install Babel JS  
      Babel is needed to allow Jest to handle the EcmaScript modules used in the example.  
      `npm install --save-dev @babel/core @babel/preset-env`
      6. create and configure `babel.config.js` (in the project's root folder)