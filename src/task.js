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

export { Task };