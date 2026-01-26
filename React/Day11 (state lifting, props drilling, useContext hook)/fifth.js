import GlobalContext from "./Global"
import { useContext } from "react"

export default function Fifth(){
    
    const data = useContext(GlobalContext);

    return(
        <>Mein hu Don {data}</> //Mein hu Don Rohit as fifth.js is not wrapped inside Provider component of GlobalContext, see first.js
    )
}