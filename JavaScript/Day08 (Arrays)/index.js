// const arr = [2,35,1,8,9,"rohit",true,8];
// console.log(arr[1]);
// console.log(arr.at(-2));
// // at is latest, negative index le leta hai
// console.log(arr.length);
// // length
// // helpful

// console.log(newarr==arr);  // true
// const newarr = structuredClone(arr); //false, both are different objects, pointing to different memory locations

// push, add element at end

// arr.push(30);
// arr.push(50);
// console.log(arr);

// // pop , pop the last element from array
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// // unshift : add element at start

// arr.unshift(10);
// arr.unshift(30);
// console.log(arr);

// // shift : delete element from start
// // [2,35,1,8,9,"rohit"];
// arr.shift();
// console.log(arr);

// // delete operation
// // [hole,2,35,1,8,9,"rohit"];
// delete arr[0];
// console.log(arr); //if i have to access the first element, it will give me undefined and the length will remain same, if i have to access the second element, it will give me 2

// console.log(arr);
// console.log(arr.indexOf(8)) // first index of 8
// console.log(arr.indexOf(10)); // -1, not present
// console.log(arr.lastIndexOf(8)); // // last index of 8
// console.log(arr.includes(10)); // // true or false, 10 is present or not

// slice : // it will return a new array, it will not change the original array
// console.log(arr);
// let a = arr.slice(2,5);
// console.log(a);
// console.log(arr);

// splice : // it will change the original array, it will return the deleted elements
// console.log(arr);
// let newsplice = arr.splice(2,5);
// console.log(newsplice);
// console.log(arr);
// splice(starting_index,total_element_delete,add value) // it will delete the elements from starting_index and total_element_delete number of elements, and add value at that index
// arr.splice(2,0,"money",90);
// console.log(arr);
// console.log(arr.toString()); // // toString will convert the array into string, it will not change the original array
// console.log(arr.join("*")); // // join will convert the array into string, it will not change the original array, it will join the elements with the given separator


// concat
// let arr1 = [2,35];
// let arr2 = [5,12];
// let arr4 = [23,432,1123,31];
// let arr3 = arr1.concat(arr2,arr4); // it will return a new array, it will not change the original arrays, this aint 2d array
// console.log(arr3[6]);
// arr1.push(arr4); // 2d array
// console.log(arr1[2][0]);

// 2d array
let arr = [1,2,3,4,5,6,7,8,9];
let arr2d = [[1,2,3],[4,5,6],[7,8,9]]; // 2d array
let arr3d = [[1,2,3,[23,432,123,[331,123,123]]],[4,5,6],[7,8,9]]; // 
// flat ka use to convert into 1d array
let newarr = arr2d.flat();
// [1,2,3]
// [4,5,6]
// [7,8,9]
let newarr2 = arr3d.flat(2); // 2 level deep
// [1,2,3,23,432,123,[331,123,123]]
// [4,5,6]// [7,8,9]
let newarr3 = arr3d.flat(Infinity); // it will flatten the array to any level of depth
// [1,2,3,23,432,123,331,123,123]
// [4,5,6]
// [7,8,9]

//if 2d array, write 1, if 3d array, write 2, if n-d array, write Infinity
console.log(newarr2);
console.log(newarr);


let abc = [2,1,4,1];
console.log(Array.isArray(abc)); // true, it is an array
console.log(typeof abc); // object, it is an object in javascript, arrays are objects in javascript

// let ac = new Array(10); // can create an array of 10 undefined elements, not recommended, if you give a number, it will create an array of that length with empty slots, if you give multiple arguments, it will create an array with those elements
let ac = Array(10); // same as above, creates an array of 10 undefined elements, not recommended
let ac1 = Array(1,2,3,4,5, "Anuj"); // creates an array with those elements
// console.log(ac); // [ <10 empty items> ]
// console.log(ac1); // [ 1, 2, 3, 4, 5, 'Anuj' ]
// console.log(ac.length); // // 10
// console.log(ac1.length); // 6, length of the array

// array and function typeof is object, will learn why later when we learn internal implementation of javascript