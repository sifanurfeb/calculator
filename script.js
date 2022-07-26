const calculator = {
    displayNumber  : '0',
    operator : null,
    firstNumber : null,
    isWaitForSecondNumber:false,
};

function updateDisplay(){
    document.querySelector('#displayNumber').innerHTML = calculator.displayNumber;
}
function clearCalculator(){
    calculator.displayNumber = '0',
    calculator.operator = null,
    calculator.firstNumber = null, 
    calculator.isWaitForSecondNumber = false;
}
function inputDigit(digit){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }
    else{
    calculator.displayNumber += digit;
    
}
}
const buttons  = document.querySelectorAll('.button');

for ( const button of buttons){
    button.addEventListener('click' , function(event){
        const target = event.target;
        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }
        if(target.classList.contains('operator')){
            handleOperator(target.innerHTML);
            return;
        }
        inputDigit(target.innerHTML);
        updateDisplay();
    });
    function inverseNumber(){
        if(calculator.displayNumber === '0'){
            return;
        }
        calculator.displayNumber = calculator.displayNumber * -1;
    }
    function handleOperator(operator){
        if(!calculator.isWaitForSecondNumber){
            calculator.operator = operator;
            calculator.isWaitForSecondNumber = true;
            calculator.firstNumber = calculator.displayNumber;

            calculator.displayNumber = '0';
        }
        else{
            alert('Operator sudah ditetapkan');
        }
    }
    function performCalculation(){
        if(calculator.firstNumber == null || calculator.operator == null){
            alert('Anda belum menetapkan operator');
            return;
        }
        let result = 0;
        if(calculator.operator === '+'){
            result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
            }else if (calculator.operator === '-'){
                result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
            }
            else if(calculator.operator === '*'){
                result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
            }
            else {
                result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
            }
    calculator.displayNumber = result;
}
}