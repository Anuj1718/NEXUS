// call back Hell

//why is callback function necessary?
// callback function:
// function fetchuser1(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const name = "Rohit";
//     //   Data fetched from backend
    
//     greet(name);
//     },2000)
// }

// function fetchuser2(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const name = "Rohit";
//     //   Data fetched from backend
    
//     meet(name);
//     },2000)
// }

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

function meet(obj){
    console.log(`Hello ${obj.name}, I will meet you in Delhi`);
}

//instead of writing 2 diff functions to call greet and meet (hardcoded), we can write it once and pass callback function to it and it will decide which function u r calling

// function fetchuser(callback){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const name = "Rohit";
//     //   Data fetched from backend
    
//     callback(name);
//     },2000)
// }
function greet(obj){
    console.log(`Hello ${obj.name}`);
}

function meet(obj){
    console.log(`Hello ${obj.name}, I will meet you in Delhi`);
}

// fetchuser(meet);
// fetchuser(greet);



// function fetchuser(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const obj = {
//         name: "Rohit",
//         age:28,
//         city:"Delhi",
//      }
//     //   Data fetched from backend
    
//     greet(obj);
//     },2000)
// }


// function fetchuser1(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const obj = {
//         name: "Rohit",
//         age:28,
//         city:"Delhi",
//      }
//     //   Data fetched from backend
    
//     printAge(obj);
//     },2000)
// }

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

// fetchuser();
// fetchuser1();
//u can use same code again and again if u use callback function

function meet(obj){
    console.log(`Hello ${obj.name}, I will meet you in Delhi`);
}

function edit(obj){
    console.log(`Edit ${obj.name}, of the user`)
}

function printAge(obj){
    console.log(`User ${obj.age}`)
}

// fetchuser(greet);
// fetchuser(meet);
// fetchuser(greet);
// fetchuser(edit);


//  User data fectch: 
// {
//         name: "Rohit",
//         age:28,
//         city:"Delhi",
//  }
// 1: greet
// 2: meet
// 3: edit
// 4: age

function fetchdata(callback){
    console.log("Fetched info of user");

    setTimeout(()=>{
      console.log("User detail fetched succesfully");
      const obj = {
                name: "Rohit",
                age:28,
                city:"Delhi",
         }

        callback(obj);
    },2000)
}

fetchdata(edit);
  




