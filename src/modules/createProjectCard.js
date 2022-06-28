import { elementCreator } from "./elementCreator";
import { removeProject } from "./removeProject";

export function createProjectCard(projectList, project, index) {
    const container = elementCreator('div', 'project-container');
    const projectHeader = elementCreator('h2', 'project-header', project.title);
    const removeBtn = elementCreator('button', 'remove-btn', 'Delete Project');
    const addTaskBtn = elementCreator('button', 'add-btn', 'Add a task');
    container.append(projectHeader);
    container.append(removeBtn);
    removeBtn.addEventListener('click', () => {
        removeProject(projectList, index, container);
    });
    document.body.append(container);
}