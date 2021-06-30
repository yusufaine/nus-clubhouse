(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/inter */ "./node_modules/@fontsource/inter/index.css");
/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
      resetCSS: true,
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const fonts = _objectSpread(_objectSpread({}, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.fonts), {}, {
  // futura: "Futura",
  // gothamrnd: "GothamRnd",
  heading: `Inter`,
  body: `Inter`
});

const colors = _objectSpread(_objectSpread({}, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors), {}, {
  clubhousegrey: {
    50: "#F5F5F5",
    100: "#F5F5F5",
    200: "#E9E9E9",
    300: "#E9E9E9",
    400: "#D7D7D7",
    500: "#D7D7D7",
    600: "#C4C4C4",
    700: "#C4C4C4",
    800: "#1A202C",
    900: "#1A202C"
  },
  clubhouseblue: {
    50: "#3399FF",
    100: "#1F8FFF",
    200: "#0A85FF",
    300: "#007AF5",
    400: "#0070E0",
    500: "#0066CC",
    600: "#005CB8",
    700: "#0052A3",
    800: "#00478F",
    900: "#003D7C"
  },
  clubhouseorange: {
    50: "#FFB05C",
    100: "#FFA647",
    200: "#FF9C33",
    300: "#FF931F",
    400: "#FF890A",
    500: "#EF7B00",
    600: "#E07400",
    700: "#CC6900",
    800: "#B85F00",
    900: "#A35400"
  }
});

const styles = {
  global: props => ({
    body: {
      color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("clubhousegrey.900", "clubhousegrey.900")(props),
      bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("clubhousegrey.50", "clubhousegrey.900")(props)
    },
    a: {
      color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("clubhouseorange.100", "clubhouseorange.100")(props),
      _hover: {
        textDecoration: "underline"
      }
    }
  })
};
const Link = {
  baseStyle: {
    color: "clubhouseorange.500"
  }
};
const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    // textTransform: "uppercase",
    borderRadius: "lg" // <-- border radius is same for all variants and sizes

  },
  // Two sizes: sm and md
  sizes: {
    // sm: {
    //     fontSize: "sm",
    //     px: 4, // <-- px is short for paddingLeft and paddingRight
    //     py: 3, // <-- py is short for paddingTop and paddingBottom
    // },
    md: {
      fontSize: "md",
      px: 6,
      // <-- these values are tokens from the design system
      py: 6 // <-- these values are tokens from the design system

    }
  },
  // Two variants: outline and solid
  variants: {// outline: {
    //     border: "2px solid",
    //     borderColor: "purple.500",
    //     color: "purple.500",
    // },
    // solid: {
    //     bg: "clubhousegrey.400",
    //     color: "clubhousegrey.800",
    //     _hover: {
    //         bg: "clubhousegrey.600",
    //         _disabled: {
    //             bg: "clubhousegrey.400",
    //         },
    //     },
    //     _active: { bg: "clubhousegrey.600" },
    // },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "solid"
  }
};

const overrides = _objectSpread(_objectSpread({}, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme), {}, {
  fonts,
  colors,
  styles,
  components: {
    Button,
    Link
  }
});

const customTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)(overrides);
/* harmony default export */ __webpack_exports__["default"] = (customTheme); // MYPETS PORTION
// import { extendTheme } from "@chakra-ui/react"
// import { theme as chakraTheme } from "@chakra-ui/react"
// const fonts = {
//     ...chakraTheme.fonts,
//     // futura: "Futura",
//     // gothamrnd: "GothamRnd",
//     heading: `Inter`,
//     body: `Inter`
// }
// const colors = {
//     ...chakraTheme.colors,
//     mypets: {
//         100: "#ffc400",
//         200: "#ffc400",
//         300: "#ffc400",
//         400: "#ffc400",
//         500: "#ffc400",
//         600: "#ffc400",
//         700: "#ffc400",
//         800: "#ffc400",
//         900: "#ffa000",
//     }
// }
// const config = {
//     initialColorMode: "light",
//     useSystemColorMode: false,
//   }
// const overrides = {
//     ...chakraTheme,
//     fonts,
//     colors,
//     config
// }
// const customTheme = extendTheme(overrides)
// export default customTheme

