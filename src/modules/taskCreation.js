import { taskCreator } from "./taskCreator";
import { createTaskHTML } from "./createTaskHTML";
import { addToProject } from "./addToProject";
import { createTaskForm } from "./createTaskForm";

export function taskCreation(projectList, projectContainer, project) {

    const taskSubmit = createTaskForm();
    taskSubmit.classList.add('visible');
    taskSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        const projList = projectList;
        const projContainer = projectContainer;
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
        
        let taskIndex = addToProject(project, task);
        createTaskHTML(projList, projContainer, project, task, taskIndex);
        localStorage.setItem('projectList', JSON.stringify(projectList));
        
        taskSubmit.classList.remove('visible');
        taskSubmit.reset();
        taskSubmit.remove();
    });
}