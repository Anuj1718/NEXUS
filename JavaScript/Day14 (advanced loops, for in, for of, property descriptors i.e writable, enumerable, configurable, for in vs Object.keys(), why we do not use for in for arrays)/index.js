let obj = {
    name: "rohan",
    age:23,
    gender:"male",
    city:"kotdwar"
};



for(let key in obj)
    console.log(key);

// for in loop , I can iterate over keys in an object

// for(let key in obj) //key is a variable name, can give any name
// {
//     console.log(key, obj[key]);
// }

// // Object.keys(obj)
// console.log(Object.keys(obj));

// let obj2 = Object.create(obj); // obj2 is inheriting properties from obj, we are creating prototype chain here
// console.log(obj2); // output: {} (obj2 has no own properties, but inherits from obj)
// console.log(obj2.name); // output: rohan (inherited from obj via prototype chain)
// obj2.money = 420;
// obj2.id = "Roh";
// // console.log(obj2); //only its own properties are shown, not the inherited ones
// console.log(Object.keys(obj2)); // // output: [ 'money', 'id' ] (obj2's own properties)
// for(let key in obj2)
// {
//     console.log(key);
// } // ouput : money, id (obj2's own properties), name, age, gender, city (inherited from obj)
// for in loop iterates over both own and inherited properties of an object
// this is the main difference between for in loop and Object.keys()

// Object.keys() only returns the object's own enumerable property names, not the inherited ones.
// for in loop iterates over all enumerable properties, including those inherited through the prototype chain.

//Question : As for in loop iterates over both own and inherited properties, why doesn't it iterate over the prototype chain of the object?
// Answer: for in loop iterates over the enumerable properties of an object, which includes both own and inherited properties. However, it does not iterate over the prototype chain of the object. The prototype chain is a separate structure that is used to look up properties that are not found in the object
// itself. The for in loop only iterates over the properties that are directly defined on the object or its prototype, but not the properties that are defined on the prototype chain of the object.
//
// for in loop is used to iterate over the properties of an object, while Object.keys()
// is used to get an array of the object's own enumerable property names. The for in loop
// can be used to iterate over both own and inherited properties, while Object.keys() only
// returns the object's own properties. The for in loop is more flexible, but Object.keys()
// is more efficient for getting an array of the object's own properties.

