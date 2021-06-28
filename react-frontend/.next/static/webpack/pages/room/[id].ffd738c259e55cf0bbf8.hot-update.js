self["webpackHotUpdate_N_E"]("pages/room/[id]",{

/***/ "./components/RoomUserList/RoomUserList.js":
/*!*************************************************!*\
  !*** ./components/RoomUserList/RoomUserList.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");
/* harmony import */ var _RoomUserAvatar_RoomUserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RoomUserAvatar/RoomUserAvatar */ "./components/RoomUserAvatar/RoomUserAvatar.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomUserList/RoomUserList.js";




function RoomUserList(_ref) {
  var _this = this;

  var text = _ref.text,
      _ref$users = _ref.users,
      users = _ref$users === void 0 ? [] : _ref$users;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    px: 5,
    py: 6,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
      direction: "row",
      spacing: 4,
      mb: 7,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_1__.default, {
        text: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Badge, {
        px: 4,
        py: 0.5,
        bgColor: "clubhousegrey.400",
        color: "clubhousegrey.800",
        rounded: "lg",
        alignContent: "center",
        fontSize: "md",
        fontWeight: "extrabold",
        children: users.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Wrap, {
      direction: "row",
      spacing: 14,
      w: "100%",
      px: 5,
      children: users.map(function (user, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.WrapItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUserAvatar_RoomUserAvatar__WEBPACK_IMPORTED_MODULE_2__.default, {
            user: user
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_c = RoomUserList;
/* harmony default export */ __webpack_exports__["default"] = (RoomUserList);

var _c;

$RefreshReg$(_c, "RoomUserList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tVXNlckxpc3QvUm9vbVVzZXJMaXN0LmpzIl0sIm5hbWVzIjpbIlJvb21Vc2VyTGlzdCIsInRleHQiLCJ1c2VycyIsImxlbmd0aCIsIm1hcCIsInVzZXIiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQUEwQztBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSx3QkFBWkMsS0FBWTtBQUFBLE1BQVpBLEtBQVksMkJBQU4sRUFBTTtBQUN0QyxzQkFDSSw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQUEsNEJBQ0ksOERBQUMsb0RBQUQ7QUFBUSxlQUFTLEVBQUMsS0FBbEI7QUFBd0IsYUFBTyxFQUFFLENBQWpDO0FBQW9DLFFBQUUsRUFBRSxDQUF4QztBQUFBLDhCQUNJLDhEQUFDLHVEQUFEO0FBQVUsWUFBSSxFQUFFRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyxtREFBRDtBQUNJLFVBQUUsRUFBRSxDQURSO0FBRUksVUFBRSxFQUFFLEdBRlI7QUFHSSxlQUFPLEVBQUMsbUJBSFo7QUFJSSxhQUFLLEVBQUMsbUJBSlY7QUFLSSxlQUFPLEVBQUMsSUFMWjtBQU1JLG9CQUFZLEVBQUMsUUFOakI7QUFPSSxnQkFBUSxFQUFDLElBUGI7QUFRSSxrQkFBVSxFQUFDLFdBUmY7QUFBQSxrQkFVS0MsS0FBSyxDQUFDQztBQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWdCSSw4REFBQyxrREFBRDtBQUFNLGVBQVMsRUFBQyxLQUFoQjtBQUFzQixhQUFPLEVBQUUsRUFBL0I7QUFBbUMsT0FBQyxFQUFDLE1BQXJDO0FBQTRDLFFBQUUsRUFBRSxDQUFoRDtBQUFBLGdCQUNLRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU1DLENBQU47QUFBQSw0QkFDUCw4REFBQyxzREFBRDtBQUFBLGlDQUNJLDhEQUFDLG1FQUFEO0FBQWdCLGdCQUFJLEVBQUVEO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFlQyxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQSxPQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSDs7S0EzQlFOLFk7QUE2QlQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9baWRdLmZmZDczOGMyNTllNTVjZjBiYmY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJveCxcbiAgICBTdGFjayxcbiAgICBIU3RhY2ssXG4gICAgV3JhcCxcbiAgICBXcmFwSXRlbSxcbiAgICBCYWRnZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgQm9sZFRleHQgZnJvbSAnLi4vQm9sZFRleHQvQm9sZFRleHQnXG5pbXBvcnQgUm9vbVVzZXJBdmF0YXIgZnJvbSAnLi4vUm9vbVVzZXJBdmF0YXIvUm9vbVVzZXJBdmF0YXInXG5cbmZ1bmN0aW9uIFJvb21Vc2VyTGlzdCh7IHRleHQsIHVzZXJzPVtdIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHB4PXs1fSBweT17Nn0+XG4gICAgICAgICAgICA8SFN0YWNrIGRpcmVjdGlvbj0ncm93JyBzcGFjaW5nPXs0fSBtYj17N30+XG4gICAgICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9e3RleHR9IC8+XG4gICAgICAgICAgICAgICAgPEJhZGdlIFxuICAgICAgICAgICAgICAgICAgICBweD17NH0gXG4gICAgICAgICAgICAgICAgICAgIHB5PXswLjV9IFxuICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPSdjbHViaG91c2VncmV5LjQwMCcgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdjbHViaG91c2VncmV5LjgwMCcgXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9J2xnJyBcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPSdtZCdcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD0nZXh0cmFib2xkJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3VzZXJzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICA8V3JhcCBkaXJlY3Rpb249J3Jvdycgc3BhY2luZz17MTR9IHc9JzEwMCUnIHB4PXs1fT5cbiAgICAgICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyLGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFdyYXBJdGVtIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um9vbVVzZXJBdmF0YXIgdXNlcj17dXNlcn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9XcmFwPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21Vc2VyTGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==