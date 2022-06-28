import './styles/main.scss';
import { projectCreation } from './modules/projectCreation';

const projects = [];
const projCreate = projectCreation;
const createBtn = document.querySelector('#create-project');

createBtn.addEventListener('click', () => {
    const title = prompt('Name of your project?', '');
    projCreate(projects, title);
})