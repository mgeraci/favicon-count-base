(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FaviconCountBase", [], factory);
	else if(typeof exports === 'object')
		exports["FaviconCountBase"] = factory();
	else
		root["FaviconCountBase"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: CANVAS_SIZE, FILL_STYLE, STROKE_STYLE, LETTER_SIZE, LETTER_SPACING, NUMBERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_SIZE\", function() { return CANVAS_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FILL_STYLE\", function() { return FILL_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STROKE_STYLE\", function() { return STROKE_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LETTER_SIZE\", function() { return LETTER_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LETTER_SPACING\", function() { return LETTER_SPACING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NUMBERS\", function() { return NUMBERS; });\nconst CANVAS_SIZE = 32;\nconst FILL_STYLE = '#000';\nconst STROKE_STYLE = 'rgba(255, 255, 255, 0.6)';\nconst LETTER_SIZE = 2;\nconst LETTER_SPACING = 2;\n\nconst NUMBERS = {\n  0: [\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n  ],\n  1: [\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 1, 1, 1, 0, 0, 0],\n    [0, 1, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 1, 1, 1, 1, 1, 1, 1],\n  ],\n  2: [\n    [0, 1, 1, 1, 1, 0, 0, 0],\n    [1, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 1, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1],\n  ],\n  3: [\n    [0, 1, 1, 1, 1, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 1, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 1, 1, 1, 1, 1, 0, 0],\n  ],\n  4: [\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 1, 1, 0, 0],\n    [0, 0, 0, 1, 0, 1, 0, 0],\n    [0, 0, 1, 0, 0, 1, 0, 0],\n    [0, 1, 0, 0, 0, 1, 0, 0],\n    [1, 0, 0, 0, 0, 1, 0, 0],\n    [1, 0, 0, 0, 0, 1, 0, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n  ],\n  5: [\n    [0, 1, 1, 1, 1, 1, 1, 1],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 1, 1, 1, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 1, 0],\n    [0, 1, 1, 1, 1, 1, 0, 0],\n  ],\n  6: [\n    [0, 0, 0, 1, 1, 1, 1, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [1, 0, 0, 0, 0, 0, 0, 0],\n    [1, 0, 0, 0, 0, 0, 0, 0],\n    [1, 0, 1, 1, 1, 1, 0, 0],\n    [1, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n  ],\n  7: [\n    [1, 1, 1, 1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 1, 0, 0, 0, 0],\n    [0, 0, 0, 1, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n  ],\n  8: [\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n  ],\n  9: [\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 1],\n    [0, 0, 1, 1, 1, 1, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 1, 1, 1, 1, 0, 0, 0],\n  ],\n  '+': [\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 1, 1, 1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n  ],\n};\n\n\n//# sourceURL=webpack://FaviconCountBase/./src/constants.js?");

/***/ }),

