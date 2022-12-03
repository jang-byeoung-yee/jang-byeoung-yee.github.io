const toDoForm=document.querySelector("#todo-form");
const toDoList=document.querySelector("#todo-list");
const toDoInput=toDoForm.querySelector("input");
let toDos=[];
const TODOS_KEY="todos";

function handleToDoSubmit(event){
event.preventDefault();
const newTodo =toDoInput.value;
toDoInput.value="";
const newTodoObj={
    text:newTodo,
    id:Date.now(),
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();
}

function deleteToDo(event){
const deleteLi=event.target.parentElement;
toDos=toDos.filter(item=>item.id!=deleteLi.id);
localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
deleteLi.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodoObj){
const newLi=document.createElement("li");
newLi.id=newTodoObj.id;
const newSpan=document.createElement("span");
const newButton=document.createElement("button");
newSpan.innerText=newTodoObj.text;
newButton.innerText="❌"
newLi.appendChild(newSpan);
newLi.appendChild(newButton);
toDoList.appendChild(newLi);
newButton.addEventListener("click",deleteToDo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach((item)=>paintToDo(item));
}