# Node JS

Website: [https://nodejs.org](https://nodejs.org)

## Node

## NPM

### Install

Install a package and any packages it depends on.
- `npm install`
- `npm i`
- `npm add` 

By default the package is saven in 'dependencies'. But this can be controlled with flags.

Save as 'dependencies':
- `npm install --save-prod`
- `npm install -P`

Save as 'devDependencies':
- `npm install --save-dev`
- `npm install -D`

Save as 'optionalDependencies':
- `npm install --save-optional`
- `npm install -O`

Don't save:
- `npm install --no-save`

Some extra flags.  
Save with an exact version number:
- `npm install --save-prod --save-exact`
- `npm install --save-prod -E`

Add saved depencencies to 'bundleDependencies':
- `npm install --save-prod --save-bundle`
- `npm install --save-prod -B`

E.g.:
- `npm install --save-prod vl-ui-map@https://github.com/milieuinfo/webcomponent-vl-ui-map#master`

#### Downgrade the NPM version
- `npm install -g npm@[version.number]`  

E.g.: 
- `npm install -g npm@6.14.11`

### List installed packages

Prints all versions of the packages that are installed in a tree structure, 
as well as their dependencies when `--all` is specified 
 
- `npm ls`  
- `npm list`  
- `npm la`  
- `npm ll`  



