import { taskCreator } from "./taskCreator";
import { createTaskHTML } from "./createTaskHTML";
import { addToProject } from "./addToProject";

export function taskCreation(projectContainer, project) {
    const proj = project;
    const projContainer = projectContainer;
    const title = prompt('Task name:', '');
    const description = prompt('Description:', '');
    const dueDate = prompt('Due date:', '');
    const priority = prompt('Priority:', '');
    const task = taskCreator(title, description, dueDate, priority);
    addToProject(proj, task);
    createTaskHTML(projContainer, proj, task);
}