// Callbackhell

// async task
// weather: 


const obj = fetch('http://api.weatherapi.com/v1/current.json?key=3cea9f2bee8f4ccf98853634260301&q=Pune&aqi=yes');
console.log(obj);
//output: Promise {<pending>} as fetch is an async task it returns a promise
//it will take time to fetch the data from the server
//then how do i print the data fetched from the server? 
//we can use setTimeout but that is not a good practice
//instead we can use .then() method of promise


//jab request bheji to pending state me gaya aur jab server se response aaya to resolved state me gaya, agar koi error aata to rejected state me jata
// dono hi case mai kuch to ayega hi

//jab data mil jata hai tab hum .then() method ka use karte hai i.e promise resolved hone ke baad
// .then() method takes two callback functions as arguments
// 1st callback function is called when promise is resolved
// 2nd callback function is called when promise is rejected
obj.then((data)=>{
    console.log(data);
});
    //OUTPUT: Response {type: 'cors', url: 'http://api.weatherapi.com/v1/current.json?key=3cea9f2bee8f4ccf98853634260301&q=Pune&aqi=yes', redirected: false, status: 200, ok: true, …}




const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)

//jab data mil jata hai tab hum .then() method ka use karte hai i.e promise resolved hone ke baad
Promises.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
});
//incase any error occurs we can catch it using .catch() method



// i want response body but it gave header
Promises.then((response)=>{
    console.log(response.json());
})
//OUTPUT: Promise {<pending>}
//response.json() is also an async task which returns a promise
//so we can use .then() method again to get the data

//then how do i solve this?
// as response.json() returns a promise we can return it and use another .then() method to get the data


Promises.then((response)=>{
    const pro2 = response.json();
    pro2.then((data)=>{
        console.log(data);
    })
})
//OUTPUT: {location: {…}, current: {…}}
// location: {name: 'London', region: 'City of London, Greater London', country: 'United Kingdom', lat: 51.52, lon: -0.11, …}
// current: {last_updated_epoch: 1717052400, last_updated: '2024-06-29 12:00', temp_c: 20.0, temp_f: 68.0, is_day: 1, …}
//this works
//OR some people do it like this

const pro2 = Promises.then((response)=>{
    return response.json();
})

pro2.then((data)=>{
        console.log(data);
    })
//OR

Promises.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
//also called promise chaining


//OR as it is arrow function we can do it like this as if in same line return is implicit and if single argument then parenthesis can be omitted

Promises
.then(response=>response.json())
.then(data=>console.log(data))

//OR 
fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data));
//this is the most common way to fetch data from server using fetch API and promises

//u can also mention .catch() at the end to catch any error occurs in any of the above promises
fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));
// catch 1 hi bar likhna hai chahe kitne bhi promises ho, pehle wale mai bhi error aaya to wo catch ho jayega aur dusre wale mai bhi error aaya to wo bhi catch ho jayega

fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_f))
.catch(error=>console.log(error));
//to print specific data like temperature in fahrenheit
//output: 37.4



// console.log(Promises);






//what is promise?





// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// pending resolve reject
