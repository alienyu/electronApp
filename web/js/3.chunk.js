webpackJsonp([3],{

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "auth/manage",
	    breadcrumbName: "管理员管理",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(4, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1132)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(5, function (require) {
	                        cb(null, __webpack_require__(1133));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(6, function (require) {
	                        cb(null, __webpack_require__(1135));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "auth/admin",
	    breadcrumbName: "管理员及权限",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(7, function (require) {
	            callback(null, {
	                breadcrumbName: '用户',
	                component: __webpack_require__(1137)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'user',
	                breadcrumbName: '用户',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(7, function (require) {
	                        cb(null, __webpack_require__(1137));
	                    });
	                }
	            }, {
	                path: 'project',
	                breadcrumbName: '项目',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(8, function (require) {
	                        cb(null, __webpack_require__(1139));
	                    });
	                }
	            }, {
	                path: 'fund',
	                breadcrumbName: '资金',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(9, function (require) {
	                        cb(null, __webpack_require__(1140));
	                    });
	                }
	            }, {
	                path: 'other',
	                breadcrumbName: '其他',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(10, function (require) {
	                        cb(null, __webpack_require__(1141));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "user/manage",
	    breadcrumbName: "用户管理",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(11, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1143)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'detail/:id',
	                breadcrumbName: '详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(12, function (require) {
	                        cb(null, __webpack_require__(1145));
	                    });
	                }
	            }, {
	                path: 'audit/:id',
	                breadcrumbName: '审核',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(13, function (require) {
	                        cb(null, __webpack_require__(1147));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "user/message",
	    breadcrumbName: "群发短信",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(14, function (require) {
	            callback(null, {
	                breadcrumbName: '编辑',
	                component: __webpack_require__(1149)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'history',
	                breadcrumbName: '历史',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(15, function (require) {
	                        cb(null, __webpack_require__(1151));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "user/mail",
	    breadcrumbName: "群发邮件",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(16, function (require) {
	            callback(null, {
	                breadcrumbName: '编辑',
	                component: __webpack_require__(1153)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'history',
	                breadcrumbName: '历史',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(17, function (require) {
	                        cb(null, __webpack_require__(1155));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "fund/normal",
	    breadcrumbName: "普通资金",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(18, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1157)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'detail/:id',
	                breadcrumbName: '详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(19, function (require) {
	                        cb(null, __webpack_require__(1159));
	                    });
	                }
	            }, {
	                path: 'audit/:id',
	                breadcrumbName: '审核',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(20, function (require) {
	                        cb(null, __webpack_require__(1168));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "project/normal",
	    breadcrumbName: "普通项目",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(21, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1170)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'detail/:id',
	                breadcrumbName: '详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(22, function (require) {
	                        cb(null, __webpack_require__(1172));
	                    });
	                }
	            }, {
	                path: 'audit/:id',
	                breadcrumbName: '审核',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(23, function (require) {
	                        cb(null, __webpack_require__(1178));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "delegateFund",
	    breadcrumbName: "委托资金",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(24, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1180)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'detail/:id',
	                breadcrumbName: '详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(25, function (require) {
	                        cb(null, __webpack_require__(1182));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(26, function (require) {
	                        cb(null, __webpack_require__(1191));
	                    });
	                }
	            }, {
	                path: 'new',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(27, function (require) {
	                        cb(null, __webpack_require__(1192));
	                    });
	                }
	            }, {
	                path: 'receivedProject/list',
	                breadcrumbName: '收到的投递项目列表',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(28, function (require) {
	                        cb(null, __webpack_require__(1193));
	                    });
	                }
	            }, {
	                path: 'receivedProject/detail/:id',
	                breadcrumbName: '收到的投递项目详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(29, function (require) {
	                        cb(null, __webpack_require__(1194));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "delegateProject",
	    breadcrumbName: "委托项目",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(30, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1197)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'detail/:id',
	                breadcrumbName: '详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(31, function (require) {
	                        cb(null, __webpack_require__(1199));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(32, function (require) {
	                        cb(null, __webpack_require__(1205));
	                    });
	                }
	            }, {
	                path: 'new',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(33, function (require) {
	                        cb(null, __webpack_require__(1206));
	                    });
	                }
	            }, {
	                path: 'receivedFund/list',
	                breadcrumbName: '收到的投递资金列表',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(34, function (require) {
	                        cb(null, __webpack_require__(1207));
	                    });
	                }
	            }, {
	                path: 'receivedFund/detail/:id',
	                breadcrumbName: '收到的投递资金详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(35, function (require) {
	                        cb(null, __webpack_require__(1208));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "report",
	    breadcrumbName: "举报管理",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(36, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1211)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'detail/:id',
	                breadcrumbName: "详情",
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(37, function (require) {
	                        cb(null, __webpack_require__(1212));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "notice",
	    breadcrumbName: "公告管理",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(38, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1214)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(39, function (require) {
	                        cb(null, __webpack_require__(1215));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(40, function (require) {
	                        cb(null, __webpack_require__(1218));
	                    });
	                }
	            }, {
	                path: 'detail/:id',
	                breadcrumbName: '查看',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(41, function (require) {
	                        cb(null, __webpack_require__(1219));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "adv",
	    breadcrumbName: "广告管理",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(42, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1221)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(43, function (require) {
	                        cb(null, __webpack_require__(1222));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(44, function (require) {
	                        cb(null, __webpack_require__(1226));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "activity",
	    breadcrumbName: "活动管理",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(45, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1228)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(46, function (require) {
	                        cb(null, __webpack_require__(1229));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(47, function (require) {
	                        cb(null, __webpack_require__(1232));
	                    });
	                }
	            }, {
	                path: 'detail/:id',
	                breadcrumbName: '详情',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(48, function (require) {
	                        cb(null, __webpack_require__(1233));
	                    });
	                }
	            }, {
	                path: 'signUp/:id',
	                breadcrumbName: '报名列表',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(49, function (require) {
	                        cb(null, __webpack_require__(1234));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "platform",
	    breadcrumbName: "平台管理",
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        __webpack_require__.e/* nsure */(50, function (require) {
	            cb(null, [__webpack_require__(1236), __webpack_require__(1239), __webpack_require__(1245), __webpack_require__(1251)]);
	        });
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1254:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "help",
	    breadcrumbName: "帮助中心",
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        __webpack_require__.e/* nsure */(59, function (require) {
	            cb(null, [__webpack_require__(1255), __webpack_require__(1261)]);
	        });
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1265:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "finance",
	    breadcrumbName: "财务管理",
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        __webpack_require__.e/* nsure */(66, function (require) {
	            cb(null, [__webpack_require__(1266), __webpack_require__(1269)]);
	        });
	    }
	}, _routeEnter2.default);

/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _routeEnter = __webpack_require__(275);
	
	var _routeEnter2 = _interopRequireDefault(_routeEnter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _assign2.default)({
	    path: "link",
	    breadcrumbName: "友情链接",
	    getIndexRoute: function getIndexRoute(nextState, callback) {
	        __webpack_require__.e/* nsure */(69, function (require) {
	            callback(null, {
	                breadcrumbName: '列表',
	                component: __webpack_require__(1273)
	            });
	        });
	    },
	    getChildRoutes: function getChildRoutes(partialNextState, cb) {
	        !/* require.ensure */(function (require) {
	            cb(null, [{
	                path: 'add',
	                breadcrumbName: '新增',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(70, function (require) {
	                        cb(null, __webpack_require__(1274));
	                    });
	                }
	            }, {
	                path: 'edit/:id',
	                breadcrumbName: '修改',
	                getComponent: function getComponent(nextState, cb) {
	                    __webpack_require__.e/* nsure */(71, function (require) {
	                        cb(null, __webpack_require__(1276));
	                    });
	                }
	            }]);
	        }(__webpack_require__));
	    }
	}, _routeEnter2.default);

/***/ })

});
//# sourceMappingURL=3.chunk.js.map