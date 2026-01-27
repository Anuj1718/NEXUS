import { createSlice } from "@reduxjs/toolkit";
//toolkit provides createSlice fn to create slice of state
//whenever u create smth, u get it from toolkit
const reactslicer = createSlice({ //object
    name: "slice1",
    initialState: {count:0}, //i put initial state as object
    reducers: { //fn as to how would i change state
        Increment: (state)=> {state.count = state.count+1}, //can name anything instead of state, state is just a parameter, usme latest state milega, state = {count:0}
        Decrement: (state) => {state.count = state.count-1},
        Reset: (state) => {state.count=0}
    }
})

//now gotta create store in Stores.js and provide this slice reducer to it

export const {Increment, Decrement, Reset} = reactslicer.actions //to export action creators
//reactslicer.actions has action creators for all actions defined in reducers
//action creators are fns which return action objects
//action object has type and payload
//type is action name
//payload is data sent along with action
//here our action creators are Increment, Decrement, Reset
//we export em to use in components to dispatch actions to store

export default reactslicer.reducer;
//dont ask why not reactslicer.reducers
//because reducers is the object inside createSlice where we defined fns to change state
//reducer is the fn created by createSlice which takes care of state changes based on action dispatched

