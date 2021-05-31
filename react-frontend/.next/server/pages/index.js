(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/BoldText/BoldText.js":
/*!*****************************************!*\
  !*** ./components/BoldText/BoldText.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/BoldText/BoldText.js";


function BoldText({
  text
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    fontWeight: "extrabold",
    fontSize: "2xl",
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (BoldText);

/***/ }),

/***/ "./components/LoginBox/LoginBox.js":
/*!*****************************************!*\
  !*** ./components/LoginBox/LoginBox.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");
/* harmony import */ var _LoginGithubBtn_LoginGithubBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LoginGithubBtn/LoginGithubBtn */ "./components/LoginGithubBtn/LoginGithubBtn.js");
/* harmony import */ var _LoginDiscordBtn_LoginDiscordBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoginDiscordBtn/LoginDiscordBtn */ "./components/LoginDiscordBtn/LoginDiscordBtn.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/LoginBox/LoginBox.js";


const axios = __webpack_require__(/*! axios */ "axios").default;






function LoginBox() {
  const loginGithub = () => {
    // call API to log into github
    axios.get(`${_utils_utils__WEBPACK_IMPORTED_MODULE_5__.API_URL}/auth/github`).then(response => {
      console.log('response from api auth: ', response);
    });
  };

  const loginGithubUrl = `${_utils_utils__WEBPACK_IMPORTED_MODULE_5__.API_URL}/auth/github`;
  const loginDiscordUrl = `${_utils_utils__WEBPACK_IMPORTED_MODULE_5__.API_URL}/auth/discord`;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "column",
    px: "40px",
    py: "44px",
    bgColor: "clubhousegrey.300",
    w: "400px",
    rounded: "lg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__.default, {
      text: "Welcome"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      mt: 4,
      children: ["By logging in you accept our ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        children: "Privacy Policy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 46
      }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      spacing: "30px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginGithubBtn_LoginGithubBtn__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: `${loginGithubUrl}`,
        mt: 10
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginDiscordBtn_LoginDiscordBtn__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: `${loginDiscordUrl}`
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

/* harmony default export */ __webpack_exports__["default"] = (LoginBox);

/***/ }),

/***/ "./components/LoginDiscordBtn/LoginDiscordBtn.js":
/*!*******************************************************!*\
  !*** ./components/LoginDiscordBtn/LoginDiscordBtn.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/LoginDiscordBtn/LoginDiscordBtn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function LoginDiscordBtn(_ref) {
  let {
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, _objectSpread(_objectSpread({
      leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaDiscord, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 32
      }, this),
      size: "md"
    }, props), {}, {
      iconSpacing: 4,
      children: "Login with Discord"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 14
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LoginDiscordBtn);

/***/ }),

/***/ "./components/LoginGithubBtn/LoginGithubBtn.js":
/*!*****************************************************!*\
  !*** ./components/LoginGithubBtn/LoginGithubBtn.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/LoginGithubBtn/LoginGithubBtn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function LoginGithubBtn(_ref) {
  let {
    href,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "onClick"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, _objectSpread(_objectSpread({
      leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 31
      }, this),
      size: "md"
    }, props), {}, {
      iconSpacing: 4,
      children: "Login with Github"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LoginGithubBtn);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LoginBox_LoginBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginBox/LoginBox */ "./components/LoginBox/LoginBox.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");


var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/index.js";





