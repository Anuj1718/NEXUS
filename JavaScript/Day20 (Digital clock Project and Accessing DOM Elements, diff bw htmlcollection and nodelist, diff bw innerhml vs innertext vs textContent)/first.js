// Project: Digital Clock

// function timing(){
// const timer = document.getElementById('root');
// const now = new Date();
// const IndianTime = now.toLocaleTimeString();
// timer.innerHTML = IndianTime;
// } // calling the function every second else it will show only once and we gotta refresh the page to see the time changing

// setInterval(timing,1000); //setinterval needs a callback function and time in milliseconds
// // if we used while(true) loop here it will crash the browser as while loop runs infinitely and the browser will keep on executing the code and will not stop so the browser will crash


// const timer = document.getElementById('root'); //select it once outside the function as then it wont select style attributes if we write this line only inside function
// timer.style.fontSize = "200px";
// timer.style.display = "flex"; // to center using flexbox
// timer.style.height = "100vh"; // if we didnt write this height as 100 per of viewport height then it will not center vertically, it will only center horizontally cuz vertically it'd take the height of the content only
// timer.style.justifyContent = "center"; //align horizontally as by default flex direction is row
// timer.style.alignItems = "center"; // align vertically 

//project done
//hw : countdown timer left for summer olympics 21 july, 2028 (done in date)



const id = document.querySelector('#first'); // in getElementById we dont use # and in getelementbyclass we dont use .,  but in querySelector we use # for id and . for class
id.innerHTML = "Hello Money";

// const id2 = document.querySelector('.header2');
// id2.style.backgroundColor = "pink"; //even if there are multiple elements with same class name, querySelector selects only the first one matching element, it wont return an htmlcollection like getElementsByClassName

//console.log(document.querySelector('.header1')); // selects only the first element with class name header1


//querySelectorAll returns a nodelist of all matching elements, behaves like array, can use array methods but not all like map, etc, can convert to array using Array.from() method

//  How to iterate over Node list

// const obj = document.querySelectorAll('.header1')
// obj[0] and obj[1] // to access individual elements

// obj.length // gives number of elements with class name header1
//type obj in console to see its properties and methods

// Different ways to iterate over NodeList
//1:  obj.forEach((val)=>{
//     console.log(val)
//     })

// for of loop
// 2: for(let val of obj)
// console.log(val)

// 3: for(i=0;i<obj.length;i++)
//     obj[i].style.color = "red";

//  Convert NodeList into array
//  Array.from(obj)

// document.querySelector('ul li') // selects only the first li element inside ul, selects immediate children

// document.querySelectorAll('ul li') // selects all the li elements inside ul and returns a NodeList



// ****************************
//by tag name

//const obj = document.getElementsByTagName('h1');
//console.log(obj); // returns an HTMLCollection of all h1 elements

//nodelist vs htmlcollection
//nodelist can have text nodes and comment nodes also, htmlcollection only element nodes
//nodelist can use forEach method, htmlcollection cannot
//htmlcollection is live, nodelist is static

//if seen on console, htmlcollection doesnt have forEach method but nodelist has it and both have length property so we can use normal for loop on both
//can use for..of loop on both as both are iterable
//to use foreach on htmlcollection, convert it to array using Array.from() method
// getElementsByClassName, getElementsbyTagName returns an HTMLCollection
// querySelectorAll returns a NodeList

//let team = document.getElementsByTagName('li'); // selects all li elements and returns an HTMLCollection
//team[0].style.color = "red";

// How to iterate over it
// 1:for(let i=0;i<team.length;i++)
// team[i].style.color = "black"; as htmlcollection has length property

// 2: for(let val of team)
// console.log(val)  // works as htmlcollection is iterable

// 3: Array.from(team).forEach((val)=>{ //expects a callback function
// console.log(val);
//  }) // converting htmlcollection to array to use forEach method





// **********************
//accessing using relationships
// parentNode vs parentElement
// childNodes vs children
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// nextSibling vs nextElementSibling
// previousSibling vs previousElementSibling

// const list = document.querySelector('li');
//console.log(list); // selects first li element
// console.log(list.parentElement); // gives the parent element of the selected li element which is ul
// console.log(list.parentNode); // also gives the parent element of the selected li element which is ul
// both parentNode and parentElement give the same result here as the parent is an element node
// but if the parent was a text node then parentElement would return null whereas parentNode would return the text node


// const par = document.querySelector('ul'); // selects the ul element
// console.log(par); // selects ul element
// console.log(par.childNodes); // gives all child nodes including text nodes and comment nodes as a NodeList //output: NodeList(9) [text, li, text, li, text, li, text, li, text]
// index.html has spaces and new lines between li elements which are considered as text nodes, if we write all li elements in a single line without spaces and new lines between them then childNodes will give only element nodes. It was seen as text nodes in childNodes
//even if you add a comment inside ul, it will be shown in childNodes as a comment node
//this is the difference between childNodes and children or nodeList vs htmlCollection
//console.log(par.childNodes[0]); // gives the first child node which is a text node
// console.log(par.children); // gives only element child nodes as an HTMLCollection
// console.log(par.firstChild); // gives the first child node which can be a text node or comment node
// console.log(par.firstElementChild); // gives the first child element node
// console.log(par.lastChild); // gives the last child node which can be a text node or comment node
// console.log(par.lastElementChild); // gives the last child element node
// console.log(par.nextSibling); // gives the next sibling node which can be a text node or comment node
// console.log(par.nextElementSibling); // gives the next sibling element node //output: null as ul has no next sibling element
// console.log(par.previousSibling); // gives the previous sibling node which can be a text node or comment node
// console.log(par.previousElementSibling); // gives the previous sibling element node  
//what is sibling here? elements at the same level, having same parent


//difference between
// innerHTML
// innerText
// textContent


//innerHTML = gives the HTML content of the element as a string including tags
//innerText = gives the visible text content of the element as a string, ignores hidden text, ignores tags
//textContent = gives the text content of the element as a string including hidden text, ignores tags
// see screenshot in notes for better understanding
// const sample = document.getElementById('sample');
// console.log(sample.innerHTML); //output: <b>This is bold text</b> and this is normal text.  This text is hidden.
// console.log(sample.innerText); //output: This is bold text and this is normal text. (hidden text is ignored)
// console.log(sample.textContent); //output: This is bold text and this is normal text.  This text is hidden. (hidden text is included)