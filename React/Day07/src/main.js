import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Colorful from "./Component/Colorful";

// Background color changer
// color = black
// re-render: Call the function again
// setColor("red")
//  useEffect


// setCount(3)

function Main(){
   
    const [count,setCount] = useState(0);

   return (
    <>
      <div className="counter">
      <h1>Counter is: {count}</h1>
      <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>Increment</button>
      </div>
      
      <Colorful name={count}></Colorful>
   </>
   ) 

   // <Colorful></Colorful>
//  Colorful is jus a function call here so it will be called on every re-render of Main component
// it will be executed too
//Main is parent, if it runs, child will also run

}
//if i didnt use useeffect in Colorful component and put document.body.style.backgroundColor = color; directly in the function body of Colorful component, then here on every render of Main component (clicking on counter), Colorful component will also re-render and document.body.style.backgroundColor = color; will also be executed again and again even if color is same as before
//that is why we use useEffect in Colorful component to avoid unnecessary re-renders and side effects, now even if Main component re-renders Colorful component will not re-render unless color changes
//another thing: if i call parent component it will call child component also, but i dont want Colorful to be called on every re-render of Main component, i know useEffect helps in avoiding unnecessary side effects but still the Colorful component function will be called on every re-render of Main component and the rest of the code in Colorful component will also be executed on every re-render of Main component
//I dont want COlorful to re-render when Main re-renders, i.e to be executed again
//whenever parent re-renders child also re-renders
//to avoid this we use React.memo hook
//React.memo is used to memoize a component
//it will do shallow comparison of props
//if props are same it will not re-render the component
//if props are different it will re-render the component
//React.memo is a higher order component
//it takes a component as an argument and returns a new component
//the new component will only re-render if the props are different
//hence exporting Colorful component using React.memo
//child one is safe now, it will not re-render unless its props change
//firist time to render hoga hi warna page pe display hi nhi hoga
//uske bad agar parent re-render hota hai to child re-render nhi hoga jab tak uske props change na ho

//meaning of memoization: caching the result of a function call and returning the cached result when the same inputs occur again i.e avoiding re-computation for same inputs
//until and unless i pass a prop from Main to Colorful component and change it, Colorful component will not re-render now
//eg: name={count} is a prop being passed from Main to Colorful component
//when count changes only then Colorful component will re-render


ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);


//use react.memo only when u think lots of re-renders are happening and u want to avoid unnecessary re-renders of child component
//if few re-renders are happening then no need to use react.memo as it has its own performance cost of doing shallow comparison of props

{/* <Colorful name="funny" ></Colorful> */}
//name is a prop being passed to Colorful component
//as it is hardcoded here, it will never change
//so Colorful component will never re-render after first render
//unless we pass a different prop from parent to child
//agar funny ke jagah say honey ho gya to tabhi re-render hoga

//eg: <Colorful name={count}></Colorful> in Main component above
//here name prop will change whenever count changes
//so Colorful component will re-render whenever count changes