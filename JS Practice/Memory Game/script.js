const scoreText = document.createElement("h2");
const grid = document.createElement("div");
const status = document.createElement("h3");
scoreText.innerHTML = `Score : <span id="score"></span>`;
grid.id = 'grid';
status.id = 'status';
document.body.append(scoreText,status , grid);
const score = scoreText.firstElementChild;
grid.style.cssText = "width: 400px; height: 300px; display: flex; flex-wrap: wrap;"

const cardArray = [
    {
        name : "fries",
        img: 'pictures/fries.png'
    },
    {
        name : "cheeseburger",
        img: 'pictures/cheeseburger.png'
    },
    {
        name : "hotdog",
        img: 'pictures/hotdog.png'
    },
    {
        name : "ice-cream",
        img: 'pictures/ice-cream.png'
    },
    {
        name : "milkshake",
        img: 'pictures/milkshake.png'
    },
    {
        name : "pizza",
        img: 'pictures/pizza.png'
    },
    {
        name : "fries",
        img: 'pictures/fries.png'
    },
    {
        name : "cheeseburger",
        img: 'pictures/cheeseburger.png'
    },
    {
        name : "hotdog",
        img: 'pictures/hotdog.png'
    },
    {
        name : "ice-cream",
        img: 'pictures/ice-cream.png'
    },
    {
        name : "milkshake",
        img: 'pictures/milkshake.png'
    },
    {
        name : "pizza",
        img: 'pictures/pizza.png'
    },
]

cardArray.sort(()=> .5 - Math.random());

function creatBoard(){
    cardArray.forEach(element =>{
        const card = document.createElement("img");
        card.setAttribute('data-id', cardArray.indexOf(element));
        card.src = 'pictures/blank.png';
        grid.appendChild(card);
        card.addEventListener("click", flipCard);
    })
}


creatBoard()

let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];
const cards = document.querySelectorAll("img");
status.innerText= "click on the card";

function flipCard(e){
    const cardId = this.getAttribute("data-id");
    // const cardId = e.target.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.src = cardArray[cardId].img
    if (cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    if(optionOneId === optionTwoId){
        status.innerHTML= "<span style='color:red'>You cliked the same card (:</span>";
        cards[optionOneId].src = 'pictures/blank.png'
        cards[optionTwoId].src = 'pictures/blank.png'
    }else if (cardChosen[0] === cardChosen[1]){
        status.innerHTML= "<span style='color:green;'>You found a Match!!</span>";
        cards[optionOneId].src = 'pictures/white.png'
        cards[optionTwoId].src = 'pictures/white.png'
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardChosen);
        score.innerText= cardsWon.length;
    }else{
        cards[optionOneId].src = 'pictures/blank.png'
        cards[optionTwoId].src = 'pictures/blank.png'
        status.innerText= "Try again";
    } if (cardsWon.length === (cardArray.length/2)){
        status.innerHTML= "<span style='color:blue'>You founded them all!!!!!!!🎉🎊</span>";
        const nextLivel = document.createElement("button");
        nextLivel.innerText = "Next Livle";
        nextLivel.style.cssText = 'width: 80px; height: 40px; backgroudn: white; border: none'
        grid.prepend(nextLivel)
    } 
    cardChosen = [];
    cardChosenIds = [];
}



//---------livel Two---

const cardArray2 = [
    {
        name : "fries",
        img: 'pictures/fries.png'
    },
    {
        name : "cheeseburger",
        img: 'pictures/cheeseburger.png'
    },
    {
        name : "hotdog",
        img: 'pictures/hotdog.png'
    },
    {
        name : "ice-cream",
        img: 'pictures/ice-cream.png'
    },
    {
        name : "milkshake",
        img: 'pictures/milkshake.png'
    },
    {
        name : "pizza",
        img: 'pictures/pizza.png'
    },
    {
        name : "fries",
        img: 'pictures/fries.png'
    },
    {
        name : "cheeseburger",
        img: 'pictures/cheeseburger.png'
    },
    {
        name : "hotdog",
        img: 'pictures/hotdog.png'
    },
    {
        name : "ice-cream",
        img: 'pictures/ice-cream.png'
    },
    {
        name : "milkshake",
        img: 'pictures/milkshake.png'
    },
    {
        name : "pizza",
        img: 'pictures/pizza.png'
    },
    {
        name : "fries",
        img: 'pictures/fries.png'
    },
    {
        name : "cheeseburger",
        img: 'pictures/cheeseburger.png'
    },
    {
        name : "hotdog",
        img: 'pictures/hotdog.png'
    },
    {
        name : "ice-cream",
        img: 'pictures/ice-cream.png'
    },
    {
        name : "milkshake",
        img: 'pictures/milkshake.png'
    },
    {
        name : "pizza",
        img: 'pictures/pizza.png'
    },
    {
        name : "fries",
        img: 'pictures/fries.png'
    },
    {
        name : "cheeseburger",
        img: 'pictures/cheeseburger.png'
    },
    {
        name : "hotdog",
        img: 'pictures/hotdog.png'
    },
    {
        name : "ice-cream",
        img: 'pictures/ice-cream.png'
    },
    {
        name : "milkshake",
        img: 'pictures/milkshake.png'
    },
    {
        name : "pizza",
        img: 'pictures/pizza.png'
    },
]
cardArray2.sort(()=> .5 - Math.random())
nextLivel.onclick() = ()=>{
    cardArray2.forEach((e)=>{
        const card = document.createElement("img");
        card.setAttribute('data-id', cardArray2.indexOf(e));
        card.src = 'pictures/blank.png';
        grid.insertBefore('img', card);
    })
}