export function addToProject (project, task) {
  project.tasks.push(task)
  return project.tasks.indexOf(task)
}
