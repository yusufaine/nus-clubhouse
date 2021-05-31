self["webpackHotUpdate_N_E"]("pages/connect/discord/redirect",{

/***/ "./pages/connect/discord/redirect/index.js":
/*!*************************************************!*\
  !*** ./pages/connect/discord/redirect/index.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../context/AuthContext */ "./context/AuthContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/connect/discord/redirect/index.js",
    _s = $RefreshSig$();





function index() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.default),
      loginUser = _useContext.loginUser;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log('user id: ', router.query.id);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var id = router.query.id;

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

_s(index, "Cln0D7O8wwN2pXzFO4oR8JqCwSk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29ubmVjdC9kaXNjb3JkL3JlZGlyZWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwibG9naW5Vc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJ1c2VFZmZlY3QiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsb0JBRVNDLGlEQUFVLENBQUNDLHlEQUFELENBRm5CO0FBQUEsTUFFTEMsU0FGSyxlQUVMQSxTQUZLOztBQUdiLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkgsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQXRDO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1ELEVBQUUsR0FBR0wsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQXhCOztBQUNBLFFBQUlBLEVBQUosRUFBUTtBQUNKTixlQUFTLENBQUNDLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUFkLENBQVQ7QUFDQUwsWUFBTSxDQUFDTyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FOUSxFQU1OLENBQUNQLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUFkLENBTk0sQ0FBVDtBQVFBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQXBCUVQsSztVQUdVSyxrRDs7O0FBbUJuQiwrREFBZUwsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb25uZWN0L2Rpc2NvcmQvcmVkaXJlY3QuMmUxM2Y4YzZhYzg0N2Q5MWQ0ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vLi4vLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgICBjb25zdCB7IGxvZ2luVXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc29sZS5sb2coJ3VzZXIgaWQ6ICcsIHJvdXRlci5xdWVyeS5pZClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgbG9naW5Vc2VyKHJvdXRlci5xdWVyeS5pZClcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXIucXVlcnkuaWRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==