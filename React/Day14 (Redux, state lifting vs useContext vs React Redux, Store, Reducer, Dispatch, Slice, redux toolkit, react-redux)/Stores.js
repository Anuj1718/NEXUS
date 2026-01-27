import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"

const stores = configureStore({
    reducer:{
      slice1: slice1Reducer, //sliceReducer is the default export from Slicer1.js, it contains the reducer fn created by createSlice i.e Increment, Decrement, Reset
      // slice2: slice2Reducer (if any other slicer created)
    }
})

export default stores;

//format
// slice name: Reducer 

//u had doubt if slices had similar names then?
//u can check em here 
//now whenever a component dispatches an action, the store will check which slice it belongs to and call the respective reducer fn to update the state accordingly
//say component D dispatches Increment action, store will see that Increment action belongs to slice1, so it will call slice1Reducer to update the state
//we send slice names with the actions too behind the scenes so that store can identify which slice the action belongs to incase of multiple slices having same action names
//but generally we avoid having same action names in different slices to prevent confusion


//stores is nothing but global object which holds the state of entire application
//only one store is there in an application
//store is created using configureStore fn from @reduxjs/toolkit