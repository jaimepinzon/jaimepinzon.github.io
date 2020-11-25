(self["webpackChunkjaimepinzon_github_io"] = self["webpackChunkjaimepinzon_github_io"] || []).push([["src_components_Sections_Desgastar_js"],{

/***/ "./node_modules/@material-ui/core/esm/GridList/GridList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/GridList/GridList.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styles [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => /* binding */ styles,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
;






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

  }
};
var GridList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function GridList(props, ref) {
  var _props$cellHeight = props.cellHeight,
      cellHeight = _props$cellHeight === void 0 ? 180 : _props$cellHeight,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 2 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 4 : _props$spacing,
      style = props.style,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["cellHeight", "children", "classes", "className", "cols", "component", "spacing", "style"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className),
    ref: ref,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      margin: -spacing / 2
    }, style)
  }, other), react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return null;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The GridList component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
});
 true ? GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['auto'])]),

  /**
   * Grid Tiles that will be in Grid List.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * Number of columns.
   */
  cols: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Number of px for the spacing between tiles.
   */
  spacing: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiGridList'
})(GridList));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/GridListTile/GridListTile.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/GridListTile/GridListTile.js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styles [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => /* binding */ styles,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
;








var styles = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },

  /* Styles applied to the `div` element that wraps the children. */
  tile: {
    position: 'relative',
    display: 'block',
    // In case it's not rendered with a div.
    height: '100%',
    overflow: 'hidden'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

var fit = function fit(imgEl, classes) {
  if (!imgEl || !imgEl.complete) {
    return;
  }

  if (imgEl.width / imgEl.height > imgEl.parentElement.offsetWidth / imgEl.parentElement.offsetHeight) {
    var _imgEl$classList, _imgEl$classList2;

    (_imgEl$classList = imgEl.classList).remove.apply(_imgEl$classList, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(classes.imgFullWidth.split(' ')));

    (_imgEl$classList2 = imgEl.classList).add.apply(_imgEl$classList2, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(classes.imgFullHeight.split(' ')));
  } else {
    var _imgEl$classList3, _imgEl$classList4;

    (_imgEl$classList3 = imgEl.classList).remove.apply(_imgEl$classList3, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(classes.imgFullHeight.split(' ')));

    (_imgEl$classList4 = imgEl.classList).add.apply(_imgEl$classList4, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(classes.imgFullWidth.split(' ')));
  }
};

function ensureImageCover(imgEl, classes) {
  if (!imgEl) {
    return;
  }

  if (imgEl.complete) {
    fit(imgEl, classes);
  } else {
    imgEl.addEventListener('load', function () {
      fit(imgEl, classes);
    });
  }
}

var GridListTile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function GridListTile(props, ref) {
  // cols rows default values are for docs only
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 1 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 1 : _props$rows,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "cols", "component", "rows"]);

  var imgRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    ensureImageCover(imgRef.current, classes);
  });
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_6__.default)(function () {
      fit(imgRef.current, classes);
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [classes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: classes.tile
  }, react__WEBPACK_IMPORTED_MODULE_3__.Children.map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.isValidElement(child)) {
      return null;
    }

    if (child.type === 'img' || (0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_7__.default)(child, ['Image'])) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(child, {
        ref: imgRef
      });
    }

    return child;
  })));
});
 true ? GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * Width of the tile in number of grid cells.
   */
  cols: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Height of the tile in number of grid cells.
   */
  rows: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiGridListTile'
})(GridListTile));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/isMuiElement.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isMuiElement
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
;
function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "./src/components/GalleryModel/GalleryModel.js":
/*!*****************************************************!*\
  !*** ./src/components/GalleryModel/GalleryModel.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/GridList/GridList.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/GridListTile/GridListTile.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
;const styles=()=>({imgContainer:{background:'#1c1c1e',textAlign:'center'}});const GalleryModel=props=>{const{classes,list=[]}=props;let count=0;let videoRendered=false;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default,{cellHeight:150,className:classes.gridList,cols:3},list.map((item,i)=>{const isByFour=(i+1)%4===0;const isVideo=item.type==='video';const col=isVideo?2:isByFour?2:1;const row=isVideo?2:videoRendered&&(count+1)%3===0?2:1;videoRendered=isVideo;count+=col;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default,{key:`${item.value}-${i}`,cols:col,rows:row,classes:{tile:classes.imgContainer}},isVideo?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video",{src:item.value,controls:true,height:'100%'}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:item.value}));}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default)(styles)(GalleryModel));

/***/ }),

