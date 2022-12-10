const scoreText = document.createElement("h2");
scoreText.innerHTML ="Your Score: <span id = 'score'>0</span>"
document.body.appendChild(scoreText);
let score = document.getElementById("score");
const timeLeftText = document.createElement("h2");
timeLeftText.innerHTML ="Time Left: <span id = 'time-left'>60</span>"
document.body.appendChild(timeLeftText);
let timeLeft = document.getElementById("time-left");
let result = 0;

const grid = document.createElement("div");
grid.id = 'grid';
document.body.appendChild(grid);

for(let i = 0; i <= 8 ; i++){
    const square = document.createElement("div");
    square.className = "square";
    square.id = i+1;
    grid.appendChild(square);
    square.style.cssText = "height: 200px; width: 200px; border: solid black 1px"
}
grid.style.cssText = "display: flex; flex-wrap: wrap; width: 606px; height: 600px;";


const mole = document.createAttribute('class');
mole.value = "mole";

const squares = document.querySelectorAll(".square")
let hitPosition;
let currentTime = 10;
let timerId = null;
//score
//timeLeft
//result

function randomSquare(){
    squares.forEach((e)=>{
        e.classList.remove("mole");
    })
    let randomSquare = squares[parseInt(Math.random() * 9)];
    randomSquare.classList.add("mole")
    hitPosition = randomSquare.id;
}


squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if(square.id === hitPosition){
            result ++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown(){
currentTime--;
timeLeft.textContent = currentTime;
if(currentTime === 0){
    clearInterval(countDownTimerId)
    window.alert(`Your Score's : ${result}`);
    clearInterval(timerId)
}
}
let countDownTimerId = setInterval(countDown, 1000)