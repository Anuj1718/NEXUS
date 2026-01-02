const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// event bubbling and event capturing


//by default event bubbling is enabled in javascript

// addEventListener(event, callback, capture);

// capture = false  --> event bubbling
// capture = true   --> event capturing

// Event Bubbling (default) --> false

//In bubbling phase event starts from the target element and goes up to the outermost element 
// // When we click on child div the order of execution will be:   
// Child clicked
// Parent clicked
// GP clicked
//verify this in console

//in capturing phase event starts from the outermost element and goes down to the target element
// // When we click on child div the order of execution will be:   
// GP clicked
// Parent clicked
// Child clicked
//verify this in console

// remember this by capture hua koi to dadaji royega pehle phir papa phir mai as merko padhai nai karni hogi


child.addEventListener('click', (event)=>{
    console.log("child Clicked"); 
    // event.stopPropagation();
    // console.log(event.target); // jaha se event start hua
    // console.log(event.currentTarget); // jaha par event listener laga h, jo trigger hua h usi ka reference dega, kis child ya parent ya grandparent ne event trigger kiya h
},false)



parent.addEventListener('click', (event)=>{
    console.log("parent Clicked");
    event.stopPropagation();
    // console.log(event.target);
    // console.log(event.currentTarget); // jo trigger hua h usi ka reference dega
},false)

grandParent.addEventListener('click', (event)=>{
    console.log("grandParent Clicked");
    // console.log(event.currentTarget);
},false)


//if some are true and some are false then true will be executed first
// i.e say grandparent is true and parent and child are false and we click on child
// then the order of execution will be:
// GP clicked
// Parent clicked
// Child clicked

//if grandparent and child are true and parent is false and we click on child
// then the order of execution will be:
// GP clicked
// Child clicked
// Parent clicked

//if parent is true and grandparent and child are false and we click on child
// then the order of execution will be:
// Parent clicked
// Child clicked
// GP clicked

// Use cases of event bubbling


// event delegation
// say we have multiple buttons and we want to add event listener to all of them
// instead of adding event listener to each button we can add event listener to their parent element
// and then check which button was clicked using event.target
// this is called event delegation

// const buttons = document.querySelectorAll('button');
// const body = document.body;
// // console.log(buttons);

// buttons.forEach((button)=>{ //nodeList par forEach loop chlta h
   
//     button.addEventListener('click', ()=>{
//         body.style.backgroundColor = button.id;
//     })

// })   