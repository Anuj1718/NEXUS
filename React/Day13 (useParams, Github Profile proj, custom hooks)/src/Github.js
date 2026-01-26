import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github(){
     
    const {name} = useParams(); // Extract the 'name' parameter from the URL as name is the route parameter defined in the route path /Github/:name
    const [Profile, setProfile] = useState(null);
    
    async function fetchuser() {
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }

    useEffect(()=>{
      fetchuser();
    },[])


    return(
        <>
        <h1>My GitHub Profile</h1>
        {/* Display the user data */}
        <div>
            <img src={Profile?.avatar_url}></img> 
            {/* ? means if Profile is not null or undefined then access avatar_url property */}
            {/* Optional chaining operator (?.) is used to safely access the avatar_url property of the Profile object. 
            It prevents runtime errors in case Profile is null or undefined. */}
            {/* initally Profile is null before the data is fetched from the API as useEffect runs at last  */}
            <h2>{Profile?.login}</h2>
        </div>
        </>
    )
}