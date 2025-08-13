// let obj = {};

// obj.name = "Rohit";
// obj.age = 20;
// key value writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name')); // output: { value: 'Rohit', writable: true, enumerable: true, configurable: true }
// //  writable means value ko kya mein change kar sakta hu, if true then yes, else no
// //  enumerable means key ko kya mein print kar sakta hu, if true then yes, else no
// configurable means can i change the property descriptors writeable and enumerable of the key, if true then yes, else no
// //  configurable means key ko kya mein delete kar sakta hu, if true then yes, else no    
// // obj.name = "Mohit"; // change the value of name
// console.log(obj.name); // output: Mohit


// // configurable= false

let obj = {};


// Object.defineProperty(obj, 'name', {
//     value:"rohit",
//     writable:false,
//     enumerable:true,
//     configurable:false,
// })

// obj.name = "mohit";
//console.log(obj) // output: { name: 'rohit' }, did not change because writable is false
// by default, writable, enumerable and configurable are true

// Object.defineProperty(obj, "name",{
//     writable:true,
// })
// wont work because configurable is false, so we cannot change the property descriptors of the key

// console.log(Object.getOwnPropertyDescriptor(obj, 'name')); // output: { value: 'rohit', writable: false, enumerable: true, configurable: false }

// console.log(obj);

// const obj1 = {
//     name:"rohit",
//     age:23,
//     account_number:30001
// };

// Object.defineProperty(obj1, 'account_number',{
//     writable:false
// })
// now, no one can change the value of account_number


// obj1.account_number = 20001;
// console.log(obj1.account_number);

// const customer = {
//     name:"Rohit",
//     age:23,
//     account_number:123,
//     balance:2000,
// }



// name , account_number , change nahi hone chaiye
// Object.defineProperty(customer, "name",{
//    writable:false,
// })
// customer.name = "Mohit";
// // customer.account_number = 10001;

// console.log(customer);

//  Object.protoype
const customer = {
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000,
}

let customer2 = Object.create(customer);
customer2.city = "Haridwar";
customer2.place = "Delhi";

Object.defineProperty(customer, "name", {
    enumerable:false,
})

// enumerable: jis bhi key ka enumerable true hga, un sabka acces hga ya print hga
//  Inherit hoke bhi koi bhi property or key aati hai , uska enumerbale true hua toh wo bhio print hga



// console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
} )

for(let key in customer)
    console.log(key);



