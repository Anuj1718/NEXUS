import React from "react";
import ReactDOM from "react-dom/client";

//Header
//Body : Cards
//Footer

function Card(props){
    return (
        <div style = {{border: "2px solid black", width: "200px", margin: "auto"}}>
            <img src={props.img} height ="200px" width="200px" />
            <div style= {{textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <p>{props.offer}</p>
                <p>{props.cta}</p>
                <p>{props.link}</p>
            </div>
            
        </div>
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





function App(){
    return (
        //Header
        //Body : Cards
        <div style= {{display: "flex",  gap: "10px", flexWrap: "wrap"}}>
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

        {arr.map((value, index) => (
                <Card
                    key={index} 
                    cloth={value.cloth}
                    offer={value.offer}
                    img={value.img}
                    link={value.link}
                    cta={value.cta}
                />
                ))} 
        {/* dont use for loop here as it is a statement */}
        {/* uses arr.map which is an expression that returns a new array */}
        {/* if we dont provide key prop, it will give a warning in the console, because key prop is used by react to identify which items have changed, are added or removed. */}
        {/* we need to provide a unique key prop to each item in the list.  */}
        {/* filhaal index is used as key prop but it is not recommended as it can lead to performance issues and bugs in certain cases. */}
        {/* better to use a unique id from the data as key prop. */}
    


        </div>
        //Footer
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
