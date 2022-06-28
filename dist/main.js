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



function createProjectCard(projectList, project, index) {
    const main = document.querySelector('main');
    const container = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('div', 'project-container');
    const projectHeader = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('h2', 'project-header', project.title);
    const removeBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'remove-btn', 'Delete Project');
    const addTaskBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'add-btn', 'Add a task');
    container.append(projectHeader);
    container.append(removeBtn);
    removeBtn.addEventListener('click', () => {
        (0,_removeProject__WEBPACK_IMPORTED_MODULE_1__.removeProject)(projectList, index, container);
    });
    main.append(container);
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
    const title = prompt('Name of your project?', '');
    projCreate(projects, title);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUmtEO0FBQ0Y7O0FBRXpDO0FBQ1A7QUFDQSxzQkFBc0IsK0RBQWM7QUFDcEMsMEJBQTBCLCtEQUFjO0FBQ3hDLHNCQUFzQiwrREFBYztBQUNwQyx1QkFBdUIsK0RBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGdEO0FBQ007QUFDRTs7QUFFakQ7QUFDUDtBQUNBLGlCQUFpQiw2REFBYTtBQUM5QixJQUFJLG1FQUFnQjtBQUNwQixJQUFJLHFFQUFpQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7QUNUTztBQUNQO0FBQ0E7QUFDQTs7Ozs7O1VDSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDZ0M7O0FBRTVEO0FBQ0EsbUJBQW1CLHFFQUFlO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MmZmNCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2FkZFRvUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3JlbW92ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0bGlzdCwgcHJvamVjdCkge1xuICAgIHByb2plY3RsaXN0LnB1c2gocHJvamVjdCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbn0iLCJpbXBvcnQgeyBlbGVtZW50Q3JlYXRvciB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vcmVtb3ZlUHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdExpc3QsIHByb2plY3QsIGluZGV4KSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGVsZW1lbnRDcmVhdG9yKCdoMicsICdwcm9qZWN0LWhlYWRlcicsIHByb2plY3QudGl0bGUpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGVsZW1lbnRDcmVhdG9yKCdidXR0b24nLCAncmVtb3ZlLWJ0bicsICdEZWxldGUgUHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBlbGVtZW50Q3JlYXRvcignYnV0dG9uJywgJ2FkZC1idG4nLCAnQWRkIGEgdGFzaycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZChyZW1vdmVCdG4pO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TGlzdCwgaW5kZXgsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgbWFpbi5hcHBlbmQoY29udGFpbmVyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZWxlbWVudENyZWF0b3IoZWxlbWVudCwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGVsO1xufSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0TGlzdCB9IGZyb20gJy4vYWRkVG9Qcm9qZWN0TGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdENhcmQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uKHByb2plY3RMaXN0LCB0aXRsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aXRsZTtcbiAgICBjb25zdCBwcm9qID0gY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICBhZGRUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBwcm9qKTtcbiAgICBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0TGlzdCwgcHJvaiwgcHJvamVjdExpc3QuaW5kZXhPZihwcm9qKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdExpc3QsIGluZGV4LCBjb250KSB7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBjb250LnJlbW92ZSgpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgcHJvamVjdENyZWF0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RDcmVhdGlvbic7XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5jb25zdCBwcm9qQ3JlYXRlID0gcHJvamVjdENyZWF0aW9uO1xuY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XG5cbmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHByb21wdCgnTmFtZSBvZiB5b3VyIHByb2plY3Q/JywgJycpO1xuICAgIHByb2pDcmVhdGUocHJvamVjdHMsIHRpdGxlKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9