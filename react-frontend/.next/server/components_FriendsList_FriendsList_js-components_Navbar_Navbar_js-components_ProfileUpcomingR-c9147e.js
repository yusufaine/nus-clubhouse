exports.id = "components_FriendsList_FriendsList_js-components_Navbar_Navbar_js-components_ProfileUpcomingR-c9147e";
exports.ids = ["components_FriendsList_FriendsList_js-components_Navbar_Navbar_js-components_ProfileUpcomingR-c9147e"];
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

/***/ "./components/FriendProfile/FriendProfile.js":
/*!***************************************************!*\
  !*** ./components/FriendProfile/FriendProfile.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserNameText_UserNameText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserNameText/UserNameText */ "./components/UserNameText/UserNameText.js");
/* harmony import */ var _UserUsernameText_UserUsernameText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserUsernameText/UserUsernameText */ "./components/UserUsernameText/UserUsernameText.js");
/* harmony import */ var _FriendProfileAvatar_FriendProfileAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FriendProfileAvatar/FriendProfileAvatar */ "./components/FriendProfileAvatar/FriendProfileAvatar.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/FriendProfile/FriendProfile.js";





function FriendProfile({
  user
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    direction: "row",
    spacing: 4,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FriendProfileAvatar_FriendProfileAvatar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserNameText_UserNameText__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: "HoloPanio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserUsernameText_UserUsernameText__WEBPACK_IMPORTED_MODULE_3__.default, {
        text: "HoloPanio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FriendProfile);

/***/ }),

/***/ "./components/FriendProfileAvatar/FriendProfileAvatar.js":
/*!***************************************************************!*\
  !*** ./components/FriendProfileAvatar/FriendProfileAvatar.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/FriendProfileAvatar/FriendProfileAvatar.js";


function FriendProfileAvatar({
  name,
  status = 'online'
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
    name: name,
    size: "md",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AvatarBadge, {
      boxSize: "1.25em",
      bg: status == 'online' ? 'green.500' : 'clubhouseorange.600'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FriendProfileAvatar);

/***/ }),

/***/ "./components/FriendProfileList/FriendProfileList.js":
/*!***********************************************************!*\
  !*** ./components/FriendProfileList/FriendProfileList.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FriendProfile_FriendProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FriendProfile/FriendProfile */ "./components/FriendProfile/FriendProfile.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/FriendProfileList/FriendProfileList.js";



function FriendProfileList({
  users
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "column",
    spacing: 6,
    mt: 6,
    children: users.map((user, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FriendProfile_FriendProfile__WEBPACK_IMPORTED_MODULE_2__.default, {
      user: user
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FriendProfileList);

/***/ }),

/***/ "./components/FriendsList/FriendsList.js":
/*!***********************************************!*\
  !*** ./components/FriendsList/FriendsList.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");
/* harmony import */ var _HighlightText_HighlightText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HighlightText/HighlightText */ "./components/HighlightText/HighlightText.js");
/* harmony import */ var _FriendProfileList_FriendProfileList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FriendProfileList/FriendProfileList */ "./components/FriendProfileList/FriendProfileList.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/FriendsList/FriendsList.js";





function FriendsList({
  users = ['user1', 'user1', 'user1', 'user1', 'user1']
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "column",
    minW: "235px",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__.default, {
      text: "People",
      mb: 4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HighlightText_HighlightText__WEBPACK_IMPORTED_MODULE_3__.default, {
      text: "online",
      mb: 4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FriendProfileList_FriendProfileList__WEBPACK_IMPORTED_MODULE_4__.default, {
      users: users
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FriendsList);

/***/ }),

/***/ "./components/HighlightText/HighlightText.js":
/*!***************************************************!*\
  !*** ./components/HighlightText/HighlightText.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/HighlightText/HighlightText.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function HighlightText(_ref) {
  let {
    text
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread(_objectSpread({
    fontWeight: "medium",
    fontSize: "xs",
    textTransform: "uppercase",
    textColor: "clubhouseorange.500"
  }, props), {}, {
    children: text
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HighlightText);

/***/ }),

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/Navbar/Navbar.js";




function Navbar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      px: 4,
      py: 4,
      justifyContent: 'center',
      mb: 4,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        h: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        w: "1320px",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          as: "/",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: "/logo-full.svg",
              width: "192",
              height: "32"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar); // MYPETS
// import {
//     Box,
//     Divider,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     ButtonGroup,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
// } from '@chakra-ui/react';
// import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
// } from '@chakra-ui/icons';
// import NextLink from 'next/link'
// import LoginModalBtn from '../LoginModalBtn/LoginModalBtn';
// import SignupModalBtn from '../SignupModalBtn/SignupModalBtn';
// import SearchbarGroup from '../SearchbarGroup/SearchbarGroup'
// import NavbarCartModalBtn from '../NavbarCartModalBtn/NavbarCartModalBtn';
// import NavbarUserIcon from '../NavbarUserIcon/NavbarUserIcon';
// import NavbarUserModalBtn from '../NavbarUserModalBtn/NavbarUserModalBtn';
// export default function Navbar({ user=true }) {
//     const { isOpen, onToggle } = useDisclosure();
//     return (
//         <Box>
//             <Flex
//                 bg='white'
//                 color='gray.600'
//                 py={{ base: 4 }}
//                 px={{ base: 2 }}
//                 borderBottom={1}
//                 borderStyle={'solid'}
//                 borderColor='gray.200'
//                 align={'center'}
//                 justifyContent='center'
//             >
//                 <Flex
//                     alignItems={'center'} 
//                     justifyContent={'space-between'} 
//                     maxW={{ lg: '1200px' }}
//                     w='100%'
//                     px={4}
//                 >
//                     <Flex
//                         flex={{ base: 1, lg: 'auto' }}
//                         display={{ base: 'flex', lg: 'none' }}
//                     >
//                         <IconButton
//                             onClick={onToggle}
//                             icon={
//                                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//                             }
//                             variant={'ghost'}
//                             aria-label={'Toggle Navigation'}
//                         />
//                     </Flex>
//                     <Box display={{ base: 'none', lg: 'block'}}>
//                         <NextLink 
//                             href='/' 
//                             as='/' 
//                             passHref
//                         >
//                             <a>
//                                 <img src='/cropped-logo.svg' width='125' height='52' />
//                             </a>
//                         </NextLink>
//                     </Box>
//                     <SearchbarGroup display={{ base: 'none', lg: 'inherit' }}/>
//                     { user ? ( 
//                     <ButtonGroup alignItems='center' spacing={6}>
//                         <NavbarCartModalBtn />
//                         <NavbarUserIcon />
//                     </ButtonGroup>     
//                     ) : (
//                     <ButtonGroup spacing={4}>
//                         <LoginModalBtn />
//                         <SignupModalBtn />
//                     </ButtonGroup>
//                     )}
//                 </Flex>
//             </Flex>
//             <Collapse in={isOpen} animateOpacity>
//                 <MobileNav />
//             </Collapse>
//         </Box>
//     );
// }
// const MobileNav = () => {
//     return (
//         <Box
//             bg='white'
//             p={4}
//             display={{ base: 'inherit', lg: 'none' }}
//         >
//             <Stack spacing={4}>
//                 <SearchbarGroup display={{ base: 'inherit', lg: 'none' }}/>
//                 <Divider/>
//                 <NavbarUserModalBtn mode='mobile' />
//                 <Box px={2}>
//                     Past orders
//                 </Box>
//                 <Divider/>
//                 <Box px={2}>
//                     Log out 
//                 </Box>
//             </Stack>
//         </Box>
//     );
// };

