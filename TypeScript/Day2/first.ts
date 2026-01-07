let num:number = 10;

let x = 10;
//ts infers the type, it will infer that x is number and we cannot assign other type value to x
// x = "Rohit"; // error
let val = "Rohit"

// let money; // any type, u can assign any type of value
//when u declare a variable without any type or initialization, ts infers it as any type
let money:any;
// this can be a dangerous thing as any type bypasses all type checking


money = "Rohit";
money = 20;

// console.log(money.toUpperCase());
//any type allows any operation without type checking, it can lead to runtime errors if the operations are not valid for the actual type of the variable
//any behaves like js variable

let val2:unknown; // unknown type is safer than any type, it doesnt allow any operation without type checking, we gotta narrow em down first before using

val2 = "Rohit";
val2 = 10;

if(typeof val2 === 'string') //type narrowing else will give error 
console.log(val2.toUpperCase());
if(typeof val2 === 'number') //type narrowing
console.log(val2.toFixed(2));
// cant consume directly without type narrowing

// Non Primitive

let arr:number[] = [2,4,5,7,11];
let arr2 = [2,1,19,10];

let arr3:(string | number)[] = ["Rohit",20,11,"Sohan"];
arr3.push(10);

let arr4:(string | number | boolean)[] = ["rohit",10,false,11];


let tuple:[string,number,number] = ["Rohit",10,11];


// Objects
// inline
let obj1:{name:string,age:number,gender:string} = {
    name:"Rohit",
    age:20,
    gender:"female"
}


let person :{name:string;age:number,balance:number};

person = {
    name:"rohit",
    age:20,
    balance:420
};

let n1:number;
n1 = 10;



type customer = {
    name:string,
    age:number,
    id: string
}



let c1 : customer ={
    name:"Rohit",
    age:20,
    id:"fshfsd"
}


interface admin {
    names:string,
    age:number,
    position:string
};

interface admin {
    id:number
}


let obj3: admin = {
    names:"Rohit",
    age:20,
    position:"manager",
    id:210
};


// Interface vs Type
// Function
// Classes



