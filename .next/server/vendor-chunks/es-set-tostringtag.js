"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-set-tostringtag";
exports.ids = ["vendor-chunks/es-set-tostringtag"];
exports.modules = {

/***/ "(rsc)/./node_modules/es-set-tostringtag/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-set-tostringtag/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(rsc)/./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(rsc)/./node_modules/has-tostringtag/shams.js\")();\nvar hasOwn = __webpack_require__(/*! hasown */ \"(rsc)/./node_modules/hasown/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(rsc)/./node_modules/es-errors/type.js\");\n\nvar toStringTag = hasToStringTag ? Symbol.toStringTag : null;\n\n/** @type {import('.')} */\nmodule.exports = function setToStringTag(object, value) {\n\tvar overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;\n\tvar nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;\n\tif (\n\t\t(typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean')\n\t\t|| (typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean')\n\t) {\n\t\tthrow new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');\n\t}\n\tif (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {\n\t\tif ($defineProperty) {\n\t\t\t$defineProperty(object, toStringTag, {\n\t\t\t\tconfigurable: !nonConfigurable,\n\t\t\t\tenumerable: false,\n\t\t\t\tvalue: value,\n\t\t\t\twritable: false\n\t\t\t});\n\t\t} else {\n\t\t\tobject[toStringTag] = value; // eslint-disable-line no-param-reassign\n\t\t}\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXMtc2V0LXRvc3RyaW5ndGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFlOztBQUUxQzs7QUFFQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDcEQsYUFBYSxtQkFBTyxDQUFDLG9EQUFRO0FBQzdCLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFnQjs7QUFFekM7O0FBRUEsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGtqaDU4XFzrrLjshJxcXEdpdEh1YlxcbmV4dF9sYWJcXG5vZGVfbW9kdWxlc1xcZXMtc2V0LXRvc3RyaW5ndGFnXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG5cbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnaGFzb3duJyk7XG52YXIgJFR5cGVFcnJvciA9IHJlcXVpcmUoJ2VzLWVycm9ycy90eXBlJyk7XG5cbnZhciB0b1N0cmluZ1RhZyA9IGhhc1RvU3RyaW5nVGFnID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogbnVsbDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0VG9TdHJpbmdUYWcob2JqZWN0LCB2YWx1ZSkge1xuXHR2YXIgb3ZlcnJpZGVJZlNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmICEhYXJndW1lbnRzWzJdICYmIGFyZ3VtZW50c1syXS5mb3JjZTtcblx0dmFyIG5vbkNvbmZpZ3VyYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmICEhYXJndW1lbnRzWzJdICYmIGFyZ3VtZW50c1syXS5ub25Db25maWd1cmFibGU7XG5cdGlmIChcblx0XHQodHlwZW9mIG92ZXJyaWRlSWZTZXQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvdmVycmlkZUlmU2V0ICE9PSAnYm9vbGVhbicpXG5cdFx0fHwgKHR5cGVvZiBub25Db25maWd1cmFibGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBub25Db25maWd1cmFibGUgIT09ICdib29sZWFuJylcblx0KSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2lmIHByb3ZpZGVkLCB0aGUgYG92ZXJyaWRlSWZTZXRgIGFuZCBgbm9uQ29uZmlndXJhYmxlYCBvcHRpb25zIG11c3QgYmUgYm9vbGVhbnMnKTtcblx0fVxuXHRpZiAodG9TdHJpbmdUYWcgJiYgKG92ZXJyaWRlSWZTZXQgfHwgIWhhc093bihvYmplY3QsIHRvU3RyaW5nVGFnKSkpIHtcblx0XHRpZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0XHQkZGVmaW5lUHJvcGVydHkob2JqZWN0LCB0b1N0cmluZ1RhZywge1xuXHRcdFx0XHRjb25maWd1cmFibGU6ICFub25Db25maWd1cmFibGUsXG5cdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9iamVjdFt0b1N0cmluZ1RhZ10gPSB2YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdH1cblx0fVxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/es-set-tostringtag/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/es-set-tostringtag/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-set-tostringtag/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\nvar hasOwn = __webpack_require__(/*! hasown */ \"(ssr)/./node_modules/hasown/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(ssr)/./node_modules/es-errors/type.js\");\n\nvar toStringTag = hasToStringTag ? Symbol.toStringTag : null;\n\n/** @type {import('.')} */\nmodule.exports = function setToStringTag(object, value) {\n\tvar overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;\n\tvar nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;\n\tif (\n\t\t(typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean')\n\t\t|| (typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean')\n\t) {\n\t\tthrow new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');\n\t}\n\tif (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {\n\t\tif ($defineProperty) {\n\t\t\t$defineProperty(object, toStringTag, {\n\t\t\t\tconfigurable: !nonConfigurable,\n\t\t\t\tenumerable: false,\n\t\t\t\tvalue: value,\n\t\t\t\twritable: false\n\t\t\t});\n\t\t} else {\n\t\t\tobject[toStringTag] = value; // eslint-disable-line no-param-reassign\n\t\t}\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXMtc2V0LXRvc3RyaW5ndGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFlOztBQUUxQzs7QUFFQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDcEQsYUFBYSxtQkFBTyxDQUFDLG9EQUFRO0FBQzdCLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFnQjs7QUFFekM7O0FBRUEsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGtqaDU4XFzrrLjshJxcXEdpdEh1YlxcbmV4dF9sYWJcXG5vZGVfbW9kdWxlc1xcZXMtc2V0LXRvc3RyaW5ndGFnXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG5cbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnaGFzb3duJyk7XG52YXIgJFR5cGVFcnJvciA9IHJlcXVpcmUoJ2VzLWVycm9ycy90eXBlJyk7XG5cbnZhciB0b1N0cmluZ1RhZyA9IGhhc1RvU3RyaW5nVGFnID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogbnVsbDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0VG9TdHJpbmdUYWcob2JqZWN0LCB2YWx1ZSkge1xuXHR2YXIgb3ZlcnJpZGVJZlNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmICEhYXJndW1lbnRzWzJdICYmIGFyZ3VtZW50c1syXS5mb3JjZTtcblx0dmFyIG5vbkNvbmZpZ3VyYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmICEhYXJndW1lbnRzWzJdICYmIGFyZ3VtZW50c1syXS5ub25Db25maWd1cmFibGU7XG5cdGlmIChcblx0XHQodHlwZW9mIG92ZXJyaWRlSWZTZXQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvdmVycmlkZUlmU2V0ICE9PSAnYm9vbGVhbicpXG5cdFx0fHwgKHR5cGVvZiBub25Db25maWd1cmFibGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBub25Db25maWd1cmFibGUgIT09ICdib29sZWFuJylcblx0KSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2lmIHByb3ZpZGVkLCB0aGUgYG92ZXJyaWRlSWZTZXRgIGFuZCBgbm9uQ29uZmlndXJhYmxlYCBvcHRpb25zIG11c3QgYmUgYm9vbGVhbnMnKTtcblx0fVxuXHRpZiAodG9TdHJpbmdUYWcgJiYgKG92ZXJyaWRlSWZTZXQgfHwgIWhhc093bihvYmplY3QsIHRvU3RyaW5nVGFnKSkpIHtcblx0XHRpZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0XHQkZGVmaW5lUHJvcGVydHkob2JqZWN0LCB0b1N0cmluZ1RhZywge1xuXHRcdFx0XHRjb25maWd1cmFibGU6ICFub25Db25maWd1cmFibGUsXG5cdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9iamVjdFt0b1N0cmluZ1RhZ10gPSB2YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdH1cblx0fVxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/es-set-tostringtag/index.js\n");

/***/ })

};
;