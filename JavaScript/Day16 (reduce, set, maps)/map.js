// map is a collection of key value pairs where both key and value can be of any data type(primitive or object), unlike objects where keys are strings or symbols only
// unlike regular objects, maps maintain the insertion order of key-value pairs and allows keys of any type (including objects, functions, and primitives) whereas object keys are typically strings or symbols.
// Maps are iterable, meaning you can loop through their key-value pairs directly using for...of loops or the forEach method.
// Maps have a size property that returns the number of key-value pairs in the map, whereas objects do not have a built-in size property.
// Maps provide better performance for frequent additions and deletions of key-value pairs compared to regular objects, especially when dealing with a large number of entries.
// Key Differences – Map vs Object
// Keys:

// Object: Keys must be strings or symbols.

// Map: Keys can be of any type (objects, functions, any primitive).

// Order:

// Object: Key order is not guaranteed.

// Map: Maintains insertion order.

// Iteration:

// Object: Not directly iterable; use Object.keys(), etc.

// Map: Directly iterable via for...of or forEach().

// Size:

// Object: No size property; measure with Object.keys(obj).length.

// Map: Has a size property.

// Performance:

// Map: Better for frequent additions/deletions.

// Object: Often faster for read-heavy cases with string keys.



//  key value pair: key should be unique
// const map1 = new Map();
//set(key, value) // adds a key value pair to the map
// map1.set(3,90);
// map1.set("Rohit",45);
// map1.set(20,"Mohan");
// // map1.set("Rohit",40); value ko update karega when using same key again

// get(key) // returns the value corresponding to the key
//  // console.log(map1.get(3)); // 90
// console.log(map1.get("Rohit")); // 45
// map1.delete(3); // deletes the key value pair with key 3


// // console.log(map1);
// console.log(map1.has("Rohit")); // true // check if key exists in map
// console.log(map1.size); // // 3 // size of map
// map1.clear(); // removes all the elements from the map
// console.log(map1); // // clear removes all the elements from the map
//Map.prototype (in console)

// another way to create map
const map1 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]); //2d array type dena hai
console.log(typeof map1); // object

// console.log(map1); // Map(4) { 4 => 'rohit', 'Moahn' => 'rohan', 30 => 9, 63 => 78 }

// for of loop

// for(let value of map1)
//     console.log(value); // prints each key-value pair as an array

//if i want to print key and value separately:
//destructuring array
// for(let [key,value] of map1)
//     console.log(key, value);

// console.log(map1["4"]); // // undefined, as map is not an object, it is a Map object
// console.log(map1.get(4)); // // rohit, as map is a Map

// Object:
// keys: string or symbol
// maps:
// keys:number, string, object

/// for each
// map1.forEach((value,key)=>{
//     console.log(key, value);
// }); 

// map1.forEach((value,key)=>console.log(key, value)); // same as above

// Javascript code kaise execute hota hai......