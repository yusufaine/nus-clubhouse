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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");

var _jsxFileName = "/home/aidan/nusclubhouse/react-frontend/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
      resetCSS: true,
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
    100: "#F5F5F5",
    200: "#F5F5F5",
    300: "#E9E9E9",
    400: "#E9E9E9",
    500: "#D7D7D7",
    600: "#D7D7D7",
    700: "#C4C4C4",
    800: "#C4C4C4",
    900: "#1A202C"
  },
  clubhouseblue: {
    100: "#003D7C",
    200: "#003D7C",
    300: "#003D7C",
    400: "#003D7C",
    500: "#003D7C",
    600: "#003D7C",
    700: "#003D7C",
    800: "#003D7C",
    900: "#003D7C"
  },
  clubhouseorange: {
    100: "#EF7B00",
    200: "#EF7B00",
    300: "#EF7B00",
    400: "#EF7B00",
    500: "#EF7B00",
    600: "#EF7B00",
    700: "#EF7B00",
    800: "#EF7B00",
    900: "#EF7B00"
  }
});

const styles = {
  global: props => ({
    body: {
      color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("clubhousegrey.900", "clubhousegrey.900")(props),
      bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("clubhousegrey.100", "clubhousegrey.900")(props)
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
    color: "clubhouseorange.100"
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
  variants: {
    // outline: {
    //     border: "2px solid",
    //     borderColor: "purple.500",
    //     color: "purple.500",
    // },
    solid: {
      bg: "clubhousegrey.500",
      color: "clubhousegrey.900",
      _hover: {
        bg: "clubhousegrey.700",
        _disabled: {
          bg: "clubhousegrey.500"
        }
      },
      _active: {
        bg: "clubhousegrey.700"
      }
    }
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
/* harmony default export */ __webpack_exports__["default"] = (customTheme);

/***/ }),

/***/ "./node_modules/@fontsource/inter/index.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/inter/index.css ***!
  \**************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXNjbHViaG91c2UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL251c2NsdWJob3VzZS8uL3N0eWxlcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiIiwid2VicGFjazovL251c2NsdWJob3VzZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbnVzY2x1YmhvdXNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9udXNjbHViaG91c2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1c3RvbVRoZW1lIiwiZm9udHMiLCJjaGFrcmFUaGVtZSIsImhlYWRpbmciLCJib2R5IiwiY29sb3JzIiwiY2x1YmhvdXNlZ3JleSIsImNsdWJob3VzZWJsdWUiLCJjbHViaG91c2VvcmFuZ2UiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImNvbG9yIiwibW9kZSIsImJnIiwiYSIsIl9ob3ZlciIsInRleHREZWNvcmF0aW9uIiwiTGluayIsImJhc2VTdHlsZSIsIkJ1dHRvbiIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJzaXplcyIsIm1kIiwiZm9udFNpemUiLCJweCIsInB5IiwidmFyaWFudHMiLCJzb2xpZCIsIl9kaXNhYmxlZCIsIl9hY3RpdmUiLCJkZWZhdWx0UHJvcHMiLCJzaXplIiwidmFyaWFudCIsIm92ZXJyaWRlcyIsImNvbXBvbmVudHMiLCJleHRlbmRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFF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TjtBQVROO0FBTkQsR0FyQkM7QUF1Q1g7QUFDQWtCLGNBQVksRUFBRTtBQUNWQyxRQUFJLEVBQUUsSUFESTtBQUVWQyxXQUFPLEVBQUU7QUFGQztBQXhDSCxDQUFmOztBQThDQSxNQUFNQyxTQUFTLG1DQUNSakMsbURBRFE7QUFFWEQsT0FGVztBQUdYSSxRQUhXO0FBSVhJLFFBSlc7QUFLWDJCLFlBQVUsRUFBRTtBQUNSaEIsVUFEUTtBQUVSRjtBQUZRO0FBTEQsRUFBZjs7QUFZQSxNQUFNbEIsV0FBVyxHQUFHcUMsNkRBQVcsQ0FBQ0YsU0FBRCxDQUEvQjtBQUVBLCtEQUFlbkMsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvbnRzb3VyY2UvaW50ZXInXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCBjdXN0b21UaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e2N1c3RvbVRoZW1lfSA+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+IFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IHRoZW1lIGFzIGNoYWtyYVRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IGZvbnRzID0ge1xuICAgIC4uLmNoYWtyYVRoZW1lLmZvbnRzLFxuICAgIC8vIGZ1dHVyYTogXCJGdXR1cmFcIixcbiAgICAvLyBnb3RoYW1ybmQ6IFwiR290aGFtUm5kXCIsXG4gICAgaGVhZGluZzogYEludGVyYCxcbiAgICBib2R5OiBgSW50ZXJgXG59XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgICAuLi5jaGFrcmFUaGVtZS5jb2xvcnMsXG4gICAgY2x1YmhvdXNlZ3JleToge1xuICAgICAgICAxMDA6IFwiI0Y1RjVGNVwiLFxuICAgICAgICAyMDA6IFwiI0Y1RjVGNVwiLFxuICAgICAgICAzMDA6IFwiI0U5RTlFOVwiLFxuICAgICAgICA0MDA6IFwiI0U5RTlFOVwiLFxuICAgICAgICA1MDA6IFwiI0Q3RDdEN1wiLFxuICAgICAgICA2MDA6IFwiI0Q3RDdEN1wiLFxuICAgICAgICA3MDA6IFwiI0M0QzRDNFwiLFxuICAgICAgICA4MDA6IFwiI0M0QzRDNFwiLFxuICAgICAgICA5MDA6IFwiIzFBMjAyQ1wiLFxuICAgIH0sXG4gICAgY2x1YmhvdXNlYmx1ZToge1xuICAgICAgICAxMDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICAyMDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICAzMDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICA0MDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICA1MDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICA2MDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICA3MDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICA4MDA6IFwiIzAwM0Q3Q1wiLFxuICAgICAgICA5MDA6IFwiIzAwM0Q3Q1wiLFxuICAgIH0sXG4gICAgY2x1YmhvdXNlb3JhbmdlOiB7XG4gICAgICAgIDEwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDIwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDMwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDQwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDUwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDYwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDcwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDgwMDogXCIjRUY3QjAwXCIsXG4gICAgICAgIDkwMDogXCIjRUY3QjAwXCIsXG4gICAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZ2xvYmFsOiAocHJvcHMpID0+ICh7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIGNvbG9yOiBtb2RlKFwiY2x1YmhvdXNlZ3JleS45MDBcIixcImNsdWJob3VzZWdyZXkuOTAwXCIpKHByb3BzKSxcbiAgICAgICAgICAgIGJnOiBtb2RlKFwiY2x1YmhvdXNlZ3JleS4xMDBcIiwgXCJjbHViaG91c2VncmV5LjkwMFwiKShwcm9wcylcbiAgICAgICAgfSxcbiAgICAgICAgYToge1xuICAgICAgICAgICAgY29sb3I6IG1vZGUoXCJjbHViaG91c2VvcmFuZ2UuMTAwXCIsIFwiY2x1YmhvdXNlb3JhbmdlLjEwMFwiKShwcm9wcyksXG4gICAgICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBMaW5rID0ge1xuICAgIGJhc2VTdHlsZToge1xuICAgICAgICBjb2xvcjogXCJjbHViaG91c2VvcmFuZ2UuMTAwXCJcbiAgICB9XG59XG5cbmNvbnN0IEJ1dHRvbiA9IHtcbiAgICAvLyBUaGUgc3R5bGVzIGFsbCBidXR0b24gaGF2ZSBpbiBjb21tb25cbiAgICBiYXNlU3R5bGU6IHtcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIC8vIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCJsZ1wiLCAvLyA8LS0gYm9yZGVyIHJhZGl1cyBpcyBzYW1lIGZvciBhbGwgdmFyaWFudHMgYW5kIHNpemVzXG4gICAgfSxcbiAgICAvLyBUd28gc2l6ZXM6IHNtIGFuZCBtZFxuICAgIHNpemVzOiB7XG4gICAgICAgIC8vIHNtOiB7XG4gICAgICAgIC8vICAgICBmb250U2l6ZTogXCJzbVwiLFxuICAgICAgICAvLyAgICAgcHg6IDQsIC8vIDwtLSBweCBpcyBzaG9ydCBmb3IgcGFkZGluZ0xlZnQgYW5kIHBhZGRpbmdSaWdodFxuICAgICAgICAvLyAgICAgcHk6IDMsIC8vIDwtLSBweSBpcyBzaG9ydCBmb3IgcGFkZGluZ1RvcCBhbmQgcGFkZGluZ0JvdHRvbVxuICAgICAgICAvLyB9LFxuICAgICAgICBtZDoge1xuICAgICAgICAgICAgZm9udFNpemU6IFwibWRcIixcbiAgICAgICAgICAgIHB4OiA2LCAvLyA8LS0gdGhlc2UgdmFsdWVzIGFyZSB0b2tlbnMgZnJvbSB0aGUgZGVzaWduIHN5c3RlbVxuICAgICAgICAgICAgcHk6IDYsIC8vIDwtLSB0aGVzZSB2YWx1ZXMgYXJlIHRva2VucyBmcm9tIHRoZSBkZXNpZ24gc3lzdGVtXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBUd28gdmFyaWFudHM6IG91dGxpbmUgYW5kIHNvbGlkXG4gICAgdmFyaWFudHM6IHtcbiAgICAgICAgLy8gb3V0bGluZToge1xuICAgICAgICAvLyAgICAgYm9yZGVyOiBcIjJweCBzb2xpZFwiLFxuICAgICAgICAvLyAgICAgYm9yZGVyQ29sb3I6IFwicHVycGxlLjUwMFwiLFxuICAgICAgICAvLyAgICAgY29sb3I6IFwicHVycGxlLjUwMFwiLFxuICAgICAgICAvLyB9LFxuICAgICAgICBzb2xpZDoge1xuICAgICAgICAgICAgYmc6IFwiY2x1YmhvdXNlZ3JleS41MDBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImNsdWJob3VzZWdyZXkuOTAwXCIsXG4gICAgICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiZzogXCJjbHViaG91c2VncmV5LjcwMFwiLFxuICAgICAgICAgICAgICAgIF9kaXNhYmxlZDoge1xuICAgICAgICAgICAgICAgICAgICBiZzogXCJjbHViaG91c2VncmV5LjUwMFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2FjdGl2ZTogeyBiZzogXCJjbHViaG91c2VncmV5LjcwMFwiIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBUaGUgZGVmYXVsdCBzaXplIGFuZCB2YXJpYW50IHZhbHVlc1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBzaXplOiBcIm1kXCIsXG4gICAgICAgIHZhcmlhbnQ6IFwic29saWRcIixcbiAgICB9LFxufVxuXG5jb25zdCBvdmVycmlkZXMgPSB7XG4gICAgLi4uY2hha3JhVGhlbWUsXG4gICAgZm9udHMsXG4gICAgY29sb3JzLFxuICAgIHN0eWxlcyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEJ1dHRvbixcbiAgICAgICAgTGlua1xuICAgIH1cbiAgICBcbn1cblxuY29uc3QgY3VzdG9tVGhlbWUgPSBleHRlbmRUaGVtZShvdmVycmlkZXMpXG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbVRoZW1lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=