/***/ "./src/components/Sections/Desgastar.js":
/*!**********************************************!*\
  !*** ./src/components/Sections/Desgastar.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _SectionStructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionStructure */ "./src/components/Sections/SectionStructure.js");
/* harmony import */ var _GalleryModel_GalleryModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GalleryModel/GalleryModel */ "./src/components/GalleryModel/GalleryModel.js");
/* harmony import */ var _constants_desgastar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/desgastar */ "./src/constants/desgastar.js");
;const styles=()=>({contentContainer:{padding:[[10,30]],maxWidth:800,margin:[[0,'auto']]}});const Desgastar=props=>{const{classes}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SectionStructure__WEBPACK_IMPORTED_MODULE_1__.default,props,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default,{container:true,classes:{root:classes.contentContainer}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GalleryModel_GalleryModel__WEBPACK_IMPORTED_MODULE_2__.default,{list:_constants_desgastar__WEBPACK_IMPORTED_MODULE_3__.desgastarGallery})));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)(styles)(Desgastar));

/***/ }),

/***/ "./src/components/Sections/SectionStructure.js":
/*!*****************************************************!*\
  !*** ./src/components/Sections/SectionStructure.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
;const styles=()=>({sectionContainer:{width:'100%',minHeight:'100%',background:'#fafde8'},header:{padding:[[50,30,0]],flex:'1'},content:{padding:[[25,30,30]]},title:{padding:[[15,0]],color:'#fff'},subtitle:{color:'#fff',margin:[[10,0,25]],fontWeight:300,fontSize:12,maxWidth:350},contentContainer:{}});const SectionStructure=props=>{const{title,background,children,classes}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classes.sectionContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default,{item:true,classes:{root:classes.header},style:{background:background}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default,{variant:'h2',classes:{root:classes.title}},title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classes.content},children));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default)(styles)(SectionStructure));

/***/ }),

/***/ "./src/constants/desgastar.js":
/*!************************************!*\
  !*** ./src/constants/desgastar.js ***!
  \************************************/
