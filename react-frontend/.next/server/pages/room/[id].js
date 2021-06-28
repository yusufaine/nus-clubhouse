(function() {
var exports = {};
exports.id = "pages/room/[id]";
exports.ids = ["pages/room/[id]"];
exports.modules = {

/***/ "./components/RoomButtonsSection/RoomButtonsSection.js":
/*!*************************************************************!*\
  !*** ./components/RoomButtonsSection/RoomButtonsSection.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomButtonsSection/RoomButtonsSection.js";


function RoomButtonsSection() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomButtonsSection);

/***/ }),

/***/ "./components/RoomNameSection/RoomNameSection.js":
/*!*******************************************************!*\
  !*** ./components/RoomNameSection/RoomNameSection.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomNameSection/RoomNameSection.js";



function RoomNameSection({
  roomName = 'Sample room 1',
  creatorName = 'Sample user 1'
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    roundedTop: "lg",
    px: 5,
    py: 6,
    borderBottomWidth: "1px",
    borderColor: "clubhousegrey.400",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__.default, {
      text: roomName,
      mb: 4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      direction: "row",
      alignItems: "baseline",
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontSize: "md",
        children: "with"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: creatorName,
        fontSize: "md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
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

/* harmony default export */ __webpack_exports__["default"] = (RoomNameSection);

/***/ }),

/***/ "./components/RoomSection/RoomSection.js":
/*!***********************************************!*\
  !*** ./components/RoomSection/RoomSection.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RoomNameSection_RoomNameSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoomNameSection/RoomNameSection */ "./components/RoomNameSection/RoomNameSection.js");
/* harmony import */ var _RoomUsersSection_RoomUsersSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RoomUsersSection/RoomUsersSection */ "./components/RoomUsersSection/RoomUsersSection.js");
/* harmony import */ var _RoomButtonsSection_RoomButtonsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RoomButtonsSection/RoomButtonsSection */ "./components/RoomButtonsSection/RoomButtonsSection.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/AuthContext */ "./context/AuthContext.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomSection/RoomSection.js";







function RoomSection() {
  const {
    roomData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.default);
  const {
    0: roomName,
    1: setRoomName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: roomCreatorName,
    1: setRoomCreatorName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (roomData && roomData.creator) {
      setRoomName(roomData.name);
      setRoomCreatorName(roomData.creator.name);
    }
  }, [roomData]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    w: "100%",
    rounded: "lg",
    borderWidth: "1px",
    borderColor: "clubhousegrey.400",
    bg: "clubhousegrey.200",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomNameSection_RoomNameSection__WEBPACK_IMPORTED_MODULE_3__.default, {
      roomName: roomName,
      creatorName: roomCreatorName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUsersSection_RoomUsersSection__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomButtonsSection_RoomButtonsSection__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomSection);

/***/ }),

/***/ "./components/RoomUserAvatar/RoomUserAvatar.js":
/*!*****************************************************!*\
  !*** ./components/RoomUserAvatar/RoomUserAvatar.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomUserAvatar/RoomUserAvatar.js";


function RoomUserAvatar({
  username
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
      size: "lg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      children: username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomUserAvatar);

/***/ }),

/***/ "./components/RoomUserList/RoomUserList.js":
/*!*************************************************!*\
  !*** ./components/RoomUserList/RoomUserList.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoldText/BoldText */ "./components/BoldText/BoldText.js");
/* harmony import */ var _RoomUserAvatar_RoomUserAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoomUserAvatar/RoomUserAvatar */ "./components/RoomUserAvatar/RoomUserAvatar.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomUserList/RoomUserList.js";




