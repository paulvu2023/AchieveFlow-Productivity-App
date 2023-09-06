const taskList = [];

class Task {
    constructor(taskName, description, dueDate, priority, project) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
        this.project = project;
    }
}

function deleteTask(taskName) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskName == taskList[i].taskName) {
            taskList.splice(i, 1);
        }
    }
}

function createTask(event) {
    event.preventDefault();
    
    let taskForm = document.getElementById("add-task-form");
    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;

    const newTask = new Task(taskName, description, dueDate, priority, project);
    taskList.push(newTask);
    taskForm.reset();

    closeTaskForm();
    addAllTasksToDOM(taskList);
}

function editTask(event, task) {
    event.preventDefault();
//     for (let i = 0; i < taskList.length; i++) {
//         if (taskList[i])
//     }
}

export { Task , deleteTask , createTask, editTask, taskList };