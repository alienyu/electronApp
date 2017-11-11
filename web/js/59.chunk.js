webpackJsonp([59],{

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "qa",
	    breadcrumbName: "常见问题",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(60, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1256)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(61, function (require) {
	                        cb(null, __webpack_require__(1257));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(62, function (require) {
	                        cb(null, __webpack_require__(1259));
	                    });
	                }
	            }, {
	                path: 'detail/:id',
	                breadcrumbName: '查看',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(63, function (require) {
	                        cb(null, __webpack_require__(1260));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "feedback",
	    breadcrumbName: "意见反馈",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(64, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1262)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'detail/:id',
	                breadcrumbName: '查看',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(65, function (require) {
	                        cb(null, __webpack_require__(1263));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ })

});
//# sourceMappingURL=59.chunk.js.map