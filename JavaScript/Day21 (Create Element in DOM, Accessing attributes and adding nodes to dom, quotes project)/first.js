// 1: Create a Element in DOM

// <li>TS</li>

// Created an element
// function attach(content){
// const element = document.createElement('li');
// element.innerHTML = content;

// const element2 = document.createElement('li');
// element2.innerHTML = content+"V2.0";

// const parent = document.getElementById("root");
// // parent.appendChild(element);
// // parent.append(element,element2); //can append multiple elements //dono mai end mai hi append hoga
// parent.prepend(element); //start mai add hoga
// parent.prepend(element2); //dono mai start mai hi append hoga
// };

// attach("TS");
// attach("React");
// attach("Node");


// *****************TextNode*******************
//2: Create a Text Node 
//what is text node?
//It is a node that contains only text content
// space, line breaks are also considered as text nodes
//text node dont have any tags attached to it like ul, etc

// const element = document.createTextNode("Hello Coder Army");

// const parent = document.getElementById("root");
// parent.append(element);


// *****************Attribute Node*******************
//3: Create an Attribute Node
// what is attribute node?
// It is a node that contains attributes of an element eg id="root", class="mohan" for ul in index.html
// Attributes provide additional information about an element
// Attributes are always name-value pairs

// const element = document.createAttribute("id");
// element.value = "first";


// access to first list
// const curr_list = document.querySelector('li'); // first li
// curr_list.setAttributeNode(element); // set attribute node 
//check in inspect in browser to see id="first" added to first li
//can we see in vs code? no


// access to second list

// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element); //as parents.children is htmlcollection, access 2nd li using index 1



// access attribute of a element

// const element  = document.getElementById("root");
// // console.log(element.getAttribute("style")); // null as style attribute is not present
// console.log(element.getAttribute("id")); // root
// element.setAttribute("custom", "20"); // set custom attribute and value 20
// console.log(element.getAttribute("custom")); // 20
// element.setAttribute("class", "Roahn");
//if already class attribute is present it will update its value
// console.log(element.getAttribute("class")); // Roahn
// element.removeAttribute("custom");




// ***********Add nodes to the DOM************
//append,appenchild, prepend need parent access node to add child node

// const parent = document.getElementById("root");
// consider it like array, hence append, prepend, insertBefore, replaceChild methods are used

// const element = document.createElement('li');
// element.innerHTML = "TS";
// consider it like data


// parent.prepend(element); // add at the beginning
// parent.append(element); // add at the end

// const child2 = parent.children[1];
// // parent.insertBefore(element,child2); // insert element before child2

// parent.replaceChild(element,child2); // replace child2 with element



// const parent = document.getElementById("root");
// // parent.innerHTML += "<li>TS</li>";
//if u write just =, it will overwrite the existing content

// 4: insertAdjacentElement
// insertAdjacentElement method is used to insert a element at a specific position relative to another element
// positions: beforebegin, afterbegin, beforeend, afterend

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// // parent.insertAdjacentElement("beforebegin", element); //before the element
// // parent.insertAdjacentElement("afterbegin", element); // inside the element, at the beginning i.e before its first child
// // parent.insertAdjacentElement("beforeend", element); // inside the element, at the end i.e after its last child
// parent.insertAdjacentElement("afterend", element); // after the element



// Delete node or element

const element = document.querySelector('li'); //take access of first li
element.remove(); //remove the element from DOM

//removeChild method
// const parent = document.getElementById("root");
// const child = parent.children[0]; // first li
// parent.removeChild(child); // remove child from parent
// same as element.remove()
//difference: removeChild is called on parent node, remove is called on the element itself






