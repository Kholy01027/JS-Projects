//inputs
const addIn = document.getElementsByClassName("classes-to-add")[0];
const removeIn = document.getElementsByClassName("classes-to-remove")[0];
const allIn = document.querySelectorAll("input[type = text]");

//fast edite
addIn.id = 'add';
removeIn.id = 'remove';

//storage values
let fromAddIn = [];
let fromRemoveIn = [];
let newElement;

//Setting & getting values
Array.from(allIn).map((e)=>{
    e.addEventListener('blur', (e)=>{
        if(e.target.id == 'add'){
            e.target.value.split(" ").map((e)=>{
                if(e.length > 0 ){
                    if(e != ""){
                        fromAddIn.push(e);
                        addF(e);
                    }
                }
            })
        }
        if(e.target.id == 'remove'){
            e.target.value.split(" ").map((e)=>{
                if(e.length > 0){
                    if(e != "" ){
                        fromRemoveIn.push(e);
                        removeF(e)
                    }
                }
            })
        }
    }) 
    e.addEventListener('blur', (e)=>{
        e.target.value = ''
    })    
})

//processing
function addF(e){
    newElement = document.createElement("span");
    newElement.innerText = e;
    newElement.id = `id-${e}`;
    outDisplay.append(newElement);  
}
function removeF(e){
    let remove = document.querySelector(`#id-${e}`);
    if(remove != null || undefined){
        remove.remove()
    }else{
        window.alert(`${e} not exist`);
    }
}

//output
const outContainer = document.getElementsByClassName("classes-list")[0];
const outDisplay = outContainer.lastElementChild;
//---------DONEEEEEEEEEEEE!!!!!!!!!-------------