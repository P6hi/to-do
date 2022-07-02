import { elementCreator } from './elementCreator'
import { removeTask } from './removeTask'

export function createTaskHTML (projectList, projContainer, project, task, taskIndex) {
  const taskContainer = elementCreator('div', 'task-container')
  const taskList = elementCreator('ul', 'task-header')
  const taskTitle = elementCreator('h3', 'task-header', task.title)
  const desc = elementCreator('li', 'task-desc', task.description)
  const dueDate = elementCreator('li', 'task-due-date', task.dueDate)
  const priority = elementCreator('li', 'task-priority', task.priority)
  const removeBtn = elementCreator('button', 'task-remove-btn', 'Remove Task')
  taskContainer.append(taskList)
  taskList.append(taskTitle)
  taskList.append(desc)
  taskList.append(dueDate)
  taskList.append(priority)
  taskContainer.append(removeBtn)
  projContainer.append(taskContainer)
  removeBtn.addEventListener('click', () => {
    removeTask(projectList, project, taskContainer, taskIndex)
  })
}
