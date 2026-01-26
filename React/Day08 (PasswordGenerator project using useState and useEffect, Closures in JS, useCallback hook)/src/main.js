import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

// Password: ABDBHJDVB , setPassword("ABDBHJDVB")
// length:19 , setLength(19)
// numberChanged = false , setnumberChanged(true)
// charChanged = true , setcharChanged(true)

function PasswordGenerator(){

   const [Password, setPassword] = useState("");
   const [length ,setLength] = useState(10);
   const [numberChanged, setnumberChanged] = useState(false);
   const [charChanged, setcharChanged] = useState(false);
   

   const generatepassword = useCallback(()=>{ //useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(numberChanged)
         str+="0123456789"
      if(charChanged)
         str+="+-)(*&^%$#@!~`{}";

      let pass = ""
      
      for(let i=0;i<length;i++){
            pass+= str[Math.floor(Math.random()*str.length)] //Math.random() =>[0,1), Math.random()*str.length => [0,str.length), Math.floor() => removes decimal part, if length=10 then str.length=10, Math.random()*10 => [0,10) => possible values are 0,1,2,3,4,5,6,7,8,9
      }
      
      setPassword(pass);

   },[length,charChanged,numberChanged]); //when my length, charChanged, numberChanged changes only then this fn will be created again, else the older fn will be used
   



  useEffect(()=>{
     generatepassword();
  },[generatepassword])
// useEffect(()=>{
//      generatepassword();
//   },[length, numberChanged, charChanged]) //both are same as generatepassword is created again when any of these 3 changes and useEffect runs again when those 3 changes

   return(
      <>
        <h1>{Password}</h1>
        <div className="second">
         <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input> 
         {/* e is the event object and e.target.value is the new value of the range input */}
         <label>Length({length})</label>

         <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
         <label>Number</label>

         <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
         <label>Character</label>
        </div>
      </>
   )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);




//telegram: 
// import { useState } from "react";

// function PasswordGenerator() {
//   const [password, setPassword] = useState("");
//   const [length, setLength] = useState(10);
//   const [numberChanged, setNumberChanged] = useState(false);
//   const [charChanged, setCharChanged] = useState(false);

//   function generatepassword() {
//     let str =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     if (numberChanged) {
//       str += "0123456789";
//     }

//     if (charChanged) {
//       str += "+-)(*&^%$#@!~`{}";
//     }

//     let pass = "";

//     for (let i = 0; i < length; i++) {
//       pass += str[Math.floor(Math.random() * str.length)];
//     }

//     setPassword(pass);
//   }

// generatepassword();

//   return (
//     <>
//       <h1>Password Generator</h1>

//       <input type="text" value={password} readOnly />

//       <button onClick={generatepassword}>Generate</button>

//       <div className="second">
//         <input
//           type="range"
//           min={5}
//           max={50}
//           value={length}
//           onChange={(e) => setLength(e.target.value)}
//         />
//         <label>Length ({length})</label>

//         <br />

//         <input
//           type="checkbox"
//           defaultChecked={numberChanged}
//           onChange={() => setNumberChanged(!numberChanged)}
//         />
//         <label>Number</label>

//         <br />

//         <input
//           type="checkbox"
//           defaultChecked={charChanged}
//           onChange={() => setCharChanged(!charChanged)}
//         />
//         <label>Character</label>
//       </div>
//     </>
//   );
// }

// export default PasswordGenerator;


// we used generatepassword(); as it will show the intial pass on screen but will go in infinite loop cuz of   generatepassword();

// error: react limits the number of renders to prevent an infinite loop


// infinite renders as setPassword(pass) will cause PasswordGenerator to render again and then it will see generatepassword() fn, firse yahi loop chalega

// i want generatePassword to jus run once initially


// we use this


//   useEffect(()=>{
//      generatepassword();
//   },[ ])

// last mai exe hoga, but dependency array is empty, to bas ek bar render hoga initial render mai

// but now if we change length, pass doesnt change

// generatepassword can only be called by useEffect, so put lenght in dep array, as when length changes only then useEffect runs

// but fir number ya character pe click kru to pass change nai hora, to ek aur dependency do: numberChanged, characterChanged

// useEffect(()=>{
//      generatepassword();
//   },[length, numberChanged, charChanged])

//   dom manipulation, jo bhi function calls hai wo useEffect ko dedo
// parent wale ne koi change kara hai to re render nai hoga, this is power of useEffect