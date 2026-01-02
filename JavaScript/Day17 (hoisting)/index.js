console.log(x); // undefined
console.log(y); // ReferenceError: Cannot access 'y' before initialization, same for const
console.log(z); // ReferenceError: z is not defined
var x = 10;
let y = 20;

// Hoisting:


// Execution context: 
// Memory and Code Execution
// see untitled pdf in this folder

// temporary dead zone for let and const is from the start of the block until the declaration is processed. 
// var is hoisted and initialized with undefined, so accessing it before declaration gives undefined.// let and const are hoisted but not initialized, so accessing them before declaration throws a ReferenceError.
// Variables declared with var are function-scoped, while let and const are block-scoped.// Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized, leading to a temporal dead zone until their declaration is encountered.