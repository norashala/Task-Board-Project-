// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
const id = nextId;
    nextId++;
    localStorage.setItem("nextId", nextId);
    return id;
  }
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = document.createElement("div");
    taskCard.textContent = ("task" title); 
    return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
const todoCards = document.getElementById("todo-cards"); 
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

function handleAddTask(event) {
    event.preventDefault(); 
  
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const deadline = document.getElementById("deadline").value;
  
    const newTask = {
      id: generateTaskId(),
      title: title,
      description: description,
      deadline: dayjs(deadline).format("YYYY-MM-DD"), 
      status: "Not Yet Started"
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    const taskId = event.target.dataset.id; 
    renderTaskList(); 
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
        const taskId = ui.draggable[0].dataset.id; 
        const newStatus = event.target.id; 
        const taskIndex = taskList.findIndex(task => task.id === taskId); 
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
      document.querySelectorAll(".task-card"){
      taskCard.addEventListener("click", handleDeleteTask);
    });
});
