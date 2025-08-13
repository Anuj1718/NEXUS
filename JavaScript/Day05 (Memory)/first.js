// js : a scripting language, it is not a programming language, it is neither interprter nor compiler, it is a jit compiler
// it is a just in time compiler, it compiles the code at runtime, it is a high level language, it is a dynamic language, it is a loosely typed language

let a = 10;
let b = a;
b = 30;
console.log(b);
console.log(a);
// a is 10, b is 30, b is a copy of a, so changes in b will not affect a
// a and b are primitive data types, they are immutable, they are stored in stack memory

// Primitive data type vs Non Primitive data type
// Primitive data type: Immutable
// Non Primitive data type: Mutable

// Object example:

let obj1 = {
    id:20,
    naming: "rohit"
}

let obj2 = obj1;

obj2.id = 30;

console.log(obj1);
console.log(obj2);
// changes are reflected in both obj1 and obj2 because they are pointing to the same object in memory
// obj1 and obj2 are non-primitive data types, they are mutable, they are stored in heap memory
