console.log("Hello Coder Army");

function meet(){
    const arr = [2,4,6];
    console.log(arr[0]);
}

function greet(){
    const a = 2 + 3;
    console.log(a);
    meet();
    console.log(a*a);
}

greet();
console.log("Program End");
//output:
// Hello Coder Army
// 5
// 2
// 25
// Program End
//this is synchronous code

//2 phases: 
// memory allocation phase and code execution phase (call stack)
// Execution Context: Global Execution Context

// What belongs to Web APIs (provided by the browser, not JavaScript itself)

// These are not part of the JavaScript language or the JS engine (V8, SpiderMonkey). They are exposed by the browser environment:

// setTimeout()

// setInterval()

// Event handling (addEventListener, click, input, etc.)

// DOM APIs (document, querySelector, createElement, innerHTML, etc.)

// (Also: fetch, localStorage, geolocation, etc.)

// ➡️ These are collectively referred to as Web APIs.


// What JavaScript itself provides

// JavaScript (ECMAScript spec) gives you:

// Variables, functions, closures

// Objects, arrays, promises

// Call stack

// Microtask queue (Promise callbacks)

// But no timers, no DOM, no events.