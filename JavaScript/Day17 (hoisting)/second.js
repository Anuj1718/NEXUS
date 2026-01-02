
// greet();

// function greet(){
//     console.log("Hello World");
// }
// output: // Hello World



// meet(); // wont work here, will throw an error// ReferenceError: cannot access 'meet' before initialization

// let meet = function(){
//     console.log("Hello Meet");
// }

// why so? 

// Answer:
// because of hoisting

// in case of function declaration, entire function is hoisted
// in case of function expression using let or const, only the variable declaration is hoisted not the initialization
// so meet is in temporal dead zone from the start of the block until the declaration is processed

// umm, global execution context consists of two phases:
// 1. memory allocation phase
// 2. code execution phase
// and it is allocated in key value pair manner

// so when memory is allocated to greet, entire function is stored in memory
// but when memory is allocated to meet, only the variable is allocated with value undefined (as meet is declared using let)
// so when we try to call meet before initialization, it throws an error

//  for greet:
// Memory allocation:
//  greet: function code
//and
//  Code execution
// code alr written in greet, so execcuted

//for meet
// Memory allocation phase:
// meet: 
//and
// Code execution phase: // ReferenceError: cannot access 'meet' before initialization


// but when we call meet after initialization, it works fine
// this is cuz memory allocation phase is already done (usme kuch ni jayega as let hai), but in code execution phase, meet is assigned the function

// var use karte to typeerror : meet is not defined aata as meet : undefined ye key pair jata memory execution phase me
// but neeche call karte  to haan ho jata run as code execution phase mai meet is assigned the function


// inspect -> source -> snippet -> new snippet -> paste the code -> run
// put breakpoints to debug 
// step over (F10) to go to next line
// step into (F11) to go inside a function
// step out (Shift+F11) to come out of a function
//callstack to see the order of execution
// scope to see the variables in the current scope
// watch to watch a variable value
// console to see the output and errors

// ctrl shift r to refresh 





