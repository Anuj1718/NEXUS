// // primitive data type

// const num = 10;
// console.log(num);

// // Non Primitive datatype
// const obj = {
//     id:10,
//     balance:200
// }

// obj.id = 11;
// console.log(obj); // output { id: 11, balance: 200 }
// here it is acceptable to change the value of the object as constant is used for reference, not for the value meaning constant is for the location of the object in memory (stored in stack), not for the value of the object (stored in heap)

// let obj2 = {
//     id:20,
//     money:30
// };

// // location of obj2 is 800
// // location of obj is 6521

// obj = obj2;
// // error as obj is a constant and we cannot change the reference of a constant variable i.e we cannot change the location of the object in memory, obj = obj2 means u r assigning the location of obj2 to obj, which is not allowed as obj is a constant variable


// string in js
let str1 = "Hello Coder army";
let str2 = 'Mein toh mast hu';
let str3 = `Aur bhaiya kya haal chaal`; // backticks are used for template literals, which allow for multi-line strings and string interpolation

let price = 80;

console.log(`price of the fresh tomato is ${price} , get is asap`);
console.log("price of the fresh tomato is", price , "get it asap");
// console.log(str1, str2, str3);

//  string concatentaion
let s1 = "hello";
let s2 = " Coder Army";
let s3 = s1+s2;
console.log(s3);
console.log(s3.length); // output: 16

//  "hello coder army" (print with quotations)
console.log('"hello coder army"');
// 'hello coder army'
console.log("'hello coder army'");

// Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.
let message = "Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai."; // \n is used for new line in strings 
console.log(message);
// escape character \ is used to escape special characters in strings, like \n for new line, \t for tab, \\ for backslash, \' for single quote, and \" for double quote
let comment = "Rohit Bhaiya bhut bade badmash hai. \\nWo bhut gande insaan hai." // here \\n is used to print \n in the string, as \ is a special character and needs to be escaped with another \ to print it as a normal character
console.log(comment);

let special = "Rohit";
console.log(special[4]); // t
console.log(special.charAt(3)); //i


// to lowercase
// to uppercase
console.log(special.toLowerCase()); // rohit
console.log(special.toUpperCase()); // ROHIT
// length ko chhodke u gotta use function () with everything else. Reason is that length is a property, not a method, so it does not require parentheses
let strtemp = special.toUpperCase();
console.log(strtemp); // ROHIT
console.log(special); // Rohit is still rohit, as strings are immutable in JavaScript, meaning that they cannot be changed once created. Instead, a new string is created with the changes applied.

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder")); // output: 6
console.log(hero.indexOf("Coder", 7)); // output: 17, starts searching from index 7
console.log(hero.indexOf("Coder", 20)); // output: -
console.log(hero.lastIndexOf("Coder")); // output: 17, last occurrence of "Coder" in the string
console.log(hero.indexOf("coder")); // output: -1, as indexOf is case-sensitive and "coder" is not the same as "Coder"
console.log(hero.includes("Coder")); // output: true, checks if "Coder" is present in the string
console.log(hero.includes("coder")); // output: false, checks if "coder" is present
               //0123456  
let newstring = "HeloDon";
            //  -7-6-5-4-3 -2-1 
console.log(newstring.slice(1,3)); // output: "el", extracts characters from index 1 to index 3 (not including index 3)
console.log(newstring.slice(2)); // output: "loDon", extracts characters from index
// slice can take negative index also;
console.log(newstring.substring(0,3)); // output: "Hel", extracts characters from index 0 to index 3 (not including index 3)
console.log(newstring.slice(-6,5)); // output: "elo", extracts characters from index -6 to index 5 (not including index 5)
console.log(newstring.slice(-2,4)); // output : empty string, as -2 is less than 4 and there are no characters between them


let str10 = "Hello Ji Kaise ho Ji"; 
console.log(str10.replace("Ji","Money")); // output: "Hello Money Kaise ho Ji", replaces the first occurrence of "Ji" with "Money" 
console.log(str10.replaceAll("Ji","Money")); // output: "Hello Money Kaise ho Money", replaces all occurrences of "Ji" with "Money"
    

let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! ")); // output: ["Money", "honey", "sunny", "funny"], splits the string into an array of substrings using "! " as the separator

let str12 = " hello ji ";
console.log(str12.length); // output: 10, counts the length of the string including whitespace
console.log(str12.trim()); // output: "hello ji", trims the whitespace from both ends
console.log(str12.trim().length); // output: 8, trims the whitespace from both ends of the string and returns the length of the trimmed string
console.log(str12.trimStart()); // output: "hello ji ", trims the whitespace from the start of the string
console.log(str12.trimEnd()); // output: " hello ji", trims the whitespace from the end of the string

// New way to create string
let lasteststring = new String("Hello Coder Army"); // creates a new String object
console.log(lasteststring); // output: String { "Hello Coder Army" }, creates a new String object
console.log(typeof lasteststring);// output: "object" — because `new String()` creates an object, not a primitive
// now memory location of string object is stored in heap, and the reference of that object is stored in stack instead of in stack directly like in the case of primitive data types