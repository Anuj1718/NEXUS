// issues with javascript code

let balance = 1000;
balance = "hundred";
console.log(balance*10); //output: NaN

let age = 24;
age = "Twenty four";
console.log(age/2); // output : NaN

let obj = {
    name: "Rohit",
    age: 24
};

console.log(obj.salary); // output : undefined, should have shown error but since its javascript it will not show any error
console.log(age+10); // output : Twenty four10
//if it showed error when someone made age as string then it would have been helpful
// js ka matlab hai bas code chalana bina kisi type checking ke

//js is dynamically typed language
//types are checked at runtime 
//ts is statically typed language
//types are checked at compile time

//ts helps in debugging code at an early stage
//ts provides type safety

//diff bw js and ts
// 1. Type Checking
// 2. Advanced features like interfaces, generics, enums, tuples etc
// 3. Better tooling and editor support
// 4. Early error detection
// 5. Improved code maintainability

//browser cannot understand typescript code directly
// we need to transpile typescript code to javascript code
// using typescript compiler (tsc)

// tsc app.ts
// node app.js

"use strict";
// a = "Rohit";
// Number
let a = 10;
let b = 20;
// string
let str = "Rohit";
// boolean
let isExist = true;
isExist = false;
// bigint
// let bignumber:bigint = 132143292183n;
// null
let abc = null;
let bcd = undefined;
// bcd = "Mohan";
let names = "Moahn";
let honey = 20;
const ho = 17;
// Compile time language
// Interprted language
// JIT: Just in time
let x = 20;
