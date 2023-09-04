import "./styles.css";
import { toDoItem } from "./toDoItems";
import { openTaskForm, closeTaskForm } from "./taskForm";

document.querySelector('.add-task').addEventListener('click', openTaskForm);
document.querySelector('.cancel-task-button').addEventListener('click', closeTaskForm);
