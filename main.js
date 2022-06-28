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
    const container = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('div', 'project-container');
    const projectHeader = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('h2', 'project-header', project.title);
    const removeBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'remove-btn', 'Delete Project');
    const addTaskBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.elementCreator)('button', 'add-btn', 'Add a task');
    container.append(projectHeader);
    container.append(removeBtn);
    removeBtn.addEventListener('click', () => {
        (0,_removeProject__WEBPACK_IMPORTED_MODULE_1__.removeProject)(projectList, index, container);
    });
    document.body.append(container);
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
    console.log(projectList);
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
    console.log(projectList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUmtEO0FBQ0Y7O0FBRXpDO0FBQ1Asc0JBQXNCLCtEQUFjO0FBQ3BDLDBCQUEwQiwrREFBYztBQUN4QyxzQkFBc0IsK0RBQWM7QUFDcEMsdUJBQXVCLCtEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQWE7QUFDckIsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xnRDtBQUNNO0FBQ0U7O0FBRWpEO0FBQ1A7QUFDQSxpQkFBaUIsNkRBQWE7QUFDOUIsSUFBSSxtRUFBZ0I7QUFDcEIsSUFBSSxxRUFBaUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNnQzs7QUFFNUQ7QUFDQSxtQkFBbUIscUVBQWU7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz8yZmY0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvYWRkVG9Qcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdENyZWF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcmVtb3ZlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3RMaXN0KHByb2plY3RsaXN0LCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdGxpc3QucHVzaChwcm9qZWN0KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpO1xufSIsImltcG9ydCB7IGVsZW1lbnRDcmVhdG9yIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCB7IHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9yZW1vdmVQcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0TGlzdCwgcHJvamVjdCwgaW5kZXgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50Q3JlYXRvcignZGl2JywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGVsZW1lbnRDcmVhdG9yKCdoMicsICdwcm9qZWN0LWhlYWRlcicsIHByb2plY3QudGl0bGUpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGVsZW1lbnRDcmVhdG9yKCdidXR0b24nLCAncmVtb3ZlLWJ0bicsICdEZWxldGUgUHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBlbGVtZW50Q3JlYXRvcignYnV0dG9uJywgJ2FkZC1idG4nLCAnQWRkIGEgdGFzaycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZChyZW1vdmVCdG4pO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TGlzdCwgaW5kZXgsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZWxlbWVudENyZWF0b3IoZWxlbWVudCwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGVsO1xufSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0TGlzdCB9IGZyb20gJy4vYWRkVG9Qcm9qZWN0TGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdENhcmQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uKHByb2plY3RMaXN0LCB0aXRsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aXRsZTtcbiAgICBjb25zdCBwcm9qID0gY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICBhZGRUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBwcm9qKTtcbiAgICBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0TGlzdCwgcHJvaiwgcHJvamVjdExpc3QuaW5kZXhPZihwcm9qKSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xufSIsImV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RMaXN0LCBpbmRleCwgY29udCkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgY29udC5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBwcm9qZWN0Q3JlYXRpb24gfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdENyZWF0aW9uJztcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcbmNvbnN0IHByb2pDcmVhdGUgPSBwcm9qZWN0Q3JlYXRpb247XG5jb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcblxuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gcHJvbXB0KCdOYW1lIG9mIHlvdXIgcHJvamVjdD8nLCAnJyk7XG4gICAgcHJvakNyZWF0ZShwcm9qZWN0cywgdGl0bGUpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=