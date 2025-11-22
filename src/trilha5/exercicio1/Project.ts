import { TaskManager } from "./TaskManager.js";

export class Project extends TaskManager {

    addTask(task: string): void {
        this.tasks.add(`(Projeto) ${task}`);
    }
}

