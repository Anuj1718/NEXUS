import React from "react";
import ReactDOM from "react-dom/client";

//Header
//Body : Cards
//Footer

function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt={props.cloth} />
            <div>
                <h2>{props.cloth}</h2>
                <p>{props.offer}</p>
                <p>{props.cta}</p>
            </div>
        </div>
    )
}

function Header(){
  return (
    <div className="heading">
  <img className="images" src="https://logos-world.net/wp-content/uploads/2021/02/New-Myntra-Logo.png" height="50px" width="100px" />

  <div className="options">
    <button className="but">Men</button>
    <button className="but">Women</button>
    <button className="but">Kids</button>
    <button className="but">Home & Living</button>
    <button className="but">Beauty</button>
    <button className="but">Studio</button>

    <input className="searchbar" type="text" placeholder="Search for products, brands and more" />

    <div className="Profile">
      <button className="pro">Profile</button>
      <button className="pro">Wishlist</button>
      <button className="pro">Bag</button>
      </div>
      </div>
    </div>
  )
}

function Footer(){

  return (
    <>
    <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JANUARY/8/qNxGIxpW_381ee4c85bc84320855964d7bf8e27bd.jpg" height="300px" width="100%" alt="footerimage" />
    <div className="footer">
      <p>© 2024 Myntra. All rights reserved.</p>
    </div>
    </>
  )
}


  const arr = [
  {
    cloth: "T-Shirts",
    offer: "40% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/tshirts",
    cta: "Shop Now",
  },
  {
    cloth: "Jeans",
    offer: "35% Off",
    img: "https://thalasiknitfab.com/cdn/shop/files/ANIMEOVERSIZEDTSHIRT_6e28c0e6-b2a8-4932-a59b-4cc93ec85245_490x@2x.progressive.png.jpg?v=1734612522",
    link: "/shop/jeans",
    cta: "Shop Now",
  },
  {
    cloth: "Pants",
    offer: "30% Off",
    img: "https://baccabucci.com/cdn/shop/files/14_15a36780-6940-4da5-acf5-7b502aa8b540.jpg?v=1738828698&width=550",
    link: "/shop/pants",
    cta: "Shop Now",
  },
  {
    cloth: "Hoodies",
    offer: "50% Off",
    img: "https://images-cdn.ubuy.co.in/6657d15ab026a41f2d24983a-no-anime-no-life-anime-t-shirt.jpg",
    link: "/shop/hoodies",
    cta: "Shop Now",
  },
  {
    cloth: "Jackets",
    offer: "45% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/jackets",
    cta: "Shop Now",
  },
  {
    cloth: "Sweatshirts",
    offer: "25% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/sweatshirts",
    cta: "Shop Now",
  },
  {
    cloth: "Shorts",
    offer: "20% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/shorts",
    cta: "Shop Now",
  },
  {
    cloth: "Track Pants",
    offer: "30% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/trackpants",
    cta: "Shop Now",
  },
  {
    cloth: "Shirts",
    offer: "40% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/shirts",
    cta: "Shop Now",
  },
  {
    cloth: "Ethnic Wear",
    offer: "60% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/ethnic",
    cta: "Shop Now",
  },
   {
    cloth: "Ethnic Wear",
    offer: "60% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/ethnic",
    cta: "Shop Now",
  },
   {
    cloth: "Ethnic Wear",
    offer: "60% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/ethnic",
    cta: "Shop Now",
  },
   {
    cloth: "Ethnic Wear",
    offer: "60% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/ethnic",
    cta: "Shop Now",
  },
   {
    cloth: "Ethnic Wear",
    offer: "60% Off",
    img: "https://i.etsystatic.com/35817258/r/il/5d21d1/5265231115/il_fullxfull.5265231115_8m6p.jpg",
    link: "/shop/ethnic",
    cta: "Shop Now",
  },
  
];



//Main App Component, will contain Header, Body(Cards), Footer

