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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, StingBase, StingNotification, st */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sting_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sting.class */ \"./src/sting.class.ts\");\n/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _sting_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _sting_base_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sting-base.class */ \"./src/sting-base.class.ts\");\n/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StingBase\", function() { return _sting_base_class__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _sting_notification_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sting-notification.class */ \"./src/sting-notification.class.ts\");\n/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StingNotification\", function() { return _sting_notification_class__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _sting_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sting.tag */ \"./src/sting.tag.ts\");\n/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"st\", function() { return _sting_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/sting-base.class.ts":
/*!*********************************!*\
  !*** ./src/sting-base.class.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sting_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sting.tag */ \"./src/sting.tag.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\n\nvar template = Object(_sting_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\t<\", \" class=\\\"\", \"\\\">\\n\\t</\", \">\\n\"], [\"\\n\\t<\", \" class=\\\"\", \"\\\">\\n\\t</\", \">\\n\"])), 'tag', 'className', 'tag');\nvar StingBase = /** @class */ (function () {\n    function StingBase(config) {\n        this.config = {\n            template: template,\n            tag: 'div',\n            className: '',\n            parentElement: document.body,\n        };\n        this.methods = [];\n        this.config = __assign({}, this.config, config);\n        this.on('render', this.renderMethod);\n        this.on('remove', this.removeMethod);\n    }\n    StingBase.prototype.render = function () {\n        this.broadcast('render', this);\n        this.broadcast('render:post', this);\n    };\n    StingBase.prototype.remove = function () {\n        this.broadcast('remove', this);\n        this.broadcast('remove:post', this);\n    };\n    StingBase.prototype.on = function (event, method) {\n        this.methods.push({\n            event: event,\n            method: method\n        });\n        return this.off.bind(this, event, method);\n    };\n    StingBase.prototype.off = function (event, method) {\n        this.methods = this.methods.filter(function (binding) {\n            return !(binding.event == event && binding.method == method);\n        });\n    };\n    StingBase.prototype.broadcast = function (event) {\n        var values = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            values[_i - 1] = arguments[_i];\n        }\n        this.eventRunner.apply(this, [event].concat(values));\n    };\n    StingBase.prototype.eventRunner = function (event) {\n        var _this = this;\n        var values = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            values[_i - 1] = arguments[_i];\n        }\n        this.getEventMethods(event).forEach(function (m) { return m.method.apply(_this, values); });\n    };\n    StingBase.prototype.getEventMethods = function (event) {\n        return this.methods.filter(function (m) { return m.event == event; });\n    };\n    StingBase.prototype.renderMethod = function () {\n        var template = this.config.template;\n        var element = document.createElement('div');\n        element.innerHTML = template(this.config);\n        // Render once\n        this.removeMethod();\n        this.element = element.children[0];\n        this.config.parentElement.appendChild(this.element);\n    };\n    StingBase.prototype.removeMethod = function () {\n        if (this.element && this.element.parentElement) {\n            this.element.parentElement.removeChild(this.element);\n        }\n    };\n    return StingBase;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (StingBase);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/sting-base.class.ts?");

/***/ }),

/***/ "./src/sting-notification.class.ts":
/*!*****************************************!*\
  !*** ./src/sting-notification.class.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sting_base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sting-base.class */ \"./src/sting-base.class.ts\");\n/* harmony import */ var _sting_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sting.tag */ \"./src/sting.tag.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\n\n\nvar template = Object(_sting_tag__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\t<\", \" class=\\\"\", \"\\\">\\n\\t\\t\", \"\\n\\t</\", \">\\n\"], [\"\\n\\t<\", \" class=\\\"\", \"\\\">\\n\\t\\t\", \"\\n\\t</\", \">\\n\"])), 'tag', 'className', 'message', 'tag');\nvar defaults = {\n    parentElement: document.body,\n    className: 'sting__notification',\n    duration: 0,\n    template: template\n};\nvar StingNotification = /** @class */ (function (_super) {\n    __extends(StingNotification, _super);\n    function StingNotification(config) {\n        var _this = _super.call(this, __assign({}, defaults, config)) || this;\n        _this.on('enter', _this.render);\n        _this.on('leave', _this.remove);\n        if (_this.config.duration > 0) {\n            _this.setTimer();\n        }\n        return _this;\n    }\n    StingNotification.prototype.enter = function () {\n        this.broadcast('enter');\n        this.broadcast('enter:post');\n        return this;\n    };\n    StingNotification.prototype.leave = function () {\n        this.broadcast('leave');\n        this.broadcast('leave:post');\n        return this;\n    };\n    StingNotification.prototype.setTimer = function () {\n        var _this = this;\n        this.on('enter', function () {\n            var remaining = _this.config.duration;\n            var start = Date.now();\n            var timeout = setTimeout(function () { return _this.leave(); }, _this.config.duration);\n            _this.on('leave', function () { return clearTimeout(timeout); });\n            _this.element.addEventListener('mouseenter', function () {\n                _this.config.duration -= Date.now() - start;\n                window.clearTimeout(timeout);\n            });\n            _this.element.addEventListener('mouseleave', function () {\n                start = Date.now();\n                window.clearTimeout(timeout);\n                timeout = setTimeout(function () { return _this.leave(); }, _this.config.duration);\n            });\n        });\n    };\n    return StingNotification;\n}(_sting_base_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (StingNotification);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/sting-notification.class.ts?");

/***/ }),

/***/ "./src/sting.class.ts":
/*!****************************!*\
  !*** ./src/sting.class.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sting_notification_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sting-notification.class */ \"./src/sting-notification.class.ts\");\n/* harmony import */ var _sting_base_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sting-base.class */ \"./src/sting-base.class.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\n\n\nvar defaults = {\n    duration: 3000,\n    className: 'sting__notifications',\n    notification: _sting_notification_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\nvar Sting = /** @class */ (function (_super) {\n    __extends(Sting, _super);\n    function Sting(config) {\n        if (config === void 0) { config = {}; }\n        var _this = _super.call(this, __assign({}, defaults, config)) || this;\n        _this.render();\n        return _this;\n    }\n    Sting.prototype.notify = function (message) {\n        var notification = new this.config.notification({\n            message: message,\n            parentElement: this.element,\n            duration: this.config.duration\n        });\n        this.broadcast('notify');\n        notification.enter();\n        this.broadcast('notify:post');\n        return notification;\n    };\n    return Sting;\n}(_sting_base_class__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sting);\nwindow['Sting'] = Sting;\n\n\n//# sourceURL=webpack:///./src/sting.class.ts?");

/***/ }),

/***/ "./src/sting.tag.ts":
/*!**************************!*\
  !*** ./src/sting.tag.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return st; });\nfunction st(strings) {\n    var keys = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        keys[_i - 1] = arguments[_i];\n    }\n    return (function () {\n        var values = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            values[_i] = arguments[_i];\n        }\n        var dict = values[values.length - 1] || {};\n        var result = [strings[0]];\n        keys.forEach(function (key, i) {\n            var value = Number.isInteger(key) ? values[key] : dict[key];\n            result.push(value, strings[i + 1]);\n        });\n        return result.join('');\n    });\n}\n\n\n//# sourceURL=webpack:///./src/sting.tag.ts?");

/***/ })

/******/ });