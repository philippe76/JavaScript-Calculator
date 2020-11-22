// VARIABLES DECLARATION
const numbers = document.querySelectorAll('.calc div');
const operators = document.querySelectorAll('.calc button');

const display = document.querySelector('#display div');
const memo = document.querySelector('#display-memo div');



// INPUT NUMBER
numbers.forEach(item => {

    // functions for displaying 
    const addToBoth = () => {
        display.innerHTML += item.innerHTML; 
        memo.innerHTML += item.innerHTML; 
    }
    const noChange = () => {
        display.innerHTML = display.innerHTML;
        memo.innerHTML = memo.innerHTML;
    }

    item.addEventListener('click', (e) => {
            
        // FIRST INPUT
        if (display.innerHTML == '0' && memo.innerHTML == '0') {

            // input == .
            if (item.innerHTML == '.') {
                addToBoth()
            }
            else {
                display.innerHTML += item.innerHTML; 
                display.innerHTML = +display.innerHTML;
                memo.innerHTML = display.innerHTML; 
            }
        }

        // NOT FIRST INPUT
        else {
            // previous input == number
            if (!Number.isNaN(+memo.innerHTML[memo.innerHTML.length-1])) {

                // want to add a .
                if (item.innerHTML == '.') {                                    
                    let period = /\./g;
                    
                    // a . somewhere before 
                    if (memo.innerHTML.match(period) != null) {                        
                        let operator = /\+|-|\/|\*/g;
                        let operatorArr = memo.innerHTML.match(operator);

                        // an operator before 
                        if (operatorArr != null) {                           
                            let lastOperatorIndex = memo.innerHTML.lastIndexOf(operatorArr[operatorArr.length-1]);
                            let lastNumber = memo.innerHTML.slice(lastOperatorIndex+1);
                            
                             // a . since this operator 
                            if (lastNumber.match(period) != null ) {
                                noChange()
                            }
                            // no . since the operator
                            else {
                                addToBoth()
                            }
                        }
                        // no operator before the .
                        else {
                            noChange()
                        }
                    }
                    // no . somewhere before
                    else {
                        addToBoth()
                    }                  
                }                
                // don't want to add a .
                else {
                    addToBoth()
                }                     
            }

            // previous input != number         
            else {
                // input and previous input == .
                if (item.innerHTML == '.' && memo.innerHTML[memo.innerHTML.length-1] == '.') {
                    noChange()
                } 
                // previous input == .    
                else if (memo.innerHTML[memo.innerHTML.length-1] == '.') {
                    addToBoth()
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

            // already = before in memo
            if (memo.innerHTML.includes('=')) {
                let indexOfEqual = memo.innerHTML.indexOf('=');
                let result = memo.innerHTML.slice(indexOfEqual+1);
                memo.innerHTML = result + item.innerHTML;
                display.innerHTML = item.innerHTML;
            }
            else {
                display.innerHTML = item.innerHTML;
                memo.innerHTML += item.innerHTML   
            }       
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

                // last sign == -
                if (allSigns[allSigns.length-1] == '-') {
                    lastSign = allSigns[allSigns.length-2];
                    numb2 = memo.innerHTML.slice(lastSignIndex)
                }

                let result = eval(numb1 + lastSign + numb2);
                display.innerHTML = result%1 != 0 ? result.toFixed(4) : result;
                memo.innerHTML += `=${ result%1 != 0 ? result.toFixed(4) : result}`; 
            }

            else {
                let result = eval(numb1 + sign + numb2);
                display.innerHTML = result%1 != 0 ? result.toFixed(4) : result;
                memo.innerHTML += `=${ result%1 != 0 ? result.toFixed(4) : result}`; 
            }

        }    
    })    
})



// GET FOOTER CURRENT DATE
document.getElementById('date').innerHTML = new Date().getFullYear()
                
                
                
                
