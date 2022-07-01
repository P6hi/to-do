import './styles/main.scss';
import { projectCreation } from './modules/projectCreation';
import { createProjectCard } from './modules/createProjectCard';
import { createTaskHTML } from './modules/createTaskHTML';

let projects = [];
const projCreate = projectCreation;
const createBtn = document.querySelector('#create-project');

createBtn.addEventListener('click', () => {
    const formSubmit = document.querySelector('.project-form');
    if (formSubmit.classList.contains('visible')) {
        formSubmit.classList.remove('visible');
    } else {
        formSubmit.classList.add('visible');
    }
    formSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('#title');
        if (input.value) {
            projCreate(projects, input.value);
            input.value = '';
            formSubmit.classList.remove('visible');
        }
    });
});

window.addEventListener('load', () => {
    const updater = (function () { 
        projects = JSON.parse(localStorage.getItem('projectList'));
        if (projects && projects.length > 0) {
            for (let i = 0; i < projects.length; i++) {
                let container = createProjectCard(projects, projects[i], projects.indexOf(projects[i]));
                for (let j = 0; j < projects[i].tasks.length; j++) {
                    createTaskHTML(projects, container, projects[i], projects[i].tasks[j]);
                }
            }
        } else {
            projects = [];
        }
    })();
});