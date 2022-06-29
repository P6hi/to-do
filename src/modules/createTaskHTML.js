import { elementCreator } from "./elementCreator";

export function createTaskHTML(projContainer, task) {
    const taskContainer = elementCreator('div', 'task-container');
    const titleHeader = elementCreator('ul', 'task-header', task.title);
    const desc = elementCreator('li', 'task-desc', task.description);
    const dueDate = elementCreator('li', 'task-due-date', task.dueDate);
    const priority = elementCreator('li', 'task-priority', task.priority);
    taskContainer.append(titleHeader);
    titleHeader.append(desc);
    titleHeader.append(dueDate);
    titleHeader.append(priority);
    projContainer.append(taskContainer);
}