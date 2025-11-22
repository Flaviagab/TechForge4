import { TaskManager } from "./TaskManager.js";

export class DailyTasks extends TaskManager {

    addTask(task: string): void {
        this.tasks.add(`(Diária) ${task}`);
    }
}
