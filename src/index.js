import "./styles.css";

const option = document.querySelector('ul');
console.log(option);
option.style.visibility = 'hidden'


const hover = document.querySelector('.hover');
console.log(hover);

hover.addEventListener('mouseover', () => {
    console.log('hello');
    console.log(option);
    option.style.visibility = 'visible';
})


