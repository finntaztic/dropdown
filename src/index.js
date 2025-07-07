import "./styles.css";



const option = document.querySelectorAll('option');
// option.style.visibility = 'hidden';


const select = document.querySelector('select');
// select.style.visibility = 'hidden';

select.addEventListener('mouseover', () => {
    console.log('hello');
    console.log(option);

})


