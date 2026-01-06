<!-- first we need to install typescript compiler -->
npm install -g typescript   // to install typescript globally 
in windows powershell use 'Run as Administrator'
in mac or linux use 'sudo' before the command

<!-- check version of typescript compiler -->
tsc --version               // to check the version of typescript installed
tsc --v                  // to check the version of typescript installed

<!-- compiling and running typescript code -->
tsc app.ts                 // to compile the typescript file to javascript file
node app.js                // to run the javascript file using nodejs
tsc app.ts --target ES6    // to compile the typescript file to javascript file of es6 version
tsc app.ts --target ES5    // to compile the typescript file to javascript file
tsc app.ts --target es2016 // to compile the typescript file to javascript file of es2016 version

// typescript is a superset of javascript
// all javascript code is valid typescript code
// typescript adds static typing to javascript
// typescript code needs to be compiled to javascript code using typescript compiler (tsc)
// typescript supports modern javascript features and compiles them to older javascript versions for compatibility
// typescript files have .ts extension

<!-- initializing config file -->
tsc --init                // to create a tsconfig.json file which contains the configuration for typescript compiler
tsc                       // to compile the typescript files in the project as per the configuration in tsconfig.json file
 "target": "ES2016" in tsconfig.json file:,                               
    /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */ 
    now just tsc will compile to es2016 version

tscconfig.json          // to check the configuration of typescript compiler, can set various options here like target version, module system, root directory, output directory, strict mode, etc.


tsc --watch             // to watch for changes in typescript files and automatically compile them to javascript files on save

ctrl + c              // to stop the watch mode, i.e to exit from watch mode