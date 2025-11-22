export class TaskManager {
    constructor() {
        this.tasks = new Set();
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
//# sourceMappingURL=TaskManager.js.map