webpackJsonp([70],{

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

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Add = undefined;
	
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
	
	var _antd = __webpack_require__(329);
	
	var _dataForm = __webpack_require__(1275);
	
	var _dataForm2 = _interopRequireDefault(_dataForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var Add = exports.Add = function (_React$Component) {
	    (0, _inherits3.default)(Add, _React$Component);
	
	    function Add(props) {
	        (0, _classCallCheck3.default)(this, Add);
	        return (0, _possibleConstructorReturn3.default)(this, (Add.__proto__ || (0, _getPrototypeOf2.default)(Add)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Add, [{
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
	                    _react2.default.createElement(_dataForm2.default, { type: 'add' })
	                )
	            );
	        }
	    }]);
	    return Add;
	}(_react2.default.Component);
	
	module.exports = Add;

/***/ }),

/***/ 1275:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DataForm = undefined;
	
	var _extends2 = __webpack_require__(332);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _assign = __webpack_require__(238);
	
	var _assign2 = _interopRequireDefault(_assign);
	
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
	
	var FormItem = _antd.Form.Item;
	
	var DataForm = exports.DataForm = function (_React$Component) {
	    (0, _inherits3.default)(DataForm, _React$Component);
	
	    function DataForm(props) {
	        (0, _classCallCheck3.default)(this, DataForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (DataForm.__proto__ || (0, _getPrototypeOf2.default)(DataForm)).call(this, props));
	
	        _this.state = {
	            name: "",
	            link: "",
	            loading: false
	        };
	        ['handleSubmit', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(DataForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            if (this.props.type == "edit") {
	                this.setState({ loading: true });
	                ajax({
	                    url: "/link/getInfoDetail",
	                    data: {
	                        id: this.props.id
	                    },
	                    callback: function callback(data) {
	                        if (data.status == 200) {
	                            var _data$data$detailInfo = data.data.detailInfo,
	                                name = _data$data$detailInfo.name,
	                                link = _data$data$detailInfo.link;
	
	                            that.setState({
	                                loading: false,
	                                name: name,
	                                link: link
	                            });
	                        } else {
	                            _antd.message.error(data.errMsg, 1);
	                        }
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            var _this2 = this;
	
	            e.preventDefault();
	            this.props.form.validateFields(function (err, values) {
	                if (!err) {
	                    if (_this2.props.type == "edit") {
	                        values = (0, _assign2.default)(values, { id: _this2.props.id });
	                    }
	                    ajax({
	                        url: "/link/updateInfo",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("设置成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/link");
	                                });
	                            } else {
	                                _antd.message.error(data.errMsg, 1);
	                            }
	                        }
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'returnList',
	        value: function returnList() {
	            _reactRouter.hashHistory.push("/link");
	        }
	    }, {
	        key: 'resetForm',
	        value: function resetForm() {
	            this.props.form.resetFields();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;
	
	            var formItemLayout = {
	                labelCol: { span: 6 },
	                wrapperCol: { span: 6 }
	            };
	            return _react2.default.createElement(
	                _antd.Spin,
	                { spinning: this.state.loading, tip: 'Loading...' },
	                _react2.default.createElement(
	                    _antd.Form,
	                    null,
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u94FE\u63A5\u540D\u79F0',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('name', {
	                            rules: [{ required: true, message: '请输入名称!' }],
	                            initialValue: this.state.name
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u94FE\u63A5\u5730\u5740',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('link', {
	                            rules: [{ required: true, message: '请输入链接地址!' }],
	                            initialValue: this.state.link
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        {
	                            wrapperCol: { span: 12, offset: 6 }
	                        },
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
	                            '\u63D0\u4EA4'
	                        ) : "",
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { onClick: this.returnList, style: { "marginRight": "20px" } },
	                            '\u53D6\u6D88'
	                        ),
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'danger', onClick: this.resetForm },
	                            '\u91CD\u7F6E'
	                        ) : ""
	                    )
	                )
	            );
	        }
	    }]);
	    return DataForm;
	}(_react2.default.Component);
	
	var WrappedDataForm = _antd.Form.create({})(DataForm);
	
	module.exports = WrappedDataForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ })

});
//# sourceMappingURL=70.chunk.js.map