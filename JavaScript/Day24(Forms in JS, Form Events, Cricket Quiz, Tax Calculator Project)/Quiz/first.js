// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
const original_answer = {
   q1: "Sachin Tendulkar",
   q2: "West Indies",
   q3: "Sachin Tendulkar",
   q4: "264",
   q5: "Muttiah Muralitharan"
}

//object as if we did using array and only submitted few ques even with correct ans, it would give result 0/5 are correct
// hence key value ki terms mai karo
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    
   event.preventDefault(); // warna submit karne pe console mai kuch nai dikhega as refresh hoga
   const data = new FormData(form);


//    const answer = Array.from(data.values());
   
//    let result = 0;
//    for(let i=0;i<answer.length;i++)
//    { if(answer[i]===original_answer[i])
//         result++;
//    }

   let result = 0

   for(let [key,value] of data.entries())
   {
    if(value===original_answer[key])
        result++;
   }

   //display result on screen
   const out = document.getElementById('out');
   out.innerText = `${result} out of 5 is correct`;

//    document.getElementById('container').append(out); //no need as we used innerText

//    form.reset(); // can put reset button

})


// what if you wanna make it such that there are 1000s que in backend, and u wanna select any 5 ques to display such that no one is repeated
//also what we wrote i cant do that logic in frontend, as inspect karke js file padh lega and he'll see the answers, hence when form is submitted, it goes to backend
//we will write js logic in backend