function Home() {
  const {
    user
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
      maxW: "1200px",
      h: "100vh",
      centerContent: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
        h: "100%",
        children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
          children: ["Welcome ", user.username, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 20
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginBox_LoginBox__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 60
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_fa_index_esm_js","context_AuthContext_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0JvbGRUZXh0L0JvbGRUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvTG9naW5Cb3gvTG9naW5Cb3guanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Mb2dpbkRpc2NvcmRCdG4vTG9naW5EaXNjb3JkQnRuLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvTG9naW5HaXRodWJCdG4vTG9naW5HaXRodWJCdG4uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvaWdub3JlZHwvaG9tZS9haWRhbi9udXNjbHViaG91c2UvcmVhY3QtZnJvbnRlbmQvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJCb2xkVGV4dCIsInRleHQiLCJheGlvcyIsInJlcXVpcmUiLCJMb2dpbkJveCIsImxvZ2luR2l0aHViIiwiZ2V0IiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkdpdGh1YlVybCIsImxvZ2luRGlzY29yZFVybCIsIkxvZ2luRGlzY29yZEJ0biIsImhyZWYiLCJwcm9wcyIsIkxvZ2luR2l0aHViQnRuIiwib25DbGljayIsIkhvbWUiLCJ1c2VyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQTRCO0FBQ3hCLHNCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBVSxFQUFDLFdBQWpCO0FBQTZCLFlBQVEsRUFBQyxLQUF0QztBQUFBLGNBQ0tBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRUQsK0RBQWVELFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBOztBQUtBLE1BQU1FLEtBQUssR0FBR0MsaURBQWQ7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUVoQixRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN0QjtBQUNBSCxTQUFLLENBQ0pJLEdBREQsQ0FDTSxHQUFFQyxpREFBUSxjQURoQixFQUVDQyxJQUZELENBRU9DLFFBQUQsSUFBYztBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NGLFFBQXhDO0FBQ0gsS0FKRDtBQUtILEdBUEQ7O0FBU0EsUUFBTUcsY0FBYyxHQUFJLEdBQUVMLGlEQUFRLGNB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RTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSw4REFBQyx1REFBRDtBQUFXLFVBQUksRUFBQyxRQUFoQjtBQUF5QixPQUFDLEVBQUMsT0FBM0I7QUFBbUMsbUJBQWEsTUFBaEQ7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFRLFNBQUMsRUFBQyxNQUFWO0FBQUEsa0JBQ0lGLElBQUksZ0JBQUcsOERBQUMsa0RBQUQ7QUFBQSxpQ0FBZUEsSUFBSSxDQUFDRyxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUgsZ0JBQTJDLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBLGtCQURGO0FBY0QsQzs7Ozs7Ozs7Ozs7QUM5QkQsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gICAgVGV4dCBcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gQm9sZFRleHQoeyB0ZXh0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdleHRyYWJvbGQnIGZvbnRTaXplPScyeGwnPlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgIDwvVGV4dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvbGRUZXh0XG4iLCJpbXBvcnQgeyBcbiAgICBMaW5rLFxuICAgIFRleHQsXG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0XG5cblxuaW1wb3J0IEJvbGRUZXh0IGZyb20gJy4uL0JvbGRUZXh0L0JvbGRUZXh0J1xuaW1wb3J0IExvZ2luR2l0aHViQnRuIGZyb20gJy4uL0xvZ2luR2l0aHViQnRuL0xvZ2luR2l0aHViQnRuJ1xuaW1wb3J0IExvZ2luRGlzY29yZEJ0biBmcm9tICcuLi9Mb2dpbkRpc2NvcmRCdG4vTG9naW5EaXNjb3JkQnRuJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5mdW5jdGlvbiBMb2dpbkJveCgpIHtcblxuICAgIGNvbnN0IGxvZ2luR2l0aHViID0gKCkgPT4ge1xuICAgICAgICAvLyBjYWxsIEFQSSB0byBsb2cgaW50byBnaXRodWJcbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldChgJHtBUElfVVJMfS9hdXRoL2dpdGh1YmApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIGZyb20gYXBpIGF1dGg6ICcsIHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGxvZ2luR2l0aHViVXJsID0gYCR7QVBJX1VSTH0vYXV0aC9naXRodWJgXG4gICAgY29uc3QgbG9naW5EaXNjb3JkVXJsID0gYCR7QVBJX1VSTH0vYXV0aC9kaXNjb3JkYFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0nY29sdW1uJyBweD0nNDBweCcgcHk9JzQ0cHgnIGJnQ29sb3I9J2NsdWJob3VzZWdyZXkuMzAwJyB3PSc0MDBweCcgcm91bmRlZD0nbGcnPlxuICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9J1dlbGNvbWUnIC8+XG4gICAgICAgICAgICA8VGV4dCBtdD17NH0+XG4gICAgICAgICAgICAgICAgQnkgbG9nZ2luZyBpbiB5b3UgYWNjZXB0IG91ciA8TGluaz5Qcml2YWN5IFBvbGljeTwvTGluaz4gYW5kIDxMaW5rPlRlcm1zIG9mIFNlcnZpY2U8L0xpbms+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz0nMzBweCcgPlxuICAgICAgICAgICAgICAgIHsvKiA8TG9naW5OVVNCdG4gLz4gKi99XG4gICAgICAgICAgICAgICAgPExvZ2luR2l0aHViQnRuIGhyZWY9e2Ake2xvZ2luR2l0aHViVXJsfWB9IG10PXsxMH0vPlxuICAgICAgICAgICAgICAgIDxMb2dpbkRpc2NvcmRCdG4gaHJlZj17YCR7bG9naW5EaXNjb3JkVXJsfWB9IC8+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Cb3hcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGYURpc2NvcmQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIExvZ2luRGlzY29yZEJ0bih7IGhyZWYsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgPEJ1dHRvbiBsZWZ0SWNvbj17PEZhRGlzY29yZCAvPn0gc2l6ZT0nbWQnIHsuLi5wcm9wc30gaWNvblNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIExvZ2luIHdpdGggRGlzY29yZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkRpc2NvcmRCdG5cbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gTG9naW5HaXRodWJCdG4oeyBocmVmLCBvbkNsaWNrLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBsZWZ0SWNvbj17PEZhR2l0aHViIC8+fSBzaXplPSdtZCcgey4uLnByb3BzfSBpY29uU3BhY2luZz17NH0+XG4gICAgICAgICAgICAgICAgTG9naW4gd2l0aCBHaXRodWJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5HaXRodWJCdG5cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFxuICBDb250YWluZXIsIFxuICBCb3gsXG4gIENlbnRlcixcbiAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgTG9naW5Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkJveC9Mb2dpbkJveCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lciBtYXhXPScxMjAwcHgnIGg9JzEwMHZoJyBjZW50ZXJDb250ZW50PlxuICAgICAgICA8Q2VudGVyIGg9JzEwMCUnPlxuICAgICAgICAgIHsgdXNlciA/IDxUZXh0PldlbGNvbWUge3VzZXIudXNlcm5hbWV9IDwvVGV4dD4gOiA8TG9naW5Cb3ggLz59XG4gICAgICAgIDwvQ2VudGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+IFxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=