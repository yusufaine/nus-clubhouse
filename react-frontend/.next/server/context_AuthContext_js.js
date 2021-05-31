exports.id = "context_AuthContext_js";
exports.ids = ["context_AuthContext_js"];
exports.modules = {

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callAPI": function() { return /* binding */ callAPI; },
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/context/AuthContext.js";



const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const callAPI = async (path, method, body) => {
  console.log('fetching...');
  const response = await fetch(`${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.API_URL}${path}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return data;
};
const AuthProvider = props => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  /**
   * Login user via 3rd party provider
   * @param {any} token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
   */

  const loginUser = async id => {
    try {
      const response = await fetch(`${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.API_URL}/api/me?id=${id}`, {
        headers: {
          "content-type": "application/json"
        },
        credentials: "include"
      });
      const data = await response.json();

      if (!data.username) {
        console.log("Login failed. Please try again. ", data);
      } else {
        const username = data.username;
        console.log('Successfully logged in ', username);
        setUser(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  /**
   * Logs user out by setting user to null
   */


  const logoutUser = async () => {};

  const checkUserLoggedIn = async () => {
    console.log('checking if user logged in.....');
    const user = await callAPI('/api/me', 'GET');

    if (user.email) {
      console.log('user logged in: ', user);
      setUser(user);
    } else {
      setUser(null);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    checkUserLoggedIn();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user,
      logoutUser,
      loginUser
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; }
/* harmony export */ });
const API_URL = "https://api.nusclubhouse.games";

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhbGxBUEkiLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiQVBJX1VSTCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIkF1dGhQcm92aWRlciIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luVXNlciIsImlkIiwidXNlcm5hbWUiLCJlcnIiLCJlcnJvciIsImxvZ291dFVzZXIiLCJjaGVja1VzZXJMb2dnZWRJbiIsImVtYWlsIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVPLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxJQUFQLEVBQWFDLE1BQWIsRUFBcUJDLElBQXJCLEtBQThCO0FBRWpEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxpREFBUSxHQUFFUCxJQUFLLEVBQW5CLEVBQXNCO0FBQzlDQyxVQUQ4QztBQUU5Q08sV0FBTyxFQUFFO0FBQ0wsc0JBQWdCO0FBRFgsS0FGcUM7QUFLOUNDLGVBQVcsRUFBRSxTQUxpQztBQU05Q1AsUUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsSUFBZjtBQU53QyxHQUF0QixDQUE1QjtBQVNBLFFBQU1VLElBQUksR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQVQsRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0gsQ0FmTTtBQWlCQSxNQUFNRSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUVuQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxRQUFNQyxTQUFTLEdBQUcsTUFBT0MsRUFBUCxJQUFjO0FBQzVCLFFBQUk7QUFDQSxZQUFNakIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxpREFBUSxjQUFhZSxFQUFHLEVBQTVCLEVBQStCO0FBQ3ZEZCxlQUFPLEVBQUU7QUFDTCwwQkFBZ0I7QUFEWCxTQUQ4QztBQUl2REMsbUJBQVcsRUFBRTtBQUowQyxPQUEvQixDQUE1QjtBQU9BLFlBQU1HLElBQUksR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQVQsRUFBbkI7O0FBQ0EsVUFBRyxDQUFDRCxJQUFJLENBQUNXLFFBQVQsRUFBbUI7QUFDZnBCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFaLEVBQWdEUSxJQUFoRDtBQUNILE9BRkQsTUFFTztBQUNILGNBQU1XLFFBQVEsR0FBR1gsSUFBSSxDQUFDVyxRQUF0QjtBQUNBcEIsZUFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNtQixRQUF2QztBQUNBTixlQUFPLENBQUNMLElBQUQsQ0FBUDtBQUNIO0FBQ0osS0FoQkQsQ0FnQkUsT0FBT1ksR0FBUCxFQUFZO0FBQ1ZyQixhQUFPLENBQUNzQixLQUFSLENBQWNELEdBQWQ7QUFDSDtBQUNKLEdBcEJEO0FBc0JBO0FBQ0o7QUFDQTs7O0FBQ0ksUUFBTUUsVUFBVSxHQUFHLFlBQVksQ0FFOUIsQ0FGRDs7QUFJQSxRQUFNQyxpQkFBaUIsR0FBRyxZQUFZO0FBQ2xDeEIsV0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDQSxVQUFNWSxJQUFJLEdBQUcsTUFBTWpCLE9BQU8sQ0FBQyxTQUFELEVBQVksS0FBWixDQUExQjs7QUFDQSxRQUFJaUIsSUFBSSxDQUFDWSxLQUFULEVBQWdCO0FBQ1p6QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ1ksSUFBaEM7QUFDQUMsYUFBTyxDQUFDRCxJQUFELENBQVA7QUFDSCxLQUhELE1BR087QUFDSEMsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNIO0FBQ0osR0FURDs7QUFXQVksa0RBQVMsQ0FBQyxNQUFNO0FBQ1pGLHFCQUFpQjtBQUNwQixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0ksOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQ3pCWCxVQUR5QjtBQUV6QlUsZ0JBRnlCO0FBR3pCTDtBQUh5QixLQUE3QjtBQUFBLGNBS0tOLEtBQUssQ0FBQ2U7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFTSCxDQTlETTtBQWdFUCwrREFBZWpDLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZPLE1BQU1VLE9BQU8sR0FBRyxnQ0FBaEIsQyIsImZpbGUiOiJjb250ZXh0X0F1dGhDb250ZXh0X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IGNhbGxBUEkgPSBhc3luYyAocGF0aCwgbWV0aG9kLCBib2R5KSA9PiB7XG4gICAgICAgIFxuICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZy4uLicpXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9JHtwYXRofWAsIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIC8qKlxuICAgICAqIExvZ2luIHVzZXIgdmlhIDNyZCBwYXJ0eSBwcm92aWRlclxuICAgICAqIEBwYXJhbSB7YW55fSB0b2tlbiBvYnRhaW5lZCBieSBwcm92aWRlciB0byBtYWtlIGF1dGhvcml6ZWQgcmVxdWVzdHMgdG8gZ2V0IHVzZXIgaW5mbyBmcm9tIHByb3ZpZGVyICh1c2VybmFtZSwgZW1haWwsIGV0YylcbiAgICAgKi9cbiAgICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL21lP2lkPSR7aWR9YCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGlmKCFkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uIFwiLCBkYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRhdGEudXNlcm5hbWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiAnLCB1c2VybmFtZSlcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIHVzZXIgb3V0IGJ5IHNldHRpbmcgdXNlciB0byBudWxsXG4gICAgICovXG4gICAgY29uc3QgbG9nb3V0VXNlciA9IGFzeW5jICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tpbmcgaWYgdXNlciBsb2dnZWQgaW4uLi4uLicpXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjYWxsQVBJKCcvYXBpL21lJywgJ0dFVCcpXG4gICAgICAgIGlmICh1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBsb2dnZWQgaW46ICcsIHVzZXIpXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaGVja1VzZXJMb2dnZWRJbigpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICAgICAgICB1c2VyLCBcbiAgICAgICAgICAgIGxvZ291dFVzZXIsIFxuICAgICAgICAgICAgbG9naW5Vc2VyXG4gICAgICAgIH19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQiLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9hcGkubnVzY2x1YmhvdXNlLmdhbWVzXCIiXSwic291cmNlUm9vdCI6IiJ9