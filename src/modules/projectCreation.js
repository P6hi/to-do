import { createProject } from './createProject'
import { addToProjectList } from './addToProjectList'
import { createProjectCard } from './createProjectCard'

export function projectCreation (projectList, title) {
  const name = title
  const proj = createProject(name)
  addToProjectList(projectList, proj)
  createProjectCard(projectList, proj, projectList.indexOf(proj))
}
