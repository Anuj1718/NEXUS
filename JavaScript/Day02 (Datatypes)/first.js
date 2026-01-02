// declare the variable
// let num = 10;
// console.log(num);

// Primitive Data Type (7)

// Number, boolean, string, null, undefined, Symbol, bigint

// number
let account_balance = 30;
console.log(account_balance);

// string : ('...', "...", or `...`)
let str = "rohit negi is a bad boy, he doesn't know how to use zoom";
console.log(str)
let comment = 'Hello dosoton'
console.log(comment)

// can use semi-colon or not 

// Boolean
// true or false
let Papa_ko_block_kara_hai = false;
console.log(Papa_ko_block_kara_hai);
console.log(typeof Papa_ko_block_kara_hai);

// Undefined

let account;
console.log(account);
console.log(typeof account); // undefined

// Null

let bal = null;
console.log(typeof bal); // object, why? // This is a known JavaScript quirk where null is considered an object type
// but it is actually a primitive value representing the absence of any object value
// why not fixed? // Because it is a legacy issue in JavaScript, and changing it now would break existing code that relies on this behavior.
console.log(bal); // null is a special value that represents the intentional absence of any object value

// bigint

let a = 4343147836124791823749832n;
console.log(a);


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// Non Primitive Data Type
// Array, Object , function
// one reference (object) type that includes arrays, functions, and more like date

