//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear all tasks
    clearBtn.addEventListener('click', clearTasks);
    //filter through tasks
    filter.addEventListener('keyup', filterTasks);
};


//add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    //add class to link
    link.className = 'delete-item secondary-content';
    //add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = '';

    //console.log(li)

    e.preventDefault();
}


// remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
    
}

//clear Tasks
function clearTasks() {
    // taskList.innerHTML = ''

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );

}