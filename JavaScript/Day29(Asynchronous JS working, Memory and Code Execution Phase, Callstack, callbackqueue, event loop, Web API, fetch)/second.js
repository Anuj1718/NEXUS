console.log("HEllo Coder Army");

setTimeout(()=>{
  const a = 2+4;
  console.log(a);
},5000);

let b = 20;
let arr = [20,30,11];

for(let i of arr)
    console.log(i*b);

//output:
// HEllo Coder Army
// 400
// 600
// 220
// 6  (after 5 seconds)
//this is asynchronous code

//synchronous vs asynchronous
//synchronous: line by line execution
//asynchronous: line by line execution is not guaranteed

//setTimeout and setInterval (Timers) are Web APIs
// they are not part of JavaScript
// they are provided by the browser environment

// Event Loop: it checks the call stack and the callback queue
// if the call stack is empty, it pushes the first function from the callback queue to the call stack

//API: Application Programming Interface
// API is a set of functions and procedures that allow the creation of applications that access the features or data of an operating system, application, or other service.
//API are set of rules that allows different software entities to communicate with each other. API is the common ground between different software entities to interact with each other.

// In the above code, setTimeout is a Web API that takes a callback function and a delay time in milliseconds as arguments.
// After the delay time, the callback function is pushed to the callback queue.
// The Event Loop checks the call stack and the callback queue.
// If the call stack is empty, it pushes the first function from the callback queue to the call stack for execution.
// browser is multi-threaded unlike JavaScript which is single-threaded

// Note: setInterval will keep executing the callback function at the specified interval until it is cleared using clearInterval().

//Event loop work: If call stack is empty, it takes the first function from the callback queue and pushes it to the call stack.
//then callstack work is to execute the function.
//at the end, code callstack hi execute karta hai 
//why does it wait for callstack to be empty? because JavaScript is single-threaded

//Microtask queue (Promises) has higher priority than callback queue (setTimeout, setInterval)
//So, if there are any microtasks in the microtask queue, they will be executed first before any tasks in the callback queue.

//Microtask queue: Promises, MutationObserver
//Callback queue: setTimeout, setInterval, I/O, UI rendering

//Microtask queue is checked after the current task is completed and before the next task is started.
//So, if a microtask is added to the microtask queue during the execution of a task, it will be executed immediately after the current task is completed and before the next task is started.
