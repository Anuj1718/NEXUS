import { useState } from "react";
import Decrement from "./Decrement"

export default function Increment({counts,setCounts}){ // receiving count and setCount as props from App component

    //if i pass props on children component then i can use parent's (App's) state var and its updater function on children component
    //if i make state var on parent component then only that component and its children can access that state var and its updater function
    //what if i make state var and updater fn on children component (Increment) and not parent component, then only that component can access that state var and its updater function
    //if there is another child component (Decrement) of parent component App i.e sibling of Increment, then it cannot access that state var and updater function of Increment component
    //cant we import Decrement component inside Increment component and use Decrement component inside Increment component to share state var and its updater function ? yes we can do that but that will create two Decrement, one inside Increment and one inside App component, which is not desired 
    //it will be considered child component of Increment component and not sibling component of Increment component

    //is there any way to share state var and its updater function between sibling components (Increment and Decrement) ? yes, by lifting the state up to their common parent component (App)
    //state lifting means moving the state var and its updater function to the common parent component so that both sibling components can access that state var and its updater function via props
    //move em to the most common ancestor component
   

    return (
        <>
        <h2>Child Counter is {counts}</h2>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
        </>
    )
}