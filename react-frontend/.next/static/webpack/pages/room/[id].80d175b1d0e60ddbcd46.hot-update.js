self["webpackHotUpdate_N_E"]("pages/room/[id]",{

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
              channel = socket.channel("room:".concat(roomId), {
                params: {
                  token: window.userToken
                }
              });
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

            case 8:
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
    lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjYWxsQVBJIiwicGF0aCIsIm1ldGhvZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJBUElfVVJMIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJyb29tRGF0YSIsInNldFJvb21EYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwic3VjY2Vzc1RvYXN0IiwidGV4dCIsInN1YnRleHQiLCJ0b2FzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJlcnJvclRvYXN0IiwiZmV0Y2hSb29tIiwicm9vbUlkIiwic29ja2V0IiwiU29ja2V0IiwiU09DS0VUX1VSTCIsImNvbm5lY3QiLCJjaGFubmVsIiwicGFyYW1zIiwidG9rZW4iLCJ3aW5kb3ciLCJ1c2VyVG9rZW4iLCJqb2luIiwicmVjZWl2ZSIsImlkIiwicm9vbSIsInBpZCIsInJlYXNvbiIsImVycm9yIiwib24iLCJtc2ciLCJuZXdfdXNlciIsImxlYXZlIiwiZGlzY29ubmVjdCIsInJlZ2lzdGVyVXNlciIsInZhbHVlcyIsImFjdGlvbnMiLCJzZXRTdWJtaXR0aW5nIiwidXNlcm5hbWUiLCJzaWdudXBfdXNlcm5hbWUiLCJlbWFpbCIsInNpZ251cF9lbWFpbCIsInBhc3N3b3JkIiwic2lnbnVwX3Bhc3N3b3JkIiwibG9naW5Vc2VyIiwibG9nb3V0VXNlciIsImNoZWNrVXNlckxvZ2dlZEluIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUFDSEssdUJBQU8sQ0FBQyxJQUFELENBQVA7QUFDSDs7QUFScUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBakJrRCxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBV0FDLGtEQUFTLENBQUMsWUFBTTtBQUNaRCxxQkFBaUI7QUFDcEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNJLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUN6Qm5ELFVBQUksRUFBSkEsSUFEeUI7QUFFekJFLGNBQVEsRUFBUkEsUUFGeUI7QUFHekJxQyxrQkFBWSxFQUFaQSxZQUh5QjtBQUl6QlUsZUFBUyxFQUFUQSxTQUp5QjtBQUt6QkMsZ0JBQVUsRUFBVkEsVUFMeUI7QUFNekJsQyxlQUFTLEVBQVRBO0FBTnlCLEtBQTdCO0FBQUEsY0FRS2xCLEtBQUssQ0FBQ3VEO0FBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0E1Sk07O0dBQU14RCxZO1VBR01RLGtEOzs7S0FITlIsWTtBQThKYiwrREFBZWpCLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9baWRdLjgwZDE3NWIxZDBlNjBkZGJjZDQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tICdwaG9lbml4LWNoYW5uZWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBBUElfVVJMLCBTT0NLRVRfVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCBjYWxsQVBJID0gYXN5bmMgKHBhdGgsIG1ldGhvZCwgYm9keSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZy4uLicpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfSR7cGF0aH1gLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3Jvb21EYXRhLCBzZXRSb29tRGF0YV0gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3Qgc3VjY2Vzc1RvYXN0ID0gKHRleHQsIHN1YnRleHQ9XCJcIiwgdG9hc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHN1YnRleHQsXG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvclRvYXN0ID0gKHRleHQsIHN1YnRleHQ9XCJcIiwgdG9hc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHN1YnRleHQsXG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gY29uc3Qgam9pblJvb20gPSBhc3luYyAocm9vbUlkKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgLy8gICAgICAgICByb29tX2lkOiByb29tSWQsXG4gICAgLy8gICAgICAgICB1c2VyX2lkOiB1c2VyLmlkXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxBUEkoYC9yb29tcy9qb2luYCwgJ1BPU1QnLCBib2R5KVxuICAgIC8vICAgICBjb25zdCByb29tID0gZGF0YS5kYXRhXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gcm9vbSBqb2luIGNhbGw6ICcsIHJvb20pXG4gICAgLy8gICAgIHJldHVybiByb29tXG4gICAgLy8gfVxuXG4gICAgY29uc3QgZmV0Y2hSb29tID0gYXN5bmMgKHJvb21JZCkgPT4ge1xuICAgICAgICAvLyBjb25zdCByb29tID0gYXdhaXQgam9pblJvb20ocm9vbUlkKVxuICAgICAgICBjb25zb2xlLmxvZygnam9pbmluIHJvb20gY2hhbm5lbC4uLicpXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IG5ldyBTb2NrZXQoU09DS0VUX1VSTClcbiAgICAgICAgXG4gICAgICAgIHNvY2tldC5jb25uZWN0KClcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IHNvY2tldC5jaGFubmVsKGByb29tOiR7cm9vbUlkfWAsIHtwYXJhbXM6IHt0b2tlbjogd2luZG93LnVzZXJUb2tlbn19KVxuICAgICAgICBjaGFubmVsLmpvaW4oKVxuICAgICAgICAucmVjZWl2ZSgnb2snLCAoe2lkLCByb29tLCBwaWR9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vbSBpZDogJywgaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vbSBkYXRhOiAnLCByb29tKVxuICAgICAgICAgICAgc2V0Um9vbURhdGEocm9vbSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb29tIHBpZDogJywgcGlkKVxuICAgICAgICB9KVxuICAgICAgICAucmVjZWl2ZSgnZXJyb3InLCByZWFzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZWFzb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hhbm5lbC5vbignbXNnJywgKHttc2d9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbXNnJywgbXNnKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNoYW5uZWwub24oJ3Jvb21fdXBkYXRlJywgKHsgbmV3X3VzZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jvb21fdXBkYXRlLCBuZXcgdXNlcjogJywgIG5ld191c2VyKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjaGFubmVsLmxlYXZlKClcbiAgICAgICAgICAgIHNvY2tldC5kaXNjb25uZWN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh2YWx1ZXMsIHRvYXN0LCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSAge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB2YWx1ZXMuc2lnbnVwX3VzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdmFsdWVzLnNpZ251cF9lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5zaWdudXBfcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxBUEkoJy9hdXRoL3JlZ2lzdGVyJywgJ1BPU1QnLCBib2R5KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLiBcIiwgZGF0YSlcbiAgICAgICAgICAgICAgICBlcnJvclRvYXN0KFwiRmFpbGVkIHRvIHJlZ2lzdGVyXCIsIFwiXCIsIHRvYXN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzVG9hc3QoXCJTdWNjZXNzZnVsbHkgcmVnaXN0ZXJkIGFjY291bnRcIiwgXCJDaGVjayB5b3VyIE5VUyBlbWFpbCAmIGNvbmZpcm0geW91ciBhY2NvdW50IGJlZm9yZSBsb2dnaW5nIGluIVwiLCB0b2FzdClcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSlcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naW4gdXNlciB2aWEgM3JkIHBhcnR5IHByb3ZpZGVyXG4gICAgICogQHBhcmFtIHthbnl9IHRva2VuIG9idGFpbmVkIGJ5IHByb3ZpZGVyIHRvIG1ha2UgYXV0aG9yaXplZCByZXF1ZXN0cyB0byBnZXQgdXNlciBpbmZvIGZyb20gcHJvdmlkZXIgKHVzZXJuYW1lLCBlbWFpbCwgZXRjKVxuICAgICAqL1xuICAgIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh2YWx1ZXMsIHRvYXN0LCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSAge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB2YWx1ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsQVBJKCcvYXV0aC9sb2dpbicsICdQT1NUJywgYm9keSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhLmRhdGEudXNlcm5hbWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiAnLCB1c2VybmFtZSlcbiAgICAgICAgICAgICAgICBzdWNjZXNzVG9hc3QoXCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluXCIsIFwiXCIsIHRvYXN0KVxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YS5kYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiwgZGF0YSlcbiAgICAgICAgICAgICAgICBlcnJvclRvYXN0KFwiRmFpbGVkIHRvIGxvZyBpblwiLCBcIkNoZWNrIHlvdXIgZW1haWwgKGlmIHlvdSBoYXZlbnQgY29uZmlybWVkIHlvdXIgYWNjb3VudCkgb3IgY29udGFjdCBhZG1pbiFcIiwgdG9hc3QpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ3MgdXNlciBvdXQgYnkgc2V0dGluZyB1c2VyIHRvIG51bGxcbiAgICAgKi9cbiAgICBjb25zdCBsb2dvdXRVc2VyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBpZiB1c2VyIGxvZ2dlZCBpbi4uLi4uJylcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxBUEkoJy9hdXRoL21lJywgJ0dFVCcpXG4gICAgICAgIGlmIChkYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGxvZ2dlZCBpbjogJywgZGF0YS5kYXRhKVxuICAgICAgICAgICAgc2V0VXNlcihkYXRhLmRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaGVja1VzZXJMb2dnZWRJbigpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgcm9vbURhdGEsXG4gICAgICAgICAgICByZWdpc3RlclVzZXIsIFxuICAgICAgICAgICAgbG9naW5Vc2VyLFxuICAgICAgICAgICAgbG9nb3V0VXNlcixcbiAgICAgICAgICAgIGZldGNoUm9vbVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==