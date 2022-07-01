/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/addToProject.js":
/*!*************************************!*\
  !*** ./src/modules/addToProject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProject": () => (/* binding */ addToProject)
/* harmony export */ });
function addToProject(project, task) {
    project.tasks.push(task);
    return project.tasks.indexOf(task);
}

/***/ }),

/***/ "./src/modules/addToProjectList.js":
/*!*****************************************!*\
  !*** ./src/modules/addToProjectList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProjectList": () => (/* binding */ addToProjectList)
/* harmony export */ });
function addToProjectList(projectList, project) {
    projectList.push(project);
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(name) {
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }
    return new Project(name);
}

/***/ }),

/***/ "./src/modules/createProjectCard.js":
/*!******************************************!*\
  !*** ./src/modules/createProjectCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/modules/elementCreator.js");
/* harmony import */ var _removeProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeProject */ "./src/modules/removeProject.js");
/* harmony import */ var _taskCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCreation */ "./src/modules/taskCreation.js");




function createProjectCard(projectList, project, index) {
    const main = document.querySelector('main');
    const container = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('div', 'project-container');
    const projectHeader = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('h2', 'project-header', `Project: ${project.title}`);
    const removeBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'remove-btn', '✕');
    const addTaskBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'add-btn', 'Add a task');
    container.append(projectHeader);
    container.append(addTaskBtn);
    container.append(removeBtn);
    addTaskBtn.addEventListener('click', () => {
        (0,_taskCreation__WEBPACK_IMPORTED_MODULE_2__.taskCreation)(projectList, container, project);
    });
    removeBtn.addEventListener('click', () => {
        (0,_removeProject__WEBPACK_IMPORTED_MODULE_1__.removeProject)(projectList, index, container);
    });
    main.append(container);
    return container;
}

/***/ }),

/***/ "./src/modules/createTaskForm.js":
/*!***************************************!*\
  !*** ./src/modules/createTaskForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskForm": () => (/* binding */ createTaskForm)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/modules/elementCreator.js");


function createTaskForm() {

    const main = document.querySelector('main');
    const form = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('form', 'task-form');

    const lableTitle = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('label', undefined, 'Task:');
    lableTitle.setAttribute('for', 'task')

    const lableDesc = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('label', undefined, 'Description:');
    lableDesc.setAttribute('for', 'desc');

    const lableDueDate = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('label', undefined, 'Due date:');
    lableDueDate.setAttribute('for', 'due-date');

    const inputTitle = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'task');
    inputTitle.setAttribute('id', 'task');

    const textAreaDesc = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('textarea');
    textAreaDesc.setAttribute('name', 'desc');
    textAreaDesc.setAttribute('id', 'desc');
    textAreaDesc.setAttribute('cols', '30');
    textAreaDesc.setAttribute('rows', '10');

    const inputDate = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('input');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('name', 'due-date');
    inputDate.setAttribute('id', 'due-date');

    const fieldsetPriority = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('fieldset');
    const legendPriority = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('legend', undefined, 'Priority:');

    const lableLow = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('label', undefined, 'Low');
    lableLow.setAttribute('for', 'low');

    const lableMed = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('label', undefined, 'Medium');
    lableMed.setAttribute('for', 'med');

    const lableHigh = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('label', undefined, 'High');
    lableHigh.setAttribute('for', 'high');

    const inputLow = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('input');
    inputLow.setAttribute('type', 'radio');
    inputLow.setAttribute('id', 'low');
    inputLow.setAttribute('name', 'priority');
    inputLow.setAttribute('value', 'Low');

    const inputMed= (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('input');
    inputMed.setAttribute('type', 'radio');
    inputMed.setAttribute('id', 'med');
    inputMed.setAttribute('name', 'priority');
    inputMed.setAttribute('value', 'Medium');

    const inputHigh = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('input');
    inputHigh.setAttribute('type', 'radio');
    inputHigh.setAttribute('id', 'high');
    inputHigh.setAttribute('name', 'priority');
    inputHigh.setAttribute('value', 'High');

    const submitBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'task-form-submit', 'Submit');
    submitBtn.setAttribute('type', 'submit');

    form.append(lableTitle);
    form.append(inputTitle);
    form.append(lableDesc);
    form.append(textAreaDesc);
    form.append(lableDueDate);
    form.append(inputDate);
    fieldsetPriority.append(legendPriority);
    fieldsetPriority.append(lableLow);
    fieldsetPriority.append(inputLow);
    fieldsetPriority.append(lableMed);
    fieldsetPriority.append(inputMed);
    fieldsetPriority.append(lableHigh);
    fieldsetPriority.append(inputHigh);
    form.append(fieldsetPriority);
    form.append(submitBtn);

    main.append(form);

    return form;
}

