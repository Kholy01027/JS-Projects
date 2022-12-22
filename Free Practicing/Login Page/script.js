//Refrences
//inputs
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
//submit
const submet = document.getElementById('submet');
//info & icon
const info = this.document.previousSibling;
const icon = document.getElementsByClassName('.icon');

submet.addEventListener('click', (e)=>{
    e.preventDefault()
    let namePattern = /[^\W\s\d]{1,10}/i;
    let nameDigits = /\d+/ig;
    let nameNonChar = /\W/ig;
    let nameSpaces = /\s/ig
    let mailPattern = /^[\w+-]+(@[\w+-]+)+(\.[\w+-]+)+$/gi;
    let mailNoAt = /@/gi;
    let mailNoDot = /\./gi;
    let passwordChar = /\w+/ig
    let passwordNotChar = /\W+/ig

    
})