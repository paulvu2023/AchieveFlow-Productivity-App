import { deleteTask, editTask, projects, findProjectIndex, createProject , deleteProject } from './task';
import { isThisWeek, isToday, parseISO } from 'date-fns';

function clearTasks() {
    document.querySelector('.task-list').innerHTML = '';
}

function reloadSelectedSidebarPage() {
    const selectedSidebarPage = document.querySelector('.active').classList;
    if (selectedSidebarPage.contains('all')) {
        loadAllTasklists();
    } else if (selectedSidebarPage.contains('today')) {
        loadTodayTasks();
    } else if (selectedSidebarPage.contains('week')) {
        loadWeekTasks();
    } else if (selectedSidebarPage.contains('important')) {
        loadImportantTasks();
    }
}

function loadNotesFromStorage() {
    document.querySelector('.notes-container').innerHTML = localStorage.getItem("notes");
}

function updateStorageForNotes() {
    localStorage.setItem("notes", document.querySelector('.notes-container').innerHTML);
}

function loadNotesPage() {
    clearTasks();
    const container = document.querySelector('.task-list');
    const notesContainer = document.createElement('div');

    notesContainer.classList.add('notes-container');
    document.querySelector('.add-task').style.display = 'none';
    const addNotesButton = document.createElement('button');
    addNotesButton.innerHTML = '<i class="fa-solid fa-plus fa-beat-fade"></i>Add Notes';
    addNotesButton.classList.toggle('add-notes');
    container.append(addNotesButton);
    container.append(notesContainer);

    loadNotesFromStorage();
    updateNotes();
    addNotesButton.addEventListener('click', addNote);
}

function addNote() {
    const notesContainer = document.querySelector('.notes-container');
    const noteMiniContainer = document.createElement('div');
    noteMiniContainer.classList.add('note-mini-container');
    noteMiniContainer.innerHTML = `
    <p contenteditable="true" class="input-box" spellcheck="false"></p>
    <button class="delete-note"><i class="fa-regular fa-trash-can"></i></button>
    `
    notesContainer.append(noteMiniContainer);
    updateNotes();
}

function updateNotes() {
    const notesContainer = document.querySelector('.notes-container');
    notesContainer.addEventListener('click', function (e) {
        if (e.target.tagName === 'I' && e.target.classList.contains('fa-trash-can')) {
            e.target.parentElement.parentElement.remove();
            updateStorageForNotes();
        }
        else if (e.target.tagName === 'P') {
            let notes = document.querySelectorAll('.input-box');
            notes.forEach(note => {
                note.onkeyup = function () {
                    updateStorageForNotes();
                }
            });
        }
    });
}

function selectActiveProjectButton() {
    const projectButtons = document.querySelectorAll('.projects-menu > button');
    projectButtons.forEach(projectButton => {
        projectButton.addEventListener('click', () => {
            document.querySelector('.active:not(.sidebar-project)')?.classList.remove('active');
            document.querySelector('.sidebar-project.active')?.classList.remove('active');
            projectButton.classList.add('active');
        });
    });
}

function selectActiveSidebarButton() {
    const sidebarButtons = document.querySelectorAll('nav > *:not(.projects-menu)');
    sidebarButtons.forEach(sidebarButton => {
        sidebarButton.addEventListener('click', () => {
            document.querySelector('.active:not(.sidebar-project)')?.classList.remove('active');
            document.querySelector('.sidebar-project.active')?.classList.remove('active');
            sidebarButton.classList.add('active');
            switchAddTaskButton(sidebarButton);
        });
    });
}

function switchAddTaskButton(button) {
    if (button.classList.contains('notes')) {

    }
    else {
        document.querySelector('.add-task').style.display = 'flex';
        if (document.querySelector('.add-notes')) {
            document.querySelector('.add-notes').remove();
        }
    }
}

function loadAllTasklists() {
    clearTasks();
    projects.forEach(project => loadTasklist(project.taskList));
}

function loadTasklist(taskList) {
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

    const taskList = document.querySelector('.task-list');
    taskList.appendChild(taskElement);

    // Map priority values to border colors
    const borderColorMap = {
        'Low': 'green',
        'Medium': 'orange',
        'High': 'red',
    };

    const borderColor = borderColorMap[task.priority];
    if (borderColor) {
        taskElement.style.borderColor = borderColor;
    }

    const checkbox = document.getElementById(task.taskName);

    if (task.checked == true) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
    
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            task.checked = true;
            localStorage.setItem('projects', JSON.stringify(projects));
        } else {
            task.checked = false;
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    })

    const detailsButton = document.getElementById(`${task.taskName}-details`);
    detailsButton.addEventListener('click', () => {
        displayDetails(task);
    });

    const editButton = document.getElementById(`${task.taskName}-edit`);
    editButton.addEventListener('click', () => {
        openEditTaskForm(task);
    });

    const deleteButton = document.getElementById(`${task.taskName}-delete`);
    deleteButton.addEventListener('click', () => {
        deleteTask(task);
        
    });
}

function loadImportantTasks() {
    const importantList = []
    for (const project of projects) {
        for (let i = 0; i < project.taskList.length; i++) {
            if (project.taskList[i].priority == 'High') {
                importantList.push(project.taskList[i]);
            }
        }
    }
    clearTasks();
    if (importantList.length > 0) {
        loadTasklist(importantList);
    }
}

