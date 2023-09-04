let taskForm = document.getElementById("add-task-form");
let overlay = document.getElementById('overlay');


function openTaskForm() {
    taskForm.classList.add('open-add-task-form');
    overlay.style.display = 'block';
}

function closeTaskForm() {
    taskForm.classList.remove('open-add-task-form');
    overlay.style.display = 'none';
}

export { openTaskForm , closeTaskForm };