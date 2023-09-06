import { taskList } from './taskForm';

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

export { Task , deleteTask };