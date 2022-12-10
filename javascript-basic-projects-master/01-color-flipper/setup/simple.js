let color = document.querySelector(".color");
let btn = document.getElementById("btn");

//color
let colorsArr = ['red', 'green', '#f82f04', 'rgba(234, 123, 43, 5)',
    'black', 'white', 'blue', 'yellow', 'gray', '#f1f5f8'
];

btn.addEventListener('click', ()=>{
    let randomNumber = randomNoGenerator();
    let newColor = colorsArr[randomNumber];
    document.body.style['background-color'] = newColor;
    color.textContent = newColor;
    //save in sessionStorage
    sessionStorage.setItem('bgSimpleColor', newColor);
})

function randomNoGenerator(){
    return parseInt(Math.random() * colorsArr.length);
}

//sessions storage, check and set
if (sessionStorage.getItem('bgSimpleColor')){
    newColor = sessionStorage.getItem('bgSimpleColor');
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
}