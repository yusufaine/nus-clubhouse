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
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phoenix */ "phoenix");
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phoenix__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/context/AuthContext.js";




const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const callAPI = async (path, method, body) => {
  console.log('fetching...');
  const response = await fetch(`${_utils_utils__WEBPACK_IMPORTED_MODULE_4__.API_URL}${path}`, {
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
  const {
    0: roomData,
    1: setRoomData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const successToast = (text, subtext = "", toast) => {
    return toast({
      title: text,
      description: subtext,
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  const errorToast = (text, subtext = "", toast) => {
    return toast({
      title: text,
      description: subtext,
      status: 'error',
      duration: 3000,
      isClosable: true
    });
  };

  const fetchRoom = async roomId => {
    // const room = await joinRoom(roomId)
    console.log('joinin room channel...');
    const socket = new phoenix__WEBPACK_IMPORTED_MODULE_2__.Socket(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.SOCKET_URL);
    socket.connect();
    console.log(socket);
    const channel = socket.channel(`room:${roomId}`);
    console.log(channel);
    channel.join().receive('ok', ({
      id,
      room,
      pid
    }) => {
      console.log('room id: ', id);
      console.log('room data: ', room);
      setRoomData(room);
      console.log('room pid: ', pid);
    }).receive('error', reason => {
      console.error(reason);
    });
    console.log(channel);
    channel.on('msg', ({
      msg
    }) => {
      console.log('msg', msg);
    });
    channel.on('room_update', ({
      new_user
    }) => {
      console.log('room_update, new user: ', new_user);
    });
    return () => {
      channel.leave();
      socket.disconnect();
    };
  };

  const registerUser = async (values, toast, actions) => {
    try {
      actions.setSubmitting(true);
      const body = {
        credentials: {
          username: values.signup_username,
          email: values.signup_email,
          password: values.signup_password
        }
      };
      const data = await callAPI('/auth/register', 'POST', body);

      if (!data.data) {
        console.log("Registration failed. Please try again. ", data);
        errorToast("Failed to register", "", toast);
      } else {
        successToast("Successfully registerd account", "Check your NUS email & confirm your account before logging in!", toast);
        setUser(data.data);
      }

      actions.setSubmitting(false);
    } catch (err) {
      console.error(err);
    }
  };
  /**
   * Login user via 3rd party provider
   * @param {any} token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
   */


  const loginUser = async (values, toast, actions) => {
    try {
      actions.setSubmitting(true);
      const body = {
        credentials: values
      };
      const data = await callAPI('/auth/login', 'POST', body);

      if (data.data) {
        const username = data.data.username;
        console.log('Successfully logged in ', username);
        successToast("Successfully logged in", "", toast);
        setUser(data.data);
      } else {
        console.log("Login failed. Please try again.", data);
        errorToast("Failed to log in", "Check your email (if you havent confirmed your account) or contact admin!", toast);
      }

      actions.setSubmitting(false);
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
    const data = await callAPI('/auth/me', 'GET');

    if (data.data) {
      console.log('user logged in: ', data.data);
      setUser(data.data);
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
      roomData,
      registerUser,
      loginUser,
      logoutUser,
      fetchRoom
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 161,
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
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "SOCKET_URL": function() { return /* binding */ SOCKET_URL; }
/* harmony export */ });
const API_URL = "http://localhost:4000/api"; //"https://api.nusclubhouse.games"

const SOCKET_URL = "ws://localhost:4000/socket";

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhbGxBUEkiLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiQVBJX1VSTCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIkF1dGhQcm92aWRlciIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInJvb21EYXRhIiwic2V0Um9vbURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWNjZXNzVG9hc3QiLCJ0ZXh0Iiwic3VidGV4dCIsInRvYXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImVycm9yVG9hc3QiLCJmZXRjaFJvb20iLCJyb29tSWQiLCJzb2NrZXQiLCJTb2NrZXQiLCJTT0NLRVRfVVJMIiwiY29ubmVjdCIsImNoYW5uZWwiLCJqb2luIiwicmVjZWl2ZSIsImlkIiwicm9vbSIsInBpZCIsInJlYXNvbiIsImVycm9yIiwib24iLCJtc2ciLCJuZXdfdXNlciIsImxlYXZlIiwiZGlzY29ubmVjdCIsInJlZ2lzdGVyVXNlciIsInZhbHVlcyIsImFjdGlvbnMiLCJzZXRTdWJtaXR0aW5nIiwidXNlcm5hbWUiLCJzaWdudXBfdXNlcm5hbWUiLCJlbWFpbCIsInNpZ251cF9lbWFpbCIsInBhc3N3b3JkIiwic2lnbnVwX3Bhc3N3b3JkIiwiZXJyIiwibG9naW5Vc2VyIiwibG9nb3V0VXNlciIsImNoZWNrVXNlckxvZ2dlZEluIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RkQ7O0FBSUEsUUFBTUMsaUJBQWlCLEdBQUcsWUFBWTtBQUNsQzlELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0EsVUFBTVEsSUFBSSxHQUFHLE1BQU1iLE9BQU8sQ0FBQyxVQUFELEVBQWEsS0FBYixDQUExQjs7QUFDQSxRQUFJYSxJQUFJLENBQUNBLElBQVQsRUFBZTtBQUNYVCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ1EsSUFBSSxDQUFDQSxJQUFyQztBQUNBSyxhQUFPLENBQUNMLElBQUksQ0FBQ0EsSUFBTixDQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0hLLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDSDtBQUNKLEdBVEQ7O0FBV0FpRCxrREFBUyxDQUFDLE1BQU07QUFDWkQscUJBQWlCO0FBQ3BCLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFDekJqRCxVQUR5QjtBQUV6QkcsY0FGeUI7QUFHekJpQyxrQkFIeUI7QUFJekJXLGVBSnlCO0FBS3pCQyxnQkFMeUI7QUFNekIvQjtBQU55QixLQUE3QjtBQUFBLGNBUUtsQixLQUFLLENBQUNvRDtBQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBdEpNO0FBd0pQLCtEQUFldEUsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0tPLE1BQU1VLE9BQU8sR0FBRywyQkFBaEIsQyxDQUEyQzs7QUFDM0MsTUFBTThCLFVBQVUsR0FBRyw0QkFBbkIsQyIsImZpbGUiOiJjb250ZXh0X0F1dGhDb250ZXh0X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSAncGhvZW5peCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQVBJX1VSTCwgU09DS0VUX1VSTCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgY29uc3QgY2FsbEFQSSA9IGFzeW5jIChwYXRoLCBtZXRob2QsIGJvZHkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcuLi4nKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0ke3BhdGh9YCwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtyb29tRGF0YSwgc2V0Um9vbURhdGFdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IHN1Y2Nlc3NUb2FzdCA9ICh0ZXh0LCBzdWJ0ZXh0PVwiXCIsIHRvYXN0KSA9PiB7XG4gICAgICAgIHJldHVybiB0b2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogdGV4dCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdWJ0ZXh0LFxuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JUb2FzdCA9ICh0ZXh0LCBzdWJ0ZXh0PVwiXCIsIHRvYXN0KSA9PiB7XG4gICAgICAgIHJldHVybiB0b2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogdGV4dCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdWJ0ZXh0LFxuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZldGNoUm9vbSA9IGFzeW5jIChyb29tSWQpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgcm9vbSA9IGF3YWl0IGpvaW5Sb29tKHJvb21JZClcbiAgICAgICAgY29uc29sZS5sb2coJ2pvaW5pbiByb29tIGNoYW5uZWwuLi4nKVxuICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgU29ja2V0KFNPQ0tFVF9VUkwpXG5cbiAgICAgICAgc29ja2V0LmNvbm5lY3QoKVxuICAgICAgICBjb25zb2xlLmxvZyhzb2NrZXQpXG5cbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IHNvY2tldC5jaGFubmVsKGByb29tOiR7cm9vbUlkfWApXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYW5uZWwpXG4gICAgICAgIGNoYW5uZWwuam9pbigpXG4gICAgICAgIC5yZWNlaXZlKCdvaycsICh7aWQsIHJvb20sIHBpZH0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb29tIGlkOiAnLCBpZClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb29tIGRhdGE6ICcsIHJvb20pXG4gICAgICAgICAgICBzZXRSb29tRGF0YShyb29tKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jvb20gcGlkOiAnLCBwaWQpXG4gICAgICAgIH0pXG4gICAgICAgIC5yZWNlaXZlKCdlcnJvcicsIHJlYXNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlYXNvbilcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyhjaGFubmVsKVxuXG4gICAgICAgIGNoYW5uZWwub24oJ21zZycsICh7bXNnfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21zZycsIG1zZylcbiAgICAgICAgfSlcblxuICAgICAgICBjaGFubmVsLm9uKCdyb29tX3VwZGF0ZScsICh7IG5ld191c2VyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb29tX3VwZGF0ZSwgbmV3IHVzZXI6ICcsICBuZXdfdXNlcilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2hhbm5lbC5sZWF2ZSgpXG4gICAgICAgICAgICBzb2NrZXQuZGlzY29ubmVjdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodmFsdWVzLCB0b2FzdCwgYWN0aW9ucykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKHRydWUpXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdmFsdWVzLnNpZ251cF91c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHZhbHVlcy5zaWdudXBfZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMuc2lnbnVwX3Bhc3N3b3JkLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsQVBJKCcvYXV0aC9yZWdpc3RlcicsICdQT1NUJywgYm9keSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIWRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4gXCIsIGRhdGEpXG4gICAgICAgICAgICAgICAgZXJyb3JUb2FzdChcIkZhaWxlZCB0byByZWdpc3RlclwiLCBcIlwiLCB0b2FzdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc1RvYXN0KFwiU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZCBhY2NvdW50XCIsIFwiQ2hlY2sgeW91ciBOVVMgZW1haWwgJiBjb25maXJtIHlvdXIgYWNjb3VudCBiZWZvcmUgbG9nZ2luZyBpbiFcIiwgdG9hc3QpXG4gICAgICAgICAgICAgICAgc2V0VXNlcihkYXRhLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2luIHVzZXIgdmlhIDNyZCBwYXJ0eSBwcm92aWRlclxuICAgICAqIEBwYXJhbSB7YW55fSB0b2tlbiBvYnRhaW5lZCBieSBwcm92aWRlciB0byBtYWtlIGF1dGhvcml6ZWQgcmVxdWVzdHMgdG8gZ2V0IHVzZXIgaW5mbyBmcm9tIHByb3ZpZGVyICh1c2VybmFtZSwgZW1haWwsIGV0YylcbiAgICAgKi9cbiAgICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAodmFsdWVzLCB0b2FzdCwgYWN0aW9ucykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKHRydWUpXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogdmFsdWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbEFQSSgnL2F1dGgvbG9naW4nLCAnUE9TVCcsIGJvZHkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS5kYXRhLnVzZXJuYW1lXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gJywgdXNlcm5hbWUpXG4gICAgICAgICAgICAgICAgc3VjY2Vzc1RvYXN0KFwiU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpblwiLCBcIlwiLCB0b2FzdClcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEuZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsIGRhdGEpXG4gICAgICAgICAgICAgICAgZXJyb3JUb2FzdChcIkZhaWxlZCB0byBsb2cgaW5cIiwgXCJDaGVjayB5b3VyIGVtYWlsIChpZiB5b3UgaGF2ZW50IGNvbmZpcm1lZCB5b3VyIGFjY291bnQpIG9yIGNvbnRhY3QgYWRtaW4hXCIsIHRvYXN0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIHVzZXIgb3V0IGJ5IHNldHRpbmcgdXNlciB0byBudWxsXG4gICAgICovXG4gICAgY29uc3QgbG9nb3V0VXNlciA9IGFzeW5jICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tpbmcgaWYgdXNlciBsb2dnZWQgaW4uLi4uLicpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsQVBJKCcvYXV0aC9tZScsICdHRVQnKVxuICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBsb2dnZWQgaW46ICcsIGRhdGEuZGF0YSlcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YS5kYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2hlY2tVc2VyTG9nZ2VkSW4oKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IFxuICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgIHJvb21EYXRhLFxuICAgICAgICAgICAgcmVnaXN0ZXJVc2VyLCBcbiAgICAgICAgICAgIGxvZ2luVXNlcixcbiAgICAgICAgICAgIGxvZ291dFVzZXIsXG4gICAgICAgICAgICBmZXRjaFJvb21cbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dCIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpXCIvL1wiaHR0cHM6Ly9hcGkubnVzY2x1YmhvdXNlLmdhbWVzXCJcbmV4cG9ydCBjb25zdCBTT0NLRVRfVVJMID0gXCJ3czovL2xvY2FsaG9zdDo0MDAwL3NvY2tldFwiIl0sInNvdXJjZVJvb3QiOiIifQ==