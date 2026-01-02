const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
  



const button = document.querySelector('button');
// Attaching event listener to button
// button.addEventListener('click', ()=>{
//   //paramater: action to be performed when the event occurs and a callback function
//   //events: click, dblclick, mousemove, mouseover, mouseout, keydown, keyup, load, unload, change, submit

//   const text = document.getElementById("quote");
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];
//the function which we wrote outside, we wrote it inside 

// })

// Using event object to get more info about the event
button.addEventListener('click', (event)=>{
  //paramater: action to be performed when the event occurs and a callback function
  //events: click, dblclick, mousemove, mouseover, mouseout, keydown, keyup, load, unload, change, submit
  console.log(event);
  console.log(event.target); // target element of event i.e button in this case
  console.log(event.type);
  console.log(event.clientX);
  console.log(event.clientY);
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];

})

//mouseover: when mouse pointer is over the element
//mouseout: when mouse pointer is out of the element
//mousemove: when mouse pointer is moved over the element (isme bohot saare events aate hai jab tak mouse move kar raha hai)

//keyboard action
//keydown : jaise button dabaunga, event turant trigger ho jayega
// keyup: i pressed button but until i release it, event wont be triggered
//document lagaya as pura web page document object ke andar hai
// document.addEventListener('keydown', ()=>{
  

//    const text = document.getElementById("quote");
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];
//   })

//Detecting specific key press

// document.addEventListener('keydown', (event)=>{
  
//   if(event.key==="Enter")
//   {
//     const text = document.getElementById("quote");
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];
//   }

//   console.log(event.target);
// })


//event object has every information, write "event" in callback function, some also write as "e"
// document.addEventListener('keydown', (event)=>{}) 

  // console.log(event); // gives all info about event
  // console.log(event.key); // gives which key is pressed
  // console.log(event.code); // gives code of key pressed
  // console.log(event.type); // gives type of event i.e click or dbclick or keydown etc
  // console.log(event.timestamp); // gives time at which event is triggered
  // console.log(event.clientX); // gives x coordinate of mouse pointer when event is triggered
  // console.log(event.clientY); // gives y coordinate of mouse pointer when event is triggered
  // console.log(event.altKey); // gives whether alt key is pressed or not
  // console.log(event.ctrlKey); // gives whether ctrl key is pressed or not
  // console.log(event.shiftKey); // gives whether shift key is pressed or not
  // console.log(event.repeat); // gives whether key is being held down (repeated) or not
  // console.log(event.target); // gives the target element of the event i.e where the event occurred i.e button, document etc i.e in this case button
  // see in console, u can see info about events or target element in console after triggering event

