export function removeTask(project, container) {
    project.tasks.splice(0, project.tasks.length);
    console.log(project);
    container.remove();
}