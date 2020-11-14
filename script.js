
const numbers = document.querySelectorAll('.calc div');
const operators = document.querySelectorAll('.calc button');

const display = document.querySelector('#display div');
const memo = document.querySelector('#display-memo div');


// display input numbers
numbers.forEach(item => {
    item.addEventListener('click', () => {
        display.innerHTML += item.innerHTML; 
        display.innerHTML = +display.innerHTML
        memo.innerHTML = display.innerHTML; 
    })
})

// clear input
document.getElementById('clear').addEventListener('click', () => {
    display.innerHTML = 0;
    memo.innerHTML = 0;
})

// display input operators
operators.forEach(item => {
    item.addEventListener('click', () => {
        if(item != clear && item != equals){
            display.innerHTML = 0;
            memo.innerHTML += item.innerHTML
        }
    })    
})



// when hitting 'equals'
const calculate = ([...args], [...operators]) => {
    // console.log([...args] + ' ' + [...operators]);
    if ([...operators][0] === '+'){
        return [...args][0] + [...args][1]
    }
}

