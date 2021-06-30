self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/UserSignupForm/UserSignupForm.js":
/*!*****************************************************!*\
  !*** ./components/UserSignupForm/UserSignupForm.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ClubhouseBtn/ClubhouseBtn */ "./components/ClubhouseBtn/ClubhouseBtn.js");
/* harmony import */ var _EmailInputGroup_EmailInputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EmailInputGroup/EmailInputGroup */ "./components/EmailInputGroup/EmailInputGroup.js");
/* harmony import */ var _PasswordInputGroup_PasswordInputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PasswordInputGroup/PasswordInputGroup */ "./components/PasswordInputGroup/PasswordInputGroup.js");
/* harmony import */ var _UsernameInputGroup_UsernameInputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UsernameInputGroup/UsernameInputGroup */ "./components/UsernameInputGroup/UsernameInputGroup.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserSignupForm/UserSignupForm.js";



var Yup = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

__webpack_require__(/*! yup-password */ "./node_modules/yup-password/index.js")(Yup);






function UserSignupForm(_ref) {
  var _this = this;

  var handleSubmit = _ref.handleSubmit;
  var validNusEmailRegex = /(@|u.)nus.edu/;
  var signupSchema = Yup.object().shape({
    signup_username: Yup.string().required('Your username is required'),
    signup_email: Yup.string().email('Invalid email') // .matches(validNusEmailRegex, 'Your NUS email is required to join NUS Clubhouse')
    .required('Your NUS email is required'),
    signup_password: Yup.string().password().required('Your password is required').min(8, 'Password must contain at least 8 characters').minNumbers(1, 'Password must contain at least 1 digit').minSymbols(1, 'Password must contain at least 1 symbol')
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      signup_username: '',
      signup_email: '',
      signup_password: ''
    },
    onSubmit: handleSubmit,
    validationSchema: signupSchema,
    children: function children(props) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
            name: "signup_username",
            children: function children(_ref2) {
              var field = _ref2.field,
                  form = _ref2.form;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                isInvalid: form.errors.signup_username && form.touched.signup_username,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UsernameInputGroup_UsernameInputGroup__WEBPACK_IMPORTED_MODULE_5__.default, {
                  field: field,
                  id: "signup_username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormErrorMessage, {
                  children: form.errors.signup_username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
            name: "signup_email",
            children: function children(_ref3) {
              var field = _ref3.field,
                  form = _ref3.form;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                isInvalid: form.errors.signup_email && form.touched.signup_email,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EmailInputGroup_EmailInputGroup__WEBPACK_IMPORTED_MODULE_3__.default, {
                  field: field,
                  id: "signup_email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormErrorMessage, {
                  children: form.errors.signup_email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
          mb: 8,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
            name: "signup_password",
            children: function children(_ref4) {
              var field = _ref4.field,
                  form = _ref4.form;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                isInvalid: form.errors.signup_password && form.touched.signup_password,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordInputGroup_PasswordInputGroup__WEBPACK_IMPORTED_MODULE_4__.default, {
                  field: field,
                  id: "signup_password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormErrorMessage, {
                  children: form.errors.signup_password
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_2__.default, {
          text: "Sign up",
          variant: "primary",
          type: "submit",
          isLoading: props.isSubmitting
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_c = UserSignupForm;
/* harmony default export */ __webpack_exports__["default"] = (UserSignupForm);

var _c;

$RefreshReg$(_c, "UserSignupForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyU2lnbnVwRm9ybS9Vc2VyU2lnbnVwRm9ybS5qcyJdLCJuYW1lcyI6WyJZdXAiLCJyZXF1aXJlIiwiVXNlclNpZ251cEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJ2YWxpZE51c0VtYWlsUmVnZXgiLCJzaWdudXBTY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsInNpZ251cF91c2VybmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwic2lnbnVwX2VtYWlsIiwiZW1haWwiLCJzaWdudXBfcGFzc3dvcmQiLCJwYXNzd29yZCIsIm1pbiIsIm1pbk51bWJlcnMiLCJtaW5TeW1ib2xzIiwicHJvcHMiLCJmaWVsZCIsImZvcm0iLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BOztBQUNBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQywyQ0FBRCxDQUFuQjs7QUFDQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQLENBQXdCRCxHQUF4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxjQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUN0QyxNQUFNQyxrQkFBa0IsR0FBRyxlQUEzQjtBQUNBLE1BQU1DLFlBQVksR0FBR0wsR0FBRyxDQUFDTSxNQUFKLEdBQWFDLEtBQWIsQ0FBbUI7QUFDcENDLG1CQUFlLEVBQUVSLEdBQUcsQ0FBQ1MsTUFBSixHQUNKQyxRQURJLENBQ0ssMkJBREwsQ0FEbUI7QUFHcENDLGdCQUFZLEVBQUVYLEdBQUcsQ0FBQ1MsTUFBSixHQUNERyxLQURDLENBQ0ssZUFETCxFQUVGO0FBRkUsS0FHREYsUUFIQyxDQUdRLDRCQUhSLENBSHNCO0FBT3BDRyxtQkFBZSxFQUFFYixHQUFHLENBQUNTLE1BQUosR0FDSkssUUFESSxHQUVKSixRQUZJLENBRUssMkJBRkws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RUFBRDtBQUFvQix1QkFBSyxFQUFFTSxLQUEzQjtBQUFrQyxvQkFBRSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFHSSw4REFBQyw4REFBRDtBQUFBLDRCQUFtQkMsSUFBSSxDQUFDQyxNQUFMLENBQVlSO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURIO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkosZUFrQ0ksOERBQUMsK0RBQUQ7QUFBYyxjQUFJLEVBQUMsU0FBbkI7QUFBNkIsaUJBQU8sRUFBQyxTQUFyQztBQUErQyxjQUFJLEVBQUMsUUFBcEQ7QUFBNkQsbUJBQVMsRUFBRUssS0FBSyxDQUFDSztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESDtBQUFBO0FBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOENIOztLQS9EUXJCLGM7QUFpRVQsK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZWIwMjkxMTQ0NzNlMDYxOTJjYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQm94LFxuICAgIEZvcm1Db250cm9sLFxuICAgIEZvcm1MYWJlbCxcbiAgICBGb3JtRXJyb3JNZXNzYWdlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuY29uc3QgWXVwID0gcmVxdWlyZSgneXVwJylcbnJlcXVpcmUoJ3l1cC1wYXNzd29yZCcpKFl1cClcblxuaW1wb3J0IENsdWJob3VzZUJ0biBmcm9tICcuLi9DbHViaG91c2VCdG4vQ2x1YmhvdXNlQnRuJ1xuaW1wb3J0IEVtYWlsSW5wdXRHcm91cCBmcm9tICcuLi9FbWFpbElucHV0R3JvdXAvRW1haWxJbnB1dEdyb3VwJ1xuaW1wb3J0IFBhc3N3b3JkSW5wdXRHcm91cCBmcm9tICcuLi9QYXNzd29yZElucHV0R3JvdXAvUGFzc3dvcmRJbnB1dEdyb3VwJ1xuaW1wb3J0IFVzZXJuYW1lSW5wdXRHcm91cCBmcm9tICcuLi9Vc2VybmFtZUlucHV0R3JvdXAvVXNlcm5hbWVJbnB1dEdyb3VwJ1xuXG5mdW5jdGlvbiBVc2VyU2lnbnVwRm9ybSh7IGhhbmRsZVN1Ym1pdCB9KSB7XG4gICAgY29uc3QgdmFsaWROdXNFbWFpbFJlZ2V4ID0gLyhAfHUuKW51cy5lZHUvXG4gICAgY29uc3Qgc2lnbnVwU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgc2lnbnVwX3VzZXJuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHVzZXJuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHNpZ251cF9lbWFpbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5lbWFpbCgnSW52YWxpZCBlbWFpbCcpXG4gICAgICAgICAgICAgICAgICAgIC8vIC5tYXRjaGVzKHZhbGlkTnVzRW1haWxSZWdleCwgJ1lvdXIgTlVTIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGpvaW4gTlVTIENsdWJob3VzZScpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnWW91ciBOVVMgZW1haWwgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgc2lnbnVwX3Bhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDggY2hhcmFjdGVycycpXG4gICAgICAgICAgICAgICAgICAgIC5taW5OdW1iZXJzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBkaWdpdCcpXG4gICAgICAgICAgICAgICAgICAgIC5taW5TeW1ib2xzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBzeW1ib2wnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHNpZ251cF91c2VybmFtZTogJycsIHNpZ251cF9lbWFpbDogJycsIHNpZ251cF9wYXNzd29yZDogJycgfX1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzaWdudXBTY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX3VzZXJuYW1lJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX3VzZXJuYW1lICYmIGZvcm0udG91Y2hlZC5zaWdudXBfdXNlcm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Vc2VybmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJuYW1lSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfdXNlcm5hbWUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfdXNlcm5hbWV9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX2VtYWlsJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX2VtYWlsICYmIGZvcm0udG91Y2hlZC5zaWdudXBfZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfZW1haWwnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfZW1haWx9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX3Bhc3N3b3JkJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX3Bhc3N3b3JkICYmIGZvcm0udG91Y2hlZC5zaWdudXBfcGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfcGFzc3dvcmQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfcGFzc3dvcmR9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPENsdWJob3VzZUJ0biB0ZXh0PSdTaWduIHVwJyB2YXJpYW50PSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnIGlzTG9hZGluZz17cHJvcHMuaXNTdWJtaXR0aW5nfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ251cEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=