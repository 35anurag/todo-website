//seclector
const todoInput= document.querySelector(".text input");
const todoButton= document.querySelector(".btn-ch");
const todoList = document.querySelector(".todo-list");
const todoWeeks = document.querySelector(".dashboard")

//EventListner
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delList);
todoWeeks.addEventListener('click', weektodo);

//FUnction
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    /* TO make like this inside ul tag
    <div class= "todo">
    <li class="todo-item"> </li>
    <button class="delete-btn">DELETE BUTTON </button>
    </div> */

    // adding tododiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");   // adding class name todo in div
    //create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText=todoInput.value;
    // adding newTodo inside todoDiv
    todoDiv.appendChild(newTodo);
    //check delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");  
    // adding newTodo inside todoDiv
    todoDiv.appendChild(deleteBtn);  

    // append this tododiv to ul tag  in html
    todoList.appendChild(todoDiv);
    //clear todo Input value
    todoInput.value="";
}

function delList(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0]=== "delete-btn"){
       const todo = item.parentElement;
       //adding  animation
       todo.classList.add("fal");
       todo.addEventListener("transitionend", function(){
           todo.remove();
       });
    }
}

/*
function weektodo(event){
    event.preventDefault();
    todoInput.value="";
}
*/