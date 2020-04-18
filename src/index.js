// Define UI vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTask);
}

// Add task
function addTask(e) {
    e.preventDefault();

    if (taskInput.value === ''){
        alert('Add a task');
        return;
    }

    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskInput.value = '';
    taskList.appendChild(li);

    //console.log(li);
}

function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks(){
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTask(e){
    const text = e.target.value.toLowerCase();
   // console.log(taskList.childNodes);
    taskList.childNodes.forEach(task => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

    });

}
