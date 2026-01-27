import { useDispatch, useSelector } from "react-redux" //importing hooks from react-redux
import { Increment, Decrement, Reset } from "./Slicer1"; //import action creators from Slicer1.js


export default function Counting(){
     
    const count = useSelector((state)=> state.slice1.count); //to get count from slice1 in store
    //when u useSelector hook, the state parameter (can name anything) in its fn will have the structure shown in texters.js
    const dispatch = useDispatch(); //to dispatch actions to store

    console.log(Increment()); // output: {type: "slice1/Increment", payload: undefined}
    console.log(Decrement()); // output: {type: "slice1/Decrement", payload: undefined}
    console.log(Reset()); // output: {type: "slice1/Reset", payload: undefined}
    //when u dispatched Increment action to store, store will see that Increment action belongs to slice1, so it will call slice1Reducer to update the state
    //Increment, Decrement, Reset are action creators which return action objects
    //action object has type and payload
    //type is action name
    //payload is data sent along with action
    //here payload is undefined as we are not sending any data along with action
    //type will have slice name as prefix to avoid confusion in case of multiple slices having same action names

    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button> 
        {/* //dispatching Increment action to store on button click */}
        <button onClick={()=>dispatch(Decrement())}>Decrement</button> {/* //dispatching Decrement action to store on button click */}
        <button onClick={()=>dispatch(Reset())}>Reset</button> {/* //dispatching Reset action to store on button click */}
        </>
    )
}

//how do i read state from store?
//useSelector hook from react-redux
//to make react interact with redux store, we use react-redux package, hence useSelector and useDispatch both come from react-redux
//to create stores or slices or actions, we use @reduxjs/toolkit package
//useSelector hook helps us read state from store
//we pass a fn to useSelector
//it takes a fn as argument, that fn gets the entire state from store as argument
//we return the part of state we want from that fn
//in our case, state has slice1 inside it, and slice1 has count inside it
//so to get count, we do state.slice1.count