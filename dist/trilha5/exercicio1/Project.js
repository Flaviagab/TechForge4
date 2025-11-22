import { TaskManager } from "./TaskManager.js";
export class Project extends TaskManager {
    addTask(task) {
        this.tasks.add(`(Projeto) ${task}`);
    }
}
//# sourceMappingURL=Project.js.map