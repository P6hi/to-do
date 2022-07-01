export function removeProject(projectList, index, cont) {
    projectList.splice(index, 1);
    cont.remove();
    localStorage.setItem('projectList', JSON.stringify(projectList));
}