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
function addToProjectList(projectlist, project) {
    projectlist.push(project);
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
        (0,_taskCreation__WEBPACK_IMPORTED_MODULE_2__.taskCreation)(container, project);
    })
    removeBtn.addEventListener('click', () => {
        ;(0,_removeProject__WEBPACK_IMPORTED_MODULE_1__.removeProject)(projectList, index, container);
    });
    main.append(container);
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



function createTaskHTML(projContainer, project, task) {
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
        (0,_removeTask__WEBPACK_IMPORTED_MODULE_1__.removeTask)(project, taskContainer);
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
function removeTask(project, container) {
    project.tasks.splice(0, project.tasks.length);
    console.log(project);
    container.remove();
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




function taskCreation(projectContainer, project) {
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
        if (title.value && dueDate) {
        const task = (0,_taskCreator__WEBPACK_IMPORTED_MODULE_0__.taskCreator)(title.value + ':', `Description: ${description.value}`, `Due date: ${dueDate.value}`, `Priority: ${priority}`);
        (0,_addToProject__WEBPACK_IMPORTED_MODULE_2__.addToProject)(proj, task);
        (0,_createTaskHTML__WEBPACK_IMPORTED_MODULE_1__.createTaskHTML)(projContainer, proj, task);
        taskSubmit.classList.remove('visible');
        title.value = '';
        description.value = '';
        dueDate.value = '';
        for (let j = 0; j < radioBtns.length; i++) {
            radioBtns[i].checked = false;
        }
        }
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



const projects = [];
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRk87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0Q7QUFDRjtBQUNGOztBQUV2QztBQUNQO0FBQ0Esc0JBQXNCLCtEQUFjO0FBQ3BDLDBCQUEwQiwrREFBYyxxQ0FBcUMsY0FBYztBQUMzRixzQkFBc0IsK0RBQWM7QUFDcEMsdUJBQXVCLCtEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQSxRQUFRLDhEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJrRDtBQUNSOztBQUVuQztBQUNQLDBCQUEwQiwrREFBYztBQUN4QyxxQkFBcUIsK0RBQWM7QUFDbkMsc0JBQXNCLCtEQUFjO0FBQ3BDLGlCQUFpQiwrREFBYztBQUMvQixvQkFBb0IsK0RBQWM7QUFDbEMscUJBQXFCLCtEQUFjO0FBQ25DLHNCQUFzQiwrREFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDckJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZ0Q7QUFDTTtBQUNFOztBQUVqRDtBQUNQO0FBQ0EsaUJBQWlCLDZEQUFhO0FBQzlCLElBQUksbUVBQWdCO0FBQ3BCLElBQUkscUVBQWlCO0FBQ3JCOzs7Ozs7Ozs7Ozs7OztBQ1RPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjRDO0FBQ007QUFDSjs7QUFFdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCLHlEQUFXLG9DQUFvQyxrQkFBa0IsZ0JBQWdCLGNBQWMsZ0JBQWdCLFNBQVM7QUFDN0ksUUFBUSwyREFBWTtBQUNwQixRQUFRLCtEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDeENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ2dDOztBQUU1RDtBQUNBLG1CQUFtQixxRUFBZTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzJmZjQiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9hZGRUb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9hZGRUb1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvY3JlYXRlVGFza0hUTUwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3JlbW92ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdGFza0NyZWF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdGFza0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KHByb2plY3QsIHRhc2spIHtcbiAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFRvUHJvamVjdExpc3QocHJvamVjdGxpc3QsIHByb2plY3QpIHtcbiAgICBwcm9qZWN0bGlzdC5wdXNoKHByb2plY3QpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG59IiwiaW1wb3J0IHsgZWxlbWVudENyZWF0b3IgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL3JlbW92ZVByb2plY3RcIjtcbmltcG9ydCB7IHRhc2tDcmVhdGlvbiB9IGZyb20gXCIuL3Rhc2tDcmVhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdExpc3QsIHByb2plY3QsIGluZGV4KSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGVsZW1lbnRDcmVhdG9yKCdoMicsICdwcm9qZWN0LWhlYWRlcicsIGBQcm9qZWN0OiAke3Byb2plY3QudGl0bGV9YCk7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICdyZW1vdmUtYnRuJywgJ+KclScpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBlbGVtZW50Q3JlYXRvcignYnV0dG9uJywgJ2FkZC1idG4nLCAnQWRkIGEgdGFzaycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZChhZGRUYXNrQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHJlbW92ZUJ0bik7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0NyZWF0aW9uKGNvbnRhaW5lciwgcHJvamVjdCk7XG4gICAgfSlcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdExpc3QsIGluZGV4LCBjb250YWluZXIpO1xuICAgIH0pO1xuICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XG59IiwiaW1wb3J0IHsgZWxlbWVudENyZWF0b3IgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL3JlbW92ZVRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tIVE1MKHByb2pDb250YWluZXIsIHByb2plY3QsIHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZWxlbWVudENyZWF0b3IoJ2RpdicsICd0YXNrLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZWxlbWVudENyZWF0b3IoJ3VsJywgJ3Rhc2staGVhZGVyJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZWxlbWVudENyZWF0b3IoJ2gzJywgJ3Rhc2staGVhZGVyJywgdGFzay50aXRsZSk7XG4gICAgY29uc3QgZGVzYyA9IGVsZW1lbnRDcmVhdG9yKCdsaScsICd0YXNrLWRlc2MnLCB0YXNrLmRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZWxlbWVudENyZWF0b3IoJ2xpJywgJ3Rhc2stZHVlLWRhdGUnLCB0YXNrLmR1ZURhdGUpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZWxlbWVudENyZWF0b3IoJ2xpJywgJ3Rhc2stcHJpb3JpdHknLCB0YXNrLnByaW9yaXR5KTtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBlbGVtZW50Q3JlYXRvcignYnV0dG9uJywgJ3Rhc2stcmVtb3ZlLWJ0bicsICdSZW1vdmUgVGFzaycpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tMaXN0KTtcbiAgICB0YXNrTGlzdC5hcHBlbmQodGFza1RpdGxlKTtcbiAgICB0YXNrTGlzdC5hcHBlbmQoZGVzYyk7XG4gICAgdGFza0xpc3QuYXBwZW5kKGR1ZURhdGUpO1xuICAgIHRhc2tMaXN0LmFwcGVuZChwcmlvcml0eSk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQocmVtb3ZlQnRuKTtcbiAgICBwcm9qQ29udGFpbmVyLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVRhc2socHJvamVjdCwgdGFza0NvbnRhaW5lcik7XG4gICAgfSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgY29udGVudCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBlbDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmltcG9ydCB7IGFkZFRvUHJvamVjdExpc3QgfSBmcm9tICcuL2FkZFRvUHJvamVjdExpc3QnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tICcuL2NyZWF0ZVByb2plY3RDYXJkJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGlvbihwcm9qZWN0TGlzdCwgdGl0bGUpIHtcbiAgICBjb25zdCBuYW1lID0gdGl0bGU7XG4gICAgY29uc3QgcHJvaiA9IGNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0TGlzdCwgcHJvaik7XG4gICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdExpc3QsIHByb2osIHByb2plY3RMaXN0LmluZGV4T2YocHJvaikpO1xufSIsImV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RMaXN0LCBpbmRleCwgY29udCkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgY29udC5yZW1vdmUoKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayhwcm9qZWN0LCBjb250YWluZXIpIHtcbiAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSgwLCBwcm9qZWN0LnRhc2tzLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xufSIsImltcG9ydCB7IHRhc2tDcmVhdG9yIH0gZnJvbSBcIi4vdGFza0NyZWF0b3JcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tIVE1MIH0gZnJvbSBcIi4vY3JlYXRlVGFza0hUTUxcIjtcbmltcG9ydCB7IGFkZFRvUHJvamVjdCB9IGZyb20gXCIuL2FkZFRvUHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza0NyZWF0aW9uKHByb2plY3RDb250YWluZXIsIHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qID0gcHJvamVjdDtcbiAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gcHJvamVjdENvbnRhaW5lcjtcbiAgICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuICAgIGlmICh0YXNrU3VibWl0LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgICAgIHRhc2tTdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tTdWJtaXQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIHRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCByYWRpb0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSAoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpb0J0bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9CdG5zW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyYWRpb0J0bnNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlICYmIGR1ZURhdGUpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhc2tDcmVhdG9yKHRpdGxlLnZhbHVlICsgJzonLCBgRGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb24udmFsdWV9YCwgYER1ZSBkYXRlOiAke2R1ZURhdGUudmFsdWV9YCwgYFByaW9yaXR5OiAke3ByaW9yaXR5fWApO1xuICAgICAgICBhZGRUb1Byb2plY3QocHJvaiwgdGFzayk7XG4gICAgICAgIGNyZWF0ZVRhc2tIVE1MKHByb2pDb250YWluZXIsIHByb2osIHRhc2spO1xuICAgICAgICB0YXNrU3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhZGlvQnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmFkaW9CdG5zW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHRhc2tDcmVhdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCB7IHByb2plY3RDcmVhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0Q3JlYXRpb24nO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgcHJvakNyZWF0ZSA9IHByb2plY3RDcmVhdGlvbjtcbmNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdCcpO1xuXG5jcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBpZiAoZm9ybVN1Ym1pdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgICAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG4gICAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgcHJvakNyZWF0ZShwcm9qZWN0cywgaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=