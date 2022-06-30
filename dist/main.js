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
        const task = (0,_taskCreator__WEBPACK_IMPORTED_MODULE_0__.taskCreator)(title.value + ':', `Description: ${description.value}`, `Due date: ${dueDate.value}`, `Priority: ${priority}`);
        (0,_addToProject__WEBPACK_IMPORTED_MODULE_2__.addToProject)(proj, task);
        (0,_createTaskHTML__WEBPACK_IMPORTED_MODULE_1__.createTaskHTML)(projContainer, proj, task);
        taskSubmit.classList.remove('visible');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRk87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0Q7QUFDRjtBQUNGOztBQUV2QztBQUNQO0FBQ0Esc0JBQXNCLCtEQUFjO0FBQ3BDLDBCQUEwQiwrREFBYyxxQ0FBcUMsY0FBYztBQUMzRixzQkFBc0IsK0RBQWM7QUFDcEMsdUJBQXVCLCtEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQSxRQUFRLDhEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJrRDtBQUNSOztBQUVuQztBQUNQLDBCQUEwQiwrREFBYztBQUN4QyxxQkFBcUIsK0RBQWM7QUFDbkMsc0JBQXNCLCtEQUFjO0FBQ3BDLGlCQUFpQiwrREFBYztBQUMvQixvQkFBb0IsK0RBQWM7QUFDbEMscUJBQXFCLCtEQUFjO0FBQ25DLHNCQUFzQiwrREFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDckJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZ0Q7QUFDTTtBQUNFOztBQUVqRDtBQUNQO0FBQ0EsaUJBQWlCLDZEQUFhO0FBQzlCLElBQUksbUVBQWdCO0FBQ3BCLElBQUkscUVBQWlCO0FBQ3JCOzs7Ozs7Ozs7Ozs7OztBQ1RPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjRDO0FBQ007QUFDSjs7QUFFdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFCQUFxQix5REFBVyxvQ0FBb0Msa0JBQWtCLGdCQUFnQixjQUFjLGdCQUFnQixTQUFTO0FBQzdJLFFBQVEsMkRBQVk7QUFDcEIsUUFBUSwrREFBYztBQUN0QjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNoQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDZ0M7O0FBRTVEO0FBQ0EsbUJBQW1CLHFFQUFlO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MmZmNCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2FkZFRvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2FkZFRvUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVUYXNrSFRNTC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdENyZWF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcmVtb3ZlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90YXNrQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90YXNrQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3QocHJvamVjdCwgdGFzaykge1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0bGlzdCwgcHJvamVjdCkge1xuICAgIHByb2plY3RsaXN0LnB1c2gocHJvamVjdCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbn0iLCJpbXBvcnQgeyBlbGVtZW50Q3JlYXRvciB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vcmVtb3ZlUHJvamVjdFwiO1xuaW1wb3J0IHsgdGFza0NyZWF0aW9uIH0gZnJvbSBcIi4vdGFza0NyZWF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0TGlzdCwgcHJvamVjdCwgaW5kZXgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAncHJvamVjdC1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZWxlbWVudENyZWF0b3IoJ2gyJywgJ3Byb2plY3QtaGVhZGVyJywgYFByb2plY3Q6ICR7cHJvamVjdC50aXRsZX1gKTtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBlbGVtZW50Q3JlYXRvcignYnV0dG9uJywgJ3JlbW92ZS1idG4nLCAn4pyVJyk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGVsZW1lbnRDcmVhdG9yKCdidXR0b24nLCAnYWRkLWJ0bicsICdBZGQgYSB0YXNrJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGFkZFRhc2tCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocmVtb3ZlQnRuKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrQ3JlYXRpb24oY29udGFpbmVyLCBwcm9qZWN0KTtcbiAgICB9KVxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TGlzdCwgaW5kZXgsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgbWFpbi5hcHBlbmQoY29udGFpbmVyKTtcbn0iLCJpbXBvcnQgeyBlbGVtZW50Q3JlYXRvciB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSBcIi4vcmVtb3ZlVGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0hUTUwocHJvakNvbnRhaW5lciwgcHJvamVjdCwgdGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBlbGVtZW50Q3JlYXRvcigndWwnLCAndGFzay1oZWFkZXInKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBlbGVtZW50Q3JlYXRvcignaDMnLCAndGFzay1oZWFkZXInLCB0YXNrLnRpdGxlKTtcbiAgICBjb25zdCBkZXNjID0gZWxlbWVudENyZWF0b3IoJ2xpJywgJ3Rhc2stZGVzYycsIHRhc2suZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBlbGVtZW50Q3JlYXRvcignbGknLCAndGFzay1kdWUtZGF0ZScsIHRhc2suZHVlRGF0ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBlbGVtZW50Q3JlYXRvcignbGknLCAndGFzay1wcmlvcml0eScsIHRhc2sucHJpb3JpdHkpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGVsZW1lbnRDcmVhdG9yKCdidXR0b24nLCAndGFzay1yZW1vdmUtYnRuJywgJ1JlbW92ZSBUYXNrJyk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQodGFza0xpc3QpO1xuICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tMaXN0LmFwcGVuZChkZXNjKTtcbiAgICB0YXNrTGlzdC5hcHBlbmQoZHVlRGF0ZSk7XG4gICAgdGFza0xpc3QuYXBwZW5kKHByaW9yaXR5KTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChyZW1vdmVCdG4pO1xuICAgIHByb2pDb250YWluZXIuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlVGFzayhwcm9qZWN0LCB0YXNrQ29udGFpbmVyKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZWxlbWVudENyZWF0b3IoZWxlbWVudCwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGVsO1xufSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0TGlzdCB9IGZyb20gJy4vYWRkVG9Qcm9qZWN0TGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdENhcmQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uKHByb2plY3RMaXN0LCB0aXRsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aXRsZTtcbiAgICBjb25zdCBwcm9qID0gY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICBhZGRUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBwcm9qKTtcbiAgICBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0TGlzdCwgcHJvaiwgcHJvamVjdExpc3QuaW5kZXhPZihwcm9qKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdExpc3QsIGluZGV4LCBjb250KSB7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBjb250LnJlbW92ZSgpO1xufSIsImV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHByb2plY3QsIGNvbnRhaW5lcikge1xuICAgIHByb2plY3QudGFza3Muc3BsaWNlKDAsIHByb2plY3QudGFza3MubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG59IiwiaW1wb3J0IHsgdGFza0NyZWF0b3IgfSBmcm9tIFwiLi90YXNrQ3JlYXRvclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0hUTUwgfSBmcm9tIFwiLi9jcmVhdGVUYXNrSFRNTFwiO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0IH0gZnJvbSBcIi4vYWRkVG9Qcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrQ3JlYXRpb24ocHJvamVjdENvbnRhaW5lciwgcHJvamVjdCkge1xuICAgIGNvbnN0IHByb2ogPSBwcm9qZWN0O1xuICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBwcm9qZWN0Q29udGFpbmVyO1xuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG4gICAgaWYgKHRhc2tTdWJtaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICAgICAgdGFza1N1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N1Ym1pdC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgdGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYycpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHJhZGlvQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvQnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyYWRpb0J0bnNbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJhZGlvQnRuc1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza0NyZWF0b3IodGl0bGUudmFsdWUgKyAnOicsIGBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbi52YWx1ZX1gLCBgRHVlIGRhdGU6ICR7ZHVlRGF0ZS52YWx1ZX1gLCBgUHJpb3JpdHk6ICR7cHJpb3JpdHl9YCk7XG4gICAgICAgIGFkZFRvUHJvamVjdChwcm9qLCB0YXNrKTtcbiAgICAgICAgY3JlYXRlVGFza0hUTUwocHJvakNvbnRhaW5lciwgcHJvaiwgdGFzayk7XG4gICAgICAgIHRhc2tTdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0pO1xufSIsImV4cG9ydCBmdW5jdGlvbiB0YXNrQ3JlYXRvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBwcm9qZWN0Q3JlYXRpb24gfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdENyZWF0aW9uJztcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcbmNvbnN0IHByb2pDcmVhdGUgPSBwcm9qZWN0Q3JlYXRpb247XG5jb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcblxuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgaWYgKGZvcm1TdWJtaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICAgICAgZm9ybVN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHByb2pDcmVhdGUocHJvamVjdHMsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9