function RoomUserList({
  text,
  users = []
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    px: 5,
    py: 6,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
      direction: "row",
      spacing: 4,
      mb: 7,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoldText_BoldText__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
        px: 4,
        py: 0.5,
        bgColor: "clubhousegrey.400",
        color: "clubhousegrey.800",
        rounded: "lg",
        alignContent: "center",
        fontSize: "md",
        fontWeight: "extrabold",
        children: users.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Wrap, {
      direction: "row",
      spacing: 14,
      w: "100%",
      px: 5,
      children: users.map((user, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUserAvatar_RoomUserAvatar__WEBPACK_IMPORTED_MODULE_3__.default, {
          username: user.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomUserList);

/***/ }),

/***/ "./components/RoomUsersSection/RoomUsersSection.js":
/*!*********************************************************!*\
  !*** ./components/RoomUsersSection/RoomUsersSection.js ***!
  \*********************************************************/
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
/* harmony import */ var _RoomUserList_RoomUserList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RoomUserList/RoomUserList */ "./components/RoomUserList/RoomUserList.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/components/RoomUsersSection/RoomUsersSection.js";





function RoomUsersSection() {
  // const speakers = ['user1','user1','user1','user1','user1','user1','user1']
  // const listeners = ['user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1']
  const {
    roomData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.default);
  const {
    0: speakers,
    1: setSpeakers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: listeners,
    1: setListeners
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (roomData) {
      setSpeakers(roomData.users);
      setListeners(roomData.users);
    }
  }, [roomData]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUserList_RoomUserList__WEBPACK_IMPORTED_MODULE_4__.default, {
      text: "Speakers",
      users: speakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RoomUserList_RoomUserList__WEBPACK_IMPORTED_MODULE_4__.default, {
      text: "Listeners",
      users: listeners
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RoomUsersSection);

/***/ }),

/***/ "./pages/room/[id]/index.js":
/*!**********************************!*\
  !*** ./pages/room/[id]/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_FriendsList_FriendsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/FriendsList/FriendsList */ "./components/FriendsList/FriendsList.js");
/* harmony import */ var _components_RoomSection_RoomSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/RoomSection/RoomSection */ "./components/RoomSection/RoomSection.js");
/* harmony import */ var _components_ProfileUpcomingRoomsSection_ProfileUpcomingRoomsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection */ "./components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../context/AuthContext */ "./context/AuthContext.js");


var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/room/[id]/index.js";










function index() {
  const {
    user,
    roomData,
    fetchRoom
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_9__.default);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // if (router.query.id) {
  //     const roomId = router.query.id
  //     console.log('room id: ', roomId)
  //     fetchRoom(roomId)
  // }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (router.query.id) {
      const roomId = router.query.id;
      console.log('room id: ', roomId);
      fetchRoom(roomId);
    }
  }, [router.query.id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "NUSClubhouse Room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
      maxW: "1320px",
      w: "100%",
      centerContent: true,
      p: 0,
      mb: 6,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        direction: "row",
        w: "100%",
        spacing: "60px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FriendsList_FriendsList__WEBPACK_IMPORTED_MODULE_6__.default, {
          friends: user.friends
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoomSection_RoomSection__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileUpcomingRoomsSection_ProfileUpcomingRoomsSection__WEBPACK_IMPORTED_MODULE_8__.default, {
          user: user
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (index); // export async function getServerSideProps() {
//     const res = await fetch(`https://...`)
//     const data = await res.json()
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","context_AuthContext_js","components_FriendsList_FriendsList_js-components_Navbar_Navbar_js-components_ProfileUpcomingR-c9147e"], function() { return __webpack_exec__("./pages/room/[id]/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1Jvb21CdXR0b25zU2VjdGlvbi9Sb29tQnV0dG9uc1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tTmFtZVNlY3Rpb24vUm9vbU5hbWVTZWN0aW9uLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL2NvbXBvbmVudHMvUm9vbVNlY3Rpb24vUm9vbVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tVXNlckF2YXRhci9Sb29tVXNlckF2YXRhci5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9jb21wb25lbnRzL1Jvb21Vc2VyTGlzdC9Sb29tVXNlckxpc3QuanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vY29tcG9uZW50cy9Sb29tVXNlcnNTZWN0aW9uL1Jvb21Vc2Vyc1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlLy4vcGFnZXMvcm9vbS9baWRdL2luZGV4LmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJwaG9lbml4XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJvb21CdXR0b25zU2VjdGlvbiIsIlJvb21OYW1lU2VjdGlvbiIsInJvb21OYW1lIiwiY3JlYXRvck5hbWUiLCJSb29tU2VjdGlvbiIsInJvb21EYXRhIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2V0Um9vbU5hbWUiLCJ1c2VTdGF0ZSIsInJvb21DcmVhdG9yTmFtZSIsInNldFJvb21DcmVhdG9yTmFtZSIsInVzZUVmZmVjdCIsImNyZWF0b3IiLCJuYW1lIiwiUm9vbVVzZXJBdmF0YXIiLCJ1c2VybmFtZSIsIlJvb21Vc2VyTGlzdCIsInRleHQiLCJ1c2VycyIsImxlbmd0aCIsIm1hcCIsInVzZXIiLCJpIiwiUm9vbVVzZXJzU2VjdGlvbiIsInNwZWFrZXJzIiwic2V0U3BlYWtlcnMiLCJsaXN0ZW5lcnMiLCJzZXRMaXN0ZW5lcnMiLCJpbmRleCIsImZldGNoUm9vbSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJyb29tSWQiLCJjb25zb2xlIiwibG9nIiwiZnJpZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxrQkFBVCxHQUE4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QyxFQUFDLE1BQXpCO0FBQWdDLGVBQU8sRUFBQyxNQUF4QztBQUFBLGdDQUNJLDhEQUFDLHdFQUFEO0FBQWEsaUJBQU8sRUFBRVosSUFBSSxDQUFDZ0I7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQyx3R0FBRDtBQUE2QixjQUFJLEVBQUVoQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBLGtCQURKO0FBaUJIOztBQUVELCtEQUFlTyxLQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNsRUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcm9vbS9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBSb29tQnV0dG9uc1NlY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21CdXR0b25zU2VjdGlvblxuIiwiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgU3RhY2ssXG4gICAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgQm9sZFRleHQgZnJvbSAnLi4vQm9sZFRleHQvQm9sZFRleHQnXG5cbmZ1bmN0aW9uIFJvb21OYW1lU2VjdGlvbih7IHJvb21OYW1lPSdTYW1wbGUgcm9vbSAxJywgY3JlYXRvck5hbWU9J1NhbXBsZSB1c2VyIDEnIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IFxuICAgICAgICAgICAgcm91bmRlZFRvcD0nbGcnXG4gICAgICAgICAgICBweD17NX0gXG4gICAgICAgICAgICBweT17Nn1cbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoPScxcHgnXG4gICAgICAgICAgICBib3JkZXJDb2xvcj0nY2x1YmhvdXNlZ3JleS40MDAnXG4gICAgICAgID5cbiAgICAgICAgICAgIDxCb2xkVGV4dCB0ZXh0PXtyb29tTmFtZX0gbWI9ezR9Lz5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249J3JvdycgYWxpZ25JdGVtcz0nYmFzZWxpbmUnIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSdtZCc+d2l0aDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Qm9sZFRleHQgdGV4dD17Y3JlYXRvck5hbWV9IGZvbnRTaXplPSdtZCcgLz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbU5hbWVTZWN0aW9uXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIEJveFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgUm9vbU5hbWVTZWN0aW9uIGZyb20gJy4uL1Jvb21OYW1lU2VjdGlvbi9Sb29tTmFtZVNlY3Rpb24nXG5pbXBvcnQgUm9vbVVzZXJzU2VjdGlvbiBmcm9tICcuLi9Sb29tVXNlcnNTZWN0aW9uL1Jvb21Vc2Vyc1NlY3Rpb24nXG5pbXBvcnQgUm9vbUJ1dHRvbnNTZWN0aW9uIGZyb20gJy4uL1Jvb21CdXR0b25zU2VjdGlvbi9Sb29tQnV0dG9uc1NlY3Rpb24nXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcblxuZnVuY3Rpb24gUm9vbVNlY3Rpb24oKSB7XG4gICAgY29uc3QgeyByb29tRGF0YSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCBbcm9vbU5hbWUsIHNldFJvb21OYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtyb29tQ3JlYXRvck5hbWUsIHNldFJvb21DcmVhdG9yTmFtZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChyb29tRGF0YSAmJiByb29tRGF0YS5jcmVhdG9yKSB7XG4gICAgICAgICAgICBzZXRSb29tTmFtZShyb29tRGF0YS5uYW1lKVxuICAgICAgICAgICAgc2V0Um9vbUNyZWF0b3JOYW1lKHJvb21EYXRhLmNyZWF0b3IubmFtZSlcbiAgICAgICAgfVxuICAgIH0sIFtyb29tRGF0YV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IFxuICAgICAgICAgICAgdz0nMTAwJSdcbiAgICAgICAgICAgIHJvdW5kZWQ9J2xnJyBcbiAgICAgICAgICAgIGJvcmRlcldpZHRoPScxcHgnXG4gICAgICAgICAgICBib3JkZXJDb2xvcj0nY2x1YmhvdXNlZ3JleS40MDAnXG4gICAgICAgICAgICBiZz0nY2x1YmhvdXNlZ3JleS4yMDAnXG4gICAgICAgID5cbiAgICAgICAgICAgIDxSb29tTmFtZVNlY3Rpb24gXG4gICAgICAgICAgICAgICAgcm9vbU5hbWU9e3Jvb21OYW1lfSBcbiAgICAgICAgICAgICAgICBjcmVhdG9yTmFtZT17cm9vbUNyZWF0b3JOYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSb29tVXNlcnNTZWN0aW9uIC8+XG4gICAgICAgICAgICA8Um9vbUJ1dHRvbnNTZWN0aW9uIC8+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbVNlY3Rpb25cbiIsImltcG9ydCB7XG4gICAgQXZhdGFyLFxuICAgIFRleHQsXG4gICAgVlN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFJvb21Vc2VyQXZhdGFyKHsgdXNlcm5hbWUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgICA8QXZhdGFyIHNpemU9J2xnJy8+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nPnt1c2VybmFtZX08L1RleHQ+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbVVzZXJBdmF0YXJcbiIsImltcG9ydCB7XG4gICAgQm94LFxuICAgIFN0YWNrLFxuICAgIEhTdGFjayxcbiAgICBXcmFwLFxuICAgIFdyYXBJdGVtLFxuICAgIEJhZGdlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBCb2xkVGV4dCBmcm9tICcuLi9Cb2xkVGV4dC9Cb2xkVGV4dCdcbmltcG9ydCBSb29tVXNlckF2YXRhciBmcm9tICcuLi9Sb29tVXNlckF2YXRhci9Sb29tVXNlckF2YXRhcidcblxuZnVuY3Rpb24gUm9vbVVzZXJMaXN0KHsgdGV4dCwgdXNlcnM9W10gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcHg9ezV9IHB5PXs2fT5cbiAgICAgICAgICAgIDxIU3RhY2sgZGlyZWN0aW9uPSdyb3cnIHNwYWNpbmc9ezR9IG1iPXs3fT5cbiAgICAgICAgICAgICAgICA8Qm9sZFRleHQgdGV4dD17dGV4dH0gLz5cbiAgICAgICAgICAgICAgICA8QmFkZ2UgXG4gICAgICAgICAgICAgICAgICAgIHB4PXs0fSBcbiAgICAgICAgICAgICAgICAgICAgcHk9ezAuNX0gXG4gICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9J2NsdWJob3VzZWdyZXkuNDAwJyBcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J2NsdWJob3VzZWdyZXkuODAwJyBcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZD0nbGcnIFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9J21kJ1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PSdleHRyYWJvbGQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dXNlcnMubGVuZ3RofVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgIDxXcmFwIGRpcmVjdGlvbj0ncm93JyBzcGFjaW5nPXsxNH0gdz0nMTAwJScgcHg9ezV9PlxuICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8V3JhcEl0ZW0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tVXNlckF2YXRhciB1c2VybmFtZT17dXNlci51c2VybmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9XcmFwPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21Vc2VyTGlzdFxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBCb3hcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5pbXBvcnQgUm9vbVVzZXJMaXN0IGZyb20gJy4uL1Jvb21Vc2VyTGlzdC9Sb29tVXNlckxpc3QnXG5cbmZ1bmN0aW9uIFJvb21Vc2Vyc1NlY3Rpb24oKSB7XG4gICAgLy8gY29uc3Qgc3BlYWtlcnMgPSBbJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJ11cbiAgICAvLyBjb25zdCBsaXN0ZW5lcnMgPSBbJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJywndXNlcjEnLCd1c2VyMScsJ3VzZXIxJ11cblxuICAgIGNvbnN0IHsgcm9vbURhdGEgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gICAgY29uc3QgW3NwZWFrZXJzLCBzZXRTcGVha2Vyc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbGlzdGVuZXJzLCBzZXRMaXN0ZW5lcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocm9vbURhdGEpIHtcbiAgICAgICAgICAgIHNldFNwZWFrZXJzKHJvb21EYXRhLnVzZXJzKVxuICAgICAgICAgICAgc2V0TGlzdGVuZXJzKHJvb21EYXRhLnVzZXJzKVxuICAgICAgICB9XG4gICAgfSwgW3Jvb21EYXRhXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Um9vbVVzZXJMaXN0IHRleHQ9J1NwZWFrZXJzJyB1c2Vycz17c3BlYWtlcnN9Lz5cbiAgICAgICAgICAgIDxSb29tVXNlckxpc3QgdGV4dD0nTGlzdGVuZXJzJyB1c2Vycz17bGlzdGVuZXJzfSAvPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21Vc2Vyc1NlY3Rpb25cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFxuICBDb250YWluZXIsIFxuICBTdGFja1xufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJ1xuaW1wb3J0IEZyaWVuZHNMaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRnJpZW5kc0xpc3QvRnJpZW5kc0xpc3QnXG5pbXBvcnQgUm9vbVNlY3Rpb24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Sb29tU2VjdGlvbi9Sb29tU2VjdGlvbidcbmltcG9ydCBQcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlVXBjb21pbmdSb29tc1NlY3Rpb24vUHJvZmlsZVVwY29taW5nUm9vbXNTZWN0aW9uJ1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICAgIGNvbnN0IHsgdXNlciwgcm9vbURhdGEsIGZldGNoUm9vbSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgLy8gaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgIC8vICAgICBjb25zdCByb29tSWQgPSByb3V0ZXIucXVlcnkuaWRcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3Jvb20gaWQ6ICcsIHJvb21JZClcbiAgICAvLyAgICAgZmV0Y2hSb29tKHJvb21JZClcbiAgICAvLyB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgICAgICAgICAgY29uc3Qgcm9vbUlkID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vbSBpZDogJywgcm9vbUlkKVxuICAgICAgICAgICAgZmV0Y2hSb29tKHJvb21JZClcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXIucXVlcnkuaWRdKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TlVTQ2x1YmhvdXNlIFJvb208L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFc9JzEzMjBweCcgdz0nMTAwJScgY2VudGVyQ29udGVudCBwPXswfSBtYj17Nn0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0ncm93JyB3PScxMDAlJyBzcGFjaW5nPSc2MHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgPEZyaWVuZHNMaXN0IGZyaWVuZHM9e3VzZXIuZnJpZW5kc30vPlxuICAgICAgICAgICAgICAgICAgICA8Um9vbVNlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVVcGNvbWluZ1Jvb21zU2VjdGlvbiB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC8+IFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly8uLi5gKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgICBpZiAoIWRhdGEpIHtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbi8vICAgICB9XG4vLyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBob2VuaXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9