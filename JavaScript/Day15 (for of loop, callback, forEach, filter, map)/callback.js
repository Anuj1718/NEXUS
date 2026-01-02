// call back function
// A function that is passed as an argument to another function and is executed after the completion of that function.
// It is called a callback function because it is called back by the function that it is passed to.
// Callbacks are used to handle asynchronous operations in JavaScript, such as fetching data from an API or reading a file.

// function names(fun){
//     console.log("Hello I am name");
//     fun();
// }

// function greet(){
//     console.log("I am call Back Function");
// }

// names(greet); //function greet is passed as an argument to another function names

// passed as reference ,don't put (_) after function name meaning don't call the function
// names function ke andar greet function ko pass kar diya hai
// it ll get stored in fun variable
// and then it will be called inside the names function
// greet ko catch kon karega? fun

// or remove greet in argument and directly do this

// names(function greet(){
//     console.log("I am call Back Function");
// });

//or store it in a variable and then pass it
// const greet = function (){
//     console.log("I am call Back Function");
// }
// names(greet);  this way also works

// names(function{
//     console.log("I am call Back Function");
// });

//or use arrow function as callback function
// names(()=>{
//     console.log("I am call Back Function");
// });

// real life example of callback function
// function fetchData(){
//     // bhut saara code
//     console.log("I am fetching data");
// } //backend se data fetch karke frotnend pe lana every 5 seconds

// setInterval(fetchData,5000);
// setInterval is a built-in function in JavaScript that takes a callback function and a time interval in milliseconds as arguments
// It executes the callback function repeatedly at the specified time interval.





