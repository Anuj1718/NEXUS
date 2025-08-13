// Function


// function greet(){
//     console.log("Hello Coder Army");
//     console.log("Mein badiya hu");
//     console.log("Aur Kya chal rha hai");
// }

// greet();

// add program

// parameter
// function sum(number1 , number2){
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
// can store the result in a variable

// console.log(result);

// const fun = function(){
//     console.log("Hello Coder Army");
//     console.log("Mein toh badiya hu");
//     return "Money";

//     // console.log("aur kya chal rha");
// }

// reference of function will be stored in fun variable in stack memory, it wont store result but whole function
// any statement after return will not be executed

// console.log(fun());


//  Arrow function
//
// const fun = () => {
//     console.log("Hello Coder Army");
   
// }
// fun(); // calling the arrow function
// const fun = () => "Hello Coder Army"; // arrow function with implicit return
// console.log(fun()); // calling the arrow function


// const sum = (number1, number2)=>{
//    return number1+number2;
// }

// const sum = (number1, number2) => number1+number2 ;


// console.log(sum(3,4));

// const cube = number => number*number*number;
// when you have only one parameter, you can omit the brackets

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
// will changes in obj1 be reflected in obj?
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

// obj2.__proto__ = obj1; //changing the prototype of obj2 to obj1
// console.log(obj2.a); // output: 1 (inherited from obj1)
// console.log(obj2.__proto__)









