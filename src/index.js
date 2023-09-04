import "./styles.css";
import { toDoItem } from "./toDoItems";

let taskForm = document.getElementById("add-task-form");
let addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener('click', openTaskForm);

function openTaskForm() {
    taskForm.classList.add('open-add-task-form');
}

function closeTaskForm() {
    taskForm.classList.remove('open-add-task-form');
}