// how to create object
// const obj = {
//    0:20,
//    1:50,
//    2:70, 
//    name:"rohit", 
//    account_balance:420,
//    gender: "Male",
//    age: 30,
//    "account number": 231230,
//    undefined: 30,
//    null:"mohan",
// }

// these are not variables, they are keys, they are treated as strings whether you use quotes or not, even the 0, 1, 2, undefined, null are treated as strings

// console.log(obj["undefined"]);
// console.log(obj["null"]);
// while using dot notation, you cannot use spaces or special characters in the key name (account number is not allowed in dot notation)
// while using bracket notation, you can use spaces and special characters in the key name
// in bracket notation, you can also use variables as keys
// in bracket notation, use quotes for keys that have spaces or special characters or normal  strings, otherwise you can use without quotes (preferably use quotes for consistency)


// console.log(obj.gender);
// console.log(obj["account_balance"]);
// console.log(obj["account number"]);
// console.log(obj['0']);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj);



// const arr = [20,50,70];
// console.log(arr);

//  second method to create
// const person = new Object();
// console.log(person);
//only the reference of the object is stored in stack, the key-value pair is stored in heap memory, so the object is mutable

// // property add
// person.name = "Rohit";
// person.age = 80;
// person.gender = "Male";
// console.log(person);
// // delete
// delete person.age;
// console.log(person);
// // Modify or update
// person.name = "Mohit";
// console.log(person);


// third method 

// class People{
//     constructor(na, ag, gen){
//         this.name = na;
//         this.age = ag;
//         this.gender = gen;
//     }
// }



// let per1 = new People("Rohit", 20, "Male");
// let per2 = new People("Mohit", 30, "Female")
// let per3 = new People("Aman", 21, "Male")
// console.log(per1, per2);


let obj = {
    name: "rohit",
    age:30,
    account_balance:420,
    gender:"male"
};

//  keys , values
const keys = Object.keys(obj); // returns an array of keys
// console.log(keys);
const arr = Object.values(obj); // returns an array of values
// console.log(arr);

// keys; value
const arr2 = Object.entries(obj); // returns an array of key-value pairs as arrays
// console.log(arr2);

// assign use case
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj4= {e:5,f:6};


const obj3 = Object.assign({},obj1,obj2,obj4);
// {} is the target object, it is empty so that the original objects are not modified, if you don't pass an empty object, the first object will be modified
// it creates a shallow copy of the objects, if the objects have nested objects, they will still point to the same reference
// if you change a value in the original object, it will not change in the copied object, but if you change a nested object, it will change in both objects
// console.log(obj3); 

// console.log(obj1.a);
const obj5 = {...obj1,...obj2,...obj4};
console.log(obj5);
// spread operator is used to create a shallow copy of the objects, it is more readable and concise than Object.assign
// it is also used to merge objects, it is a more modern way of doing the same  









