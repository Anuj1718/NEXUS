// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.


// 1: Global Context (Outside Any Function)
// In browsers: window 
// In Node.js: Module's exports object

// in global scope, this points to the global object (window) for browsers (generally, we talk about browsers)


// let a = 10;
// const b = 20;
// var c = 30; 
// console.log(this); // output: Window { ... } in browsers, global object i.e {} (empty object) in Node.js (run the code in Node.js to see the output)

// function name(){
    // console.log("Hello World");
// }
// this is all part of the global context/scope
// let and const are part of the global scope but not part of the global object.
// this is because let and const are block scoped, outside  a block they cannot be accessed like var, if we made let and const part of global object, theyd be accessed outside block too and we dont want that
// when you write var inside function tho, it doesnt become part of global object but only function, hence u cant access var outside function

// console.log(this.c) // output: 30
// console.log(this.a) // output: undefined
// console.log(this.b) // output: undefined

// console.log(this === window); // true in browsers
// console.log(this === global); // true in Node.js


// we will only talk about the browser context here, as it is the most common use case.


// ****************************************************************


// 2:Inside a Function 
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.
// ii: Strict Mode
// this will be undefined inside a function.

// echma 6 came up with strict mode to avoid the issues with this keyword.

// function greet(){
//     console.log(this);
// }

// greet(); // points to the global object in non-strict mode, undefined in strict mode
// window.greet(); // points to the global object in non-strict mode as well as strict mode as we gave context to the function using window object.

// ****************************************************************

// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//         console.log(this.name);
//          console.log(this); // this refers to the obj object
//     }
// }

// obj.meet(); // // output: "Rohit", {name: "Rohit", age: 20, meet: ƒ} 
// context is given by the object that calls the method, hence this refers to the object itself.




// ****************************************************************

// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this);
//     }
// }

// obj.greet(); // output: Window { ... } in browsers 
// it os kept in the global scope, so this refers to the global object (window) in browsers.
//objects do not have scope, do not count those brackets as scope, they are just used to define the object.
// global scope and function scope and block scope are the only scopes in JavaScript.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);
//         };

//         ab();

//    }
// }



// obj.greet();
// output: {name: "rohit", age: 11, greet: ƒ}
// the arrow function ab() inherits this from the surrounding scope, which is the greet() method and When this is used inside an object’s method, it refers to the object that owns the method, hence this refers to the obj object.




// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }



// let a = new Person("Rohit", 20);
// console.log(a);
// normally, id have used a.name to access the name property, but here this.name is used to refer to the name property of the instance being created. eg a.name = "Rohit".


// doubt

// let greet = ()=>{
//     console.log(this);
// }

// greet(); // output: Window { ... } in browsers as lexical scope is the global scope in this case.

"use strict"

let meet = function(){
    console.log(this);
}

meet(); // output: undefined in strict mode, as this is not defined in strict mode.
// whereas in non-strict mode, it will refer to the global object (window in browsers).
// window.meet(); // cant use window here as yoive used let and let is not part of the global object, so it will throw an error.




