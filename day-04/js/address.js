const inputs = document.querySelectorAll('input');
console.log(inputs);

const streetNumberInput = inputs[0];
const streetNameInput = inputs[1];
const cityInput = inputs[2];
const select = document.querySelector('select');

streetNumberInput.addEventListener('change', function(){ //if, AND
    if(this.value && parseInt(this.value)){
        console.log('characters are in street number and theyre numbers!')
    }
});

streetNameInput.addEventListener('change', function(){
    console.log(this.value)
    (this.value && streetNumberInput.value) ? console.log('you typed some street name') : console.log('no number here'); //ternary, AND
});

cityInput.addEventListener('change', function(){ // if else, NOT
    console.log(this.value)
    if(this.value){
        console.log('characters are in the city')
    }else if(streetNameInput.value !== 'abc'){
        console.log('make it abc')
    }
});

select.addEventListener('change', function(){ //switch

    switch(this.value){

        case 'ca':
            console.log('The Golden state');
            break;

        case 'nv':
            console.log('Las Vegas is here');     
            break;

        case 'wa':
            console.log('The rainy State');            
            break;

        case 'or':
            console.log('The Beaver State');            
            break;
    }
});


//validation
