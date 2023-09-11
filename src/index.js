import "./styles.css";
import { loadAddTaskForm , openTaskForm, closeTaskForm , openProjectForm , loadTodayTasks,
         selectActiveSidebarButton, loadAllTasklists, loadWeekTasks , loadImportantTasks ,
         loadNotesPage } from "./display";
import { createTask , createProject } from "./task";

document.addEventListener("DOMContentLoaded", function () {
    createProject("General");
    loadAddTaskForm();
    selectActiveSidebarButton();
    document.querySelector('.add-task').addEventListener('click', openTaskForm);
    document.querySelector('.cancel-task-button').addEventListener('click', closeTaskForm);
    document.getElementById('add-task-form').addEventListener('submit', createTask);
    document.querySelector('.projects').addEventListener('click', openProjectForm);
    document.querySelector('.all').addEventListener('click', loadAllTasklists);
    document.querySelector('.today').addEventListener('click', loadTodayTasks);
    document.querySelector('.week').addEventListener('click', loadWeekTasks);
    document.querySelector('.important').addEventListener('click', loadImportantTasks);
    document.querySelector('.notes').addEventListener('click', loadNotesPage);
});

