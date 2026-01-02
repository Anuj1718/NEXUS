//  scope ke baare mein
// Global scope , local scope(Functional scope) , block scope
// block scope doesnt include objects and functions, block scope is if else, for loop, while loop, do-while loop

// let a = 10;
// var b = 20;
// const c = 30;
// Global scope wale 
// these are globally declared so all 3 accessible anywhere in global scope


//// function scope
// function greet(){
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log("Hello Function");
//     console.log(a,b,c); //output: 10 20 30
// };
// all 3 not accessible outside function scope

// greet();
// console.log(a,b,c); //output: ReferenceError: a is not defined, ReferenceError: b is not defined, ReferenceError: c is not defined

// var amount = 400;
// var amount = 20;
// var amount = 10;
// usi scope mai var ko dubara declare kar sakte hain, that is why var is not recommended but let and const cannot be redeclared in same scope

// block scope
// only var is accessible outside the block scope, let and const are not accessible outside the block scope
// if(true){
//     let a = 10;
//      var amount = 20;
//     const c = 30;  
// }

// console.log(amount); // output: 20
// console.log(a); // output: ReferenceError: a is not defined
// console.log(c); // output: ReferenceError: c is not defined

// for(let i=0;i<5;i++){
//     console.log(i);
// }


// console.log(i); // output: ReferenceError: i is not defined because let is block scoped




// Hoisting summary:
// - var and function: hoisted and initialized (var = undefined)
// - let and const: hoisted but NOT initialized (Temporal Dead Zone)
// Accessing let/const before declaration → ReferenceError
// Accessing var before declaration → undefined


// console.log(a); // output: ReferenceError: a is not defined
// console.log(b); // output: ReferenceError: b is not defined
// console.log(c); / output: undefined
// cant access let and const before declaration due to temporal dead zone but can access var before declaration as it is initialized to undefined

// let a = 20;
// const b= 30;
// var c = 50;

//let amount = 20;
// if(true){
//     let amount =30;
//     console.log(amount);
// }
// can redeclare let again but in different block scope

// greet(); // output: Hello Greet
// can call function before declaration due to hoisting


function greet(){
    console.log("Hello Greet");
}


// meet(); // output: ReferenceError: meet is not defined as meet variable is declared after this line
const meet = function(){
    console.log("Hello Meet");
}

//so if we write function the previous way, we can call it before declaring function but if we write function as a variable, we cannot call it before declaring the variable







