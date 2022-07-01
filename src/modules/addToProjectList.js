export function addToProjectList(projectList, project) {
    projectList.push(project);
    localStorage.setItem('projectList', JSON.stringify(projectList));
}