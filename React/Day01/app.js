//how to create element in react

const element = React.createElement("h1",{},"Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root'));
//this will work and render the h1 element to the root div

// but ReactDOM.render is deprecated in React 18
// so we will use the new way to render the element
//createRoot is the new method to create a root container
// element : 50 card pade hue hai

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is
Reactroot.render(element);
//this is the new way to render the element in react 18


//till react 17, if we clicked on a button it would re render the entire app i.e agar ek button pe click kiya to jab tak pura data render nai ho jata mai dusre button par click nai kar sakta tha, response nai karta tha kyuki wo single threaded hai
//but in react 18, it will only re render the component which is changed
//this is called concurrent rendering
//it improves the performance of the app

//ReactDom.render is still available in react 18 for backward compatibility but it is not recommended to use it
//say element mai 50 card pade hue hai ReactDOm.render mai wo 50 cards ka control element pe hai
//jabki createRoot mai control react pe hai islye if we click on a button it will only re render the component which is changed not the entire app
//this is the main difference between ReactDOM.render and createRoot

//this is not multi threading, react is still single threaded
//but it uses time slicing to split the rendering work into smaller chunks and spread it over multiple frames
//this is called concurrent rendering
//it improves the performance of the app

//what is cdn
//cdn is content delivery network
//it is a network of servers that are distributed across the globe
//it is used to deliver content to users based on their geographic location
//cdn is used to deliver static content like images, css, js files etc
//cdn is used to reduce the latency and improve the performance of the app
//cdn is used to reduce the load on the origin server
//cdn is used to improve the availability of the app

// uve a laptop and yt has a server in usa
// when u access yt the request goes to the nearest server which is in usa
// if the server in usa is down then the request goes to the next nearest server which is in europe
// this is how cdn works
// request goes to the nearest server based on geographic location and if it has that video then it serves the video from that server
// if it does not have that video then it goes to the origin server which is in usa and fetches the video and serves it to the user
// this is how cdn works
// now that video is cached in the nearest server for future requests
// so next time when u access that video the request goes to the nearest server and serves the video from there
// this is how cdn works
//or if someone else also has the same video request from the same geographic location then the request goes to the nearest server and serves the video from there
// this is how cdn works

//eg cloudflare, akamai, amazon cloudfront etc are some popular cdn providers

//static data: data which does not change frequently like images, css, js files etc
//dynamic data: data which changes frequently like user data, product data etc
//static data is served from cdn
//dynamic data is served from origin server

//zomato website
//static data: images of food, restaurant etc
//dynamic data: user data, restaurant data etc
//static data is served from cdn
//dynamic data is served from origin server

//youtube website
//static data: images, css, js files etc
//dynamic data: video data like likes, user data etc
//static data is served from cdn
//dynamic data is served from origin server