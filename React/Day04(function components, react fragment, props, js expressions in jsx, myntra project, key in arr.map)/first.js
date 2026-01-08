import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element1);

function greet(){
    return <h2>Good Morning Coder Army!</h2>;
}

root.render(greet());

//the previous render will be replaced by the latest render. why?
//because react only allows one render at a time for a particular root.
//to render multiple elements, we can wrap them in a single parent element like a div or a React Fragment.

const element2 = (
    <div>
        <h1>Hello Coder Army!</h1>
        <h2>Good Morning Coder Army!</h2>
    </div>
);
root.render(element2);

//or using React Fragment
const element3 = (
    <React.Fragment>
        <h1>Hello Coder Army1!</h1>
        <h2>Good Morning Coder Army1!</h2>
    </React.Fragment>
);
root.render(element3);

function greet1(name){
    return <h2>Good Morning {name}!</h2>;
}

root.render(greet1("Coder Army"));

//in jsx, u can use javascript expressions inside curly braces {} but not statements
//statements are those that dont return a value like if, for, while or object etc.
//expressions are those that return a value like 2+2, a function that returns a value etc.
//result produce hona chahiye like string, number, boolean, array, object etc.


let obj={
    name: "Anuj",
    age: 50
}

function greet2(){
    return <h2>Good Morning {obj.name}!</h2>;
}
//if we put obj directly inside curly braces, it will give an error because obj is an object and objects are statements not expressions.
//we can access the properties of the object using dot notation or destructuring.
root.render(greet2());

const arr = [1,2,3,"Rohit",4,5];

function greet3(){
    return <h2>Good Morning {arr}!</h2>;
}
root.render(greet3());
//arrays are expressions, so we can put them directly inside curly braces.
//when we put an array inside curly braces, it will be converted to a string by joining all the elements with a comma.
//but if we put an object inside an array, it will give an error because object is a statement not an expression.
//array should contain only expressions.

//other ways to call function inside jsx

// function greet4(){
//     return <h2>Good Morning Coder Army!</h2>;
// }
// const element4 = <greet4 />;
// root.render(element4);
//this will give an error because greet4 is not a valid react component.
//react components should start with a capital letter.
//this is rule of jsx not react.
//reason being, react treats lowercase tag names as html tags(h1, div) and uppercase tag names as react components.
//correct way

function Greet4(){
    return <h2>Good Morning Coder Army!</h2>;
}
const element4 = <Greet4 />; //function call using jsx syntax
root.render(element4);

//how will i pass arguments to this component?
function Greet5(props){ //props is an object that contains all the attributes passed to the component.
    return <h2>Good Morning {props.name}, he is {props.age} years old !</h2>;
}   
const element5 = <Greet5 name="Anuj" age="22" />; //they copied html attribute syntax
root.render(element5);

//props kuch ni hai, aap jo arguments pass karoge, wo sab props object me chala jayega.
//like this
// const element5 = <Greet5 name="Anuj" age="22" city="Delhi" />;
//then props will be {name: "Anuj", age: "22", city: "Delhi"}

//you can also use destructuring to get the values from props object
function Greet6({name, age}){
    return <h2>Good Morning {name}, he is {age} years old !</h2>;
}
const element6 = <Greet6 name="Anuj" age="22" />;
root.render(element6);