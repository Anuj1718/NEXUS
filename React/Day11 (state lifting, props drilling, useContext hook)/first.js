import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"
import Second from "./second";
import GlobalContext from "./Global";
import Fifth from "./fifth";



function App(){

  const [count,setCount] = useState(10);
  console.log(GlobalContext);

  return (
    <>
   <Fifth></Fifth>
    <GlobalContext.Provider value={{count,setCount}}> 
    <h1>Hello Coder Army {count}</h1>
    <Second />
    </GlobalContext.Provider>
    </>
  )
}


// First create a Create Context using createContext method
// Then Wrap the component tree inside the Provider component of that context
// Provide some data to the Provider component using value prop
// Descendent can access that data 
// Consume the context using useContext hook





ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