/***/ }),

/***/ "./src/modules/createTaskHTML.js":
/*!***************************************!*\
  !*** ./src/modules/createTaskHTML.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskHTML": () => (/* binding */ createTaskHTML)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/modules/elementCreator.js");
/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTask */ "./src/modules/removeTask.js");



function createTaskHTML(projectList, projContainer, project, task, taskIndex) {
    const taskContainer = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('div', 'task-container');
    const taskList = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('ul', 'task-header');
    const taskTitle = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('h3', 'task-header', task.title);
    const desc = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('li', 'task-desc', task.description);
    const dueDate = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('li', 'task-due-date', task.dueDate);
    const priority = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('li', 'task-priority', task.priority);
    const removeBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'task-remove-btn', 'Remove Task');
    taskContainer.append(taskList);
    taskList.append(taskTitle);
    taskList.append(desc);
    taskList.append(dueDate);
    taskList.append(priority);
    taskContainer.append(removeBtn);
    projContainer.append(taskContainer);
    removeBtn.addEventListener('click', () => {
        (0,_removeTask__WEBPACK_IMPORTED_MODULE_1__.removeTask)(projectList, project, taskContainer, taskIndex);
    });
}

/***/ }),

/***/ "./src/modules/elementCreator.js":
/*!***************************************!*\
  !*** ./src/modules/elementCreator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementCreator": () => (/* binding */ elementCreator)
/* harmony export */ });
function elementCreator(element, className, content) {
    const el = document.createElement(element);
    el.classList.add(className);
    el.textContent = content;
    return el;
}

/***/ }),

/***/ "./src/modules/projectCreation.js":
/*!****************************************!*\
  !*** ./src/modules/projectCreation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectCreation": () => (/* binding */ projectCreation)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _addToProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToProjectList */ "./src/modules/addToProjectList.js");
/* harmony import */ var _createProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProjectCard */ "./src/modules/createProjectCard.js");




function projectCreation(projectList, title) {
    const name = title;
    const proj = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);
    (0,_addToProjectList__WEBPACK_IMPORTED_MODULE_1__.addToProjectList)(projectList, proj);
    (0,_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard)(projectList, proj, projectList.indexOf(proj));
}

/***/ }),

/***/ "./src/modules/removeProject.js":
/*!**************************************!*\
  !*** ./src/modules/removeProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
function removeProject(projectList, index, cont) {
    projectList.splice(index, 1);
    cont.remove();
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
function removeTask(projectList, project, container, taskIndex) {
    project.tasks.splice(taskIndex, 1);
    container.remove();
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

/***/ }),

/***/ "./src/modules/taskCreation.js":
/*!*************************************!*\
  !*** ./src/modules/taskCreation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskCreation": () => (/* binding */ taskCreation)
/* harmony export */ });
/* harmony import */ var _taskCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCreator */ "./src/modules/taskCreator.js");
/* harmony import */ var _createTaskHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskHTML */ "./src/modules/createTaskHTML.js");
/* harmony import */ var _addToProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToProject */ "./src/modules/addToProject.js");
/* harmony import */ var _createTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTaskForm */ "./src/modules/createTaskForm.js");