/***/ "./src/domNodesToArray.js":
/*!********************************!*\
  !*** ./src/domNodesToArray.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * This helper converts either an html object set OR a NodeList (used on older\n * iOS devices, roughly iOS version 8.1 and earlier) into an array for looping.\n *\n * @param {nodelist|object} nodes - a NodeList or a list of html objects\n * @returns {array} - an array\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (nodes) {\n  return [].slice.call(nodes);\n});\n\n\n//# sourceURL=webpack://FaviconCountBase/./src/domNodesToArray.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ \"./src/range.js\");\n/* harmony import */ var _domNodesToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domNodesToArray */ \"./src/domNodesToArray.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* global document, Image */\n\n\n\n\n\n\nclass FaviconCount {\n  constructor() {\n    const favicon = this.getFavicon();\n\n    if (!favicon) {\n      return;\n    }\n\n    this.faviconImage = favicon.getAttribute('href');\n    [this.head] = document.getElementsByTagName('head');\n  }\n\n  /**\n   * The public method: create and set an icon with an optional count. If a non-\n   * null count is passed, it will render the count on top of the favicon. If\n   * a count is not passed, it will render a blank favicon.\n   * @param {number} [count] - the number to draw on the icon\n   */\n  render(count) {\n    if (count !== null && typeof count !== 'undefined') {\n      this.drawCountOnCanvas(count, (icon) => {\n        this.addIconToDom(icon.toDataURL('image/png'));\n      });\n    } else {\n      this.getFaviconCanvas((canvas) => {\n        this.addIconToDom(canvas.toDataURL('image/png'));\n      });\n    }\n  }\n\n  /**\n   * A method to try to get the favicon from any site by looking for a <link />\n   * tag with a rel=\"shortcut\" attribute. Prefer size 32, otherwise sort by\n   * largest to smallest\n   * @return {DomElement} the found favicon, or null\n   */\n  getFavicon() {\n    const icons = Object(_domNodesToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.getElementsByTagName('link'))\n      .filter((link) => link.getAttribute('rel').includes('icon'))\n      .sort((a, b) => {\n        const sizeA = a.getAttribute('sizes')\n          ? parseInt(a.getAttribute('sizes').split('x')[0], 10)\n          : 0;\n        const sizeB = b.getAttribute('sizes')\n          ? parseInt(b.getAttribute('sizes').split('x')[0], 10)\n          : 0;\n\n        if (sizeA === 32) {\n          return -1;\n        }\n\n        if (sizeB === 32) {\n          return 1;\n        }\n\n        return sizeB - sizeA;\n      });\n\n    return icons[0];\n  }\n\n  /**\n   * Create a canvas element that has the favicon image as a background, and\n   * store the generated canvas on the class to make subsequent calls faster.\n   * @param {function} callback - a function to run with the resulting canvas\n   */\n  getFaviconCanvas(callback) {\n    if (!this.faviconCanvas) {\n      this.faviconCanvas = document.createElement('canvas');\n      this.faviconCanvas.width = _constants__WEBPACK_IMPORTED_MODULE_2__[\"CANVAS_SIZE\"];\n      this.faviconCanvas.height = _constants__WEBPACK_IMPORTED_MODULE_2__[\"CANVAS_SIZE\"];\n\n      const ctx = this.faviconCanvas.getContext('2d');\n      const img = new Image();\n\n      // allow cross-origin access for the image (since fallbacks may be hosted\n      // on domains other than the target domain)\n      img.crossOrigin = 'anonymous';\n\n      img.addEventListener('load', () => {\n        ctx.drawImage(img, 0, 0, _constants__WEBPACK_IMPORTED_MODULE_2__[\"CANVAS_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"CANVAS_SIZE\"]);\n        callback(this.faviconCanvas);\n      }, true);\n\n      img.src = this.faviconImage;\n    } else {\n      callback(this.faviconCanvas);\n    }\n  }\n\n  /**\n   * The top-level drawing function. This converts a number to a set of\n   * characters to render, retrieves a canvas, renders the characters, and\n   * caches the result for future use.\n   * @param {number} count - the number of items to render as a count\n   * @param {Function} callback - a function to run with the resulting canvas\n   */\n  drawCountOnCanvas(count, callback) {\n    // if greater than 99, set to '100+'\n    const characters = count > 99 ? '99+' : count;\n\n    // create a cache of canvases created, keyed by the characters rendered\n    // (e.g., `1`, `'99+'`), if it does not yet exist\n    if (!this.drawnCanvases) {\n      this.drawnCanvases = {};\n    }\n\n    // if we have this characters cached, run the callback on the cache and short circuit\n    if (this.drawnCanvases[characters]) {\n      callback(this.drawnCanvases[characters]);\n      return;\n    }\n\n    // how many digits the number of unread items is\n    const numberOfDigits = String(characters).length;\n\n    this.getFaviconCanvas((iconCanvas) => {\n      const characterCanvas = document.createElement('canvas');\n      characterCanvas.height = iconCanvas.width;\n      characterCanvas.width = iconCanvas.width;\n      const ctx = characterCanvas.getContext('2d');\n      ctx.drawImage(iconCanvas, 0, 0);\n\n      ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_2__[\"STROKE_STYLE\"];\n      ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_2__[\"FILL_STYLE\"];\n\n      // we want the number to be in the lower-right corner, but canvas\n      // takes coordinates from the upper-left. so, we calculate the\n      // upper-left offset with the size of the numbers.\n      const padding = iconCanvas.width * 0.0625; // canvas edge to the number, as a percentage\n      const topMargin = iconCanvas.height - _constants__WEBPACK_IMPORTED_MODULE_2__[\"NUMBERS\"]['0'].length - padding; // canvas height from icon top\n      const numbersWidth = _constants__WEBPACK_IMPORTED_MODULE_2__[\"NUMBERS\"]['0'][0].length * numberOfDigits + _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SPACING\"] * (numberOfDigits - 1);\n      let leftMargin = iconCanvas.width - numbersWidth - 1;\n\n      if (leftMargin < 0) {\n        leftMargin = 0;\n      }\n\n      // stroke\n      this.drawCharacters({\n        characters,\n        fn: (x, y) => {\n          ctx.strokeRect(\n            x + leftMargin - _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SIZE\"],\n            y + topMargin - _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SIZE\"],\n            _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SIZE\"] * 3,\n            _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SIZE\"] * 3,\n          );\n        },\n      });\n\n      // fill\n      this.drawCharacters({\n        characters,\n        fn: (x, y) => {\n          ctx.fillRect(\n            x + leftMargin,\n            y + topMargin,\n            _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SIZE\"],\n            _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SIZE\"],\n          );\n        },\n      });\n\n      this.drawnCanvases[characters] = characterCanvas;\n\n      callback(characterCanvas);\n    });\n  }\n\n  /**\n   * Draw a set of characters.\n   * @param {Object} options - a dictionary of options\n   * @param {number} options.characters - the characters to draw\n   * @param {Function} options.fn - the drawing function (a method on the canvas)\n   */\n  drawCharacters({\n    characters,\n    fn,\n  }) {\n    let digit;\n    let numberMap;\n    let numberHeight;\n    let numberWidth;\n    let xOffset = 0;\n\n    Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, String(characters).length).forEach((_, i) => {\n      digit = String(characters)[i];\n\n      if (_constants__WEBPACK_IMPORTED_MODULE_2__[\"NUMBERS\"][digit]) {\n        numberMap = _constants__WEBPACK_IMPORTED_MODULE_2__[\"NUMBERS\"][digit];\n        numberHeight = numberMap.length;\n        numberWidth = numberMap[0].length;\n        xOffset = numberWidth * i + _constants__WEBPACK_IMPORTED_MODULE_2__[\"LETTER_SPACING\"] * i;\n\n        Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, numberHeight).forEach((y) => {\n          Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, numberWidth).forEach((x) => {\n            if (numberMap[y][x]) {\n              fn(x + xOffset, y);\n            }\n          });\n        });\n      }\n    });\n  }\n\n  /**\n   * Add an icon to the dom and make sure it renders.\n   * @param {string} iconHref - the href for the icon\n   */\n  addIconToDom(iconHref) {\n    const links = this.head.getElementsByTagName('link');\n\n    // remove the old icon\n    [].slice.call(links).forEach((link) => {\n      if (link.rel === 'shortcut icon' || link.rel === 'icon') {\n        this.head.removeChild(link);\n      }\n    });\n\n    // add the new icon to the head\n    const newIcon = document.createElement('link');\n    newIcon.type = 'image/png';\n    newIcon.rel = 'shortcut icon';\n    newIcon.href = iconHref;\n    this.head.appendChild(newIcon);\n\n    // chrome hack for updating the favicon\n    const shim = document.createElement('iframe');\n    shim.width = 0;\n    shim.height = 0;\n    document.body.appendChild(shim);\n    shim.src = 'icon';\n    document.body.removeChild(shim);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FaviconCount);\n\n\n//# sourceURL=webpack://FaviconCountBase/./src/index.js?");

/***/ }),

/***/ "./src/range.js":
/*!**********************!*\
  !*** ./src/range.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return range; });\n/* eslint-disable */\n\nfunction range(left, right, inclusive) {\n\tconst r = [];\n\tconst ascending = left < right;\n\tconst end = !inclusive ? right : ascending ? right + 1 : right - 1;\n\tfor (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {\n\t\tr.push(i);\n\t}\n\treturn r;\n}\n\n\n//# sourceURL=webpack://FaviconCountBase/./src/range.js?");

/***/ })

/******/ });
});