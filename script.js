
const numbers = document.querySelectorAll('.calc div');
const operators = document.querySelectorAll('.calc button');

const display = document.querySelector('#display div');
const memo = document.querySelector('#display-memo div');


// function to check if used operator  
// const isOperator = str => {
//     operators.forEach(item => {
//         console.log(str.includes(item.innerHTML));
//         return str.includes(item.innerHTML)
//     })
// }



// display input numbers
numbers.forEach(item => {
    item.addEventListener('click', (e) => {

        if (isNaN(display.innerHTML) && memo.innerHTML != '0' ){
            display.innerHTML = item.innerHTML; 
            display.innerHTML = display.innerHTML
            memo.innerHTML += display.innerHTML; 
        }
        else {
            display.innerHTML += item.innerHTML; 
            display.innerHTML = +display.innerHTML
            memo.innerHTML = display.innerHTML; 
        }

    })
})


// display input operators
operators.forEach(item => {
    item.addEventListener('click', () => {
        if(item != clear && item != equals){
            display.innerHTML = item.innerHTML;
            memo.innerHTML += item.innerHTML
        }        
    })    
})


// clear input
document.getElementById('clear').addEventListener('click', () => {
    display.innerHTML = 0;
    memo.innerHTML = 0;
})



// when hitting 'equals'
const calculate = ([...args], [...operators]) => {
    // console.log([...args] + ' ' + [...operators]);
    if ([...operators][0] === '+'){
        return [...args][0] + [...args][1]
    }
}

