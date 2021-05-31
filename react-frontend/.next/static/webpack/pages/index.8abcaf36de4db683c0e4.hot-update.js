self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/LoginBox/LoginBox.js":
/*!*****************************************!*\
  !*** ./components/LoginBox/LoginBox.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");
/* harmony import */ var _LoginGithubBtn_LoginGithubBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoginGithubBtn/LoginGithubBtn */ "./components/LoginGithubBtn/LoginGithubBtn.js");
/* harmony import */ var _LoginDiscordBtn_LoginDiscordBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LoginDiscordBtn/LoginDiscordBtn */ "./components/LoginDiscordBtn/LoginDiscordBtn.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/LoginBox/LoginBox.js";


var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js").default;






function LoginBox() {
  var loginGithub = function loginGithub() {
    // call API to log into github
    axios.get("".concat(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.API_URL, "/auth/github")).then(function (response) {
      console.log('response from api auth: ', response);
    });
  };

  var loginGithubUrl = "".concat(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.API_URL, "/auth/github");
  var loginDiscordUrl = "".concat(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.API_URL, "/auth/discord");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: "column",
    px: "40px",
    py: "44px",
    bgColor: "clubhousegrey.300",
    w: "400px",
    rounded: "lg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_1__.default, {
      text: "Welcome"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
      mt: 4,
      children: ["By logging in you accept our ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
        children: "Privacy Policy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 46
      }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
        children: "Terms of Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 78
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
      spacing: "30px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginGithubBtn_LoginGithubBtn__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "".concat(loginGithubUrl),
        mt: 10
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginDiscordBtn_LoginDiscordBtn__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: "".concat(loginDiscordUrl)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_c = LoginBox;
/* harmony default export */ __webpack_exports__["default"] = (LoginBox);

var _c;

$RefreshReg$(_c, "LoginBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkJveC9Mb2dpbkJveC5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJMb2dpbkJveCIsImxvZ2luR2l0aHViIiwiZ2V0IiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkdpdGh1YlVybCIsImxvZ2luRGlzY29yZFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFLQSxJQUFNQSxLQUFLLEdBQUdDLHlFQUFkOztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFFaEIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QjtBQUNBSCxTQUFLLENBQ0pJLEdBREQsV0FDUUMsaURBRFIsbUJBRUNDLElBRkQsQ0FFTSxVQUFDQyxRQUFELEVBQWM7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEVBQXdDRixRQUF4QztBQUNILEtBSkQ7QUFLSCxHQVBEOztBQVNBLE1BQU1HLGNBQWMsYUFBTUwsaURBQU4saUJBQXBCO0FBQ0EsTUFBTU0sZUFBZSxhQUFNTixpREFBTixrQkFBckI7QUFFQSxzQkFDSSw4REFBQyxtREFBRDtBQUFPLGFBQVMsRUFBQyxRQUFqQjtBQUEwQixNQUFFLEVBQUMsTUFBN0I7QUFBb0MsTUFBRSxFQUFDLE1BQXZDO0FBQThDLFdBQU8sRUFBQyxtQkFBdEQ7QUFBMEUsS0FBQyxFQUFDLE9BQTVFO0FBQW9GLFdBQU8sRUFBQyxJQUE1RjtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQVUsVUFBSSxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxRQUFFLEVBQUUsQ0FBVjtBQUFBLCtEQUNpQyw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURqQyx3QkFDaUUsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFLSSw4REFBQyxtREFBRDtBQUFPLGFBQU8sRUFBQyxNQUFmO0FBQUEsOEJBRUksOERBQUMsbUVBQUQ7QUFBZ0IsWUFBSSxZQUFLSyxjQUFMLENBQXBCO0FBQTJDLFVBQUUsRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSw4REFBQyxxRUFBRDtBQUFpQixZQUFJLFlBQUtDLGVBQUw7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0tBM0JRVCxRO0FBNkJULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhhYmNhZjM2ZGU0ZGI2ODNjMGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBMaW5rLFxuICAgIFRleHQsXG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0XG5cblxuaW1wb3J0IEJvbGRUZXh0IGZyb20gJy4uL0JvbGRUZXh0L0JvbGRUZXh0J1xuaW1wb3J0IExvZ2luR2l0aHViQnRuIGZyb20gJy4uL0xvZ2luR2l0aHViQnRuL0xvZ2luR2l0aHViQnRuJ1xuaW1wb3J0IExvZ2luRGlzY29yZEJ0biBmcm9tICcuLi9Mb2dpbkRpc2NvcmRCdG4vTG9naW5EaXNjb3JkQnRuJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5mdW5jdGlvbiBMb2dpbkJveCgpIHtcblxuICAgIGNvbnN0IGxvZ2luR2l0aHViID0gKCkgPT4ge1xuICAgICAgICAvLyBjYWxsIEFQSSB0byBsb2cgaW50byBnaXRodWJcbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldChgJHtBUElfVVJMfS9hdXRoL2dpdGh1YmApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIGZyb20gYXBpIGF1dGg6ICcsIHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGxvZ2luR2l0aHViVXJsID0gYCR7QVBJX1VSTH0vYXV0aC9naXRodWJgXG4gICAgY29uc3QgbG9naW5EaXNjb3JkVXJsID0gYCR7QVBJX1VSTH0vYXV0aC9kaXNjb3JkYFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0nY29sdW1uJyBweD0nNDBweCcgcHk9JzQ0cHgnIGJnQ29sb3I9J2NsdWJob3VzZWdyZXkuMzAwJyB3PSc0MDBweCcgcm91bmRlZD0nbGcnPlxuICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9J1dlbGNvbWUnIC8+XG4gICAgICAgICAgICA8VGV4dCBtdD17NH0+XG4gICAgICAgICAgICAgICAgQnkgbG9nZ2luZyBpbiB5b3UgYWNjZXB0IG91ciA8TGluaz5Qcml2YWN5IFBvbGljeTwvTGluaz4gYW5kIDxMaW5rPlRlcm1zIG9mIFNlcnZpY2U8L0xpbms+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz0nMzBweCcgPlxuICAgICAgICAgICAgICAgIHsvKiA8TG9naW5OVVNCdG4gLz4gKi99XG4gICAgICAgICAgICAgICAgPExvZ2luR2l0aHViQnRuIGhyZWY9e2Ake2xvZ2luR2l0aHViVXJsfWB9IG10PXsxMH0vPlxuICAgICAgICAgICAgICAgIDxMb2dpbkRpc2NvcmRCdG4gaHJlZj17YCR7bG9naW5EaXNjb3JkVXJsfWB9IC8+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Cb3hcbiJdLCJzb3VyY2VSb290IjoiIn0=