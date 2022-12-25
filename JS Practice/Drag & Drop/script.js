const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

console.log(fill)

fill.addEventListener('dragstart', function(){
    this.className += ' hold';
    setTimeout(()=>this.className += ' invisible', 0)
})
fill.addEventListener('dragend', function(){
    this.className = 'fill';
})

empties.forEach((empty)=>{
    empty.addEventListener('dragover', function(e){
        e.preventDefault()
    })
    
    empty.addEventListener('dragenter', function(e){
        this.className += ' hovered'
    })
    
    empty.addEventListener('dragleave', function(e){
        this.className = 'empty'
    })
    
    empty.addEventListener('drop', function(e){
        this.className = 'empty'
        this.append(fill)
    })
})