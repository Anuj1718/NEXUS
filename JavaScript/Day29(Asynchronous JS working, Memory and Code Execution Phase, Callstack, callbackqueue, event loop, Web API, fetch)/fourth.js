console.log("I am first");

fetch("https://youtube.com")
.then(()=>console.log("Hello"));

console.log("I am last");

//output:
// I am first
// I am last
// Hello

//fetch is an asynchronous Web API
//it sends a request to the server and waits for the response
//while waiting, the rest of the code continues to execute
//when the response is received, the callback function inside then() is pushed to the callback queue
//event loop checks the call stack and the callback queue
//if the call stack is empty, it pushes the first function from the callback queue to the call stack for execution
//hence, "Hello" is printed after "I am last"

//fetch uses Promises which are microtasks
//microtasks have higher priority than tasks (macrotasks) like setTimeout
//so, if there are any microtasks in the microtask queue, they will be executed first before any tasks in the callback queue