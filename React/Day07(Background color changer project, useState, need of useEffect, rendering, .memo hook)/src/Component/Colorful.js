import React , { useState,useEffect } from "react";

function Colorful({name}){
   
     const [color,setColor] = useState("black"); //black is initial value, it goes into  color variable, setColor is function to update color variable, it will call Colorful function again and re-render the component
        
        console.log(render);
        //if color is red and we click on red button again, it will render again but just once and if we do it again, it will not render again
        //this only happens with primitive data types like string, number, boolean
        //here primitive data type is string that we passed in setColor function i.e red, blue etc
        //if we use array or object, it will not render unless we change the reference
        //reason they gave is it increases code overhead 

        // document.body.style.backgroundColor = color; 
        // ion wanna write it like this cuz it will run twice on every render cuz of primitive data type

        //gpt: Same primitive value does NOT cause re-render; the extra render is due to StrictMode and side effects inside render (the document.body.style.backgroundColor assignment).

        // console.log(name);
        console.log("First");
        // useEffect(Callback Function, dependency)
        //useEffect (() =>{}, [ ])
    
        useEffect(()=>{
            console.log("UseEffect Executed");
            document.body.style.backgroundColor = color;
        },[color]);
        //now if we click on same color button again, it will not re-render the component as document.body.style.backgroundColor = color; is inside useEffect and useEffect only runs when dependency changes, it will not run twice on same color click
        
        console.log("Second")

    //what is useEffect?
    //useEffect is a hook that allows you to perform side effects in function components
    //side effects are operations that can affect other components and cannot be done during rendering
    //it is executed last after the render is committed to the screen
    //whatever callback function we pass inside useEffect will be executed at last 
    //examples of side effects: data fetching, subscriptions, manually changing the DOM in React components
    //useEffect takes two arguments: a callback function and a dependency array
    //the callback function contains the code for the side effect you want to perform
    //the dependency array specifies when the effect should be re-run
    //if the dependency array is empty, the effect runs only once after the initial render
    //if there are dependencies, the effect runs whenever any of the dependencies change

    //when dependency changes, the component re-renders and then useEffect runs after the render is committed to the screen
    //useEffect runs after render; its execution depends on the dependency array—on every render if omitted, once if empty, and only on dependency change if specified.
       
//     Correct behavior of useEffect
// 1️⃣ With dependency array
// useEffect(() => {
//   // runs only when `color` changes
// }, [color]);


// ✔ Runs after first render
// ✔ Runs again only when color changes

// 2️⃣ Empty dependency array
// useEffect(() => {
//   // runs only once
// }, []);


// ✔ Runs once after initial render
// ✔ Never runs again

// 3️⃣ ❗ NO dependency array
// useEffect(() => {
//   // runs after EVERY render
// });


// ✔ Runs after every render
// ✔ Initial render + all re-renders
       
        return (
            <>
              <h2>{name}</h2>
              <h1>Background Color Changer</h1>
              <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
              </div>
            </>
        )

}

export default React.memo(Colorful);