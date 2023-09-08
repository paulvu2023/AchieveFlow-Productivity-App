import { addAllTasksToDOM , closeTaskForm } from "./display";

const projects = [];

class Task {
    constructor(taskName, description, dueDate, priority, project) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
        this.project = project;
        projects[findProjectIndex(project)].addTask(this);
    }
}

class Project {
    constructor(projectName){
        this.name = projectName;
        this.taskList = [];
    }

    addTask(task) {
        this.taskList.push(task);
    }
}

function createProject(projectName) {
    const newProject = new Project(projectName);
    projects.push(newProject);
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

    addAllTasksToDOM(projects[findProjectIndex(project)].taskList);
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
        }
    }
}

export { Task , deleteTask , createTask, createProject, editTask, projects , findProjectIndex };