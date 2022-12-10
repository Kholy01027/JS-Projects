console.clear()
// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
console.clear();
// elements references
//outputs
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
//inputs-Btns-
//all btns
const allBtns = document.querySelectorAll('.btn');

// counter for id
let counter = 0;

//onpage load
window.onload = ()=>{
  changeReview(counter);
}

//Here I shouldn't deal with all buttons in one time,
// it would be better if I dealt with eatch one lonely, I would get
// an organize code and more understandable , 
//event
allBtns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    let currentBtn = e.target.classList;
    if(counter => 0 || counter <= reviews.length){ // there's no need for this condition
      //since I already solved the problim of getting more then array length here(*)
      if(currentBtn.contains('btn-right')){//nex btn
        counter == reviews.length - 1 ? counter = 0 : ++counter;//(*)
        changeReview(counter);
      }else if(currentBtn.contains('btn-left')){//prev btn
        counter == 0 ? counter = reviews.length - 1 : --counter;//(*)
        changeReview(counter);
      }else{//random btn
        //random number & not repeated 
        let oldCounter = counter;
        let newCounter = randomNo();
        while(true){
          newCounter = randomNo();
          if(newCounter != oldCounter){
            counter = newCounter;
            changeReview(counter);
            break;
          }
        }
      }
    }
  })
})

function randomNo(){
  return parseInt(Math.random() * reviews.length);//(*)
}
//here I didn't have to put the parameter 'counter' , since it's a
//global variable
function changeReview(counter){
  currentReview = reviews[counter];
  img.setAttribute('src', currentReview.img);
  author.textContent = currentReview.name;
  job.textContent = currentReview.job;
  info.textContent = currentReview.text;
}
