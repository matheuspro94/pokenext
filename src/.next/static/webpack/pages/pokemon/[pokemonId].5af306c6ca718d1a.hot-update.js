"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokemon/[pokemonId]",{

/***/ "./pages/pokemon/[pokemonId].tsx":
/*!***************************************!*\
  !*** ./pages/pokemon/[pokemonId].tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pokemon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_PokemonStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/PokemonStyled */ \"./styles/PokemonStyled.ts\");\n\n\n\nvar __N_SSG = true;\nfunction Pokemon(param) {\n    var pokemon = param.pokemon;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PokemonStyled__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: pokemon.name\n            }, void 0, false, {\n                fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            console.log(pokemon),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"https://cdn.traction.one/pokedex/pokemon/\".concat(pokemon.id, \".png\"),\n                width: \"200\",\n                height: \"200\",\n                alt: pokemon.name\n            }, void 0, false, {\n                fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"N\\xfamero:\"\n                    }, void 0, false, {\n                        fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"#\",\n                            pokemon.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Tipo:\"\n                    }, void 0, false, {\n                        fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: pokemon.types.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: item.type.name\n                            }, index, false, {\n                                fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mathues/projetos/pokenext/src/pages/pokemon/[pokemonId].tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n};\n_c = Pokemon;\nvar _c;\n$RefreshReg$(_c, \"Pokemon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDK0I7QUFDd0I7O0FBdUN4QyxTQUFTRSxPQUFPLENBQUMsS0FBVyxFQUFFO1FBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTzs7SUFDdkMscUJBQ0UsOERBQUNGLDZEQUFhOzswQkFDWiw4REFBQ0csSUFBRTswQkFBRUQsT0FBTyxDQUFDRSxJQUFJOzs7OztvQkFBTTtZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQzswQkFDckIsOERBQUNILG1EQUFLO2dCQUNKUSxHQUFHLEVBQUUsMkNBQTBDLENBQWEsTUFBSSxDQUFmTCxPQUFPLENBQUNNLEVBQUUsRUFBQyxNQUFJLENBQUM7Z0JBQ2pFQyxLQUFLLEVBQUMsS0FBSztnQkFDWEMsTUFBTSxFQUFDLEtBQUs7Z0JBQ1pDLEdBQUcsRUFBRVQsT0FBTyxDQUFDRSxJQUFJOzs7OztvQkFDakI7MEJBQ0YsOERBQUNRLEtBQUc7O2tDQUNGLDhEQUFDQyxJQUFFO2tDQUFDLFlBQU87Ozs7OzRCQUFLO2tDQUNoQiw4REFBQ0MsR0FBQzs7NEJBQUMsR0FBQzs0QkFBQ1osT0FBTyxDQUFDTSxFQUFFOzs7Ozs7NEJBQUs7Ozs7OztvQkFDaEI7MEJBQ04sOERBQUNJLEtBQUc7O2tDQUNGLDhEQUFDQyxJQUFFO2tDQUFDLE9BQUs7Ozs7OzRCQUFLO2tDQUNkLDhEQUFDRCxLQUFHO2tDQUNEVixPQUFPLENBQUNhLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSztpREFDN0IsOERBQUNDLE1BQUk7MENBQWNGLElBQUksQ0FBQ0csSUFBSSxDQUFDaEIsSUFBSTsrQkFBdEJjLEtBQUs7Ozs7cUNBQXlCO3lCQUMxQyxDQUFDOzs7Ozs0QkFDRTs7Ozs7O29CQUNGOzs7Ozs7WUFDUSxDQUNqQjtDQUNGO0FBekJ1QmpCLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9bcG9rZW1vbklkXS50c3g/OTBkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFBva2Vtb25TdHlsZWQgZnJvbSAnLi4vLi4vc3R5bGVzL1Bva2Vtb25TdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG1heFBva2Vtb25zOiBudW1iZXIgPSAyNTE7XG4gICAgY29uc3QgQVBJOiBzdHJpbmcgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uJztcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSX0vP2xpbWl0PSR7bWF4UG9rZW1vbnN9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEucmVzdWx0cy5tYXAoKHBva2Vtb24sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHsgcG9rZW1vbklkOiAoaW5kZXggKyAxKS50b1N0cmluZygpIH0sXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBwYXRocyxcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMucG9rZW1vbklkXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBwb2tlbW9uOiBkYXRhIH0sXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKHsgcG9rZW1vbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPFBva2Vtb25TdHlsZWQ+XG4gICAgICA8aDE+e3Bva2Vtb24ubmFtZX08L2gxPlxuICAgICAge2NvbnNvbGUubG9nKHBva2Vtb24pfVxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17YGh0dHBzOi8vY2RuLnRyYWN0aW9uLm9uZS9wb2tlZGV4L3Bva2Vtb24vJHtwb2tlbW9uLmlkfS5wbmdgfVxuICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgIGFsdD17cG9rZW1vbi5uYW1lfVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5Ow7ptZXJvOjwvaDM+XG4gICAgICAgIDxwPiN7cG9rZW1vbi5pZH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5UaXBvOjwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Bva2Vtb24udHlwZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW0udHlwZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Bva2Vtb25TdHlsZWQ+XG4gIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJQb2tlbW9uU3R5bGVkIiwiUG9rZW1vbiIsInBva2Vtb24iLCJoMSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic3JjIiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImRpdiIsImgzIiwicCIsInR5cGVzIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3BhbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokemonId].tsx\n");

/***/ })

});