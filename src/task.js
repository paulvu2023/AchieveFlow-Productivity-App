import { loadTasklist , closeTaskForm , clearTasks , reloadSelectedSidebarPage } from "./display";

let projects = [];

class Task {
    constructor(taskName, description, dueDate, priority, project) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
        this.project = project;
        projects[findProjectIndex(project)].taskList.push(this);
    }
}

class Project {
    constructor(projectName){
        this.name = projectName;
        this.taskList = [];
    }
}

function loadProjectsIfExists() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        projects = JSON.parse(storedProjects);
    } else {
        createProject('General');
    }
}

function createProject(projectName) {
    const newProject = new Project(projectName);
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
}

function findProjectIndex(projectName) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == projectName) {
            return i;
        }
    }
    return -1;
}

function deleteTask(task) {
    const taskList = projects[findProjectIndex(task.project)].taskList;

    for (let i = 0; i < taskList.length; i++) {
        if (task.taskName == taskList[i].taskName) {
            taskList.splice(i, 1);
        }
    }
    localStorage.setItem('projects', JSON.stringify(projects));
    reloadSelectedSidebarPage();
}

function createTask(event) {
    event.preventDefault();
    
    let taskForm = document.getElementById("add-task-form");
    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;

    const newTask = new Task(taskName, description, dueDate, priority, project);
    taskForm.reset();

    closeTaskForm();
    clearTasks();
    loadTasklist(projects[findProjectIndex(project)].taskList);
    localStorage.setItem('projects', JSON.stringify(projects));
}

function editTask(task, taskList) {
    const taskName = document.getElementById('edit-task-name').value;
    const description = document.getElementById('edit-description').value;
    const dueDate = document.getElementById('edit-due-date').value;
    const priority = document.getElementById('edit-priority').value;
    const project = document.getElementById('edit-project').value;

    for (let i = 0 ; i < taskList.length; i++) {
        if (taskList[i].taskName == task.taskName) {
            taskList[i].taskName = taskName;
            taskList[i].description = description;
            taskList[i].dueDate = dueDate;
            taskList[i].priority = priority;
            taskList[i].project = project;

            // Add Task to new Project's TaskList
            projects[findProjectIndex(project)].taskList.push(taskList[i]);
        }
    }

    // Delete Task from former project's TaskList
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].taskName === taskName) {
            taskList.splice(i, 1);
            break;
        }
    }

    localStorage.setItem('projects', JSON.stringify(projects));
}

export { Task , deleteTask , createTask, createProject, editTask, projects , findProjectIndex , 
         loadProjectsIfExists };