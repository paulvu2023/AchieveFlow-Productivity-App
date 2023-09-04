import "./styles.css";
import { openTaskForm, closeTaskForm, createTask } from "./taskForm";

document.querySelector('.add-task').addEventListener('click', openTaskForm);
document.querySelector('.cancel-task-button').addEventListener('click', closeTaskForm);
document.getElementById('add-task-form').addEventListener('submit', createTask);

