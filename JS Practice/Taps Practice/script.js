const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const elementArray = [
    {
        btn: 'tap 1',
        content: 'Content of tap 1' ,
    },
    {
        btn: 'tap 2',
        content: 'Content of tap 2' ,
    },
    {
        btn: 'tap 3',
        content: 'Content of tap 3' ,
    },
]

const active = document.createAttribute("class");
active.value = 'active'; 
const hidden = document.createAttribute("class");
hidden.value = 'hidden'; 
const result = document.createElement("p");
let clickedId;

function basicBoard(){
    elementArray.forEach((e)=>{
        console.log(e)
        const btn = document.createElement("button");
        btn.textContent = e.btn;
        btn.classList.add("tap", elementArray.indexOf(e));
        btn.id = `${elementArray.indexOf(e)}`;
        container.append(btn)
        // elementArray.forEach((e)=>{
        //     const content = document.createElement("p");
        //     content.textContent = e.content;
        //     content.classList.add("hidden", elementArray.indexOf(e))
        //     content.id = `content-${elementArray.indexOf(e.target)}`;
        //     container.append(content);
        // })
        btn.onclick = (e)=>{
            clickedId = e.target.id;
            container.append(result)
            result.innerText = elementArray[clickedId].content;
        }
    })
}
basicBoard()