(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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
}

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_fa_index_esm_js","vendors-node_modules_next_image_js","context_AuthContext_js","components_LoginBox_LoginBox_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0ZyaWVuZFByb2ZpbGUvRnJpZW5kUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0ZyaWVuZFByb2ZpbGVBdmF0YXIvRnJpZW5kUHJvZmlsZUF2YXRhci5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL0ZyaWVuZFByb2ZpbGVMaXN0L0ZyaWVuZFByb2ZpbGVMaXN0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvRnJpZW5kc0xpc3QvRnJpZW5kc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9IaWdobGlnaHRUZXh0L0hpZ2hsaWdodFRleHQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvTmV3Um9vbUZvcm0vTmV3Um9vbUZvcm0uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9OZXdSb29tTW9kYWxCdG4vTmV3Um9vbU1vZGFsQnRuLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvUHJvZmlsZVVwY29taW5nUm9vbXNTZWN0aW9uL1Byb2ZpbGVVcGNvbWluZ1Jvb21zU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1Jvb21CaW9JbnB1dC9Sb29tQmlvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tQ2FyZC9Sb29tQ2FyZC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1Jvb21MaXN0RmVlZC9Sb29tTGlzdEZlZWQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tTmFtZUlucHV0L1Jvb21OYW1lSW5wdXQuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tTmFtZVRleHQvUm9vbU5hbWVUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvUm9vbVR5cGVTZWxlY3QvUm9vbVR5cGVTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tVXNlcnNBdmF0YXJHcm91cC9Sb29tVXNlcnNBdmF0YXJHcm91cC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VwY29taW5nUm9vbUNhcmQvVXBjb21pbmdSb29tQ2FyZC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VwY29taW5nUm9vbXNMaXN0L1VwY29taW5nUm9vbXNMaXN0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXBjb21pbmdSb29tc1NlY3Rpb24vVXBjb21pbmdSb29tc1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Vc2VyQmlvVGV4dC9Vc2VyQmlvVGV4dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJGb2xsb3dlckZvbGxvd2luZ1RleHQvVXNlckZvbGxvd2VyRm9sbG93aW5nVGV4dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJGb2xsb3dlclRleHQvVXNlckZvbGxvd2VyVGV4dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJGb2xsb3dpbmdUZXh0L1VzZXJGb2xsb3dpbmdUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlck5hbWVUZXh0L1VzZXJOYW1lVGV4dC5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGVBdmF0YXIvVXNlclByb2ZpbGVBdmF0YXIuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZVNlY3Rpb24vVXNlclByb2ZpbGVTZWN0aW9uLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvVXNlclVzZXJuYW1lVGV4dC9Vc2VyVXNlcm5hbWVUZXh0LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJwaG9lbml4XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInl1cFwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInl1cC1wYXNzd29yZFwiIl0sIm5hbWVzIjpbIkZyaWVuZFByb2ZpbGUiLCJ1c2VyIiwiRnJpZW5kUHJvZmlsZUF2YXRhciIsIm5hbWUiLCJzdGF0dXMiLCJGcmllbmRQcm9maWxlTGlzdCIsInVzZXJzIiwibWFwIiwiaSIsIkZyaWVuZHNMaXN0IiwiSGlnaGxpZ2h0VGV4dCIsInRleHQiLCJwcm9wcyIsIk5hdmJhciIsIll1cCIsInJlcXVpcmUiLCJuZXdSb29tU2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJzdHJpbmciLCJyZXF1aXJlZCIsInR5cGUiLCJiaW8iLCJOZXdSb29tRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDbG9zZSIsImZpZWxkIiwiZm9ybSIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJOZXdSb29tTW9kYWxCdG4iLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlRGlzY2xvc3VyZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImhhbmRsZUNyZWF0ZU5ld1Jvb20iLCJ2YWx1ZXMiLCJhY3Rpb25zIiwiYm9keSIsInVzZXJfaWQiLCJpZCIsInJvb20iLCJudW1Vc2VycyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2FsbEFQSSIsInB1c2giLCJQcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb24iLCJSb29tQmlvSW5wdXQiLCJ2YWxpZCIsImNvbG9yIiwiUm9vbUNhcmQiLCJSb29tTGlzdEZlZWQiLCJyb29tcyIsIlJvb21OYW1lSW5wdXQiLCJSb29tTmFtZVRleHQiLCJSb29tVHlwZVNlbGVjdCIsIlJvb21Vc2Vyc0F2YXRhckdyb3VwIiwiVXBjb21pbmdSb29tQ2FyZCIsIlVwY29taW5nUm9vbXNMaXN0IiwiVXBjb21pbmdSb29tc1NlY3Rpb24iLCJoYW5kbGVMb2FkVXBjb21pbmdSb29tcyIsImJnIiwiYm9yZGVyQ29sb3IiLCJjdXJzb3IiLCJVc2VyQmlvVGV4dCIsImJpb1RleHQiLCJVc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0IiwibnVtRm9sbG93ZXJzIiwibnVtRm9sbG93aW5nIiwiVXNlckZvbGxvd2VyVGV4dCIsIlVzZXJGb2xsb3dpbmdUZXh0IiwiVXNlck5hbWVUZXh0IiwiVXNlclByb2ZpbGUiLCJ1c2VybmFtZSIsIlVzZXJQcm9maWxlQXZhdGFyIiwic3JjIiwiVXNlclByb2ZpbGVTZWN0aW9uIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInVzZVN0YXRlIiwidXNlclVzZXJuYW1lIiwic2V0VXNlclVzZXJuYW1lIiwic2V0TnVtRm9sbG93ZXJzIiwic2V0TnVtRm9sbG93aW5nIiwidXNlRWZmZWN0IiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwiZm9sbG93aW5nIiwiVXNlclVzZXJuYW1lVGV4dCIsIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUI7QUFBRUM7QUFBRixDQUF2QixFQUFpQztBQUM3QixzQkFDSSw4REFBQyxvREFBRDtBQUFRLGFB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OEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBCb3gsXG4gICAgSFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBVc2VyTmFtZVRleHQgZnJvbSAnLi4vVXNlck5hbWVUZXh0L1VzZXJOYW1lVGV4dCdcbmltcG9ydCBVc2VyVXNlcm5hbWVUZXh0IGZyb20gJy4uL1VzZXJVc2VybmFtZVRleHQvVXNlclVzZXJuYW1lVGV4dCdcbmltcG9ydCBGcmllbmRQcm9maWxlQXZhdGFyIGZyb20gJy4uL0ZyaWVuZFByb2ZpbGVBdmF0YXIvRnJpZW5kUHJvZmlsZUF2YXRhcidcblxuZnVuY3Rpb24gRnJpZW5kUHJvZmlsZSh7IHVzZXIgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxIU3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgPEZyaWVuZFByb2ZpbGVBdmF0YXIgLz5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPFVzZXJOYW1lVGV4dCB0ZXh0PSdIb2xvUGFuaW8nLz5cbiAgICAgICAgICAgICAgICA8VXNlclVzZXJuYW1lVGV4dCB0ZXh0PSdIb2xvUGFuaW8nLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0hTdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZFByb2ZpbGVcbiIsImltcG9ydCB7XG4gICAgQXZhdGFyLFxuICAgIEF2YXRhckJhZGdlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIEZyaWVuZFByb2ZpbGVBdmF0YXIoeyBuYW1lLCBzdGF0dXM9J29ubGluZSd9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF2YXRhciBuYW1lPXtuYW1lfSBzaXplPSdtZCc+XG4gICAgICAgICAgICA8QXZhdGFyQmFkZ2UgYm94U2l6ZT0nMS4yNWVtJyBiZz17c3RhdHVzID09ICdvbmxpbmUnID8gJ2dyZWVuLjUwMCcgOiAnY2x1YmhvdXNlb3JhbmdlLjYwMCd9Lz5cbiAgICAgICAgPC9BdmF0YXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRQcm9maWxlQXZhdGFyXG4iLCJpbXBvcnQge1xuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBGcmllbmRQcm9maWxlIGZyb20gJy4uL0ZyaWVuZFByb2ZpbGUvRnJpZW5kUHJvZmlsZSdcblxuZnVuY3Rpb24gRnJpZW5kUHJvZmlsZUxpc3QoeyB1c2VycyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPXs2fSBtdD17Nn0+XG4gICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyLGkpID0+IChcbiAgICAgICAgICAgICAgICA8RnJpZW5kUHJvZmlsZSB1c2VyPXt1c2VyfSBrZXk9e2l9Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kUHJvZmlsZUxpc3RcbiIsImltcG9ydCB7IFxuICAgIFN0YWNrIFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgQm9sZFRleHQgZnJvbSAnLi4vQm9sZFRleHQvQm9sZFRleHQnXG5pbXBvcnQgSGlnaGxpZ2h0VGV4dCBmcm9tICcuLi9IaWdobGlnaHRUZXh0L0hpZ2hsaWdodFRleHQnXG5pbXBvcnQgRnJpZW5kUHJvZmlsZUxpc3QgZnJvbSAnLi4vRnJpZW5kUHJvZmlsZUxpc3QvRnJpZW5kUHJvZmlsZUxpc3QnXG5cbmZ1bmN0aW9uIEZyaWVuZHNMaXN0KHsgdXNlcnM9Wyd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJ10gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249J2NvbHVtbicgbWluVz0nMjM1cHgnPlxuICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9J1Blb3BsZScgbWI9ezR9Lz5cbiAgICAgICAgICAgIDxIaWdobGlnaHRUZXh0IHRleHQ9J29ubGluZScgbWI9ezR9Lz5cbiAgICAgICAgICAgIDxGcmllbmRQcm9maWxlTGlzdCB1c2Vycz17dXNlcnN9IC8+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzTGlzdFxuIiwiaW1wb3J0IHtcbiAgICBUZXh0XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIEhpZ2hsaWdodFRleHQoeyB0ZXh0LCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgZm9udFdlaWdodD0nbWVkaXVtJyBmb250U2l6ZT0neHMnIHRleHRUcmFuc2Zvcm09J3VwcGVyY2FzZScgdGV4dENvbG9yPSdjbHViaG91c2VvcmFuZ2UuNTAwJyB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgIDwvVGV4dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodFRleHRcbiIsImltcG9ydCB7XG4gICAgRmxleCwgXG4gICAgSWNvbkJ1dHRvbixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEZsZXggcHg9ezR9IHB5PXs0fSBqdXN0aWZ5Q29udGVudD17J2NlbnRlcid9IG1iPXs0fT5cbiAgICAgICAgICAgICAgICA8RmxleCBoPXsyMH0gYWxpZ25JdGVtcz17J2NlbnRlcid9IGp1c3RpZnlDb250ZW50PXsnc3BhY2UtYmV0d2Vlbid9IHc9XCIxMzIwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nLycgXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0nLycgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIHNyYz0nL2xvZ28tZnVsbC5zdmcnIHdpZHRoPScxOTInIGhlaWdodD0nMzInLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxGbGV4IGFsaWduSXRlbXM9eydjZW50ZXInfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogaWYgbG9nZ2VkIGluLCBzaG93IHBhc3Qgb3JkZXJzLCBjYXJ0ICsgdXNlciBpY29uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHVzZXIgPyAoIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBhbGlnbkl0ZW1zPSdjZW50ZXInIHNwYWNpbmc9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQ2FydE1vZGFsQnRuIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJVc2VySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+ICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgc2hvdyBsb2dpbi9zaWduIHVwIGJ1dHRvbiBncm91cCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc3BhY2luZz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbk1vZGFsQnRuIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWdudXBNb2RhbEJ0biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L0ZsZXg+ICovfVxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgIHsvKiB7aXNPcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBhcz17J25hdid9IHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtMaW5rcy5tYXAoKGxpbmssaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2l9PntsaW5rfTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfSAqL31cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcblxuXG4vLyBNWVBFVFNcblxuLy8gaW1wb3J0IHtcbi8vICAgICBCb3gsXG4vLyAgICAgRGl2aWRlcixcbi8vICAgICBGbGV4LFxuLy8gICAgIFRleHQsXG4vLyAgICAgSWNvbkJ1dHRvbixcbi8vICAgICBCdXR0b24sXG4vLyAgICAgQnV0dG9uR3JvdXAsXG4vLyAgICAgU3RhY2ssXG4vLyAgICAgQ29sbGFwc2UsXG4vLyAgICAgSWNvbixcbi8vICAgICBMaW5rLFxuLy8gICAgIFBvcG92ZXIsXG4vLyAgICAgUG9wb3ZlclRyaWdnZXIsXG4vLyAgICAgUG9wb3ZlckNvbnRlbnQsXG4vLyAgICAgdXNlQ29sb3JNb2RlVmFsdWUsXG4vLyAgICAgdXNlQnJlYWtwb2ludFZhbHVlLFxuLy8gICAgIHVzZURpc2Nsb3N1cmUsXG4vLyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuLy8gaW1wb3J0IHtcbi8vICAgICBIYW1idXJnZXJJY29uLFxuLy8gICAgIENsb3NlSWNvbixcbi8vICAgICBDaGV2cm9uRG93bkljb24sXG4vLyAgICAgQ2hldnJvblJpZ2h0SWNvbixcbi8vIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG4vLyBpbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBpbXBvcnQgTG9naW5Nb2RhbEJ0biBmcm9tICcuLi9Mb2dpbk1vZGFsQnRuL0xvZ2luTW9kYWxCdG4nO1xuLy8gaW1wb3J0IFNpZ251cE1vZGFsQnRuIGZyb20gJy4uL1NpZ251cE1vZGFsQnRuL1NpZ251cE1vZGFsQnRuJztcbi8vIGltcG9ydCBTZWFyY2hiYXJHcm91cCBmcm9tICcuLi9TZWFyY2hiYXJHcm91cC9TZWFyY2hiYXJHcm91cCdcbi8vIGltcG9ydCBOYXZiYXJDYXJ0TW9kYWxCdG4gZnJvbSAnLi4vTmF2YmFyQ2FydE1vZGFsQnRuL05hdmJhckNhcnRNb2RhbEJ0bic7XG4vLyBpbXBvcnQgTmF2YmFyVXNlckljb24gZnJvbSAnLi4vTmF2YmFyVXNlckljb24vTmF2YmFyVXNlckljb24nO1xuLy8gaW1wb3J0IE5hdmJhclVzZXJNb2RhbEJ0biBmcm9tICcuLi9OYXZiYXJVc2VyTW9kYWxCdG4vTmF2YmFyVXNlck1vZGFsQnRuJztcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgdXNlcj10cnVlIH0pIHtcbi8vICAgICBjb25zdCB7IGlzT3Blbiwgb25Ub2dnbGUgfSA9IHVzZURpc2Nsb3N1cmUoKTtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxCb3g+XG4vLyAgICAgICAgICAgICA8RmxleFxuLy8gICAgICAgICAgICAgICAgIGJnPSd3aGl0ZSdcbi8vICAgICAgICAgICAgICAgICBjb2xvcj0nZ3JheS42MDAnXG4vLyAgICAgICAgICAgICAgICAgcHk9e3sgYmFzZTogNCB9fVxuLy8gICAgICAgICAgICAgICAgIHB4PXt7IGJhc2U6IDIgfX1cbi8vICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b209ezF9XG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU9eydzb2xpZCd9XG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9J2dyYXkuMjAwJ1xuLy8gICAgICAgICAgICAgICAgIGFsaWduPXsnY2VudGVyJ31cbi8vICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD0nY2VudGVyJ1xuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgIDxGbGV4XG4vLyAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9eydjZW50ZXInfSBcbi8vICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9eydzcGFjZS1iZXR3ZWVuJ30gXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heFc9e3sgbGc6ICcxMjAwcHgnIH19XG4vLyAgICAgICAgICAgICAgICAgICAgIHc9JzEwMCUnXG4vLyAgICAgICAgICAgICAgICAgICAgIHB4PXs0fVxuLy8gICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg9e3sgYmFzZTogMSwgbGc6ICdhdXRvJyB9fVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnZmxleCcsIGxnOiAnbm9uZScgfX1cbi8vICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuID8gPENsb3NlSWNvbiB3PXszfSBoPXszfSAvPiA6IDxIYW1idXJnZXJJY29uIHc9ezV9IGg9ezV9IC8+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9eydnaG9zdCd9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17J1RvZ2dsZSBOYXZpZ2F0aW9uJ31cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIGxnOiAnYmxvY2snfX0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nLycgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9Jy8nIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvY3JvcHBlZC1sb2dvLnN2Zycgd2lkdGg9JzEyNScgaGVpZ2h0PSc1MicgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuLy8gICAgICAgICAgICAgICAgICAgICA8U2VhcmNoYmFyR3JvdXAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIGxnOiAnaW5oZXJpdCcgfX0vPlxuXG4vLyAgICAgICAgICAgICAgICAgICAgIHsgdXNlciA/ICggXG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBhbGlnbkl0ZW1zPSdjZW50ZXInIHNwYWNpbmc9ezZ9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhckNhcnRNb2RhbEJ0biAvPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhclVzZXJJY29uIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+ICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgKSA6IChcbi8vICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNwYWNpbmc9ezR9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luTW9kYWxCdG4gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWdudXBNb2RhbEJ0biAvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuLy8gICAgICAgICAgICAgICAgICAgICApfVxuLy8gICAgICAgICAgICAgICAgIDwvRmxleD5cbi8vICAgICAgICAgICAgIDwvRmxleD5cblxuLy8gICAgICAgICAgICAgPENvbGxhcHNlIGluPXtpc09wZW59IGFuaW1hdGVPcGFjaXR5PlxuLy8gICAgICAgICAgICAgICAgIDxNb2JpbGVOYXYgLz5cbi8vICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICk7XG4vLyB9XG5cbi8vIGNvbnN0IE1vYmlsZU5hdiA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8Qm94XG4vLyAgICAgICAgICAgICBiZz0nd2hpdGUnXG4vLyAgICAgICAgICAgICBwPXs0fVxuLy8gICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnaW5oZXJpdCcsIGxnOiAnbm9uZScgfX1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PlxuLy8gICAgICAgICAgICAgICAgIDxTZWFyY2hiYXJHcm91cCBkaXNwbGF5PXt7IGJhc2U6ICdpbmhlcml0JywgbGc6ICdub25lJyB9fS8+XG4vLyAgICAgICAgICAgICAgICAgPERpdmlkZXIvPlxuLy8gICAgICAgICAgICAgICAgIDxOYXZiYXJVc2VyTW9kYWxCdG4gbW9kZT0nbW9iaWxlJyAvPlxuLy8gICAgICAgICAgICAgICAgIDxCb3ggcHg9ezJ9PlxuLy8gICAgICAgICAgICAgICAgICAgICBQYXN0IG9yZGVyc1xuLy8gICAgICAgICAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICAgICAgICAgIDxEaXZpZGVyLz5cbi8vICAgICAgICAgICAgICAgICA8Qm94IHB4PXsyfT5cbi8vICAgICAgICAgICAgICAgICAgICAgTG9nIG91dCBcbi8vICAgICAgICAgICAgICAgICA8L0JveD5cbi8vICAgICAgICAgICAgIDwvU3RhY2s+XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICk7XG4vLyB9OyIsImltcG9ydCB7XG4gICAgQm94LFxuICAgIFN0YWNrLFxuICAgIEZvcm1Db250cm9sLFxuICAgIEZvcm1FcnJvck1lc3NhZ2UsXG4gICAgQnV0dG9uR3JvdXBcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFxuICAgIEZvcm1paywgXG4gICAgRm9ybSwgXG4gICAgRmllbGQgXG59IGZyb20gJ2Zvcm1paydcbmNvbnN0IFl1cCA9IHJlcXVpcmUoJ3l1cCcpXG5cbmltcG9ydCBSb29tTmFtZUlucHV0IGZyb20gJy4uL1Jvb21OYW1lSW5wdXQvUm9vbU5hbWVJbnB1dCdcbmltcG9ydCBSb29tVHlwZVNlbGVjdCBmcm9tICcuLi9Sb29tVHlwZVNlbGVjdC9Sb29tVHlwZVNlbGVjdCdcbmltcG9ydCBDbHViaG91c2VCdG4gZnJvbSAnLi4vQ2x1YmhvdXNlQnRuL0NsdWJob3VzZUJ0bidcbmltcG9ydCBSb29tQmlvSW5wdXQgZnJvbSAnLi4vUm9vbUJpb0lucHV0L1Jvb21CaW9JbnB1dCdcblxuY29uc3QgbmV3Um9vbVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgbmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdSb29tIG5hbWUgaXMgcmVxdWlyZWQnKSxcbiAgICB0eXBlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1Jvb20gdHlwZSBpcyByZXF1aXJlZCcpLFxuICAgIGJpbzogWXVwLnN0cmluZygpLFxufSlcblxuZnVuY3Rpb24gTmV3Um9vbUZvcm0oeyBpbml0aWFsVmFsdWVzLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUNsb3NlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemUgIFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtuZXdSb29tU2NoZW1hfVxuICAgICAgICA+XG4gICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249J3Jvdycgc3BhY2luZz0nMjBweCcgbWI9JzIwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nbmFtZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5uYW1lICYmIGZvcm0udG91Y2hlZC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbU5hbWVJbnB1dCBmaWVsZD17ZmllbGR9IHZhbGlkPXshZm9ybS5lcnJvcnMubmFtZSAmJiBmb3JtLnRvdWNoZWQubmFtZX0gdz0nMjkzcHgnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMubmFtZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggdz0nMTAwJSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3R5cGUnID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzLnR5cGUgJiYgZm9ybS50b3VjaGVkLnR5cGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tVHlwZVNlbGVjdCBmaWVsZD17ZmllbGR9IHZhbGlkPXshZm9ybS5lcnJvcnMudHlwZSAmJiBmb3JtLnRvdWNoZWQudHlwZX0gdz0nMTAwJScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy50eXBlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHc9JzEwMCUnIGg9Jzg4cHgnIG1iPSczMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdiaW8nID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5iaW8gJiYgZm9ybS50b3VjaGVkLmJpb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbUJpb0lucHV0IGZpZWxkPXtmaWVsZH0gdmFsaWQ9eyFmb3JtLmVycm9ycy5iaW8gJiYgZm9ybS50b3VjaGVkLmJpb30gdz0nMTAwJScgaD0nMTAwJScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLmJpb308L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc3BhY2luZz0nMzBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2x1YmhvdXNlQnRuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3ByaW1hcnknIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9J05ldyByb29tJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17cHJvcHMuaXNTdWJtaXR0aW5nfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENsdWJob3VzZUJ0biBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdsaW5rJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PSdDYW5jZWwnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Jvb21Gb3JtXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFRleHQsXG4gICAgTW9kYWwsXG4gICAgTW9kYWxPdmVybGF5LFxuICAgIE1vZGFsQ29udGVudCxcbiAgICBNb2RhbEhlYWRlcixcbiAgICBNb2RhbEJvZHksXG4gICAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgICB1c2VEaXNjbG9zdXJlXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBjYWxsQVBJIH0gZnJvbSAnLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IENsdWJob3VzZUJ0biBmcm9tICcuLi9DbHViaG91c2VCdG4vQ2x1YmhvdXNlQnRuJ1xuaW1wb3J0IEJvbGRUZXh0IGZyb20gXCIuLi9Cb2xkVGV4dC9Cb2xkVGV4dFwiXG5pbXBvcnQgTmV3Um9vbUZvcm0gZnJvbSAnLi4vTmV3Um9vbUZvcm0vTmV3Um9vbUZvcm0nXG5cbmZ1bmN0aW9uIE5ld1Jvb21Nb2RhbEJ0bigpIHtcbiAgICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgdHlwZTogJ3B1YmxpYycsXG4gICAgICAgIGJpbzogJydcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlTmV3Um9vbSA9IGFzeW5jICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICAgICAgZGVsZXRlIHZhbHVlcy5iaW9cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICByb29tOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgICAgICAgICAgbnVtVXNlcnM6IDAsXG4gICAgICAgICAgICAgICAgdHlwZTogdmFsdWVzLnR5cGUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIHJvb20gd2l0aCBib2R5OiAnLCBib2R5KVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbEFQSSgnL3Jvb21zL2NyZWF0ZScsICdQT1NUJywgYm9keSlcbiAgICAgICAgY29uc3Qgcm9vbSA9IGRhdGEuZGF0YVxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBhZnRlciBjcmVhdGluZyByb29tOiAnLCBkYXRhKVxuICAgICAgICByb3V0ZXIucHVzaChgL3Jvb20vJHtyb29tLmlkfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gXG4gICAgICAgICAgICA8Q2x1YmhvdXNlQnRuIHZhcmlhbnQ9J3ByaW1hcnknIHRleHQ9J05ldyByb29tJyBvbkNsaWNrPXtvbk9wZW59Lz5cbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gaXNDZW50ZXJlZCBzaXplPSdsZyc+XG4gICAgICAgICAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQgYmc9J2NsdWJob3VzZWdyZXkuMjAwJyBwPScyMHB4JyByb3VuZGVkPSdsZyc+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj48Qm9sZFRleHQgdGV4dD0nTmV3IHJvb20nLz48L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbWI9JzIwcHgnPkZpbGwgdGhlIGZvbGxvd2luZyBmaWVsZHMgdG8gc3RhcnQgYSBuZXcgcm9vbTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdSb29tRm9ybSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZUNyZWF0ZU5ld1Jvb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3Um9vbU1vZGFsQnRuXG4iLCJpbXBvcnQge1xuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBVcGNvbWluZ1Jvb21zU2VjdGlvbiBmcm9tICcuLi9VcGNvbWluZ1Jvb21zU2VjdGlvbi9VcGNvbWluZ1Jvb21zU2VjdGlvbidcbmltcG9ydCBVc2VyUHJvZmlsZVNlY3Rpb24gZnJvbSAnLi4vVXNlclByb2ZpbGVTZWN0aW9uL1VzZXJQcm9maWxlU2VjdGlvbidcblxuZnVuY3Rpb24gUHJvZmlsZVVwY29taW5nUm9vbXNTZWN0aW9uKHsuLi5wcm9wc30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdjb2x1bW4nIHNwYWNpbmc9JzMwcHgnIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8VXNlclByb2ZpbGVTZWN0aW9uIC8+XG4gICAgICAgICAgICA8VXBjb21pbmdSb29tc1NlY3Rpb24gLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVVcGNvbWluZ1Jvb21zU2VjdGlvblxuIiwiaW1wb3J0IHtcbiAgICBUZXh0YXJlYVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBSb29tQmlvSW5wdXQoeyBmaWVsZCwgdmFsaWQsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dGFyZWEgXG4gICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICBpZD0nYmlvJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Jvb20gYmlvJ1xuICAgICAgICAgICAgX3BsYWNlaG9sZGVyPXt7IGNvbG9yOiAnY2x1YmhvdXNlZ3JleS42MDAnIH19XG4gICAgICAgICAgICBjb2xvclNjaGVtZT0nY2x1YmhvdXNlZ3JleSdcbiAgICAgICAgICAgIGJnPSdjbHViaG91c2VncmV5LjQwMCdcbiAgICAgICAgICAgIGZvY3VzQm9yZGVyQ29sb3I9J2NsdWJob3VzZW9yYW5nZS41MDAnXG4gICAgICAgICAgICByb3VuZGVkPSdsZydcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21CaW9JbnB1dFxuIiwiaW1wb3J0IHtcbiAgICBCb3hcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gUm9vbUNhcmQoeyByb29tIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHJvdW5kZWQ9J2xnJyB3PSc2NDBweCcgaD0nMTEycHgnIGJnQ29sb3I9J2NsdWJob3VzZWdyZXkuMjAwJz5cblxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21DYXJkXG4iLCJpbXBvcnQgeyBcbiAgICBTdGFjayxcbiAgICBWU3RhY2ssXG4gICAgU3BhY2VyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBSb29tQ2FyZCBmcm9tICcuLi9Sb29tQ2FyZC9Sb29tQ2FyZCdcbmltcG9ydCBOZXdSb29tTW9kYWxCdG4gZnJvbSAnLi4vTmV3Um9vbU1vZGFsQnRuL05ld1Jvb21Nb2RhbEJ0bidcbmltcG9ydCBCb2xkVGV4dCBmcm9tICcuLi9Cb2xkVGV4dC9Cb2xkVGV4dCdcblxuZnVuY3Rpb24gUm9vbUxpc3RGZWVkKHsgcm9vbXM9Wydyb29tMScsICdyb29tMScsICdyb29tMScsICdyb29tMScsICdyb29tMSddIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VlN0YWNrIHc9JzEwMCUnPlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0ncm93JyBtYj0nMzBweCcgdz0nMTAwJSc+XG4gICAgICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9J1lvdXIgZmVlZCcvPlxuICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgICAgICA8TmV3Um9vbU1vZGFsQnRuIC8+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPFZTdGFjayBzcGFjaW5nPScyMHB4Jz5cbiAgICAgICAgICAgICAgICB7cm9vbXMubWFwKChyb29tLGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJvb21DYXJkIGtleT17aX0gcm9vbT17cm9vbX0vPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbUxpc3RGZWVkXG4iLCJpbXBvcnQge1xuICAgIElucHV0XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFJvb21OYW1lSW5wdXQoeyBmaWVsZCwgdmFsaWQsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdSb29tIG5hbWUnIFxuICAgICAgICAgICAgX3BsYWNlaG9sZGVyPXt7IGNvbG9yOiAnY2x1YmhvdXNlZ3JleS42MDAnIH19XG4gICAgICAgICAgICBjb2xvclNjaGVtZT0nY2x1YmhvdXNlZ3JleSdcbiAgICAgICAgICAgIGJnPSdjbHViaG91c2VncmV5LjQwMCdcbiAgICAgICAgICAgIGZvY3VzQm9yZGVyQ29sb3I9J2NsdWJob3VzZW9yYW5nZS41MDAnXG4gICAgICAgICAgICByb3VuZGVkPSdsZydcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21OYW1lSW5wdXRcbiIsImltcG9ydCB7XG4gICAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBSb29tTmFtZVRleHQoeyB0ZXh0LCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9J21kJyB0ZXh0Q29sb3I9J2NsdWJob3VzZWJsdWUuOTAwJyB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgIDwvVGV4dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21OYW1lVGV4dFxuIiwiaW1wb3J0IHtcbiAgICBTZWxlY3Rcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gUm9vbVR5cGVTZWxlY3QoeyBmaWVsZCwgdmFsaWQsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgaWQ9J3R5cGUnXG4gICAgICAgICAgICBjb2xvclNjaGVtZT0nY2x1YmhvdXNlZ3JleSdcbiAgICAgICAgICAgIGJnPSdjbHViaG91c2VncmV5LjQwMCdcbiAgICAgICAgICAgIGZvY3VzQm9yZGVyQ29sb3I9J2NsdWJob3VzZW9yYW5nZS41MDAnXG4gICAgICAgICAgICByb3VuZGVkPSdsZydcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUHVibGljJz5QdWJsaWM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1ByaXZhdGUnPlByaXZhdGU8L29wdGlvbj5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb29tVHlwZVNlbGVjdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBSb29tVXNlcnNBdmF0YXJHcm91cCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbVVzZXJzQXZhdGFyR3JvdXBcbiIsImltcG9ydCB7XG4gICAgQm94XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBIaWdobGlnaHRUZXh0IGZyb20gJy4uL0hpZ2hsaWdodFRleHQvSGlnaGxpZ2h0VGV4dCdcbmltcG9ydCBSb29tTmFtZVRleHQgZnJvbSAnLi4vUm9vbU5hbWVUZXh0L1Jvb21OYW1lVGV4dCdcbmltcG9ydCBSb29tVXNlcnNBdmF0YXJHcm91cCBmcm9tICcuLi9Sb29tVXNlcnNBdmF0YXJHcm91cC9Sb29tVXNlcnNBdmF0YXJHcm91cCdcblxuZnVuY3Rpb24gVXBjb21pbmdSb29tQ2FyZCh7IHJvb20gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aD0nMXB4J1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgICAgIHB4PScyMHB4JyBcbiAgICAgICAgICAgIHB5PScxNXB4J1xuICAgICAgICA+XG4gICAgICAgICAgICA8SGlnaGxpZ2h0VGV4dCB0ZXh0PScyOjU1IEFNJyBtYj17Mn0vPlxuICAgICAgICAgICAgPFJvb21OYW1lVGV4dCB0ZXh0PSdTYW1wbGUgUm9vbSBOYW1lIDEnIG1iPXsyfS8+XG4gICAgICAgICAgICA8Um9vbVVzZXJzQXZhdGFyR3JvdXAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGNvbWluZ1Jvb21DYXJkXG4iLCJpbXBvcnQge1xuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBVcGNvbWluZ1Jvb21DYXJkIGZyb20gJy4uL1VwY29taW5nUm9vbUNhcmQvVXBjb21pbmdSb29tQ2FyZCdcblxuZnVuY3Rpb24gVXBjb21pbmdSb29tc0xpc3QoeyByb29tcz1bJ3Jvb20xJywncm9vbTEnLCdyb29tMScsJ3Jvb20xJywncm9vbTEnXSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YWNrIFxuICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXG4gICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg9JzFweCcgXG4gICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPScxcHgnIFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgPlxuICAgICAgICAgICAge3Jvb21zLm1hcCgocm9vbSxpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFVwY29taW5nUm9vbUNhcmQgcm9vbT17cm9vbX0ga2V5PXtpfS8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwY29taW5nUm9vbXNMaXN0XG4iLCJpbXBvcnQge1xuICAgIEJveFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgVXBjb21pbmdSb29tc0xpc3QgZnJvbSAnLi4vVXBjb21pbmdSb29tc0xpc3QvVXBjb21pbmdSb29tc0xpc3QnXG5pbXBvcnQgQm9sZFRleHQgZnJvbSAnLi4vQm9sZFRleHQvQm9sZFRleHQnXG5cbmZ1bmN0aW9uIFVwY29taW5nUm9vbXNTZWN0aW9uKCkge1xuXG4gICAgY29uc3QgaGFuZGxlTG9hZFVwY29taW5nUm9vbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIGxpc3Qgb2YgdXBjb21pbmcgcm9vbXMhJylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IFxuICAgICAgICAgICAgcm91bmRlZD0nbGcnIFxuICAgICAgICAgICAgYmc9J2NsdWJob3VzZWdyZXkuMjAwJ1xuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIHJvdW5kZWRUb3A9J2xnJyBcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD0nMXB4J1xuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPSdjbHViaG91c2VncmV5LjQwMCcgXG4gICAgICAgICAgICAgICAgcD0nMjBweCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm9sZFRleHQgdGV4dD0nVXBjb21pbmcgcm9vbXMnIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxVcGNvbWluZ1Jvb21zTGlzdCAvPlxuICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICByb3VuZGVkQm90dG9tPSdsZycgXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9JzFweCcgXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgICAgICAgICBweD0nMjBweCcgXG4gICAgICAgICAgICAgICAgcHk9JzE1cHgnIFxuICAgICAgICAgICAgICAgIGJnPSdjbHViaG91c2VncmV5LjQwMCdcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgYmc6ICdjbHViaG91c2VncmV5LjYwMCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnY2x1YmhvdXNlZ3JleS42MDAnLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9hZFVwY29taW5nUm9vbXN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJvbGRUZXh0IHRleHQ9J0V4cGxvcmUgbW9yZSByb29tcycgZm9udFNpemU9J21kJy8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGNvbWluZ1Jvb21zU2VjdGlvblxuIiwiaW1wb3J0IHtcbiAgICBUZXh0XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFVzZXJCaW9UZXh0KHsgYmlvVGV4dCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgZm9udFNpemU9JzE0cHgnIGlzVHJ1bmNhdGVkIG1heFdpZHRoPScyODVweCc+XG4gICAgICAgICAgICB7YmlvVGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckJpb1RleHRcbiIsImltcG9ydCB7XG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IFVzZXJGb2xsb3dlclRleHQgZnJvbSAnLi4vVXNlckZvbGxvd2VyVGV4dC9Vc2VyRm9sbG93ZXJUZXh0J1xuaW1wb3J0IFVzZXJGb2xsb3dpbmdUZXh0IGZyb20gJy4uL1VzZXJGb2xsb3dpbmdUZXh0L1VzZXJGb2xsb3dpbmdUZXh0J1xuXG5mdW5jdGlvbiBVc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0KHsgbnVtRm9sbG93ZXJzPTAsIG51bUZvbGxvd2luZz0wIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezV9IG1iPXs2fT5cbiAgICAgICAgICAgIDxVc2VyRm9sbG93ZXJUZXh0IG51bUZvbGxvd2Vycz17bnVtRm9sbG93ZXJzfS8+XG4gICAgICAgICAgICA8VXNlckZvbGxvd2luZ1RleHQgbnVtRm9sbG93aW5nPXtudW1Gb2xsb3dpbmd9Lz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJGb2xsb3dlckZvbGxvd2luZ1RleHRcbiIsImltcG9ydCB7XG4gICAgU3RhY2ssXG4gICAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBVc2VyRm9sbG93ZXJUZXh0KHsgbnVtRm9sbG93ZXJzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD0nZXh0cmFib2xkJyBmb250U2l6ZT0nMTRweCc+e251bUZvbGxvd2Vyc308L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nMTRweCc+Zm9sbG93ZXJzPC9UZXh0PlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckZvbGxvd2VyVGV4dFxuIiwiaW1wb3J0IHtcbiAgICBTdGFjayxcbiAgICBUZXh0XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFVzZXJGb2xsb3dpbmdUZXh0KHsgbnVtRm9sbG93aW5nIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD0nZXh0cmFib2xkJyBmb250U2l6ZT0nMTRweCc+e251bUZvbGxvd2luZ308L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nMTRweCc+Zm9sbG93ZXJzPC9UZXh0PlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckZvbGxvd2luZ1RleHRcbiIsImltcG9ydCB7IFxuICAgIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gVXNlck5hbWVUZXh0KHsgdGV4dCwgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9J2V4dHJhYm9sZCcgZm9udFNpemU9JzE0cHgnIHRleHRDb2xvcj0nY2x1YmhvdXNlZ3JleS45MDAnIHsuLi5wcm9wc30+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hbWVUZXh0XG4iLCJpbXBvcnQge1xuICAgIEJveCxcbiAgICBTdGFja1xufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgVXNlclByb2ZpbGVBdmF0YXIgZnJvbSAnLi4vVXNlclByb2ZpbGVBdmF0YXIvVXNlclByb2ZpbGVBdmF0YXInXG5pbXBvcnQgVXNlck5hbWVUZXh0IGZyb20gJy4uL1VzZXJOYW1lVGV4dC9Vc2VyTmFtZVRleHQnXG5pbXBvcnQgVXNlclVzZXJuYW1lVGV4dCBmcm9tICcuLi9Vc2VyVXNlcm5hbWVUZXh0L1VzZXJVc2VybmFtZVRleHQnXG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlKHsgbmFtZT0nUnlhbiBBaWRhbicsIHVzZXJuYW1lPSdhaWRhbmFkZW4nIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezR9IG1iPXs1fT5cbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZUF2YXRhciAvPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8VXNlck5hbWVUZXh0IHRleHQ9e3VzZXJuYW1lfS8+XG4gICAgICAgICAgICAgICAgPFVzZXJVc2VybmFtZVRleHQgdGV4dD17dXNlcm5hbWV9Lz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiIsImltcG9ydCB7XG4gICAgQXZhdGFyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlQXZhdGFyKHsgbmFtZSwgc3JjLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF2YXRhciBzaXplPSdsZycgbmFtZT17bmFtZX0gc3JjPXtzcmN9IHsuLi5wcm9wc30vPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVBdmF0YXJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgQm94XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xuaW1wb3J0IFVzZXJGb2xsb3dlckZvbGxvd2luZ1RleHQgZnJvbSAnLi4vVXNlckZvbGxvd2VyRm9sbG93aW5nVGV4dC9Vc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0J1xuaW1wb3J0IFVzZXJCaW9UZXh0IGZyb20gJy4uL1VzZXJCaW9UZXh0L1VzZXJCaW9UZXh0J1xuXG5mdW5jdGlvbiBVc2VyUHJvZmlsZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3VzZXJVc2VybmFtZSwgc2V0VXNlclVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtudW1Gb2xsb3dlcnMsIHNldE51bUZvbGxvd2Vyc10gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbnVtRm9sbG93aW5nLCBzZXROdW1Gb2xsb3dpbmddID0gdXNlU3RhdGUoJycpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgc2V0VXNlclVzZXJuYW1lKHVzZXIudXNlcm5hbWUpXG4gICAgICAgICAgICBzZXRVc2VyTmFtZSh1c2VyLm5hbWUpXG4gICAgICAgICAgICBzZXROdW1Gb2xsb3dlcnModXNlci5mb2xsb3dlcnMubGVuZ3RoKVxuICAgICAgICAgICAgc2V0TnVtRm9sbG93aW5nKHVzZXIuZm9sbG93aW5nLmxlbmd0aClcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcm91bmRlZD0nbGcnIHA9ezV9IGJnPSdjbHViaG91c2VncmV5LjIwMCc+XG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgXG4gICAgICAgICAgICAgICAgbmFtZT17dXNlck5hbWV9IFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VyVXNlcm5hbWV9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxVc2VyRm9sbG93ZXJGb2xsb3dpbmdUZXh0IFxuICAgICAgICAgICAgICAgIG51bUZvbGxvd2Vycz17bnVtRm9sbG93ZXJzfSBcbiAgICAgICAgICAgICAgICBudW1Gb2xsb3dpbmc9e251bUZvbGxvd2luZ30gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFVzZXJCaW9UZXh0IC8+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVTZWN0aW9uXG4iLCJpbXBvcnQge1xuICAgIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZnVuY3Rpb24gVXNlclVzZXJuYW1lVGV4dCh7IHRleHQsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdub3JtYWwnIGZvbnRTaXplPScxNHB4JyB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgQHt0ZXh0fVxuICAgICAgICA8L1RleHQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyVXNlcm5hbWVUZXh0XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge1xuICAgIENlbnRlcixcbiAgICBDb250YWluZXIsXG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgTG9naW5Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkJveC9Mb2dpbkJveCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJ1xuaW1wb3J0IEZyaWVuZHNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRnJpZW5kc0xpc3QvRnJpZW5kc0xpc3QnXG5pbXBvcnQgUm9vbUxpc3RGZWVkIGZyb20gJy4uL2NvbXBvbmVudHMvUm9vbUxpc3RGZWVkL1Jvb21MaXN0RmVlZCdcbmltcG9ydCBQcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb24vUHJvZmlsZVVwY29taW5nUm9vbXNTZWN0aW9uJ1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBub3QgbG9nZ2VkIGluJylcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICB9XG4gICAgfSwgW3VzZXJdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFc9JzEzMjBweCcgdz0nMTAwJScgbWI9ezZ9IGNlbnRlckNvbnRlbnQgcD17MH0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0ncm93JyB3PScxMDAlJyBzcGFjaW5nPSc2MHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgPEZyaWVuZHNMaXN0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb29tTGlzdEZlZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVVcGNvbWluZ1Jvb21zU2VjdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvaWNvbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGhvZW5peFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwLXBhc3N3b3JkXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9