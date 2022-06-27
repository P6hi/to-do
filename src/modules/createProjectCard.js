import { elementCreator } from "./elementCreator";

export function createProjectCard(p) {
    const container = elementCreator('div', 'project-container');
    const projectHeader = elementCreator('h2', 'project-header', p.title);
    container.append(projectHeader);
    return container;
}