console.clear();
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//the peaces of HEX code for colors;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 
'E', 'F'];
//Neede ==> #------

/*! Here I can use string instead of array, because we want at the end
 string not array , so if we made it string from the begining we'll not
 be have to use any of those (*)
*/
let generatedHexArr = ['#']; // let hexCode = '#';
let generatedLength = 6;
btn.addEventListener('click', ()=>{
    for(i = 0; i <= generatedLength; i++){
        if(generatedHexArr.length <= generatedLength){ // and I dont have to check
            // if it less the my goal, because it offcourse less.. because the loop is well stop!
            randomNo = randomNoGenerator(); // here I didn't have to pus
            //the random No in variable , I can but it hex[*here] directly.
            generatedHexArr.push(hex[randomNo]);// (*)
        }
    }
    let generatedHex = generatedHexArr.join('') // (*)
    document.body.style['background'] = generatedHex;
    color.textContent = generatedHex;
    // save in sessionStorage 
    sessionStorage.setItem('bgHexColor', generatedHex);
    //reset
    generatedHexArr = ['#']; // *
})

function randomNoGenerator(){
    return Math.floor(Math.random() * hex.length);
}

//Check if there any thing in session storage and set if
if (sessionStorage.getItem('bgHexColor')){
    let generatedHex = sessionStorage.getItem('bgHexColor');
    document.body.style['background'] = generatedHex;
    color.textContent = generatedHex;
}
// Well Done !