function taskCreation(projectList, projectContainer, project) {

    const taskSubmit = (0,_createTaskForm__WEBPACK_IMPORTED_MODULE_3__.createTaskForm)();
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

        const task = (0,_taskCreator__WEBPACK_IMPORTED_MODULE_0__.taskCreator)(title.value + ':', `Description: ${description.value}`, `Due date: ${dueDate.value}`, `Priority: ${priority}`);
        
        let taskIndex = (0,_addToProject__WEBPACK_IMPORTED_MODULE_2__.addToProject)(project, task);
        (0,_createTaskHTML__WEBPACK_IMPORTED_MODULE_1__.createTaskHTML)(projList, projContainer, project, task, taskIndex);
        localStorage.setItem('projectList', JSON.stringify(projectList));
        
        taskSubmit.classList.remove('visible');
        taskSubmit.reset();
        taskSubmit.remove();
    });
}

/***/ }),

/***/ "./src/modules/taskCreator.js":
/*!************************************!*\
  !*** ./src/modules/taskCreator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskCreator": () => (/* binding */ taskCreator)
/* harmony export */ });
function taskCreator (title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_projectCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectCreation */ "./src/modules/projectCreation.js");
/* harmony import */ var _modules_createProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createProjectCard */ "./src/modules/createProjectCard.js");
/* harmony import */ var _modules_createTaskHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createTaskHTML */ "./src/modules/createTaskHTML.js");





