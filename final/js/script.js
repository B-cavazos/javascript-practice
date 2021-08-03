//define variables

const eightBall = document.getElementById('ball-img'); 
const invite = document.querySelector("h2");
const form = document.querySelector('form');  
const question = document.querySelector('question');
const button = document.querySelector('button');  
let answers = [
    "./img/magic8ball_1.png",
    "./img/magic8ball_2.png",
    "./img/magic8ball_4.png",
    "./img/magic8ball_5.png",
    "./img/magic8ball_6.png",
    "./img/magic8ball_7.png",
    "./img/magic8ball_8.png",
    "./img/magic8ball_9.png",
    "./img/magic8ball_10.png",
    "./img/magic8ball_11.png",
    "./img/magic8ball_12.png",
    "./img/magic8ball_13.png",
    "./img/magic8ball_14.png",
    "./img/magic8ball_15.png",
    "./img/magic8ball_16.png",
    "./img/magic8ball_17.png",
    "./img/magic8ball_18.png",
    "./img/magic8ball_19png",
];

//onclick
    //replace 8-ball with random answer
    //replace input with text
    //update button to Try again

button.addEventListener('click', function() {
    invite.innerText="The 8-Ball has spoken.";
    form.style.display = "none";
    eightBall.src=answers[Math.floor(Math.random()*19)];
    invite.classList.add('color-change')

});

console.log(form.input.innerText);