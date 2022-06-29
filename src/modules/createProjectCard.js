import { elementCreator } from "./elementCreator";
import { removeProject } from "./removeProject";
import { taskCreation } from "./taskCreation";

export function createProjectCard(projectList, project, index) {
    const main = document.querySelector('main');
    const container = elementCreator('div', 'project-container');
    const projectHeader = elementCreator('h2', 'project-header', `Project: ${project.title}`);
    const removeBtn = elementCreator('button', 'remove-btn', 'Delete Project');
    const addTaskBtn = elementCreator('button', 'add-btn', 'Add a task');
    container.append(projectHeader);
    container.append(addTaskBtn);
    container.append(removeBtn);
    addTaskBtn.addEventListener('click', () => {
        taskCreation(container, project);
    })
    removeBtn.addEventListener('click', () => {
        removeProject(projectList, index, container);
    });
    main.append(container);
}