let projects = [];
const projCreate = _modules_projectCreation__WEBPACK_IMPORTED_MODULE_1__.projectCreation;
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
                let container = (0,_modules_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard)(projects, projects[i], projects.indexOf(projects[i]));
                for (let j = 0; j < projects[i].tasks.length; j++) {
                    (0,_modules_createTaskHTML__WEBPACK_IMPORTED_MODULE_3__.createTaskHTML)(projects, container, projects[i], projects[i].tasks[j]);
                }
            }
        } else {
            projects = [];
        }
    })();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNnQztBQUNJO0FBQ047O0FBRTFEO0FBQ0EsbUJBQW1CLHFFQUFlO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELGdDQUFnQyw2RUFBaUI7QUFDakQsZ0NBQWdDLDhCQUE4QjtBQUM5RCxvQkFBb0IsdUVBQWM7QUFDbEM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9hZGRUb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9hZGRUb1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvY3JlYXRlVGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVUYXNrSFRNTC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdENyZWF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcmVtb3ZlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90YXNrQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90YXNrQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3QocHJvamVjdCwgdGFzaykge1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICByZXR1cm4gcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG59IiwiaW1wb3J0IHsgZWxlbWVudENyZWF0b3IgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL3JlbW92ZVByb2plY3RcIjtcbmltcG9ydCB7IHRhc2tDcmVhdGlvbiB9IGZyb20gXCIuL3Rhc2tDcmVhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdExpc3QsIHByb2plY3QsIGluZGV4KSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGVsZW1lbnRDcmVhdG9yKCdoMicsICdwcm9qZWN0LWhlYWRlcicsIGBQcm9qZWN0OiAke3Byb2plY3QudGl0bGV9YCk7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICdyZW1vdmUtYnRuJywgJ+KclScpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBlbGVtZW50Q3JlYXRvcignYnV0dG9uJywgJ2FkZC1idG4nLCAnQWRkIGEgdGFzaycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZChhZGRUYXNrQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHJlbW92ZUJ0bik7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0NyZWF0aW9uKHByb2plY3RMaXN0LCBjb250YWluZXIsIHByb2plY3QpO1xuICAgIH0pO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TGlzdCwgaW5kZXgsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgbWFpbi5hcHBlbmQoY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCB7IGVsZW1lbnRDcmVhdG9yIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBmb3JtID0gZWxlbWVudENyZWF0b3IoJ2Zvcm0nLCAndGFzay1mb3JtJyk7XG5cbiAgICBjb25zdCBsYWJsZVRpdGxlID0gZWxlbWVudENyZWF0b3IoJ2xhYmVsJywgdW5kZWZpbmVkLCAnVGFzazonKTtcbiAgICBsYWJsZVRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2snKVxuXG4gICAgY29uc3QgbGFibGVEZXNjID0gZWxlbWVudENyZWF0b3IoJ2xhYmVsJywgdW5kZWZpbmVkLCAnRGVzY3JpcHRpb246Jyk7XG4gICAgbGFibGVEZXNjLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKTtcblxuICAgIGNvbnN0IGxhYmxlRHVlRGF0ZSA9IGVsZW1lbnRDcmVhdG9yKCdsYWJlbCcsIHVuZGVmaW5lZCwgJ0R1ZSBkYXRlOicpO1xuICAgIGxhYmxlRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGVsZW1lbnRDcmVhdG9yKCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrJyk7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2snKTtcblxuICAgIGNvbnN0IHRleHRBcmVhRGVzYyA9IGVsZW1lbnRDcmVhdG9yKCd0ZXh0YXJlYScpO1xuICAgIHRleHRBcmVhRGVzYy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzYycpO1xuICAgIHRleHRBcmVhRGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgICB0ZXh0QXJlYURlc2Muc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJyk7XG4gICAgdGV4dEFyZWFEZXNjLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpO1xuXG4gICAgY29uc3QgaW5wdXREYXRlID0gZWxlbWVudENyZWF0b3IoJ2lucHV0Jyk7XG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWUtZGF0ZScpO1xuICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZS1kYXRlJyk7XG5cbiAgICBjb25zdCBmaWVsZHNldFByaW9yaXR5ID0gZWxlbWVudENyZWF0b3IoJ2ZpZWxkc2V0Jyk7XG4gICAgY29uc3QgbGVnZW5kUHJpb3JpdHkgPSBlbGVtZW50Q3JlYXRvcignbGVnZW5kJywgdW5kZWZpbmVkLCAnUHJpb3JpdHk6Jyk7XG5cbiAgICBjb25zdCBsYWJsZUxvdyA9IGVsZW1lbnRDcmVhdG9yKCdsYWJlbCcsIHVuZGVmaW5lZCwgJ0xvdycpO1xuICAgIGxhYmxlTG93LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xvdycpO1xuXG4gICAgY29uc3QgbGFibGVNZWQgPSBlbGVtZW50Q3JlYXRvcignbGFiZWwnLCB1bmRlZmluZWQsICdNZWRpdW0nKTtcbiAgICBsYWJsZU1lZC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZWQnKTtcblxuICAgIGNvbnN0IGxhYmxlSGlnaCA9IGVsZW1lbnRDcmVhdG9yKCdsYWJlbCcsIHVuZGVmaW5lZCwgJ0hpZ2gnKTtcbiAgICBsYWJsZUhpZ2guc2V0QXR0cmlidXRlKCdmb3InLCAnaGlnaCcpO1xuXG4gICAgY29uc3QgaW5wdXRMb3cgPSBlbGVtZW50Q3JlYXRvcignaW5wdXQnKTtcbiAgICBpbnB1dExvdy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBpbnB1dExvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvdycpO1xuICAgIGlucHV0TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgIGlucHV0TG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG5cbiAgICBjb25zdCBpbnB1dE1lZD0gZWxlbWVudENyZWF0b3IoJ2lucHV0Jyk7XG4gICAgaW5wdXRNZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgaW5wdXRNZWQuc2V0QXR0cmlidXRlKCdpZCcsICdtZWQnKTtcbiAgICBpbnB1dE1lZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICBpbnB1dE1lZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpO1xuXG4gICAgY29uc3QgaW5wdXRIaWdoID0gZWxlbWVudENyZWF0b3IoJ2lucHV0Jyk7XG4gICAgaW5wdXRIaWdoLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIGlucHV0SGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZ2gnKTtcbiAgICBpbnB1dEhpZ2guc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgaW5wdXRIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICd0YXNrLWZvcm0tc3VibWl0JywgJ1N1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgICBmb3JtLmFwcGVuZChsYWJsZVRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZChpbnB1dFRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZChsYWJsZURlc2MpO1xuICAgIGZvcm0uYXBwZW5kKHRleHRBcmVhRGVzYyk7XG4gICAgZm9ybS5hcHBlbmQobGFibGVEdWVEYXRlKTtcbiAgICBmb3JtLmFwcGVuZChpbnB1dERhdGUpO1xuICAgIGZpZWxkc2V0UHJpb3JpdHkuYXBwZW5kKGxlZ2VuZFByaW9yaXR5KTtcbiAgICBmaWVsZHNldFByaW9yaXR5LmFwcGVuZChsYWJsZUxvdyk7XG4gICAgZmllbGRzZXRQcmlvcml0eS5hcHBlbmQoaW5wdXRMb3cpO1xuICAgIGZpZWxkc2V0UHJpb3JpdHkuYXBwZW5kKGxhYmxlTWVkKTtcbiAgICBmaWVsZHNldFByaW9yaXR5LmFwcGVuZChpbnB1dE1lZCk7XG4gICAgZmllbGRzZXRQcmlvcml0eS5hcHBlbmQobGFibGVIaWdoKTtcbiAgICBmaWVsZHNldFByaW9yaXR5LmFwcGVuZChpbnB1dEhpZ2gpO1xuICAgIGZvcm0uYXBwZW5kKGZpZWxkc2V0UHJpb3JpdHkpO1xuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XG5cbiAgICBtYWluLmFwcGVuZChmb3JtKTtcblxuICAgIHJldHVybiBmb3JtO1xufSIsImltcG9ydCB7IGVsZW1lbnRDcmVhdG9yIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9yZW1vdmVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrSFRNTChwcm9qZWN0TGlzdCwgcHJvakNvbnRhaW5lciwgcHJvamVjdCwgdGFzaywgdGFza0luZGV4KSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAndGFzay1jb250YWluZXInKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGVsZW1lbnRDcmVhdG9yKCd1bCcsICd0YXNrLWhlYWRlcicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGVsZW1lbnRDcmVhdG9yKCdoMycsICd0YXNrLWhlYWRlcicsIHRhc2sudGl0bGUpO1xuICAgIGNvbnN0IGRlc2MgPSBlbGVtZW50Q3JlYXRvcignbGknLCAndGFzay1kZXNjJywgdGFzay5kZXNjcmlwdGlvbik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGVsZW1lbnRDcmVhdG9yKCdsaScsICd0YXNrLWR1ZS1kYXRlJywgdGFzay5kdWVEYXRlKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGVsZW1lbnRDcmVhdG9yKCdsaScsICd0YXNrLXByaW9yaXR5JywgdGFzay5wcmlvcml0eSk7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICd0YXNrLXJlbW92ZS1idG4nLCAnUmVtb3ZlIFRhc2snKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrTGlzdCk7XG4gICAgdGFza0xpc3QuYXBwZW5kKHRhc2tUaXRsZSk7XG4gICAgdGFza0xpc3QuYXBwZW5kKGRlc2MpO1xuICAgIHRhc2tMaXN0LmFwcGVuZChkdWVEYXRlKTtcbiAgICB0YXNrTGlzdC5hcHBlbmQocHJpb3JpdHkpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHJlbW92ZUJ0bik7XG4gICAgcHJvakNvbnRhaW5lci5hcHBlbmQodGFza0NvbnRhaW5lcik7XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVUYXNrKHByb2plY3RMaXN0LCBwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCB0YXNrSW5kZXgpO1xuICAgIH0pO1xufSIsImV4cG9ydCBmdW5jdGlvbiBlbGVtZW50Q3JlYXRvcihlbGVtZW50LCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gZWw7XG59IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3RMaXN0IH0gZnJvbSAnLi9hZGRUb1Byb2plY3RMaXN0JztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0Q2FyZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRpb24ocHJvamVjdExpc3QsIHRpdGxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHRpdGxlO1xuICAgIGNvbnN0IHByb2ogPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIGFkZFRvUHJvamVjdExpc3QocHJvamVjdExpc3QsIHByb2opO1xuICAgIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3RMaXN0LCBwcm9qLCBwcm9qZWN0TGlzdC5pbmRleE9mKHByb2opKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TGlzdCwgaW5kZXgsIGNvbnQpIHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNvbnQucmVtb3ZlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayhwcm9qZWN0TGlzdCwgcHJvamVjdCwgY29udGFpbmVyLCB0YXNrSW5kZXgpIHtcbiAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufSIsImltcG9ydCB7IHRhc2tDcmVhdG9yIH0gZnJvbSBcIi4vdGFza0NyZWF0b3JcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tIVE1MIH0gZnJvbSBcIi4vY3JlYXRlVGFza0hUTUxcIjtcbmltcG9ydCB7IGFkZFRvUHJvamVjdCB9IGZyb20gXCIuL2FkZFRvUHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0Zvcm0gfSBmcm9tIFwiLi9jcmVhdGVUYXNrRm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza0NyZWF0aW9uKHByb2plY3RMaXN0LCBwcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0KSB7XG5cbiAgICBjb25zdCB0YXNrU3VibWl0ID0gY3JlYXRlVGFza0Zvcm0oKTtcbiAgICB0YXNrU3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB0YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvakxpc3QgPSBwcm9qZWN0TGlzdDtcbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IHByb2plY3RDb250YWluZXI7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYycpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHJhZGlvQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvQnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyYWRpb0J0bnNbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJhZGlvQnRuc1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrQ3JlYXRvcih0aXRsZS52YWx1ZSArICc6JywgYERlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9uLnZhbHVlfWAsIGBEdWUgZGF0ZTogJHtkdWVEYXRlLnZhbHVlfWAsIGBQcmlvcml0eTogJHtwcmlvcml0eX1gKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBhZGRUb1Byb2plY3QocHJvamVjdCwgdGFzayk7XG4gICAgICAgIGNyZWF0ZVRhc2tIVE1MKHByb2pMaXN0LCBwcm9qQ29udGFpbmVyLCBwcm9qZWN0LCB0YXNrLCB0YXNrSW5kZXgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICBcbiAgICAgICAgdGFza1N1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHRhc2tTdWJtaXQucmVzZXQoKTtcbiAgICAgICAgdGFza1N1Ym1pdC5yZW1vdmUoKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gdGFza0NyZWF0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgcHJvamVjdENyZWF0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RDcmVhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gJy4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0Q2FyZCc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrSFRNTCB9IGZyb20gJy4vbW9kdWxlcy9jcmVhdGVUYXNrSFRNTCc7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgcHJvakNyZWF0ZSA9IHByb2plY3RDcmVhdGlvbjtcbmNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdCcpO1xuXG5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBpZiAoZm9ybVN1Ym1pdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgICAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG4gICAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgcHJvakNyZWF0ZShwcm9qZWN0cywgaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlciA9IChmdW5jdGlvbiAoKSB7IFxuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgICAgICBpZiAocHJvamVjdHMgJiYgcHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0cywgcHJvamVjdHNbaV0sIHByb2plY3RzLmluZGV4T2YocHJvamVjdHNbaV0pKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tIVE1MKHByb2plY3RzLCBjb250YWluZXIsIHByb2plY3RzW2ldLCBwcm9qZWN0c1tpXS50YXNrc1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=