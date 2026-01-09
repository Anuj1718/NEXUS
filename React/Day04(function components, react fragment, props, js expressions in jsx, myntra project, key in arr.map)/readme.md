npm init
npm install react react-dom
npm install parcel
npm install -D parcel (if u want to install parcel as a dev dependency, code wont go in production)

put  <script type ="module" src="first.js"></script> in index.html to link js file

then import react and react-dom in first.js file
import React from "react";  
import ReactDOM from "react-dom";

after index.html and first.js file is ready run the following command in terminal
npx parcel index.html
This will start the development server and open the application in your default web browser.

it was giving error, so in package.json file made the following changes:
Removed line 8: "main": "first.js", (not needed for applications)
Changed line 7: "type": "module" (to support ES6 imports in your JavaScript files) i didnt need to do this as it still worked with commonjs

If inspect is off on website like myntra, go to developer tools and you can inspect the elements