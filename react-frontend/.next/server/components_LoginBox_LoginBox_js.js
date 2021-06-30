exports.id = "components_LoginBox_LoginBox_js";
exports.ids = ["components_LoginBox_LoginBox_js"];
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function BoldText(_ref) {
  let {
    text,
    fontSize = 'xl'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text", "fontSize"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread(_objectSpread({
    fontWeight: "extrabold",
    fontSize: fontSize,
    textColor: "clubhousegrey.900"
  }, props), {}, {
    children: text
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (BoldText);

/***/ }),

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
    signup_email: Yup.string().email('Invalid email') // .matches(validNusEmailRegex, 'Your NUS email is required to join NUS Clubhouse')
    .required('Your NUS email is required'),
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0JvbGRUZXh0L0JvbGRUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvQ2x1YmhvdXNlQnRuL0NsdWJob3VzZUJ0bi5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0NsdWJob3VzZUlucHV0L0NsdWJob3VzZUlucHV0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvRW1haWxJbnB1dEdyb3VwL0VtYWlsSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0xvZ2luQm94L0xvZ2luQm94LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvTG9naW5EaXNjb3JkQnRuL0xvZ2luRGlzY29yZEJ0bi5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0xvZ2luR2l0aHViQnRuL0xvZ2luR2l0aHViQnRuLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvTG9naW5SZWdpc3RlckZvcm0vTG9naW5SZWdpc3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9QYXNzd29yZElucHV0R3JvdXAvUGFzc3dvcmRJbnB1dEdyb3VwLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlckxvZ2luRm9ybS9Vc2VyTG9naW5Gb3JtLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlclNpZ251cEZvcm0vVXNlclNpZ251cEZvcm0uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Vc2VybmFtZUlucHV0R3JvdXAvVXNlcm5hbWVJbnB1dEdyb3VwLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS9pZ25vcmVkfC9ob21lL2FpZGFuL251c2NsdWJob3VzZS9yZWFjdC1mcm9udGVuZC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJvbGRUZXh0IiwidGV4dCIsImZvbnRTaXplIiwicHJvcHMiLCJDbHViaG91c2VCdG4iLCJ2YXJpYW50IiwidHlwZSIsIm9uQ2xpY2siLCJDbHViaG91c2VJbnB1dCIsInRleHRDb2xvciIsIkVtYWlsSW5wdXRHcm91cCIsImZpZWxkIiwiaWQiLCJheGlvcyIsInJlcXVpcmUiLCJMb2dpbkJveCIsImxvZ2luR2l0aHViIiwiZ2V0IiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkdpdGh1YlVybCIsImxvZ2luRGlzY29yZFVybCIsIkxvZ2luRGlzY29yZEJ0biIsImhyZWYiLCJMb2dpbkdpdGh1YkJ0biIsIkxvZ2luUmVnaXN0ZXJGb3JtIiwibG9naW5Vc2VyIiwicmVnaXN0ZXJVc2VyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidG9hc3QiLCJ1c2VUb2FzdCIsInRhYnMiLCJoYW5kbGVVc2VyTG9naW4iLCJ2YWx1ZXMiLCJhY3Rpb25zIiwiZXJyIiwiZXJyb3IiLCJoYW5kbGVVc2VyU2lnbnVwIiwibWFwIiwidGFiSGVhZGVyIiwiaSIsIlBhc3N3b3JkSW5wdXRHcm91cCIsIll1cCIsIlVzZXJMb2dpbkZvcm0iLCJoYW5kbGVTdWJtaXQiLCJ2YWxpZE51c0VtYWlsUmVnZXgiLCJsb2dpblNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwiZW1haWwiLCJzdHJpbmciLCJtYXRjaGVzIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIm1pbk51bWJlcnMiLCJtaW5TeW1ib2xzIiwiZm9ybSIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJVc2VyU2lnbnVwRm9ybSIsInNpZ251cFNjaGVtYSIsInNpZ251cF91c2VybmFtZSIsInNpZ251cF9lbWFpbCIsInNpZ251cF9wYXNzd29yZCIsIlVzZXJuYW1lSW5wdXRHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxTQUFTQSxRQUFULE9BQXFEO0FBQUEsTUFBbkM7QUFBRUMsUUFBRjtBQUFRQyxZQUFRLEdBQUM7QUFBakIsR0FBbUM7QUFBQSxNQUFUQyxLQUFTOztBQUNqRCxzQkFDSSw4REFBQyxrREFBRDtBQUFNLGNBQVUsRUFBQyxXQUFqQjtBQUE2QixZQUFRLEVBQUVELFFBQXZDO0FBQWlELGFBQVMsRUFBQztBQUEzRCxLQUFtRkMsS0FBbkY7QUFBQSxjQUNLRjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztBQUVELCtEQUFlRCxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7O0FBSUEsU0FBU0ksWUFBVCxPQUFrRTtBQUFBLE1BQTVDO0FBQUVILFFBQUY7QUFBUUksV0FBUjtBQUFpQkMsUUFBakI7QUFBdUJDO0FBQXZCLEdBQTRDO0FBQUEsTUFBVEosS0FBUzs7QUFFOUQsTUFBSUUsT0FBTyxJQUFJLFNBQWYsRUFBMEI7QUFDdEIsd0JBQ0ksOERBQUMsb0RBQUQ7QUFDSSxhQUFPLEVBQUMsT0FEWjtBQUVJLGlCQUFXLEVBQUMsaUJBRmhCO0FBR0ksVUFBSSxFQUFDLElBSFQ7QUFJSSxjQUFRLEVBQUMsSUFKYjtBQUtJLFFBQUUsRUFBQyxNQUxQO0FBTUksUUFBRSxFQUFDLE1BTlA7QUFPSSxVQUFJLEVBQUVDLElBUFY7QUFRSSxhQUFPLEVBQUVDO0FBUmIsT0FTUUosS0FUUjtBQUFBLGdCQVdLRjtBQVhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQWVILEdBaEJELE1BZ0JPLElBQUlJLE9BQU8sSUFBSSxXQUFmLEVBQTRCO0FBQy9CLHdCQUNJLDhEQUFDLG9EQUFEO0FBQ0ksYUFBTyxFQUFDLE9BRFo7QUFFSSxpQkFBVyxFQUFDLGlCQUZoQjtBQUdJLFVB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QUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkosZUFrQ0ksOERBQUMsK0RBQUQ7QUFBYyxZQUFJLEVBQUMsU0FBbkI7QUFBNkIsZUFBTyxFQUFDLFNBQXJDO0FBQStDLFlBQUksRUFBQyxRQUFwRDtBQUE2RCxpQkFBUyxFQUFFbEUsS0FBSyxDQUFDNkQ7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Q0g7O0FBRUQsK0RBQWVDLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUlBO0FBRUE7O0FBRUEsU0FBU0ssa0JBQVQsQ0FBNEI7QUFBRTNELE9BQUY7QUFBU0M7QUFBVCxDQUE1QixFQUEyQztBQUN2QyxzQkFDSSw4REFBQyx3REFBRDtBQUFBLDRCQUNJLDhEQUFDLDhEQUFEO0FBQ0ksbUJBQWEsRUFBQyxNQURsQjtBQUVJLGNBQVEsZUFBRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0ksOERBQUMsbUVBQUQsa0NBQW9CRCxLQUFwQjtBQUEyQixRQUFFLEVBQUVDLEVBQS9CO0FBQW1DLGlCQUFXLEVBQUMsVUFBL0M7QUFBMEQsUUFBRSxFQUFFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztBQUVELCtEQUFlMEQsa0JBQWYsRTs7Ozs7Ozs7OztBQ3BCQSxlIiwiZmlsZSI6ImNvbXBvbmVudHNfTG9naW5Cb3hfTG9naW5Cb3hfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBUZXh0IFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBCb2xkVGV4dCh7IHRleHQsIGZvbnRTaXplPSd4bCcsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdleHRyYWJvbGQnIGZvbnRTaXplPXtmb250U2l6ZX0gdGV4dENvbG9yPSdjbHViaG91c2VncmV5LjkwMCcgey4uLnByb3BzfT5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L1RleHQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2xkVGV4dFxuIiwiaW1wb3J0IHsgXG4gICAgQnV0dG9uXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIENsdWJob3VzZUJ0bih7IHRleHQsIHZhcmlhbnQsIHR5cGUsIG9uQ2xpY2ssIC4uLnByb3BzIH0pIHtcblxuICAgIGlmICh2YXJpYW50ID09ICdwcmltYXJ5Jykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdzb2xpZCdcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT0nY2x1YmhvdXNlb3JhbmdlJ1xuICAgICAgICAgICAgICAgIHNpemU9J21kJ1xuICAgICAgICAgICAgICAgIGZvbnRTaXplPSdzbSdcbiAgICAgICAgICAgICAgICBweD0nNDBweCdcbiAgICAgICAgICAgICAgICBweT0nMTZweCdcbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIClcbiAgICB9IGVsc2UgaWYgKHZhcmlhbnQgPT0gJ3NlY29uZGFyeScpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nc29saWQnXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2NsdWJob3VzZW9yYW5nZSdcbiAgICAgICAgICAgICAgICBzaXplPSdtZCdcbiAgICAgICAgICAgICAgICBmb250U2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgcHg9JzQwcHgnXG4gICAgICAgICAgICAgICAgcHk9JzE2cHgnXG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nbGluaydcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT0nY2x1YmhvdXNlZ3JleSdcbiAgICAgICAgICAgICAgICBjb2xvcj0nY2x1YmhvdXNlZ3JleS44MDAnXG4gICAgICAgICAgICAgICAgc2l6ZT0nbWQnXG4gICAgICAgICAgICAgICAgZm9udFNpemU9J3NtJ1xuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2x1YmhvdXNlQnRuXG4iLCJpbXBvcnQgeyAgIFxuICAgIElucHV0XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIENsdWJob3VzZUlucHV0KHsgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgIHsuLi5wcm9wc30gXG4gICAgICAgICAgICBmb2N1c0JvcmRlckNvbG9yPSdjbHViaG91c2VvcmFuZ2UuNTAwJyBcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj0nY2x1YmhvdXNlZ3JleS40MDAnIFxuICAgICAgICAgICAgX3BsYWNlaG9sZGVyPXt7IFxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJ2NsdWJob3VzZWdyZXkuNjAwJyBcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbHViaG91c2VJbnB1dFxuIiwiaW1wb3J0IHtcbiAgICBJbnB1dEdyb3VwLFxuICAgIElucHV0TGVmdEVsZW1lbnRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEVtYWlsSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmltcG9ydCBDbHViaG91c2VJbnB1dCBmcm9tICcuLi9DbHViaG91c2VJbnB1dC9DbHViaG91c2VJbnB1dCdcblxuZnVuY3Rpb24gRW1haWxJbnB1dEdyb3VwKHsgZmllbGQsIGlkIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz0nbm9uZSdcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17PEVtYWlsSWNvbiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2x1YmhvdXNlSW5wdXQgey4uLmZpZWxkfSBpZD17aWR9IHBsYWNlaG9sZGVyPSdOVVMgRW1haWwnIHBsPXsxMH0vPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWFpbElucHV0R3JvdXBcbiIsImltcG9ydCB7IFxuICAgIEJveCxcbiAgICBMaW5rLFxuICAgIFRleHQsXG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0XG5cbmltcG9ydCBMb2dpblJlZ2lzdGVyRm9ybSBmcm9tICcuLi9Mb2dpblJlZ2lzdGVyRm9ybS9Mb2dpblJlZ2lzdGVyRm9ybSdcbmltcG9ydCBCb2xkVGV4dCBmcm9tICcuLi9Cb2xkVGV4dC9Cb2xkVGV4dCdcbmltcG9ydCBMb2dpbkdpdGh1YkJ0biBmcm9tICcuLi9Mb2dpbkdpdGh1YkJ0bi9Mb2dpbkdpdGh1YkJ0bidcbmltcG9ydCBMb2dpbkRpc2NvcmRCdG4gZnJvbSAnLi4vTG9naW5EaXNjb3JkQnRuL0xvZ2luRGlzY29yZEJ0bidcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscydcblxuZnVuY3Rpb24gTG9naW5Cb3goKSB7XG5cbiAgICBjb25zdCBsb2dpbkdpdGh1YiA9ICgpID0+IHtcbiAgICAgICAgLy8gY2FsbCBBUEkgdG8gbG9nIGludG8gZ2l0aHViXG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYCR7QVBJX1VSTH0vYXV0aC9naXRodWJgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSBmcm9tIGFwaSBhdXRoOiAnLCByZXNwb25zZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2dpbkdpdGh1YlVybCA9IGAke0FQSV9VUkx9L2F1dGgvZ2l0aHViYFxuICAgIGNvbnN0IGxvZ2luRGlzY29yZFVybCA9IGAke0FQSV9VUkx9L2F1dGgvZGlzY29yZGBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249J2NvbHVtbicgcHg9JzQwcHgnIHB5PSczNnB4JyBiZ0NvbG9yPSdjbHViaG91c2VncmV5LjIwMCcgdz0nNDAwcHgnIHJvdW5kZWQ9J2xnJyBzcGFjaW5nPXs2fT5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9J1dlbGNvbWUnIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgbXQ9ezJ9PlxuICAgICAgICAgICAgICAgICAgICBCeSBsb2dnaW5nIGluIHlvdSBhY2NlcHQgb3VyIDxMaW5rPlByaXZhY3kgUG9saWN5PC9MaW5rPiBhbmQgPExpbms+VGVybXMgb2YgU2VydmljZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxMb2dpblJlZ2lzdGVyRm9ybSAvPlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Cb3hcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGYURpc2NvcmQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIExvZ2luRGlzY29yZEJ0bih7IGhyZWYsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgPEJ1dHRvbiBsZWZ0SWNvbj17PEZhRGlzY29yZCAvPn0gc2l6ZT0nbWQnIHsuLi5wcm9wc30gaWNvblNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIExvZ2luIHdpdGggRGlzY29yZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkRpc2NvcmRCdG5cbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gTG9naW5HaXRodWJCdG4oeyBocmVmLCBvbkNsaWNrLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBsZWZ0SWNvbj17PEZhR2l0aHViIC8+fSBzaXplPSdtZCcgey4uLnByb3BzfSBpY29uU3BhY2luZz17NH0+XG4gICAgICAgICAgICAgICAgTG9naW4gd2l0aCBHaXRodWJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5HaXRodWJCdG5cbiIsImltcG9ydCB7XG4gICAgdXNlQ29udGV4dCBcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBcbiAgICBCb3gsXG4gICAgVGFicywgXG4gICAgVGFiTGlzdCwgXG4gICAgVGFiUGFuZWxzLCBcbiAgICBUYWIsIFxuICAgIFRhYlBhbmVsLFxuICAgIHVzZVRvYXN0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5cbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IFVzZXJMb2dpbkZvcm0gZnJvbSAnLi4vVXNlckxvZ2luRm9ybS9Vc2VyTG9naW5Gb3JtJ1xuaW1wb3J0IFVzZXJTaWdudXBGb3JtIGZyb20gJy4uL1VzZXJTaWdudXBGb3JtL1VzZXJTaWdudXBGb3JtJ1xuXG5mdW5jdGlvbiBMb2dpblJlZ2lzdGVyRm9ybSgpIHtcbiAgICBjb25zdCB7IGxvZ2luVXNlciwgcmVnaXN0ZXJVc2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICAgIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKVxuICAgIGNvbnN0IHRhYnMgPSBbXG4gICAgICAgIFwiTG9nIGluXCIsXG4gICAgICAgIFwiQ3JlYXRlIGFjY291bnRcIlxuICAgIF1cblxuICAgIGNvbnN0IGhhbmRsZVVzZXJMb2dpbiA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvZ2luVXNlcih2YWx1ZXMsIHRvYXN0LCBhY3Rpb25zKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVXNlclNpZ251cCA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlZ2lzdGVyVXNlcih2YWx1ZXMsIHRvYXN0LCBhY3Rpb25zKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUYWJzIGlzRml0dGVkIGNvbG9yU2NoZW1lPSdjbHViaG91c2VvcmFuZ2UnPlxuICAgICAgICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgICAgICAgICB7dGFicy5tYXAoKHRhYkhlYWRlciwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBrZXk9e2l9Pnt0YWJIZWFkZXJ9PC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWxzPlxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgIHB4PXswfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyTG9naW5Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVVc2VyTG9naW59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgIHB4PXswfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyU2lnbnVwRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlVXNlclNpZ251cH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbHM+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5SZWdpc3RlckZvcm1cbiIsImltcG9ydCB7XG4gICAgSW5wdXRHcm91cCxcbiAgICBJbnB1dExlZnRFbGVtZW50XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBMb2NrSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmltcG9ydCBDbHViaG91c2VJbnB1dCBmcm9tICcuLi9DbHViaG91c2VJbnB1dC9DbHViaG91c2VJbnB1dCdcblxuZnVuY3Rpb24gUGFzc3dvcmRJbnB1dEdyb3VwKHsgZmllbGQsIGlkIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz0nbm9uZSdcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17PExvY2tJY29uIC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDbHViaG91c2VJbnB1dCB7Li4uZmllbGR9IGlkPXtpZH0gdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgcGw9ezEwfS8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkSW5wdXRHcm91cFxuIiwiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgRm9ybUxhYmVsLFxuICAgIEZvcm1FcnJvck1lc3NhZ2Vcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5jb25zdCBZdXAgPSByZXF1aXJlKCd5dXAnKVxucmVxdWlyZSgneXVwLXBhc3N3b3JkJykoWXVwKVxuXG5pbXBvcnQgQ2x1YmhvdXNlQnRuIGZyb20gJy4uL0NsdWJob3VzZUJ0bi9DbHViaG91c2VCdG4nXG5pbXBvcnQgRW1haWxJbnB1dEdyb3VwIGZyb20gJy4uL0VtYWlsSW5wdXRHcm91cC9FbWFpbElucHV0R3JvdXAnXG5pbXBvcnQgUGFzc3dvcmRJbnB1dEdyb3VwIGZyb20gJy4uL1Bhc3N3b3JkSW5wdXRHcm91cC9QYXNzd29yZElucHV0R3JvdXAnXG5cbmZ1bmN0aW9uIFVzZXJMb2dpbkZvcm0oeyBoYW5kbGVTdWJtaXQgfSkge1xuICAgIGNvbnN0IHZhbGlkTnVzRW1haWxSZWdleCA9IC8oQHx1LiludXMuZWR1L1xuICAgIGNvbnN0IGxvZ2luU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAuZW1haWwoJ0ludmFsaWQgZW1haWwnKVxuICAgICAgICAgICAgICAgICAgICAubWF0Y2hlcyh2YWxpZE51c0VtYWlsUmVnZXgsICdZb3VyIE5VUyBlbWFpbCBpcyByZXF1aXJlZCB0byBqb2luIE5VUyBDbHViaG91c2UnKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1lvdXIgTlVTIGVtYWlsIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDggY2hhcmFjdGVycycpXG4gICAgICAgICAgICAgICAgICAgIC5taW5OdW1iZXJzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBkaWdpdCcpXG4gICAgICAgICAgICAgICAgICAgIC5taW5TeW1ib2xzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBzeW1ib2wnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17bG9naW5TY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nZW1haWwnID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5lbWFpbCAmJiBmb3JtLnRvdWNoZWQuZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdlbWFpbCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLmVtYWlsfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMucGFzc3dvcmQgJiYgZm9ybS50b3VjaGVkLnBhc3N3b3JkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0R3JvdXAgZmllbGQ9e2ZpZWxkfSBpZD0ncGFzc3dvcmQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5wYXNzd29yZH08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Q2x1YmhvdXNlQnRuIHRleHQ9J0xvZyBpbicgdmFyaWFudD0ncHJpbWFyeScgdHlwZT0nc3VibWl0JyBpc0xvYWRpbmc9e3Byb3BzLmlzU3VibWl0dGluZ30gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2dpbkZvcm1cbiIsImltcG9ydCB7XG4gICAgQm94LFxuICAgIEZvcm1Db250cm9sLFxuICAgIEZvcm1MYWJlbCxcbiAgICBGb3JtRXJyb3JNZXNzYWdlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuY29uc3QgWXVwID0gcmVxdWlyZSgneXVwJylcbnJlcXVpcmUoJ3l1cC1wYXNzd29yZCcpKFl1cClcblxuaW1wb3J0IENsdWJob3VzZUJ0biBmcm9tICcuLi9DbHViaG91c2VCdG4vQ2x1YmhvdXNlQnRuJ1xuaW1wb3J0IEVtYWlsSW5wdXRHcm91cCBmcm9tICcuLi9FbWFpbElucHV0R3JvdXAvRW1haWxJbnB1dEdyb3VwJ1xuaW1wb3J0IFBhc3N3b3JkSW5wdXRHcm91cCBmcm9tICcuLi9QYXNzd29yZElucHV0R3JvdXAvUGFzc3dvcmRJbnB1dEdyb3VwJ1xuaW1wb3J0IFVzZXJuYW1lSW5wdXRHcm91cCBmcm9tICcuLi9Vc2VybmFtZUlucHV0R3JvdXAvVXNlcm5hbWVJbnB1dEdyb3VwJ1xuXG5mdW5jdGlvbiBVc2VyU2lnbnVwRm9ybSh7IGhhbmRsZVN1Ym1pdCB9KSB7XG4gICAgY29uc3QgdmFsaWROdXNFbWFpbFJlZ2V4ID0gLyhAfHUuKW51cy5lZHUvXG4gICAgY29uc3Qgc2lnbnVwU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgc2lnbnVwX3VzZXJuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHVzZXJuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgICAgIHNpZ251cF9lbWFpbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5lbWFpbCgnSW52YWxpZCBlbWFpbCcpXG4gICAgICAgICAgICAgICAgICAgIC8vIC5tYXRjaGVzKHZhbGlkTnVzRW1haWxSZWdleCwgJ1lvdXIgTlVTIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGpvaW4gTlVTIENsdWJob3VzZScpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnWW91ciBOVVMgZW1haWwgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgc2lnbnVwX3Bhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDggY2hhcmFjdGVycycpXG4gICAgICAgICAgICAgICAgICAgIC5taW5OdW1iZXJzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBkaWdpdCcpXG4gICAgICAgICAgICAgICAgICAgIC5taW5TeW1ib2xzKDEsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBzeW1ib2wnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHNpZ251cF91c2VybmFtZTogJycsIHNpZ251cF9lbWFpbDogJycsIHNpZ251cF9wYXNzd29yZDogJycgfX1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzaWdudXBTY2hlbWF9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX3VzZXJuYW1lJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX3VzZXJuYW1lICYmIGZvcm0udG91Y2hlZC5zaWdudXBfdXNlcm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Vc2VybmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJuYW1lSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfdXNlcm5hbWUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfdXNlcm5hbWV9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX2VtYWlsJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX2VtYWlsICYmIGZvcm0udG91Y2hlZC5zaWdudXBfZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfZW1haWwnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfZW1haWx9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nc2lnbnVwX3Bhc3N3b3JkJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuc2lnbnVwX3Bhc3N3b3JkICYmIGZvcm0udG91Y2hlZC5zaWdudXBfcGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXRHcm91cCBmaWVsZD17ZmllbGR9IGlkPSdzaWdudXBfcGFzc3dvcmQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5zaWdudXBfcGFzc3dvcmR9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPENsdWJob3VzZUJ0biB0ZXh0PSdTaWduIHVwJyB2YXJpYW50PSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnIGlzTG9hZGluZz17cHJvcHMuaXNTdWJtaXR0aW5nfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ251cEZvcm1cbiIsImltcG9ydCB7XG4gICAgSW5wdXRHcm91cCxcbiAgICBJbnB1dExlZnRFbGVtZW50XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBBdFNpZ25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuaW1wb3J0IENsdWJob3VzZUlucHV0IGZyb20gJy4uL0NsdWJob3VzZUlucHV0L0NsdWJob3VzZUlucHV0J1xuXG5mdW5jdGlvbiBVc2VybmFtZUlucHV0R3JvdXAoeyBmaWVsZCwgaWQgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPSdub25lJ1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXs8QXRTaWduSWNvbiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2x1YmhvdXNlSW5wdXQgey4uLmZpZWxkfSBpZD17aWR9IHBsYWNlaG9sZGVyPSdVc2VybmFtZScgcGw9ezEwfS8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJuYW1lSW5wdXRHcm91cFxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==