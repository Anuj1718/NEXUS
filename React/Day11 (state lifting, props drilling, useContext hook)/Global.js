import { createContext } from "react";

const GlobalContext =  createContext("Rohit"); //can name variable anything
// can put any default value inside createContext(), be it string, number, boolean, object, array, function etc., can keep it empty also
//this default value will be accessible to any component which consumes this context but is not wrapped inside the Provider component of this context

export default GlobalContext;