/***/ }),

/***/ "./node_modules/@fontsource/inter/index.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/inter/index.css ***!
  \**************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/swiper/swiper.scss":
/*!*****************************************!*\
  !*** ./node_modules/swiper/swiper.scss ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["context_AuthContext_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL3N0eWxlcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicGhvZW5peFwiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXN0b21UaGVtZSIsImZvbnRzIiwiY2hha3JhVGhlbWUiLCJoZWFkaW5nIiwiYm9keSIsImNvbG9ycyIsImNsdWJob3VzZWdyZXkiLCJjbHViaG91c2VibHVlIiwiY2x1YmhvdXNlb3JhbmdlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJjb2xvciIsIm1vZGUiLCJiZyIsImEiLCJfaG92ZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsIkxpbmsiLCJiYXNlU3R5bGUiLCJCdXR0b24iLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwic2l6ZXMiLCJtZCIsImZvbnRTaXplIiwicHgiLCJweSIsInZhcmlhbnRzIiwiZGVmYXVsdFByb3BzIiwic2l6ZSIsInZhcmlhbnQiLCJvdmVycmlkZXMiLCJjb21wb25lbnRzIiwiZXh0ZW5kVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FB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QUFPLEVBQUU7QUFGQztBQXhDSCxDQUFmOztBQThDQSxNQUFNQyxTQUFTLG1DQUNSOUIsbURBRFE7QUFFWEQsT0FGVztBQUdYSSxRQUhXO0FBSVhJLFFBSlc7QUFLWHdCLFlBQVUsRUFBRTtBQUNSYixVQURRO0FBRVJGO0FBRlE7QUFMRCxFQUFmOztBQVlBLE1BQU1sQixXQUFXLEdBQUdrQyw2REFBVyxDQUFDRixTQUFELENBQS9CO0FBRUEsK0RBQWVoQyxXQUFmLEUsQ0FFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTEEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvbnRzb3VyY2UvaW50ZXInXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXIuc2Nzcyc7XG5cbmltcG9ydCBjdXN0b21UaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e2N1c3RvbVRoZW1lfSA+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+IFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IHRoZW1lIGFzIGNoYWtyYVRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IGZvbnRzID0ge1xuICAgIC4uLmNoYWtyYVRoZW1lLmZvbnRzLFxuICAgIC8vIGZ1dHVyYTogXCJGdXR1cmFcIixcbiAgICAvLyBnb3RoYW1ybmQ6IFwiR290aGFtUm5kXCIsXG4gICAgaGVhZGluZzogYEludGVyYCxcbiAgICBib2R5OiBgSW50ZXJgXG59XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgICAuLi5jaGFrcmFUaGVtZS5jb2xvcnMsXG4gICAgY2x1YmhvdXNlZ3JleToge1xuICAgICAgICA1MDogXCIjRjVGNUY1XCIsXG4gICAgICAgIDEwMDogXCIjRjVGNUY1XCIsXG4gICAgICAgIDIwMDogXCIjRTlFOUU5XCIsXG4gICAgICAgIDMwMDogXCIjRTlFOUU5XCIsXG4gICAgICAgIDQwMDogXCIjRDdEN0Q3XCIsXG4gICAgICAgIDUwMDogXCIjRDdEN0Q3XCIsXG4gICAgICAgIDYwMDogXCIjQzRDNEM0XCIsXG4gICAgICAgIDcwMDogXCIjQzRDNEM0XCIsXG4gICAgICAgIDgwMDogXCIjMUEyMDJDXCIsXG4gICAgICAgIDkwMDogXCIjMUEyMDJDXCIsXG4gICAgfSxcbiAgICBjbHViaG91c2VibHVlOiB7XG4gICAgICAgIDUwOiBcIiMzMzk5RkZcIixcbiAgICAgICAgMTAwOiBcIiMxRjhGRkZcIixcbiAgICAgICAgMjAwOiBcIiMwQTg1RkZcIixcbiAgICAgICAgMzAwOiBcIiMwMDdBRjVcIixcbiAgICAgICAgNDAwOiBcIiMwMDcwRTBcIixcbiAgICAgICAgNTAwOiBcIiMwMDY2Q0NcIixcbiAgICAgICAgNjAwOiBcIiMwMDVDQjhcIixcbiAgICAgICAgNzAwOiBcIiMwMDUyQTNcIixcbiAgICAgICAgODAwOiBcIiMwMDQ3OEZcIixcbiAgICAgICAgOTAwOiBcIiMwMDNEN0NcIixcbiAgICB9LFxuICAgIGNsdWJob3VzZW9yYW5nZToge1xuICAgICAgICA1MDogXCIjRkZCMDVDXCIsXG4gICAgICAgIDEwMDogXCIjRkZBNjQ3XCIsXG4gICAgICAgIDIwMDogXCIjRkY5QzMzXCIsXG4gICAgICAgIDMwMDogXCIjRkY5MzFGXCIsXG4gICAgICAgIDQwMDogXCIjRkY4OTBBXCIsXG4gICAgICAgIDUwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDYwMDogXCIjRTA3NDAwXCIsXG4gICAgICAgIDcwMDogXCIjQ0M2OTAwXCIsXG4gICAgICAgIDgwMDogXCIjQjg1RjAwXCIsXG4gICAgICAgIDkwMDogXCIjQTM1NDAwXCIsXG4gICAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZ2xvYmFsOiAocHJvcHMpID0+ICh7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIGNvbG9yOiBtb2RlKFwiY2x1YmhvdXNlZ3JleS45MDBcIixcImNsdWJob3VzZWdyZXkuOTAwXCIpKHByb3BzKSxcbiAgICAgICAgICAgIGJnOiBtb2RlKFwiY2x1YmhvdXNlZ3JleS41MFwiLCBcImNsdWJob3VzZWdyZXkuOTAwXCIpKHByb3BzKVxuICAgICAgICB9LFxuICAgICAgICBhOiB7XG4gICAgICAgICAgICBjb2xvcjogbW9kZShcImNsdWJob3VzZW9yYW5nZS4xMDBcIiwgXCJjbHViaG91c2VvcmFuZ2UuMTAwXCIpKHByb3BzKSxcbiAgICAgICAgICAgIF9ob3Zlcjoge1xuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IExpbmsgPSB7XG4gICAgYmFzZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiBcImNsdWJob3VzZW9yYW5nZS41MDBcIlxuICAgIH1cbn1cblxuY29uc3QgQnV0dG9uID0ge1xuICAgIC8vIFRoZSBzdHlsZXMgYWxsIGJ1dHRvbiBoYXZlIGluIGNvbW1vblxuICAgIGJhc2VTdHlsZToge1xuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgLy8gdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcImxnXCIsIC8vIDwtLSBib3JkZXIgcmFkaXVzIGlzIHNhbWUgZm9yIGFsbCB2YXJpYW50cyBhbmQgc2l6ZXNcbiAgICB9LFxuICAgIC8vIFR3byBzaXplczogc20gYW5kIG1kXG4gICAgc2l6ZXM6IHtcbiAgICAgICAgLy8gc206IHtcbiAgICAgICAgLy8gICAgIGZvbnRTaXplOiBcInNtXCIsXG4gICAgICAgIC8vICAgICBweDogNCwgLy8gPC0tIHB4IGlzIHNob3J0IGZvciBwYWRkaW5nTGVmdCBhbmQgcGFkZGluZ1JpZ2h0XG4gICAgICAgIC8vICAgICBweTogMywgLy8gPC0tIHB5IGlzIHNob3J0IGZvciBwYWRkaW5nVG9wIGFuZCBwYWRkaW5nQm90dG9tXG4gICAgICAgIC8vIH0sXG4gICAgICAgIG1kOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCJtZFwiLFxuICAgICAgICAgICAgcHg6IDYsIC8vIDwtLSB0aGVzZSB2YWx1ZXMgYXJlIHRva2VucyBmcm9tIHRoZSBkZXNpZ24gc3lzdGVtXG4gICAgICAgICAgICBweTogNiwgLy8gPC0tIHRoZXNlIHZhbHVlcyBhcmUgdG9rZW5zIGZyb20gdGhlIGRlc2lnbiBzeXN0ZW1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIFR3byB2YXJpYW50czogb3V0bGluZSBhbmQgc29saWRcbiAgICB2YXJpYW50czoge1xuICAgICAgICAvLyBvdXRsaW5lOiB7XG4gICAgICAgIC8vICAgICBib3JkZXI6IFwiMnB4IHNvbGlkXCIsXG4gICAgICAgIC8vICAgICBib3JkZXJDb2xvcjogXCJwdXJwbGUuNTAwXCIsXG4gICAgICAgIC8vICAgICBjb2xvcjogXCJwdXJwbGUuNTAwXCIsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHNvbGlkOiB7XG4gICAgICAgIC8vICAgICBiZzogXCJjbHViaG91c2VncmV5LjQwMFwiLFxuICAgICAgICAvLyAgICAgY29sb3I6IFwiY2x1YmhvdXNlZ3JleS44MDBcIixcbiAgICAgICAgLy8gICAgIF9ob3Zlcjoge1xuICAgICAgICAvLyAgICAgICAgIGJnOiBcImNsdWJob3VzZWdyZXkuNjAwXCIsXG4gICAgICAgIC8vICAgICAgICAgX2Rpc2FibGVkOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJnOiBcImNsdWJob3VzZWdyZXkuNDAwXCIsXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBfYWN0aXZlOiB7IGJnOiBcImNsdWJob3VzZWdyZXkuNjAwXCIgfSxcbiAgICAgICAgLy8gfSxcbiAgICB9LFxuICAgIC8vIFRoZSBkZWZhdWx0IHNpemUgYW5kIHZhcmlhbnQgdmFsdWVzXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHNpemU6IFwibWRcIixcbiAgICAgICAgdmFyaWFudDogXCJzb2xpZFwiLFxuICAgIH0sXG59XG5cbmNvbnN0IG92ZXJyaWRlcyA9IHtcbiAgICAuLi5jaGFrcmFUaGVtZSxcbiAgICBmb250cyxcbiAgICBjb2xvcnMsXG4gICAgc3R5bGVzLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQnV0dG9uLFxuICAgICAgICBMaW5rXG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBjdXN0b21UaGVtZSA9IGV4dGVuZFRoZW1lKG92ZXJyaWRlcylcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tVGhlbWVcblxuLy8gTVlQRVRTIFBPUlRJT05cblxuLy8gaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG4vLyBpbXBvcnQgeyB0aGVtZSBhcyBjaGFrcmFUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuLy8gY29uc3QgZm9udHMgPSB7XG4vLyAgICAgLi4uY2hha3JhVGhlbWUuZm9udHMsXG4vLyAgICAgLy8gZnV0dXJhOiBcIkZ1dHVyYVwiLFxuLy8gICAgIC8vIGdvdGhhbXJuZDogXCJHb3RoYW1SbmRcIixcbi8vICAgICBoZWFkaW5nOiBgSW50ZXJgLFxuLy8gICAgIGJvZHk6IGBJbnRlcmBcbi8vIH1cblxuLy8gY29uc3QgY29sb3JzID0ge1xuLy8gICAgIC4uLmNoYWtyYVRoZW1lLmNvbG9ycyxcbi8vICAgICBteXBldHM6IHtcbi8vICAgICAgICAgMTAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgMjAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgMzAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgNDAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgNTAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgNjAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgNzAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgODAwOiBcIiNmZmM0MDBcIixcbi8vICAgICAgICAgOTAwOiBcIiNmZmEwMDBcIixcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNvbnN0IGNvbmZpZyA9IHtcbi8vICAgICBpbml0aWFsQ29sb3JNb2RlOiBcImxpZ2h0XCIsXG4vLyAgICAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcbi8vICAgfVxuXG4vLyBjb25zdCBvdmVycmlkZXMgPSB7XG4vLyAgICAgLi4uY2hha3JhVGhlbWUsXG4vLyAgICAgZm9udHMsXG4vLyAgICAgY29sb3JzLFxuLy8gICAgIGNvbmZpZ1xuLy8gfVxuXG4vLyBjb25zdCBjdXN0b21UaGVtZSA9IGV4dGVuZFRoZW1lKG92ZXJyaWRlcylcblxuLy8gZXhwb3J0IGRlZmF1bHQgY3VzdG9tVGhlbWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGhvZW5peFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==