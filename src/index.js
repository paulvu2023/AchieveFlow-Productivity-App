import "./styles.css";
import { toDoItem } from "./toDoItems";

let taskForm = document.getElementById("add-task-form");
let overlay = document.getElementById('overlay');

document.querySelector('.add-task').addEventListener('click', openTaskForm);
document.querySelector('.cancel-task-button').addEventListener('click', closeTaskForm);

function openTaskForm() {
    taskForm.classList.add('open-add-task-form');
    overlay.style.display = 'block';
}

function closeTaskForm() {
    taskForm.classList.remove('open-add-task-form');
    overlay.style.display = 'none';
}