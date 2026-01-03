const cart = ["Pizza","Coke", "sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })


    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })
    
    return pr;
    
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}


// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));

//async and await are syntax-level tools built on top of Promises. They do not create new behavior; they change how asynchronous code is written and reasoned about.
// They make asynchronous code look and behave more like synchronous code, which is easier to understand.
//await is always used inside an async function
// async function greet() {


//     try{
//     const order = await placeOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const droplocation = await pickupOrder(foodDetails);
//     deliverOrder(droplocation);
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }

// greet();




    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },5000)
    })

        const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

async function greet() {
     
    const data1 = await p1();
    // console.log("Hello Coder Army");
    console.log(data1);

    const data2 = await p2(); //it will print instantly after data1 as promise is already resolved, dono ek sath milenge, they wont run parallely cuz of await, khud ke execution ke wajah se chalre
    console.log(data2); // 
}

greet();

//output:
// First Promise resolved
// Second Promise resolved


// if it was 8000 ms in test1 and 5000ms in test2, fir bhi ek sath result aata as 8000 ms mai test1 resolve hoke data1 print karega, then turant test2 ka resolved value print karega as it is already resolved by that time


// p1.then(value=>console.log(value));
// p2.then(value=>console.log(value));
//output: (if 8000 ms in test1 and 5000ms in test2)
//Second Promise resolved
//First Promise resolved

//what if i wrap both promises in functions
function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },5000)
    })

    return p1;

}


function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

    return p2;

}


async function greet() {
     
    const data1 = await test1();
    // console.log("Hello Coder Army");
    console.log(data1);

    const data2 = await test2(); //it will not print instantly after data1 as both are wrapped in functions, hence dono ek sath nhi milenge, as code top se read hoga and jab function call greet() dikheag tab andar jayega greet fn ke aur andar await bolega wait karo
    console.log(data2); //
}

greet();

//output:
// First Promise resolved (after 5 sec)
// Second Promise resolved (after another 5 sec)



//async function always returns a promise whether u return something or not
// async function meet() {
    
// return "Hello Coder Army";  this will be wrapped in a resolved promise automatically
//if u return nothing, it will return a resolved promise with undefined value

// }

// meet().then(value=>console.log(value));








