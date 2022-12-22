/*
 * So.... What We Want to do?
 * When the user click on any button the operator will appear
 * on the screen and after clicking equal button the result will
 * appear and the operator will go to the previous operators ,
 * and if he clicked del button the last this he clicked on will 
 * dis appear , and if he clicked on the ac button the whole operator
 * will dis appear
 * Soo.. How do We acheive that?
 1. First we'll make a reference for the elements
 2. we'll add event listener for every button onclick
 3. we'll check the type of the button if it number or operator or equal
    or whatever it's
 4. the depend on the tyep of it and on the check result we'll 
    appear elements on the screen or we'll remove or do operation
 */

//References
// input Numbers
const operands = document.querySelectorAll("[data-number]")
// input operations 
const operations = document.querySelectorAll("[data-operation]")
// input control
const allClear = document.querySelector('[data-all-clear]');
const remove = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');
// Output
const previouse = document.querySelector('[data-previous-operand]')
const current = document.querySelector('[data-current-operand]')

let elementsArr = [];

Array.from(operands).concat(Array.from(operations)) 
    .forEach((input)=>{
        input.addEventListener('click', (e)=>{
            let value = +e.target.textContent || e.target.textContent;
            let id = Math.random() * 10000000;
            let element = new OperationElement(id, value);
            elementsArr.push(element);
            //Show on the current
            UI.displayOnCurrent(value)
        })
    })
    

class OperationElement {
    constructor(id, value){
        this.id = id;
        this.value = value;
    }
}

class UI {
    static displayOnCurrent(value){
        current.innerText += value
    }
    static removeLastElemet(elementsArr){
        current.textContent = elementsArr.map((e)=> e.value).join("")
    }
    static clearAll(elementsArr){
        current.textContent = elementsArr.map((e)=> e.value).join("");
    }
}

//delete Btn
remove.onclick = ()=>{
    if(elementsArr.length > 0){
        let id = elementsArr[elementsArr.length-1].id;
        elementsArr = elementsArr.filter(element=> element.id !== id)
        UI.removeLastElemet(elementsArr)
    }

}

//All Clear Btn
allClear.onclick = ()=>{
    elementsArr = [];
    UI.clearAll(elementsArr)
}

//equals btn
equals.onclick = ()=>{
    let numbers = [];
    let operators = [];

    elementsArr.map((element)=>{
        if(+element.value){
            console.log('number')
            numbers.push(+element.value)
        }else{
            operators.push(element.value)
            console.log(operators)
        }
    })
    numbers.reduce((prev, curr)=> prev + (operators[0]) + curr)
    console.log(...numbers)
}
// Not Yet (: !