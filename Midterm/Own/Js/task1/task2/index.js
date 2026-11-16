
let tasks = [
    "Finish Lab 04",
    "Push to GitHub",
    "Read about the DOM"
];


const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


function showTasks() {
    
    taskList.innerHTML = "";

   
    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML += "<li>" + tasks[i] + "</li>";
    }

    
    taskCount.innerHTML = tasks.length + " tasks";

    
    console.log(tasks);
}


function addTask() {
    let newTask = taskInput.value.trim();

   
    if (newTask === "") {
        return;
    }

   
    tasks.push(newTask);

    
    taskInput.value = "";

   
    showTasks();
}


function removeLastTask() {
   
    tasks.pop();

    
    showTasks();
}


addButton.addEventListener("click", addTask);
removeButton.addEventListener("click", removeLastTask);


taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


showTasks();
