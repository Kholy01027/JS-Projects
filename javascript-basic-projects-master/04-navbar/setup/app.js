// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
console.clear()
//refrences
const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//events
navBtn.onclick = ()=>{
    links.classList.toggle("show-links");
}
//Well Done!! (: