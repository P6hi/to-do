import { createProject } from './createProject';
import { addToProjectList } from './addToProjectList';

const projects = [];
export function projectCreation(title) {
    const name = title;
    const proj = createProject(name);
    addToProjectList(projects, proj);
    console.log(projects);
}