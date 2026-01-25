import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {greet as goa, meet as roa} from "./utils/dummy"


function App(){

  let [A , setA] = useState(arr); //A is state variable, setA is function to update A, arr ki value A mai daal di i.e initialiseng A with arr

  function sortArray(){
    A.sort((a,b)=> a.price-b.price); //increasing order
    setA([...A]);
        //if we did arr.sort((a,b)=> a.price-b.price); array to sort ho jayega in memory but ui mai change nahi dikhayega
    // console.log(A);
    //so we have to use useState to update the array in react as yahi array to bhejre hai ui ko (arr.map)
    //and wherever u changed state variable, calling set function will re render the component but setA(A); will not work
    //setA(A); this will not work because pehle bhi A tha ab bhi A hai, react sees that the reference of A is same as previous A bhale hi u changed data but it sees reference, object, array are stored in heap but ref is stored in stack, ref change hua hi nai to mai change kyu karu,for that counter eg) numbers are stored in stack memory, they are not stored by reference, so jaise hi count + 1 kara change ho gaya
    //isliye we need to make a clone, dusra array jiska reference alag ho
    //hence it will not re render the component
    //so we have to create a new array using spread operator

  }

  function priceAbove499(){
    const B = arr.filter((value)=>value.price>499); //not A.filter because A is state variable, we should not modify it directly, arr is original array
    setA(B); //filter returns a new array so no need to use spread operator here
  }
function sortbyDiscount(){
  A.sort((a,b)=>{
    //extracting numbers from string
    const discountA = parseInt(a.Offer.split("-")[0]); //20-40%Off => ["20","40%Off"] => take first element and convert to number
    const discountB = parseInt(b.Offer.split("-")[0]); //30-50%Off => ["30","50%Off"] => take first element and convert to number
    return discountA - discountB; //increasing order
  });
  setA([...A]);
}

  return(<>
    <Header/>
    <button onClick={sortArray}>Sort by Price</button>
    <button onClick={priceAbove499}>Price above 499</button>
    <button onClick={sortbyDiscount}>Sort by Discount</button>
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
         A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price}/>)   
        }
       
    </div>
    <Footer/>
    </>
  )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
