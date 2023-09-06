import { deleteTask } from './task';
import { taskList } from './taskForm';

function clearTasks() {
    document.querySelector('.task-list').innerHTML = '';
}

function addAllTasksToDOM(taskList) {
    clearTasks();
    taskList.forEach(task => addTaskToDOM(task));
}

function addTaskToDOM(task) {
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
            <button class="details" id="${task.taskName}-details">DETAILS</button>
            <button class="edit-task" id="${task.taskName}-edit">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="delete-task" id="${task.taskName}-delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    `;

    document.querySelector('.task-list').appendChild(taskElement);
    
    // Change task's border color according to task priority
    if (task.priority == 'low') {
        document.getElementById(`task-${task.taskName}`).style.borderColor = 'green';
    } else if (task.priority == 'medium') {
        document.getElementById(`task-${task.taskName}`).style.borderColor = 'orange';
    } else if (task.priority == 'high'){
        document.getElementById(`task-${task.taskName}`).style.borderColor = 'red';
    }
    
    const deleteButton = document.getElementById(`${task.taskName}-delete`);

    deleteButton.addEventListener('click', () => {
        deleteTask(task.taskName);
        addAllTasksToDOM(taskList);
    });

    const editButton = document.getElementById(`${task.taskName}-edit`);

    editButton.addEventListener('click', () => {
        displayEditTaskForm(task);
        addAllTasksToDOM(taskList);
    });
}

function displayEditTaskForm(task) {
    const container = document.querySelector('.main-right');
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    const formHTML = `
        <form class="edit-task-form open-edit-task-form" id="edit-task-form">
            <h1>Edit Task</h1>
            <fieldset>
                <label for="task-name">Task Name</label>
                <input value="${task.taskName}" type="text" id="task-name" name="task-name" autocomplete="off" required spellcheck="false">

                <label for="description">Description</label>
                <input value="${task.description}" type="text" id="description" name="description" autocomplete="off" spellcheck="false">

                <label for="due-date">Due Date</label>
                <input value="${task.dueDate}" type="date" id="due-date" name="due-date">

                <label for="edit-priority">Priority</label>
                <select id="edit-priority" name="edit-priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <label for="edit-project">Project</label>
                <select id="edit-project" name="edit-project">
                    <option value="general">General</option>
                </select>

                <div>
                    <button type="submit" class="edit-task-button">Edit</button>
                    <button type="button" class="cancel-task-button">Cancel</button>
                </div>
            </fieldset>
        </form>
    `;

    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);

    //Change the selected priority to the task's previous priority
    const selectPriority = document.getElementById('edit-priority');

    for (let i = 0; i < selectPriority.options.length; i++) {
        if (selectPriority.options[i].value == task.priority) {
            selectPriority.options[i].selected = true;
            break;
        }
    }

    const selectProject = document.getElementById('edit-project');

    for (let i = 0; i < selectPriority.options.length; i++) {
        if (selectProject.options[i].value == task.project) {
            selectProject.options[i].selected = true;
            break;
        }
    }
}

function displayAddTaskForm() {
    const container = document.querySelector('.main-right');
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.className = 'overlay';

    const formHTML = `
        <form class="add-task-form" id="add-task-form">
            <h1>Add Task</h1>
            <fieldset>
                <label for="task-name">Task Name</label>
                <input type="text" id="task-name" name="task-name" autocomplete="off" required spellcheck="false">

                <label for="description">Description</label>
                <input type="text" id="description" name="description" autocomplete="off" spellcheck="false">

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


export { displayAddTaskForm , addAllTasksToDOM };