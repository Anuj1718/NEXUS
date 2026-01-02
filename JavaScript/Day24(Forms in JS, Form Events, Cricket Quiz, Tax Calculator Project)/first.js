const form = document.querySelector('form');


//form.addEventListener('click', (event)=>{
//    console.log(event.target.value); //gives the value we write in the placeholder
//}) //when we click anywhere in the form, it will log the value of the target element where we clicked. 
//it gives 2 PointerEvents - mousedown and mouseup meaning when we click, it first triggers mousedown and then mouseup.


//i dont need to all eventlisteners for username, lastname and age separately. I can add eventlistener to the form itself and it will work for all the input fields inside the form due to event bubbling.


//What triggers input event

// Fires every time the value changes.

// Each keystroke, paste, delete, drag-drop, autofill.

// form.addEventListener('input', (event)=>{ 
//     console.log(event.target.value);
// })

// What triggers change event

// Fires after the user finishes editing.

// For text inputs: when focus leaves the field and value changed.

// For checkbox/select: fires immediately on selection.
// form.addEventListener('change', (event)=>{
//         console.log(event.target.value);
// })


// What triggers focusin

// When an element receives focus

// Mouse click, Tab, or programmatic focus

// Important:

// Bubbles (unlike focus)
// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// })

// What triggers focusout

// When an element loses focus

// Important

// Bubbles (unlike blur)

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })


// What triggers dbclick

// Two rapid clicks on the same element
// form.addEventListener('dblclick', (event)=>{
//     // console.log(event.target.value);
//     console.log("double click")
// })

// What triggers reset event

// Clicking <button type="reset">

// Calling form.reset()
// form.addEventListener('reset', (event)=>{
//     // console.log(event.target.value);
//     console.log("form Reset");


// })


// When submit event fires

// Clicking submit button

// Pressing Enter in an input

// Programmatic submit

// Bubbling

// ✅ Bubbles

// Critical

// event.preventDefault();


// Stops page reload.


// tick preserve log in console settings to see past logs which get erased
// submit event submit forms and refres hoga, reset event reset the forms, refresh ni hoga 
// to    <button type="reset">reset</button> instead of    <button type="submit">Submit</button> in index.html to see reset event working
//can add submit and reset button in form

//use case
//how do i get access to the value submitted in form?
form.addEventListener('submit',(event)=>{

    event.preventDefault(); //  to prevent page/form refresh, to prevent going back to original form
   
    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("second");
    // console.log(second.value);

    // const third = document.getElementById("third");
    // console.log(third.value);
    
    //what if i have 100 input fields and i wanna print em all, i wont write 100 lines like this, instead we use FormData object, it is like api
    //FormData part is backend part
    const data = new FormData(form);
    console.log(data)
    
    for(let [key,value] of data.entries()) //destructured array
        console.log(key, value);

    // console.log(Array.from(data.keys())); //as iterator aya tha so we use either for of loop or convert to array
    // console.log(Array.from(data.values()));

    // keys values



    // const result = document.getElementById('result');
    // result.innerText = `${first.value} ${second.value} is a good Boy`;

    // document.body.append(result);



})
