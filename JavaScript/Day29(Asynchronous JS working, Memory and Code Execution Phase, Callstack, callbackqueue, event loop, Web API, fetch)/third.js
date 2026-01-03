console.log("HEllo Coder Army");

setTimeout(()=>{
  const a = 2+4;
  console.log(a);
},5000);

setInterval(() => {
    console.log("I am fast");
}, 2000);

let b = 20;
let arr = [20,30,11];

for(let i of arr)
    console.log(i*b);

//output:
// HEllo Coder Army
// 400
// 600
// 220
// I am fast (every 2 seconds)
//6  (after 5 seconds)
//this is asynchronous code

//first sync code execute hoga then callstack empty hoga fir event loop chalega
//then 2 sec baad setInterval ka callback "callback queue" se callstack me jayega (through event loop) fir wo execute hoga (webapi se queue mai gaya tha as unke pas bhi timer hota hai)
//fir callstack empty hoga fir event loop chalega
//fir se 2 sec baad setInterval ka callback "callback queue" se call stack me jayega (through event loop) fir wo execute hoga
//fir callstack empty hoga fir event loop chalega
//ye process tab tak chalta rahega jab tak clearInterval na kar diya jaye
//fir 5 second ke baad setTimeout ka callback "callback queue" se call stack me jayega (through event loop) fir wo execute hoga
//fir callstack empty hoga fir event loop chalega
//setTimeout sirf ek baar chalta hai jabki setInterval baar baar chalta rehta hai


//event loop kaam kaise karta hai?
//Event loop continuously checks the call stack and the callback queue
//If the call stack is empty, it pushes the first function from the callback queue to the call stack for execution
//This process continues indefinitely, allowing asynchronous code to be executed when the call stack is free


console.log("Hello");

setTimeout(() => {
    console.log("I am inside setTimeout");
}, 0);

console.log("World");

//output:
// Hello
// World
// I am inside setTimeout

//even if we set delay to 0, setTimeout callback will be executed after the synchronous code is executed
//because setTimeout callback goes to the callback queue and waits for the call stack to be empty
//only then event loop will push it to the call stack for execution
//World print hone ke baad call stack empty hoga fir event loop chalega fir setTimeout ka callback call stack me jayega fir wo execute hoga
//raceround condition nahi hota yaha pe

//this shows that asynchronous code execution is not immediate and depends on the call stack being empty