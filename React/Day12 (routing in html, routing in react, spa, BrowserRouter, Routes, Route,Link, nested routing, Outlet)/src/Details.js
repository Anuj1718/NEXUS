import { Outlet,Link } from "react-router";

export default function Details(){

    return(
        <>
        <nav>
            <Link to="/Details">Details</Link>
            <Link to="Hello">Hello</Link>
            <Link to="Hi">Hi</Link>
        </nav>
        {/* no need to put inside BrowserRouter, because this component is already rendered inside BrowserRouter in first.js  */}

       
        <Outlet></Outlet>  
        {/* yaha matched child route component render hoga  */}
        {/* cant write like this
        <Hello></Hello>
        <Hi></Hi> */}
        {/* as fir dono components ek sath render ho jayenge, but we want only one component to be rendered based on the nested route */}
        </>
    )
}

//Outlet is a placeholder component which will render the matched child route component here
//Link is used to navigate between nested routes
//When u click on Link with to="Hello", it will navigate to /Details/Hello and render Hello component in place of Outlet
//When u click on Link with to="Hi", it will navigate to /Details/Hi and render Hi component in place of Outlet
//When u click on Link with to="/Details", it will navigate to /Details and render Zero component in place of Outlet (default route)