import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add";



function App(){ 
//      Use state when:

// Data changes over time

// Change should reflect in UI

// Change is triggered by user / event / async action

// language satisfies all three.
    const [language, setLanguage] = useState(["TS","JS","Java"])

    function handleClick(){
        setLanguage(["C++",...language]); //gotta take a new array otherwise it won't re-render because of reference type. it means the old array and new array will have same reference in memory, hence react won't re-render.
        //hence we create a new array with spread operator
    }

// virtual dom is lightweight representation of real dom in memory
// real dom is heavy and manipulating it is slow
// react uses virtual dom to optimize updates to real dom
// when state or props change, react creates a new virtual dom and compares it with the previous one (diffing)
// it then calculates the minimum number of changes needed to update the real dom (reconciliation)
// this makes updates faster and more efficient.
    const VDom = <h1>Hello Coder Army</h1>

    const RDom = document.createElement('h1');
    RDom.innerText = "Hello Coder Army";


    console.log(VDom);
    console.dir(RDom);



    

    return(
        <>
        <div style={{display:"flex", justifyContent:"center", gap:"20px" , marginTop:"50px"}}>
            {
                language.map((value,index)=> <Add key={value} value={value}></Add>)
            }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={handleClick}>Add language</button>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


