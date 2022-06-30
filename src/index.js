import './styles/main.scss';
import { projectCreation } from './modules/projectCreation';

const projects = [];
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