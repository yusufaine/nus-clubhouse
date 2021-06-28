self["webpackHotUpdate_N_E"]("pages/room/[id]",{

/***/ "./components/RoomUsersSection/RoomUsersSection.js":
/*!*********************************************************!*\
  !*** ./components/RoomUsersSection/RoomUsersSection.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _RoomUserList_RoomUserList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoomUserList/RoomUserList */ "./components/RoomUserList/RoomUserList.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomUsersSection/RoomUsersSection.js",
    _s = $RefreshSig$();






function RoomUsersSection() {
  _s();

  // const speakers = ['user1','user1','user1','user1','user1','user1','user1']
  // const listeners = ['user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1']
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.default),
      roomData = _useContext.roomData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      speakers = _useState[0],
      setSpeakers = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      listeners = _useState2[0],
      setListeners = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (roomData) {
      setSpeakers(roomData.users);
      setListeners(roomData.users);
    }
  }, [roomData]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUserList_RoomUserList__WEBPACK_IMPORTED_MODULE_3__.default, {
      text: "Speakers",
      users: speakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUserList_RoomUserList__WEBPACK_IMPORTED_MODULE_3__.default, {
      text: "Listeners",
      users: listeners
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

_s(RoomUsersSection, "c3IYOryGHMJi41jrQQNSF5rGWkI=");

_c = RoomUsersSection;
/* harmony default export */ __webpack_exports__["default"] = (RoomUsersSection);

var _c;

$RefreshReg$(_c, "RoomUsersSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tVXNlcnNTZWN0aW9uL1Jvb21Vc2Vyc1NlY3Rpb24uanMiXSwibmFtZXMiOlsiUm9vbVVzZXJzU2VjdGlvbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInJvb21EYXRhIiwidXNlU3RhdGUiLCJzcGVha2VycyIsInNldFNwZWFrZXJzIiwibGlzdGVuZXJzIiwic2V0TGlzdGVuZXJzIiwidXNlRWZmZWN0IiwidXNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFDeEI7QUFDQTtBQUZ3QixvQkFJSEMsaURBQVUsQ0FBQ0MseURBQUQsQ0FKUDtBQUFBLE1BSWhCQyxRQUpnQixlQUloQkEsUUFKZ0I7O0FBQUEsa0JBS1FDLCtDQUFRLENBQUMsRUFBRCxDQUxoQjtBQUFBLE1BS2pCQyxRQUxpQjtBQUFBLE1BS1BDLFdBTE87O0FBQUEsbUJBTVVGLCtDQUFRLENBQUMsRUFBRCxDQU5sQjtBQUFBLE1BTWpCRyxTQU5pQjtBQUFBLE1BTU5DLFlBTk07O0FBUXhCQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJTixRQUFKLEVBQWM7QUFDVkcsaUJBQVcsQ0FBQ0gsUUFBUSxDQUFDTyxLQUFWLENBQVg7QUFDQUYsa0JBQVksQ0FBQ0wsUUFBUSxDQUFDTyxLQUFWLENBQVo7QUFDSDtBQUNKLEdBTFEsRUFLTixDQUFDUCxRQUFELENBTE0sQ0FBVDtBQVFBLHNCQUNJLDhEQUFDLGlEQUFEO0FBQUEsNEJBQ0ksOERBQUMsK0RBQUQ7QUFBYyxVQUFJLEVBQUMsVUFBbkI7QUFBOEIsV0FBSyxFQUFFRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQywrREFBRDtBQUFjLFVBQUksRUFBQyxXQUFuQjtBQUErQixXQUFLLEVBQUVFO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQXRCUVAsZ0I7O0tBQUFBLGdCO0FBd0JULCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL1tpZF0uMmYxZTNlYWJkMzlhNDYzZDVlNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgQm94XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IFJvb21Vc2VyTGlzdCBmcm9tICcuLi9Sb29tVXNlckxpc3QvUm9vbVVzZXJMaXN0J1xuXG5mdW5jdGlvbiBSb29tVXNlcnNTZWN0aW9uKCkge1xuICAgIC8vIGNvbnN0IHNwZWFrZXJzID0gWyd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMSddXG4gICAgLy8gY29uc3QgbGlzdGVuZXJzID0gWyd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMSddXG5cbiAgICBjb25zdCB7IHJvb21EYXRhIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICAgIGNvbnN0IFtzcGVha2Vycywgc2V0U3BlYWtlcnNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2xpc3RlbmVycywgc2V0TGlzdGVuZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHJvb21EYXRhKSB7XG4gICAgICAgICAgICBzZXRTcGVha2Vycyhyb29tRGF0YS51c2VycylcbiAgICAgICAgICAgIHNldExpc3RlbmVycyhyb29tRGF0YS51c2VycylcbiAgICAgICAgfVxuICAgIH0sIFtyb29tRGF0YV0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Um9vbVVzZXJMaXN0IHRleHQ9J1NwZWFrZXJzJyB1c2Vycz17c3BlYWtlcnN9Lz5cbiAgICAgICAgICAgIDxSb29tVXNlckxpc3QgdGV4dD0nTGlzdGVuZXJzJyB1c2Vycz17bGlzdGVuZXJzfSAvPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21Vc2Vyc1NlY3Rpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=