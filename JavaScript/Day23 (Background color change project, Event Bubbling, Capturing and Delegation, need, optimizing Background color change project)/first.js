// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');

//take body access
// const body = document.body;
//or 
// document.querySelector('body');
//or 
// const body = document.getElementsByTagName('body')[0];

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// })

//OR 

// const buttons = document.querySelectorAll('button');
// const body = document.body;
// // console.log(buttons);

// buttons.forEach((button)=>{ //nodeList par forEach loop chlta h
   
//     button.addEventListener('click', ()=>{
//         body.style.backgroundColor = button.id;
//     })

// })


//one problem with above code is agr humne 100 button add krne h toh 100 event listener lgane pdenge jo ki performance k liye acha nhi h
// i.e there is optimization issue, at the end loop to unhi mai convert karega
//So instead of adding event listener to each button we can add event listener to their common parent i.e. div with id root
//This is called Event Bubbling

//what is event bubbling?
//When an event is triggered on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
//So here when we click on button first button's click event will be triggered then div's click event will be triggered and so on till body and html
//eg div (grandparent) ke andar div (parent) ke andar div (child), say i put an event listener on the outermost div, then if i click on innermost div first innermost div ka event trigger hoga phir uske parent ka and so on till outermost div
// if i put an event listener on the innermost div and click on it then only innermost div ka event trigger hoga, parent ka nhi hoga
//if i put event listener on all of them and click on innermost div then first innermost div ka event trigger hoga phir parent ka and so on till outermost div
//This is called event bubbling because the event bubbles up from the innermost element to the outermost element
//if i put event listener on all of them and click on outermost div then only outermost div ka event trigger hoga, innermost and parent ka nhi hoga
//So event bubbling is useful when we want to handle events on multiple child elements using a single event listener on their parent element

// grandparent.addEventListener("click", () => {
//   console.log("GP clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });
// ⚠️ Default behavior = bubbling phase only (capture: false).

//output:
//Child clicked
// Parent clicked
// GP clicked


// Why this happens (event bubbling only)

// Since no capturing is enabled:

// Event starts at the target (child)

// Executes child’s handler

// Bubbles up to parent

// Then bubbles up to grandparent

// This is pure event bubbling.

//what is event capturing?
//Event capturing is the opposite of event bubbling. In event capturing, the event starts from the outermost element and goes down to the innermost element.
//So here when we click on button first div's click event will be triggered then button's click event will be triggered
//This is called event capturing because the event captures from the outermost element to the innermost element
//To enable event capturing we need to pass true or { capture: true } as the third argument to addEventListener method
// Without true or { capture: true }, capturing does not happen.
//in the div example if we want to enable capturing on grandparent div then we need to write:

// grandparent.addEventListener("click", handler, true);
// // or
// grandparent.addEventListener("click", handler, { capture: true });

// Now when we click on child div the order of execution will be:

// GP clicked
// Parent clicked
// Child clicked

// Because now event starts at grandparent (capturing phase)

// Then goes to parent (still capturing phase)

// Then reaches child (target phase)

// Executes child’s handler

// So capturing happens only when we explicitly enable it.

// Summary of event flow phases:

// Final takeaway (clean mental model)

// Default JS events = bubbling

// Capturing NEVER happens implicitly

// Execution order depends on registration, not diagram arrows
// If this were an interview question, the key insight they’re testing is:

// “Capturing doesn’t exist unless you explicitly enable it.”


//event delegation
//ill put only one event listener on their parent i.e root div and then check which button was clicked using event.target
const root = document.getElementById('root');


root.addEventListener('click',(event)=>{
    //console.log(event.target); // jaha par event start hua
    // console.log(event.target.tagName) // to check which element was clicked
    if(event.target.tagName === 'BUTTON') // to make sure only button clicks are handled, cuz jo h1 mai likha hai uspe click kara to background  color black ho jara, so doing if else wil reject h1 clicks
    document.body.style.backgroundColor = event.target.id; //as ive put colors in id of buttons
})




// event.stopPropagation 
// stopPropagation method stops the event from bubbling up to parent elements
//ie if we click on child div then only child div ka event trigger hoga parent and grandparent ka nhi hoga
//use case of stopPropagation is when we have nested elements and we want to handle events on innermost element only
//eg say we have a button inside a div and we have event listener on both button and div
//when we click on button both button and div ka event trigger hoga but if we want to handle event on button only then we can use stopPropagation method
//so that when we click on button only button ka event trigger hoga div ka nhi hoga