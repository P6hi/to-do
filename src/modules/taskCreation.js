import { taskCreator } from "./taskCreator";
import { createTaskHTML } from "./createTaskHTML";
import { addToProject } from "./addToProject";

export function taskCreation(projectContainer, project) {
    const proj = project;
    const projContainer = projectContainer;
    const taskSubmit = document.querySelector('.task-form');
    if (taskSubmit.classList.contains('visible')) {
        taskSubmit.classList.remove('visible');
    } else {
        taskSubmit.classList.add('visible');
    }

    taskSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.querySelector('#task');
        const description = document.querySelector('#desc');
        const dueDate = document.querySelector('#due-date');
        const radioBtns = document.querySelectorAll('input[type="radio"]');
        const priority = (function() { 
            for (let i = 0; i < radioBtns.length; i++) {
                if (radioBtns[i].checked) {
                    return (radioBtns[i].value);
                }
            }
        })();
        const task = taskCreator(title.value + ':', `Description: ${description.value}`, `Due date: ${dueDate.value}`, `Priority: ${priority}`);
        addToProject(proj, task);
        createTaskHTML(projContainer, proj, task);
        taskSubmit.classList.remove('visible');
        title.value = '';
        description.value = '';
        dueDate.value = '';
        for (let j = 0; j < radioBtns.length; i++) {
            radioBtns[i].checked = false;
        }
    });
}