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

                // want to add a .
                if (item.innerHTML == '.') {
                                      
                    // a . somewhere before ? 
                    let period = /\./g;
                    if (memo.innerHTML.match(period) != null) {

                        // an operator before too ?
                        let operator = /\+|-|\/|\*/g;
                        let operatorArr = memo.innerHTML.match(operator);
                        if (operatorArr != null) {

                            // a . after this operator ?
                            let lastOperatorIndex = memo.innerHTML.lastIndexOf(operatorArr[operatorArr.length-1]);
                            let lastNumber = memo.innerHTML.slice(lastOperatorIndex+1);
                            if (lastNumber.match(period) != null ) {
                                display.innerHTML = display.innerHTML;
                                memo.innerHTML = memo.innerHTML;
                            }

                            // no . since the operator
                            else {
                                display.innerHTML += item.innerHTML; 
                                memo.innerHTML += item.innerHTML; 
                            }
                        }

                        // no operator before the .
                        else {
                            display.innerHTML = display.innerHTML;
                            memo.innerHTML = memo.innerHTML;
                        }

                    }

                    // no . somewhere before
                    else {
                        display.innerHTML += item.innerHTML; 
                        memo.innerHTML += item.innerHTML; 
                    }

                }

                // don't want to add a .
                else {
                    display.innerHTML += item.innerHTML; 
                    memo.innerHTML += item.innerHTML; 
                }

                     
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

            // just one sign
            let sign = memo.innerHTML[memo.innerHTML.search(/[^\w.]+/g, "_")];                     
            let signIndex = memo.innerHTML.indexOf(sign);

            let numb1 = memo.innerHTML.slice(0,signIndex); 
            let numb2 = memo.innerHTML.slice(signIndex+1); 

            // multiple signs
            let allSigns = memo.innerHTML.match(/[^\w.]+/g, "_")[0].split('');

            if (allSigns.length >1) {

                let lastSign = allSigns[allSigns.length-1];
                let lastSignIndex = memo.innerHTML.lastIndexOf(lastSign);
                numb2 = memo.innerHTML.slice(lastSignIndex+1)

                let result = eval(numb1 + lastSign + numb2);
                display.innerHTML = result%1 != 0 ? result.toFixed(4) : result;
            }

            else {
                let result = eval(numb1 + sign + numb2);
                display.innerHTML = result%1 != 0 ? result.toFixed(4) : result;
            }

        }    
    })    
})



