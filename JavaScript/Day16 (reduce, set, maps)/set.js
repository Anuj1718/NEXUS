// let arr = [10,20,10,30,10]

// set : unique value, value in set can be of any type i.e primitive or object
// set does not allow duplicate values
// insertion order is preserved
// set is iterable
// set is not index based, hence we cannot access values using index
// set does not have map like key value pair, it only has values
// set is an object

// const set1 = new Set([10,20,30,40,10,30]);
// console.log(typeof set1); // output: object
// console.log(set1); // output: Set(4) { 10, 20, 30, 40 }
// console.log(set1.size); // output: 4


//another way to create set by adding values one by one
// const set1 = new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Rohit");
// set1.add(30);

// // delete
// set1.delete(6);

// console.log(set1.size); // 3
// console.log(set1); // Set(3) { 4, 'Rohit', 30 }



// // check if value exists in set
// insta id in set
// const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
// let new_user = "rohit_negi9";
// console.log(user_id.has(new_user)); // // true
// console.log(user_id.has("rohit_negi")); // false
// has checks if the value exists in the set

// user_id.clear();
// console.log(user_id);
// // clear removes all the elements from the set

//Set.prototype (in console)

// convert array to set
// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);
//console.log(set1); // Set(5) { 10, 30, 20, 40, 50 }
// set to array
// arr = [...set1]; //spread operator, set se ek ek value bahar nikaal ke array me daal dega
// console.log(arr); // [ 10, 30, 20, 40, 50 ]

//union of two sets
let set1 = new Set([10,20,30,40,50]);
let set2 = new Set([10,20,70,40]);

// let set3 = new Set([...set1,...set2]); //set expects an array, spread operator will spread the values of both sets into a new array
// console.log(set3); // Set(6) { 10, 20, 30, 40, 50, 70 }
// sort nai hoti value

// intersection
// filter: only works on array
// const result =  new Set([...set1].filter((num)=>set2.has(num))); // spread set1 into an array, filter the array to keep only those values which are present in set2, then create a new set from the filtered array

// console.log(result) ; // Set(3) { 10, 20, 40 }

//  Iterate over set
// for of: iterator, set has its own iterator unlike objects hence cant use for of on objects, object doesnt have Symbol.iterator property
// for(let value of set1)
//     console.log(value);

// for each 
set1.forEach((value)=>console.log(value)); // callback function with value as parameter


