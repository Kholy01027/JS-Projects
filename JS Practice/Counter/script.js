const value = document.querySelector('#value');
const decreaseRe = document.querySelector('.decrease');
const increaseRe = document.querySelector('.increase');
// const resetRe = document.querySelector('.reset');
const btns = document.querySelectorAll('.btn');

let decrease = decreaseRe.classList;
let increase = increaseRe.classList;
// let reset = resetRe.textContent;

/*!!
    I can initialize new variable called counter and use it instead of using 'value.textContent', and the I'll not 
    have to convert it and do complet things like this(*)
*/

Array.from(btns)
    .forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            let currentBtn = e.target.innerText.toLowerCase();
            console.log(currentBtn)
            if(currentBtn === 'increase' || increase.contains(currentBtn)){
                value.innerText = +value.innerText + 1 //(*) instead : count++
            }else if(currentBtn === 'decrease' || decrease.contains(currentBtn)){
                value.innerText -= 1 // (*) , instead : count--
            }else {
                value.innerText = 0
            }
            colorChange();
            //save'n sessionStorage
            sessionStorage.setItem('value', value.innerText); //instead 'count'
        })
    })

    
function colorChange(){
    if(value.innerText > 0) {
        value.style.color = 'green';
    }else if(value.innerText < 0){
        value.style.color = 'red';
    }else {
        value.style.color = 'black';
    } 
}

//sessionStorage , Check & set
if(sessionStorage.getItem('value')){
    value.innerText = sessionStorage.getItem('value');
    colorChange();
}

//Well Done!!!