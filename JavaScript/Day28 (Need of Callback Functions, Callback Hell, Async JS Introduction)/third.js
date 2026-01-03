//  JS is a single threaded synchronous language:
// single threaded: One task will be executed at a time:

// JS behaviour: can make Async

console.log("10");

setTimeout(() => {
    console.log("20");
}, 5000);


console.log("30");
//output:
//10
//30
//20
//as this is asynchronous code, so 20 is printed after 5 seconds delay, while 30 is printed immediately after 10




console.log("10");

const timer = Date.now(); // current time in milliseconds
// timer Older time
while(Date.now()-timer<2000){ // current time - older time < 2000 ms
    // Wait for 2 second
}

console.log('20');


console.log("30");


//output:
//10
//20
//30
// here, 20 is blocking the execution of 30 for 2 seconds as this is synchronous code


// JavaScript is synchronous by default, executing code one line at a time on a single thread.
// Asynchronous behavior comes from the runtime environment (browser or Node.js), not the JS engine itself.
// APIs like timers, promises, async/await, network requests, events, and file I/O run asynchronously by delegating work outside the call stack.
// Their callbacks or promise resolutions are placed in task or microtask queues.
// The event loop ensures these async results execute only after the synchronous code finishes.