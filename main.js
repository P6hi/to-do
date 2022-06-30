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
    const titleHeader = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('ul', 'task-header', task.title);
    const desc = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('li', 'task-desc', task.description);
    const dueDate = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('li', 'task-due-date', task.dueDate);
    const priority = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('li', 'task-priority', task.priority);
    const removeBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'task-remove-btn', 'Remove Task');
    taskContainer.append(titleHeader);
    titleHeader.append(desc);
    titleHeader.append(dueDate);
    titleHeader.append(priority);
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
    const title = prompt('Task name:', '');
    const description = prompt('Description:', '');
    const dueDate = prompt('Due date:', '');
    const priority = prompt('Priority:', '');
    const task = (0,_taskCreator__WEBPACK_IMPORTED_MODULE_0__.taskCreator)(title, `Description: ${description}`, `Due date: ${dueDate}`, `Priority: ${priority}`);
    (0,_addToProject__WEBPACK_IMPORTED_MODULE_2__.addToProject)(proj, task);
    (0,_createTaskHTML__WEBPACK_IMPORTED_MODULE_1__.createTaskHTML)(projContainer, proj, task);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRk87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0Q7QUFDRjtBQUNGOztBQUV2QztBQUNQO0FBQ0Esc0JBQXNCLCtEQUFjO0FBQ3BDLDBCQUEwQiwrREFBYyxxQ0FBcUMsY0FBYztBQUMzRixzQkFBc0IsK0RBQWM7QUFDcEMsdUJBQXVCLCtEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQSxRQUFRLDhEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJrRDtBQUNSOztBQUVuQztBQUNQLDBCQUEwQiwrREFBYztBQUN4Qyx3QkFBd0IsK0RBQWM7QUFDdEMsaUJBQWlCLCtEQUFjO0FBQy9CLG9CQUFvQiwrREFBYztBQUNsQyxxQkFBcUIsK0RBQWM7QUFDbkMsc0JBQXNCLCtEQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZ0Q7QUFDTTtBQUNFOztBQUVqRDtBQUNQO0FBQ0EsaUJBQWlCLDZEQUFhO0FBQzlCLElBQUksbUVBQWdCO0FBQ3BCLElBQUkscUVBQWlCO0FBQ3JCOzs7Ozs7Ozs7Ozs7OztBQ1RPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjRDO0FBQ007QUFDSjs7QUFFdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseURBQVcsd0JBQXdCLFlBQVksZ0JBQWdCLFFBQVEsZ0JBQWdCLFNBQVM7QUFDakgsSUFBSSwyREFBWTtBQUNoQixJQUFJLCtEQUFjO0FBQ2xCOzs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ2dDOztBQUU1RDtBQUNBLG1CQUFtQixxRUFBZTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvYWRkVG9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvYWRkVG9Qcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2tIVE1MLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0Q3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9yZW1vdmVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Rhc2tDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Rhc2tDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFRvUHJvamVjdChwcm9qZWN0LCB0YXNrKSB7XG4gICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3RMaXN0KHByb2plY3RsaXN0LCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdGxpc3QucHVzaChwcm9qZWN0KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpO1xufSIsImltcG9ydCB7IGVsZW1lbnRDcmVhdG9yIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCB7IHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9yZW1vdmVQcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrQ3JlYXRpb24gfSBmcm9tIFwiLi90YXNrQ3JlYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3RMaXN0LCBwcm9qZWN0LCBpbmRleCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudENyZWF0b3IoJ2RpdicsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBlbGVtZW50Q3JlYXRvcignaDInLCAncHJvamVjdC1oZWFkZXInLCBgUHJvamVjdDogJHtwcm9qZWN0LnRpdGxlfWApO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGVsZW1lbnRDcmVhdG9yKCdidXR0b24nLCAncmVtb3ZlLWJ0bicsICfinJUnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICdhZGQtYnRuJywgJ0FkZCBhIHRhc2snKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3RIZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoYWRkVGFza0J0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZChyZW1vdmVCdG4pO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tDcmVhdGlvbihjb250YWluZXIsIHByb2plY3QpO1xuICAgIH0pXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3RMaXN0LCBpbmRleCwgY29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xufSIsImltcG9ydCB7IGVsZW1lbnRDcmVhdG9yIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9yZW1vdmVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrSFRNTChwcm9qQ29udGFpbmVyLCBwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGVsZW1lbnRDcmVhdG9yKCdkaXYnLCAndGFzay1jb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZUhlYWRlciA9IGVsZW1lbnRDcmVhdG9yKCd1bCcsICd0YXNrLWhlYWRlcicsIHRhc2sudGl0bGUpO1xuICAgIGNvbnN0IGRlc2MgPSBlbGVtZW50Q3JlYXRvcignbGknLCAndGFzay1kZXNjJywgdGFzay5kZXNjcmlwdGlvbik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGVsZW1lbnRDcmVhdG9yKCdsaScsICd0YXNrLWR1ZS1kYXRlJywgdGFzay5kdWVEYXRlKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGVsZW1lbnRDcmVhdG9yKCdsaScsICd0YXNrLXByaW9yaXR5JywgdGFzay5wcmlvcml0eSk7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZWxlbWVudENyZWF0b3IoJ2J1dHRvbicsICd0YXNrLXJlbW92ZS1idG4nLCAnUmVtb3ZlIFRhc2snKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0aXRsZUhlYWRlcik7XG4gICAgdGl0bGVIZWFkZXIuYXBwZW5kKGRlc2MpO1xuICAgIHRpdGxlSGVhZGVyLmFwcGVuZChkdWVEYXRlKTtcbiAgICB0aXRsZUhlYWRlci5hcHBlbmQocHJpb3JpdHkpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHJlbW92ZUJ0bik7XG4gICAgcHJvakNvbnRhaW5lci5hcHBlbmQodGFza0NvbnRhaW5lcik7XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVUYXNrKHByb2plY3QsIHRhc2tDb250YWluZXIpO1xuICAgIH0pO1xufSIsImV4cG9ydCBmdW5jdGlvbiBlbGVtZW50Q3JlYXRvcihlbGVtZW50LCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gZWw7XG59IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3RMaXN0IH0gZnJvbSAnLi9hZGRUb1Byb2plY3RMaXN0JztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0Q2FyZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRpb24ocHJvamVjdExpc3QsIHRpdGxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHRpdGxlO1xuICAgIGNvbnN0IHByb2ogPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIGFkZFRvUHJvamVjdExpc3QocHJvamVjdExpc3QsIHByb2opO1xuICAgIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3RMaXN0LCBwcm9qLCBwcm9qZWN0TGlzdC5pbmRleE9mKHByb2opKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TGlzdCwgaW5kZXgsIGNvbnQpIHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNvbnQucmVtb3ZlKCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2socHJvamVjdCwgY29udGFpbmVyKSB7XG4gICAgcHJvamVjdC50YXNrcy5zcGxpY2UoMCwgcHJvamVjdC50YXNrcy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgeyB0YXNrQ3JlYXRvciB9IGZyb20gXCIuL3Rhc2tDcmVhdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrSFRNTCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tIVE1MXCI7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3QgfSBmcm9tIFwiLi9hZGRUb1Byb2plY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tDcmVhdGlvbihwcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvaiA9IHByb2plY3Q7XG4gICAgY29uc3QgcHJvakNvbnRhaW5lciA9IHByb2plY3RDb250YWluZXI7XG4gICAgY29uc3QgdGl0bGUgPSBwcm9tcHQoJ1Rhc2sgbmFtZTonLCAnJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ0Rlc2NyaXB0aW9uOicsICcnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcHJvbXB0KCdEdWUgZGF0ZTonLCAnJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5OicsICcnKTtcbiAgICBjb25zdCB0YXNrID0gdGFza0NyZWF0b3IodGl0bGUsIGBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbn1gLCBgRHVlIGRhdGU6ICR7ZHVlRGF0ZX1gLCBgUHJpb3JpdHk6ICR7cHJpb3JpdHl9YCk7XG4gICAgYWRkVG9Qcm9qZWN0KHByb2osIHRhc2spO1xuICAgIGNyZWF0ZVRhc2tIVE1MKHByb2pDb250YWluZXIsIHByb2osIHRhc2spO1xufSIsImV4cG9ydCBmdW5jdGlvbiB0YXNrQ3JlYXRvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBwcm9qZWN0Q3JlYXRpb24gfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdENyZWF0aW9uJztcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcbmNvbnN0IHByb2pDcmVhdGUgPSBwcm9qZWN0Q3JlYXRpb247XG5jb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcblxuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgaWYgKGZvcm1TdWJtaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICAgICAgZm9ybVN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHByb2pDcmVhdGUocHJvamVjdHMsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9