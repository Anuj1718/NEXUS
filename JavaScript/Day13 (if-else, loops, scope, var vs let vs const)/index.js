// if- else
// let age = 7;

// if(age>=18)
// {
//     console.log("Eligble for vote");
// }
// else
// {
//     console.log("Not Eligible for vote");
// }

// if else if else
// let age = 49;
// if(age<18)
// {
//     console.log("KID");
// }
// else if(age>45)
// {
//     console.log("OLD");
// }
// else
// {
//     console.log("YOUNG");
// }

//  Multiple condition: switch

// console.log(new Date().getDay()); // output 0-6, newData() gives current date and time

// let day = "0";

// === : strict comparison happens in switch 
// switch uses strict comparison(===) internally
// hence if day is string "0" it will not match case 0 which is number 0
// hence use let day = 0;

// switch(day)
// {
//     case 0:
//         console.log("SUNDAY");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Not a Valid Day");
// }
// say day is 5 and if u do not put break after case 5, it will print Friday and Saturday both until it finds a break or end of switch

//  loop : ek hi kaam ko baar baar karna

// i = 20
// for(let i=0;i<20;i++){

//     console.log("Hello Coder Army") 
// }
//each time new memory is created for i in for loop unlike cpp where same memory is used, hence slower in js

//cant write const i=0;i<20;i++ because const cannot be changed

//  sum of first n number: 10 number
// let sum = 0;
// for(let i=1;i<=10;i++)
// {
//     sum+=i;
// }
// for i and sum, each time, new memory is created unlike in cpp, hence slower in js
// console.log(sum);








// 20 print karna hai

//  Nested for loop; Loop ke andar loop
// 12345
// 12345
// 12345
// 12345
// 12345
// 12345



// Common escape sequences with \:

// \n → newline

// \t → tab

// \\ → a literal backslash

// \' → single quote (inside single-quoted string)

// \" → double quote (inside double-quoted string)

// for(let j=0;j<6;j++){
//    for(let i=1;i<=5;i++)
//    {
//     console.log(i);
// //  process.stdout.write(i + " ");
//    }
// }

// In JavaScript console.log() always ends with a newline, so you need something that doesn’t automatically break the line.

// Use process.stdout.write() (Node.js):

// for(let i=0;i<20;i++)
//     console.log(i);

//  scope ke baare mein: 
//  var 

// while loop
// for(let i=1;i<6;i++){

// }
// let i = 1;
// while(i<6)
// {
//     console.log(i);
//     i++;
// }

//  do-while loop 
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<6); 
//  do-while loop mein condition last mein check hoti hai, hence it will run at least once

//  for loop, while loop, do-while loop
//  for loop: initialization, condition, increment/decrement
//  while loop: initialization, condition, increment/decrement
//  do-while loop: initialization, increment/decrement, condition
//  for loop: best for known iterations
//  while loop: best for unknown iterations
//  do-while loop: best for unknown iterations, but needs to run at least once



// let arr = [10,30,40,50];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

const obj = {
    name:"rohit",
    age:30,
    amount:420,
    city: "kotdwar"
}
ī


// const key = Object.keys(obj);
// [ 'name', 'age', 'amount', 'city' ]
// for(let i=0;i<key.length;i++)
// {
//     console.log(obj[key[i]]);
// }

// Object.values(obj); // [ 'rohit', 30, 420, 'kotdwar' ]
// const values = Object.values(obj);
// for(let i=0;i<values.length;i++)
// {
//     console.log(values[i]);
// }

// Object.entries(obj); // [ [ 'name', 'rohit' ], [ 'age', 30 ], [ 'amount', 420 ], [ 'city', 'kotdwar' ] ]
const entries = Object.entries(obj);
// for(let i=0;i<entries.length;i++)
// {
//     console.log(entries[i][0], entries[i][1]);
// }


// for in loop





