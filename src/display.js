import { deleteTask , editTask , projects , findProjectIndex , createProject } from './task';

function clearTasks() {
    document.querySelector('.task-list').innerHTML = '';
}

function loadAllTasks(taskList) {
    clearTasks();
    taskList.forEach(task => loadTask(task));
}

function loadTask(task) {
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
    if (task.priority == 'Low') {
        document.getElementById(`task-${task.taskName}`).style.borderColor = 'green';
    } else if (task.priority == 'Medium') {
        document.getElementById(`task-${task.taskName}`).style.borderColor = 'orange';
    } else if (task.priority == 'High'){
        document.getElementById(`task-${task.taskName}`).style.borderColor = 'red';
    }

    const detailsButton = document.getElementById(`${task.taskName}-details`);
    detailsButton.addEventListener('click', () => {
        displayDetails(task);
    });
    

    const editButton = document.getElementById(`${task.taskName}-edit`);

    editButton.addEventListener('click', () => {
        openEditTaskForm(task);
        loadAllTasks(projects[findProjectIndex(task.project)].taskList);
    });
    
    const deleteButton = document.getElementById(`${task.taskName}-delete`);

    deleteButton.addEventListener('click', () => {
        deleteTask(task);
        loadAllTasks(projects[findProjectIndex(task.project)].taskList);
    });
}

function openProjectForm() {
    const container = document.querySelector('.project-container');
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    overlay.style.display = 'block';

    const formHTML = `
    <div class="project-form">
        <form class="add-project-form" id="add-project-form">
            <fieldset>
                <label for="project-name">Project Name</label>
                <input type="text" id="project-name" name="project-name" autocomplete="off" required spellcheck="false">
                <div>
                    <button type="submit" class="add-project-button">Add Project</button>
                    <button type="button" class="cancel-project-button">Cancel</button>
                </div>
            </fieldset>
        </form>
    </div>  
    `

    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);

    const projectForm = document.getElementById('add-project-form');
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectName = document.getElementById('project-name').value;
        createProject(projectName);
        closeProjectForm();
    });

    const cancelButton = document.querySelector('.cancel-project-button');
    cancelButton.addEventListener('click', closeProjectForm);
}

function closeProjectForm() {
    const container = document.querySelector('.project-container');
    container.innerHTML = '';
}

function displayDetails(task) {
    const container = document.querySelector('.main-right');
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    const formHTML = `
        <div class="details-container">
            <button class="x-button">
                <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>
            </button>
            <h1>${task.taskName}</h1>
            <div class="space description-detail"><span>Description:</span> ${task.description}</div>
            <div class="space"><span>Due Date:</span> ${task.dueDate}</div>
            <div class="space"><span>Priority:</span> ${task.priority}</div>
            <div><span>Project:</span> ${task.project}</div>
        </div>
    `
    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);
    let xButton = document.querySelector('.x-button');
    xButton.addEventListener('click', closeDetails);
}

function closeDetails(){
    let container = document.querySelector('.details-container');
    let overlay = document.getElementById('overlay');
    container.remove();
    overlay.style.display = 'none';
}

function openEditTaskForm(task) {
    const container = document.querySelector('.main-right');
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    const formHTML = `
        <form class="edit-task-form open-edit-task-form" id="edit-task-form">
            <h1>Edit Task</h1>
            <fieldset>
                <label for="edit-task-name">Task Name</label>
                <input value="${task.taskName}" type="text" id="edit-task-name" name="edit-task-name" autocomplete="off" required spellcheck="false">

                <label for="edit-description">Description</label>
                <input value="${task.description}" type="text" id="edit-description" name="edit-description" autocomplete="off" spellcheck="false">

                <label for="edit-due-date">Due Date</label>
                <input value="${task.dueDate}" type="date" id="edit-due-date" name="edit-due-date">

                <label for="edit-priority">Priority</label>
                <select id="edit-priority" name="edit-priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <label for="edit-project">Project</label>
                <select id="edit-project" name="edit-project">

                </select>

                <div>
                    <button type="submit" class="edit-task-button">Edit</button>
                    <button type="button" class="cancel-edit-task-button">Cancel</button>
                </div>
            </fieldset>
        </form>
    `;

    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);

    addProjectSelectOptions('edit-project');

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

    const editTaskForm = document.getElementById('edit-task-form');

    editTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        editTask(task, projects[findProjectIndex(task.project)].taskList);
        closeEditTaskForm();
        loadAllTasks(projects[findProjectIndex(task.project)].taskList);
    });

    const cancelEditButton = document.querySelector('.cancel-edit-task-button');
    cancelEditButton.addEventListener('click', closeEditTaskForm);
}

function closeEditTaskForm() {
    let taskForm = document.getElementById("edit-task-form");
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    taskForm.remove();
}

function openTaskForm() {
    let taskForm = document.getElementById("add-task-form");
    let overlay = document.getElementById('overlay');
    addProjectSelectOptions('project');
    taskForm.classList.add('open-add-task-form');
    overlay.style.display = 'block';
}

function closeTaskForm() {
    let taskForm = document.getElementById("add-task-form");
    let overlay = document.getElementById('overlay');
    let selectMenu = document.getElementById('project');
    taskForm.reset();
    selectMenu.innerHTML = '';
    taskForm.classList.remove('open-add-task-form');
    overlay.style.display = 'none';
}

function addProjectSelectOptions(selectId) {
    const select = document.getElementById(selectId);

    for (const project of projects) {
        const option = document.createElement("option");
        option.value = project.name;
        option.textContent = project.name;
        select.appendChild(option);
    }
}

function loadAddTaskForm() {
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
                    <option value="Low">Low</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="High">High</option>
                </select>

                <label for="project">Project</label>
                <select id="project" name="project">

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


export { loadAddTaskForm , loadAllTasks , openTaskForm , closeTaskForm , openProjectForm };