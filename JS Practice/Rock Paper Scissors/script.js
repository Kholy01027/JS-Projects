//My Solve --------------------------------

let computerChoise = document.createElement("h2");
computerChoise.textContent = "Computer Choise : ";
computerChoise.id = "computer-choise";
document.body.appendChild(computerChoise);
let userChoise = document.createElement("h2");
userChoise.textContent = "Your Choise : ";
userChoise.id = "user-choise";
document.body.appendChild(userChoise);
let result = document.createElement("h2");
result.textContent = "Result : ";
result.id = "result";
document.body.appendChild(result);

let rock = document.createElement("button");
rock.textContent = "rock 🪨";
rock.id = "rock";
document.body.appendChild(rock);
let papper = document.createElement("button");
papper.textContent = "papper 📎";
papper.id = "papper";
document.body.appendChild(papper);
let scissors = document.createElement("button");
scissors.textContent = "scissors ✂️";
scissors.id = "scissors";
document.body.appendChild(scissors);


let all = document.getElementsByTagName("button");
let randomC;
let clicked;
for (let i = 0 ; i < all.length ; i++){
    all[i].addEventListener("click", function Click(e){
        randomC = all[parseInt((Math.random() * all.length - 1 ) + 1)].textContent;
        clicked = e.target.innerText;
        userChoise.innerHTML = `Your Choise : ${clicked}`
        computerChoise.innerHTML = `Computer Choise : ${randomC}`
        if (clicked ==  randomC) {
            result.innerHTML = `Retry`
        }else{
            if(clicked == rock.textContent && randomC == papper.textContent) {
                result.innerHTML = `Computer Win`
            }else if(clicked == papper.textContent && randomC == rock.textContent){
                result.innerHTML = `You Win`
            }else if(clicked == 'rock' && randomC ==scissors.textContent){
                result.innerHTML = `You Win`
            }else if (clicked == scissors.textContent && randomC ==rock.textContent){
                result.innerHTML = `Computer Win`
            }else if (clicked == papper.textContent && randomC == scissors.textContent){
                result.innerHTML = `Computer Win`
            }else if (clicked == scissors.textContent && randomC == papper.textContent){
                result.innerHTML = `You Win`
            }
        }
    }
    )
}    


// another Solve --------------------
/*const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
} */


//another Solve --------------------------------------

// const userChoiseDisplay = document.createElement("h1");
// const computerChoiseDisplay = document.createElement("h1");
// const resultDisplay = document.createElement("h1");
// const gameGrid = document.createElement("div");
// document.body.appendChild(gameGrid);
// gameGrid.append(userChoiseDisplay, computerChoiseDisplay, resultDisplay);

// const choices = ['rock', 'papper', 'scissors'];
// let userChoice;
// let computerChoise;

// function handleClick(e) {
//     userChoice = e.target.id;
//     userChoiseDisplay.innerHTML = `Your Choise : ${userChoice}`;
//     generateComputerChoice();
//     getResult()
// }

//     function generateComputerChoice(){
//         const randomChoice  = choices[parseInt(Math.random() * choices.length)];
//         computerChoise = randomChoice ;
//         computerChoiseDisplay.innerHTML = `Computer Choise : ${computerChoise}`;    
//     }



// for (let i = 0 ; i < choices.length; i++){
//     const button = document.createElement('button');
//     button.id = choices[i];
//     button.innerHTML = choices[i];
//     button.addEventListener('click', handleClick);
//     gameGrid.appendChild(button);
// }

// function getResult() {
//     switch(userChoice + computerChoise){
//         case 'scissorspaper':
//         case 'rockscissors':
//         case 'paperrock':
//             resultDisplay.innerHTML = "YOU WIN!"
//             break;
//         case 'paperscissors':
//         case 'scissorsrock':
//         case 'rockpaper':
//             resultDisplay.innerHTML = "YOU LOSE!"
//             break
//         case 'paperpaper':
//         case 'scissorsscissors':
//         case 'rockrock':
//         resultDisplay.innerHTML = "ITS A DRAW!"
//         break
//     }
// }

//---Another Solve ----------------------------------------------
// const resultDisplay = document.querySelector('#result')
// const choicesDisplay = document.querySelector('#choices')
// const choices = ['rock', 'paper', 'scissors']

// const handleClick = (e) => {
//   getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
// }
// choices.forEach(choice => {
//   const button = document.createElement('button')
//   button.innerHTML = choice
//   button.addEventListener('click', handleClick)
//   choicesDisplay.appendChild(button)
// })

// const getResults = (userChoice, computerChoice) => {
//   switch (userChoice + computerChoice) {
//     case 'scissorspaper':
//     case 'rockscissors':
//     case 'paperrock':
//       resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!'
//       break
//     case 'paperscissors':
//     case 'scissorsrock':
//     case 'rockpaper':
//       resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!'
//       break
//     case 'scissorsscissors':
//     case 'rockrock':
//     case 'paperpaper':
//       resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!'
//       break
//   }
// }