import { useEffect, useState } from "react";

function Body(){

   const [Profile,setProfile] = useState([]);
   const [numberofProfile,setnumberofProfile] = useState("");
 
   async function generateProfile(count){
      const ran = Math.floor(1+Math.random()*10000); //Math.random() gives value between 0 to 1, so multiply by 10000 to get between 0 to 10000, add 1 to avoid 0, Math.floor to get integer value
      const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
      const data = await response.json();
      

      setProfile(data); //Profile is state variable as warna progile = data se karte toh re-render nhi hota to memory mai to aajata but UI update nhi hota
   }

   useEffect(()=>{
    generateProfile(10); //as openly likhna is not a good practice, ion want if parent changes to ye bhi change ho jaye
   },[]); //for just one time call

   //when we fetch data from api, to we put that function inside useEffect taaki baar baar na call ho
   

   return (
       <div className="but">
       <input type="text" className="inpu" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
      {/* gave value because i want react to control the input not the DOM */}
       <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>
      <div className="profiles">
       {
        Profile.map((value)=>{ 
           return  (<div key={value.id} className="cards">
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank">Profile</a>
            </div>) //single line mai by default return ho jata hai
            //output of this map: array of jsx elements like [<div></div>,<div></div>,<div></div>]
        })
       }
      </div>
      </div>
   )

}

export default Body;


// Try catch functionality add karo
// UseCallBack function add karne ki koshish
// Search button: Name ke basis: User profile exist, display kara dena