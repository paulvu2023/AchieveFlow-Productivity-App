import { projects, createProject } from "./task";
import { loadProjectsToSidebar } from "./sidebar";

function openProjectForm() {
    const container = document.querySelector('.project-container');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const formHTML = `
        <div class="project-form">
            <form class="add-project-form" id="add-project-form">
                <fieldset>
                    <label for="project-name">Project Name</label>
                    <input type="text" id="project-name" name="project-name" autocomplete="off" maxlength="15" required spellcheck="false">
                    <div>
                        <button type="submit" class="add-project-button">Add Project</button>
                        <button type="button" class="cancel-project-button">Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', formHTML);
    container.appendChild(overlay);

    const projectForm = document.getElementById('add-project-form');
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectName = document.getElementById('project-name').value;
        createProject(projectName);
        closeProjectForm();
        loadProjectsToSidebar();
    });

    const cancelButton = document.querySelector('.cancel-project-button');
    cancelButton.addEventListener('click', closeProjectForm);
}

function closeProjectForm() {
    const container = document.querySelector('.project-container');
    container.innerHTML = '';
}

export {
    openProjectForm,
    closeProjectForm
};