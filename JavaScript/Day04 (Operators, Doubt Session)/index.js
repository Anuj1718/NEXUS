//  comparison operartor
// number to number

// let a1 = 1;
// let a2 = 2;
// console.log(a1==a2);
// == both are equal
// < less than, > greater than
// <= less than equal to , >= greater than equal to

// let num = 10;
// let str = "20";
// console.log(num==str);
// // Type conversion hoga string to number

// let a1 = 10;
// let str1 = "10";
// console.log(a1==str1); // 


// // === type check, then compare the value
// console.log(a1===str1); // // both are equal but type is different, ouput will be false


// let a2 = 30;
// let a3 = 40;
// console.log(a2===a3);

// null comparison
// null == undefined // true
// null=== undefined // false as type is different 
// console.log(null==undefined); //true 
// console.log(null===undefined); // false as type is different
// IMP Rule : null can only be equivalent (==) to undefined 
// console.log(null==0); // false as null can only be equivalent (==) to undefined 
// console.log(null<0); // false as null is considered as 0 in comparison
// console.log(null>0); // false as null is considered as 0 in comparison
// console.log(null<=0); // true as null is considered as 0 in comparison
// console.log(null>=0); // true as null is considered as 0 in comparison
// Type conversion (to number) happens in comparison, so null is considered as 0 in comparison

// undefined comparison
// console.log(undefined==0); // false as undefined can only be equivalent (==) to null
// console.log(undefined<0); // false as undefined will be considered as NaN in comparison
// console.log(undefined>0); // false as undefined will be considered as NaN in comparison
// console.log(undefined<=0); // false as undefined will be considered as NaN in comparison
// console.log(undefined>=0); // false as undefined will be considered as NaN in comparison
// Type conversion (to number) happens in comparison, so undefined is considered as NaN in comparison

// If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise return false.

// console.log(NaN==NaN); // false as NaN is not equal to anything, not even itself
// console.log(NaN===NaN); // false as NaN is not equal to anything, not even itself
// let str3 = "rohit"; 
// let str4 = "mohan"; 

// console.log(Number(str3));


// let abc1 = 123;
// let abc2 = "123";
// let abc3 = 123;
// console.log(abc1==abc2==abc3); // false as the comparison is done from left to right
// console.log(abc1==abc2); // true
// console.log(abc2==abc3); // true
// so itll be like true==abc3, which is false as true is not equal to 123
// if let abc3 = true; then it will be true==true, which is true

// console.log(undefined!=null); // false as null can only be equivalent (==) to undefined


// mdn docs: 
// The equality operators (== and !=) provide the IsLooselyEqual semantic. This can be roughly summarized as follows:

// If the operands have the same type, they are compared as follows:
// Object: return true only if both operands reference the same object.
// String: return true only if both operands have the same characters in the same order.
// Number: return true only if both operands have the same value. +0 and -0 are treated as the same value. If either operand is NaN, return false; so, NaN is never equal to NaN.
// Boolean: return true only if operands are both true or both false.
// BigInt: return true only if both operands have the same value.
// Symbol: return true only if both operands reference the same symbol.

// If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise return false.

// If one of the operands is an object and the other is a primitive, convert the object to a primitive.

// At this step, both operands are converted to primitives (one of String, Number, Boolean, Symbol, and BigInt). The rest of the conversion is done case-by-case.
// If they are of the same type, compare them using step 1.
// If one of the operands is a Symbol but the other is not, return false.
// If one of the operands is a Boolean but the other is not, convert the boolean to a number: true is converted to 1, and false is converted to 0. Then compare the two operands loosely again.
// Number to String: convert the string to a number. Conversion failure results in NaN, which will guarantee the equality to be false.
// Number to BigInt: compare by their mathematical value. If the number is ±Infinity or NaN, return false.
// String to BigInt: convert the string to a BigInt using the same algorithm as the BigInt() constructor. If conversion fails, return false.
// Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of applied conversions).

// The most notable difference between this operator and the strict equality (===) operator is that the strict equality operator does not attempt type conversion. Instead, the strict equality operator always considers operands of different types to be different. The strict equality operator essentially carries out only step 1, and then returns false for all other cases.
// // 

// // let age = 18;
// let money =420;
// console.log(age<18&&money>200);

// console.log(age>10 || money>200)

// console.log( !(age>10));

//  bitwise operartor
console.log(4&5);
console.log(11&14);
console.log(11|14);
console.log(5^7);
// The bitwise XOR (exclusive OR) operator takes two bits as input and outputs 1 if the bits are different, and 0 if the bits are the sam
console.log(5<<3);
// 5 multiply by 2 power 3 // left shift
// 101.0000000000000000
// 101000.0000000

console.log(20>>2);
// right shift , 20 divided by 2 power 2
// 10100.000000
// 101.0000000


// Doubt session: 

console.log(0.1 + 0.2); // 0.30000000000000004
// This is due to the way floating-point numbers are represented in binary, leading to precision issues
// 0.1 and 0.2 cannot be represented exactly in binary, so when they are added, the result is slightly off from the expected value of 0.3.
// To avoid this issue, it's common to round the result to a certain number of decimal places
console.log((0.1 + 0.2).toFixed(1)); // 0.3
console.log(0.1 + 0.2 === 0.3); // false