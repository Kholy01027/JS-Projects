class Calculator {
    constructor(currentOperandTextElement, previousOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.opeartion = undefined;
    }
    delete(){
            this.currentOperand = this.currentOperand.toString().slice(0, -1)
            if(this.currentOperand.length === 0 && this.previousOperand > 0){
            this.currentOperand = this.previousOperand;
            this.previousOperand = ''
            this.operation = null;
        }
    }
    addNumber(number){
        number === "." &&
        this.currentOperand.includes(".")
        ? null
        : this.currentOperand += number;
    }
    addOperation(operation){
        if(!this.currentOperand || this.currentOperand==='.') return;
        if(this.previousOperand){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }
    compute(){
        let compution ;
        let prev = +this.previousOperand;
        let current = +this.currentOperand;

        switch(this.operation){
            case '÷':
                compution = prev / current;
                break;
            case '*':
                compution = prev * current;
                break;
            case '+':
                compution = prev + current;
                break;
            case '-':
                compution = prev - current;
                break;
            default:
                return;
        }

        this.currentOperand = compution;
        this.previousOperand = '';
        this.operation = undefined;
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `
            ${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText = this.getDisplayNumber(this.previousOperand);
        }
    }
}

const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const clearAllBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');

let calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);

numberBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        calculator.addNumber(btn.innerText);
        calculator.updateDisplay()
    })
})

console.log(operationBtn)
operationBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        calculator.addOperation(btn.innerText);
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener('click', ()=>{
    calculator.compute();
    calculator.updateDisplay();
})

clearAllBtn.onclick = ()=>{
    calculator.clear();
    calculator.updateDisplay()
}

deleteBtn.onclick = ()=>{
    calculator.delete()
    calculator.updateDisplay()
}