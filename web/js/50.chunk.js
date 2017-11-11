webpackJsonp([50],{

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "company",
	    breadcrumbName: "公司概况",
	    getComponent: function getComponent(location, cb) {
	        __webpack_require__.e/* nsure */(51, function (require) {
	            cb(null, __webpack_require__(1237));
	        });
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "news",
	    breadcrumbName: "行业动态",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(52, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1240)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(53, function (require) {
	                        cb(null, __webpack_require__(1241));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(54, function (require) {
	                        cb(null, __webpack_require__(1243));
	                    });
	                }
	            }, {
	                path: 'detail/:id',
	                breadcrumbName: '查看',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(55, function (require) {
	                        cb(null, __webpack_require__(1244));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1245:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "report",
	    breadcrumbName: "媒体报道",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(36, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1246)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(56, function (require) {
	                        cb(null, __webpack_require__(1247));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(57, function (require) {
	                        cb(null, __webpack_require__(1249));
	                    });
	                }
	            }, {
	                path: 'detail/:id',
	                breadcrumbName: '查看',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(37, function (require) {
	                        cb(null, __webpack_require__(1250));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "contact",
	    breadcrumbName: "联系方式",
	    getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(58, function (require) {
	            cb(null, __webpack_require__(1252));
	        });
	    }
	}, _routeEnter2.default);

/***/ })

});
//# sourceMappingURL=50.chunk.js.map