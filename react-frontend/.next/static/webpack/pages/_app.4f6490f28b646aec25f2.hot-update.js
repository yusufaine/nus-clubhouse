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
/* harmony import */ var phoenix_channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phoenix-channels */ "./node_modules/phoenix-channels/src/index.js");
/* harmony import */ var phoenix_channels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phoenix_channels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
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
            return fetch("".concat(_utils_utils__WEBPACK_IMPORTED_MODULE_6__.API_URL).concat(path), {
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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      roomData = _useState2[0],
      setRoomData = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var successToast = function successToast(text) {
    var subtext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var toast = arguments.length > 2 ? arguments[2] : undefined;
    return toast({
      title: text,
      description: subtext,
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  var errorToast = function errorToast(text) {
    var subtext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var toast = arguments.length > 2 ? arguments[2] : undefined;
    return toast({
      title: text,
      description: subtext,
      status: 'error',
      duration: 3000,
      isClosable: true
    });
  }; // const joinRoom = async (roomId) => {
  //     const body = {
  //         room_id: roomId,
  //         user_id: user.id
  //     }
  //     const data = await callAPI(`/rooms/join`, 'POST', body)
  //     const room = data.data
  //     console.log('data from room join call: ', room)
  //     return room
  // }


  var fetchRoom = /*#__PURE__*/function () {
    var _ref2 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(roomId) {
      var socket, channel;
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // const room = await joinRoom(roomId)
              console.log('joinin room channel...');
              socket = new phoenix_channels__WEBPACK_IMPORTED_MODULE_4__.Socket(_utils_utils__WEBPACK_IMPORTED_MODULE_6__.SOCKET_URL);
              socket.connect();
              console.log(socket);
              channel = socket.channel("room:".concat(roomId));
              console.log(channel);
              channel.join().receive('ok', function (_ref3) {
                var id = _ref3.id,
                    room = _ref3.room,
                    pid = _ref3.pid;
                console.log('room id: ', id);
                console.log('room data: ', room);
                setRoomData(room);
                console.log('room pid: ', pid);
              }).receive('error', function (reason) {
                console.error(reason);
              });
              console.log(channel);
              channel.on('msg', function (_ref4) {
                var msg = _ref4.msg;
                console.log('msg', msg);
              });
              channel.on('room_update', function (_ref5) {
                var new_user = _ref5.new_user;
                console.log('room_update, new user: ', new_user);
              });
              return _context2.abrupt("return", function () {
                channel.leave();
                socket.disconnect();
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchRoom(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var registerUser = /*#__PURE__*/function () {
    var _ref6 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(values, toast, actions) {
      var body, data;
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              actions.setSubmitting(true);
              body = {
                credentials: {
                  username: values.signup_username,
                  email: values.signup_email,
                  password: values.signup_password
                }
              };
              _context3.next = 5;
              return callAPI('/auth/register', 'POST', body);

            case 5:
              data = _context3.sent;

              if (!data.data) {
                console.log("Registration failed. Please try again. ", data);
                errorToast("Failed to register", "", toast);
              } else {
                successToast("Successfully registerd account", "Check your NUS email & confirm your account before logging in!", toast);
                setUser(data.data);
              }

              actions.setSubmitting(false);
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function registerUser(_x5, _x6, _x7) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Login user via 3rd party provider
   * @param {any} token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
   */


  var loginUser = /*#__PURE__*/function () {
    var _ref7 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(values, toast, actions) {
      var body, data, username;
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              actions.setSubmitting(true);
              body = {
                credentials: values
              };
              _context4.next = 5;
              return callAPI('/auth/login', 'POST', body);

            case 5:
              data = _context4.sent;

              if (data.data) {
                username = data.data.username;
                console.log('Successfully logged in ', username);
                successToast("Successfully logged in", "", toast);
                setUser(data.data);
              } else {
                console.log("Login failed. Please try again.", data);
                errorToast("Failed to log in", "Check your email (if you havent confirmed your account) or contact admin!", toast);
              }

              actions.setSubmitting(false);
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function loginUser(_x8, _x9, _x10) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Logs user out by setting user to null
   */


  var logoutUser = /*#__PURE__*/function () {
    var _ref8 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function logoutUser() {
      return _ref8.apply(this, arguments);
    };
  }();

  var checkUserLoggedIn = /*#__PURE__*/function () {
    var _ref9 = (0,_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
      var data;
      return _home_aidan_nusclubhouse_react_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log('checking if user logged in.....');
              _context6.next = 3;
              return callAPI('/auth/me', 'GET');

            case 3:
              data = _context6.sent;

              if (data.data) {
                console.log('user logged in: ', data.data);
                setUser(data.data);
              } else {
                setUser(null);
              }

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function checkUserLoggedIn() {
      return _ref9.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    checkUserLoggedIn();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user: user,
      roomData: roomData,
      registerUser: registerUser,
      loginUser: loginUser,
      logoutUser: logoutUser,
      fetchRoom: fetchRoom
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 9
  }, _this);
};

_s(AuthProvider, "wM45dXokQ16ARnkYpIbKG6wwhAw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjYWxsQVBJIiwicGF0aCIsIm1ldGhvZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJBUElfVVJMIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJyb29tRGF0YSIsInNldFJvb21EYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwic3VjY2Vzc1RvYXN0IiwidGV4dCIsInN1YnRleHQiLCJ0b2FzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJlcnJvclRvYXN0IiwiZmV0Y2hSb29tIiwicm9vbUlkIiwic29ja2V0IiwiU29ja2V0IiwiU09DS0VUX1VSTCIsImNvbm5lY3QiLCJjaGFubmVsIiwiam9pbiIsInJlY2VpdmUiLCJpZCIsInJvb20iLCJwaWQiLCJyZWFzb24iLCJlcnJvciIsIm9uIiwibXNnIiwibmV3X3VzZXIiLCJsZWF2ZSIsImRpc2Nvbm5lY3QiLCJyZWdpc3RlclVzZXIiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwic2V0U3VibWl0dGluZyIsInVzZXJuYW1lIiwic2lnbnVwX3VzZXJuYW1lIiwiZW1haWwiLCJzaWdudXBfZW1haWwiLCJwYXNzd29yZCIsInNpZ251cF9wYXNzd29yZCIsImxvZ2luVXNlciIsImxvZ291dFVzZXIiLCJjaGVja1VzZXJMb2dnZWRJbiIsInVzZUVmZmVjdCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFB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O0FBQ0hLLHVCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0g7O0FBUnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCOEMsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQVdBQyxrREFBUyxDQUFDLFlBQU07QUFDWkQscUJBQWlCO0FBQ3BCLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFDekIvQyxVQUFJLEVBQUpBLElBRHlCO0FBRXpCRSxjQUFRLEVBQVJBLFFBRnlCO0FBR3pCaUMsa0JBQVksRUFBWkEsWUFIeUI7QUFJekJVLGVBQVMsRUFBVEEsU0FKeUI7QUFLekJDLGdCQUFVLEVBQVZBLFVBTHlCO0FBTXpCOUIsZUFBUyxFQUFUQTtBQU55QixLQUE3QjtBQUFBLGNBUUtsQixLQUFLLENBQUNtRDtBQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBaktNOztHQUFNcEQsWTtVQUdNUSxrRDs7O0tBSE5SLFk7QUFtS2IsK0RBQWVqQixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGY2NDkwZjI4YjY0NmFlYzI1ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNvY2tldCB9IGZyb20gJ3Bob2VuaXgtY2hhbm5lbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEFQSV9VUkwsIFNPQ0tFVF9VUkwgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IGNhbGxBUEkgPSBhc3luYyAocGF0aCwgbWV0aG9kLCBib2R5KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2ZldGNoaW5nLi4uJylcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9JHtwYXRofWAsIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcm9vbURhdGEsIHNldFJvb21EYXRhXSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBzdWNjZXNzVG9hc3QgPSAodGV4dCwgc3VidGV4dD1cIlwiLCB0b2FzdCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IHRleHQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3VidGV4dCxcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGVycm9yVG9hc3QgPSAodGV4dCwgc3VidGV4dD1cIlwiLCB0b2FzdCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IHRleHQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3VidGV4dCxcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBqb2luUm9vbSA9IGFzeW5jIChyb29tSWQpID0+IHtcbiAgICAvLyAgICAgY29uc3QgYm9keSA9IHtcbiAgICAvLyAgICAgICAgIHJvb21faWQ6IHJvb21JZCxcbiAgICAvLyAgICAgICAgIHVzZXJfaWQ6IHVzZXIuaWRcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbEFQSShgL3Jvb21zL2pvaW5gLCAnUE9TVCcsIGJvZHkpXG4gICAgLy8gICAgIGNvbnN0IHJvb20gPSBkYXRhLmRhdGFcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2RhdGEgZnJvbSByb29tIGpvaW4gY2FsbDogJywgcm9vbSlcbiAgICAvLyAgICAgcmV0dXJuIHJvb21cbiAgICAvLyB9XG5cbiAgICBjb25zdCBmZXRjaFJvb20gPSBhc3luYyAocm9vbUlkKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHJvb20gPSBhd2FpdCBqb2luUm9vbShyb29tSWQpXG4gICAgICAgIGNvbnNvbGUubG9nKCdqb2luaW4gcm9vbSBjaGFubmVsLi4uJylcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFNvY2tldChTT0NLRVRfVVJMKVxuXG4gICAgICAgIHNvY2tldC5jb25uZWN0KClcbiAgICAgICAgY29uc29sZS5sb2coc29ja2V0KVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSBzb2NrZXQuY2hhbm5lbChgcm9vbToke3Jvb21JZH1gKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGFubmVsKVxuICAgICAgICBjaGFubmVsLmpvaW4oKVxuICAgICAgICAucmVjZWl2ZSgnb2snLCAoe2lkLCByb29tLCBwaWR9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vbSBpZDogJywgaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vbSBkYXRhOiAnLCByb29tKVxuICAgICAgICAgICAgc2V0Um9vbURhdGEocm9vbSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb29tIHBpZDogJywgcGlkKVxuICAgICAgICB9KVxuICAgICAgICAucmVjZWl2ZSgnZXJyb3InLCByZWFzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZWFzb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coY2hhbm5lbClcblxuICAgICAgICBjaGFubmVsLm9uKCdtc2cnLCAoe21zZ30pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtc2cnLCBtc2cpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hhbm5lbC5vbigncm9vbV91cGRhdGUnLCAoeyBuZXdfdXNlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vbV91cGRhdGUsIG5ldyB1c2VyOiAnLCAgbmV3X3VzZXIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNoYW5uZWwubGVhdmUoKVxuICAgICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHZhbHVlcywgdG9hc3QsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyh0cnVlKVxuICAgICAgICAgICAgY29uc3QgYm9keSA9ICB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHZhbHVlcy5zaWdudXBfdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB2YWx1ZXMuc2lnbnVwX2VtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnNpZ251cF9wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbEFQSSgnL2F1dGgvcmVnaXN0ZXInLCAnUE9TVCcsIGJvZHkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFkYXRhLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uIFwiLCBkYXRhKVxuICAgICAgICAgICAgICAgIGVycm9yVG9hc3QoXCJGYWlsZWQgdG8gcmVnaXN0ZXJcIiwgXCJcIiwgdG9hc3QpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NUb2FzdChcIlN1Y2Nlc3NmdWxseSByZWdpc3RlcmQgYWNjb3VudFwiLCBcIkNoZWNrIHlvdXIgTlVTIGVtYWlsICYgY29uZmlybSB5b3VyIGFjY291bnQgYmVmb3JlIGxvZ2dpbmcgaW4hXCIsIHRvYXN0KVxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YS5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dpbiB1c2VyIHZpYSAzcmQgcGFydHkgcHJvdmlkZXJcbiAgICAgKiBAcGFyYW0ge2FueX0gdG9rZW4gb2J0YWluZWQgYnkgcHJvdmlkZXIgdG8gbWFrZSBhdXRob3JpemVkIHJlcXVlc3RzIHRvIGdldCB1c2VyIGluZm8gZnJvbSBwcm92aWRlciAodXNlcm5hbWUsIGVtYWlsLCBldGMpXG4gICAgICovXG4gICAgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKHZhbHVlcywgdG9hc3QsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyh0cnVlKVxuICAgICAgICAgICAgY29uc3QgYm9keSA9ICB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IHZhbHVlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxBUEkoJy9hdXRoL2xvZ2luJywgJ1BPU1QnLCBib2R5KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihkYXRhLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRhdGEuZGF0YS51c2VybmFtZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIGluICcsIHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NUb2FzdChcIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW5cIiwgXCJcIiwgdG9hc3QpXG4gICAgICAgICAgICAgICAgc2V0VXNlcihkYXRhLmRhdGEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCBkYXRhKVxuICAgICAgICAgICAgICAgIGVycm9yVG9hc3QoXCJGYWlsZWQgdG8gbG9nIGluXCIsIFwiQ2hlY2sgeW91ciBlbWFpbCAoaWYgeW91IGhhdmVudCBjb25maXJtZWQgeW91ciBhY2NvdW50KSBvciBjb250YWN0IGFkbWluIVwiLCB0b2FzdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSlcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyB1c2VyIG91dCBieSBzZXR0aW5nIHVzZXIgdG8gbnVsbFxuICAgICAqL1xuICAgIGNvbnN0IGxvZ291dFVzZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNraW5nIGlmIHVzZXIgbG9nZ2VkIGluLi4uLi4nKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbEFQSSgnL2F1dGgvbWUnLCAnR0VUJylcbiAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgbG9nZ2VkIGluOiAnLCBkYXRhLmRhdGEpXG4gICAgICAgICAgICBzZXRVc2VyKGRhdGEuZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNoZWNrVXNlckxvZ2dlZEluKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBcbiAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICByb29tRGF0YSxcbiAgICAgICAgICAgIHJlZ2lzdGVyVXNlciwgXG4gICAgICAgICAgICBsb2dpblVzZXIsXG4gICAgICAgICAgICBsb2dvdXRVc2VyLFxuICAgICAgICAgICAgZmV0Y2hSb29tXG4gICAgICAgIH19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9