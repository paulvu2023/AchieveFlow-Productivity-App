import { deleteProject , projects, findProjectIndex} from "./task";
import { loadAllTasklists, loadTodayTasks, loadWeekTasks, loadImportantTasks, loadProjectTasklist, clearTasks } from "./task-dom";
import { isToday, isThisWeek , parseISO} from "date-fns";

function reloadSelectedSidebarPage(projectName = '') {
    const selectedSidebarPage = document.querySelector('.active').classList;
    
    if (selectedSidebarPage.contains('all')) {
        loadAllTasklists();
    } else if (selectedSidebarPage.contains('today')) {
        loadTodayTasks();
    } else if (selectedSidebarPage.contains('week')) {
        loadWeekTasks();
    } else if (selectedSidebarPage.contains('important')) {
        loadImportantTasks();
    } else {
        loadProjectTasklist(projectName);
    }
}

function updateAllCounters() {
    loadProjectsToSidebar();
    updateAllCounter();
    updateTodayCounter();
    updateWeekCounter();
    updateImportantCounter();
}

function updateAllCounter() {
    const allButton = document.querySelector('.all');
    let allCount = 0;
    for (const project of projects) {
        for (let i = 0; i < project.taskList.length; i++) {
            if (!(project.taskList[i].checked)){
                allCount++;
            }
        }
    }

    if (allButton) {
        const spanElement = allButton.querySelector('span');
        if (spanElement) {
          allButton.removeChild(spanElement);
        }
    }

    const countSpan = document.createElement('span');
    countSpan.textContent = allCount;
    allButton.append(countSpan);
}

function updateTodayCounter() {
    const todayButton = document.querySelector('.today');
    let todayCount = 0;
    for (const project of projects) {
        for (let i = 0; i < project.taskList.length; i++) {
            if (isToday(parseISO(project.taskList[i].dueDate)) == true) {
                todayCount++;
            }
        }
    }

    if (todayButton) {
        const spanElement = todayButton.querySelector('span');
        if (spanElement) {
            todayButton.removeChild(spanElement);
        }
    }

    const countSpan = document.createElement('span');
    countSpan.textContent = todayCount;
    todayButton.append(countSpan);
}

function updateWeekCounter() {
    const weekButton = document.querySelector('.week');
    let weekCount = 0;
    for (const project of projects) {
        for (let i = 0; i < project.taskList.length; i++) {
            if (isThisWeek(parseISO(project.taskList[i].dueDate)) == true) {
                weekCount++;
            }
        }
    }

    if (weekButton) {
        const spanElement = weekButton.querySelector('span');
        if (spanElement) {
          weekButton.removeChild(spanElement);
        }
    }

    const countSpan = document.createElement('span');
    countSpan.textContent = weekCount;
    weekButton.append(countSpan);
}

function updateImportantCounter() {
    const importantButton = document.querySelector('.important');
    let importantCount = 0;
    for (const project of projects) {
        for (let i = 0; i < project.taskList.length; i++) {
            if (project.taskList[i].priority == 'High') {
                importantCount++;
            }
        }
    }

    if (importantButton) {
        const spanElement = importantButton.querySelector('span');
        if (spanElement) {
          importantButton.removeChild(spanElement);
        }
    }

    const countSpan = document.createElement('span');
    countSpan.textContent = importantCount;
    importantButton.append(countSpan);
}

function selectActiveProjectButton() {
    const projectButtons = document.querySelectorAll('.projects-menu > button');
    projectButtons.forEach(projectButton => {
        projectButton.addEventListener('click', () => {
            document.querySelector('.active:not(.sidebar-project)')?.classList.remove('active');
            document.querySelector('.sidebar-project.active')?.classList.remove('active');
            projectButton.classList.add('active');
        });
    });
}

function selectActiveSidebarButton() {
    const sidebarButtons = document.querySelectorAll('.normal-categories button');
    sidebarButtons.forEach(sidebarButton => {
        sidebarButton.addEventListener('click', () => {
            document.querySelector('.active:not(.sidebar-project)')?.classList.remove('active');
            document.querySelector('.sidebar-project.active')?.classList.remove('active');
            sidebarButton.classList.add('active');
            switchAddTaskButton(sidebarButton);
        });
    });
}

function switchAddTaskButton(button) {
    if (button.classList.contains('notes')) {

    }
    else {
        document.querySelector('.add-task').style.display = 'flex';
        if (document.querySelector('.add-notes')) {
            document.querySelector('.add-notes').remove();
        }
    }
}

function loadProjectsToSidebar() {
    document.querySelector('.projects-menu').innerHTML = '';
    projects.forEach((project) => {
        addProjectToSidebar(project.name);
    });
    selectActiveProjectButton();
}

function addProjectToSidebar(projectName) {
    const projectsMenu = document.querySelector('.projects-menu');
    const newProjectButton = document.createElement('button');
    newProjectButton.classList.add(`project-${projectName.replace(/ /g, '-')}-button`);
    newProjectButton.classList.add('sidebar-project');
    newProjectButton.textContent = projectName;
    projectsMenu.append(newProjectButton);

    const selectNewProjectButton = document.querySelector(`.project-${projectName.replace(/ /g, '-')}-button`);

    selectNewProjectButton.addEventListener('click', () => {
        if (projects[findProjectIndex(projectName)].taskList.length > 0) {
            loadProjectTasklist(projectName);
        } else {
            clearTasks();
            const container = document.querySelector('.task-list');
            const deleteProjectContainer = document.createElement('div');
            const header = document.createElement('div');
            const subheader = document.createElement('div');
            const deleteProjectButton = document.createElement('button');

            deleteProjectContainer.classList.add('deleteProjectContainer');
            header.classList.add('deleteProjectHeader');
            subheader.classList.add('deleteProjectSubheader');
            deleteProjectButton.classList.add('deleteProjectButton');

            header.textContent ='Empty Project!';
            subheader.textContent ='Create a new Task or delete Project.';
            deleteProjectButton.textContent = 'DELETE PROJECT';

            deleteProjectContainer.appendChild(header);
            deleteProjectContainer.appendChild(subheader);
            deleteProjectContainer.appendChild(deleteProjectButton);
            container.appendChild(deleteProjectContainer);

            deleteProjectButton.addEventListener('click', () => {
                deleteProject(projectName);
                loadAllTasklists();
                loadProjectsToSidebar();
            });
        }  
    });

    const uncheckedCount = calculateUncheckedCount(projects[findProjectIndex(projectName)]);
    const uncheckedCountSpan = document.createElement('span');
    uncheckedCountSpan.textContent = uncheckedCount;
    newProjectButton.appendChild(uncheckedCountSpan);
}

function calculateUncheckedCount(project) {
    const uncheckedTasks = project.taskList.filter(task => !task.checked);
    return uncheckedTasks.length;
}

export {
    reloadSelectedSidebarPage,
    updateAllCounters,
    updateAllCounter,
    updateTodayCounter,
    updateWeekCounter,
    updateImportantCounter,
    selectActiveProjectButton,
    selectActiveSidebarButton,
    switchAddTaskButton,
    loadProjectsToSidebar,
    addProjectToSidebar,
    calculateUncheckedCount,
};
