//  reduce


array.reduce((accumulator, currentValue, index, array) => {
  return newAccumulator;
}, initialValue);

// accumulator → running result

// currentValue → current element

// initialValue → starting value for accumulator (strongly recommended)

// const arr = [10,20,30,40,50];

// // const result = arr.reduce(callback function, initialization)

//const result = arr.reduce((acc, curr) =>{
    // console.log("acc", acc);
    // console.log("curr", curr); //for visualization
    // acc  = acc + curr;
    // return acc;
    // }, 0);


// const result = arr.reduce((acc,curr)=> acc+curr, 0);

// acc is accumulator, inital value is 0
// acc is the value returned by the previous iteration, in first iteration it is 0, whatever you return goes in acc
// curr is current value, 10, 20 etc goes in it 
// the initialization you wrote in syntax is the initial value of acc, if you don't write it, it will take first element of array as initial value and start from second element

// parameters : accumulator, currentValue, currentIndex, array (kinda same as forEach, filter, map)

// console.log(result); // 150

//real life example
let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
//  final result ek object ke form
// orange:3
// apple:2
// acc = {
// orange:2,
// apple:2,
// banana:1}

// const result = arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr)) //if acc has orange 
//         acc[curr]++;
//     else
//       acc[curr]=1; //// if acc does not have orange, set it to 1

//     return acc;
// },{})

//put {} as initial value to acc as i need to return an object
// acc is an object, curr is a string, so we can use hasOwnProperty to check if the property exists in the object
// if it exists, increment the value, else set it to 1
// this is how we can count the frequency of elements in an array
// if you don't put {} as initial value, it will take first element of array as initial value and start from second element, which will not work in this case as we need an object to store the frequency of elements
// if you put 0 as initial value, it will not work as we need an object
// if you put [] as initial value, it will not work as we need an object
const result = arr.reduce((acc,curr)=>{
    
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;

    return acc;
},{})

console.log(result);



// Example 1: Sum of numbers

// const arr = [1, 2, 3, 4];

// const sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10

// acc=0 → 1 → 3 → 6 → 10
// curr=1 → 2 → 3 → 4

// Example 2: Product of numbers

// const product = arr.reduce((acc, curr) => acc * curr, 1);

// Example 3: Flatten an array

const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1,2,3,4,5]

// or just Flatten one level using flat()
// console.log(arr.flat()); 


//Flatten deep nested array using flat(Infinity)
