webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Col.js":
/*!***************************!*\
  !*** ./components/Col.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./components/Box.js");


var Col = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Box__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "Col",
  componentId: "sc-1xyxn0x-0"
})(["margin:", ";justify-content:stretch;flex-grow:1;"], function (props) {
  return props.theme.margin;
});
/* harmony default export */ __webpack_exports__["default"] = (_Box__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./components/Row.js":
/*!***************************!*\
  !*** ./components/Row.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./components/Box.js");


var Row = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Box__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "Row",
  componentId: "sc-1lukp8y-0"
})(["padding:", ";flex-grow:1;"], function (props) {
  return props.theme.padding;
});
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Row */ "./components/Row.js");
/* harmony import */ var _components_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Col */ "./components/Col.js");
var _jsxFileName = "/home/clayton/Documents/resume/pages/index.js";




var Sumary = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__Sumary",
  componentId: "sc-1cmdpzx-0"
})(["color:", ";"], function (props) {
  return props.theme.primary;
});
var Timeline = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__Timeline",
  componentId: "sc-1cmdpzx-1"
})(["color:", ";font-weight:bold;"], function (props) {
  return props.theme.secondary;
});
var Card = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Col__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "pages__Card",
  componentId: "sc-1cmdpzx-2"
})(["box-shadow:0 .5rem 1rem ", ";border-radius:", ";padding:", ";"], function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.size;
});

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sumary, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Sumary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Timeline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Timeline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Card")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Card")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0104f9a8e1c6d6373436.hot-update.js.map