import "./styles.css";
import { Project, Task, projects, loadProjectsIfExists, createTask} from "./task";
import { loadAddTaskForm, loadAllTasklists, openTaskForm, closeTaskForm, loadTodayTasks, loadWeekTasks, loadImportantTasks } from "./task-dom";
import { selectActiveSidebarButton, selectActiveProjectButton, loadProjectsToSidebar, updateAllCounters} from "./sidebar";
import { loadNotesPage } from "./notes";
import { openProjectForm } from "./project";

const exampleDataExists = localStorage.getItem('exampleData');

if (!exampleDataExists) {
    const today = new Date().toISOString().slice(0, 10);
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().slice(0, 10);

    const fitness = new Project('Fitness');
    const work = new Project('Work');

    projects.push(fitness, work);

    const walk = new Task('Go on walk', 'For 15 Minutes', tomorrow, 'Low', 'Fitness');
    const workout = new Task('Workout at Gym', 'Train Chest, Triceps, and Shoulders', today, 'High', 'Fitness');
    const drinkWater = new Task('Drink water', '16 Cups', today, 'Medium', 'Fitness');
    const read = new Task('Read for 1 hour', 'Read Way Of The Wolf', today, 'Low', 'Work');
    const code = new Task('Code For 5 Hours', 'With 3 breaks for 15 minutes', today, 'High', 'Work');
    const learnBusiness = new Task('Study E-Commerce for 2 hours', 'Learn from Jordan Bown', tomorrow, 'Medium', 'Work');

    localStorage.setItem('exampleData', 'true');

}

document.addEventListener("DOMContentLoaded", function () {
    loadProjectsIfExists();
    loadAddTaskForm();
    selectActiveSidebarButton();
    selectActiveProjectButton();
    document.querySelector('.add-task').addEventListener('click', openTaskForm);
    document.querySelector('.cancel-task-button').addEventListener('click', closeTaskForm);
    document.getElementById('add-task-form').addEventListener('submit', (e) => {
        createTask(e);
        loadProjectsToSidebar();
        updateAllCounters();
    });
    document.querySelector('.projects').addEventListener('click', openProjectForm);
    document.querySelector('.all').addEventListener('click', loadAllTasklists);
    document.querySelector('.today').addEventListener('click', loadTodayTasks);
    document.querySelector('.week').addEventListener('click', loadWeekTasks);
    document.querySelector('.important').addEventListener('click', loadImportantTasks);
    document.querySelector('.notes').addEventListener('click', loadNotesPage);
    loadAllTasklists();
    loadProjectsToSidebar();
    updateAllCounters();
});

