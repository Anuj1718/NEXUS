// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = obj1;
// obj2.a=10;
// console.log(obj2, obj1); // both will show a as 10
// this wasnt copy
//It is just reference assignment.
// Both variables point to the exact same object in memory.

// //  deep copy : actual copy, changes in obj2 will not affect obj1
// let obj3 = structuredClone(obj1);
// obj3.a = 20;
// console.log(obj3, obj1); // obj1 will show a as 10, obj3 will show a as 20


//  Nested object
// const user = {
//     name:"Rohit",
//     balance: 420,
//     address: {
//         pincode: 246149,
//         city: "kotdwar"
//     }
// }

// // console.log(user.address.pincode);


// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 321314;
// console.log(user.address.pincode); //changed for user too
// user2.name = "Umar";
// console.log(user.name); //name not changed for user
// whenever you use assign or spread operator, it does shallow copy, nested objects will still point to same memory location but the first level properties will be copied
// name, balance deep copied, address shallow copied
// // hence, preferable to use  structuredclone as it creates deep copy of the object

// Shallow copy duplicates only the surface (top-level), so nested objects/arrays remainlinked. Use it for simple, flat data.
// Deep copy duplicates everything, so the original and copy are fully independent. Use itwhen you need to modify nested data safely


//object.freeze(): makes an object immutable, properties cannot be changed, added or deleted
// object.seal(): makes an object non-extensible, properties cannot be added or deleted but can be changed
// const user = {
//     name:"Rohit",
//     balance: 420
// }

// Object.freeze(user);
// user.name = "Umar"; // will not change
// user.age = 20; // will not add
// delete user.balance; // will not delete
// console.log(user); // {name: "Rohit", balance: 420}

// Object.seal(user);
// user.name = "Umar"; // will change
// user.age = 20; // will not add
// delete user.balance; // will not delete
// console.log(user); // {name: "Umar", balance: 420}

//  Destructruing of an object 
// let obj = {
//     name: "Rohit",
//     money: 430,
//     balance: 30,
//     age: 20,
//     aadhar: "hfdsiohsai"
// };

//destructuring is a way to extract properties from an object and assign them to variables
// const {name, balance, age} = obj; // destructuring: // name, balance, age are variables now
// console.log(name, balance, age); 
// // will be used in function calls and react
// const {name:full_name , balance: amount, age:Umar} = obj; // destructuring with renaming
// console.log(full_name, amount, Umar);

// const {name, age,...obj1} = obj; // destructuring with rest operator
// In short, the rest operator collects values into an array, whereas the spread operator spreads elements out from an array or object
 // rest operator is used in function parameters to collect all arguments into an array
// spread operator is used to create a shallow copy of the objects, it is more readable and concise than Object.assign
// it is also used to merge objects and arrays, it is a more modern way of doing the same  
// it is also used to convert iterable objects like sets and maps into arrays (lecture 16) and for union and intersection of sets
//also, spread is used for existing arrays/objects, rest is used for gathering elements into a new array/object

// console.log(name, age, obj1); // obj1 will contain the rest of the properties 
// console.log(obj1);  //output: rohit 20 { money: 430, balance: 30, aadhar: 'hfdsiohsai' }


//destructuring arrays
// const arr = [3,2,1,5,10];
// const [first,second] = arr; // use brackets to destructure an array
// console.log(first, second); // first and second are variables now //output: 3 2
// console.log(arr[0], arr[1]); // same as above
// const [first,second, ,third] = arr; // skipping the third element 
// console.log(first, second, third); //output: 3 2 5
// const [first,second,...third] = arr; // console.log(first, second); // first and second are variables now, rest operator collects the rest of the elements into an array
// console.log(third); //output: [1, 5, 10]

//destructure object using {} and arrays by []

// let obj = {
//         name: "Rohit",
//         age: 20,
//         arr: [90,40,60,80],
//         address: {
//             pincode:246149,
//             city:"Kotdwar",
//             state: "uk"
//         }


// };


// destructuring nested objects
// const {address: adds} = obj; // address is now a variable containing the address object
// console.log(adds.pincode, adds.city); // pincode and city are properties of the address object
// const {address: {pincode, city}} = obj; // destructuring nested objects
// console.log(pincode, city); // pincode and city are variables now
// const {address: {pincode, city}, arr} = obj; // destructuring nested objects and arrays
// console.log(pincode, city, arr); // pincode, city and arr are variables
// const {arr: [first]} = obj; 
// console.log(first); // first is now a variable containing the first element of the arr array


// calling a function with an object
// let user = {
//     name: "Rohit",
//     amount: 420,
//     greet: function(){ // key is greet, value is a function
//         console.log("Hello COder Army");
//     },
//     meet: function(){
//         return 20;
//     }
// }

// user.greet(); // output: Hello COder Army
// console.log(user.meet()); // output: 20
// console.log(user.greet()); // output: Hello COder Army and undefined (as user.greet() does not return anything)

//so objects can have functions as values, these are called methods
// objects can have objects, arrays, functions as values

//prototype chain: imp in interviews
// every object in JavaScript has a prototype, which is an object that contains properties and methods
// the prototype of an object is accessible through the __proto__ property

let obj = {
    name:"Rohit",
    amount:420,
    greet: function(){
        return 10;
    }
}

console.log(obj.name);
console.log(obj.amount);
console.log(obj.greet()); // output: 10
// these are properties of the object, so we can access them using dot notation
// but how are we able to access the toString method?
// console.log(obj.toString()); // output: [object Object]
// toString is a method of the Object prototype, which is the parent of all objects in JavaScript
// so every object has access to the methods of the Object prototype
// console.log(obj.__proto__); // output: {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, toString: ƒ, …}
// console.log(obj.__proto__.__proto__); // output: null


// arr is an object
let arr = [2,3,1,8];
arr.push(10);
console.log(arr); // output: [2, 3, 1, 8, 10]
// arr is an instance of the Array prototype, which is a child of the Object prototype
console.log(arr.__proto__); // output: Array(0) [] (Array prototype)
// console.log(arr.__proto__.__proto__); // output: {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, toString: ƒ, …} (Object prototype)
// console.log(arr.__proto__.__proto__.__proto__); // output: null (null prototype) 

//do prototype chain in console