/*! namespace exports */
/*! export desgastarGallery [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "desgastarGallery": () => /* binding */ desgastarGallery
/* harmony export */ });
/**
 * Section Desgastar Content
 */const desgastarGallery=[{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'},{type:'video',value:'./assets/img/backgrounds/vid.mp4'},{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'},{value:'./assets/img/sections/section1.jpg'}];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYWltZXBpbnpvbi5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0dyaWRMaXN0L0dyaWRMaXN0LmpzIiwid2VicGFjazovL2phaW1lcGluem9uLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3JpZExpc3RUaWxlL0dyaWRMaXN0VGlsZS5qcyIsIndlYnBhY2s6Ly9qYWltZXBpbnpvbi5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2lzTXVpRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYWltZXBpbnpvbi5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5TW9kZWwvR2FsbGVyeU1vZGVsLmpzIiwid2VicGFjazovL2phaW1lcGluem9uLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0Rlc2dhc3Rhci5qcyIsIndlYnBhY2s6Ly9qYWltZXBpbnpvbi5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9TZWN0aW9uU3RydWN0dXJlLmpzIiwid2VicGFjazovL2phaW1lcGluem9uLmdpdGh1Yi5pby8uL3NyYy9jb25zdGFudHMvZGVzZ2FzdGFyLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImltZ0NvbnRhaW5lciIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJHYWxsZXJ5TW9kZWwiLCJwcm9wcyIsImNsYXNzZXMiLCJsaXN0IiwiY291bnQiLCJ2aWRlb1JlbmRlcmVkIiwiZ3JpZExpc3QiLCJtYXAiLCJpdGVtIiwiaSIsImlzQnlGb3VyIiwiaXNWaWRlbyIsInR5cGUiLCJjb2wiLCJyb3ciLCJ2YWx1ZSIsInRpbGUiLCJ3aXRoU3R5bGVzIiwiY29udGVudENvbnRhaW5lciIsInBhZGRpbmciLCJtYXhXaWR0aCIsIm1hcmdpbiIsIkRlc2dhc3RhciIsInJvb3QiLCJkZXNnYXN0YXJHYWxsZXJ5Iiwic2VjdGlvbkNvbnRhaW5lciIsIndpZHRoIiwibWluSGVpZ2h0IiwiaGVhZGVyIiwiZmxleCIsImNvbnRlbnQiLCJ0aXRsZSIsImNvbG9yIiwic3VidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJTZWN0aW9uU3RydWN0dXJlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUEwRDtBQUNnQztBQUMzRDtBQUNPO0FBQ0g7QUFDWDtBQUNzQjtBQUN2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyRkFBd0I7O0FBRXRDLHNCQUFzQixnREFBbUIsWUFBWSwyRUFBUTtBQUM3RCxlQUFlLDZDQUFJO0FBQ25CO0FBQ0EsV0FBVywyRUFBUTtBQUNuQjtBQUNBLEtBQUs7QUFDTCxHQUFHLFVBQVUsK0NBQWtCO0FBQy9CLHVCQUF1QixpREFBb0I7QUFDM0M7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDLFVBQVUsb0RBQVU7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsK0NBQWtCO0FBQzFDLGFBQWEsMkVBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNELEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyREFBbUIsRUFBRSwwREFBZ0IsRUFBRSx1REFBZTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBeUI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBMkI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQWdCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFn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LEtBQUssQ0FBRSxvQ0FEVCxDQVY4QixDQWE5QixDQUNFQSxLQUFLLENBQUUsb0NBRFQsQ0FiOEIsQ0FnQjlCLENBQ0VILElBQUksQ0FBRSxPQURSLENBRUVHLEtBQUssQ0FBRSxrQ0FGVCxDQWhCOEIsQ0FvQjlCLENBQ0VBLEtBQUssQ0FBRSxvQ0FEVCxDQXBCOEIsQ0F1QjlCLENBQ0VBLEtBQUssQ0FBRSxvQ0FEVCxDQXZCOEIsQ0EwQjlCLENBQ0VBLEtBQUssQ0FBRSxvQ0FEVCxDQTFCOEIsQ0E2QjlCLENBQ0VBLEtBQUssQ0FBRSxvQ0FEVCxDQTdCOEIsQ0FnQzlCLENBQ0VBLEtBQUssQ0FBRSxvQ0FEVCxDQWhDOEIsQ0FBekIsQyIsImZpbGUiOiJzcmNfY29tcG9uZW50c19TZWN0aW9uc19EZXNnYXN0YXJfanMuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuXG4gIH1cbn07XG52YXIgR3JpZExpc3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcmlkTGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkY2VsbEhlaWdodCA9IHByb3BzLmNlbGxIZWlnaHQsXG4gICAgICBjZWxsSGVpZ2h0ID0gX3Byb3BzJGNlbGxIZWlnaHQgPT09IHZvaWQgMCA/IDE4MCA6IF9wcm9wcyRjZWxsSGVpZ2h0LFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbHMgPSBwcm9wcy5jb2xzLFxuICAgICAgY29scyA9IF9wcm9wcyRjb2xzID09PSB2b2lkIDAgPyAyIDogX3Byb3BzJGNvbHMsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ3VsJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkc3BhY2luZyA9IHByb3BzLnNwYWNpbmcsXG4gICAgICBzcGFjaW5nID0gX3Byb3BzJHNwYWNpbmcgPT09IHZvaWQgMCA/IDQgOiBfcHJvcHMkc3BhY2luZyxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2VsbEhlaWdodFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbHNcIiwgXCJjb21wb25lbnRcIiwgXCJzcGFjaW5nXCIsIFwic3R5bGVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICBtYXJnaW46IC1zcGFjaW5nIC8gMlxuICAgIH0sIHN0eWxlKVxuICB9LCBvdGhlciksIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgR3JpZExpc3QgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hpbGRDb2xzID0gY2hpbGQucHJvcHMuY29scyB8fCAxO1xuICAgIHZhciBjaGlsZFJvd3MgPSBjaGlsZC5wcm9wcy5yb3dzIHx8IDE7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdCgxMDAgLyBjb2xzICogY2hpbGRDb2xzLCBcIiVcIiksXG4gICAgICAgIGhlaWdodDogY2VsbEhlaWdodCA9PT0gJ2F1dG8nID8gJ2F1dG8nIDogY2VsbEhlaWdodCAqIGNoaWxkUm93cyArIHNwYWNpbmcsXG4gICAgICAgIHBhZGRpbmc6IHNwYWNpbmcgLyAyXG4gICAgICB9LCBjaGlsZC5wcm9wcy5zdHlsZSlcbiAgICB9KTtcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcmlkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcHggZm9yIG9uZSBjZWxsIGhlaWdodC5cbiAgICogWW91IGNhbiBzZXQgYCdhdXRvJ2AgaWYgeW91IHdhbnQgdG8gbGV0IHRoZSBjaGlsZHJlbiBkZXRlcm1pbmUgdGhlIGhlaWdodC5cbiAgICovXG4gIGNlbGxIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSldKSxcblxuICAvKipcbiAgICogR3JpZCBUaWxlcyB0aGF0IHdpbGwgYmUgaW4gR3JpZCBMaXN0LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBjb2x1bW5zLlxuICAgKi9cbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBweCBmb3IgdGhlIHNwYWNpbmcgYmV0d2VlbiB0aWxlcy5cbiAgICovXG4gIHNwYWNpbmc6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUdyaWRMaXN0J1xufSkoR3JpZExpc3QpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGlzTXVpRWxlbWVudCBmcm9tICcuLi91dGlscy9pc011aUVsZW1lbnQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBkaXZgIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgY2hpbGRyZW4uICovXG4gIHRpbGU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIC8vIEluIGNhc2UgaXQncyBub3QgcmVuZGVyZWQgd2l0aCBhIGRpdi5cbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byBhbiBgaW1nYCBlbGVtZW50IGNoaWxkLCBpZiBuZWVkZWQgdG8gZW5zdXJlIGl0IGNvdmVycyB0aGUgdGlsZS4gKi9cbiAgaW1nRnVsbEhlaWdodDoge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICc1MCUnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gYW4gYGltZ2AgZWxlbWVudCBjaGlsZCwgaWYgbmVlZGVkIHRvIGVuc3VyZSBpdCBjb3ZlcnMgdGhlIHRpbGUuICovXG4gIGltZ0Z1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgdG9wOiAnNTAlJ1xuICB9XG59O1xuXG52YXIgZml0ID0gZnVuY3Rpb24gZml0KGltZ0VsLCBjbGFzc2VzKSB7XG4gIGlmICghaW1nRWwgfHwgIWltZ0VsLmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGltZ0VsLndpZHRoIC8gaW1nRWwuaGVpZ2h0ID4gaW1nRWwucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCAvIGltZ0VsLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgdmFyIF9pbWdFbCRjbGFzc0xpc3QsIF9pbWdFbCRjbGFzc0xpc3QyO1xuXG4gICAgKF9pbWdFbCRjbGFzc0xpc3QgPSBpbWdFbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfaW1nRWwkY2xhc3NMaXN0LCBfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3Nlcy5pbWdGdWxsV2lkdGguc3BsaXQoJyAnKSkpO1xuXG4gICAgKF9pbWdFbCRjbGFzc0xpc3QyID0gaW1nRWwuY2xhc3NMaXN0KS5hZGQuYXBwbHkoX2ltZ0VsJGNsYXNzTGlzdDIsIF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzLmltZ0Z1bGxIZWlnaHQuc3BsaXQoJyAnKSkpO1xuICB9IGVsc2Uge1xuICAgIHZhciBfaW1nRWwkY2xhc3NMaXN0MywgX2ltZ0VsJGNsYXNzTGlzdDQ7XG5cbiAgICAoX2ltZ0VsJGNsYXNzTGlzdDMgPSBpbWdFbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfaW1nRWwkY2xhc3NMaXN0MywgX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMuaW1nRnVsbEhlaWdodC5zcGxpdCgnICcpKSk7XG5cbiAgICAoX2ltZ0VsJGNsYXNzTGlzdDQgPSBpbWdFbC5jbGFzc0xpc3QpLmFkZC5hcHBseShfaW1nRWwkY2xhc3NMaXN0NCwgX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMuaW1nRnVsbFdpZHRoLnNwbGl0KCcgJykpKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZW5zdXJlSW1hZ2VDb3ZlcihpbWdFbCwgY2xhc3Nlcykge1xuICBpZiAoIWltZ0VsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGltZ0VsLmNvbXBsZXRlKSB7XG4gICAgZml0KGltZ0VsLCBjbGFzc2VzKTtcbiAgfSBlbHNlIHtcbiAgICBpbWdFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgZml0KGltZ0VsLCBjbGFzc2VzKTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgR3JpZExpc3RUaWxlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gR3JpZExpc3RUaWxlKHByb3BzLCByZWYpIHtcbiAgLy8gY29scyByb3dzIGRlZmF1bHQgdmFsdWVzIGFyZSBmb3IgZG9jcyBvbmx5XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29scyA9IHByb3BzLmNvbHMsXG4gICAgICBjb2xzID0gX3Byb3BzJGNvbHMgPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkY29scyxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnbGknIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRyb3dzID0gcHJvcHMucm93cyxcbiAgICAgIHJvd3MgPSBfcHJvcHMkcm93cyA9PT0gdm9pZCAwID8gMSA6IF9wcm9wcyRyb3dzLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbHNcIiwgXCJjb21wb25lbnRcIiwgXCJyb3dzXCJdKTtcblxuICB2YXIgaW1nUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUltYWdlQ292ZXIoaW1nUmVmLmN1cnJlbnQsIGNsYXNzZXMpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZml0KGltZ1JlZi5jdXJyZW50LCBjbGFzc2VzKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbY2xhc3Nlc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMudGlsZVxuICB9LCBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjaGlsZC50eXBlID09PSAnaW1nJyB8fCBpc011aUVsZW1lbnQoY2hpbGQsIFsnSW1hZ2UnXSkpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHJlZjogaW1nUmVmXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEdyaWRMaXN0VGlsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGVvcmV0aWNhbGx5IHlvdSBjYW4gcGFzcyBhbnkgbm9kZSBhcyBjaGlsZHJlbiwgYnV0IHRoZSBtYWluIHVzZSBjYXNlIGlzIHRvIHBhc3MgYW4gaW1nLFxuICAgKiBpbiB3aGljaCBjYXNlIEdyaWRMaXN0VGlsZSB0YWtlcyBjYXJlIG9mIG1ha2luZyB0aGUgaW1hZ2UgXCJjb3ZlclwiIGF2YWlsYWJsZSBzcGFjZVxuICAgKiAoc2ltaWxhciB0byBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcmAgb3IgdG8gYG9iamVjdC1maXQ6IGNvdmVyYCkuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSB0aWxlIGluIG51bWJlciBvZiBncmlkIGNlbGxzLlxuICAgKi9cbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIEhlaWdodCBvZiB0aGUgdGlsZSBpbiBudW1iZXIgb2YgZ3JpZCBjZWxscy5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXJcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpR3JpZExpc3RUaWxlJ1xufSkoR3JpZExpc3RUaWxlKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc011aUVsZW1lbnQoZWxlbWVudCwgbXVpTmFtZXMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSAmJiBtdWlOYW1lcy5pbmRleE9mKGVsZW1lbnQudHlwZS5tdWlOYW1lKSAhPT0gLTE7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt3aXRoU3R5bGVzLCBHcmlkTGlzdCwgR3JpZExpc3RUaWxlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4gKHtcbiAgaW1nQ29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogJyMxYzFjMWUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfVxufSlcblxuY29uc3QgR2FsbGVyeU1vZGVsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NlcywgbGlzdCA9IFtdIH0gPSBwcm9wc1xuICBsZXQgY291bnQgPSAwXG4gIGxldCB2aWRlb1JlbmRlcmVkID0gZmFsc2VcblxuICByZXR1cm4gKFxuICAgIDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXsxNTB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlzdH0gY29scz17M30+XG4gICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgaXNCeUZvdXIgPSAoKGkrMSkgJSA0KSA9PT0gMFxuICAgICAgICBjb25zdCBpc1ZpZGVvID0gaXRlbS50eXBlID09PSAndmlkZW8nXG4gICAgICAgIGNvbnN0IGNvbCA9IGlzVmlkZW8gPyAyIDogaXNCeUZvdXIgPyAyIDogMVxuICAgICAgICBjb25zdCByb3cgPSBpc1ZpZGVvID8gMiA6ICh2aWRlb1JlbmRlcmVkICYmICgoY291bnQrMSkgJSAzID09PSAwKSkgPyAyIDogMVxuICAgICAgICB2aWRlb1JlbmRlcmVkID0gaXNWaWRlb1xuICAgICAgICBjb3VudCArPSBjb2xcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXtgJHtpdGVtLnZhbHVlfS0ke2l9YH0gY29scz17Y29sfSByb3dzPXtyb3d9IGNsYXNzZXM9e3sgdGlsZTogY2xhc3Nlcy5pbWdDb250YWluZXIgfX0+XG4gICAgICAgICAgICB7aXNWaWRlbyA/XG4gICAgICAgICAgICAgIDx2aWRlbyBzcmM9e2l0ZW0udmFsdWV9IGNvbnRyb2xzIGhlaWdodD17JzEwMCUnfSAvPlxuICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtpdGVtLnZhbHVlfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC9HcmlkTGlzdFRpbGU+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvR3JpZExpc3Q+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEdhbGxlcnlNb2RlbCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHcmlkLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgU2VjdGlvblN0cnVjdHVyZSBmcm9tICcuL1NlY3Rpb25TdHJ1Y3R1cmUnXG5pbXBvcnQgR2FsbGVyeU1vZGVsIGZyb20gJy4uL0dhbGxlcnlNb2RlbC9HYWxsZXJ5TW9kZWwnXG5pbXBvcnQgeyBkZXNnYXN0YXJHYWxsZXJ5IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2Rlc2dhc3RhcidcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4gKHtcbiAgY29udGVudENvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IFtbMTAsIDMwXV0sXG4gICAgbWF4V2lkdGg6IDgwMCxcbiAgICBtYXJnaW46IFtbMCwgJ2F1dG8nXV1cbiAgfVxufSlcblxuY29uc3QgRGVzZ2FzdGFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uU3RydWN0dXJlIHsuLi5wcm9wc30+XG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3Nlcz17e3Jvb3Q6IGNsYXNzZXMuY29udGVudENvbnRhaW5lcn19PlxuICAgICAgICA8R2FsbGVyeU1vZGVsIGxpc3Q9e2Rlc2dhc3RhckdhbGxlcnl9Lz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1NlY3Rpb25TdHJ1Y3R1cmU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKERlc2dhc3RhcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4gKHtcbiAgc2VjdGlvbkNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZDogJyNmYWZkZTgnXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHBhZGRpbmc6IFtbNTAsIDMwLCAwXV0sXG4gICAgZmxleDogJzEnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiBbWzI1LCAzMCwgMzBdXVxuICB9LFxuICB0aXRsZToge1xuICAgIHBhZGRpbmc6IFtbMTUsIDBdXSxcbiAgICBjb2xvcjogJyNmZmYnXG4gIH0sXG4gIHN1YnRpdGxlOiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBtYXJnaW46IFtbMTAsIDAsIDI1XV0sXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBtYXhXaWR0aDogMzUwXG4gIH0sXG4gIGNvbnRlbnRDb250YWluZXI6IHt9XG59KVxuXG5jb25zdCBTZWN0aW9uU3RydWN0dXJlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGJhY2tncm91bmQsIGNoaWxkcmVuLCBjbGFzc2VzIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Db250YWluZXJ9PlxuICAgICAgPEdyaWQgaXRlbSBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuaGVhZGVyfX0gc3R5bGU9e3sgYmFja2dyb3VuZDogYmFja2dyb3VuZH19PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnaDInfSBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMudGl0bGUgfX0+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2VjdGlvblN0cnVjdHVyZSkiLCIvKipcbiAqIFNlY3Rpb24gRGVzZ2FzdGFyIENvbnRlbnRcbiAqL1xuXG5leHBvcnQgY29uc3QgZGVzZ2FzdGFyR2FsbGVyeSA9IFtcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHR5cGU6ICd2aWRlbycsXG4gICAgdmFsdWU6ICcuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvdmlkLm1wNCdcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnLi9hc3NldHMvaW1nL3NlY3Rpb25zL3NlY3Rpb24xLmpwZydcbiAgfVxuXSJdLCJzb3VyY2VSb290IjoiIn0=