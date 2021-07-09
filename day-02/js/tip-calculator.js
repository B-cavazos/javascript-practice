document.title="Tip Calculator";

const h1 = document.querySelector('h1');
h1.innerText='Tip Calculator';


//ENTER TOTAL
const totalInput = document.createElement('input');
totalInput.type='number';
totalInput.placeholder='Enter Total'


//PERCENTAGE INPUT
const percentageInput = document.createElement('input');
percentageInput.type='number';
percentageInput.placeholder='Percent to Tip';


//BUTTON
const tipButton = document.createElement('button');
tipButton.innerText="Calculate"; 


//RENDER
const display = document.createElement('p');
display.innerText=""; 

//calculation
tipButton.addEventListener('click',function(){

    const total = percentageInput.value / 100* totalInput.value;
    console.log('$' + total);

    return display.innerText='$' + total; 

});


//ITEM APPEND
document.body.appendChild(totalInput);
document.body.appendChild(percentageInput);
document.body.appendChild(tipButton);
document.body.appendChild(display);


