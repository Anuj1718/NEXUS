// for in loop : Isko array ke sath nahi lete
//  arr is an object
// 0: 10,
// 1:20,
// 2:40,
// 3:12,
// 4:30,
// name:"rohit",
// age:20,

const arr = [10,20,40,12,30];
arr.name = "Rohit";
arr.age = 20;

for(let key in arr){
    console.log(key, arr[key]); // output: 0, 10, 1, 20, 2, 40, 3, 12, 4, 30, name, Rohit, age, 20
    // it is printing the name and age properties as well because for in loop iterates over all enumerable keys/properties of an object
    // hence, we do not use for in loop with arrays
    // for in loop is used to iterate over the properties of an object
    // for in loop is used to iterate over the keys of an object
    
}


//use normal for loop or for of loop with arrays
// for of loop : Isko array ke sath lete hai
// for(let index=0; index<arr.length;index++)
//     console.log(index , arr[index]);
// output: 0, 10, 1, 20, 2, 40, 3, 12, 4, 30

// for of loop is used to iterate over the values of an iterable object
// for of loop is used to iterate over the values of an array
// for of loop is used to iterate over the values of a string
for (let value of arr) {
    console.log(value); // output: 10, 20, 40, 12, 30
}

//  defineProperty
// hw: defineProperties