function App(){
    return (
      <>
        <Header/>
        
        <div className="Middle">
          {/* <Card cloth="T-Shirts" offer="40% Off" />
        <Card cloth="Jeans" offer="35% Off" />
        <Card cloth="Pants" offer="30% Off" />
        <Card cloth="Hoodies" offer="50% Off" />
        <Card cloth="Jackets" offer="45% Off" />
        <Card cloth="Sweatshirts" offer="25% Off" />
        <Card cloth="Shorts" offer="20% Off" />
        <Card cloth="Track Pants" offer="30% Off" />
        <Card cloth="Shirts" offer="40% Off" />
        <Card cloth="Ethnic Wear" offer="60% Off" /> */}
        {/* wont do this way, majdoori hogyi, array se karte hain ye kaam */}

        {arr.map((value, index) => ( // not { after => as Implicit return (JSX wrapped in ()), if we use { }, we need to use return statement explicitly.
                <Card
                    key={index} 
                    cloth={value.cloth}
                    offer={value.offer}
                    img={value.img}
                    link={value.link}
                    cta={value.cta}
                />
                ))}  
                {/* result will be [<card />, <card />, <card />  ] */}
        {/* dont use for loop here as it is a statement */}
        {/* uses arr.map which is an expression that returns a new array */}
        {/* each child in a list should have a unique "key" prop  */}
        {/* if we dont provide key prop, it will give a warning in the console, because key prop is used by react to identify which items have changed, are added or removed. */}
        {/* we need to provide a unique key prop to each item in the list.  */}
        {/* filhaal index is used as key prop but it is not recommended as it can lead to performance issues and bugs in certain cases. */}
        {/* better to use a unique id from the data as key prop. */}
        {/* {arr.map(item => (
        <Card
          key={item.id}
          {...item}
        />
      ))}
The only real risk is key={index}. If this list becomes dynamic (filters, sorting, updates), switch to a stable unique key immediately.
     */}
{/* 
     🔑 What is actually happening (no fluff)
1️⃣ arr is data
[{...}, {...}]


React cannot render this directly.

2️⃣ map converts data → JSX
arr.map(item => <Card />)


This produces:

[
  <Card />,
  <Card />
]

3️⃣ JSX {} injects the result
{ /* array of JSX */ }

{/* 
React can render arrays of JSX. */}


        </div>

        <Footer/> 
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);



//DId this in Day 5
// this is not a good habit to write all components in a single file, better to create separate files for each component and import them where needed.
// this is what we call methods or components reusability.
// put Card, Header, Footer in separate javascsript files and import them here.
//can keep main App component here in this file.

//make a separate folder and keep the component files there for better project structure.
//firstly, what's src
//src is the source folder where all the source code of the project is kept.
//in src, keep all the js files (myntra.js), can keep index.html here as well but keep outside for better structure.
//in src, can also keep assets folder to keep images, css files, etc.
//then make a components folder inside src to keep all the component files.
//then make a styles folder inside src to keep all the css files.
//then make an assets folder inside src to keep all the images and other assets.
//this way, the project structure will be better and more organized.
//no such hard and fast rules, just a good practice to follow for better project structure and maintainability.
//not necessary that u name the component file with the same name as the component name, but it is a good practice to do so for better readability and maintainability.
//e.g. Card component in Card.js file, Header component in Header.js file, Footer component in Footer.js file.
//u gotta export the component from the component file and import it in the main file where u want to use it.
//can use default export or named export for exporting the component.
//default export is used when there is only one component in the file.
//named export is used when there are multiple components in the file.
//while importing, for default export, can use any name to import the component.
//for named export, need to use the same name as the component name while importing, and need to use curly braces while importing named exports.

//put dummy data in utils folder or data folder as a separate js file and import it here to use it.
//this way, the project structure will be better and more organized.


//cant use export default in front of let/const/var/function
//only one export default allowed per file
//for normal export, u gotta use curly braces while importing


//use of react:
//it does dom manipulation efficiently using virtual dom
//it updates only the changed parts of the dom instead of reloading the entire dom
//this makes the app faster and more efficient
//and u can focus on ui and building the app rather than worrying about dom manipulation
//react follows component based architecture
//u can break the ui into small reusable components
//this makes the code more manageable and easier to debug