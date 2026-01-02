const button = document.querySelector('button');


// Add event listener to the button
button.addEventListener('click', ()=>{
//paramater: action to be performed when the event occurs and a callback function

    // Read the data
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value); // input1.value takes string value so we convert it to number

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    if(isNaN(number1)||isNaN(number2))
        return;

    // Output the result

    const result = number1+number2;
    const re = document.getElementById('result');
    re.textContent = "Result: "+result;
})


// BMI Calculator
// Dahej Calculator(Male)
// Alimony Calculator(Female)