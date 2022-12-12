//References
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
openBtn.onclick = (e)=>{
    sidebar.classList.toggle('show-sidebar');
}
closeBtn.onclick = (e)=>{
    sidebar.classList.remove('show-sidebar');
}
//Well Done D: