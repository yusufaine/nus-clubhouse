(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/ClubhouseBtn/ClubhouseBtn.js":
/*!*************************************************!*\
  !*** ./components/ClubhouseBtn/ClubhouseBtn.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/ClubhouseBtn/ClubhouseBtn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function ClubhouseBtn(_ref) {
  let {
    text,
    variant,
    type,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text", "variant", "type", "onClick"]);

  if (variant == 'primary') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, _objectSpread(_objectSpread({
      variant: "solid",
      colorScheme: "clubhouseorange",
      size: "md",
      fontSize: "sm",
      px: "40px",
      py: "16px",
      type: type,
      onClick: onClick
    }, props), {}, {
      children: text
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this);
  } else if (variant == 'secondary') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, _objectSpread(_objectSpread({
      variant: "solid",
      colorScheme: "clubhouseorange",
      size: "md",
      fontSize: "sm",
      px: "40px",
      py: "16px",
      type: type,
      onClick: onClick
    }, props), {}, {
      children: text
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, _objectSpread(_objectSpread({
      variant: "link",
      colorScheme: "clubhousegrey",
      color: "clubhousegrey.800",
      size: "md",
      fontSize: "sm",
      type: type,
      onClick: onClick
    }, props), {}, {
      children: text
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ClubhouseBtn);

/***/ }),

/***/ "./components/ClubhouseInput/ClubhouseInput.js":
/*!*****************************************************!*\
  !*** ./components/ClubhouseInput/ClubhouseInput.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/ClubhouseInput/ClubhouseInput.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ClubhouseInput(_ref) {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, _objectSpread(_objectSpread({}, props), {}, {
    focusBorderColor: "clubhouseorange.500",
    backgroundColor: "clubhousegrey.400",
    _placeholder: {
      textColor: 'clubhousegrey.600'
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ClubhouseInput);

/***/ }),

/***/ "./components/EmailInputGroup/EmailInputGroup.js":
/*!*******************************************************!*\
  !*** ./components/EmailInputGroup/EmailInputGroup.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ClubhouseInput_ClubhouseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ClubhouseInput/ClubhouseInput */ "./components/ClubhouseInput/ClubhouseInput.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/EmailInputGroup/EmailInputGroup.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function EmailInputGroup({
  field,
  id
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftElement, {
      pointerEvents: "none",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.EmailIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseInput_ClubhouseInput__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, field), {}, {
      id: id,
      placeholder: "NUS Email",
      pl: 10
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EmailInputGroup);

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
/* harmony import */ var _LoginRegisterForm_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoginRegisterForm/LoginRegisterForm */ "./components/LoginRegisterForm/LoginRegisterForm.js");
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");
/* harmony import */ var _LoginGithubBtn_LoginGithubBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoginGithubBtn/LoginGithubBtn */ "./components/LoginGithubBtn/LoginGithubBtn.js");
/* harmony import */ var _LoginDiscordBtn_LoginDiscordBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoginDiscordBtn/LoginDiscordBtn */ "./components/LoginDiscordBtn/LoginDiscordBtn.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/LoginBox/LoginBox.js";


const axios = __webpack_require__(/*! axios */ "axios").default;







function LoginBox() {
  const loginGithub = () => {
    // call API to log into github
    axios.get(`${_utils_utils__WEBPACK_IMPORTED_MODULE_6__.API_URL}/auth/github`).then(response => {
      console.log('response from api auth: ', response);
    });
  };

  const loginGithubUrl = `${_utils_utils__WEBPACK_IMPORTED_MODULE_6__.API_URL}/auth/github`;
  const loginDiscordUrl = `${_utils_utils__WEBPACK_IMPORTED_MODULE_6__.API_URL}/auth/discord`;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "column",
    px: "40px",
    py: "36px",
    bgColor: "clubhousegrey.200",
    w: "400px",
    rounded: "lg",
    spacing: 6,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_3__.default, {
        text: "Welcome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        mt: 2,
        children: ["By logging in you accept our ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          children: "Privacy Policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 50
        }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          children: "Terms of Service"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 82
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginRegisterForm_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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

/***/ "./components/LoginRegisterForm/LoginRegisterForm.js":
/*!***********************************************************!*\
  !*** ./components/LoginRegisterForm/LoginRegisterForm.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _UserLoginForm_UserLoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserLoginForm/UserLoginForm */ "./components/UserLoginForm/UserLoginForm.js");
/* harmony import */ var _UserSignupForm_UserSignupForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UserSignupForm/UserSignupForm */ "./components/UserSignupForm/UserSignupForm.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/LoginRegisterForm/LoginRegisterForm.js";






function LoginRegisterForm() {
  const {
    loginUser,
    registerUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.default);
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
  const tabs = ["Log in", "Create account"];

  const handleUserLogin = (values, actions) => {
    try {
      loginUser(values, toast, actions);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUserSignup = (values, actions) => {
    try {
      registerUser(values, toast, actions);
    } catch (err) {
      console.error(err);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      isFitted: true,
      colorScheme: "clubhouseorange",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabList, {
        children: tabs.map((tabHeader, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          children: tabHeader
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanels, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
          px: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserLoginForm_UserLoginForm__WEBPACK_IMPORTED_MODULE_4__.default, {
            handleSubmit: handleUserLogin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
          px: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserSignupForm_UserSignupForm__WEBPACK_IMPORTED_MODULE_5__.default, {
            handleSubmit: handleUserSignup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LoginRegisterForm);

/***/ }),

/***/ "./components/NewRoomForm/NewRoomForm.js":
/*!***********************************************!*\
  !*** ./components/NewRoomForm/NewRoomForm.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RoomNameInput_RoomNameInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoomNameInput/RoomNameInput */ "./components/RoomNameInput/RoomNameInput.js");
/* harmony import */ var _RoomTypeSelect_RoomTypeSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RoomTypeSelect/RoomTypeSelect */ "./components/RoomTypeSelect/RoomTypeSelect.js");
/* harmony import */ var _ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ClubhouseBtn/ClubhouseBtn */ "./components/ClubhouseBtn/ClubhouseBtn.js");
/* harmony import */ var _RoomBioInput_RoomBioInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RoomBioInput/RoomBioInput */ "./components/RoomBioInput/RoomBioInput.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/NewRoomForm/NewRoomForm.js";



const Yup = __webpack_require__(/*! yup */ "yup");





const newRoomSchema = Yup.object().shape({
  name: Yup.string().required('Room name is required'),
  type: Yup.string().required('Room type is required'),
  bio: Yup.string()
});

function NewRoomForm({
  initialValues,
  handleSubmit,
  handleClose
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: newRoomSchema,
    children: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        spacing: "20px",
        mb: "20px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
            name: "name",
            children: ({
              field,
              form
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
              isInvalid: form.errors.name && form.touched.name,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomNameInput_RoomNameInput__WEBPACK_IMPORTED_MODULE_3__.default, {
                field: field,
                valid: !form.errors.name && form.touched.name,
                w: "293px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                children: form.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          w: "100%",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
            name: "type",
            children: ({
              field,
              form
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
              isInvalid: form.errors.type && form.touched.type,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomTypeSelect_RoomTypeSelect__WEBPACK_IMPORTED_MODULE_4__.default, {
                field: field,
                valid: !form.errors.type && form.touched.type,
                w: "100%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                children: form.errors.type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "100%",
        h: "88px",
        mb: "30px",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "bio",
          children: ({
            field,
            form
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
            isInvalid: form.errors.bio && form.touched.bio,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomBioInput_RoomBioInput__WEBPACK_IMPORTED_MODULE_6__.default, {
              field: field,
              valid: !form.errors.bio && form.touched.bio,
              w: "100%",
              h: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
              children: form.errors.bio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
        spacing: "30px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_5__.default, {
          variant: "primary",
          text: "New room",
          type: "submit",
          isLoading: props.isSubmitting,
          onClick: handleSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_5__.default, {
          variant: "link",
          text: "Cancel",
          onClick: handleClose
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NewRoomForm);

/***/ }),

/***/ "./components/NewRoomModalBtn/NewRoomModalBtn.js":
/*!*******************************************************!*\
  !*** ./components/NewRoomModalBtn/NewRoomModalBtn.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ClubhouseBtn/ClubhouseBtn */ "./components/ClubhouseBtn/ClubhouseBtn.js");
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");
/* harmony import */ var _NewRoomForm_NewRoomForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NewRoomForm/NewRoomForm */ "./components/NewRoomForm/NewRoomForm.js");


var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/NewRoomModalBtn/NewRoomModalBtn.js";









function NewRoomModalBtn() {
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    user
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.default);
  const initialValues = {
    name: '',
    type: 'public',
    bio: ''
  };

  const handleCreateNewRoom = async (values, actions) => {
    delete values.bio;
    const body = {
      user_id: user.id,
      room: {
        name: values.name,
        numUsers: 0,
        type: values.type
      }
    };
    console.log('creating room with body: ', body);
    const data = await (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.callAPI)('/rooms/create', 'POST', body);
    const room = data.data;
    console.log('data after creating room: ', data);
    router.push(`/room/${room.id}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_5__.default, {
      variant: "primary",
      text: "New room",
      onClick: onOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      isOpen: isOpen,
      onClose: onClose,
      isCentered: true,
      size: "lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
        bg: "clubhousegrey.200",
        p: "20px",
        rounded: "lg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_6__.default, {
            text: "New room"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            mb: "20px",
            children: "Fill the following fields to start a new room"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewRoomForm_NewRoomForm__WEBPACK_IMPORTED_MODULE_7__.default, {
            initialValues: initialValues,
            handleSubmit: handleCreateNewRoom,
            handleClose: onClose
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (NewRoomModalBtn);

/***/ }),

/***/ "./components/PasswordInputGroup/PasswordInputGroup.js":
/*!*************************************************************!*\
  !*** ./components/PasswordInputGroup/PasswordInputGroup.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ClubhouseInput_ClubhouseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ClubhouseInput/ClubhouseInput */ "./components/ClubhouseInput/ClubhouseInput.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/PasswordInputGroup/PasswordInputGroup.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function PasswordInputGroup({
  field,
  id
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftElement, {
      pointerEvents: "none",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.LockIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseInput_ClubhouseInput__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, field), {}, {
      id: id,
      type: "password",
      placeholder: "Password",
      pl: 10
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PasswordInputGroup);

/***/ }),

/***/ "./components/RoomBioInput/RoomBioInput.js":
/*!*************************************************!*\
  !*** ./components/RoomBioInput/RoomBioInput.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomBioInput/RoomBioInput.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function RoomBioInput(_ref) {
  let {
    field,
    valid
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "valid"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, _objectSpread(_objectSpread({}, field), {}, {
    id: "bio",
    placeholder: "Room bio",
    _placeholder: {
      color: 'clubhousegrey.600'
    },
    colorScheme: "clubhousegrey",
    bg: "clubhousegrey.400",
    focusBorderColor: "clubhouseorange.500",
    rounded: "lg"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomBioInput);

/***/ }),

/***/ "./components/RoomCard/RoomCard.js":
/*!*****************************************!*\
  !*** ./components/RoomCard/RoomCard.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomCard/RoomCard.js";


function RoomCard({
  room
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    rounded: "lg",
    w: "640px",
    h: "112px",
    bgColor: "clubhousegrey.200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomCard);

/***/ }),

/***/ "./components/RoomListFeed/RoomListFeed.js":
/*!*************************************************!*\
  !*** ./components/RoomListFeed/RoomListFeed.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RoomCard_RoomCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RoomCard/RoomCard */ "./components/RoomCard/RoomCard.js");
/* harmony import */ var _NewRoomModalBtn_NewRoomModalBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NewRoomModalBtn/NewRoomModalBtn */ "./components/NewRoomModalBtn/NewRoomModalBtn.js");
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomListFeed/RoomListFeed.js";





function RoomListFeed({
  rooms = ['room1', 'room1', 'room1', 'room1', 'room1']
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
    w: "100%",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      direction: "row",
      mb: "30px",
      w: "100%",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_4__.default, {
        text: "Your feed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewRoomModalBtn_NewRoomModalBtn__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
      spacing: "20px",
      children: rooms.map((room, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomCard_RoomCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        room: room
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomListFeed);

/***/ }),

/***/ "./components/RoomNameInput/RoomNameInput.js":
/*!***************************************************!*\
  !*** ./components/RoomNameInput/RoomNameInput.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomNameInput/RoomNameInput.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function RoomNameInput(_ref) {
  let {
    field,
    valid
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "valid"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, _objectSpread(_objectSpread({}, field), {}, {
    id: "name",
    placeholder: "Room name",
    _placeholder: {
      color: 'clubhousegrey.600'
    },
    colorScheme: "clubhousegrey",
    bg: "clubhousegrey.400",
    focusBorderColor: "clubhouseorange.500",
    rounded: "lg"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomNameInput);

/***/ }),

/***/ "./components/RoomTypeSelect/RoomTypeSelect.js":
/*!*****************************************************!*\
  !*** ./components/RoomTypeSelect/RoomTypeSelect.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomTypeSelect/RoomTypeSelect.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function RoomTypeSelect(_ref) {
  let {
    field,
    valid
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "valid"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Select, _objectSpread(_objectSpread(_objectSpread({}, field), {}, {
    id: "type",
    colorScheme: "clubhousegrey",
    bg: "clubhousegrey.400",
    focusBorderColor: "clubhouseorange.500",
    rounded: "lg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "Public",
      children: "Public"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "Private",
      children: "Private"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomTypeSelect);

/***/ }),

/***/ "./components/UserLoginForm/UserLoginForm.js":
/*!***************************************************!*\
  !*** ./components/UserLoginForm/UserLoginForm.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ClubhouseBtn/ClubhouseBtn */ "./components/ClubhouseBtn/ClubhouseBtn.js");
/* harmony import */ var _EmailInputGroup_EmailInputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EmailInputGroup/EmailInputGroup */ "./components/EmailInputGroup/EmailInputGroup.js");
/* harmony import */ var _PasswordInputGroup_PasswordInputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PasswordInputGroup/PasswordInputGroup */ "./components/PasswordInputGroup/PasswordInputGroup.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserLoginForm/UserLoginForm.js";



const Yup = __webpack_require__(/*! yup */ "yup");

__webpack_require__(/*! yup-password */ "yup-password")(Yup);





function UserLoginForm({
  handleSubmit
}) {
  const validNusEmailRegex = /(@|u.)nus.edu/;
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').matches(validNusEmailRegex, 'Your NUS email is required to join NUS Clubhouse').required('Your NUS email is required'),
    password: Yup.string().password().required('Your password is required').min(8, 'Password must contain at least 8 characters').minNumbers(1, 'Password must contain at least 1 digit').minSymbols(1, 'Password must contain at least 1 symbol')
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: handleSubmit,
    validationSchema: loginSchema,
    children: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mb: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "email",
          children: ({
            field,
            form
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
            isInvalid: form.errors.email && form.touched.email,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EmailInputGroup_EmailInputGroup__WEBPACK_IMPORTED_MODULE_4__.default, {
              field: field,
              id: "email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
              children: form.errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mb: 8,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "password",
          children: ({
            field,
            form
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
            isInvalid: form.errors.password && form.touched.password,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordInputGroup_PasswordInputGroup__WEBPACK_IMPORTED_MODULE_5__.default, {
              field: field,
              id: "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
              children: form.errors.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_3__.default, {
        text: "Log in",
        variant: "primary",
        type: "submit",
        isLoading: props.isSubmitting
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserLoginForm);

/***/ }),

/***/ "./components/UserSignupForm/UserSignupForm.js":
/*!*****************************************************!*\
  !*** ./components/UserSignupForm/UserSignupForm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ClubhouseBtn/ClubhouseBtn */ "./components/ClubhouseBtn/ClubhouseBtn.js");
/* harmony import */ var _EmailInputGroup_EmailInputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EmailInputGroup/EmailInputGroup */ "./components/EmailInputGroup/EmailInputGroup.js");
/* harmony import */ var _PasswordInputGroup_PasswordInputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PasswordInputGroup/PasswordInputGroup */ "./components/PasswordInputGroup/PasswordInputGroup.js");
/* harmony import */ var _UsernameInputGroup_UsernameInputGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UsernameInputGroup/UsernameInputGroup */ "./components/UsernameInputGroup/UsernameInputGroup.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserSignupForm/UserSignupForm.js";



const Yup = __webpack_require__(/*! yup */ "yup");

__webpack_require__(/*! yup-password */ "yup-password")(Yup);






function UserSignupForm({
  handleSubmit
}) {
  const validNusEmailRegex = /(@|u.)nus.edu/;
  const signupSchema = Yup.object().shape({
    signup_username: Yup.string().required('Your username is required'),
    signup_email: Yup.string().email('Invalid email').matches(validNusEmailRegex, 'Your NUS email is required to join NUS Clubhouse').required('Your NUS email is required'),
    signup_password: Yup.string().password().required('Your password is required').min(8, 'Password must contain at least 8 characters').minNumbers(1, 'Password must contain at least 1 digit').minSymbols(1, 'Password must contain at least 1 symbol')
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      signup_username: '',
      signup_email: '',
      signup_password: ''
    },
    onSubmit: handleSubmit,
    validationSchema: signupSchema,
    children: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mb: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "signup_username",
          children: ({
            field,
            form
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
            isInvalid: form.errors.signup_username && form.touched.signup_username,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UsernameInputGroup_UsernameInputGroup__WEBPACK_IMPORTED_MODULE_6__.default, {
              field: field,
              id: "signup_username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
              children: form.errors.signup_username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mb: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "signup_email",
          children: ({
            field,
            form
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
            isInvalid: form.errors.signup_email && form.touched.signup_email,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EmailInputGroup_EmailInputGroup__WEBPACK_IMPORTED_MODULE_4__.default, {
              field: field,
              id: "signup_email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
              children: form.errors.signup_email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mb: 8,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "signup_password",
          children: ({
            field,
            form
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
            isInvalid: form.errors.signup_password && form.touched.signup_password,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordInputGroup_PasswordInputGroup__WEBPACK_IMPORTED_MODULE_5__.default, {
              field: field,
              id: "signup_password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
              children: form.errors.signup_password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseBtn_ClubhouseBtn__WEBPACK_IMPORTED_MODULE_3__.default, {
        text: "Sign up",
        variant: "primary",
        type: "submit",
        isLoading: props.isSubmitting
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserSignupForm);

/***/ }),

/***/ "./components/UsernameInputGroup/UsernameInputGroup.js":
/*!*************************************************************!*\
  !*** ./components/UsernameInputGroup/UsernameInputGroup.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ClubhouseInput_ClubhouseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ClubhouseInput/ClubhouseInput */ "./components/ClubhouseInput/ClubhouseInput.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UsernameInputGroup/UsernameInputGroup.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function UsernameInputGroup({
  field,
  id
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftElement, {
      pointerEvents: "none",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.AtSignIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClubhouseInput_ClubhouseInput__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, field), {}, {
      id: id,
      placeholder: "Username",
      pl: 10
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UsernameInputGroup);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LoginBox_LoginBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginBox/LoginBox */ "./components/LoginBox/LoginBox.js");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_FriendsList_FriendsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FriendsList/FriendsList */ "./components/FriendsList/FriendsList.js");
/* harmony import */ var _components_RoomListFeed_RoomListFeed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/RoomListFeed/RoomListFeed */ "./components/RoomListFeed/RoomListFeed.js");
/* harmony import */ var _components_ProfileUpcomingRoomsSection_ProfileUpcomingRoomsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection */ "./components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");


var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/index.js";










function Login() {
  const {
    user
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_10__.default);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!user) {
      console.log('user not logged in');
      router.push('/login');
    }
  }, [user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
      maxW: "1320px",
      w: "100%",
      mb: 6,
      centerContent: true,
      p: 0,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        direction: "row",
        w: "100%",
        spacing: "60px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FriendsList_FriendsList__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoomListFeed_RoomListFeed__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileUpcomingRoomsSection_ProfileUpcomingRoomsSection__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true);
} // MYPETS 
// import {
//     useState
// } from 'react'
// import { 
//   Container, 
//   Flex, 
//   useToast 
// } from "@chakra-ui/react"
// import AnnouncementBanner from '../components/AnnouncementBanner/AnnouncementBanner'
// import Navbar from '../components/Navbar/Navbar'
// import SortMenu from '../components/SortMenu/SortMenu'
// import MerchantSectionList from '../components/MerchantSectionList/MerchantSectionList'
// import ProductSectionList from '../components/ProductSectionList/ProductSectionList'
// import CategoryList from '../components/CategoryList/CategoryList'
// import HomeBannerSwiper from '../components/HomeBannerSwiper/HomeBannerSwiper'
// // import { API_PRODUCTS_URL, API_MERCHANTS_URL } from '../utils/urls'
// export default function Home() {
//     const merchants = [
//     {
//         name: 'Macho pawz',
//         rating: 4.8,
//         display_image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/macho_pawz_logo_282x264_2x_fc5703e865.png',
//         slug: 'macho-pawz'
//     },
//     {
//         name: 'Macho pawz',
//         rating: 4.8,
//         display_image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/macho_pawz_logo_282x264_2x_fc5703e865.png',
//         slug: 'macho-pawz'
//     },
//     {
//         name: 'Macho pawz',
//         rating: 4.8,
//         display_image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/macho_pawz_logo_282x264_2x_fc5703e865.png',
//         slug: 'macho-pawz'
//     },
//     {
//         name: 'Macho pawz',
//         rating: 4.8,
//         display_image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/macho_pawz_logo_282x264_2x_fc5703e865.png',
//         slug: 'macho-pawz'
//     },
//     {
//         name: 'Macho pawz',
//         rating: 4.8,
//         display_image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/macho_pawz_logo_282x264_2x_fc5703e865.png',
//         slug: 'macho-pawz'
//     },
//     {
//         name: 'Macho pawz',
//         rating: 4.8,
//         display_image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/macho_pawz_logo_282x264_2x_fc5703e865.png',
//         slug: 'macho-pawz'
//     }
// ]
//     const pageProducts = [
//         {
//             name: "Sensitive Skin Formula [Dog]",
//             rating: 5,
//             merchant: {
//                 name: "Macho Pawz"
//             },
//             slug: 'sensitive-skin-formula-dog',
//             image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/12_DIAMOND_CARE_ae4edcdc06.jpg'
//         },
//         {
//             name: "Fresh Breath Oral Gel [Dogs]",
//             rating: 5,
//             merchant: {
//                 name: "Macho Pawz"
//             },
//             slug: 'sensitive-skin-formula-dog',
//             image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/34_TROPICLEAN_c1fbe791a6.jpg'
//         },
//         {
//             name: "Venison & Legumes [Dog]",
//             rating: 5,
//             merchant: {
//                 name: "Macho Pawz"
//             },
//             slug: 'sensitive-skin-formula-dog',
//             image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/6_TASTE_OF_THE_WILD_5fe7593f8f.jpg'
//         },
//         {
//             name: "Senior Poultry [Dog]",
//             rating: 5,
//             merchant: {
//                 name: "Macho Pawz"
//             },
//             slug: 'sensitive-skin-formula-dog',
//             image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/14_EUKANUBA_746031f139.jpg'
//         },
//         {
//             name: "Small Breed Adult Lamb & Potato [Dog]",
//             rating: 5,
//             merchant: {
//                 name: "Macho Pawz"
//             },
//             slug: 'sensitive-skin-formula-dog',
//             image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/13_BOW_WOW_ZENITH_d9f04e629a.jpg'
//         },
//         {
//             name: "Venizon & Garbanzo Beans [Dog]",
//             rating: 5,
//             merchant: {
//                 name: "Macho Pawz"
//             },
//             slug: 'sensitive-skin-formula-dog',
//             image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/5_TASTE_OF_THE_WILD_59a89d5055.jpg'
//         },
//         {
//             name: "Turkey Tendon Strips [Dogs]",
//             rating: 5,
//             merchant: {
//                 name: "Macho Pawz"
//             },
//             slug: 'sensitive-skin-formula-dog',
//             image: 'https://mypets-images.s3.ap-southeast-1.amazonaws.com/22_AFRESHCI_65dd6414ef.jpg'
//         },
//     ]
//     const [sortMethod, setSortMethod] = useState('pop')
//     const [selectedCategory, setCategorySelected] = useState('All products')
//     const categories = [
//         'All products',
//         'Treats',
//         'Dry food',
//         'Wet food',
//         'Supplements',
//         'Toys'
//     ]
//   return (
//     <>
//         <AnnouncementBanner />
//         <Navbar user={true}/>
//         <Container 
//             maxW={{ lg: "1200px" }} 
//             mb={4}
//             p={{ base: 4 }}
//             // bg='blue.100'
//         >   
//             <HomeBannerSwiper my={{ base: 8, md: 16 }} rounded={{ base: 20, md: 40 }} bg='green.100'/>
//             <Flex justifyContent='space-between' direction="row" 
//                 // bg='red.100'
//             >
//                 <Flex direction="column" w="100%">
//                     <MerchantSectionList merchants={merchants} />
//                     <Flex direction={{ base: 'column', lg: 'row'}} w='100%'>
//                         <ProductSectionList 
//                             products={pageProducts} 
//                             categories={categories}
//                             sortMethod={sortMethod} 
//                             selectedCategory={selectedCategory}
//                             setCategorySelected={setCategorySelected} 
//                             heading='Recommended Products' 
//                         />
//                         <Flex direction='column' w='210px' ml={12} mt={12} display={{ base: 'none', lg: 'inherit' }} >
//                             <SortMenu setSortMethod={setSortMethod} />
//                             <CategoryList categories={categories} setSelectedCategory={setCategorySelected} />
//                         </Flex>
//                     </Flex>
//                 </Flex>
//             </Flex>
//         </Container>
//     </>
//   )
// }

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/icons");;

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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ "phoenix":
/*!**************************!*\
  !*** external "phoenix" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("phoenix");;

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

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ }),

/***/ "yup-password":
/*!*******************************!*\
  !*** external "yup-password" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("yup-password");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","vendors-node_modules_react-icons_fa_index_esm_js","context_AuthContext_js","components_FriendsList_FriendsList_js-components_Navbar_Navbar_js-components_ProfileUpcomingR-c9147e"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0NsdWJob3VzZUJ0bi9DbHViaG91c2VCdG4uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9DbHViaG91c2VJbnB1dC9DbHViaG91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0VtYWlsSW5wdXRHcm91cC9FbWFpbElucHV0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Mb2dpbkJveC9Mb2dpbkJveC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0xvZ2luRGlzY29yZEJ0bi9Mb2dpbkRpc2NvcmRCdG4uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Mb2dpbkdpdGh1YkJ0bi9Mb2dpbkdpdGh1YkJ0bi5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0xvZ2luUmVnaXN0ZXJGb3JtL0xvZ2luUmVnaXN0ZXJGb3JtLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvTmV3Um9vbUZvcm0vTmV3Um9vbUZvcm0uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9OZXdSb29tTW9kYWxCdG4vTmV3Um9vbU1vZGFsQnRuLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvUGFzc3dvcmRJbnB1dEdyb3VwL1Bhc3N3b3JkSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1Jvb21CaW9JbnB1dC9Sb29tQmlvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tQ2FyZC9Sb29tQ2FyZC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1Jvb21MaXN0RmVlZC9Sb29tTGlzdEZlZWQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tTmFtZUlucHV0L1Jvb21OYW1lSW5wdXQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tVHlwZVNlbGVjdC9Sb29tVHlwZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJMb2dpbkZvcm0vVXNlckxvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJTaWdudXBGb3JtL1VzZXJTaWdudXBGb3JtLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlcm5hbWVJbnB1dEdyb3VwL1VzZXJuYW1lSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicGhvZW5peFwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJ5dXAtcGFzc3dvcmRcIiJdLCJuYW1lcyI6WyJDbHViaG91c2VCdG4iLCJ0ZXh0IiwidmFyaWFudCIsInR5cGUiLCJvbkNsaWNrIiwicHJvcHMiLCJDbHViaG91c2VJbnB1dCIsInRleHRDb2xvciIsIkVtYWlsSW5wdXRHcm91cCIsImZpZWxkIiwiaWQiLCJheGlvcyIsInJlcXVpcmUiLCJMb2dpbkJveCIsImxvZ2luR2l0aHViIiwiZ2V0IiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkdpdGh1YlVybCIsImxvZ2luRGlzY29yZFVybCIsIkxvZ2luRGlzY29yZEJ0biIsImhyZWYiLCJMb2dpbkdpdGh1YkJ0biIsIkxvZ2luUmVnaXN0ZXJGb3JtIiwibG9naW5Vc2VyIiwicmVnaXN0ZXJVc2VyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidG9hc3QiLCJ1c2VUb2FzdCIsInRhYnMiLCJoYW5kbGVVc2VyTG9naW4iLCJ2YWx1ZXMiLCJhY3Rpb25zIiwiZXJyIiwiZXJyb3IiLCJoYW5kbGVVc2VyU2lnbnVwIiwibWFwIiwidGFiSGVhZGVyIiwiaSIsIll1cCIsIm5ld1Jvb21TY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsIm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImJpbyIsIk5ld1Jvb21Gb3JtIiwiaW5pdGlhbFZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNsb3NlIiwiZm9ybSIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJOZXdSb29tTW9kYWxCdG4iLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlRGlzY2xvc3VyZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXIiLCJoYW5kbGVDcmVhdGVOZXdSb29tIiwiYm9keSIsInVzZXJfaWQiLCJyb29tIiwibnVtVXNlcnMiLCJkYXRhIiwiY2FsbEFQSSIsInB1c2giLCJQYXNzd29yZElucHV0R3JvdXAiLCJSb29tQmlvSW5wdXQiLCJ2YWxpZCIsImNvbG9yIiwiUm9vbUNhcmQiLCJSb29tTGlzdEZlZWQiLCJyb29tcyIsIlJvb21OYW1lSW5wdXQiLCJSb29tVHlwZVNlbGVjdCIsIlVzZXJMb2dpbkZvcm0iLCJ2YWxpZE51c0VtYWlsUmVnZXgiLCJsb2dpblNjaGVtYSIsImVtYWlsIiwibWF0Y2hlcyIsInBhc3N3b3JkIiwibWluIiwibWluTnVtYmVycyIsIm1pblN5bWJvbHMiLCJVc2VyU2lnbnVwRm9ybSIsInNpZ251cFNjaGVtYSIsInNpZ251cF91c2VybmFtZSIsInNpZ251cF9lbWFpbCIsInNpZ251cF9wYXNzd29yZCIsIlVzZXJuYW1lSW5wdXRHcm91cCIsIkxvZ2luIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsU0FBU0EsWUFBVCxPQUFrRTtBQUFBLE1BQTVDO0FBQUVDLFFBQUY7QUFBUUMsV0FBUjtBQUFpQkMsUUFBakI7QUFBdUJDO0FBQXZCLEdBQTRDO0FBQUEsTUFBVEMsS0FBUzs7QUFFOUQsTUFBSUgsT0FBTyxJQUFJLFNBQWYsRUFBMEI7QUFDdEIsd0JBQ0ksOERBQUMsb0RBQUQ7QUFDSSxhQUFPLEVBQUMsT0FEWjtBQUVJLGlCQUFXLEVBQUMsaUJBRmhCO0FBR0ksVUFBSSxFQUFDLElBSFQ7QUFJSSxjQUFRLEVBQUMsSUFKYjtBQUtJLFFBQUUsRUFBQyxNQUxQO0FBTUksUUFBRSxFQUFDLE1BTlA7QUFPSSxVQUFJLEVBQUVDLElBUFY7QUFRSSxhQUFPLEVBQUVDO0FBUmIsT0FTUUMsS0FUUjtBQUFBLGdCQVdLSjtBQVhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQWVILEdBaEJELE1BZ0JPLElBQUlDLE9BQU8sSUFBSSxXQUFmLEVBQTRCO0FBQy9CLHdCQUNJLDhEQUFDLG9EQUFEO0FBQ0ksYUFBTyxFQUFDLE9BRFo7QUFFSSxpQkFBVyxFQUFDLGlCQUZoQjtBQUdJLFVBQUksRUFBQyxJQUhUO0FBSUksY0FBUSxFQUFDLElBSmI7QUFLSSxRQUFFLEVBQUMsTUFMUDtBQU1JLFFBQUUsRUFBQyxNQU5QO0FBT0ksVUFBSSxFQUFFQyxJQVBWO0FBUUksYUFBTyxFQUFFQztBQVJiLE9BU1FDLEtBVFI7QUFBQSxnQkFXS0o7QUFYTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFlSCxHQWhCTSxNQWdCQTtBQUNILHdCQUNJLDhEQUFDLG9EQUFEO0FBQ0ksYUFBTyxFQUFDLE1BRFo7QUFFSSxpQkFBVyxFQUFDLGVBRmhCO0FBR0ksV0FBSyxFQUFDLG1CQUhWO0FBSUksVUFBSSxFQUFDLElBSlQ7QUFLSSxjQUFRLEVBQUMsSUFMYjtBQU1JLFVBQUksRUFBRUUsSUFOVjtBQU9JLGFBQU8sRUFBRUM7QUFQYixPQVFRQyxLQVJSO0FBQUEsZ0JBVUtKO0FBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBY0g7QUFFSjs7QUFFRCwrREFBZUQsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBOztBQUlBLFNBQVNNLGNBQVQsT0FBc0M7QUFBQSxNQUFURCxLQUFTO0FBQ2xDLHNCQUNJLDhEQUFDLG1EQUFELGtDQUNRQSxLQURSO0FBRUksb0JBQWdCLEVBQUMscUJBRnJCO0FBR0ksbUJBQWUsRUFBQyxtQkFIcEI7QUFJSSxnQkFBWSxFQUFFO0FBQ1ZFLGVBQVMsRUFBRTtBQUREO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztBQUVELCtEQUFlRCxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFJQTtBQUVBOztBQUVBLFNBQVNFLGVBQVQsQ0FBeUI7QUFBRUMsT0FBRjtBQUFTQztBQUFULENBQXpCLEVBQXdDO0FBQ3BDLHNCQUNJLDhEQUFDLHdEQUFEO0FBQUEsNEJBQ0ksOERBQUMsOERBQUQ7QUFDSSxtQkFBYSxFQUFDLE1BRGxCO0FBRUksY0FBUSxlQUFFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSSw4REFBQyxtRUFBRCxrQ0FBb0JELEtBQXBCO0FBQTJCLFFBQUUsRUFBRUMsRUFBL0I7QUFBbUMsaUJBQVcsRUFBQyxXQUEvQztBQUEyRCxRQUFFLEVBQUU7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0FBRUQsK0RBQWVGLGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7O0FBTUEsTUFBTUcsS0FBSyxHQUFHQyxpREFBZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFFaEIsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDdEI7QUFDQUgsU0FBSyxDQUNKSSxHQURELENBQ00sR0FBRUMsaURBQVEsY0FEaEIsRUFFQ0MsSUFGRCxDQUVPQyxRQUFELElBQWM7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEVBQXdDRixRQUF4QztBQUNILEtBSkQ7QUFLSCxHQVBEOztBQVNBLFFBQU1HLGNBQWMsR0FBSSxHQUFFTCxpREFBUSxjQUFsQztBQUNBLFFBQU1NLGVBQWUsR0FBSSxHQUFFTixpREFBUSxlQUFuQztBQUVBLHNCQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBUyxFQUFDLFFBQWpCO0FBQTBCLE1BQUUsRUFBQyxNQUE3QjtBQUFvQyxNQUFFLEVBQUMsTUFBdkM7QUFBOEMsV0FBTyxFQUFDLG1CQUF0RDtBQUEwRSxLQUFDLEVBQUMsT0FBNUU7QUFBb0YsV0FBTyxFQUFDLElBQTVGO0FBQWlHLFdBQU8sRUFBRSxDQUExRztBQUFBLDRCQUNJLDhEQUFDLGlEQUFEO0FBQUEsOEJBQ0ksOERBQUMsdURBQUQ7QUFBVSxZQUFJLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyxrREFBRDtBQUFNLFVBQUUsRUFBRSxDQUFWO0FBQUEsaUVBQ2lDLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURqQyx3QkFDaUUsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0ksOERBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0FBRUQsK0RBQWVILFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBOztBQUVBLFNBQVNVLGVBQVQsT0FBNkM7QUFBQSxNQUFwQjtBQUFFQztBQUFGLEdBQW9CO0FBQUEsTUFBVG5CLEtBQVM7O0FBQ3pDLHNCQUNJLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFbUIsSUFBaEI7QUFBQSwyQkFDSyw4REFBQyxvREFBRDtBQUFRLGNBQVEsZUFBRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWxCO0FBQWlDLFVBQUksRUFBQztBQUF0QyxPQUErQ25CLEtBQS9DO0FBQXNELGlCQUFXLEVBQUUsQ0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7QUFFRCwrREFBZWtCLGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0UsY0FBVCxPQUFxRDtBQUFBLE1BQTdCO0FBQUVELFFBQUY7QUFBUXBCO0FBQVIsR0FBNkI7QUFBQSxNQUFUQyxLQUFTOztBQUNqRCxzQkFDSSw4REFBQyxrREFBRDtBQUFVLFFBQUksRUFBRW1CLElBQWhCO0FBQUEsMkJBQ0ksOERBQUMsb0RBQUQ7QUFBUSxjQUFRLGVBQUUsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFsQjtBQUFnQyxVQUFJLEVBQUM7QUFBckMsT0FBOENuQixLQUE5QztBQUFxRCxpQkFBVyxFQUFFLENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0FBRUQsK0RBQWVvQixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFHQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFNO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixNQUE4QkMsaURBQVUsQ0FBQ0MseURBQUQsQ0FBOUM7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLDBEQUFRLEVBQXRCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLENBQ1QsUUFEUyxFQUVULGdCQUZTLENBQWI7O0FBS0EsUUFBTUMsZUFBZSxHQUFHLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxLQUFxQjtBQUN6QyxRQUFJO0FBQ0FULGVBQVMsQ0FBQ1EsTUFBRCxFQUFTSixLQUFULEVBQWdCSyxPQUFoQixDQUFUO0FBQ0gsS0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNWbEIsYUFBTyxDQUFDbUIsS0FBUixDQUFjRCxHQUFkO0FBQ0g7QUFDSixHQU5EOztBQVFBLFFBQU1FLGdCQUFnQixHQUFHLENBQUNKLE1BQUQsRUFBU0MsT0FBVCxLQUFxQjtBQUMxQyxRQUFJO0FBQ0FSLGtCQUFZLENBQUNPLE1BQUQsRUFBU0osS0FBVCxFQUFnQkssT0FBaEIsQ0FBWjtBQUNILEtBRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7QUFDVmxCLGFBQU8sQ0FBQ21CLEtBQVIsQ0FBY0QsR0FBZDtBQUNIO0FBQ0osR0FORDs7QUFRQSxzQkFDSSw4REFBQyxpREFBRDtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBUSxNQUFkO0FBQWUsaUJBQVcsRUFBQyxpQkFBM0I7QUFBQSw4QkFDSSw4REFBQyxxREFBRDtBQUFBLGtCQUNLSixJQUFJLENBQUNPLEdBQUwsQ0FBUyxDQUFDQyxTQUFELEVBQVlDLENBQVosa0JBQ04sOERBQUMsaURBQUQ7QUFBQSxvQkFBY0Q7QUFBZCxXQUFVQyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSSw4REFBQyx1REFBRDtBQUFBLGdDQUNJLDhEQUFDLHNEQUFEO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDSSw4REFBQyxpRUFBRDtBQUNJLHdCQUFZLEVBQUVSO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUksOERBQUMsc0RBQUQ7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNJLDhEQUFDLG1FQUFEO0FBQ0ksd0JBQVksRUFBRUs7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztBQUVELCtEQUFlYixpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFPQTs7QUFLQSxNQUFNaUIsR0FBRyxHQUFHL0IsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1nQyxhQUFhLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixHQUFhQyxLQUFiLENBQW1CO0FBQ3JDQyxNQUFJLEVBQUVKLEdBQUcsQ0FBQ0ssTUFBSixHQUFhQyxRQUFiLENBQXNCLHVCQUF0QixDQUQrQjtBQUVyQzlDLE1BQUksRUFBRXdDLEdBQUcsQ0FBQ0ssTUFBSixHQUFhQyxRQUFiLENBQXNCLHVCQUF0QixDQUYrQjtBQUdyQ0MsS0FBRyxFQUFFUCxHQUFHLENBQUNLLE1BQUo7QUFIZ0MsQ0FBbkIsQ0FBdEI7O0FBTUEsU0FBU0csV0FBVCxDQUFxQjtBQUFFQyxlQUFGO0FBQWlCQyxjQUFqQjtBQUErQkM7QUFBL0IsQ0FBckIsRUFBbUU7QUFDL0Qsc0JBQ0ksOERBQUMsMENBQUQ7QUFDSSxzQkFBa0IsTUFEdEI7QUFFSSxpQkFBYSxFQUFFRixhQUZuQjtBQUdJLFlBQVEsRUFBRUMsWUFIZDtBQUlJLG9CQUFnQixFQUFFVCxhQUp0QjtBQUFBLGNBTU12QyxLQUFELGlCQUNHLDhEQUFDLHdDQUFEO0FBQUEsOEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxpQkFBUyxFQUFDLEtBQWpCO0FBQXVCLGVBQU8sRUFBQyxNQUEvQjtBQUFzQyxVQUFFLEVBQUMsTUFBekM7QUFBQSxnQ0FDSSw4REFBQyxpREFBRDtBQUFBLGlDQUNJLDhEQUFDLHlDQUFEO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQUEsc0JBQ0ssQ0FBQztBQUFFSSxtQkFBRjtBQUFTOEM7QUFBVCxhQUFELGtCQUNHLDhEQUFDLHlEQUFEO0FBQWEsdUJBQVMsRUFBRUEsSUFBSSxDQUFDQyxNQUFMLENBQVlULElBQVosSUFBb0JRLElBQUksQ0FBQ0UsT0FBTCxDQUFhVixJQUF6RDtBQUFBLHNDQUNJLDhEQUFDLGlFQUFEO0FBQWUscUJBQUssRUFBRXRDLEtBQXRCO0FBQTZCLHFCQUFLLEVBQUUsQ0FBQzhDLElBQUksQ0FBQ0MsTUFBTCxDQUFZVCxJQUFiLElBQXFCUSxJQUFJLENBQUNFLE9BQUwsQ0FBYVYsSUFBdEU7QUFBNEUsaUJBQUMsRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUksOERBQUMsOERBQUQ7QUFBQSwwQkFBbUJRLElBQUksQ0FBQ0MsTUFBTCxDQUFZVDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBV0ksOERBQUMsaURBQUQ7QUFBSyxXQUFDLEVBQUMsTUFBUDtBQUFBLGlDQUNJLDhEQUFDLHlDQUFEO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQUEsc0JBQ0ssQ0FBQztBQUFFdEMsbUJBQUY7QUFBUzhDO0FBQVQsYUFBRCxrQkFDRyw4REFBQyx5REFBRDtBQUFhLHVCQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZckQsSUFBWixJQUFvQm9ELElBQUksQ0FBQ0UsT0FBTCxDQUFhdEQsSUFBekQ7QUFBQSxzQ0FDSSw4REFBQyxtRUFBRDtBQUFnQixxQkFBSyxFQUFFTSxLQUF2QjtBQUE4QixxQkFBSyxFQUFFLENBQUM4QyxJQUFJLENBQUNDLE1BQUwsQ0FBWXJELElBQWIsSUFBcUJvRCxJQUFJLENBQUNFLE9BQUwsQ0FBYXRELElBQXZFO0FBQTZFLGlCQUFDLEVBQUM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLDhEQUFDLDhEQUFEO0FBQUEsMEJBQW1Cb0QsSUFBSSxDQUFDQyxNQUFMLENBQVlyRDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBdUJJLDhEQUFDLGlEQUFEO0FBQUssU0FBQyxFQUFDLE1BQVA7QUFBYyxTQUFDLEVBQUMsTUFBaEI7QUFBdUIsVUFBRSxFQUFDLE1BQTFCO0FBQUEsK0JBQ0ksOERBQUMseUNBQUQ7QUFBTyxjQUFJLEVBQUMsS0FBWjtBQUFBLG9CQUNLLENBQUM7QUFBRU0saUJBQUY7QUFBUzhDO0FBQVQsV0FBRCxrQkFDRyw4REFBQyx5REFBRDtBQUFhLHFCQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZTixHQUFaLElBQW1CSyxJQUFJLENBQUNFLE9BQUwsQ0FBYVAsR0FBeEQ7QUFBQSxvQ0FDSSw4REFBQywrREFBRDtBQUFjLG1CQUFLLEVBQUV6QyxLQUFyQjtBQUE0QixtQkFBSyxFQUFFLENBQUM4QyxJQUFJLENBQUNDLE1BQUwsQ0FBWU4sR0FBYixJQUFvQkssSUFBSSxDQUFDRSxPQUFMLENBQWFQLEdBQXBFO0FBQXlFLGVBQUMsRUFBQyxNQUEzRTtBQUFrRixlQUFDLEVBQUM7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLDhEQUFDLDhEQUFEO0FBQUEsd0JBQW1CSyxJQUFJLENBQUNDLE1BQUwsQ0FBWU47QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCSixlQWlDSSw4REFBQyx5REFBRDtBQUFhLGVBQU8sRUFBQyxNQUFyQjtBQUFBLGdDQUNJLDhEQUFDLCtEQUFEO0FBQ0ksaUJBQU8sRUFBQyxTQURaO0FBRUksY0FBSSxFQUFDLFVBRlQ7QUFHSSxjQUFJLEVBQUMsUUFIVDtBQUlJLG1CQUFTLEVBQUU3QyxLQUFLLENBQUNxRCxZQUpyQjtBQUtJLGlCQUFPLEVBQUVMO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVFJLDhEQUFDLCtEQUFEO0FBQ0ksaUJBQU8sRUFBQyxNQURaO0FBRUksY0FBSSxFQUFDLFFBRlQ7QUFHSSxpQkFBTyxFQUFFQztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJESDs7QUFFRCwrREFBZUgsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTUSxlQUFULEdBQTJCO0FBQ3ZCLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxVQUFWO0FBQWtCQztBQUFsQixNQUE4QkMsK0RBQWEsRUFBakQ7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdyQyxpREFBVSxDQUFDQyx5REFBRCxDQUEzQjtBQUNBLFFBQU1zQixhQUFhLEdBQUc7QUFDbEJMLFFBQUksRUFBRSxFQURZO0FBRWxCNUMsUUFBSSxFQUFFLFFBRlk7QUFHbEIrQyxPQUFHLEVBQUU7QUFIYSxHQUF0Qjs7QUFNQSxRQUFNaUIsbUJBQW1CLEdBQUcsT0FBT2hDLE1BQVAsRUFBZUMsT0FBZixLQUEyQjtBQUNuRCxXQUFPRCxNQUFNLENBQUNlLEdBQWQ7QUFDQSxVQUFNa0IsSUFBSSxHQUFHO0FBQ1RDLGFBQU8sRUFBRUgsSUFBSSxDQUFDeEQsRUFETDtBQUVUNEQsVUFBSSxFQUFFO0FBQ0Z2QixZQUFJLEVBQUVaLE1BQU0sQ0FBQ1ksSUFEWDtBQUVGd0IsZ0JBQVEsRUFBRSxDQUZSO0FBR0ZwRSxZQUFJLEVBQUVnQyxNQUFNLENBQUNoQztBQUhYO0FBRkcsS0FBYjtBQVFBZ0IsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNnRCxJQUF6QztBQUNBLFVBQU1JLElBQUksR0FBRyxNQUFNQyw2REFBTyxDQUFDLGVBQUQsRUFBa0IsTUFBbEIsRUFBMEJMLElBQTFCLENBQTFCO0FBQ0EsVUFBTUUsSUFBSSxHQUFHRSxJQUFJLENBQUNBLElBQWxCO0FBQ0FyRCxXQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ29ELElBQTFDO0FBQ0FSLFVBQU0sQ0FBQ1UsSUFBUCxDQUFhLFNBQVFKLElBQUksQ0FBQzVELEVBQUcsRUFBN0I7QUFDSCxHQWZEOztBQWlCQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLCtEQUFEO0FBQWMsYUFBTyxFQUFDLFNBQXRCO0FBQWdDLFVBQUksRUFBQyxVQUFyQztBQUFnRCxhQUFPLEVBQUVtRDtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyxtREFBRDtBQUFPLFlBQU0sRUFBRUQsTUFBZjtBQUF1QixhQUFPLEVBQUVFLE9BQWhDO0FBQXlDLGdCQUFVLE1BQW5EO0FBQW9ELFVBQUksRUFBQyxJQUF6RDtBQUFBLDhCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLDBEQUFEO0FBQWMsVUFBRSxFQUFDLG1CQUFqQjtBQUFxQyxTQUFDLEVBQUMsTUFBdkM7QUFBOEMsZUFBTyxFQUFDLElBQXREO0FBQUEsZ0NBQ0ksOERBQUMseURBQUQ7QUFBQSxpQ0FBYSw4REFBQyx1REFBRDtBQUFVLGdCQUFJLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQyx1REFBRDtBQUFBLGtDQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBRSxFQUFDLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSw4REFBQyw2REFBRDtBQUNJLHlCQUFhLEVBQUVWLGFBRG5CO0FBRUksd0JBQVksRUFBRWUsbUJBRmxCO0FBR0ksdUJBQVcsRUFBRUw7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQW9CSDs7QUFFRCwrREFBZUgsZUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBSUE7QUFFQTs7QUFFQSxTQUFTZ0Isa0JBQVQsQ0FBNEI7QUFBRWxFLE9BQUY7QUFBU0M7QUFBVCxDQUE1QixFQUEyQztBQUN2QyxzQkFDSSw4REFBQyx3REFBRDtBQUFBLDRCQUNJLDhEQUFDLDhEQUFEO0FBQ0ksbUJBQWEsRUFBQyxNQURsQjtBQUVJLGNBQVEsZUFBRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0ksOERBQUMsbUVBQUQsa0NBQW9CRCxLQUFwQjtBQUEyQixRQUFFLEVBQUVDLEVBQS9CO0FBQW1DLFVBQUksRUFBQyxVQUF4QztBQUFtRCxpQkFBVyxFQUFDLFVBQS9EO0FBQTBFLFFBQUUsRUFBRTtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7QUFFRCwrREFBZWlFLGtCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUlBLFNBQVNDLFlBQVQsT0FBa0Q7QUFBQSxNQUE1QjtBQUFFbkUsU0FBRjtBQUFTb0U7QUFBVCxHQUE0QjtBQUFBLE1BQVR4RSxLQUFTOztBQUM5QyxzQkFDSSw4REFBQyxzREFBRCxrQ0FDUUksS0FEUjtBQUVJLE1BQUUsRUFBQyxLQUZQO0FBR0ksZUFBVyxFQUFDLFVBSGhCO0FBSUksZ0JBQVksRUFBRTtBQUFFcUUsV0FBSyxFQUFFO0FBQVQsS0FKbEI7QUFLSSxlQUFXLEVBQUMsZUFMaEI7QUFNSSxNQUFFLEVBQUMsbUJBTlA7QUFPSSxvQkFBZ0IsRUFBQyxxQkFQckI7QUFRSSxXQUFPLEVBQUM7QUFSWixLQVNRekUsS0FUUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7QUFFRCwrREFBZXVFLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUlBLFNBQVNHLFFBQVQsQ0FBa0I7QUFBRVQ7QUFBRixDQUFsQixFQUE0QjtBQUN4QixzQkFDSSw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBQyxJQUFiO0FBQWtCLEtBQUMsRUFBQyxPQUFwQjtBQUE0QixLQUFDLEVBQUMsT0FBOUI7QUFBc0MsV0FBTyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztBQUVELCtEQUFlUyxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBTUE7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUMsT0FBSyxHQUFDLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFBcUMsT0FBckM7QUFBUixDQUF0QixFQUErRTtBQUMzRSxzQkFDSSw4REFBQyxvREFBRDtBQUFRLEtBQUMsRUFBQyxNQUFWO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxlQUFTLEVBQUMsS0FBakI7QUFBdUIsUUFBRSxFQUFDLE1BQTFCO0FBQWlDLE9BQUMsRUFBQyxNQUFuQztBQUFBLDhCQUNJLDhEQUFDLHVEQUFEO0FBQVUsWUFBSSxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUksOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0ksOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUksOERBQUMsb0RBQUQ7QUFBUSxhQUFPLEVBQUMsTUFBaEI7QUFBQSxnQkFDS0EsS0FBSyxDQUFDekMsR0FBTixDQUFVLENBQUM4QixJQUFELEVBQU01QixDQUFOLGtCQUNQLDhEQUFDLHVEQUFEO0FBQWtCLFlBQUksRUFBRTRCO0FBQXhCLFNBQWU1QixDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztBQUVELCtEQUFlc0MsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7QUFJQSxTQUFTRSxhQUFULE9BQW1EO0FBQUEsTUFBNUI7QUFBRXpFLFNBQUY7QUFBU29FO0FBQVQsR0FBNEI7QUFBQSxNQUFUeEUsS0FBUzs7QUFDL0Msc0JBQ0ksOERBQUMsbURBQUQsa0NBQ1FJLEtBRFI7QUFFSSxNQUFFLEVBQUMsTUFGUDtBQUdJLGVBQVcsRUFBQyxXQUhoQjtBQUlJLGdCQUFZLEVBQUU7QUFBRXFFLFdBQUssRUFBRTtBQUFULEtBSmxCO0FBS0ksZUFBVyxFQUFDLGVBTGhCO0FBTUksTUFBRSxFQUFDLG1CQU5QO0FBT0ksb0JBQWdCLEVBQUMscUJBUHJCO0FBUUksV0FBTyxFQUFDO0FBUlosS0FTUXpFLEtBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0FBRUQsK0RBQWU2RSxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUlBLFNBQVNDLGNBQVQsT0FBb0Q7QUFBQSxNQUE1QjtBQUFFMUUsU0FBRjtBQUFTb0U7QUFBVCxHQUE0QjtBQUFBLE1BQVR4RSxLQUFTOztBQUNoRCxzQkFDSSw4REFBQyxvREFBRCxnREFDUUksS0FEUjtBQUVJLE1BQUUsRUFBQyxNQUZQO0FBR0ksZUFBVyxFQUFDLGVBSGhCO0FBSUksTUFBRSxFQUFDLG1CQUpQO0FBS0ksb0JBQWdCLEVBQUMscUJBTHJCO0FBTUksV0FBTyxFQUFDO0FBTlosS0FPUUosS0FQUjtBQUFBLDRCQVNJO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQVVJO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztBQUVELCtEQUFlOEUsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQU1BOztBQUNBLE1BQU14QyxHQUFHLEdBQUcvQixtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUNBQSxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0IrQixHQUF4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU3lDLGFBQVQsQ0FBdUI7QUFBRS9CO0FBQUYsQ0FBdkIsRUFBeUM7QUFDckMsUUFBTWdDLGtCQUFrQixHQUFHLGVBQTNCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHM0MsR0FBRyxDQUFDRSxNQUFKLEdBQWFDLEtBQWIsQ0FBbUI7QUFDbkN5QyxTQUFLLEVBQUU1QyxHQUFHLENBQUNLLE1BQUosR0FDTXVDLEtBRE4sQ0FDWSxlQURaLEVBRU1DLE9BRk4sQ0FFY0gsa0JBRmQsRUFFa0Msa0RBRmxDLEVBR01wQyxRQUhOLENBR2UsNEJBSGYsQ0FENEI7QUFLbkN3QyxZQUFRLEVBQUU5QyxHQUFHLENBQUNLLE1BQUosR0FDR3lDLFFBREgsR0FFR3hDLFFBRkgsQ0FFWSwyQkFGWixFQUdHeUMsR0FISCxDQUdPLENBSFAsRUFHVSw2Q0FIVixFQUlHQyxVQUpILENBSWMsQ0FKZCxFQUlpQix3Q0FKakIsRUFLR0MsVUFMSCxDQUtjLENBTGQsRUFLaUIseUNBTGpCO0FBTHlCLEdBQW5CLENBQXBCO0FBYUEsc0JBQ0ksOERBQUMsMENBQUQ7QUFDSSxpQkFBYSxFQUFFO0FBQUVMLFdBQUssRUFBRSxFQUFUO0FBQWFFLGNBQVEsRUFBRTtBQUF2QixLQURuQjtBQUVJLFlBQVEsRUFBRXBDLFlBRmQ7QUFHSSxvQkFBZ0IsRUFBRWlDLFdBSHRCO0FBQUEsY0FLTWpGLEtBQUQsaUJBQ0csOERBQUMsd0NBQUQ7QUFBQSw4QkFDSSw4REFBQyxpREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQUEsK0JBQ0ksOERBQUMseUNBQUQ7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUFBLG9CQUNLLENBQUM7QUFBRUksaUJBQUY7QUFBUzhDO0FBQVQsV0FBRCxrQkFDRyw4REFBQyx5REFBRDtBQUFhLHFCQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZK0IsS0FBWixJQUFxQmhDLElBQUksQ0FBQ0UsT0FBTCxDQUFhOEIsS0FBMUQ7QUFBQSxvQ0FDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFLLEVBQUU5RSxLQUF4QjtBQUErQixnQkFBRSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSSw4REFBQyw4REFBRDtBQUFBLHdCQUFtQjhDLElBQUksQ0FBQ0MsTUFBTCxDQUFZK0I7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBWUksOERBQUMsaURBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBLCtCQUNJLDhEQUFDLHlDQUFEO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBQSxvQkFDSyxDQUFDO0FBQUU5RSxpQkFBRjtBQUFTOEM7QUFBVCxXQUFELGtCQUNHLDhEQUFDLHlEQUFEO0FBQWEscUJBQVMsRUFBRUEsSUFBSSxDQUFDQyxNQUFMLENBQVlpQyxRQUFaLElBQXdCbEMsSUFBSSxDQUFDRSxPQUFMLENBQWFnQyxRQUE3RDtBQUFBLG9DQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUksOERBQUMsMkVBQUQ7QUFBb0IsbUJBQUssRUFBRWhGLEtBQTNCO0FBQWtDLGdCQUFFLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJLDhEQUFDLDhEQUFEO0FBQUEsd0JBQW1COEMsSUFBSSxDQUFDQyxNQUFMLENBQVlpQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUF1QkksOERBQUMsK0RBQUQ7QUFBYyxZQUFJLEVBQUMsUUFBbkI7QUFBNEIsZUFBTyxFQUFDLFNBQXBDO0FBQThDLFlBQUksRUFBQyxRQUFuRDtBQUE0RCxpQkFBUyxFQUFFcEYsS0FBSyxDQUFDcUQ7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQ0g7O0FBRUQsK0RBQWUwQixhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQU1BOztBQUNBLE1BQU16QyxHQUFHLEdBQUcvQixtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUNBQSxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0IrQixHQUF4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTa0QsY0FBVCxDQUF3QjtBQUFFeEM7QUFBRixDQUF4QixFQUEwQztBQUN0QyxRQUFNZ0Msa0JBQWtCLEdBQUcsZUFBM0I7QUFDQSxRQUFNUyxZQUFZLEdBQUduRCxHQUFHLENBQUNFLE1BQUosR0FBYUMsS0FBYixDQUFtQjtBQUNwQ2lELG1CQUFlLEVBQUVwRCxHQUFHLENBQUNLLE1BQUosR0FDSkMsUUFESSxDQUNLLDJCQURMLENBRG1CO0FBR3BDK0MsZ0JBQVksRUFBRXJELEdBQUcsQ0FBQ0ssTUFBSixHQUNEdUMsS0FEQyxDQUNLLGVBREwsRUFFREMsT0FGQyxDQUVPSCxrQkFGUCxFQUUyQixrREFGM0IsRUFHRHBDLFFBSEMsQ0FHUSw0QkFIUixDQUhzQjtBQU9wQ2dELG1CQUFlLEVBQUV0RCxHQUFHLENBQUNLLE1BQUosR0FDSnlDLFFBREksR0FFSnhDLFFBRkksQ0FFSywyQkFGTCxFQUdKeUMsR0FISSxDQUdBLENBSEEsRUFHRyw2Q0FISCxFQUlKQyxVQUpJLENBSU8sQ0FKUCxFQUlVLHdDQUpWLEVBS0pDLFVBTEksQ0FLTyxDQUxQLEVBS1UseUNBTFY7QUFQbUIsR0FBbkIsQ0FBckI7QUFlQSxzQkFDSSw4REFBQywwQ0FBRDtBQUNJLGlCQUFhLEVBQUU7QUFBRUcscUJBQWUsRUFBRSxFQUFuQjtBQUF1QkMsa0JBQVksRUFBRSxFQUFyQztBQUF5Q0MscUJBQWUsRUFBRTtBQUExRCxLQURuQjtBQUVJLFlBQVEsRUFBRTVDLFlBRmQ7QUFHSSxvQkFBZ0IsRUFBRXlDLFlBSHRCO0FBQUEsY0FLTXpGLEtBQUQsaUJBQ0csOERBQUMsd0NBQUQ7QUFBQSw4QkFDSSw4REFBQyxpREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQUEsK0JBQ0ksOERBQUMseUNBQUQ7QUFBTyxjQUFJLEVBQUMsaUJBQVo7QUFBQSxvQkFDSyxDQUFDO0FBQUVJLGlCQUFGO0FBQVM4QztBQUFULFdBQUQsa0JBQ0csOERBQUMseURBQUQ7QUFBYSxxQkFBUyxFQUFFQSxJQUFJLENBQUNDLE1BQUwsQ0FBWXVDLGVBQVosSUFBK0J4QyxJQUFJLENBQUNFLE9BQUwsQ0FBYXNDLGVBQXBFO0FBQUEsb0NBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSw4REFBQywyRUFBRDtBQUFvQixtQkFBSyxFQUFFdEYsS0FBM0I7QUFBa0MsZ0JBQUUsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0ksOERBQUMsOERBQUQ7QUFBQSx3QkFBbUI4QyxJQUFJLENBQUNDLE1BQUwsQ0FBWXVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVlJLDhEQUFDLGlEQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQSwrQkFDSSw4REFBQyx5Q0FBRDtBQUFPLGNBQUksRUFBQyxjQUFaO0FBQUEsb0JBQ0ssQ0FBQztBQUFFdEYsaUJBQUY7QUFBUzhDO0FBQVQsV0FBRCxrQkFDRyw4REFBQyx5REFBRDtBQUFhLHFCQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZd0MsWUFBWixJQUE0QnpDLElBQUksQ0FBQ0UsT0FBTCxDQUFhdUMsWUFBakU7QUFBQSxvQ0FDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFLLEVBQUV2RixLQUF4QjtBQUErQixnQkFBRSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSSw4REFBQyw4REFBRDtBQUFBLHdCQUFtQjhDLElBQUksQ0FBQ0MsTUFBTCxDQUFZd0M7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKLGVBdUJJLDhEQUFDLGlEQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQSwrQkFDSSw4REFBQyx5Q0FBRDtBQUFPLGNBQUksRUFBQyxpQkFBWjtBQUFBLG9CQUNLLENBQUM7QUFBRXZGLGlCQUFGO0FBQVM4QztBQUFULFdBQUQsa0JBQ0csOERBQUMseURBQUQ7QUFBYSxxQkFBUyxFQUFFQSxJQUFJLENBQUNDLE1BQUwsQ0FBWXlDLGVBQVosSUFBK0IxQyxJQUFJLENBQUNFLE9BQUwsQ0FBYXdDLGVBQXBFO0FBQUEsb0NBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSw4REFBQywyRUFBRDtBQUFvQixtQkFBSyxFQUFFeEYsS0FBM0I7QUFBa0MsZ0JBQUUsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0ksOERBQUMsOERBQUQ7QUFBQSx3QkFBbUI4QyxJQUFJLENBQUNDLE1BQUwsQ0FBWXlDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkosZUFrQ0ksOERBQUMsK0RBQUQ7QUFBYyxZQUFJLEVBQUMsU0FBbkI7QUFBNkIsZUFBTyxFQUFDLFNBQXJDO0FBQStDLFlBQUksRUFBQyxRQUFwRDtBQUE2RCxpQkFBUyxFQUFFNUYsS0FBSyxDQUFDcUQ7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Q0g7O0FBRUQsK0RBQWVtQyxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFJQTtBQUVBOztBQUVBLFNBQVNLLGtCQUFULENBQTRCO0FBQUV6RixPQUFGO0FBQVNDO0FBQVQsQ0FBNUIsRUFBMkM7QUFDdkMsc0JBQ0ksOERBQUMsd0RBQUQ7QUFBQSw0QkFDSSw4REFBQyw4REFBRDtBQUNJLG1CQUFhLEVBQUMsTUFEbEI7QUFFSSxjQUFRLGVBQUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLDhEQUFDLG1FQUFELGtDQUFvQkQsS0FBcEI7QUFBMkIsUUFBRSxFQUFFQyxFQUEvQjtBQUFtQyxpQkFBVyxFQUFDLFVBQS9DO0FBQTBELFFBQUUsRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7QUFFRCwrREFBZXdGLGtCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQzVCLFFBQU07QUFBRWpDO0FBQUYsTUFBV3JDLGlEQUFVLENBQUNDLDBEQUFELENBQTNCO0FBQ0EsUUFBTWtDLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQW1DLGtEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUksQ0FBQ2xDLElBQUwsRUFBVztBQUNQL0MsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQTRDLFlBQU0sQ0FBQ1UsSUFBUCxDQUFZLFFBQVo7QUFDSDtBQUNKLEdBTFEsRUFLTixDQUFDUixJQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUksOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBT0ksOERBQUMsdURBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBeUIsT0FBQyxFQUFDLE1BQTNCO0FBQWtDLFFBQUUsRUFBRSxDQUF0QztBQUF5QyxtQkFBYSxNQUF0RDtBQUF1RCxPQUFDLEVBQUUsQ0FBMUQ7QUFBQSw2QkFDSSw4REFBQyxtREFBRDtBQUFPLGlCQUFTLEVBQUMsS0FBakI7QUFBdUIsU0FBQyxFQUFDLE1BQXpCO0FBQWdDLGVBQU8sRUFBQyxNQUF4QztBQUFBLGdDQUNJLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMsd0dBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQSxrQkFESjtBQWlCSCxDLENBRUQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQzNOQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICAgIEJ1dHRvblxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBDbHViaG91c2VCdG4oeyB0ZXh0LCB2YXJpYW50LCB0eXBlLCBvbkNsaWNrLCAuLi5wcm9wcyB9KSB7XG5cbiAgICBpZiAodmFyaWFudCA9PSAncHJpbWFyeScpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nc29saWQnXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2NsdWJob3VzZW9yYW5nZSdcbiAgICAgICAgICAgICAgICBzaXplPSdtZCdcbiAgICAgICAgICAgICAgICBmb250U2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgcHg9JzQwcHgnXG4gICAgICAgICAgICAgICAgcHk9JzE2cHgnXG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmICh2YXJpYW50ID09ICdzZWNvbmRhcnknKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3NvbGlkJ1xuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdjbHViaG91c2VvcmFuZ2UnXG4gICAgICAgICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgZm9udFNpemU9J3NtJ1xuICAgICAgICAgICAgICAgIHB4PSc0MHB4J1xuICAgICAgICAgICAgICAgIHB5PScxNnB4J1xuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2xpbmsnXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2NsdWJob3VzZWdyZXknXG4gICAgICAgICAgICAgICAgY29sb3I9J2NsdWJob3VzZWdyZXkuODAwJ1xuICAgICAgICAgICAgICAgIHNpemU9J21kJ1xuICAgICAgICAgICAgICAgIGZvbnRTaXplPSdzbSdcbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJob3VzZUJ0blxuIiwiaW1wb3J0IHsgICBcbiAgICBJbnB1dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBDbHViaG91c2VJbnB1dCh7IC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICB7Li4ucHJvcHN9IFxuICAgICAgICAgICAgZm9jdXNCb3JkZXJDb2xvcj0nY2x1YmhvdXNlb3JhbmdlLjUwMCcgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgICAgIF9wbGFjZWhvbGRlcj17eyBcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICdjbHViaG91c2VncmV5LjYwMCcgXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2x1YmhvdXNlSW5wdXRcbiIsImltcG9ydCB7XG4gICAgSW5wdXRHcm91cCxcbiAgICBJbnB1dExlZnRFbGVtZW50XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBFbWFpbEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5pbXBvcnQgQ2x1YmhvdXNlSW5wdXQgZnJvbSAnLi4vQ2x1YmhvdXNlSW5wdXQvQ2x1YmhvdXNlSW5wdXQnXG5cbmZ1bmN0aW9uIEVtYWlsSW5wdXRHcm91cCh7IGZpZWxkLCBpZCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9J25vbmUnXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49ezxFbWFpbEljb24gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENsdWJob3VzZUlucHV0IHsuLi5maWVsZH0gaWQ9e2lkfSBwbGFjZWhvbGRlcj0nTlVTIEVtYWlsJyBwbD17MTB9Lz5cbiAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1haWxJbnB1dEdyb3VwXG4iLCJpbXBvcnQgeyBcbiAgICBCb3gsXG4gICAgTGluayxcbiAgICBUZXh0LFxuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdFxuXG5pbXBvcnQgTG9naW5SZWdpc3RlckZvcm0gZnJvbSAnLi4vTG9naW5SZWdpc3RlckZvcm0vTG9naW5SZWdpc3RlckZvcm0nXG5pbXBvcnQgQm9sZFRleHQgZnJvbSAnLi4vQm9sZFRleHQvQm9sZFRleHQnXG5pbXBvcnQgTG9naW5HaXRodWJCdG4gZnJvbSAnLi4vTG9naW5HaXRodWJCdG4vTG9naW5HaXRodWJCdG4nXG5pbXBvcnQgTG9naW5EaXNjb3JkQnRuIGZyb20gJy4uL0xvZ2luRGlzY29yZEJ0bi9Mb2dpbkRpc2NvcmRCdG4nXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXG5cbmZ1bmN0aW9uIExvZ2luQm94KCkge1xuXG4gICAgY29uc3QgbG9naW5HaXRodWIgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNhbGwgQVBJIHRvIGxvZyBpbnRvIGdpdGh1YlxuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke0FQSV9VUkx9L2F1dGgvZ2l0aHViYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgZnJvbSBhcGkgYXV0aDogJywgcmVzcG9uc2UpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbG9naW5HaXRodWJVcmwgPSBgJHtBUElfVVJMfS9hdXRoL2dpdGh1YmBcbiAgICBjb25zdCBsb2dpbkRpc2NvcmRVcmwgPSBgJHtBUElfVVJMfS9hdXRoL2Rpc2NvcmRgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdjb2x1bW4nIHB4PSc0MHB4JyBweT0nMzZweCcgYmdDb2xvcj0nY2x1YmhvdXNlZ3JleS4yMDAnIHc9JzQwMHB4JyByb3VuZGVkPSdsZycgc3BhY2luZz17Nn0+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxCb2xkVGV4dCB0ZXh0PSdXZWxjb21lJyAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IG10PXsyfT5cbiAgICAgICAgICAgICAgICAgICAgQnkgbG9nZ2luZyBpbiB5b3UgYWNjZXB0IG91ciA8TGluaz5Qcml2YWN5IFBvbGljeTwvTGluaz4gYW5kIDxMaW5rPlRlcm1zIG9mIFNlcnZpY2U8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8TG9naW5SZWdpc3RlckZvcm0gLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQm94XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRmFEaXNjb3JkIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5mdW5jdGlvbiBMb2dpbkRpc2NvcmRCdG4oeyBocmVmLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgIDxCdXR0b24gbGVmdEljb249ezxGYURpc2NvcmQgLz59IHNpemU9J21kJyB7Li4ucHJvcHN9IGljb25TcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAgICBMb2dpbiB3aXRoIERpc2NvcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5EaXNjb3JkQnRuXG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIExvZ2luR2l0aHViQnRuKHsgaHJlZiwgb25DbGljaywgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxCdXR0b24gbGVmdEljb249ezxGYUdpdGh1YiAvPn0gc2l6ZT0nbWQnIHsuLi5wcm9wc30gaWNvblNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIExvZ2luIHdpdGggR2l0aHViXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luR2l0aHViQnRuXG4iLCJpbXBvcnQge1xuICAgIHVzZUNvbnRleHQgXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgXG4gICAgQm94LFxuICAgIFRhYnMsIFxuICAgIFRhYkxpc3QsIFxuICAgIFRhYlBhbmVscywgXG4gICAgVGFiLCBcbiAgICBUYWJQYW5lbCxcbiAgICB1c2VUb2FzdCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCBVc2VyTG9naW5Gb3JtIGZyb20gJy4uL1VzZXJMb2dpbkZvcm0vVXNlckxvZ2luRm9ybSdcbmltcG9ydCBVc2VyU2lnbnVwRm9ybSBmcm9tICcuLi9Vc2VyU2lnbnVwRm9ybS9Vc2VyU2lnbnVwRm9ybSdcblxuZnVuY3Rpb24gTG9naW5SZWdpc3RlckZvcm0oKSB7XG4gICAgY29uc3QgeyBsb2dpblVzZXIsIHJlZ2lzdGVyVXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KClcbiAgICBjb25zdCB0YWJzID0gW1xuICAgICAgICBcIkxvZyBpblwiLFxuICAgICAgICBcIkNyZWF0ZSBhY2NvdW50XCJcbiAgICBdXG5cbiAgICBjb25zdCBoYW5kbGVVc2VyTG9naW4gPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2dpblVzZXIodmFsdWVzLCB0b2FzdCwgYWN0aW9ucylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVVzZXJTaWdudXAgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZWdpc3RlclVzZXIodmFsdWVzLCB0b2FzdCwgYWN0aW9ucylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGFicyBpc0ZpdHRlZCBjb2xvclNjaGVtZT0nY2x1YmhvdXNlb3JhbmdlJz5cbiAgICAgICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKCh0YWJIZWFkZXIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIga2V5PXtpfT57dGFiSGVhZGVyfTwvVGFiPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVscz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsICBweD17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlckxvZ2luRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlVXNlckxvZ2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsICBweD17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlclNpZ251cEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVVzZXJTaWdudXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWxzPlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUmVnaXN0ZXJGb3JtXG4iLCJpbXBvcnQge1xuICAgIEJveCxcbiAgICBTdGFjayxcbiAgICBGb3JtQ29udHJvbCxcbiAgICBGb3JtRXJyb3JNZXNzYWdlLFxuICAgIEJ1dHRvbkdyb3VwXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBcbiAgICBGb3JtaWssIFxuICAgIEZvcm0sIFxuICAgIEZpZWxkIFxufSBmcm9tICdmb3JtaWsnXG5jb25zdCBZdXAgPSByZXF1aXJlKCd5dXAnKVxuXG5pbXBvcnQgUm9vbU5hbWVJbnB1dCBmcm9tICcuLi9Sb29tTmFtZUlucHV0L1Jvb21OYW1lSW5wdXQnXG5pbXBvcnQgUm9vbVR5cGVTZWxlY3QgZnJvbSAnLi4vUm9vbVR5cGVTZWxlY3QvUm9vbVR5cGVTZWxlY3QnXG5pbXBvcnQgQ2x1YmhvdXNlQnRuIGZyb20gJy4uL0NsdWJob3VzZUJ0bi9DbHViaG91c2VCdG4nXG5pbXBvcnQgUm9vbUJpb0lucHV0IGZyb20gJy4uL1Jvb21CaW9JbnB1dC9Sb29tQmlvSW5wdXQnXG5cbmNvbnN0IG5ld1Jvb21TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIG5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUm9vbSBuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgdHlwZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdSb29tIHR5cGUgaXMgcmVxdWlyZWQnKSxcbiAgICBiaW86IFl1cC5zdHJpbmcoKSxcbn0pXG5cbmZ1bmN0aW9uIE5ld1Jvb21Gb3JtKHsgaW5pdGlhbFZhbHVlcywgaGFuZGxlU3VibWl0LCBoYW5kbGVDbG9zZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplICBcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17bmV3Um9vbVNjaGVtYX1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9JzIwcHgnIG1iPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J25hbWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMubmFtZSAmJiBmb3JtLnRvdWNoZWQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21OYW1lSW5wdXQgZmllbGQ9e2ZpZWxkfSB2YWxpZD17IWZvcm0uZXJyb3JzLm5hbWUgJiYgZm9ybS50b3VjaGVkLm5hbWV9IHc9JzI5M3B4Jy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLm5hbWV9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHc9JzEwMCUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd0eXBlJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy50eXBlICYmIGZvcm0udG91Y2hlZC50eXBlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbVR5cGVTZWxlY3QgZmllbGQ9e2ZpZWxkfSB2YWxpZD17IWZvcm0uZXJyb3JzLnR5cGUgJiYgZm9ybS50b3VjaGVkLnR5cGV9IHc9JzEwMCUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMudHlwZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPEJveCB3PScxMDAlJyBoPSc4OHB4JyBtYj0nMzBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nYmlvJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuYmlvICYmIGZvcm0udG91Y2hlZC5iaW99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvb21CaW9JbnB1dCBmaWVsZD17ZmllbGR9IHZhbGlkPXshZm9ybS5lcnJvcnMuYmlvICYmIGZvcm0udG91Y2hlZC5iaW99IHc9JzEwMCUnIGg9JzEwMCUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5iaW99PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNwYWNpbmc9JzMwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENsdWJob3VzZUJ0biBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdwcmltYXJ5JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PSdOZXcgcm9vbScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e3Byb3BzLmlzU3VibWl0dGluZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbHViaG91c2VCdG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nbGluaycgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD0nQ2FuY2VsJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdSb29tRm9ybVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBUZXh0LFxuICAgIE1vZGFsLFxuICAgIE1vZGFsT3ZlcmxheSxcbiAgICBNb2RhbENvbnRlbnQsXG4gICAgTW9kYWxIZWFkZXIsXG4gICAgTW9kYWxCb2R5LFxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXG4gICAgdXNlRGlzY2xvc3VyZVxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgY2FsbEFQSSB9IGZyb20gJy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCBDbHViaG91c2VCdG4gZnJvbSAnLi4vQ2x1YmhvdXNlQnRuL0NsdWJob3VzZUJ0bidcbmltcG9ydCBCb2xkVGV4dCBmcm9tIFwiLi4vQm9sZFRleHQvQm9sZFRleHRcIlxuaW1wb3J0IE5ld1Jvb21Gb3JtIGZyb20gJy4uL05ld1Jvb21Gb3JtL05ld1Jvb21Gb3JtJ1xuXG5mdW5jdGlvbiBOZXdSb29tTW9kYWxCdG4oKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHR5cGU6ICdwdWJsaWMnLFxuICAgICAgICBiaW86ICcnXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZU5ld1Jvb20gPSBhc3luYyAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB2YWx1ZXMuYmlvXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgICAgICAgcm9vbToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgICAgICAgIG51bVVzZXJzOiAwLFxuICAgICAgICAgICAgICAgIHR5cGU6IHZhbHVlcy50eXBlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyByb29tIHdpdGggYm9keTogJywgYm9keSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxBUEkoJy9yb29tcy9jcmVhdGUnLCAnUE9TVCcsIGJvZHkpXG4gICAgICAgIGNvbnN0IHJvb20gPSBkYXRhLmRhdGFcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgYWZ0ZXIgY3JlYXRpbmcgcm9vbTogJywgZGF0YSlcbiAgICAgICAgcm91dGVyLnB1c2goYC9yb29tLyR7cm9vbS5pZH1gKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+IFxuICAgICAgICAgICAgPENsdWJob3VzZUJ0biB2YXJpYW50PSdwcmltYXJ5JyB0ZXh0PSdOZXcgcm9vbScgb25DbGljaz17b25PcGVufS8+XG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9IGlzQ2VudGVyZWQgc2l6ZT0nbGcnPlxuICAgICAgICAgICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgICAgICAgICA8TW9kYWxDb250ZW50IGJnPSdjbHViaG91c2VncmV5LjIwMCcgcD0nMjBweCcgcm91bmRlZD0nbGcnPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+PEJvbGRUZXh0IHRleHQ9J05ldyByb29tJy8+PC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG1iPScyMHB4Jz5GaWxsIHRoZSBmb2xsb3dpbmcgZmllbGRzIHRvIHN0YXJ0IGEgbmV3IHJvb208L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3Um9vbUZvcm0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVDcmVhdGVOZXdSb29tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Jvb21Nb2RhbEJ0blxuIiwiaW1wb3J0IHtcbiAgICBJbnB1dEdyb3VwLFxuICAgIElucHV0TGVmdEVsZW1lbnRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IExvY2tJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuaW1wb3J0IENsdWJob3VzZUlucHV0IGZyb20gJy4uL0NsdWJob3VzZUlucHV0L0NsdWJob3VzZUlucHV0J1xuXG5mdW5jdGlvbiBQYXNzd29yZElucHV0R3JvdXAoeyBmaWVsZCwgaWQgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPSdub25lJ1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXs8TG9ja0ljb24gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENsdWJob3VzZUlucHV0IHsuLi5maWVsZH0gaWQ9e2lkfSB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBwbD17MTB9Lz5cbiAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dEdyb3VwXG4iLCJpbXBvcnQge1xuICAgIFRleHRhcmVhXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFJvb21CaW9JbnB1dCh7IGZpZWxkLCB2YWxpZCwgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0YXJlYSBcbiAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgIGlkPSdiaW8nXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUm9vbSBiaW8nXG4gICAgICAgICAgICBfcGxhY2Vob2xkZXI9e3sgY29sb3I6ICdjbHViaG91c2VncmV5LjYwMCcgfX1cbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdjbHViaG91c2VncmV5J1xuICAgICAgICAgICAgYmc9J2NsdWJob3VzZWdyZXkuNDAwJ1xuICAgICAgICAgICAgZm9jdXNCb3JkZXJDb2xvcj0nY2x1YmhvdXNlb3JhbmdlLjUwMCdcbiAgICAgICAgICAgIHJvdW5kZWQ9J2xnJ1xuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbUJpb0lucHV0XG4iLCJpbXBvcnQge1xuICAgIEJveFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBSb29tQ2FyZCh7IHJvb20gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcm91bmRlZD0nbGcnIHc9JzY0MHB4JyBoPScxMTJweCcgYmdDb2xvcj0nY2x1YmhvdXNlZ3JleS4yMDAnPlxuXG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbUNhcmRcbiIsImltcG9ydCB7IFxuICAgIFN0YWNrLFxuICAgIFZTdGFjayxcbiAgICBTcGFjZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IFJvb21DYXJkIGZyb20gJy4uL1Jvb21DYXJkL1Jvb21DYXJkJ1xuaW1wb3J0IE5ld1Jvb21Nb2RhbEJ0biBmcm9tICcuLi9OZXdSb29tTW9kYWxCdG4vTmV3Um9vbU1vZGFsQnRuJ1xuaW1wb3J0IEJvbGRUZXh0IGZyb20gJy4uL0JvbGRUZXh0L0JvbGRUZXh0J1xuXG5mdW5jdGlvbiBSb29tTGlzdEZlZWQoeyByb29tcz1bJ3Jvb20xJywgJ3Jvb20xJywgJ3Jvb20xJywgJ3Jvb20xJywgJ3Jvb20xJ10gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWU3RhY2sgdz0nMTAwJSc+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIG1iPSczMHB4JyB3PScxMDAlJz5cbiAgICAgICAgICAgICAgICA8Qm9sZFRleHQgdGV4dD0nWW91ciBmZWVkJy8+XG4gICAgICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgICAgIDxOZXdSb29tTW9kYWxCdG4gLz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzIwcHgnPlxuICAgICAgICAgICAgICAgIHtyb29tcy5tYXAoKHJvb20saSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Um9vbUNhcmQga2V5PXtpfSByb29tPXtyb29tfS8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb29tTGlzdEZlZWRcbiIsImltcG9ydCB7XG4gICAgSW5wdXRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gUm9vbU5hbWVJbnB1dCh7IGZpZWxkLCB2YWxpZCwgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Jvb20gbmFtZScgXG4gICAgICAgICAgICBfcGxhY2Vob2xkZXI9e3sgY29sb3I6ICdjbHViaG91c2VncmV5LjYwMCcgfX1cbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdjbHViaG91c2VncmV5J1xuICAgICAgICAgICAgYmc9J2NsdWJob3VzZWdyZXkuNDAwJ1xuICAgICAgICAgICAgZm9jdXNCb3JkZXJDb2xvcj0nY2x1YmhvdXNlb3JhbmdlLjUwMCdcbiAgICAgICAgICAgIHJvdW5kZWQ9J2xnJ1xuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbU5hbWVJbnB1dFxuIiwiaW1wb3J0IHtcbiAgICBTZWxlY3Rcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gUm9vbVR5cGVTZWxlY3QoeyBmaWVsZCwgdmFsaWQsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgaWQ9J3R5cGUnXG4gICAgICAgICAgICBjb2xvclNjaGVtZT0nY2x1YmhvdXNlZ3JleSdcbiAgICAgICAgICAgIGJnPSdjbHViaG91c2VncmV5LjQwMCdcbiAgICAgICAgICAgIGZvY3VzQm9yZGVyQ29sb3I9J2NsdWJob3VzZW9yYW5nZS41MDAnXG4gICAgICAgICAgICByb3VuZGVkPSdsZydcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUHVibGljJz5QdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1ByaXZhdGUnPlByaXZhdGU8L29wdGlvbj5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb29tVHlwZVNlbGVjdFxuIiwiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgRm9ybUxhYmVsLFxuICAgIEZvcm1FcnJvck1lc3NhZ2Vcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5jb25zdCBZdXAgPSByZXF1aXJlKCd5dXAnKVxucmVxdWlyZSgneXVwLXBhc3N3b3JkJykoWXVwKVxuXG5pbXBvcnQgQ2x1YmhvdXNlQnRuIGZyb20gJy4uL0NsdWJob3VzZUJ0bi9DbHViaG91c2VCdG4nXG5pbXBvcnQgRW1haWxJbnB1dEdyb3VwIGZyb20gJy4uL0VtYWlsSW5wdXRHcm91cC9FbWFpbElucHV0R3JvdXAnXG5pbXBvcnQgUGFzc3dvcmRJbnB1dEdyb3VwIGZyb20gJy4uL1Bhc3N3b3JkSW5wdXRHcm91cC9QYXNzd29yZElucHV0R3JvdXAnXG5cbmZ1bmN0aW9uIFVzZXJMb2dpbkZvcm0oeyBoYW5kbGVTdWJtaXQgfSkge1xuICAgIGNvbnN0IHZhbGlkTnVzRW1haWxSZWdleCA9IC8oQHx1LiludXMuZWR1L1xuICAgIGNvbnN0IGxvZ2luU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAuZW1haWwoJ0ludmFsaWQgZW1haWwnKVxuICAgICAgICAgICAgICAgICAgICAubWF0Y2hlcyh2YWxpZE51c0VtYWlsUmVnZXgsICdZb3VyIE5VUyBlbWFpbCBpcyByZXF1aXJlZCB0byBqb2luIE5VUyBDbHViaG91c2UnKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1lvdXIgTlVTIGVtYWlsIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDggY2hhcmFjdGVycycpXG4gICAgICAgICAgICAgICAgICAgIC5taW5OdW1iZXJzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBkaWdpdCcpXG4gICAgICAgICAgICAgICAgICAgIC5taW5TeW1ib2xzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBzeW1ib2wnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17bG9naW5TY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nZW1haWwnID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5lbWFpbCAmJiBmb3JtLnRvdWNoZWQuZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdlbWFpbCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLmVtYWlsfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMucGFzc3dvcmQgJiYgZm9ybS50b3VjaGVkLnBhc3N3b3JkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0R3JvdXAgZmllbGQ9e2ZpZWxkfSBpZD0ncGFzc3dvcmQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5wYXNzd29yZH08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Q2x1YmhvdXNlQnRuIHRleHQ9J0xvZyBpbicgdmFyaWFudD0ncHJpbWFyeScgdHlwZT0nc3VibWl0JyBpc0xvYWRpbmc9e3Byb3BzLmlzU3VibWl0dGluZ30gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2dpbkZvcm1cbiIsImltcG9ydCB7XG4gICAgQm94LFxuICAgIEZvcm1Db250cm9sLFxuICAgIEZvcm1MYWJlbCxcbiAgICBGb3JtRXJyb3JNZXNzYWdlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuY29uc3QgWXVwID0gcmVxdWlyZSgneXVwJylcbnJlcXVpcmUoJ3l1cC1wYXNzd29yZCcpKFl1cClcblxuaW1wb3J0IENsdWJob3VzZUJ0biBmcm9tICcuLi9DbHViaG91c2VCdG4vQ2x1YmhvdXNlQnRuJ1xuaW1wb3J0IEVtYWlsSW5wdXRHcm91cCBmcm9tICcuLi9FbWFpbElucHV0R3JvdXAvRW1haWxJbnB1dEdyb3VwJ1xuaW1wb3J0IFBhc3N3b3JkSW5wdXRHcm91cCBmcm9tICcuLi9QYXNzd29yZElucHV0R3JvdXAvUGFzc3dvcmRJbnB1dEdyb3VwJ1xuaW1wb3J0IFVzZXJuYW1lSW5wdXRHcm91cCBmcm9tICcuLi9Vc2VybmFtZUlucHV0R3JvdXAvVXNlcm5hbWVJbnB1dEdyb3VwJ1xuXG5mdW5jdGlvbiBVc2VyU2lnbnVwRm9ybSh7IGhhbmRsZVN1Ym1pdCB9KSB7XG4gICAgY29uc3QgdmFsaWROdXNFbWFpbFJlZ2V4ID0gLyhAfHUuKW51cy5lZHUvXG4gICAgY29uc3Qgc2lnbnVwU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgc2lnbnVwX3VzZXJuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHVzZXJuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHNpZ251cF9lbWFpbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5lbWFpbCgnSW52YWxpZCBlbWFpbCcpXG4gICAgICAgICAgICAgICAgICAgIC5tYXRjaGVzKHZhbGlkTnVzRW1haWxSZWdleCwgJ1lvdXIgTlVTIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGpvaW4gTlVTIENsdWJob3VzZScpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnWW91ciBOVVMgZW1haWwgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgc2lnbnVwX3Bhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDggY2hhcmFjdGVycycpXG4gICAgICAgICAgICAgICAgICAgIC5taW5OdW1iZXJzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBkaWdpdCcpXG4gICAgICAgICAgICAgICAgICAgIC5taW5TeW1ib2xzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBzeW1ib2wnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHNpZ251cF91c2VybmFtZTogJycsIHNpZ251cF9lbWFpbDogJycsIHNpZ251cF9wYXNzd29yZDogJycgfX1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzaWdudXBTY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX3VzZXJuYW1lJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX3VzZXJuYW1lICYmIGZvcm0udG91Y2hlZC5zaWdudXBfdXNlcm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Vc2VybmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJuYW1lSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfdXNlcm5hbWUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfdXNlcm5hbWV9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX2VtYWlsJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX2VtYWlsICYmIGZvcm0udG91Y2hlZC5zaWdudXBfZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfZW1haWwnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfZW1haWx9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX3Bhc3N3b3JkJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX3Bhc3N3b3JkICYmIGZvcm0udG91Y2hlZC5zaWdudXBfcGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfcGFzc3dvcmQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfcGFzc3dvcmR9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPENsdWJob3VzZUJ0biB0ZXh0PSdTaWduIHVwJyB2YXJpYW50PSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnIGlzTG9hZGluZz17cHJvcHMuaXNTdWJtaXR0aW5nfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ251cEZvcm1cbiIsImltcG9ydCB7XG4gICAgSW5wdXRHcm91cCxcbiAgICBJbnB1dExlZnRFbGVtZW50XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBBdFNpZ25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuaW1wb3J0IENsdWJob3VzZUlucHV0IGZyb20gJy4uL0NsdWJob3VzZUlucHV0L0NsdWJob3VzZUlucHV0J1xuXG5mdW5jdGlvbiBVc2VybmFtZUlucHV0R3JvdXAoeyBmaWVsZCwgaWQgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPSdub25lJ1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXs8QXRTaWduSWNvbiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2x1YmhvdXNlSW5wdXQgey4uLmZpZWxkfSBpZD17aWR9IHBsYWNlaG9sZGVyPSdVc2VybmFtZScgcGw9ezEwfS8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJuYW1lSW5wdXRHcm91cFxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtcbiAgICBDZW50ZXIsXG4gICAgQ29udGFpbmVyLFxuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IExvZ2luQm94IGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Cb3gvTG9naW5Cb3gnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcbmltcG9ydCBGcmllbmRzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0ZyaWVuZHNMaXN0L0ZyaWVuZHNMaXN0J1xuaW1wb3J0IFJvb21MaXN0RmVlZCBmcm9tICcuLi9jb21wb25lbnRzL1Jvb21MaXN0RmVlZC9Sb29tTGlzdEZlZWQnXG5pbXBvcnQgUHJvZmlsZVVwY29taW5nUm9vbXNTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZVVwY29taW5nUm9vbXNTZWN0aW9uL1Byb2ZpbGVVcGNvbWluZ1Jvb21zU2VjdGlvbidcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgbm90IGxvZ2dlZCBpbicpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXPScxMzIwcHgnIHc9JzEwMCUnIG1iPXs2fSBjZW50ZXJDb250ZW50IHA9ezB9PlxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249J3Jvdycgdz0nMTAwJScgc3BhY2luZz0nNjBweCc+XG4gICAgICAgICAgICAgICAgICAgIDxGcmllbmRzTGlzdCAvPlxuICAgICAgICAgICAgICAgICAgICA8Um9vbUxpc3RGZWVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuLy8gTVlQRVRTIFxuXG4vLyBpbXBvcnQge1xuLy8gICAgIHVzZVN0YXRlXG4vLyB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgXG4vLyAgIENvbnRhaW5lciwgXG4vLyAgIEZsZXgsIFxuLy8gICB1c2VUb2FzdCBcbi8vIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuXG4vLyBpbXBvcnQgQW5ub3VuY2VtZW50QmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQW5ub3VuY2VtZW50QmFubmVyL0Fubm91bmNlbWVudEJhbm5lcidcbi8vIGltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJ1xuLy8gaW1wb3J0IFNvcnRNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvU29ydE1lbnUvU29ydE1lbnUnXG4vLyBpbXBvcnQgTWVyY2hhbnRTZWN0aW9uTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01lcmNoYW50U2VjdGlvbkxpc3QvTWVyY2hhbnRTZWN0aW9uTGlzdCdcbi8vIGltcG9ydCBQcm9kdWN0U2VjdGlvbkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0U2VjdGlvbkxpc3QvUHJvZHVjdFNlY3Rpb25MaXN0J1xuLy8gaW1wb3J0IENhdGVnb3J5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NhdGVnb3J5TGlzdC9DYXRlZ29yeUxpc3QnXG4vLyBpbXBvcnQgSG9tZUJhbm5lclN3aXBlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVCYW5uZXJTd2lwZXIvSG9tZUJhbm5lclN3aXBlcidcbi8vIC8vIGltcG9ydCB7IEFQSV9QUk9EVUNUU19VUkwsIEFQSV9NRVJDSEFOVFNfVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXJscydcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuLy8gICAgIGNvbnN0IG1lcmNoYW50cyA9IFtcbi8vICAgICB7XG4vLyAgICAgICAgIG5hbWU6ICdNYWNobyBwYXd6Jyxcbi8vICAgICAgICAgcmF0aW5nOiA0LjgsXG4vLyAgICAgICAgIGRpc3BsYXlfaW1hZ2U6ICdodHRwczovL215cGV0cy1pbWFnZXMuczMuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9tYWNob19wYXd6X2xvZ29fMjgyeDI2NF8yeF9mYzU3MDNlODY1LnBuZycsXG4vLyAgICAgICAgIHNsdWc6ICdtYWNoby1wYXd6J1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgICBuYW1lOiAnTWFjaG8gcGF3eicsXG4vLyAgICAgICAgIHJhdGluZzogNC44LFxuLy8gICAgICAgICBkaXNwbGF5X2ltYWdlOiAnaHR0cHM6Ly9teXBldHMtaW1hZ2VzLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vbWFjaG9fcGF3el9sb2dvXzI4MngyNjRfMnhfZmM1NzAzZTg2NS5wbmcnLFxuLy8gICAgICAgICBzbHVnOiAnbWFjaG8tcGF3eidcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgICAgbmFtZTogJ01hY2hvIHBhd3onLFxuLy8gICAgICAgICByYXRpbmc6IDQuOCxcbi8vICAgICAgICAgZGlzcGxheV9pbWFnZTogJ2h0dHBzOi8vbXlwZXRzLWltYWdlcy5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL21hY2hvX3Bhd3pfbG9nb18yODJ4MjY0XzJ4X2ZjNTcwM2U4NjUucG5nJyxcbi8vICAgICAgICAgc2x1ZzogJ21hY2hvLXBhd3onXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICAgIG5hbWU6ICdNYWNobyBwYXd6Jyxcbi8vICAgICAgICAgcmF0aW5nOiA0LjgsXG4vLyAgICAgICAgIGRpc3BsYXlfaW1hZ2U6ICdodHRwczovL215cGV0cy1pbWFnZXMuczMuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9tYWNob19wYXd6X2xvZ29fMjgyeDI2NF8yeF9mYzU3MDNlODY1LnBuZycsXG4vLyAgICAgICAgIHNsdWc6ICdtYWNoby1wYXd6J1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgICBuYW1lOiAnTWFjaG8gcGF3eicsXG4vLyAgICAgICAgIHJhdGluZzogNC44LFxuLy8gICAgICAgICBkaXNwbGF5X2ltYWdlOiAnaHR0cHM6Ly9teXBldHMtaW1hZ2VzLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vbWFjaG9fcGF3el9sb2dvXzI4MngyNjRfMnhfZmM1NzAzZTg2NS5wbmcnLFxuLy8gICAgICAgICBzbHVnOiAnbWFjaG8tcGF3eidcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgICAgbmFtZTogJ01hY2hvIHBhd3onLFxuLy8gICAgICAgICByYXRpbmc6IDQuOCxcbi8vICAgICAgICAgZGlzcGxheV9pbWFnZTogJ2h0dHBzOi8vbXlwZXRzLWltYWdlcy5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL21hY2hvX3Bhd3pfbG9nb18yODJ4MjY0XzJ4X2ZjNTcwM2U4NjUucG5nJyxcbi8vICAgICAgICAgc2x1ZzogJ21hY2hvLXBhd3onXG4vLyAgICAgfVxuLy8gXVxuXG4vLyAgICAgY29uc3QgcGFnZVByb2R1Y3RzID0gW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiBcIlNlbnNpdGl2ZSBTa2luIEZvcm11bGEgW0RvZ11cIixcbi8vICAgICAgICAgICAgIHJhdGluZzogNSxcbi8vICAgICAgICAgICAgIG1lcmNoYW50OiB7XG4vLyAgICAgICAgICAgICAgICAgbmFtZTogXCJNYWNobyBQYXd6XCJcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICBzbHVnOiAnc2Vuc2l0aXZlLXNraW4tZm9ybXVsYS1kb2cnLFxuLy8gICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL215cGV0cy1pbWFnZXMuczMuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS8xMl9ESUFNT05EX0NBUkVfYWU0ZWRjZGMwNi5qcGcnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6IFwiRnJlc2ggQnJlYXRoIE9yYWwgR2VsIFtEb2dzXVwiLFxuLy8gICAgICAgICAgICAgcmF0aW5nOiA1LFxuLy8gICAgICAgICAgICAgbWVyY2hhbnQ6IHtcbi8vICAgICAgICAgICAgICAgICBuYW1lOiBcIk1hY2hvIFBhd3pcIlxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIHNsdWc6ICdzZW5zaXRpdmUtc2tpbi1mb3JtdWxhLWRvZycsXG4vLyAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vbXlwZXRzLWltYWdlcy5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tLzM0X1RST1BJQ0xFQU5fYzFmYmU3OTFhNi5qcGcnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6IFwiVmVuaXNvbiAmIExlZ3VtZXMgW0RvZ11cIixcbi8vICAgICAgICAgICAgIHJhdGluZzogNSxcbi8vICAgICAgICAgICAgIG1lcmNoYW50OiB7XG4vLyAgICAgICAgICAgICAgICAgbmFtZTogXCJNYWNobyBQYXd6XCJcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICBzbHVnOiAnc2Vuc2l0aXZlLXNraW4tZm9ybXVsYS1kb2cnLFxuLy8gICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL215cGV0cy1pbWFnZXMuczMuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS82X1RBU1RFX09GX1RIRV9XSUxEXzVmZTc1OTNmOGYuanBnJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiBcIlNlbmlvciBQb3VsdHJ5IFtEb2ddXCIsXG4vLyAgICAgICAgICAgICByYXRpbmc6IDUsXG4vLyAgICAgICAgICAgICBtZXJjaGFudDoge1xuLy8gICAgICAgICAgICAgICAgIG5hbWU6IFwiTWFjaG8gUGF3elwiXG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgc2x1ZzogJ3NlbnNpdGl2ZS1za2luLWZvcm11bGEtZG9nJyxcbi8vICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9teXBldHMtaW1hZ2VzLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vMTRfRVVLQU5VQkFfNzQ2MDMxZjEzOS5qcGcnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6IFwiU21hbGwgQnJlZWQgQWR1bHQgTGFtYiAmIFBvdGF0byBbRG9nXVwiLFxuLy8gICAgICAgICAgICAgcmF0aW5nOiA1LFxuLy8gICAgICAgICAgICAgbWVyY2hhbnQ6IHtcbi8vICAgICAgICAgICAgICAgICBuYW1lOiBcIk1hY2hvIFBhd3pcIlxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIHNsdWc6ICdzZW5zaXRpdmUtc2tpbi1mb3JtdWxhLWRvZycsXG4vLyAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vbXlwZXRzLWltYWdlcy5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tLzEzX0JPV19XT1dfWkVOSVRIX2Q5ZjA0ZTYyOWEuanBnJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBuYW1lOiBcIlZlbml6b24gJiBHYXJiYW56byBCZWFucyBbRG9nXVwiLFxuLy8gICAgICAgICAgICAgcmF0aW5nOiA1LFxuLy8gICAgICAgICAgICAgbWVyY2hhbnQ6IHtcbi8vICAgICAgICAgICAgICAgICBuYW1lOiBcIk1hY2hvIFBhd3pcIlxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIHNsdWc6ICdzZW5zaXRpdmUtc2tpbi1mb3JtdWxhLWRvZycsXG4vLyAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vbXlwZXRzLWltYWdlcy5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tLzVfVEFTVEVfT0ZfVEhFX1dJTERfNTlhODlkNTA1NS5qcGcnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIG5hbWU6IFwiVHVya2V5IFRlbmRvbiBTdHJpcHMgW0RvZ3NdXCIsXG4vLyAgICAgICAgICAgICByYXRpbmc6IDUsXG4vLyAgICAgICAgICAgICBtZXJjaGFudDoge1xuLy8gICAgICAgICAgICAgICAgIG5hbWU6IFwiTWFjaG8gUGF3elwiXG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgc2x1ZzogJ3NlbnNpdGl2ZS1za2luLWZvcm11bGEtZG9nJyxcbi8vICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9teXBldHMtaW1hZ2VzLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vMjJfQUZSRVNIQ0lfNjVkZDY0MTRlZi5qcGcnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgXVxuXG4vLyAgICAgY29uc3QgW3NvcnRNZXRob2QsIHNldFNvcnRNZXRob2RdID0gdXNlU3RhdGUoJ3BvcCcpXG4vLyAgICAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldENhdGVnb3J5U2VsZWN0ZWRdID0gdXNlU3RhdGUoJ0FsbCBwcm9kdWN0cycpXG4vLyAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcbi8vICAgICAgICAgJ0FsbCBwcm9kdWN0cycsXG4vLyAgICAgICAgICdUcmVhdHMnLFxuLy8gICAgICAgICAnRHJ5IGZvb2QnLFxuLy8gICAgICAgICAnV2V0IGZvb2QnLFxuLy8gICAgICAgICAnU3VwcGxlbWVudHMnLFxuLy8gICAgICAgICAnVG95cydcbi8vICAgICBdXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgICA8QW5ub3VuY2VtZW50QmFubmVyIC8+XG4vLyAgICAgICAgIDxOYXZiYXIgdXNlcj17dHJ1ZX0vPlxuLy8gICAgICAgICA8Q29udGFpbmVyIFxuLy8gICAgICAgICAgICAgbWF4Vz17eyBsZzogXCIxMjAwcHhcIiB9fSBcbi8vICAgICAgICAgICAgIG1iPXs0fVxuLy8gICAgICAgICAgICAgcD17eyBiYXNlOiA0IH19XG4vLyAgICAgICAgICAgICAvLyBiZz0nYmx1ZS4xMDAnXG4vLyAgICAgICAgID4gICBcbi8vICAgICAgICAgICAgIDxIb21lQmFubmVyU3dpcGVyIG15PXt7IGJhc2U6IDgsIG1kOiAxNiB9fSByb3VuZGVkPXt7IGJhc2U6IDIwLCBtZDogNDAgfX0gYmc9J2dyZWVuLjEwMCcvPlxuLy8gICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nIGRpcmVjdGlvbj1cInJvd1wiIFxuLy8gICAgICAgICAgICAgICAgIC8vIGJnPSdyZWQuMTAwJ1xuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIHc9XCIxMDAlXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxNZXJjaGFudFNlY3Rpb25MaXN0IG1lcmNoYW50cz17bWVyY2hhbnRzfSAvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIGxnOiAncm93J319IHc9JzEwMCUnPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RTZWN0aW9uTGlzdCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cz17cGFnZVByb2R1Y3RzfSBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRNZXRob2Q9e3NvcnRNZXRob2R9IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk9e3NlbGVjdGVkQ2F0ZWdvcnl9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlTZWxlY3RlZD17c2V0Q2F0ZWdvcnlTZWxlY3RlZH0gXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz0nUmVjb21tZW5kZWQgUHJvZHVjdHMnIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj0nY29sdW1uJyB3PScyMTBweCcgbWw9ezEyfSBtdD17MTJ9IGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBsZzogJ2luaGVyaXQnIH19ID5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29ydE1lbnUgc2V0U29ydE1ldGhvZD17c2V0U29ydE1ldGhvZH0gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlMaXN0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHNldFNlbGVjdGVkQ2F0ZWdvcnk9e3NldENhdGVnb3J5U2VsZWN0ZWR9IC8+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbi8vICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4vLyAgICAgICAgICAgICA8L0ZsZXg+XG4vLyAgICAgICAgIDwvQ29udGFpbmVyPlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBob2VuaXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cC1wYXNzd29yZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==