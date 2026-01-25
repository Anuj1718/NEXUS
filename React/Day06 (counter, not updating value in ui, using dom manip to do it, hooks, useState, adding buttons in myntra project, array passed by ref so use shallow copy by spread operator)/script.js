import React, {useState} from "react"
import ReactDOM from 'react-dom/client'

//gonna make an increment and decrement counter
//when we click on increment button count should increase by 1
//when we click on decrement button count should decrease by 1
//when we installed vite, it also showed counter example using useState hook

function Counter(){
    //let count = 0;
    let [count, setCount] = useState(0); //initial value of count is 0

    function incrementnumber(){
        setCount(count+1); // this means count = count + 1 and then SetCount(count)
        // console.log("count value is: " , count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }

    function decrementnumber(){
        setCount(count-1);
        // console.log("count value is: " , count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }

    return (
        <div className="first">
       <h1>Count is: {count}</h1>
       <button onClick={incrementnumber}>Increment {count}</button>
       {/* event listener: onclick with a callback function */}
       <button onClick={decrementnumber}>Decrement {count}</button>
       </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)

//it was printing in console the count but not updating in UI (as bas variable change ho rha tha, dom manipulate nahi ho rha tha)
//because react doesn't re render the component when we change the variable value directly
//hence, we used .innerText to update the DOM directly (which is not the react way)
//but then again if we use the {count} elsewhere like in the button text, it won't update there, and we would have to manually update it using DOM manipulation
// this is not the react way of doing things
//react says u wont manipulate the DOM directly, leave it to me
//we let react optimize the DOM updates for us

//in vanilla js jab ham value change karte the to directly DOM ko update karte the
//but in react we don't directly manipulate the DOM
//we change the state using useState hook and react takes care of updating the DOM

//react way is to use useState hook
//we have to use useState hook to make react aware of the changes in variable value
//so that it can re render the component and update the UI

//usestate must have been exported without default from react
//hence we import it using {}

//useState is a hook that allows us to have state variables in functional components
//it returns an array with two elements: the current state value and a function to update it
//we use array destructuring to assign names to these two elements

//when we call the setCount function, react knows that the state has changed
//and it re renders the component, updating the UI with the new state value


// useState bolta initialise mai karunga count ko
// useState returns an array, first variable aur 2nd ek function (can name anything, preferrably set + var name), aur ye jo 0 hai wo jayega is variable count ke andar, aur bolta jab bhi ye variable count change, bas mujhe call kar dena aur jo new value aayi hai count ki use mere andar dal dena i.e updated value dalna


// ab jaha bhi count use kara hoga waha sab jagah update kar dega


// when u increment, useState(count) again calls counter fn and the count var inside the array becomes 1 and sab jagah count = 1 hoga


// useState wahi new value lega jo setCount bhejega


// cant put useState in conditional statements

//every time the state changes, the entire component function is re executed
//react then compares the new virtual DOM with the previous one and updates only the parts that have changed in the actual DOM



//value change hori yane state change hori
//jab state change hoti hai to component re render hota hai
//pure function re execute hota hai
//react virtual dom me naya virtual dom banata hai
//phir previous virtual dom se compare karta hai
//jo bhi changes hote hai unhi changes ko actual dom me update karta hai

//what is a hook?
//a hook is a special function that lets you "hook into" react features
//like state and lifecycle methods from functional components
//before hooks, only class components could have state and lifecycle methods
//but with hooks, we can use these features in functional components as well

//rules of hooks
//1. hooks can only be called at the top level of a component or custom hook
//2. hooks can only be called from react functional components or custom hooks
//3. don't call hooks inside loops, conditions, or nested functions
//following these rules ensures that hooks are called in the same order on every render
//which is crucial for react to correctly preserve the state of hooks between renders

//what is useState?
//useState is a hook that allows you to add state to functional components
//it takes the initial state as an argument and returns an array with two elements
//the first element is the current state value
//the second element is a function that lets you update the state
//when you call this function, react knows that the state has changed
//and it re renders the component with the new state value

//jo bhi setcount se bhejoge wo usestate value ke andar jayegi

//now ion need to manipulate count at DOM

//can name it anything instead of count and setCount
//but by convention we name the updater function as "set" + state variable name
//like for a state variable named "age", the updater function would be "setAge"

//why useState is used?
//1. to add state to functional components
//2. to manage and update state in a way that react can track changes
//3. to trigger re renders of components when state changes

//example of useState with different data types
//1. string
//2. number
//3. boolean
//4. array
//5. object

//example 1: string
/*
function ExampleString(){
    let [name, setName] = useState("John");

    function updateName(){
        setName("Doe");
    }

    return (
        <div>
            <h1>Name is: {name}</h1>
            <button onClick={updateName}>Update Name</button>
        </div>
    )
}
*/

//example 2: boolean
/*
function ExampleBoolean(){
    let [isVisible, setIsVisible] = useState(true);

    function toggleVisibility(){
        setIsVisible(!isVisible);
    }

    return (
        <div>
            {isVisible && <h1>This is visible</h1>}
            <button onClick={toggleVisibility}>Toggle Visibility</button>
        </div>
    )
}
*/

//example 3: array
/*
function ExampleArray(){
    let [items, setItems] = useState(["Item 1", "Item 2"]);

    function addItem(){
        setItems([...items, `Item ${items.length + 1}`]);
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}
*/

//example 4: object
/*
function ExampleObject(){
    let [person, setPerson] = useState({name: "John", age: 30});

    function updateAge(){
        setPerson({...person, age: person.age + 1});
    }

    return (
        <div>
            <h1>{person.name} is {person.age} years old</h1>
            <button onClick={updateAge}>Increase Age</button>
        </div>
    )
}
*/  

//jab count change hoga to pura component re render hoga i.e pura function counter fir se chalega
//pure function fir se execute hoga
//react virtual dom me naya virtual dom banayega
//phir previous virtual dom se compare karega
//jo bhi changes honge unhi changes ko actual dom me update karega