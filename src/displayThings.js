import { taskList } from "./taskForm";

function displayAll() {
    const form = document.createElement('form');
    form.className = 'add-task-form';
    form.id = 'add-task-form';

    const heading = document.createElement('h1');
    heading.textContent = 'Add Task';

    const fieldset = document.createElement('fieldset');

    const taskNameLabel = document.createElement('label');
    taskNameLabel.textContent = 'Task Name';
    taskNameLabel.htmlFor = 'task-name';

    const taskNameInput = document.createElement('input');
    taskNameInput.autocomplete = 'off';
    taskNameInput.required = true;
    taskNameInput.type = 'text';
    taskNameInput.id = 'task-name';
    taskNameInput.name = 'task-name';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    descriptionLabel.htmlFor = 'description';

    const descriptionInput = document.createElement('input');
    descriptionInput.autocomplete = 'off';
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.name = 'description';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    dueDateLabel.htmlFor = 'due-date';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'due-date';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.htmlFor = 'priority';

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';

    const optionLow = document.createElement('option');
    optionLow.value = 'low';
    optionLow.textContent = 'Low';
    prioritySelect.appendChild(optionLow);

    const optionMedium = document.createElement('option');
    optionMedium.value = 'medium';
    optionMedium.selected = true;
    optionMedium.textContent = 'Medium';
    prioritySelect.appendChild(optionMedium);

    const optionHigh = document.createElement('option');
    optionHigh.value = 'high';
    optionHigh.textContent = 'High';
    prioritySelect.appendChild(optionHigh);

    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project';
    projectLabel.htmlFor = 'project';

    const projectSelect = document.createElement('select');
    projectSelect.id = 'project';
    projectSelect.name = 'project';

    const projectOption = document.createElement('option');
    projectOption.value = 'general';
    projectOption.textContent = 'General';
    projectSelect.appendChild(projectOption);

    const buttonsDiv = document.createElement('div');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'add-task-button';
    submitButton.textContent = 'Add Task';

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.className = 'cancel-task-button';
    cancelButton.textContent = 'Cancel';

    buttonsDiv.appendChild(submitButton);
    buttonsDiv.appendChild(cancelButton);

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.className = 'overlay';

    fieldset.appendChild(taskNameLabel);
    fieldset.appendChild(taskNameInput);
    fieldset.appendChild(descriptionLabel);
    fieldset.appendChild(descriptionInput);
    fieldset.appendChild(dueDateLabel);
    fieldset.appendChild(dueDateInput);
    fieldset.appendChild(priorityLabel);
    fieldset.appendChild(prioritySelect);
    fieldset.appendChild(projectLabel);
    fieldset.appendChild(projectSelect);
    fieldset.appendChild(buttonsDiv);

    form.appendChild(heading);
    form.appendChild(fieldset);

    const container = document.querySelector('.main-right');
    container.appendChild(form);
    container.appendChild(overlay);
}

export { displayAll };