/***/ }),

/***/ "./components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection.js":
/*!*******************************************************************************!*\
  !*** ./components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpcomingRoomsSection_UpcomingRoomsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UpcomingRoomsSection/UpcomingRoomsSection */ "./components/UpcomingRoomsSection/UpcomingRoomsSection.js");
/* harmony import */ var _UserProfileSection_UserProfileSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserProfileSection/UserProfileSection */ "./components/UserProfileSection/UserProfileSection.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ProfileUpcomingRoomsSection(_ref) {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, _objectSpread(_objectSpread({
    direction: "column",
    spacing: "30px"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfileSection_UserProfileSection__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpcomingRoomsSection_UpcomingRoomsSection__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileUpcomingRoomsSection);

/***/ }),

/***/ "./components/RoomNameText/RoomNameText.js":
/*!*************************************************!*\
  !*** ./components/RoomNameText/RoomNameText.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomNameText/RoomNameText.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function RoomNameText(_ref) {
  let {
    text
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread(_objectSpread({
    fontWeight: "bold",
    fontSize: "md",
    textColor: "clubhouseblue.900"
  }, props), {}, {
    children: text
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomNameText);

/***/ }),

/***/ "./components/RoomUsersAvatarGroup/RoomUsersAvatarGroup.js":
/*!*****************************************************************!*\
  !*** ./components/RoomUsersAvatarGroup/RoomUsersAvatarGroup.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomUsersAvatarGroup/RoomUsersAvatarGroup.js";


function RoomUsersAvatarGroup() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomUsersAvatarGroup);

/***/ }),

/***/ "./components/UpcomingRoomCard/UpcomingRoomCard.js":
/*!*********************************************************!*\
  !*** ./components/UpcomingRoomCard/UpcomingRoomCard.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HighlightText_HighlightText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HighlightText/HighlightText */ "./components/HighlightText/HighlightText.js");
/* harmony import */ var _RoomNameText_RoomNameText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoomNameText/RoomNameText */ "./components/RoomNameText/RoomNameText.js");
/* harmony import */ var _RoomUsersAvatarGroup_RoomUsersAvatarGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RoomUsersAvatarGroup/RoomUsersAvatarGroup */ "./components/RoomUsersAvatarGroup/RoomUsersAvatarGroup.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UpcomingRoomCard/UpcomingRoomCard.js";





function UpcomingRoomCard({
  room
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    borderBottomWidth: "1px",
    borderColor: "clubhousegrey.400",
    px: "20px",
    py: "15px",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HighlightText_HighlightText__WEBPACK_IMPORTED_MODULE_2__.default, {
      text: "2:55 AM",
      mb: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomNameText_RoomNameText__WEBPACK_IMPORTED_MODULE_3__.default, {
      text: "Sample Room Name 1",
      mb: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUsersAvatarGroup_RoomUsersAvatarGroup__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UpcomingRoomCard);

/***/ }),

/***/ "./components/UpcomingRoomsList/UpcomingRoomsList.js":
/*!***********************************************************!*\
  !*** ./components/UpcomingRoomsList/UpcomingRoomsList.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpcomingRoomCard_UpcomingRoomCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UpcomingRoomCard/UpcomingRoomCard */ "./components/UpcomingRoomCard/UpcomingRoomCard.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UpcomingRoomsList/UpcomingRoomsList.js";



function UpcomingRoomsList({
  rooms = ['room1', 'room1', 'room1', 'room1', 'room1']
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "column",
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    borderColor: "clubhousegrey.400",
    children: rooms.map((room, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpcomingRoomCard_UpcomingRoomCard__WEBPACK_IMPORTED_MODULE_2__.default, {
      room: room
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UpcomingRoomsList);

/***/ }),

/***/ "./components/UpcomingRoomsSection/UpcomingRoomsSection.js":
/*!*****************************************************************!*\
  !*** ./components/UpcomingRoomsSection/UpcomingRoomsSection.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpcomingRoomsList_UpcomingRoomsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UpcomingRoomsList/UpcomingRoomsList */ "./components/UpcomingRoomsList/UpcomingRoomsList.js");
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UpcomingRoomsSection/UpcomingRoomsSection.js";




function UpcomingRoomsSection() {
  const handleLoadUpcomingRooms = () => {
    console.log('load list of upcoming rooms!');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    rounded: "lg",
    bg: "clubhousegrey.200",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      roundedTop: "lg",
      borderWidth: "1px",
      borderColor: "clubhousegrey.400",
      p: "20px",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_3__.default, {
        text: "Upcoming rooms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpcomingRoomsList_UpcomingRoomsList__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      roundedBottom: "lg",
      borderBottomWidth: "1px",
      borderColor: "clubhousegrey.400",
      px: "20px",
      py: "15px",
      bg: "clubhousegrey.400",
      _hover: {
        bg: 'clubhousegrey.600',
        borderColor: 'clubhousegrey.600',
        cursor: 'pointer'
      },
      onClick: handleLoadUpcomingRooms,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_3__.default, {
        text: "Explore more rooms",
        fontSize: "md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UpcomingRoomsSection);

/***/ }),

/***/ "./components/UserBioText/UserBioText.js":
/*!***********************************************!*\
  !*** ./components/UserBioText/UserBioText.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserBioText/UserBioText.js";


function UserBioText({
  bioText
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    fontSize: "14px",
    isTruncated: true,
    maxWidth: "285px",
    children: bioText
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserBioText);

/***/ }),

/***/ "./components/UserFollowerFollowingText/UserFollowerFollowingText.js":
/*!***************************************************************************!*\
  !*** ./components/UserFollowerFollowingText/UserFollowerFollowingText.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserFollowerText_UserFollowerText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserFollowerText/UserFollowerText */ "./components/UserFollowerText/UserFollowerText.js");
/* harmony import */ var _UserFollowingText_UserFollowingText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserFollowingText/UserFollowingText */ "./components/UserFollowingText/UserFollowingText.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserFollowerFollowingText/UserFollowerFollowingText.js";




function UserFollowerFollowingText({
  numFollowers = 0,
  numFollowing = 0
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "row",
    spacing: 5,
    mb: 6,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserFollowerText_UserFollowerText__WEBPACK_IMPORTED_MODULE_2__.default, {
      numFollowers: numFollowers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserFollowingText_UserFollowingText__WEBPACK_IMPORTED_MODULE_3__.default, {
      numFollowing: numFollowing
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserFollowerFollowingText);

/***/ }),

/***/ "./components/UserFollowerText/UserFollowerText.js":
/*!*********************************************************!*\
  !*** ./components/UserFollowerText/UserFollowerText.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserFollowerText/UserFollowerText.js";


function UserFollowerText({
  numFollowers
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "row",
    spacing: 1,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontWeight: "extrabold",
      fontSize: "14px",
      children: numFollowers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "14px",
      children: "followers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserFollowerText);

/***/ }),

