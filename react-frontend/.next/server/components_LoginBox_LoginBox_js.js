exports.id = "components_LoginBox_LoginBox_js";
exports.ids = ["components_LoginBox_LoginBox_js"];
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0NsdWJob3VzZUJ0bi9DbHViaG91c2VCdG4uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9DbHViaG91c2VJbnB1dC9DbHViaG91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0VtYWlsSW5wdXRHcm91cC9FbWFpbElucHV0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Mb2dpbkJveC9Mb2dpbkJveC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0xvZ2luRGlzY29yZEJ0bi9Mb2dpbkRpc2NvcmRCdG4uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Mb2dpbkdpdGh1YkJ0bi9Mb2dpbkdpdGh1YkJ0bi5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0xvZ2luUmVnaXN0ZXJGb3JtL0xvZ2luUmVnaXN0ZXJGb3JtLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvUGFzc3dvcmRJbnB1dEdyb3VwL1Bhc3N3b3JkSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJMb2dpbkZvcm0vVXNlckxvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJTaWdudXBGb3JtL1VzZXJTaWdudXBGb3JtLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlcm5hbWVJbnB1dEdyb3VwL1VzZXJuYW1lSW5wdXRHcm91cC5qcyJdLCJuYW1lcyI6WyJDbHViaG91c2VCdG4iLCJ0ZXh0IiwidmFyaWFudCIsInR5cGUiLCJvbkNsaWNrIiwicHJvcHMiLCJDbHViaG91c2VJbnB1dCIsInRleHRDb2xvciIsIkVtYWlsSW5wdXRHcm91cCIsImZpZWxkIiwiaWQiLCJheGlvcyIsInJlcXVpcmUiLCJMb2dpbkJveCIsImxvZ2luR2l0aHViIiwiZ2V0IiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkdpdGh1YlVybCIsImxvZ2luRGlzY29yZFVybCIsIkxvZ2luRGlzY29yZEJ0biIsImhyZWYiLCJMb2dpbkdpdGh1YkJ0biIsIkxvZ2luUmVnaXN0ZXJGb3JtIiwibG9naW5Vc2VyIiwicmVnaXN0ZXJVc2VyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidG9hc3QiLCJ1c2VUb2FzdCIsInRhYnMiLCJoYW5kbGVVc2VyTG9naW4iLCJ2YWx1ZXMiLCJhY3Rpb25zIiwiZXJyIiwiZXJyb3IiLCJoYW5kbGVVc2VyU2lnbnVwIiwibWFwIiwidGFiSGVhZGVyIiwiaSIsIlBhc3N3b3JkSW5wdXRHcm91cCIsIll1cCIsIlVzZXJMb2dpbkZvcm0iLCJoYW5kbGVTdWJtaXQiLCJ2YWxpZE51c0VtYWlsUmVnZXgiLCJsb2dpblNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwiZW1haWwiLCJzdHJpbmciLCJtYXRjaGVzIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIm1pbk51bWJlcnMiLCJtaW5TeW1ib2xzIiwiZm9ybSIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJVc2VyU2lnbnVwRm9ybSIsInNpZ251cFNjaGVtYSIsInNpZ251cF91c2VybmFtZSIsInNpZ251cF9lbWFpbCIsInNpZ251cF9wYXNzd29yZCIsIlVzZXJuYW1lSW5wdXRHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxTQUFTQSxZQUFULE9BQWtFO0FBQUEsTUFBNUM7QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQyxRQUFqQjtBQUF1QkM7QUFBdkIsR0FBNEM7QUFBQSxNQUFUQyxLQUFTOztBQUU5RCxNQUFJ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QUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLDhEQUFDLG1FQUFELGtDQUFvQkQsS0FBcEI7QUFBMkIsUUFBRSxFQUFFQyxFQUEvQjtBQUFtQyxpQkFBVyxFQUFDLFVBQS9DO0FBQTBELFFBQUUsRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7QUFFRCwrREFBZTBELGtCQUFmLEUiLCJmaWxlIjoiY29tcG9uZW50c19Mb2dpbkJveF9Mb2dpbkJveF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICAgIEJ1dHRvblxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBDbHViaG91c2VCdG4oeyB0ZXh0LCB2YXJpYW50LCB0eXBlLCBvbkNsaWNrLCAuLi5wcm9wcyB9KSB7XG5cbiAgICBpZiAodmFyaWFudCA9PSAncHJpbWFyeScpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nc29saWQnXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2NsdWJob3VzZW9yYW5nZSdcbiAgICAgICAgICAgICAgICBzaXplPSdtZCdcbiAgICAgICAgICAgICAgICBmb250U2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgcHg9JzQwcHgnXG4gICAgICAgICAgICAgICAgcHk9JzE2cHgnXG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmICh2YXJpYW50ID09ICdzZWNvbmRhcnknKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3NvbGlkJ1xuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdjbHViaG91c2VvcmFuZ2UnXG4gICAgICAgICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgZm9udFNpemU9J3NtJ1xuICAgICAgICAgICAgICAgIHB4PSc0MHB4J1xuICAgICAgICAgICAgICAgIHB5PScxNnB4J1xuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2xpbmsnXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2NsdWJob3VzZWdyZXknXG4gICAgICAgICAgICAgICAgY29sb3I9J2NsdWJob3VzZWdyZXkuODAwJ1xuICAgICAgICAgICAgICAgIHNpemU9J21kJ1xuICAgICAgICAgICAgICAgIGZvbnRTaXplPSdzbSdcbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJob3VzZUJ0blxuIiwiaW1wb3J0IHsgICBcbiAgICBJbnB1dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBDbHViaG91c2VJbnB1dCh7IC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICB7Li4ucHJvcHN9IFxuICAgICAgICAgICAgZm9jdXNCb3JkZXJDb2xvcj0nY2x1YmhvdXNlb3JhbmdlLjUwMCcgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgICAgIF9wbGFjZWhvbGRlcj17eyBcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICdjbHViaG91c2VncmV5LjYwMCcgXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2x1YmhvdXNlSW5wdXRcbiIsImltcG9ydCB7XG4gICAgSW5wdXRHcm91cCxcbiAgICBJbnB1dExlZnRFbGVtZW50XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBFbWFpbEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5pbXBvcnQgQ2x1YmhvdXNlSW5wdXQgZnJvbSAnLi4vQ2x1YmhvdXNlSW5wdXQvQ2x1YmhvdXNlSW5wdXQnXG5cbmZ1bmN0aW9uIEVtYWlsSW5wdXRHcm91cCh7IGZpZWxkLCBpZCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9J25vbmUnXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49ezxFbWFpbEljb24gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENsdWJob3VzZUlucHV0IHsuLi5maWVsZH0gaWQ9e2lkfSBwbGFjZWhvbGRlcj0nTlVTIEVtYWlsJyBwbD17MTB9Lz5cbiAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1haWxJbnB1dEdyb3VwXG4iLCJpbXBvcnQgeyBcbiAgICBCb3gsXG4gICAgTGluayxcbiAgICBUZXh0LFxuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdFxuXG5pbXBvcnQgTG9naW5SZWdpc3RlckZvcm0gZnJvbSAnLi4vTG9naW5SZWdpc3RlckZvcm0vTG9naW5SZWdpc3RlckZvcm0nXG5pbXBvcnQgQm9sZFRleHQgZnJvbSAnLi4vQm9sZFRleHQvQm9sZFRleHQnXG5pbXBvcnQgTG9naW5HaXRodWJCdG4gZnJvbSAnLi4vTG9naW5HaXRodWJCdG4vTG9naW5HaXRodWJCdG4nXG5pbXBvcnQgTG9naW5EaXNjb3JkQnRuIGZyb20gJy4uL0xvZ2luRGlzY29yZEJ0bi9Mb2dpbkRpc2NvcmRCdG4nXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXG5cbmZ1bmN0aW9uIExvZ2luQm94KCkge1xuXG4gICAgY29uc3QgbG9naW5HaXRodWIgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNhbGwgQVBJIHRvIGxvZyBpbnRvIGdpdGh1YlxuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke0FQSV9VUkx9L2F1dGgvZ2l0aHViYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgZnJvbSBhcGkgYXV0aDogJywgcmVzcG9uc2UpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbG9naW5HaXRodWJVcmwgPSBgJHtBUElfVVJMfS9hdXRoL2dpdGh1YmBcbiAgICBjb25zdCBsb2dpbkRpc2NvcmRVcmwgPSBgJHtBUElfVVJMfS9hdXRoL2Rpc2NvcmRgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdjb2x1bW4nIHB4PSc0MHB4JyBweT0nMzZweCcgYmdDb2xvcj0nY2x1YmhvdXNlZ3JleS4yMDAnIHc9JzQwMHB4JyByb3VuZGVkPSdsZycgc3BhY2luZz17Nn0+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxCb2xkVGV4dCB0ZXh0PSdXZWxjb21lJyAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IG10PXsyfT5cbiAgICAgICAgICAgICAgICAgICAgQnkgbG9nZ2luZyBpbiB5b3UgYWNjZXB0IG91ciA8TGluaz5Qcml2YWN5IFBvbGljeTwvTGluaz4gYW5kIDxMaW5rPlRlcm1zIG9mIFNlcnZpY2U8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8TG9naW5SZWdpc3RlckZvcm0gLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQm94XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRmFEaXNjb3JkIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5mdW5jdGlvbiBMb2dpbkRpc2NvcmRCdG4oeyBocmVmLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgIDxCdXR0b24gbGVmdEljb249ezxGYURpc2NvcmQgLz59IHNpemU9J21kJyB7Li4ucHJvcHN9IGljb25TcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAgICBMb2dpbiB3aXRoIERpc2NvcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5EaXNjb3JkQnRuXG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIExvZ2luR2l0aHViQnRuKHsgaHJlZiwgb25DbGljaywgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxCdXR0b24gbGVmdEljb249ezxGYUdpdGh1YiAvPn0gc2l6ZT0nbWQnIHsuLi5wcm9wc30gaWNvblNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIExvZ2luIHdpdGggR2l0aHViXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luR2l0aHViQnRuXG4iLCJpbXBvcnQge1xuICAgIHVzZUNvbnRleHQgXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgXG4gICAgQm94LFxuICAgIFRhYnMsIFxuICAgIFRhYkxpc3QsIFxuICAgIFRhYlBhbmVscywgXG4gICAgVGFiLCBcbiAgICBUYWJQYW5lbCxcbiAgICB1c2VUb2FzdCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCBVc2VyTG9naW5Gb3JtIGZyb20gJy4uL1VzZXJMb2dpbkZvcm0vVXNlckxvZ2luRm9ybSdcbmltcG9ydCBVc2VyU2lnbnVwRm9ybSBmcm9tICcuLi9Vc2VyU2lnbnVwRm9ybS9Vc2VyU2lnbnVwRm9ybSdcblxuZnVuY3Rpb24gTG9naW5SZWdpc3RlckZvcm0oKSB7XG4gICAgY29uc3QgeyBsb2dpblVzZXIsIHJlZ2lzdGVyVXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KClcbiAgICBjb25zdCB0YWJzID0gW1xuICAgICAgICBcIkxvZyBpblwiLFxuICAgICAgICBcIkNyZWF0ZSBhY2NvdW50XCJcbiAgICBdXG5cbiAgICBjb25zdCBoYW5kbGVVc2VyTG9naW4gPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2dpblVzZXIodmFsdWVzLCB0b2FzdCwgYWN0aW9ucylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVVzZXJTaWdudXAgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZWdpc3RlclVzZXIodmFsdWVzLCB0b2FzdCwgYWN0aW9ucylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGFicyBpc0ZpdHRlZCBjb2xvclNjaGVtZT0nY2x1YmhvdXNlb3JhbmdlJz5cbiAgICAgICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKCh0YWJIZWFkZXIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIga2V5PXtpfT57dGFiSGVhZGVyfTwvVGFiPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVscz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsICBweD17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlckxvZ2luRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlVXNlckxvZ2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsICBweD17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlclNpZ251cEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVVzZXJTaWdudXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWxzPlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUmVnaXN0ZXJGb3JtXG4iLCJpbXBvcnQge1xuICAgIElucHV0R3JvdXAsXG4gICAgSW5wdXRMZWZ0RWxlbWVudFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgTG9ja0ljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5pbXBvcnQgQ2x1YmhvdXNlSW5wdXQgZnJvbSAnLi4vQ2x1YmhvdXNlSW5wdXQvQ2x1YmhvdXNlSW5wdXQnXG5cbmZ1bmN0aW9uIFBhc3N3b3JkSW5wdXRHcm91cCh7IGZpZWxkLCBpZCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9J25vbmUnXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49ezxMb2NrSWNvbiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2x1YmhvdXNlSW5wdXQgey4uLmZpZWxkfSBpZD17aWR9IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHBsPXsxMH0vPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZElucHV0R3JvdXBcbiIsImltcG9ydCB7XG4gICAgQm94LFxuICAgIEZvcm1Db250cm9sLFxuICAgIEZvcm1MYWJlbCxcbiAgICBGb3JtRXJyb3JNZXNzYWdlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuY29uc3QgWXVwID0gcmVxdWlyZSgneXVwJylcbnJlcXVpcmUoJ3l1cC1wYXNzd29yZCcpKFl1cClcblxuaW1wb3J0IENsdWJob3VzZUJ0biBmcm9tICcuLi9DbHViaG91c2VCdG4vQ2x1YmhvdXNlQnRuJ1xuaW1wb3J0IEVtYWlsSW5wdXRHcm91cCBmcm9tICcuLi9FbWFpbElucHV0R3JvdXAvRW1haWxJbnB1dEdyb3VwJ1xuaW1wb3J0IFBhc3N3b3JkSW5wdXRHcm91cCBmcm9tICcuLi9QYXNzd29yZElucHV0R3JvdXAvUGFzc3dvcmRJbnB1dEdyb3VwJ1xuXG5mdW5jdGlvbiBVc2VyTG9naW5Gb3JtKHsgaGFuZGxlU3VibWl0IH0pIHtcbiAgICBjb25zdCB2YWxpZE51c0VtYWlsUmVnZXggPSAvKEB8dS4pbnVzLmVkdS9cbiAgICBjb25zdCBsb2dpblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLmVtYWlsKCdJbnZhbGlkIGVtYWlsJylcbiAgICAgICAgICAgICAgICAgICAgLm1hdGNoZXModmFsaWROdXNFbWFpbFJlZ2V4LCAnWW91ciBOVVMgZW1haWwgaXMgcmVxdWlyZWQgdG8gam9pbiBOVVMgQ2x1YmhvdXNlJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIE5VUyBlbWFpbCBpcyByZXF1aXJlZCcpLFxuICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5wYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCcpXG4gICAgICAgICAgICAgICAgICAgIC5taW4oOCwgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMnKVxuICAgICAgICAgICAgICAgICAgICAubWluTnVtYmVycygxLCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgZGlnaXQnKVxuICAgICAgICAgICAgICAgICAgICAubWluU3ltYm9scygxLCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgc3ltYm9sJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9fVxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2xvZ2luU2NoZW1hfVxuICAgICAgICA+XG4gICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2VtYWlsJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuZW1haWwgJiYgZm9ybS50b3VjaGVkLmVtYWlsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbElucHV0R3JvdXAgZmllbGQ9e2ZpZWxkfSBpZD0nZW1haWwnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5lbWFpbH08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1iPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdwYXNzd29yZCcgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzLnBhc3N3b3JkICYmIGZvcm0udG91Y2hlZC5wYXNzd29yZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFzc3dvcmRJbnB1dEdyb3VwIGZpZWxkPXtmaWVsZH0gaWQ9J3Bhc3N3b3JkJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMucGFzc3dvcmR9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPENsdWJob3VzZUJ0biB0ZXh0PSdMb2cgaW4nIHZhcmlhbnQ9J3ByaW1hcnknIHR5cGU9J3N1Ym1pdCcgaXNMb2FkaW5nPXtwcm9wcy5pc1N1Ym1pdHRpbmd9IC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW5Gb3JtXG4iLCJpbXBvcnQge1xuICAgIEJveCxcbiAgICBGb3JtQ29udHJvbCxcbiAgICBGb3JtTGFiZWwsXG4gICAgRm9ybUVycm9yTWVzc2FnZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcbmNvbnN0IFl1cCA9IHJlcXVpcmUoJ3l1cCcpXG5yZXF1aXJlKCd5dXAtcGFzc3dvcmQnKShZdXApXG5cbmltcG9ydCBDbHViaG91c2VCdG4gZnJvbSAnLi4vQ2x1YmhvdXNlQnRuL0NsdWJob3VzZUJ0bidcbmltcG9ydCBFbWFpbElucHV0R3JvdXAgZnJvbSAnLi4vRW1haWxJbnB1dEdyb3VwL0VtYWlsSW5wdXRHcm91cCdcbmltcG9ydCBQYXNzd29yZElucHV0R3JvdXAgZnJvbSAnLi4vUGFzc3dvcmRJbnB1dEdyb3VwL1Bhc3N3b3JkSW5wdXRHcm91cCdcbmltcG9ydCBVc2VybmFtZUlucHV0R3JvdXAgZnJvbSAnLi4vVXNlcm5hbWVJbnB1dEdyb3VwL1VzZXJuYW1lSW5wdXRHcm91cCdcblxuZnVuY3Rpb24gVXNlclNpZ251cEZvcm0oeyBoYW5kbGVTdWJtaXQgfSkge1xuICAgIGNvbnN0IHZhbGlkTnVzRW1haWxSZWdleCA9IC8oQHx1LiludXMuZWR1L1xuICAgIGNvbnN0IHNpZ251cFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICAgIHNpZ251cF91c2VybmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnWW91ciB1c2VybmFtZSBpcyByZXF1aXJlZCcpLFxuICAgICAgICBzaWdudXBfZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAuZW1haWwoJ0ludmFsaWQgZW1haWwnKVxuICAgICAgICAgICAgICAgICAgICAubWF0Y2hlcyh2YWxpZE51c0VtYWlsUmVnZXgsICdZb3VyIE5VUyBlbWFpbCBpcyByZXF1aXJlZCB0byBqb2luIE5VUyBDbHViaG91c2UnKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1lvdXIgTlVTIGVtYWlsIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHNpZ251cF9wYXNzd29yZDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5wYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCcpXG4gICAgICAgICAgICAgICAgICAgIC5taW4oOCwgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMnKVxuICAgICAgICAgICAgICAgICAgICAubWluTnVtYmVycygxLCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgZGlnaXQnKVxuICAgICAgICAgICAgICAgICAgICAubWluU3ltYm9scygxLCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgc3ltYm9sJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBzaWdudXBfdXNlcm5hbWU6ICcnLCBzaWdudXBfZW1haWw6ICcnLCBzaWdudXBfcGFzc3dvcmQ6ICcnIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2lnbnVwU2NoZW1hfVxuICAgICAgICA+XG4gICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3NpZ251cF91c2VybmFtZScgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzLnNpZ251cF91c2VybmFtZSAmJiBmb3JtLnRvdWNoZWQuc2lnbnVwX3VzZXJuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VybmFtZUlucHV0R3JvdXAgZmllbGQ9e2ZpZWxkfSBpZD0nc2lnbnVwX3VzZXJuYW1lJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMuc2lnbnVwX3VzZXJuYW1lfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3NpZ251cF9lbWFpbCcgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzLnNpZ251cF9lbWFpbCAmJiBmb3JtLnRvdWNoZWQuc2lnbnVwX2VtYWlsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbElucHV0R3JvdXAgZmllbGQ9e2ZpZWxkfSBpZD0nc2lnbnVwX2VtYWlsJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMuc2lnbnVwX2VtYWlsfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3NpZ251cF9wYXNzd29yZCcgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzLnNpZ251cF9wYXNzd29yZCAmJiBmb3JtLnRvdWNoZWQuc2lnbnVwX3Bhc3N3b3JkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0R3JvdXAgZmllbGQ9e2ZpZWxkfSBpZD0nc2lnbnVwX3Bhc3N3b3JkJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMuc2lnbnVwX3Bhc3N3b3JkfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxDbHViaG91c2VCdG4gdGV4dD0nU2lnbiB1cCcgdmFyaWFudD0ncHJpbWFyeScgdHlwZT0nc3VibWl0JyBpc0xvYWRpbmc9e3Byb3BzLmlzU3VibWl0dGluZ30gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTaWdudXBGb3JtXG4iLCJpbXBvcnQge1xuICAgIElucHV0R3JvdXAsXG4gICAgSW5wdXRMZWZ0RWxlbWVudFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQXRTaWduSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmltcG9ydCBDbHViaG91c2VJbnB1dCBmcm9tICcuLi9DbHViaG91c2VJbnB1dC9DbHViaG91c2VJbnB1dCdcblxuZnVuY3Rpb24gVXNlcm5hbWVJbnB1dEdyb3VwKHsgZmllbGQsIGlkIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz0nbm9uZSdcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17PEF0U2lnbkljb24gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENsdWJob3VzZUlucHV0IHsuLi5maWVsZH0gaWQ9e2lkfSBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnIHBsPXsxMH0vPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VybmFtZUlucHV0R3JvdXBcbiJdLCJzb3VyY2VSb290IjoiIn0=