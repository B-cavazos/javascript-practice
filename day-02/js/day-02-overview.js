//Primitive Data Types
const strings = `yellow`;
let score = 40;
const boolean = false;

//Non-Primitive Data Types
const objects = {
    strings: strings,
    score: score,
    boolean: boolean,
    body:{
        style:{
            backgroundColor: 'pink',
            color:'black'
        }
    }
}

const array = [strings, score, boolean, objects]

console.log(objects);
console.log(array);

document.body.style.backgroundColor = 'pink';

const header1 = document.querySelector('h1');
header1.style.backgroundColor= strings;
header1.style.fontSize= score + 'px';

header1.innerText= strings;
