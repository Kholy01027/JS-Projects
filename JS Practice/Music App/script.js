const sounds = document.querySelectorAll('[data-sound]');
const pads = document.querySelectorAll('.pads div')
const visuals = document.querySelector('.visual');
const colors = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#606bd3',
    '#60c2d3'
]

pads.forEach((pad, index)=>{
    pad.addEventListener('click', ()=>{
        sounds[index].currentTime = 0;
        sounds[index].play();
        makeBubbles(index)
    })
})

function makeBubbles(index){
    const bubble = document.createElement('div');
    bubble.style['background-color'] = colors[index];
    bubble.style.animation = 'jump 1s ease'
    visuals.appendChild(bubble);
    bubble.addEventListener('animationend', function(){
        visuals.removeChild(this)
    })
}