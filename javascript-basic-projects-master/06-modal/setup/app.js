// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

//Resources 
const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

openBtn.onclick = ()=>{
    if(!modal.classList.contains('open-modal')){
        modal.classList.add('open-modal');
    }
}
closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('open-modal')
})
//Well Done :D!!