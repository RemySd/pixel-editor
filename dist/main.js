/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/stylesheets/pixelEditor.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/stylesheets/pixelEditor.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/pipette.png */ \"./assets/icons/pipette.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/pen.png */ \"./assets/icons/pen.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".pixelTable {\\n  border-collapse: collapse;\\n  background-color: white;\\n}\\n\\n.pixelTable tr {\\n  height: 20px;\\n}\\n\\n.pixelTable td {\\n  width: 20px;\\n  border: 1px dotted lightgrey;\\n  box-sizing: border-box;\\n  /*cursor: pointer;*/\\n}\\n\\n.pixelTable td:hover {\\n  background-color: #ececec;\\n}\\n\\n.color-input {\\n  border: 1px solid #dcdcdc;\\n  -webkit-appearance: none;\\n  padding: 0;\\n  border: none;\\n  border-radius: 50%;\\n  width: 30px;\\n  height: 30px;\\n  cursor: pointer;\\n}\\n\\n.color-input::-webkit-color-swatch {\\n  border: none;\\n  border-radius: 50%;\\n  padding: 0;\\n}\\n\\n.color-input::-webkit-color-swatch-wrapper {\\n  border: none;\\n  border-radius: 50%;\\n  padding: 0;\\n}\\n\\n.color-input:hover {\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n}\\n\\n#pixel-tools {\\n  margin-top: 20px;\\n}\\n\\n.pipette {\\n  cursor: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"), auto;\\n  margin-top: 10px;\\n}\\n\\n.pen {\\n  cursor: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), auto;\\n  margin-top: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pixel-editor/./assets/stylesheets/pixelEditor.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pixel-editor/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://pixel-editor/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./assets/stylesheets/pixelEditor.scss":
/*!*********************************************!*\
  !*** ./assets/stylesheets/pixelEditor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pixelEditor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./pixelEditor.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/stylesheets/pixelEditor.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pixelEditor_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pixelEditor_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pixelEditor_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pixelEditor_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pixel-editor/./assets/stylesheets/pixelEditor.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pixel-editor/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pixel-editor/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pixel-editor/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pixel-editor/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pixel-editor/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pixel-editor/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Factory/PixelEditorFactory.ts":
/*!*******************************************!*\
  !*** ./src/Factory/PixelEditorFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Model_PixelGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/PixelGrid */ \"./src/Model/PixelGrid.ts\");\n/* harmony import */ var _Model_pixelEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/pixelEditor */ \"./src/Model/pixelEditor.ts\");\n/* harmony import */ var _Model_PixelBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/PixelBox */ \"./src/Model/PixelBox.ts\");\n\n\n\nvar PixelEditorFactory = /** @class */ (function () {\n    function PixelEditorFactory() {\n        this.PEN = 66;\n        this.PIPETTE = 73;\n        this.CURSOR_CODE = {\n            66: 'pen',\n            73: 'pipette'\n        };\n        this.AVAILABLE_KEYCODE = [\n            this.PEN,\n            this.PIPETTE\n        ];\n    }\n    PixelEditorFactory.prototype.buildPixelEditor = function (name, column, line) {\n        this.pixelEditor = new _Model_pixelEditor__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n        this.pixelEditor.pixelGrid = new _Model_PixelGrid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](column, line);\n        // pixelEditor.makeGrid();\n        // Get the pixel editor in DOM\n        var domEditor = document.getElementById(name);\n        var table = document.createElement('table');\n        table.classList.add('pixelTable');\n        domEditor.appendChild(table);\n        for (var i = 0; i < column; i++) {\n            var lastLine = this.buildLine();\n            table.appendChild(lastLine);\n            for (var j = 0; j < line; j++) {\n                var pixelBox = new _Model_PixelBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"](i, j, this.pixelEditor.pixelGrid);\n                this.pixelEditor.pixelGrid.addPixelBox(pixelBox);\n                var boxDom = this.buildBox();\n                lastLine.appendChild(boxDom);\n            }\n        }\n        this.toolEvent();\n        return this.pixelEditor;\n    };\n    PixelEditorFactory.prototype.toolEvent = function () {\n        var _this = this;\n        document.body.addEventListener('keyup', function (event) {\n            if (!_this.AVAILABLE_KEYCODE.includes(event.keyCode)) {\n                return true;\n            }\n            document.body.removeAttribute('class');\n            // @ts-ignore\n            document.body.classList.add(_this.CURSOR_CODE[event.keyCode]);\n            // @ts-ignore\n            _this.pixelEditor.tool = _this.CURSOR_CODE[event.keyCode];\n        }, false);\n    };\n    PixelEditorFactory.prototype.buildBox = function () {\n        var newBox = document.createElement('td');\n        newBox.classList.add('box');\n        newBox = this.buildBoxEvent(newBox);\n        newBox.style.background = '#ffffff';\n        return newBox;\n    };\n    PixelEditorFactory.prototype.buildLine = function () {\n        var newBoxLine = document.createElement('tr');\n        newBoxLine.classList.add('boxLine');\n        return newBoxLine;\n    };\n    PixelEditorFactory.prototype.buildBoxEvent = function (box) {\n        var _this = this;\n        box.addEventListener('mousedown', function () {\n            if (_this.pixelEditor.tool === 'pen') {\n                box.style.background = document.querySelector('.color-input').value;\n            }\n            if (_this.pixelEditor.tool === 'pipette') {\n                var color = box.style.background.match(/rgba?\\((\\d{1,3}), ?(\\d{1,3}), ?(\\d{1,3})\\)?(?:, ?(\\d(?:\\.\\d?))\\))?/);\n                document.querySelector('.color-input').value = _this.rgbToHex(color[1], color[2], color[3]);\n            }\n            _this.pixelEditor.mousedown = true;\n        });\n        box.addEventListener('mouseup', function () {\n            _this.pixelEditor.mousedown = false;\n        });\n        box.addEventListener('mouseover', function () {\n            if (_this.pixelEditor.mousedown && _this.pixelEditor.tool === 'pen') {\n                box.style.background = document.querySelector('.color-input').value;\n            }\n            if (_this.pixelEditor.mousedown && _this.pixelEditor.tool === 'pipette') {\n                var color = box.style.background.match(/rgba?\\((\\d{1,3}), ?(\\d{1,3}), ?(\\d{1,3})\\)?(?:, ?(\\d(?:\\.\\d?))\\))?/);\n                document.querySelector('.color-input').value = _this.rgbToHex(color[1], color[2], color[3]);\n            }\n        });\n        return box;\n    };\n    PixelEditorFactory.prototype.rgbToHex = function (red, green, blue) {\n        return \"#\" + ((1 << 24) + (Number(red) << 16) + (Number(green) << 8) + Number(blue)).toString(16).slice(1);\n    };\n    return PixelEditorFactory;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PixelEditorFactory);\n\n\n//# sourceURL=webpack://pixel-editor/./src/Factory/PixelEditorFactory.ts?");

/***/ }),

/***/ "./src/Model/PixelBox.ts":
/*!*******************************!*\
  !*** ./src/Model/PixelBox.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PixelBox = /** @class */ (function () {\n    function PixelBox(x, y, pixelGrid) {\n        this._x = x;\n        this._y = y;\n        // box HtmlElement\n        var newBox = document.createElement('td');\n        newBox.classList.add('box');\n        this._htmlElement = newBox;\n    }\n    PixelBox.prototype.rgbToHex = function (red, green, blue) {\n        return \"#\" + ((1 << 24) + (Number(red) << 16) + (Number(green) << 8) + Number(blue)).toString(16).slice(1);\n    };\n    PixelBox.prototype.updateColor = function (newColor) {\n        this._htmlElement.style.background = newColor;\n    };\n    Object.defineProperty(PixelBox.prototype, \"pixelGrid\", {\n        get: function () {\n            return this._pixelGrid;\n        },\n        set: function (pixelGrid) {\n            this._pixelGrid = pixelGrid;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PixelBox.prototype, \"x\", {\n        get: function () {\n            return this._x;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PixelBox.prototype, \"y\", {\n        get: function () {\n            return this._y;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return PixelBox;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PixelBox);\n\n\n//# sourceURL=webpack://pixel-editor/./src/Model/PixelBox.ts?");

/***/ }),

/***/ "./src/Model/PixelGrid.ts":
/*!********************************!*\
  !*** ./src/Model/PixelGrid.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PixelGrid = /** @class */ (function () {\n    function PixelGrid(column, line) {\n        this.column = column;\n        this.line = line;\n    }\n    Object.defineProperty(PixelGrid.prototype, \"pixelBoxs\", {\n        get: function () {\n            return this._pixelBoxs;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    PixelGrid.prototype.addPixelBox = function (pixelBox) {\n        this._pixelBoxs.push(pixelBox);\n        pixelBox.pixelGrid = this;\n    };\n    PixelGrid.prototype.getPixelBoxByPos = function (x, y) {\n        for (var i = 0; i < this._pixelBoxs.length; i++) {\n            var pixelBox = this._pixelBoxs[i];\n            if (pixelBox.x === x && pixelBox.y === y) {\n                return pixelBox;\n            }\n        }\n        return null;\n    };\n    return PixelGrid;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PixelGrid);\n\n\n//# sourceURL=webpack://pixel-editor/./src/Model/PixelGrid.ts?");

/***/ }),

/***/ "./src/Model/pixelEditor.ts":
/*!**********************************!*\
  !*** ./src/Model/pixelEditor.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PixelEditor = /** @class */ (function () {\n    function PixelEditor(id) {\n        this._id = id;\n        this._mousedown = false;\n        this._tool = 'pen';\n    }\n    Object.defineProperty(PixelEditor.prototype, \"id\", {\n        get: function () {\n            return this._id;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PixelEditor.prototype, \"pixelGrid\", {\n        get: function () {\n            return this._pixelGrid;\n        },\n        set: function (pixelGrid) {\n            this._pixelGrid = pixelGrid;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PixelEditor.prototype, \"mousedown\", {\n        get: function () {\n            return this._mousedown;\n        },\n        set: function (mousedown) {\n            this._mousedown = mousedown;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PixelEditor.prototype, \"tool\", {\n        get: function () {\n            return this._tool;\n        },\n        set: function (tool) {\n            this._tool = tool;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return PixelEditor;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PixelEditor);\n\n\n//# sourceURL=webpack://pixel-editor/./src/Model/pixelEditor.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Factory_PixelEditorFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factory/PixelEditorFactory */ \"./src/Factory/PixelEditorFactory.ts\");\n/* harmony import */ var scss_pixelEditor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/pixelEditor.scss */ \"./assets/stylesheets/pixelEditor.scss\");\n\n\nvar pixelEditorFactory = new _Factory_PixelEditorFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\npixelEditorFactory.buildPixelEditor('pixel-editor', 10, 10);\n\n\n//# sourceURL=webpack://pixel-editor/./src/index.ts?");

/***/ }),

/***/ "./assets/icons/pen.png":
/*!******************************!*\
  !*** ./assets/icons/pen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8552a6199804a18fc673.png\";\n\n//# sourceURL=webpack://pixel-editor/./assets/icons/pen.png?");

/***/ }),

/***/ "./assets/icons/pipette.png":
/*!**********************************!*\
  !*** ./assets/icons/pipette.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e5c0dfb75833be8d35e.png\";\n\n//# sourceURL=webpack://pixel-editor/./assets/icons/pipette.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;