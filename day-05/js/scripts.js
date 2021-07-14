//DAILY CHALLENGE
// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function

function evenOrOdd(a){
    if(a % 2 === 1){
        console.log(`number ${a} is odd`);
    }else if (a % 2 === 0){
        console.log(`number ${a} is even`);
    }else{
        console.log(`seems like ${a} is not a number`);
    }
}

evenOrOdd(0);
evenOrOdd(7);
evenOrOdd(8);
evenOrOdd('string time');




//IN CLASS PROJECT
//creating a restaurant menu
const menu = [];

function createHeader(){
    //functional scope
    const header = document.createElement('h1');
    document.body.appendChild(header);
    header.innerText = 'Restaurant';

}
createHeader();

function getFridgeItem(item){
    console.log('go to fridge and get ' + item);
    return 'item';
}

function getPantryItem(item){
    console.log('go to pantry and get ' + item);
    return 'item';
}

menu.push(
    {
        name:'PBJ Sandwich',
        price: 20.99,
        description: 'creamy sea salt peanut butter with strawberry arugula jam',
        steps: function(){
            getPantryItem('bread');
            getPantryItem('peanut butter');
            getFridgeItem('jam');
        }
    },
    {
        name:'Grilled Cheese Sandwich.',
        price: 19.99,
        description: 'That Grilled Cheese Stephen makes.',
        steps: function(){
            getPantryItem('bread');
            getPantryItem('cheese');
            getFridgeItem('butter or mayo');
        }
    }
);

function createMenu(){
    const listElement = document.createElement('ol');
    document.body.appendChild(listElement);

    menu.forEach((foodItem)=>{
        const li = document.createElement('li');
        listElement.appendChild(li);
        li.innerHTML = `${foodItem.name} - $${foodItem.price} - ${foodItem.description}`;

        li.addEventListener('click', ()=>{
            foodItem.steps();
        })
    })
}

createMenu();




//TAKE HOME
// Validate the password using the following rules:
// Must be 6-20 characters long
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected

function password(pass){

    if( !typeof string){

        console.log('Password must be a string');

    }else if (parseInt(pass[0])){

            console.log('Password must start with a letter');

    }else if (pass.length < 5 ||  pass.length > 20){

            console.log('Password must be between 6 and 20 characters long');

    }else if(pass[0] = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=",",","\"",":",";","<",">","?","/","|","|",".", ]){
        console.log('Password can not start with a symbol');
        
    } else {
        console.log('Password accepted!');
    }

};

let pw= "a7";
password(pw);