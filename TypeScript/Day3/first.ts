// interface Person{
//     name:string,
//     age:number,
//     gender:string,
//     aadhar?:number
// }
// // // ? makes the property optional, so we can skip it while creating object


// const obj:Person = {
//     name:"Rohit",
//     age:20,
//     gender:"Male",  
// }


// // Latest example

// interface customer {
//     name:string,
//     age:number,
//     balance:number
// }

// const obj2: Readonly<customer> = {
//     name:"Rohit",
//     balance:210,
//     age:20
// }
// // obj2.age = 21; // error as age is readonly


// <!-- Utility Types for Objects -->
// // Partial: All property becomes optional
// // Required: ALl property should be filled
// // Readonly: The property can only be read, write option is not available i.e cant be modified


// // array of Objects

// const arr = [{name:"Rohit", age:20}, {name: "Mohit", age:18}];
//automatically infers the type of array elements
//OR
// const arr: {name:string, age:number}[] = [{name:"Rohit", age:20}, {name: "Mohit", age:18}]; 
// explicitly defining the type of array elements
//OR

// interface people {name:string,age:number};
//const arr: people[] = [{name:"Rohit",age:20},{name:"Mohit",age:18}];

// // union type in array of objects
// interface manager {salary:number,id:string}

// const arr: (people | manager)[] = [{name:"Rohit",age:20},{name:"Mohit",age:18}, {salary:20,id:"2321"}]

// // function in TS

//in js
// function greet(a){
//     console.log(a);
//     return a+5;
// }
//will give error as it will infer a as any type
//mention return type as well tho optional cuz ts infers it automatically

// function greet(a:number):number{
//     console.log(a);
//     return a+5;
// }

// console.log(greet(10));


// function meet(msg:string,val:number):void{
//     console.log(msg,val);
// }


// meet("Anshika Verma", 4);

// // default parameter
// function neet(msg:string = "Jit"){
//     console.log(msg);
// }

// neet(); //if no argument is passed, default value is taken
// neet("Bittu"); //if argument is passed, it overrides the default value


// // Optional Parameter

// function GATE(person?:string){
//     console.log(person||"Mohan");
// }

// GATE("Rohit"); // output: Rohit
// GATE(); // output: Mohan


// // arrow function

// const sum = (a,b) =>
// {
//     return a+b;
// }
//gives error as types are not defined

// const sum = (a:number,b:number):number=>{
//     return a+b;
// }

// console.log(sum(3,4));


// // callback function




// const squareroot = (val:number):=>{
//    return val*val;
// }



// function placeOrder(order:number,callback: {amount:number} => void{
    
//     const amount:number = order+10;
//     callback(amount);
// }

//or

// type chill = (amount:number)=>void;
// function placeOrder(order:number,callback:chill){
    
//     const amount:number = order+10;
//     callback(amount);
// }


// placeOrder(10,(amount)=>{
//     console.log(amount);
// })



// // Rest Parameter


// function total(...arr:number[]){ // arr is an array of numbers
//    let ans:number = 0 ;
//    arr.forEach((val:number)=>ans = ans+val);
//    console.log(ans);    
// }


// total(2,3,1,4,123,1,12,10);





// // extend keyword
// used to inherit properties and methods from one class to another class
//can do this without extend keyword as well but that wont be inheritance

// interface human{
//     name:string,
//     age:number
// };

// interface Teacher extends human{
//    salary:string,
//    id:number
// }

// interface BankEmployee extends human{
//     salary: string,
//     position: string
// }

// const obj8:Teacher = {
//     name :"Rohit",
//     age: 20,
//     salary:"chillar",
//     id:123
// }