/***/ "./components/UserFollowingText/UserFollowingText.js":
/*!***********************************************************!*\
  !*** ./components/UserFollowingText/UserFollowingText.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserFollowingText/UserFollowingText.js";


function UserFollowingText({
  numFollowing
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "row",
    spacing: 1,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontWeight: "extrabold",
      fontSize: "14px",
      children: numFollowing
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "14px",
      children: "followers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserFollowingText);

/***/ }),

/***/ "./components/UserNameText/UserNameText.js":
/*!*************************************************!*\
  !*** ./components/UserNameText/UserNameText.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserNameText/UserNameText.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function UserNameText(_ref) {
  let {
    text
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread(_objectSpread({
    fontWeight: "extrabold",
    fontSize: "14px",
    textColor: "clubhousegrey.900"
  }, props), {}, {
    children: text
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserNameText);

/***/ }),

/***/ "./components/UserProfile/UserProfile.js":
/*!***********************************************!*\
  !*** ./components/UserProfile/UserProfile.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserProfileAvatar_UserProfileAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserProfileAvatar/UserProfileAvatar */ "./components/UserProfileAvatar/UserProfileAvatar.js");
/* harmony import */ var _UserNameText_UserNameText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserNameText/UserNameText */ "./components/UserNameText/UserNameText.js");
/* harmony import */ var _UserUsernameText_UserUsernameText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserUsernameText/UserUsernameText */ "./components/UserUsernameText/UserUsernameText.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserProfile/UserProfile.js";





function UserProfile({
  name = 'Ryan Aidan',
  username = 'aidanaden'
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "row",
    spacing: 4,
    mb: 5,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfileAvatar_UserProfileAvatar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserNameText_UserNameText__WEBPACK_IMPORTED_MODULE_3__.default, {
        text: username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserUsernameText_UserUsernameText__WEBPACK_IMPORTED_MODULE_4__.default, {
        text: username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./components/UserProfileAvatar/UserProfileAvatar.js":
/*!***********************************************************!*\
  !*** ./components/UserProfileAvatar/UserProfileAvatar.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserProfileAvatar/UserProfileAvatar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function UserProfileAvatar(_ref) {
  let {
    name,
    src
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "src"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, _objectSpread({
    size: "lg",
    name: name,
    src: src
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserProfileAvatar);

/***/ }),

/***/ "./components/UserProfileSection/UserProfileSection.js":
/*!*************************************************************!*\
  !*** ./components/UserProfileSection/UserProfileSection.js ***!
  \*************************************************************/
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
/* harmony import */ var _UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserProfile/UserProfile */ "./components/UserProfile/UserProfile.js");
/* harmony import */ var _UserFollowerFollowingText_UserFollowerFollowingText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UserFollowerFollowingText/UserFollowerFollowingText */ "./components/UserFollowerFollowingText/UserFollowerFollowingText.js");
/* harmony import */ var _UserBioText_UserBioText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UserBioText/UserBioText */ "./components/UserBioText/UserBioText.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserProfileSection/UserProfileSection.js";







function UserProfileSection() {
  const {
    user
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.default);
  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: userUsername,
    1: setUserUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: numFollowers,
    1: setNumFollowers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: numFollowing,
    1: setNumFollowing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (user) {
      setUserUsername(user.username);
      setUserName(user.name);
      setNumFollowers(user.followers.length);
      setNumFollowing(user.following.length);
    }
  }, [user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    rounded: "lg",
    p: 5,
    bg: "clubhousegrey.200",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_4__.default, {
      name: userName,
      username: userUsername
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserFollowerFollowingText_UserFollowerFollowingText__WEBPACK_IMPORTED_MODULE_5__.default, {
      numFollowers: numFollowers,
      numFollowing: numFollowing
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserBioText_UserBioText__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserProfileSection);

/***/ }),

