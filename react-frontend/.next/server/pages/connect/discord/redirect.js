(function() {
var exports = {};
exports.id = "pages/connect/discord/redirect";
exports.ids = ["pages/connect/discord/redirect"];
exports.modules = {

/***/ "./pages/connect/discord/redirect/index.js":
/*!*************************************************!*\
  !*** ./pages/connect/discord/redirect/index.js ***!
  \*************************************************/
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

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/connect/discord/redirect/index.js";




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
var __webpack_exports__ = __webpack_require__.X(0, ["context_AuthContext_js"], function() { return __webpack_exec__("./pages/connect/discord/redirect/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9wYWdlcy9jb25uZWN0L2Rpc2NvcmQvcmVkaXJlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluZGV4IiwibG9naW5Vc2VyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJ1c2VFZmZlY3QiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBRWIsUUFBTTtBQUFFQztBQUFGLE1BQWdCQyxpREFBVSxDQUFDQyx5REFBRCxDQUFoQztBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkgsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQXRDO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1ELEVBQUUsR0FBR0wsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQXhCOztBQUNBLFFBQUlBLEVBQUosRUFBUTtBQUNKUixlQUFTLENBQUNHLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUFkLENBQVQ7QUFDQUwsWUFBTSxDQUFDTyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FOUSxFQU1OLENBQUNQLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUFkLENBTk0sQ0FBVDtBQVFBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztBQUVELCtEQUFlVCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDMUJBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2Nvbm5lY3QvZGlzY29yZC9yZWRpcmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vLi4vLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgICBjb25zdCB7IGxvZ2luVXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc29sZS5sb2coJ3VzZXIgaWQ6ICcsIHJvdXRlci5xdWVyeS5pZClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgbG9naW5Vc2VyKHJvdXRlci5xdWVyeS5pZClcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXIucXVlcnkuaWRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=