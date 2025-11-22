import { TaskManager } from "./TaskManager.js";
export class DailyTasks extends TaskManager {
    addTask(task) {
        this.tasks.add(`(Diária) ${task}`);
    }
}
//# sourceMappingURL=DailyTasks.js.map