function openTaskForm() {
    let taskForm = document.getElementById("add-task-form");
    let overlay = document.getElementById('overlay');
    taskForm.classList.add('open-add-task-form');
    overlay.style.display = 'block';
}

function closeTaskForm() {
    let taskForm = document.getElementById("add-task-form");
    let overlay = document.getElementById('overlay');
    taskForm.reset();
    taskForm.classList.remove('open-add-task-form');
    overlay.style.display = 'none';
}

export { openTaskForm , closeTaskForm };