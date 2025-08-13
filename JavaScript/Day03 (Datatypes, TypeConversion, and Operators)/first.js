// // Number, string, boolean, null, undefined, Bigint, Symbol => used for unique identifiers

// // Non Primitive data type
// // Array, Object, function

// // let n = 10;
// // let n2 = 20;
// // let n3 = 50;
// // array
// let arr = [10,20,50,"rohit","mohit"];
// console.log(typeof arr); // Output: object

// // Object
// // key:value

// // let user_name = "Rohit";
// // let account_number: 31242314213;
// // let balance: 420;

// let obj = {
//    user_name: "Rohit",
//    account_number: 31242314213,
//    balance: 420
// }

// console.log(obj);

// // function

// let fun = function(){
//     console.log("Hello Coder army");
//     return 10;
// }

// console.log(fun()); // 
// console.log(typeof fun); // Output: function

// Type conversion

// // String to number
// let account_balance = "100";
// let num = Number(account_balance); //

// console.log(typeof account_balance);
// console.log(typeof num);

// // Boolean convert to number
// let x = false;
// console.log(Number(x)); // // Output: 0
// x = true;
// console.log(Number(x)); // // Output: 1

// let account = "100xs";
// let bal = "200s"
// console.log(Number(account)); // NaN
// console.log(Number(bal)); // // NaN => Not a Number

// // null to number

// let x1 = null;
// console.log(Number(x1)); // // Output: 0

// // undefined to number
// let x2;
// console.log(Number(x2)); // // Output: NaN

// // String ke andar convert
// numeber to string
// let ab = 20;
// console.log(String(ab)); // // Output: "20"

// // Boolean to string
// let ax = false;
// console.log(String(ax)); // // Output: "false"
// // console.log(typeof ax) // Output: boolean
// // console.log(typeof String(ax)); // Output: string


// // String to boolean
// // Empty string is false, non empty string is true
// let abc = " ";
// let abc1 = "anuj "; 
// console.log(Boolean(abc)); // // Output: true
// console.log(Boolean(abc1)); // // Output: true
// console.log(Boolean(0)); // // Output: false
// console.log(Boolean(1)); // // Output: true

 // Operators
// console.log((((6*(3+18))/6)-9));
// // 18+3-9
// Precedence of operators
// // Divide Multiply Left to Right
// // Add sub Left to right

// // Modulus give remainder
// console.log(20%3); // Output: 2

// // ++ increment operator , -- decrement operator
// let sum = 20;
// // --sum
// // sum++ post increment , sum-- post decrement
// // ++sum pre increment , --sum. pre decrement
// let total = ++sum; 
// console.log(total); // Output: 21
// console.log(sum); // Output: 21
// let total1 = sum++;
// console.log(total1); // Output: 21
// console.log(sum); // Output: 22


// Assignment operator

let x = 20;
x+=10;
// x = x+10;
console.log(x);
// x = x-10;
x/=10;
console.log(x);








