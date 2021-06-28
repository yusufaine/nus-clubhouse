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
            username: user.username
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tVXNlckxpc3QvUm9vbVVzZXJMaXN0LmpzIl0sIm5hbWVzIjpbIlJvb21Vc2VyTGlzdCIsInRleHQiLCJ1c2VycyIsImxlbmd0aCIsIm1hcCIsInVzZXIiLCJpIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLHdCQUFaQyxLQUFZO0FBQUEsTUFBWkEsS0FBWSwyQkFBTixFQUFNO0FBQ3RDLHNCQUNJLDhEQUFDLGlEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsQ0FBaEI7QUFBQSw0QkFDSSw4REFBQyxvREFBRDtBQUFRLGVBQVMsRUFBQyxLQUFsQjtBQUF3QixhQUFPLEVBQUUsQ0FBakM7QUFBb0MsUUFBRSxFQUFFLENBQXhDO0FBQUEsOEJBQ0ksOERBQUMsdURBQUQ7QUFBVSxZQUFJLEVBQUVEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLG1EQUFEO0FBQ0ksVUFBRSxFQUFFLENBRFI7QUFFSSxVQUFFLEVBQUUsR0FGUjtBQUdJLGVBQU8sRUFBQyxtQkFIWjtBQUlJLGFBQUssRUFBQyxtQkFKVjtBQUtJLGVBQU8sRUFBQyxJQUxaO0FBTUksb0JBQVksRUFBQyxRQU5qQjtBQU9JLGdCQUFRLEVBQUMsSUFQYjtBQVFJLGtCQUFVLEVBQUMsV0FSZjtBQUFBLGtCQVVLQyxLQUFLLENBQUNDO0FBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBZ0JJLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLGFBQU8sRUFBRSxFQUEvQjtBQUFtQyxPQUFDLEVBQUMsTUFBckM7QUFBNEMsUUFBRSxFQUFFLENBQWhEO0FBQUEsZ0JBQ0tELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBTUMsQ0FBTjtBQUFBLDRCQUNQLDhEQUFDLHNEQUFEO0FBQUEsaUNBQ0ksOERBQUMsbUVBQUQ7QUFBZ0Isb0JBQVEsRUFBRUQsSUFBSSxDQUFDRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBZUQsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7O0tBM0JRTixZO0FBNkJULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vW2lkXS42MGVjY2MzYmI0YmQ3NTY5YTk0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgU3RhY2ssXG4gICAgSFN0YWNrLFxuICAgIFdyYXAsXG4gICAgV3JhcEl0ZW0sXG4gICAgQmFkZ2Vcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IEJvbGRUZXh0IGZyb20gJy4uL0JvbGRUZXh0L0JvbGRUZXh0J1xuaW1wb3J0IFJvb21Vc2VyQXZhdGFyIGZyb20gJy4uL1Jvb21Vc2VyQXZhdGFyL1Jvb21Vc2VyQXZhdGFyJ1xuXG5mdW5jdGlvbiBSb29tVXNlckxpc3QoeyB0ZXh0LCB1c2Vycz1bXSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBweD17NX0gcHk9ezZ9PlxuICAgICAgICAgICAgPEhTdGFjayBkaXJlY3Rpb249J3Jvdycgc3BhY2luZz17NH0gbWI9ezd9PlxuICAgICAgICAgICAgICAgIDxCb2xkVGV4dCB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgICAgICAgICAgIDxCYWRnZSBcbiAgICAgICAgICAgICAgICAgICAgcHg9ezR9IFxuICAgICAgICAgICAgICAgICAgICBweT17MC41fSBcbiAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj0nY2x1YmhvdXNlZ3JleS40MDAnIFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0nY2x1YmhvdXNlZ3JleS44MDAnIFxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkPSdsZycgXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudD0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9J2V4dHJhYm9sZCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt1c2Vycy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgPFdyYXAgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezE0fSB3PScxMDAlJyBweD17NX0+XG4gICAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlcixpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxXcmFwSXRlbSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21Vc2VyQXZhdGFyIHVzZXJuYW1lPXt1c2VyLnVzZXJuYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvV3JhcEl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1dyYXA+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbVVzZXJMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9