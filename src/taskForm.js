import { Task } from "./task";

const taskList = [];

let taskForm = document.getElementById("add-task-form");
let overlay = document.getElementById('overlay');

function openTaskForm() {
    let taskForm = document.getElementById("add-task-form");
    let overlay = document.getElementById('overlay');
    taskForm.classList.add('open-add-task-form');
    overlay.style.display = 'block';
}

function closeTaskForm() {
    let taskForm = document.getElementById("add-task-form");
    let overlay = document.getElementById('overlay');
    taskForm.classList.remove('open-add-task-form');
    overlay.style.display = 'none';
}

function createTask(event) {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;

    const newTask = new Task(taskName, description, dueDate, priority, project);
    taskList.push(newTask);
    taskForm.reset();
}

export { openTaskForm , closeTaskForm , createTask , taskList };