//Create selectors & elements 
const todoInput = document.getElementById('todos');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

//Create event listeners 
addBtn.addEventListener('click', addTodo);

//Create functions
function addTodo(event) {
  //Prevent default input behaviour
  event.preventDefault();
  //Input field is empty prevent adding todo
  if (todoInput.value =='') {
    return null;
  }
  //Create new to do
  const newTodo = document.createElement('li');
  //Append the input value to the list/todo item
  newTodo.innerText = todoInput.value;
  //Append the list/todo item to the todolist
  todoList.appendChild(newTodo);
  //clear input fields
  todoInput.value = '';

  //Create done checkbox & donebox functionality
  const doneBox = document.createElement('input');
  //Add input information
  doneBox.type = 'checkbox';
  doneBox.name = 'done';
  doneBox.value = 'done';
  doneBox.id = 'done-check'; 
  //Add style class to checkbox
  doneBox.classList.add('check')
  //Appened done checkbox
  newTodo.appendChild(doneBox);
  //Create function that appends done todos to completed todos ul
  doneBox.addEventListener('change', doneTodo);
  function doneTodo() {
    if (doneBox.checked){
      doneList.appendChild(newTodo);
      newTodo.classList.add('done-todo')
    } else {
      todoList.appendChild(newTodo);
      newTodo.classList.remove('done-todo')
    }
  }
  doneTodo();
  
  //Create and apend delete checkbox
  const deleteBox = document.createElement('input');
  //Add input information
  deleteBox.type = 'checkbox';
  deleteBox.name = 'delete';
  deleteBox.value = 'delete';
  deleteBox.id = 'delete-check'; 
  //Add style class to checkbox
  deleteBox.classList.add('check');
  //Append delete checkbox
  newTodo.appendChild(deleteBox);
  //Create function that deletes todos
  deleteBox.addEventListener('change', deleteTodo)
  function deleteTodo() {
    if(deleteBox.checked) {
    newTodo.remove()
    }
  }
  deleteTodo();
}