function loadWeekTasks() {
    const weekList = []
    for (const project of projects) {
        for (let i = 0; i < project.taskList.length; i++) {
            if (isThisWeek(parseISO(project.taskList[i].dueDate)) == true) {
                weekList.push(project.taskList[i]);
            }
        }
    }
    clearTasks();
    if (weekList.length > 0) {
        loadTasklist(weekList);
    }
}

function loadTodayTasks() {
    const todayList = []
    for (const project of projects) {
        for (let i = 0; i < project.taskList.length; i++) {
            if (isToday(parseISO(project.taskList[i].dueDate)) == true) {
                todayList.push(project.taskList[i]);
            }
        }
    }
    clearTasks();
    if (todayList.length > 0) {
        loadTasklist(todayList);
    }
}

function loadProjectTasklist(projectName) {
    clearTasks();
    loadTasklist(projects[findProjectIndex(projectName)].taskList);
}

function loadProjectsToSidebar() {
    document.querySelector('.projects-menu').innerHTML = '';
    projects.forEach((project) => {
        addProjectToSidebar(project.name);
    });
    selectActiveProjectButton();
}

function addProjectToSidebar(projectName) {
    const projectsMenu = document.querySelector('.projects-menu');
    const newProjectButton = document.createElement('button');
    newProjectButton.classList.add(`project-${projectName.replace(/ /g, '-')}-button`);
    newProjectButton.classList.add('sidebar-project');
    newProjectButton.textContent = projectName;
    projectsMenu.append(newProjectButton);

    const selectNewProjectButton = document.querySelector(`.project-${projectName.replace(/ /g, '-')}-button`);
    selectNewProjectButton.addEventListener('click', () => {
        if (projects[findProjectIndex(projectName)].taskList.length > 0) {
            loadProjectTasklist(projectName);
        } else {
            clearTasks();
            const container = document.querySelector('.task-list');
            const deleteProjectContainer = document.createElement('div');
            const header = document.createElement('div');
            const subheader = document.createElement('div');
            const deleteProjectButton = document.createElement('button');

            deleteProjectContainer.classList.add('deleteProjectContainer');
            header.classList.add('deleteProjectHeader');
            subheader.classList.add('deleteProjectSubheader');
            deleteProjectButton.classList.add('deleteProjectButton');

            header.textContent ='Empty Project!';
            subheader.textContent ='Create a new Task or delete Project.';
            deleteProjectButton.textContent = 'DELETE PROJECT';

            deleteProjectContainer.appendChild(header);
            deleteProjectContainer.appendChild(subheader);
            deleteProjectContainer.appendChild(deleteProjectButton);
            container.appendChild(deleteProjectContainer);

            deleteProjectButton.addEventListener('click', () => {
                deleteProject(projectName);
                loadAllTasklists();
                loadProjectsToSidebar();
            });
        }  
    });
}

function openProjectForm() {
    const container = document.querySelector('.project-container');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const formHTML = `
        <div class="project-form">
            <form class="add-project-form" id="add-project-form">
                <fieldset>
                    <label for="project-name">Project Name</label>
                    <input type="text" id="project-name" name="project-name" autocomplete="off" maxlength="15" required spellcheck="false">
                    <div>
                        <button type="submit" class="add-project-button">Add Project</button>
                        <button type="button" class="cancel-project-button">Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);

    const projectForm = document.getElementById('add-project-form');
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectName = document.getElementById('project-name').value;
        createProject(projectName);
        closeProjectForm();
        loadProjectsToSidebar();
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

    const detailsHTML = `
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
    `;

    container.insertAdjacentHTML('beforeend', detailsHTML);

    const xButton = document.querySelector('.x-button');
    xButton.addEventListener('click', closeDetails);
}

function closeDetails() {
    let container = document.querySelector('.details-container');
    let overlay = document.getElementById('overlay');
    container.remove();
    overlay.style.display = 'none';
}

function openEditTaskForm(task) {
    const container = document.querySelector('.main-right');
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    // Create the edit task form HTML
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

    // Append the edit task form HTML to the container
    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);

    // Populate project select options
    addProjectSelectOptions('edit-project');

    // Set the selected priority and project based on the task
    setSelectOption('edit-priority', task.priority);
    setSelectOption('edit-project', task.project);

    // Handle form submission
    const editTaskForm = document.getElementById('edit-task-form');
    editTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        editTask(task, projects[findProjectIndex(task.project)].taskList);
        closeEditTaskForm();
        clearTasks();
        loadTasklist(projects[findProjectIndex(task.project)].taskList);
    });

    // Handle form cancellation
    const cancelEditButton = document.querySelector('.cancel-edit-task-button');
    cancelEditButton.addEventListener('click', closeEditTaskForm);
}

function setSelectOption(selectId, value) {
    const selectElement = document.getElementById(selectId);
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            selectElement.options[i].selected = true;
            break;
        }
    }
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


export {
    loadAddTaskForm, loadTasklist, openTaskForm, closeTaskForm, openProjectForm,
    loadTodayTasks, selectActiveSidebarButton, loadAllTasklists, loadWeekTasks,
    loadImportantTasks, clearTasks, loadNotesPage, reloadSelectedSidebarPage,
    loadProjectsToSidebar, selectActiveProjectButton
};