
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



// display numbers
numbers.forEach(item => {
    item.addEventListener('click', (e) => {

        if (!Number.isInteger(+display.innerHTML) && memo.innerHTML != '0' ){
            display.innerHTML = item.innerHTML; 
            // display.innerHTML = display.innerHTML
            memo.innerHTML += item.innerHTML; 
        }
        else if (Number.isInteger(+display.innerHTML) && memo.innerHTML != '0' ) {
            display.innerHTML += item.innerHTML; 
            memo.innerHTML += item.innerHTML; 
        }
        else {
            display.innerHTML += item.innerHTML; 
            display.innerHTML = +display.innerHTML
            memo.innerHTML = display.innerHTML; 
        }

    })
})


// display operators [ AC / x - + = ]
operators.forEach(item => {
    item.addEventListener('click', () => {
        if(item != clear && item != equals){
            display.innerHTML = item.innerHTML;
            memo.innerHTML += item.innerHTML
        } 
        // clear input
        else if (item === clear) {
            display.innerHTML = 0;
            memo.innerHTML = 0;
        }       
    })    
})

/**
 * when hit equals
 * get number 1
 * get operator 1
 * get number 2
 * get result 1
 * 
 * then same thing but incremented : 
 * get number 2
 * get operator 2
 * get number 3
 * get result 2
 * mix result 1 and 2 
 * 
 * and so on...
*/


// when hitting 'equals'
const calculate = ([...args], [...operators]) => {
    // console.log([...args] + ' ' + [...operators]);
    if ([...operators][0] === '+'){
        return [...args][0] + [...args][1]
    }
}

