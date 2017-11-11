webpackJsonp([17],{

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _stringify = __webpack_require__(1126);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(170);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = function (ops) {
	    var config = (0, _assign2.default)({
	        url: "",
	        data: "",
	        callback: function callback() {}
	    }, ops);
	    if (config.url.match(/^\//)) {
	        config.url = config.url.substr(1, config.url.length);
	    }
	    $.ajax({
	        url: "/v1/" + config.url,
	        type: "post",
	        headers: { token: localStorage.getItem("token") },
	        contentType: "application/json; charset=utf-8",
	        data: (0, _stringify2.default)(config.data),
	        success: function success(data) {
	            if (data.status == 1001) {
	                var currentPath = location.hash.split("#")[1].split("?")[0];
	                _reactRouter.hashHistory.push({
	                    pathname: "/common/login",
	                    search: "?returnPath=" + currentPath
	                });
	            } else {
	                config.callback.call(this, data);
	            }
	        }
	    });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1125)))

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(1127), __esModule: true };

/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(243);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.History = undefined;
	
	var _getPrototypeOf = __webpack_require__(277);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(282);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(283);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(287);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(321);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(170);
	
	var _antd = __webpack_require__(329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var History = exports.History = function (_React$Component) {
	    (0, _inherits3.default)(History, _React$Component);
	
	    function History(props) {
	        (0, _classCallCheck3.default)(this, History);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (History.__proto__ || (0, _getPrototypeOf2.default)(History)).call(this, props));
	
	        _this.state = {
	            columns: [{
	                title: '标题',
	                dataIndex: 'title'
	            }, {
	                title: '内容',
	                dataIndex: 'content'
	            }, {
	                title: '发送对象',
	                dataIndex: 'sendTo',
	                render: function render(sendTo) {
	                    switch (sendTo) {
	                        case "0":
	                            return "所有";
	                            break;
	                        case "1":
	                            return "资金方";
	                            break;
	                        case "2":
	                            return "项目方";
	                            break;
	                    }
	                }
	            }, {
	                title: '发送时间',
	                dataIndex: 'sendTime'
	            }, {
	                title: "操作",
	                dataIndex: 'key',
	                render: function render(key) {
	                    return _react2.default.createElement(
	                        'div',
	                        { style: { "textAlign": "center" } },
	                        _react2.default.createElement(
	                            _antd.Popconfirm,
	                            { placement: 'left', title: '\u662F\u5426\u786E\u8BA4\u5220\u9664?', onConfirm: _this.deleteHistory.bind(_this, key), okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' },
	                            _react2.default.createElement(
	                                _antd.Button,
	                                { type: 'danger' },
	                                '\u5220\u9664'
	                            )
	                        )
	                    );
	                }
	            }],
	            dataSource: [],
	            pagination: {
	                current: 1,
	                total: 0
	            },
	            loading: false
	        };
	        ['changePage'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(History, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.getHistoryList(1);
	        }
	    }, {
	        key: 'getHistoryList',
	        value: function getHistoryList(currentPage) {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/user/mail/getHistoryList",
	                method: "post",
	                data: {
	                    current: currentPage ? currentPage : 1
	                },
	                callback: function callback(data) {
	                    that.setState({
	                        loading: false,
	                        pagination: {
	                            current: currentPage,
	                            total: data.data.total
	                        },
	                        dataSource: data.data.list
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'deleteHistory',
	        value: function deleteHistory(key) {
	            var that = this;
	            ajax({
	                url: "/user/mail/deleteHistory",
	                method: "post",
	                data: { id: key },
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        _antd.message.success("删除成功", 1);
	                        var newDataSource = that.state.dataSource.filter(function (item) {
	                            return item.key != key;
	                        });
	                        that.setState({ dataSource: newDataSource });
	                    } else {
	                        _antd.message.error(data.errMsg, 1);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'return',
	        value: function _return() {
	            history.back();
	        }
	    }, {
	        key: 'changePage',
	        value: function changePage(pagination) {
	            this.getHistoryList(pagination.current);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _antd.Layout,
	                { style: { padding: '0 24px 24px' } },
	                _react2.default.createElement(
	                    _antd.Breadcrumb,
	                    { style: { margin: '12px 0' } },
	                    this.props.routes.map(function (item, index) {
	                        return _react2.default.createElement(
	                            _antd.Breadcrumb.Item,
	                            { key: '' },
	                            item.breadcrumbName
	                        );
	                    })
	                ),
	                _react2.default.createElement(
	                    Content,
	                    { style: { background: '#fff', padding: 24, margin: 0, minHeight: 280 } },
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { icon: 'rollback', onClick: this.return, style: { "marginBottom": "20px" } },
	                        '\u8FD4\u56DE'
	                    ),
	                    _react2.default.createElement(_antd.Table, {
	                        bordered: true,
	                        dataSource: this.state.dataSource,
	                        columns: this.state.columns,
	                        pagination: this.state.pagination,
	                        onChange: this.changePage,
	                        loading: this.state.loading
	                    })
	                )
	            );
	        }
	    }]);
	    return History;
	}(_react2.default.Component);
	
	module.exports = History;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ })

});
//# sourceMappingURL=17.chunk.js.map