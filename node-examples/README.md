# Node JS

🎉 Playground for testing and experimenting with various Node JS libraries, frameworks, ...

Website: [nodejs.org](https://nodejs.org)

## 📌 Node

***

### Frameworks

#### 🛠 Frontend Frameworks
| Project     | Description                          | Website                                |
| ----------- | ------------------------------------ | -------------------------------------- |
| Express JS  | Minimalist web framework for Node JS | [expressjs.com](https://expressjs.com) |

***

### Util Libraries

#### 💬 Http Request / Response
| Project    | Description                                           | Website                                                                        |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| Axios      | Promise based HTTP client for the browser and Node JS | [github.com/axios/axios](https://github.com/axios/axios)                       |
| Needle     | Streamable HTTP client for Node JS                    | [github.com/tomas/needle](https://github.com/tomas/needle)                     |
| Superagent | Promise based HTTP request library                    | [github.com/visionmedia/superagent](https://github.com/visionmedia/superagent) |
| Got        | HTTP request library for Node JS                      | [github.com/sindresorhus/got](https://github.com/sindresorhus/got)             |
| Node Fetch | Light-weight Fetch API for Node JS                    | [github.com/node-fetch/node-fetch](https://github.com/node-fetch/node-fetch)   |

#### 📌 General
| Project | Description                                                             | Website                                                            |
| ------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Glob    | Glob JavaScript implementation, match files using patterns a shell uses | [github.com/isaacs/node-glob](https://github.com/isaacs/node-glob) |

#### 📌 Logging

| Project  | Description               | Website                                                              |
| -------- | ------------------------- | -------------------------------------------------------------------- |
| Winston  | Universal logging library | [github.com/winstonjs/winston](https://github.com/winstonjs/winston) |

#### 📌 Shell

| Project   | Description                   | Website                                              |
| --------- | ----------------------------- | ---------------------------------------------------- |
| Google ZX | Node JS child process wrapper | [github.com/google/zx](https://github.com/google/zx) |

## NPM

CLI Commands: [docs.npmjs.com/cli/v6/commands](https://docs.npmjs.com/cli/v6/commands)

### Audit

Perform a security audit on the project.

Scan project for vulnerabilities and show the details:
- `npm audit`

Scan project for vulnerabilities and automatically install compatible updates to vulnerable dependencies:
- `npm audit fix`

### Init

Create a new NPM project
- `npm init`

Create a new NPM project, without having it ask any questions
- `npm init --force`

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

### Update

Update all the packages listed to the latest version (as specified by the tag config in `package.json`).

- `npm update`

Update globally-installed packages:
- `npm update -g`

Update dev dependencies: 
- `npm update --dev`


