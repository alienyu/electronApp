webpackJsonp([28],{

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

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.List = undefined;
	
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
	
	var List = exports.List = function (_React$Component) {
	    (0, _inherits3.default)(List, _React$Component);
	
	    function List(props) {
	        (0, _classCallCheck3.default)(this, List);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));
	
	        _this.state = {
	            loading: true,
	            columns: [{
	                title: "投递人",
	                render: function render(data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: 'divClick', onClick: _this.goToUserDetail.bind(_this, data.userID) },
	                        data.userName
	                    );
	                }
	
	            }, {
	                title: "投递内容",
	                dataIndex: "content"
	            }, {
	                title: "投递文件",
	                render: function render(data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: 'divClick', onClick: _this.downloadFile.bind(_this, data.fileLink) },
	                        data.fileName
	                    );
	                }
	            }, {
	                title: "投递时间",
	                dataIndex: "time"
	            }, {
	                title: "操作",
	                render: function render(data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { style: { "textAlign": "center" } },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: _this.detailInfo.bind(_this, data.id), style: { "marginRight": "20px" } },
	                            '\u67E5\u770B'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Popconfirm,
	                            { placement: 'left', title: '\u662F\u5426\u786E\u8BA4\u5220\u9664?', onConfirm: _this.deleteInfo.bind(_this, data.id), okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' },
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
	            }
	        };
	        ['loadListData', 'goToUserDetail', 'detailInfo', 'deleteInfo', 'changePage', 'downloadFile'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(List, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.loadListData(1);
	        }
	    }, {
	        key: 'goToUserDetail',
	        value: function goToUserDetail(id) {
	            _reactRouter.hashHistory.push("/user/manage/detail/" + id);
	        }
	    }, {
	        key: 'detailInfo',
	        value: function detailInfo(id) {
	            _reactRouter.hashHistory.push("/delegateFund/receivedProject/detail/" + id);
	        }
	    }, {
	        key: 'deleteInfo',
	        value: function deleteInfo(id) {
	            var that = this;
	            ajax({
	                url: "/delegateFund/receivedProject/deleteInfo",
	                method: "post",
	                data: { id: id },
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        _antd.message.success("删除成功", 1);
	                        var newDataSource = that.state.dataSource.filter(function (item) {
	                            return item.id != id;
	                        });
	                        that.setState({ dataSource: newDataSource });
	                    } else {
	                        _antd.message.error(data.errMsg, 1);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'downloadFile',
	        value: function downloadFile(link) {
	            location.href = link;
	        }
	    }, {
	        key: 'loadListData',
	        value: function loadListData(page) {
	            var that = this;
	            ajax({
	                url: "/delegateFund/receivedProject/getInfoList",
	                method: "post",
	                data: {
	                    id: that.props.location.query.fundID,
	                    current: page
	                },
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        that.setState({
	                            pagination: {
	                                current: data.data.current,
	                                total: data.data.total
	                            },
	                            dataSource: data.data.list,
	                            loading: false
	                        });
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
	        value: function changePage(page) {
	            this.loadListData(page.current);
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
	                        { style: { marginBottom: 30 }, icon: 'rollback', onClick: this.return },
	                        '\u8FD4\u56DE'
	                    ),
	                    _react2.default.createElement(
	                        _antd.Spin,
	                        { spinning: this.state.loading, tip: 'Loading...' },
	                        _react2.default.createElement(_antd.Table, {
	                            bordered: true,
	                            dataSource: this.state.dataSource,
	                            columns: this.state.columns,
	                            pagination: this.state.pagination,
	                            onChange: this.changePage
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	    return List;
	}(_react2.default.Component);
	
	module.exports = List;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ })

});
//# sourceMappingURL=28.chunk.js.map