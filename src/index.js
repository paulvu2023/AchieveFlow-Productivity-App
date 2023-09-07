import "./styles.css";
import { displayAddTaskForm , openTaskForm, closeTaskForm } from "./display";
import { createTask } from "./task";

document.addEventListener("DOMContentLoaded", function () {
    displayAddTaskForm();
    document.querySelector('.add-task').addEventListener('click', openTaskForm);
    document.querySelector('.cancel-task-button').addEventListener('click', closeTaskForm);
    document.getElementById('add-task-form').addEventListener('submit', createTask);
});

