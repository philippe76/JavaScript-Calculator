// VARIABLES DECLARATION
const numbers = document.querySelectorAll('.calc div');
const operators = document.querySelectorAll('.calc button');

const display = document.querySelector('#display div');
const memo = document.querySelector('#display-memo div');


// INPUT NUMBER
numbers.forEach(item => {
    item.addEventListener('click', (e) => {
            
        // FIRST INPUT
        if (display.innerHTML == '0' && memo.innerHTML == '0') {

            // input = .
            if (item.innerHTML == '.') {
                console.log(display.innerHTML);
                console.log('HERE');
                display.innerHTML += item.innerHTML; 
                memo.innerHTML = display.innerHTML; 
            }
            else {
                display.innerHTML += item.innerHTML; 
                display.innerHTML = +display.innerHTML
                memo.innerHTML = display.innerHTML; 
            }
        }

        // NOT FIRST INPUT
        else {
            // previous input = number
            if (!Number.isNaN(+memo.innerHTML[memo.innerHTML.length-1])) {
                
                display.innerHTML += item.innerHTML; 
                memo.innerHTML += item.innerHTML; 

            }   
            // previous input != number         
            else {
                // input and previous input = .
                if (item.innerHTML == '.' && memo.innerHTML[memo.innerHTML.length-1] == '.') {
                    display.innerHTML = display.innerHTML; 
                    memo.innerHTML = memo.innerHTML;
                } 
                // previous input = .    
                else if (memo.innerHTML[memo.innerHTML.length-1] == '.') {
                    display.innerHTML += item.innerHTML; 
                    memo.innerHTML += item.innerHTML; 
                }
                else {                  
                    display.innerHTML = item.innerHTML; 
                    memo.innerHTML += item.innerHTML; 
                }
            }
        }

    })
})


// INPUT OPERATOR [ AC / x - + = ]
operators.forEach(item => {
    
    item.addEventListener('click', () => {

        if (item != clear && item != equals){
            display.innerHTML = item.innerHTML;
            memo.innerHTML += item.innerHTML
        } 

        else if (item === clear) {
            display.innerHTML = 0;
            memo.innerHTML = 0;
        }  
        else if (item === equals) {
            let sign = memo.innerHTML[memo.innerHTML.search(/\D/)];
            let signIndex = memo.innerHTML.search(/\D/);
            let numb1 = memo.innerHTML.slice(0,signIndex); 
            let numb2 = memo.innerHTML.slice(signIndex+1); 
            let result = eval(numb1 + sign + numb2);
            display.innerHTML = result%1 != 0 ? result.toFixed(4) : result;
        }    
    })    
})



