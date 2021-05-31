self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callAPI": function() { return /* binding */ callAPI; },
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/context/AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();




var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();
var callAPI = /*#__PURE__*/function () {
  var _ref = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(path, method, body) {
    var response, data;
    return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('fetching...');
            _context.next = 3;
            return fetch("".concat(_utils_utils__WEBPACK_IMPORTED_MODULE_5__.API_URL).concat(path), {
              method: method,
              headers: {
                "content-type": "application/json"
              },
              credentials: "include",
              body: JSON.stringify(body)
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function callAPI(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var AuthProvider = function AuthProvider(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      user = _useState[0],
      setUser = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  /**
   * Login user via 3rd party provider
   * @param {any} token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
   */

  var loginUser = /*#__PURE__*/function () {
    var _ref2 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id) {
      var response, data, username;
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("".concat(_utils_utils__WEBPACK_IMPORTED_MODULE_5__.API_URL, "/api/me?id=").concat(id), {
                headers: {
                  "content-type": "application/json"
                },
                credentials: "include"
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              data = _context2.sent;

              if (!data.username) {
                console.log("Login failed. Please try again. ", data);
              } else {
                username = data.username;
                console.log('Successfully logged in ', username);
                setUser(data);
              }

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function loginUser(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Logs user out by setting user to null
   */


  var logoutUser = /*#__PURE__*/function () {
    var _ref3 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function logoutUser() {
      return _ref3.apply(this, arguments);
    };
  }();

  var checkUserLoggedIn = /*#__PURE__*/function () {
    var _ref4 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
      var user;
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('checking if user logged in.....');
              _context4.next = 3;
              return callAPI('/api/me', 'GET');

            case 3:
              user = _context4.sent;

              if (user.email) {
                console.log('user logged in: ', user);
                setUser(user);
              } else {
                setUser(null);
              }

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function checkUserLoggedIn() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    checkUserLoggedIn();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user: user,
      logoutUser: logoutUser,
      loginUser: loginUser
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, _this);
};

_s(AuthProvider, "25Tui8jvMJyuI9/atfD+OQY5XIo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = AuthProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

var _c;

$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjYWxsQVBJIiwicGF0aCIsIm1ldGhvZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJBUElfVVJMIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpblVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZXJyb3IiLCJsb2dvdXRVc2VyIiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJlbWFpbCIsInVzZUVmZmVjdCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVPLElBQU1DLE9BQU87QUFBQSwrUkFBRyxpQkFBT0MsSUFBUCxFQUFhQyxNQUFiLEVBQXFCQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbkJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBRm1CO0FBQUEsbUJBSUlDLEtBQUssV0FBSUMsaURBQUosU0FBY04sSUFBZCxHQUFzQjtBQUM5Q0Msb0JBQU0sRUFBTkEsTUFEOEM7QUFFOUNNLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWCxlQUZxQztBQUs5Q0MseUJBQVcsRUFBRSxTQUxpQztBQU05Q04sa0JBQUksRUFBRU8sSUFBSSxDQUFDQyxTQUFMLENBQWVSLElBQWY7QUFOd0MsYUFBdEIsQ0FKVDs7QUFBQTtBQUliUyxvQkFKYTtBQUFBO0FBQUEsbUJBYUFBLFFBQVEsQ0FBQ0MsSUFBVCxFQWJBOztBQUFBO0FB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NTY3OWQ5MDM0ZWY4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IGNhbGxBUEkgPSBhc3luYyAocGF0aCwgbWV0aG9kLCBib2R5KSA9PiB7XG4gICAgICAgIFxuICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZy4uLicpXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9JHtwYXRofWAsIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIC8qKlxuICAgICAqIExvZ2luIHVzZXIgdmlhIDNyZCBwYXJ0eSBwcm92aWRlclxuICAgICAqIEBwYXJhbSB7YW55fSB0b2tlbiBvYnRhaW5lZCBieSBwcm92aWRlciB0byBtYWtlIGF1dGhvcml6ZWQgcmVxdWVzdHMgdG8gZ2V0IHVzZXIgaW5mbyBmcm9tIHByb3ZpZGVyICh1c2VybmFtZSwgZW1haWwsIGV0YylcbiAgICAgKi9cbiAgICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL21lP2lkPSR7aWR9YCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGlmKCFkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uIFwiLCBkYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRhdGEudXNlcm5hbWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiAnLCB1c2VybmFtZSlcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIHVzZXIgb3V0IGJ5IHNldHRpbmcgdXNlciB0byBudWxsXG4gICAgICovXG4gICAgY29uc3QgbG9nb3V0VXNlciA9IGFzeW5jICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tpbmcgaWYgdXNlciBsb2dnZWQgaW4uLi4uLicpXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjYWxsQVBJKCcvYXBpL21lJywgJ0dFVCcpXG4gICAgICAgIGlmICh1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBsb2dnZWQgaW46ICcsIHVzZXIpXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaGVja1VzZXJMb2dnZWRJbigpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICAgICAgICB1c2VyLCBcbiAgICAgICAgICAgIGxvZ291dFVzZXIsIFxuICAgICAgICAgICAgbG9naW5Vc2VyXG4gICAgICAgIH19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9