export function removeTask(projectList, project, container, taskIndex) {
    project.tasks.splice(taskIndex, 1);
    container.remove();
    localStorage.setItem('projectList', JSON.stringify(projectList));
}