function addAllTasksToDOM(taskList) {
    clearTasks();
    taskList.forEach(task => addTaskToDOM(task));

}

function clearTasks() {
    document.querySelector('.task-list').innerHTML = '';
}

function addTaskToDOM(task) {
    // Create a new task element with the provided HTML structure
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.id = `task-${task.taskName}`;

    taskElement.innerHTML = `
        <div class="checkbox-wrapper-15">
            <input class="inp-cbx" id="${task.taskName}" type="checkbox" style="display: none;"/>
            <label class="cbx" for="${task.taskName}">
                <span>
                    <svg width="12px" height="9px" viewbox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span>${task.taskName}</span>
            </label>
        </div>
        <div class="task-right-side">
            <div class="task-date">${task.dueDate}</div>
            <button class="details">DETAILS</button>
            <button class="edit-task">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="delete-task">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    `;

    console.log(task.taskName);

    // Append the task element to the DOM
    document.querySelector('.task-list').appendChild(taskElement);
}


function displayAddTask() {
    const container = document.querySelector('.main-right');
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.className = 'overlay';

    const formHTML = `
        <form class="add-task-form" id="add-task-form">
            <h1>Add Task</h1>
            <fieldset>
                <label for="task-name">Task Name</label>
                <input type="text" id="task-name" name="task-name" autocomplete="off" required>

                <label for="description">Description</label>
                <input type="text" id="description" name="description" autocomplete="off">

                <label for="due-date">Due Date</label>
                <input type="date" id="due-date" name="due-date">

                <label for="priority">Priority</label>
                <select id="priority" name="priority">
                    <option value="low">Low</option>
                    <option value="medium" selected>Medium</option>
                    <option value="high">High</option>
                </select>

                <label for="project">Project</label>
                <select id="project" name="project">
                    <option value="general">General</option>
                </select>

                <div>
                    <button type="submit" class="add-task-button">Add Task</button>
                    <button type="button" class="cancel-task-button">Cancel</button>
                </div>
            </fieldset>
        </form>
    `;

    container.innerHTML = `
        <button class="add-task">
            <i class="fa-solid fa-plus fa-beat-fade"></i>
            Add Task
        </button>
        <div class="task-list"></div>
    `;

    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);
}


export { displayAddTask , addAllTasksToDOM };