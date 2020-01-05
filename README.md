# react-babel-webpack
Simple Boiler Plate with React Babel 7 and Webpack 4. 

Clone the repository and run `npm install`

## Commands 

Start the application in Dev Mode on port : 8080
`npm start`

```
Time: 1540ms
Built at: 01/04/2020 8:18:44 PM
     Asset       Size  Chunks             Chunk Names
 bundle.js   1.48 MiB    main  [emitted]  main
index.html  191 bytes          [emitted]
```

Generate Production Build:
`npm run build:prod`

```
Time: 2778ms
Built at: 01/04/2020 8:23:18 PM
     Asset       Size  Chunks             Chunk Names
 bundle.js    134 KiB       0  [emitted]  main       
index.html  191 bytes          [emitted]
```

Start the Production build on port : 8090
`npm run start:prod`

## Description

This is a basic project with which uses Babel 7, Webpack 4 and React.

### Babel
    To transpile the ES6 syntax and JSX to JS which can be understood by browsers. We use .babelrc file to define the presets. This presets are required for babel to traspile our React components and other latest advance JS technologies to be js code which can be understood by old browsers.

### Webpack
    Webpack is module bundler for latest JS technologies. We use webpack.common.js to define the 
        - Entry and outputs of Webpack.
        - Plugins to be used to bundle our code. Here we configure JS and JSX files to be loaded using Babel.
        - HTML plugin to render the html code.
        - Style loader, CSS loder and SASS loader to load CSS and SASS files.
        - File loader to load image files.
    Webpack-dev-server can be used to run react application in development mode with hot reload. 
    We have seperate configurations for dev and production mode. Running `npm run build:prod` will generate production build in dist folder. 
    Dev bundle size is 1.48 MB when comapred to production build which is only 134 KiB
