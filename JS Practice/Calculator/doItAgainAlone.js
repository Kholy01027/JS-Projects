//Our App Class
class Calculator{
    constructor(currentOperandTextElement, previousOperandTextElement, oldOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.oldOperandTextElement = oldOperandTextElement;
        this.clear()
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.oldOperand = [];
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if(!this.currentOperand && this.previousOperand > 0){
            this.currentOperand = this.previousOperand;
            this.previousOperand = '';
            this.operation = ''
        }
    }
    addOperation(operation){
        if(!this.currentOperand) return;
        if(this.previousOperand){
            this.compute();
        }
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.operation = operation;
    }
    addNumber(number){
        //don't repeat the '.' dot.
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += number;
    }
    compute(){
        let compution ;
        let curr = +this.currentOperand;
        let prev= +this.previousOperand;
        switch(this.operation){
            case '÷':
                compution = prev / curr;
                break;
            case '*':
                compution = prev * curr;
                break;
            case '+':
                compution = prev + curr;
                break;
            case '-':
                compution = prev - curr;
                break;
            default:
                return;
        }
        this.currentOperand = compution;
        this.operation = undefined;
        this.previousOperand = ''
    }

    NumberFormate(number){
        const numberString = number.toString();
        const integerDigits = parseFloat(numberString.split('.')[0]);
        const decimalDigits = numberString.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else { return integerDisplay}
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.NumberFormate(this.currentOperand);
        if(this.operation){
            this.previousOperandTextElement.innerText = `${this.NumberFormate(this.previousOperand)} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText = this.NumberFormate(this.previousOperand);
        }
    }
    oldOperandUpdate(){
        this.oldOperandTextElement.innerText = `${this.currentOperand}`;
        localStorage.setItem("oldOperand", JSON.stringify(this.currentOperand))
        if(localStorage.getItem('oldOperand')){
            this.oldOperandTextElement.innerText = `${localStorage.getItem('oldOperand')}`;
        }
    }
}

//Refrences to elements
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const clearAllBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const currentOperandTextElement = document.querySelector('[data-current-operand')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const oldOperandTextElement = document.querySelector('[data-old-operand]')
//make a calculator instance
let calculator = new Calculator(currentOperandTextElement, previousOperandTextElement, oldOperandTextElement);

//adding numbers
numberBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        calculator.addNumber(btn.innerText);
        calculator.updateDisplay()
    })
})

//adding operation
operationBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        calculator.addOperation(btn.innerText);
        calculator.updateDisplay()
    })
})

//equals Btn
equalsBtn.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updateDisplay()
    calculator.oldOperandUpdate();
})

//clearAll Btn
clearAllBtn.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})

//delet Btn 
deleteBtn.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})

//from LocalStorage
window.onload = ()=>{
    calculator.oldOperandUpdate()
}