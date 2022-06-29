import { elementCreator } from "./elementCreator";
import { removeTask } from "./removeTask";

export function createTaskHTML(projContainer, project, task) {
    const taskContainer = elementCreator('div', 'task-container');
    const titleHeader = elementCreator('ul', 'task-header', task.title);
    const desc = elementCreator('li', 'task-desc', task.description);
    const dueDate = elementCreator('li', 'task-due-date', task.dueDate);
    const priority = elementCreator('li', 'task-priority', task.priority);
    const removeBtn = elementCreator('button', 'task-remove-btn', 'Remove Task');
    taskContainer.append(titleHeader);
    titleHeader.append(desc);
    titleHeader.append(dueDate);
    titleHeader.append(priority);
    taskContainer.append(removeBtn);
    projContainer.append(taskContainer);
    removeBtn.addEventListener('click', () => {
        removeTask(project, taskContainer);
    });
}