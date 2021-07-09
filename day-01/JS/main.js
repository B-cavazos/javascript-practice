const myButton = document.querySelector('.this-button');

myButton.style.color = 'green';
myButton.style.fontSize = '50px';

myButton.innerText = 'Changed';
myButton.innerHTML = 'different';

myButton.addEventListener('mouseout', function(){
    alert('hello')
});