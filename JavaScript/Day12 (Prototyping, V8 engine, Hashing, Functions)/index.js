// Function


// function greet(){
//     console.log("Hello Coder Army");
//     console.log("Mein badiya hu");
//     console.log("Aur Kya chal rha hai");
// }

// greet();

// add program

// parameter
// function sum(number1 , number2){ // no need to write let or const before parameters 
//     console.log(number1+number2)
// };

// // function call: argument
// sum(3,4);
// sum(10,15);


// Multiplication: function

// function multiply(number1 , number2)
// {
//     // console.log(number1*number2);
//     return number1*number2;
// }

// let result = multiply(4,5); 
// can store the result in a variable but only if function has return statement

// console.log(result);

// const fun = function(){
//     console.log("Hello Coder Army");
//     console.log("Mein toh badiya hu");
//     return "Money";

//     // console.log("aur kya chal rha");
// }

// A. The variable fun

// Lives in the stack (inside the current execution context).

// But it does not store the function itself.

// It stores a reference (pointer) to the function object.

// B. The actual function object

// This is created in the heap.

// It contains:

// The function’s code (internally represented)

// The scope / environment the function closes over

// Hidden properties like [[Prototype]], name, length, etc.
// any statement after return will not be executed

//console.log(fun); // output: [Function: fun]
// console.log(fun()); // output: Hello Coder Army , Mein toh badiya hu , Money


//  Arrow function
//
// const fun = () => { // no need to use function keyword, just use arrow notation
//     console.log("Hello Coder Army");
   
// }
// fun(); // calling the arrow function
// const fun = () => "Hello Coder Army"; // arrow function with implicit return
// console.log(fun()); // calling the arrow function


// const sum = (number1, number2)=>{
//    return number1+number2;
// }

// const sum = (number1, number2) => number1+number2 ;
// implicit return when only one expression is there in the function body

// console.log(sum(3,4));

// const cube = number => number*number*number;
// when you have only one parameter, you can omit the brackets

//when u return a num in function then to call it use console.log and when u use console.log inside function then just call the function
// when u dont return anything from function then it returns undefined by default eg if u return nothing and then do console.log, it will print undefined

// console.log(cube(8));

//  spread operator or rest operator
// let arr = [2,3,4,5];

//  let arr2 = [...arr]; // // spread operator, it will create a new array with the same elements as arr
// console.log(arr2); // output: [2, 3, 4, 5]


// rest operator is used in function parameters to collect all arguments into an array
// const sum = function(...number){
//     // for loop sum nikal sakta hu
//    console.log(number);
// }

// sum(2,3,4);
// sum(4,6,1,10,13);
// sum(2,3);


let obj = {
    name: "Rohit",
    age:30,
    amount:420,
}

// const {name , amount} = obj;
// console.log(name,amount);
// Homework pass by value or pass by reference

// passed object as argument to a function
//  function fun(obj){
//     console.log(obj.name, obj.amount);
//  }
// fun(obj); // calling the function with an object as argument

// destructuring the object in function parameters
// function fun({name, amount}){
//    console.log(name , amount);
// }

// fun(obj); //passed object as argument to a function




// function love(obj1){
//     console.log(obj1);
// }

// love(obj);
// will changes in obj1 inside function be reflected in original obj? if yes, pass by reference else pass by value
// yes, as objects are passed by reference in JavaScript


// love.__proto__ or Function.prototype; // love is an instance of the Function prototype
// love.__proto__.__proto__ or Function.prototype.__proto__ or Object.prototype // love is an instance of the Object prototype
// love.__proto__.__proto__.__proto__ or null; // null prototype
// console.log(love.__proto__== Function.prototype) // true
// console.log(love.__proto__.__proto__== Object.prototype) // true
// console.log(love.__proto__.__proto__.__proto__== null) // true

// String.prototype; // String is an instance of the String prototype
// String.prototype.__proto__ or String.prototype.__proto__ or Object.prototype // String is an instance of the Object prototype
// String.prototype.__proto__.__proto__ or null; // null prototype

let obj1 = {
    a:1,
    b:2,
}

let obj2 = {
    c:1,
    d:2,
}


// typeof string is str if made with string literal
// typeof string is object if made with String constructor
// let str = "Hello Coder Army"; // string literal
// let str2 = new String("Hello Coder Army"); // String constructor


obj2 = Object.create(obj1);
//console.log(obj2); // output: {} , empty object as obj2 does not have any own properties. console.log shows own enumerable properties only
// console.log(obj2.a); // output: 1 (inherited from obj1)
// console.log(obj2.b); // output: 2 (inherited from obj1)
// console.log(obj2.c); // output: undefined as obj2 does not have property c and it is not inherited from obj1


// obj2.__proto__ = obj1; //changing the prototype of obj2 to obj1, // obj22 is inheriting properties from obj1, dont change prototype like this as not a healthy object, use Object.create instead
//console.log(obj2.__proto__) // output: {a: 1, b: 2}
// console.log(obj2.a); // output: 1 (inherited from obj1)
// console.log(obj2.__proto__)









