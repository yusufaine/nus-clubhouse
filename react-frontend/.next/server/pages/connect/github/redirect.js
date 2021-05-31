(function() {
var exports = {};
exports.id = "pages/connect/github/redirect";
exports.ids = ["pages/connect/github/redirect"];
exports.modules = {

/***/ "./pages/connect/github/redirect/index.js":
/*!************************************************!*\
  !*** ./pages/connect/github/redirect/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../context/AuthContext */ "./context/AuthContext.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/connect/github/redirect/index.js";




function index() {
  const {
    loginUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.default);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log('user id: ', router.query.id);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const id = router.query.id;

    if (id) {
      loginUser(router.query.id);
      router.push('/');
    }
  }, [router.query.id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["context_AuthContext_js"], function() { return __webpack_exec__("./pages/connect/github/redirect/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9wYWdlcy9jb25uZWN0L2dpdGh1Yi9yZWRpcmVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5kZXgiLCJsb2dpblVzZXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsInVzZUVmZmVjdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFFYixRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLGlEQUFVLENBQUNDLHlEQUFELENBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsRUFBdEM7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUQsRUFBRSxHQUFHTCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsRUFBeEI7O0FBQ0EsUUFBSUEsRUFBSixFQUFRO0FBQ0pSLGVBQVMsQ0FBQ0csTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQWQsQ0FBVDtBQUNBTCxZQUFNLENBQUNPLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixHQU5RLEVBTU4sQ0FBQ1AsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQWQsQ0FOTSxDQUFUO0FBUUEsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRUQsK0RBQWVULEtBQWYsRTs7Ozs7Ozs7Ozs7QUMxQkEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvY29ubmVjdC9naXRodWIvcmVkaXJlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuXG4gICAgY29uc3QgeyBsb2dpblVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnNvbGUubG9nKCd1c2VyIGlkOiAnLCByb3V0ZXIucXVlcnkuaWQpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZFxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGxvZ2luVXNlcihyb3V0ZXIucXVlcnkuaWQpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9