/***/ "./components/UserUsernameText/UserUsernameText.js":
/*!*********************************************************!*\
  !*** ./components/UserUsernameText/UserUsernameText.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/UserUsernameText/UserUsernameText.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function UserUsernameText(_ref) {
  let {
    text
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread(_objectSpread({
    fontWeight: "normal",
    fontSize: "14px"
  }, props), {}, {
    children: ["@", text]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserUsernameText);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0JvbGRUZXh0L0JvbGRUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvRnJpZW5kUHJvZmlsZS9GcmllbmRQcm9maWxlLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvRnJpZW5kUHJvZmlsZUF2YXRhci9GcmllbmRQcm9maWxlQXZhdGFyLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvRnJpZW5kUHJvZmlsZUxpc3QvRnJpZW5kUHJvZmlsZUxpc3QuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzTGlzdC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0hpZ2hsaWdodFRleHQvSGlnaGxpZ2h0VGV4dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Qcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb24vUHJvZmlsZVVwY29taW5nUm9vbXNTZWN0aW9uLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvUm9vbU5hbWVUZXh0L1Jvb21OYW1lVGV4dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1Jvb21Vc2Vyc0F2YXRhckdyb3VwL1Jvb21Vc2Vyc0F2YXRhckdyb3VwLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXBjb21pbmdSb29tQ2FyZC9VcGNvbWluZ1Jvb21DYXJkLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXBjb21pbmdSb29tc0xpc3QvVXBjb21pbmdSb29tc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9VcGNvbWluZ1Jvb21zU2VjdGlvbi9VcGNvbWluZ1Jvb21zU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJCaW9UZXh0L1VzZXJCaW9UZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlckZvbGxvd2VyRm9sbG93aW5nVGV4dC9Vc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlckZvbGxvd2VyVGV4dC9Vc2VyRm9sbG93ZXJUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlckZvbGxvd2luZ1RleHQvVXNlckZvbGxvd2luZ1RleHQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Vc2VyTmFtZVRleHQvVXNlck5hbWVUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZUF2YXRhci9Vc2VyUHJvZmlsZUF2YXRhci5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJQcm9maWxlU2VjdGlvbi9Vc2VyUHJvZmlsZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Vc2VyVXNlcm5hbWVUZXh0L1VzZXJVc2VybmFtZVRleHQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2lnbm9yZWR8L2hvbWUvYWlkYW4vbnVzY2x1YmhvdXNlL3JlYWN0LWZyb250ZW5kL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQm9sZFRleHQiLCJ0ZXh0IiwiZm9udFNpemUiLCJwcm9wcyIsIkZyaWVuZFByb2ZpbGUiLCJ1c2VyIiwiRnJpZW5kUHJvZmlsZUF2YXRhciIsIm5hbWUiLCJzdGF0dXMiLCJGcmllbmRQcm9maWxlTGlzdCIsInVzZXJzIiwibWFwIiwiaSIsIkZyaWVuZHNMaXN0IiwiSGlnaGxpZ2h0VGV4dCIsIk5hdmJhciIsIlByb2ZpbGVVcGNvbWluZ1Jvb21zU2VjdGlvbiIsIlJvb21OYW1lVGV4dCIsIlJvb21Vc2Vyc0F2YXRhckdyb3VwIiwiVXBjb21pbmdSb29tQ2FyZCIsInJvb20iLCJVcGNvbWluZ1Jvb21zTGlzdCIsInJvb21zIiwiVXBjb21pbmdSb29tc1NlY3Rpb24iLCJoYW5kbGVMb2FkVXBjb21pbmdSb29tcyIsImNvbnNvbGUiLCJsb2ciLCJiZyIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwiVXNlckJpb1RleHQiLCJiaW9UZXh0IiwiVXNlckZvbGxvd2VyRm9sbG93aW5nVGV4dCIsIm51bUZvbGxvd2VycyIsIm51bUZvbGxvd2luZyIsIlVzZXJGb2xsb3dlclRleHQiLCJVc2VyRm9sbG93aW5nVGV4dCIsIlVzZXJOYW1lVGV4dCIsIlVzZXJQcm9maWxlIiwidXNlcm5hbWUiLCJVc2VyUHJvZmlsZUF2YXRhciIsInNyYyIsIlVzZXJQcm9maWxlU2VjdGlvbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ1c2VTdGF0ZSIsInVzZXJVc2VybmFtZSIsInNldFVzZXJVc2VybmFtZSIsInNldE51bUZvbGxvd2VycyIsInNldE51bUZvbGxvd2luZyIsInVzZUVmZmVjdCIsImZvbGxvd2VycyIsImxlbmd0aCIsImZvbGxvd2luZyIsIlVzZXJVc2VybmFtZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsU0FBU0EsUUFBVCxPQUFxRDtBQUFBLE1BQW5DO0FBQUVDLFFBQUY7QUFBUUMs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LENBQXJCO0FBQXdCLE1BQUUsRUFBQyxtQkFBM0I7QUFBQSw0QkFDSSw4REFBQyw2REFBRDtBQUNJLFVBQUksRUFBRXdDLFFBRFY7QUFFSSxjQUFRLEVBQUVHO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0ksOERBQUMseUZBQUQ7QUFDSSxrQkFBWSxFQUFFZixZQURsQjtBQUVJLGtCQUFZLEVBQUVDO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQVNJLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOztBQUVELCtEQUFlUSxrQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7QUFJQSxTQUFTYyxnQkFBVCxPQUE4QztBQUFBLE1BQXBCO0FBQUV2RDtBQUFGLEdBQW9CO0FBQUEsTUFBVEUsS0FBUzs7QUFDMUMsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFVLEVBQUMsUUFBakI7QUFBMEIsWUFBUSxFQUFDO0FBQW5DLEtBQThDQSxLQUE5QztBQUFBLG9CQUNNRixJQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRUQsK0RBQWV1RCxnQkFBZixFOzs7Ozs7Ozs7O0FDWkEsZSIsImZpbGUiOiJjb21wb25lbnRzX0ZyaWVuZHNMaXN0X0ZyaWVuZHNMaXN0X2pzLWNvbXBvbmVudHNfTmF2YmFyX05hdmJhcl9qcy1jb21wb25lbnRzX1Byb2ZpbGVVcGNvbWluZ1ItYzkxNDdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gICAgVGV4dCBcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gQm9sZFRleHQoeyB0ZXh0LCBmb250U2l6ZT0neGwnLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgZm9udFdlaWdodD0nZXh0cmFib2xkJyBmb250U2l6ZT17Zm9udFNpemV9IHRleHRDb2xvcj0nY2x1YmhvdXNlZ3JleS45MDAnIHsuLi5wcm9wc30+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9sZFRleHRcbiIsImltcG9ydCB7IFxuICAgIEJveCxcbiAgICBIU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IFVzZXJOYW1lVGV4dCBmcm9tICcuLi9Vc2VyTmFtZVRleHQvVXNlck5hbWVUZXh0J1xuaW1wb3J0IFVzZXJVc2VybmFtZVRleHQgZnJvbSAnLi4vVXNlclVzZXJuYW1lVGV4dC9Vc2VyVXNlcm5hbWVUZXh0J1xuaW1wb3J0IEZyaWVuZFByb2ZpbGVBdmF0YXIgZnJvbSAnLi4vRnJpZW5kUHJvZmlsZUF2YXRhci9GcmllbmRQcm9maWxlQXZhdGFyJ1xuXG5mdW5jdGlvbiBGcmllbmRQcm9maWxlKHsgdXNlciB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhTdGFjayBkaXJlY3Rpb249J3Jvdycgc3BhY2luZz17NH0+XG4gICAgICAgICAgICA8RnJpZW5kUHJvZmlsZUF2YXRhciAvPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8VXNlck5hbWVUZXh0IHRleHQ9J0hvbG9QYW5pbycvPlxuICAgICAgICAgICAgICAgIDxVc2VyVXNlcm5hbWVUZXh0IHRleHQ9J0hvbG9QYW5pbycvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvSFN0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kUHJvZmlsZVxuIiwiaW1wb3J0IHtcbiAgICBBdmF0YXIsXG4gICAgQXZhdGFyQmFkZ2Vcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gRnJpZW5kUHJvZmlsZUF2YXRhcih7IG5hbWUsIHN0YXR1cz0nb25saW5lJ30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXZhdGFyIG5hbWU9e25hbWV9IHNpemU9J21kJz5cbiAgICAgICAgICAgIDxBdmF0YXJCYWRnZSBib3hTaXplPScxLjI1ZW0nIGJnPXtzdGF0dXMgPT0gJ29ubGluZScgPyAnZ3JlZW4uNTAwJyA6ICdjbHViaG91c2VvcmFuZ2UuNjAwJ30vPlxuICAgICAgICA8L0F2YXRhcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZFByb2ZpbGVBdmF0YXJcbiIsImltcG9ydCB7XG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IEZyaWVuZFByb2ZpbGUgZnJvbSAnLi4vRnJpZW5kUHJvZmlsZS9GcmllbmRQcm9maWxlJ1xuXG5mdW5jdGlvbiBGcmllbmRQcm9maWxlTGlzdCh7IHVzZXJzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdjb2x1bW4nIHNwYWNpbmc9ezZ9IG10PXs2fT5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxGcmllbmRQcm9maWxlIHVzZXI9e3VzZXJ9IGtleT17aX0vPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRQcm9maWxlTGlzdFxuIiwiaW1wb3J0IHsgXG4gICAgU3RhY2sgXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBCb2xkVGV4dCBmcm9tICcuLi9Cb2xkVGV4dC9Cb2xkVGV4dCdcbmltcG9ydCBIaWdobGlnaHRUZXh0IGZyb20gJy4uL0hpZ2hsaWdodFRleHQvSGlnaGxpZ2h0VGV4dCdcbmltcG9ydCBGcmllbmRQcm9maWxlTGlzdCBmcm9tICcuLi9GcmllbmRQcm9maWxlTGlzdC9GcmllbmRQcm9maWxlTGlzdCdcblxuZnVuY3Rpb24gRnJpZW5kc0xpc3QoeyB1c2Vycz1bJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnXSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0nY29sdW1uJyBtaW5XPScyMzVweCc+XG4gICAgICAgICAgICA8Qm9sZFRleHQgdGV4dD0nUGVvcGxlJyBtYj17NH0vPlxuICAgICAgICAgICAgPEhpZ2hsaWdodFRleHQgdGV4dD0nb25saW5lJyBtYj17NH0vPlxuICAgICAgICAgICAgPEZyaWVuZFByb2ZpbGVMaXN0IHVzZXJzPXt1c2Vyc30gLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHNMaXN0XG4iLCJpbXBvcnQge1xuICAgIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gSGlnaGxpZ2h0VGV4dCh7IHRleHQsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdtZWRpdW0nIGZvbnRTaXplPSd4cycgdGV4dFRyYW5zZm9ybT0ndXBwZXJjYXNlJyB0ZXh0Q29sb3I9J2NsdWJob3VzZW9yYW5nZS41MDAnIHsuLi5wcm9wc30+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0VGV4dFxuIiwiaW1wb3J0IHtcbiAgICBGbGV4LCBcbiAgICBJY29uQnV0dG9uLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8RmxleCBweD17NH0gcHk9ezR9IGp1c3RpZnlDb250ZW50PXsnY2VudGVyJ30gbWI9ezR9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGg9ezIwfSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30ganVzdGlmeUNvbnRlbnQ9eydzcGFjZS1iZXR3ZWVuJ30gdz1cIjEzMjBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPScvJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPScvJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2Ugc3JjPScvbG9nby1mdWxsLnN2Zycgd2lkdGg9JzE5MicgaGVpZ2h0PSczMicvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgICAgICB7LyogPEZsZXggYWxpZ25JdGVtcz17J2NlbnRlcid9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBpZiBsb2dnZWQgaW4sIHNob3cgcGFzdCBvcmRlcnMsIGNhcnQgKyB1c2VyIGljb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogdXNlciA/ICggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGFsaWduSXRlbXM9J2NlbnRlcicgc3BhY2luZz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJDYXJ0TW9kYWxCdG4gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhclVzZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlLCBzaG93IGxvZ2luL3NpZ24gdXAgYnV0dG9uIGdyb3VwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luTW9kYWxCdG4gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ251cE1vZGFsQnRuIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkqL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvRmxleD4gKi99XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgICAgey8qIHtpc09wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGFzPXsnbmF2J30gc3BhY2luZz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0xpbmtzLm1hcCgobGluayxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aX0+e2xpbmt9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9ICovfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuXG5cbi8vIE1ZUEVUU1xuXG4vLyBpbXBvcnQge1xuLy8gICAgIEJveCxcbi8vICAgICBEaXZpZGVyLFxuLy8gICAgIEZsZXgsXG4vLyAgICAgVGV4dCxcbi8vICAgICBJY29uQnV0dG9uLFxuLy8gICAgIEJ1dHRvbixcbi8vICAgICBCdXR0b25Hcm91cCxcbi8vICAgICBTdGFjayxcbi8vICAgICBDb2xsYXBzZSxcbi8vICAgICBJY29uLFxuLy8gICAgIExpbmssXG4vLyAgICAgUG9wb3Zlcixcbi8vICAgICBQb3BvdmVyVHJpZ2dlcixcbi8vICAgICBQb3BvdmVyQ29udGVudCxcbi8vICAgICB1c2VDb2xvck1vZGVWYWx1ZSxcbi8vICAgICB1c2VCcmVha3BvaW50VmFsdWUsXG4vLyAgICAgdXNlRGlzY2xvc3VyZSxcbi8vIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG4vLyBpbXBvcnQge1xuLy8gICAgIEhhbWJ1cmdlckljb24sXG4vLyAgICAgQ2xvc2VJY29uLFxuLy8gICAgIENoZXZyb25Eb3duSWNvbixcbi8vICAgICBDaGV2cm9uUmlnaHRJY29uLFxuLy8gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbi8vIGltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIGltcG9ydCBMb2dpbk1vZGFsQnRuIGZyb20gJy4uL0xvZ2luTW9kYWxCdG4vTG9naW5Nb2RhbEJ0bic7XG4vLyBpbXBvcnQgU2lnbnVwTW9kYWxCdG4gZnJvbSAnLi4vU2lnbnVwTW9kYWxCdG4vU2lnbnVwTW9kYWxCdG4nO1xuLy8gaW1wb3J0IFNlYXJjaGJhckdyb3VwIGZyb20gJy4uL1NlYXJjaGJhckdyb3VwL1NlYXJjaGJhckdyb3VwJ1xuLy8gaW1wb3J0IE5hdmJhckNhcnRNb2RhbEJ0biBmcm9tICcuLi9OYXZiYXJDYXJ0TW9kYWxCdG4vTmF2YmFyQ2FydE1vZGFsQnRuJztcbi8vIGltcG9ydCBOYXZiYXJVc2VySWNvbiBmcm9tICcuLi9OYXZiYXJVc2VySWNvbi9OYXZiYXJVc2VySWNvbic7XG4vLyBpbXBvcnQgTmF2YmFyVXNlck1vZGFsQnRuIGZyb20gJy4uL05hdmJhclVzZXJNb2RhbEJ0bi9OYXZiYXJVc2VyTW9kYWxCdG4nO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyB1c2VyPXRydWUgfSkge1xuLy8gICAgIGNvbnN0IHsgaXNPcGVuLCBvblRvZ2dsZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPEJveD5cbi8vICAgICAgICAgICAgIDxGbGV4XG4vLyAgICAgICAgICAgICAgICAgYmc9J3doaXRlJ1xuLy8gICAgICAgICAgICAgICAgIGNvbG9yPSdncmF5LjYwMCdcbi8vICAgICAgICAgICAgICAgICBweT17eyBiYXNlOiA0IH19XG4vLyAgICAgICAgICAgICAgICAgcHg9e3sgYmFzZTogMiB9fVxuLy8gICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT17MX1cbi8vICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZT17J3NvbGlkJ31cbi8vICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj0nZ3JheS4yMDAnXG4vLyAgICAgICAgICAgICAgICAgYWxpZ249eydjZW50ZXInfVxuLy8gICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgPEZsZXhcbi8vICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz17J2NlbnRlcid9IFxuLy8gICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17J3NwYWNlLWJldHdlZW4nfSBcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4Vz17eyBsZzogJzEyMDBweCcgfX1cbi8vICAgICAgICAgICAgICAgICAgICAgdz0nMTAwJSdcbi8vICAgICAgICAgICAgICAgICAgICAgcHg9ezR9XG4vLyAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICA8RmxleFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmxleD17eyBiYXNlOiAxLCBsZzogJ2F1dG8nIH19XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdmbGV4JywgbGc6ICdub25lJyB9fVxuLy8gICAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPyA8Q2xvc2VJY29uIHc9ezN9IGg9ezN9IC8+IDogPEhhbWJ1cmdlckljb24gdz17NX0gaD17NX0gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17J2dob3N0J31cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXsnVG9nZ2xlIE5hdmlnYXRpb24nfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbGc6ICdibG9jayd9fT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPScvJyBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz0nLycgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbi8vICAgICAgICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9jcm9wcGVkLWxvZ28uc3ZnJyB3aWR0aD0nMTI1JyBoZWlnaHQ9JzUyJyAvPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hiYXJHcm91cCBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbGc6ICdpbmhlcml0JyB9fS8+XG5cbi8vICAgICAgICAgICAgICAgICAgICAgeyB1c2VyID8gKCBcbi8vICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGFsaWduSXRlbXM9J2NlbnRlcicgc3BhY2luZz17Nn0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQ2FydE1vZGFsQnRuIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyVXNlckljb24gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD4gICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICApIDogKFxuLy8gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc3BhY2luZz17NH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Nb2RhbEJ0biAvPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ251cE1vZGFsQnRuIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4vLyAgICAgICAgICAgICAgICAgICAgICl9XG4vLyAgICAgICAgICAgICAgICAgPC9GbGV4PlxuLy8gICAgICAgICAgICAgPC9GbGV4PlxuXG4vLyAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e2lzT3Blbn0gYW5pbWF0ZU9wYWNpdHk+XG4vLyAgICAgICAgICAgICAgICAgPE1vYmlsZU5hdiAvPlxuLy8gICAgICAgICAgICAgPC9Db2xsYXBzZT5cbi8vICAgICAgICAgPC9Cb3g+XG4vLyAgICAgKTtcbi8vIH1cblxuLy8gY29uc3QgTW9iaWxlTmF2ID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxCb3hcbi8vICAgICAgICAgICAgIGJnPSd3aGl0ZSdcbi8vICAgICAgICAgICAgIHA9ezR9XG4vLyAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdpbmhlcml0JywgbGc6ICdub25lJyB9fVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4vLyAgICAgICAgICAgICAgICAgPFNlYXJjaGJhckdyb3VwIGRpc3BsYXk9e3sgYmFzZTogJ2luaGVyaXQnLCBsZzogJ25vbmUnIH19Lz5cbi8vICAgICAgICAgICAgICAgICA8RGl2aWRlci8+XG4vLyAgICAgICAgICAgICAgICAgPE5hdmJhclVzZXJNb2RhbEJ0biBtb2RlPSdtb2JpbGUnIC8+XG4vLyAgICAgICAgICAgICAgICAgPEJveCBweD17Mn0+XG4vLyAgICAgICAgICAgICAgICAgICAgIFBhc3Qgb3JkZXJzXG4vLyAgICAgICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgICAgICAgPERpdmlkZXIvPlxuLy8gICAgICAgICAgICAgICAgIDxCb3ggcHg9ezJ9PlxuLy8gICAgICAgICAgICAgICAgICAgICBMb2cgb3V0IFxuLy8gICAgICAgICAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICAgICAgPC9TdGFjaz5cbi8vICAgICAgICAgPC9Cb3g+XG4vLyAgICAgKTtcbi8vIH07IiwiaW1wb3J0IHtcbiAgICBTdGFja1xufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgVXBjb21pbmdSb29tc1NlY3Rpb24gZnJvbSAnLi4vVXBjb21pbmdSb29tc1NlY3Rpb24vVXBjb21pbmdSb29tc1NlY3Rpb24nXG5pbXBvcnQgVXNlclByb2ZpbGVTZWN0aW9uIGZyb20gJy4uL1VzZXJQcm9maWxlU2VjdGlvbi9Vc2VyUHJvZmlsZVNlY3Rpb24nXG5cbmZ1bmN0aW9uIFByb2ZpbGVVcGNvbWluZ1Jvb21zU2VjdGlvbih7Li4ucHJvcHN9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPSczMHB4JyB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPFVzZXJQcm9maWxlU2VjdGlvbiAvPlxuICAgICAgICAgICAgPFVwY29taW5nUm9vbXNTZWN0aW9uIC8+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb25cbiIsImltcG9ydCB7XG4gICAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBSb29tTmFtZVRleHQoeyB0ZXh0LCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9J21kJyB0ZXh0Q29sb3I9J2NsdWJob3VzZWJsdWUuOTAwJyB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgIDwvVGV4dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21OYW1lVGV4dFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBSb29tVXNlcnNBdmF0YXJHcm91cCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbVVzZXJzQXZhdGFyR3JvdXBcbiIsImltcG9ydCB7XG4gICAgQm94XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBIaWdobGlnaHRUZXh0IGZyb20gJy4uL0hpZ2hsaWdodFRleHQvSGlnaGxpZ2h0VGV4dCdcbmltcG9ydCBSb29tTmFtZVRleHQgZnJvbSAnLi4vUm9vbU5hbWVUZXh0L1Jvb21OYW1lVGV4dCdcbmltcG9ydCBSb29tVXNlcnNBdmF0YXJHcm91cCBmcm9tICcuLi9Sb29tVXNlcnNBdmF0YXJHcm91cC9Sb29tVXNlcnNBdmF0YXJHcm91cCdcblxuZnVuY3Rpb24gVXBjb21pbmdSb29tQ2FyZCh7IHJvb20gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aD0nMXB4J1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgICAgIHB4PScyMHB4JyBcbiAgICAgICAgICAgIHB5PScxNXB4J1xuICAgICAgICA+XG4gICAgICAgICAgICA8SGlnaGxpZ2h0VGV4dCB0ZXh0PScyOjU1IEFNJyBtYj17Mn0vPlxuICAgICAgICAgICAgPFJvb21OYW1lVGV4dCB0ZXh0PSdTYW1wbGUgUm9vbSBOYW1lIDEnIG1iPXsyfS8+XG4gICAgICAgICAgICA8Um9vbVVzZXJzQXZhdGFyR3JvdXAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGNvbWluZ1Jvb21DYXJkXG4iLCJpbXBvcnQge1xuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBVcGNvbWluZ1Jvb21DYXJkIGZyb20gJy4uL1VwY29taW5nUm9vbUNhcmQvVXBjb21pbmdSb29tQ2FyZCdcblxuZnVuY3Rpb24gVXBjb21pbmdSb29tc0xpc3QoeyByb29tcz1bJ3Jvb20xJywncm9vbTEnLCdyb29tMScsJ3Jvb20xJywncm9vbTEnXSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIFxuICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXG4gICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg9JzFweCcgXG4gICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPScxcHgnIFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgPlxuICAgICAgICAgICAge3Jvb21zLm1hcCgocm9vbSxpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFVwY29taW5nUm9vbUNhcmQgcm9vbT17cm9vbX0ga2V5PXtpfS8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwY29taW5nUm9vbXNMaXN0XG4iLCJpbXBvcnQge1xuICAgIEJveFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgVXBjb21pbmdSb29tc0xpc3QgZnJvbSAnLi4vVXBjb21pbmdSb29tc0xpc3QvVXBjb21pbmdSb29tc0xpc3QnXG5pbXBvcnQgQm9sZFRleHQgZnJvbSAnLi4vQm9sZFRleHQvQm9sZFRleHQnXG5cbmZ1bmN0aW9uIFVwY29taW5nUm9vbXNTZWN0aW9uKCkge1xuXG4gICAgY29uc3QgaGFuZGxlTG9hZFVwY29taW5nUm9vbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIGxpc3Qgb2YgdXBjb21pbmcgcm9vbXMhJylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IFxuICAgICAgICAgICAgcm91bmRlZD0nbGcnIFxuICAgICAgICAgICAgYmc9J2NsdWJob3VzZWdyZXkuMjAwJ1xuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIHJvdW5kZWRUb3A9J2xnJyBcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD0nMXB4J1xuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPSdjbHViaG91c2VncmV5LjQwMCcgXG4gICAgICAgICAgICAgICAgcD0nMjBweCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm9sZFRleHQgdGV4dD0nVXBjb21pbmcgcm9vbXMnIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxVcGNvbWluZ1Jvb21zTGlzdCAvPlxuICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICByb3VuZGVkQm90dG9tPSdsZycgXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9JzFweCcgXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgICAgICAgICBweD0nMjBweCcgXG4gICAgICAgICAgICAgICAgcHk9JzE1cHgnIFxuICAgICAgICAgICAgICAgIGJnPSdjbHViaG91c2VncmV5LjQwMCdcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgYmc6ICdjbHViaG91c2VncmV5LjYwMCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnY2x1YmhvdXNlZ3JleS42MDAnLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9hZFVwY29taW5nUm9vbXN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9J0V4cGxvcmUgbW9yZSByb29tcycgZm9udFNpemU9J21kJy8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGNvbWluZ1Jvb21zU2VjdGlvblxuIiwiaW1wb3J0IHtcbiAgICBUZXh0XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFVzZXJCaW9UZXh0KHsgYmlvVGV4dCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgZm9udFNpemU9JzE0cHgnIGlzVHJ1bmNhdGVkIG1heFdpZHRoPScyODVweCc+XG4gICAgICAgICAgICB7YmlvVGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckJpb1RleHRcbiIsImltcG9ydCB7XG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IFVzZXJGb2xsb3dlclRleHQgZnJvbSAnLi4vVXNlckZvbGxvd2VyVGV4dC9Vc2VyRm9sbG93ZXJUZXh0J1xuaW1wb3J0IFVzZXJGb2xsb3dpbmdUZXh0IGZyb20gJy4uL1VzZXJGb2xsb3dpbmdUZXh0L1VzZXJGb2xsb3dpbmdUZXh0J1xuXG5mdW5jdGlvbiBVc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0KHsgbnVtRm9sbG93ZXJzPTAsIG51bUZvbGxvd2luZz0wIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezV9IG1iPXs2fT5cbiAgICAgICAgICAgIDxVc2VyRm9sbG93ZXJUZXh0IG51bUZvbGxvd2Vycz17bnVtRm9sbG93ZXJzfS8+XG4gICAgICAgICAgICA8VXNlckZvbGxvd2luZ1RleHQgbnVtRm9sbG93aW5nPXtudW1Gb2xsb3dpbmd9Lz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJGb2xsb3dlckZvbGxvd2luZ1RleHRcbiIsImltcG9ydCB7XG4gICAgU3RhY2ssXG4gICAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBVc2VyRm9sbG93ZXJUZXh0KHsgbnVtRm9sbG93ZXJzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD0nZXh0cmFib2xkJyBmb250U2l6ZT0nMTRweCc+e251bUZvbGxvd2Vyc308L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nMTRweCc+Zm9sbG93ZXJzPC9UZXh0PlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckZvbGxvd2VyVGV4dFxuIiwiaW1wb3J0IHtcbiAgICBTdGFjayxcbiAgICBUZXh0XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFVzZXJGb2xsb3dpbmdUZXh0KHsgbnVtRm9sbG93aW5nIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD0nZXh0cmFib2xkJyBmb250U2l6ZT0nMTRweCc+e251bUZvbGxvd2luZ308L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nMTRweCc+Zm9sbG93ZXJzPC9UZXh0PlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckZvbGxvd2luZ1RleHRcbiIsImltcG9ydCB7IFxuICAgIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gVXNlck5hbWVUZXh0KHsgdGV4dCwgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9J2V4dHJhYm9sZCcgZm9udFNpemU9JzE0cHgnIHRleHRDb2xvcj0nY2x1YmhvdXNlZ3JleS45MDAnIHsuLi5wcm9wc30+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hbWVUZXh0XG4iLCJpbXBvcnQge1xuICAgIEJveCxcbiAgICBTdGFja1xufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgVXNlclByb2ZpbGVBdmF0YXIgZnJvbSAnLi4vVXNlclByb2ZpbGVBdmF0YXIvVXNlclByb2ZpbGVBdmF0YXInXG5pbXBvcnQgVXNlck5hbWVUZXh0IGZyb20gJy4uL1VzZXJOYW1lVGV4dC9Vc2VyTmFtZVRleHQnXG5pbXBvcnQgVXNlclVzZXJuYW1lVGV4dCBmcm9tICcuLi9Vc2VyVXNlcm5hbWVUZXh0L1VzZXJVc2VybmFtZVRleHQnXG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlKHsgbmFtZT0nUnlhbiBBaWRhbicsIHVzZXJuYW1lPSdhaWRhbmFkZW4nIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezR9IG1iPXs1fT5cbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZUF2YXRhciAvPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8VXNlck5hbWVUZXh0IHRleHQ9e3VzZXJuYW1lfS8+XG4gICAgICAgICAgICAgICAgPFVzZXJVc2VybmFtZVRleHQgdGV4dD17dXNlcm5hbWV9Lz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiIsImltcG9ydCB7XG4gICAgQXZhdGFyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlQXZhdGFyKHsgbmFtZSwgc3JjLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF2YXRhciBzaXplPSdsZycgbmFtZT17bmFtZX0gc3JjPXtzcmN9IHsuLi5wcm9wc30vPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVBdmF0YXJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgQm94XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xuaW1wb3J0IFVzZXJGb2xsb3dlckZvbGxvd2luZ1RleHQgZnJvbSAnLi4vVXNlckZvbGxvd2VyRm9sbG93aW5nVGV4dC9Vc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0J1xuaW1wb3J0IFVzZXJCaW9UZXh0IGZyb20gJy4uL1VzZXJCaW9UZXh0L1VzZXJCaW9UZXh0J1xuXG5mdW5jdGlvbiBVc2VyUHJvZmlsZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3VzZXJVc2VybmFtZSwgc2V0VXNlclVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtudW1Gb2xsb3dlcnMsIHNldE51bUZvbGxvd2Vyc10gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbnVtRm9sbG93aW5nLCBzZXROdW1Gb2xsb3dpbmddID0gdXNlU3RhdGUoJycpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgc2V0VXNlclVzZXJuYW1lKHVzZXIudXNlcm5hbWUpXG4gICAgICAgICAgICBzZXRVc2VyTmFtZSh1c2VyLm5hbWUpXG4gICAgICAgICAgICBzZXROdW1Gb2xsb3dlcnModXNlci5mb2xsb3dlcnMubGVuZ3RoKVxuICAgICAgICAgICAgc2V0TnVtRm9sbG93aW5nKHVzZXIuZm9sbG93aW5nLmxlbmd0aClcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcm91bmRlZD0nbGcnIHA9ezV9IGJnPSdjbHViaG91c2VncmV5LjIwMCc+XG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgXG4gICAgICAgICAgICAgICAgbmFtZT17dXNlck5hbWV9IFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VyVXNlcm5hbWV9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxVc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0IFxuICAgICAgICAgICAgICAgIG51bUZvbGxvd2Vycz17bnVtRm9sbG93ZXJzfSBcbiAgICAgICAgICAgICAgICBudW1Gb2xsb3dpbmc9e251bUZvbGxvd2luZ30gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFVzZXJCaW9UZXh0IC8+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVTZWN0aW9uXG4iLCJpbXBvcnQge1xuICAgIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gVXNlclVzZXJuYW1lVGV4dCh7IHRleHQsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdub3JtYWwnIGZvbnRTaXplPScxNHB4JyB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgQHt0ZXh0fVxuICAgICAgICA8L1RleHQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyVXNlcm5hbWVUZXh0XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9