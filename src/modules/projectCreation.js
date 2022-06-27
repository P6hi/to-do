import { createProject } from './createProject';
import { addToProjectList } from './addToProjectList';

export function projectCreation(projectList, title) {
    const name = title;
    const proj = createProject(name);
    addToProjectList(projectList, proj);
    console.log(projects);
}