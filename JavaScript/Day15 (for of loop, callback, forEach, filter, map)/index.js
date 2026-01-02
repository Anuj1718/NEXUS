// let user= {
//     name:"rohit",
//     age:30
// }


// Object.defineProperty(user, 'name',{
//     writable:false,
// });
// // Ye Hacking se bachne ke liye humeine nai kiya hai kyuki wo to writable ko true kar dega codebase access aya to
// this is to prevent accidental changes to the property
// user.name = "mohit";


// console.log(Object.getOwnPropertyDescriptor(user, "name")) //output: { value: 'rohit', writable: false, enumerable: true, configurable: false }


//  for of loop
// const arr = [10,20,11,18,13];
// for(let value of arr) // can use any variable name not necessarily value
// {
//     console.log(value);
// }

// let str = "Rohit is Good Boy";
// for(let value of str)
// {
//     console.log(value);
// }

// don't use for of loop in object
// reason is for of loop is used to iterate over iterable objects like arrays, strings,sets etc.
// but objects are not iterable by default, so we cannot use for of loop with objects
// mujhe ni pta agar mai pehle first key value pair par pohoch gya to agle pe kaise jaunga
// if we try to use for of loop with an object, it will throw a TypeError 
// TypeError: obj is not iterable
// Symbol.iterator is not defined for objects

// const obj = {
//     name:"Chavvi",
//     age:22,
//     gender:"female"
// };

// console.log(obj); // if obj had 2: 1, 1: 2, 4: 3, then it would have printed the keys and values in ascending order of keys

// for(let value of obj){
//     console.log(value);
// } // TypeError: obj is not iterable, agar mai first key value pair par pohoch gya to agle pe kaise jaunga idk

// if u desperately wanna use for of loop for objects, here is the way
// for(let value of Object.keys(obj)) //as Object.keys(obj) returns an array of keys of the object, we can iterate over it
//     console.log(value, obj[value]);

// another way to iterate over an arrray using for of loop
// forEach

// let arr = [10,20,30,40,50];
//  single argument: number
//  second index
//  third: array ko bhi pass

// arr.forEach(CallBackFunction)



// arr.forEach(function (num){
//     console.log(num);
// });

// arr.forEach((num) => console.log(num)); // as single line of code, can remove curly braces and return statement
// arr.forEach(num => console.log(num)); // if single argument, can remove parentheses as well


// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// });
// a is the array itself, passing by reference, passing array means i wanna modify the original array

// console.log(arr);

//complete syntax
// arr.forEach(function CallBackFunction(num, index, array){
//     console.log(num, index, array);
// });
// num, index, array are the parameters of the callback function

//bohot gandagi hui, write it cleaner
// const greet = function (num){
//     console.log(num);
// }
// arr.forEach(greet);

// or
// arr.forEach(function greet(num){
//     console.log(num);
// });

// filter
// filter expects a callback function that returns either true or false 
// it works like arr.forEach but it filters the elements based on the condition mentioned in the callback function
// let arr = [10,22,33,41,50];
//filter is used to filter the elements of an array based on a condition
// it returns a new array with the elements that satisfy the condition


// const result = arr.filter((num) => {
    //     return num%2==0;
    // return true or false
// });


// const result = arr.filter((num)=> num%2==0); //by default return statement is there in arrow function if single line of code
// const result = arr.filter((num, index, arr) => num%2==0);
// same 3 arguments can be used in filter as well

// console.log(result);

// array of objects filtering example
// const students = [
//     {name:"Rohan", age:22, marks:70},
//     {name:"Mohan", age:24, marks:80},
//     {name:"Darshan", age:28, marks:30},
//     {name:"Mohit", age:32, marks:40},
//     {name:"Shadik", age:12, marks:90},
// ]

// const result = students.filter((obj)=>{
    // return obj.marks > 50;
//  });

// const result = students.filter((value)=> value.marks >50);
// const result = students.filter(({marks})=> marks >50);
// can destructure the object in the parameter itself as i only need marks property

// console.log(result);

// map
// filter mai bas filter karte hai, map mai kuch bhi kar sakte hai like modify kar sakte hai values ko
// filter returns a new array with the elements that satisfy the condition
// map returns a new array with the modified elements based on the operation performed in the callback function

// const arr = [1,2,4,5]
// const re = arr.forEach((num)=>{
//     return num;
// }) wrong, does not return

// console.log(re)

// const result = arr.map((num) => {
    // return num * 2;
// });
// const result = arr.map((num) => num * 2);
// const result = arr.map((num,index)=> num*index);
// same syntax : num, index, array

// console.log(result);

// const arr = [1,2,3,4,5,6];

//chaining, can use filter and map together
// i want even numbers squared and then divided by 2
// const result = arr.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2);
// console.log(result);

//  Reduce , iske discussion karenge....

// difference between forEach, map, filter, reduce, Map (method + data structure)


// forEach:
// does not return anything (returns undefined), hence cannot store result
// used to iterate over the array and perform some operation on each element (side effects)

arr.forEach(num => console.log(num));
// output: logs each element one by one
// return value: undefined


// map (ARRAY METHOD):
// returns a new array
// used to iterate over the array and transform each element
// whatever is returned from the callback becomes the element of the new array

const doubled = arr.map(num => num * 2);
// input:  [1, 2, 3]
// output: [2, 4, 6]

// map always keeps array length same
// one input element → exactly one output element


// filter:
// returns a new array
// callback must return true or false
// used to get elements that satisfy a given condition
// filter always returns an array
// it never returns true or false
// true/false is returned by the callback, not by filter itself

const evens = arr.filter(num => num % 2 === 0);
// input:  [1, 2, 3, 4]
// output: [2, 4]

arr.filter(num => num);
// removes 0, keeps rest (truthy/falsy)
// input:  [0, 1, 2, 3]
// output: [1, 2, 3]


// reduce:
// returns a single value
// used to iterate over the array and accumulate a result
// the returned value can be number, object, array, etc.

const sum = arr.reduce((acc, num) => acc + num, 0);
// input:  [1, 2, 3]
// output: 6

const freq = ["a", "b", "a"].reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
// output: { a: 2, b: 1 }


// Map (DATA STRUCTURE):
// Map is NOT an array method
// stores key–value pairs
// keys can be of any type (object, function, number, etc.)
// maintains insertion order
// size is available via .size

const mapDS = new Map();

mapDS.set("a", 1);
mapDS.set("b", 2);
mapDS.set("a", 3); // overwrites value for key "a"

mapDS.get("a");     // 3
mapDS.has("b");     // true
mapDS.size;         // 2

// iteration
for (let [key, value] of mapDS) {
  console.log(key, value);
}
// output:
// a 3
// b 2

// forEach / map / filter / reduce → array methods

// Set, map → data structure