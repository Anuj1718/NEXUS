import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";


function App(){

    return (
        
        <BrowserRouter>
        {/* i start routing here */}

        {/* put it inside nav tag so that it is visible on all pages and put it inside BrowserRouter, dusre files mai kahi bhi likh do khulle mai */}
        <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
        </nav>
            {/* behind the scenes, Link creates an anchor tag with href attribute set to the value of to prop  */}
        <Routes>
            {/* tell path and component to render */}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Details" element={<Details></Details>}>

            <Route index element={<Zero></Zero>}></Route> 
            {/* //default route, when no child route is matched, Zero component will be rendered i.e show this by default */}
            <Route path="Hello" element={<Hello></Hello>}></Route>
            {/* dont put / before Hello and Hi, because they are nested routes under Details route */}
            {/* / likhoge to root level se search karega */}
            <Route path="Hi" element={<Hi></Hi>}></Route>
            
            </Route>
        </Routes>


        {/* footer section */}
        </BrowserRouter>
        
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


//jo bhi u put in routes, ek hi chalega at a time based on path
//nav section is outside routes, so it will be visible on all pages
//When u click on Link, it will change the url without reloading the page and render the component based on path

//BrowserRouter is a component which enables routing in react application
//Routes is a component which is used to define multiple routes
//Route is a component which is used to define a single route
//path is used to define the path of the route
//element is used to define the component to be rendered for that route
//Link is used to navigate between different routes without reloading the whole page

//nested routing
//Details page has its own nested routes
//When u go to Details page, it will show Zero component by default
//If u go to /Details/Hello, it will show Hello component
//If u go to /Details/Hi, it will show Hi component
//index route is used to define the default route for a parent route
//it will be rendered when no child route is matched