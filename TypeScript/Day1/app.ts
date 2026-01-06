// a = "Rohit";

// Number
let a:number = 10; //converted in var a = 10;
let b:number = 20; // converted in var b = 20;

//as i didnt tell it which js version to compile it to, by default it will compile to es3
// hence use tsc app.ts --target es2016
//after configuring tsconfig.json just use tsc
// now they got compiled to es6
//as strict mode and let var a = 10;

// a ="anuj"; //error but it will still compile to js

// string
let str:string = "Rohit";

// boolean
let isExist:boolean = true;
isExist = false;

// bigint
// let bignumber:bigint = 132143292183n;
//error as bigint literals are not available when targeting lower than es2020
//but convert still kardega js mai

// null
let abc:null = null;
let bcd:undefined=undefined;
// bcd = "Mohan";

let names:string = "Moahn";
let honey:number = 20;

const ho:number = 17;

// hw
// Compile time language
// Interpreted language
// JIT: Just in time

let x = 20;
// x = "rohit"; //error even if we dont specify type it will take type as number and give error on assigning string


