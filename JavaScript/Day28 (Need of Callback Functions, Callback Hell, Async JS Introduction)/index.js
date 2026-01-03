//  call back hell
//what is callback hell?
//callback hell is a situation in which we have multiple nested callback functions, making the code difficult to read and maintain. It often occurs when dealing with asynchronous operations.

//

// fetchuser(greet)

// Domino's pizza order kar rahe ho:

// callback = ()=>{
//     preparingOrder();
// }




function placeOrder(callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        callback();
       },5000)
};

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
       },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

//if we didnt use callback and wrote them one after another and called placeOrder and preparingOrder one after another then output wouldve been wrong as these functions are asynchronous and take time to execute so the order of execution would have been wrong.
// placeOrder();
// preparingOrder();
// wouldve printed Talking with Domino's
//Pizza preparation started....
//Order Placed Succesfully
//Pizza preparation Done

// correct way is to use callback functions i.e placeOrder(preparingOrder);

// function ratingOrder(){

// }

//what if i wanna add more steps like pickupOrder and deliverOrder, then we would have to keep nesting the functions inside each other leading to callback hell
//ion wanna hardcode the functions inside each other, rather i wanna pass them as arguments

// placeOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
});
// ek function ke andar dusri function ka call, aur uske andar teesri function ka call, aise hi chalti rahe, ise kehte hain
// this is callback hell
// callback hell occurs when we have multiple nested callback functions, making the code difficult to read and maintain
// callback ke andar callback, aur uske andar callback, aise hi chalti rahe, ise kehte hain callback hell
// callback hell makes code hard to read and maintain
// to avoid callback hell, we can use Promises and async/await in JavaScript






//CHATGPT EXPLANATION OF ASYNCHRONOUS JAVASCRIPT:
//1. JavaScript is synchronous by default, but it can do asynchronous work.
// JS runs on a single thread with a call stack.

// That means:

// One operation at a time

// Blocking by default

// Top → bottom execution

// 2. Then how does JS do async work?
//JavaScript itself does not do async work.

// 👉 The environment does (browser / Node.js).

// Examples:

// Browser APIs: setTimeout, fetch, DOM events

// Node APIs: file I/O, network I/O

// JS delegates work to these APIs.

// 3. Asynchronous APIs (non-blocking)
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");

// A
// C
// B

// Why?

// setTimeout is handled by the environment

// Callback is queued

// JS continues execution

// Callback runs later

// 4. Event Loop (the real mechanism)

// Execution order:

// Call Stack (sync code)

// Web APIs (async tasks)

// Callback / Task Queue

// Event Loop pushes callback back to stack

// JS itself never becomes async.
// It just reacts when the stack is free.

// 5. Promises & async/await (still async, but cleaner)
// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// console.log("C");


// Output:

// A
// C
// B


// Even though it looks synchronous, it’s not.

// Important nuance:

// then / await use microtask queue

// Microtasks run before callbacks like setTimeout


// 6. Exam / interview-safe answer

// JavaScript is a synchronous, single-threaded language that supports asynchronous behavior through event-driven, non-blocking APIs provided by the runtime environment.


// Bottom line

// JS core = synchronous

// JS runtime = asynchronous capabilities

// Event loop = bridge between the two