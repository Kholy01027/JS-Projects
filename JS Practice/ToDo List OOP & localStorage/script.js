//References
const form = document.querySelector('[data-form]')
const lists = document.querySelector('[data-lists]')
const input = document.querySelector('[data-input]')

let todoArr = [];

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let id = Math.random() * 10000;
    // let value = input.value;
    todo = new NewTodo(id, input.value);
    todoArr = [...todoArr, todo]
    //display tasks
    UI.displayTasks();
    UI.resetInput();
    UI.removeTask();
    //add to storage
    Storage.addToStorage(todoArr);
})
//Here we made object for every todo to marge it with the id and mark it
//with it
class NewTodo {
    constructor(id, value){
        this.id = id;
        this.value = value;
    }
}

class UI {
    static displayTasks(){
        let tasks = todoArr.map((task)=>{
            return `
            <div class="todo">
                <p>${task.value || 'Unknown'}</p>
                <span id='${task.id}'>✖️</span>
            </div>
            `
        });
        lists.innerHTML = tasks.join('');
    }
    static resetInput(){
        input.value = '';
    }
    static removeTask(){
        lists.addEventListener('click', (e)=>{
            if(e.target.id){
                let id = e.target;
                id.parentNode.remove();
                todoArr = todoArr.filter((item)=> item.id !== +id.id);
                Storage.addToStorage(todoArr);
            }
        })
    }
}

class Storage {
    static addToStorage(todoArr){
        let storage = localStorage.setItem('todo', JSON.stringify(todoArr));
    }
    static getFromStorage(){
        if(localStorage.getItem('todo')){
            todoArr = JSON.parse(localStorage.getItem('todo'));
            UI.displayTasks()
        }
    }
}

window.onload = ()=>{
    Storage.getFromStorage();
    UI.removeTask();
}