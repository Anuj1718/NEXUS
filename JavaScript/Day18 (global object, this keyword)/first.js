// The global object is an object that provides variables and functions available anywhere in your code, acting as the top-level scope container.

// The "name" of the global object varies by environment

// // globalobject: object 
// // Chrome Browser: window // 
// // Nodejs: global // 
// // globalThis // the standard way to access the global object in any environment (to avoid confusion)


// console.log("Hello World");
// console.log(Math.random());
// // setInterval();
// // new Object();
// //  new String("Rohit");

// // let obj = {
// //     name:"Rohit",
// //     age:12
// // };
// // obj.name

//console.log(global); //for nodejs
// console.log(globalThis.Math.random());
"use strict" //strict mode
// by default, mode is non-strict and in non-strict mode, you can declare variables without using var, let, or const.
// In strict mode, you cannot use undeclared variables.


// a = 10;
// console.log(a);

let obj = {
    name:10
}

Object.freeze(obj);
obj.name = 30; // as object is frozen, this will not change the value of name property, in strict mode it will throw an error but in non-strict mode it will silently fail.
console.log(obj); // output: { name: 10 }


// ctrl + shift + r in console to clear the console 