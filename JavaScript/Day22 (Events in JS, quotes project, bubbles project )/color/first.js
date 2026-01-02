// document.body.addEventListener('click', function (e) { // couldve used directly document but to be specific we use body
//     const circle = document.createElement('div');
//     circle.className = 'circle';
// OR // circle.setAttribute('class', 'circle');
// OR // circle.classList.add('circle');
    
//     const x = e.clientX;
//     const y = e.clientY;
//     circle.style.left = `${x - 25}px`; //$ { } is used to embed expressions inside string literals, here we are subtracting 25 to center the circle at click position  
// // as we made circle position absolute, so it will be relative to body as position: absolute in CSS removes an element from the normal document flow and positions it relative to its nearest positioned ancestor (an ancestor with position ≠ static). If no such ancestor exists, it is positioned relative to the initial containing block (viewport).
//     circle.style.top = `${y - 25}px`;   // subtracting 25 to center the circle at click position
//subtracted 25 as circle has width and height of 50px
   
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
//     circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  

//     const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
//     circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  
//     document.body.appendChild(circle);
  

//     setTimeout(() => {
//       circle.remove();
//     }, 5000); // Remove circle after 5 seconds as many divs will get appende in body, setTimeout takes 2 parameters: callback function and time in ms
//   });


//coder army version
document.body.addEventListener("click", (event)=>{
  
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.textContent="Hi";
  
  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x-25}px`
  circle.style.top= `${y-25}px`


  const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
  circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
  document.body.appendChild(circle);

  setTimeout(()=>{
    circle.remove();
  } ,5000)
})
