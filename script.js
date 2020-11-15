
const numbers = document.querySelectorAll('.calc div');
const operators = document.querySelectorAll('.calc button');

const display = document.querySelector('#display div');
const memo = document.querySelector('#display-memo div');


// display numbers
numbers.forEach(item => {
    item.addEventListener('click', (e) => {

        // console.log(display.innerHTML);
        // console.log(!Number.isInteger(+display.innerHTML));

        if (Number.isNaN(+display.innerHTML) && memo.innerHTML != '0' ){
            display.innerHTML = item.innerHTML; 
            memo.innerHTML += item.innerHTML; 
        }
        else if (!Number.isNaN(+display.innerHTML) && memo.innerHTML != '0' ) {
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
        else if (item === equals) {
            console.log(memo.innerHTML);
            let sign = memo.innerHTML[memo.innerHTML.search(/\D/)];
            let signIndex = memo.innerHTML.search(/\D/);
            let numb1 = memo.innerHTML.slice(0,signIndex); 
            let numb2 = memo.innerHTML.slice(signIndex+1); 
            let result = eval(numb1 + sign + numb2);
            display.innerHTML = result;
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
// const calculate = ([...args], [...operators]) => {
//     if ([...operators][0] === '+'){
//         return [...args][0] + [...args][1]
//     }
// }

