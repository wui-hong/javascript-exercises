// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
let second = document.createElement('p');
second.textContent='Hey I"m red!';
second.style.color='red';
let third = document.createElement('h3');
third.textContent='I"m a blue h3!';
third.style.color='blue';
let fourth = document.createElement('div');
fourth.style.border='1px solid black';
fourth.style.backgroundColor='pink';
let innerh1 = document.createElement('h1');
innerh1.textContent="I'm in a div";
let innerp = document.createElement('p');
innerp.textContent="ME TOO!";
fourth.appendChild(innerh1);
fourth.appendChild(innerp);
container.appendChild(second);
container.appendChild(third);
container.appendChild(fourth);
const btn = document.querySelector('#btn');
//btn.onclick = () => alert('Hello World');
btn.addEventListener('click', (event) => {
    event.target.style.background = 'blue';
});

