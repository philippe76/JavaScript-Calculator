
const input_numbers = document.querySelectorAll('.calc div');
const display = document.querySelector('#display div');

input_numbers.forEach(item => {
    item.addEventListener('click', () => {
        console.log(display.innerHTML);
        display.innerHTML += item.innerHTML; 
        display.innerHTML = +display.innerHTML
    })
})
