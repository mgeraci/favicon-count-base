/******/ (function(modules) { // webpackBootstrap
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
/*! exports provided: STROKE_STYLE, FILL_STYLE, LETTER_SIZE, LETTER_SPACING, NUMBERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STROKE_STYLE\", function() { return STROKE_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FILL_STYLE\", function() { return FILL_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LETTER_SIZE\", function() { return LETTER_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LETTER_SPACING\", function() { return LETTER_SPACING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NUMBERS\", function() { return NUMBERS; });\nconst STROKE_STYLE = 'rgba(255, 255, 255, 0.6)';\nconst FILL_STYLE = '#000';\nconst LETTER_SIZE = 2;\nconst LETTER_SPACING = 2;\n\nconst NUMBERS = {\n  0: [\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n  ],\n  1: [\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 1, 1, 1, 0, 0, 0],\n    [0, 1, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 1, 1, 1, 1, 1, 1, 1],\n  ],\n  2: [\n    [0, 1, 1, 1, 1, 0, 0, 0],\n    [1, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 1, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1],\n  ],\n  3: [\n    [0, 1, 1, 1, 1, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 1, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 1, 1, 1, 1, 1, 0, 0],\n  ],\n  4: [\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 1, 1, 0, 0],\n    [0, 0, 0, 1, 0, 1, 0, 0],\n    [0, 0, 1, 0, 0, 1, 0, 0],\n    [0, 1, 0, 0, 0, 1, 0, 0],\n    [1, 0, 0, 0, 0, 1, 0, 0],\n    [1, 0, 0, 0, 0, 1, 0, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n  ],\n  5: [\n    [0, 1, 1, 1, 1, 1, 1, 1],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 1, 1, 1, 1, 0, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 1, 0],\n    [0, 1, 1, 1, 1, 1, 0, 0],\n  ],\n  6: [\n    [0, 0, 0, 1, 1, 1, 1, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [1, 0, 0, 0, 0, 0, 0, 0],\n    [1, 0, 0, 0, 0, 0, 0, 0],\n    [1, 0, 1, 1, 1, 1, 0, 0],\n    [1, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n  ],\n  7: [\n    [1, 1, 1, 1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 1, 0, 0, 0, 0],\n    [0, 0, 0, 1, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n    [0, 1, 0, 0, 0, 0, 0, 0],\n  ],\n  8: [\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 1, 1, 0, 0],\n  ],\n  9: [\n    [0, 0, 1, 1, 1, 1, 0, 0],\n    [0, 1, 0, 0, 0, 0, 1, 0],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0, 0, 0, 1],\n    [0, 1, 0, 0, 0, 0, 1, 1],\n    [0, 0, 1, 1, 1, 1, 0, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0, 1, 0, 0],\n    [0, 1, 1, 1, 1, 0, 0, 0],\n  ],\n  '+': [\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 1, 1, 1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0],\n  ],\n};\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ \"./src/range.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* global document, Image */\n\n\n\n\n\nclass FaviconCount {\n  constructor(options = {}) {\n    if (!options.fallbackIcon) {\n      console.error('FaviconCount must be provided options.fallbackIcon'); // eslint-disable-line no-console\n      return;\n    }\n\n    const favicon = this.getFavicon();\n\n    // set to true to force the fallback icon to render\n    const testFallbackIcon = false;\n\n    if (favicon && !testFallbackIcon) {\n      this.faviconImage = favicon.getAttribute('href');\n    } else {\n      this.faviconImage = options.fallbackIcon;\n    }\n\n    [this.head] = document.getElementsByTagName('head');\n  }\n\n  static getFavicon() {\n    return document.getElementById('favicon');\n  }\n\n  drawCount(_unread, callback) {\n    // if greater than 99, set to '100+'\n    const count = _unread > 99 ? '99+' : _unread;\n\n    // how many digits the number of unread items is\n    const digits = String(count).length;\n\n    if (!this.textedCanvas) {\n      this.textedCanvas = {};\n    }\n\n    if (!this.textedCanvas[count]) {\n      this.getCanvas((iconCanvas) => {\n        const textedCanvas = document.createElement('canvas');\n        textedCanvas.height = iconCanvas.width;\n        textedCanvas.width = iconCanvas.width;\n        const ctx = textedCanvas.getContext('2d');\n        ctx.drawImage(iconCanvas, 0, 0);\n\n        ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_1__[\"STROKE_STYLE\"];\n        ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_1__[\"FILL_STYLE\"];\n\n        // we want the number to be in the lower-right corner, but canvas\n        // takes coordinates from the upper-left. so, we calculate the\n        // upper-left offset with the size of the numbers.\n        const padding = iconCanvas.width * 0.0625; // canvas edge to the number, as a percentage\n        const topMargin = iconCanvas.height - _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"]['0'].length - padding; // canvas height from icon top\n        const numbersWidth = _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"]['0'][0].length * digits + _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SPACING\"] * (digits - 1);\n        let leftMargin = iconCanvas.width - numbersWidth - 1;\n\n        if (leftMargin < 0) {\n          leftMargin = 0;\n        }\n\n        // stroke\n        this.drawNumber({\n          digits,\n          count,\n          fn: (x, y) => {\n            ctx.strokeRect(\n              x + leftMargin - _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SIZE\"],\n              y + topMargin - _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SIZE\"],\n              _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SIZE\"] * 3,\n              _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SIZE\"] * 3,\n            );\n          },\n        });\n\n        // fill\n        this.drawNumber({\n          digits,\n          count,\n          fn: (x, y) => {\n            ctx.fillRect(\n              x + leftMargin,\n              y + topMargin,\n              _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SIZE\"],\n              _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SIZE\"],\n            );\n          },\n        });\n\n        this.textedCanvas[count] = textedCanvas;\n\n        callback(this.textedCanvas[count]);\n      });\n    }\n\n    if (this.textedCanvas[count]) {\n      callback(this.textedCanvas[count]);\n    }\n  }\n\n  static drawNumber({\n    digits,\n    count,\n    fn,\n  }) {\n    let digit;\n    let numberMap;\n    let numberHeight;\n    let numberWidth;\n    let xOffset = 0;\n\n    Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, digits).forEach((_, i) => {\n      digit = String(count)[i];\n\n      if (_constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"][digit]) {\n        numberMap = _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"][digit];\n        numberHeight = numberMap.length;\n        numberWidth = numberMap[0].length;\n        xOffset = numberWidth * i + _constants__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_SPACING\"] * i;\n\n        Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, numberHeight).forEach((y) => {\n          Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, numberWidth).forEach((x) => {\n            if (numberMap[y][x]) {\n              fn(x + xOffset, y);\n            }\n          });\n        });\n      }\n    });\n  }\n\n  getCanvas(callback) {\n    if (!this.unreadCanvas) {\n      this.unreadCanvas = document.createElement('canvas');\n\n      const ctx = this.unreadCanvas.getContext('2d');\n      const img = new Image();\n\n      // allow cross-origin access for the image (since fallbacks may be hosted\n      // on domains other than the target domain)\n      img.crossOrigin = 'anonymous';\n\n      img.addEventListener('load', () => {\n        this.unreadCanvas.width = img.width;\n        this.unreadCanvas.height = img.height;\n        ctx.drawImage(img, 0, 0);\n        callback(this.unreadCanvas);\n      }, true);\n\n      img.src = this.faviconImage;\n    } else {\n      callback(this.unreadCanvas);\n    }\n  }\n\n  /**\n   * Create and set a blank icon.\n   */\n  getIcon() {\n    this.getCanvas((canvas) => {\n      this.setIcon(canvas.toDataURL('image/png'));\n    });\n  }\n\n  /**\n   * Create and set an icon with a count.\n   * @param {number} count - the number to draw on the icon\n   */\n  getIconWithCount(count = 0) {\n    this.drawCount(count, (icon) => {\n      this.setIcon(icon.toDataURL('image/png'));\n    });\n  }\n\n  setIcon(icon) {\n    const links = this.head.getElementsByTagName('link');\n\n    // remove the old icon\n    [].slice.call(links).forEach((link) => {\n      if (link.rel === 'shortcut icon' || link.rel === 'icon') {\n        this.head.removeChild(link);\n      }\n    });\n\n    const newIcon = document.createElement('link');\n    newIcon.type = 'image/png';\n    newIcon.rel = 'shortcut icon';\n    newIcon.href = icon;\n    this.head.appendChild(newIcon);\n\n    // Chrome hack for updating the favicon\n    const shim = document.createElement('iframe');\n    shim.width = 0;\n    shim.height = 0;\n    document.body.appendChild(shim);\n    shim.src = 'icon';\n    document.body.removeChild(shim);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FaviconCount);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/range.js":
/*!**********************!*\
  !*** ./src/range.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return range; });\n/* eslint-disable */\n\nfunction range(left, right, inclusive) {\n\tconst r = [];\n\tconst ascending = left < right;\n\tconst end = !inclusive ? right : ascending ? right + 1 : right - 1;\n\tfor (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {\n\t\tr.push(i);\n\t}\n\treturn r;\n}\n\n\n//# sourceURL=webpack:///./src/range.js?");

/***/ })

/******/ });