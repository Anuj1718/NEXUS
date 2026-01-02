let obj = {
    name:"rohit",
    age:10,
    orange:1,
}
// console.log(obj.hasOwnProperty("name")); // true
// console.log(obj.hasOwnProperty("rohit")); // false

let curr = "apple";
// obj.apple = 1;
// obj["apple"]=1;
// obj[curr] = 1;
// these three lines are equivalent, they will add a new property apple with value 1 to the object obj

if(obj.hasOwnProperty(curr))
    obj[curr]++;
else
   obj[curr]=1;


console.log(obj); // { name: 'rohit', age: 10, orange: 1, apple: 1 }

