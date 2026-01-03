function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },8000)
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
    
    
    console.log("Hello I greet You"); 

    // const [data1,data2] = await Promise.all([test1(),test2()]);
    const data1 = await test1();
    console.log(data1);
    const data2 = await test2();
    console.log(data2);
}

greet();
console.log("Hello Coder Army");
console.log("Kaise ho aap sab log");


//output:
// Hello I greet You
// Hello Coder Army
// Kaise ho aap sab log
// First Promise resolved (after 8 sec)
// Second Promise resolved (after another 5 sec)


//top se code read hoga, greet() call hoga, andar jaake pehle console.log chalega, fir test1() await bolega wait karo 8 sec, fir control bahar aayega aur neeche wala console.log chalega, fir dusra console.log chalega, fir 8 sec ke baad data1 print hoga, fir  test2 ka resolved value print hoga aur 5 sec baad 
// test1 microtask queue mai dalega greet ko
//microtask queue mai dalega greet ko fir bahar aayega aur neeche wala console.log chalega
//then once GEC is freed in callstack, microtask queue se greet ko uthake callstack mai dalega aur fir data1 print hoga
// fir test2 microtask queue mai dalega greet ko
// fir once GEC is freed in callstack, callback queue se greet ko uthake callstack mai dalega aur fir data2 print hoga


//if it was this way with Promise.all
async function greet() {
    
    
    console.log("Hello I greet You"); 

    const [data1,data2] = await Promise.all([test1(),test2()]); //it will run in parallel hence dono ek sath milenge, destructured array mai dono values aajayengi
    console.log(data1);
    console.log(data2);
}

//output:
// Hello I greet You
// Hello Coder Army
// Kaise ho aap sab log
// First Promise resolved (after 8 sec)
// Second Promise resolved (after 8 sec)

//if one was 8 sec and other was 5 sec, still both will come after 8 sec as both run in parallel and Promise.all waits for all promises to be resolved. (max time among all promises)