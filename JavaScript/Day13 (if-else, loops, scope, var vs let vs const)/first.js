//  scope ke baare mein
// Global scope , local scope(Functional scope) , block scope
// this doesnt include objects, block scope is if else, for loop, while loop, do-while loop
// let a = 10;
// var b = 20;
// const c = 30;
// Global scope wale 
// all 3 accessible anywhere in global scope


//// function scope
// function greet(){
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log("Hello Function");
//     console.log(a,b,c);
// };
// all 3 not accessible outside function scope

// greet();
// console.log(c);

// var amount = 400;
// var amount = 20;
// var amount = 10;

// block scope
// only var is accessible outside the block scope, let and const are not accessible outside the block scope
// if(true){
//     let a = 10;
//     // var amount = 20;
//     const c = 30;  
// }

// console.log(amount);

// for(let i=0;i<5;i++){
//     console.log(i);
// }


// console.log(i);

// console.log(a); // output: ReferenceError: a is not defined
// console.log(b); // output: ReferenceError: b is not defined
// console.log(c); // 50 (hoisting happens for var, not for let and const)

// let a = 20;
// const b= 30;
// var c = 50;

// if(true){
//     let amount =30;
//     console.log(amount);
// }

// greet(); // output: Hello Greet
// can call function before declaration due to hoisting


function greet(){
    console.log("Hello Greet");
}


// meet(); // output: ReferenceError: meet is not defined as meet variable is declared after this line
const meet = function(){
    console.log("Hello Meet");
}








