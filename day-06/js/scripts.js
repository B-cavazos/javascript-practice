//DAILY CHALLENGE


//IN CLASS 

    //cat-fact API
const base_url1 = 'https://cat-fact.herokuapp.com'; //starting point

const endpoint1 = '/facts'

fetch(base_url1 + endpoint1) //fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => {

        return res.json();

    }).then((facts)=>{

        console.log(facts);
        facts.forEach( function(catFactObject) {
            const li = document.createElement('li');
            document.body.appendChild(li)

            li.innerText = catFactObject.text;
        })

    });

    //pokemon API
    const base_url2 = 'https://pokeapi.co/api/v2/pokemon/';
    const endpoint2 = 'electabuzz';
    
    fetch(base_url2 + endpoint2)
        .then(res => {
    
            return res.json();
    
        }).then((facts)=>{
    
            console.log(facts);

            const h1 = document.createElement('h1');
            h1.innerText = facts.name;
            document.body.appendChild(h1);

            const img = document.createElement('img');
            document.body.appendChild(img);
            img.src = facts.sprites.front_default;
            img.width = '200';
    
        });


//TAKE HOME
// Create a new pen in codepen
// Make a request to this Cat Facts API
// Get a random cat fact
// Display the cat fact in an alert

fetch('https://cat-fact.herokuapp.com/facts')
        .then(res => console.log("facts: ", res))