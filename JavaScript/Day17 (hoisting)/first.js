let z;
var x = undefined;
let y;
// const a;



console.log(x);
z = 50;
// console.log(y);
x = 10;
y = 20;
// a = 20;
// console.log(z);
console.log(x);




//Original code snippet
// console.log(x);
// let z = 50;
// console.log(y);
// var x = 10;
// let y = 20;
// a = 20;
// console.log(z);
// console.log(x);
// this becomes like what ive written above during compilation cuz of hoisting

// hoisting is only a concept of memory allocation, it's not an implementation detail of JavaScript.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. 
// This means that you can use variables and functions before they are declared in the code, but only for function declarations and variables declared with `var`. Variables declared with `let` and `const` are not hoisted in the same way and will throw a ReferenceError if accessed before their declaration.