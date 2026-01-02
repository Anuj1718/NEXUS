let user1 = {
    name: "Rohit",
    age: 20,
}



let user2 = {
    amount:20,
    money:50
}


user2.__proto__ = user1; // user2 is inheriting properties from user1 
console.log(user2.name); // output: Rohit (inherited from user1)
console.log(user2.age); // output: 20 (inherited from user1)
console.log(user2.amount); // output: 20 (from user2)

let arr = [10,20,30,40];

// in console, 
// arr.__proto__ or Array.prototype; // arr is an instance of the Array prototype 
// arr.__proto__.__proto__ or Array.prototype__proto__ or Object.prototype // arr is an instance of the Object prototype
// arr.__proto__.__proto__.__proto__ or null; // null prototype

console.log(arr.__proto__== Array.prototype) // true
console.log(arr.__proto__.__proto__== Object.prototype) // true
console.log(arr.__proto__.__proto__.__proto__== null) // true


