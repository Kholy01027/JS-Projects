const accordion = document.getElementsByClassName("accordion");

Array.from(accordion).map((e)=>{
    e.addEventListener("click", showDesc)
})
function showDesc(e){
   const show = e.target.nextElementSibling;
    if(show.style.maxHeight == "0"){
        show.style.maxHeight = "50px"
    }else {
        show.style.maxHeight = "0"
        document.getElementById
    }

//    if(show.style.display == "block"){
//     show.style.display = "none"
//    } else {
//     show.style.display = "block"
//    }
}