webpackJsonp([5],{

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

/***/ 1133:
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
	
	var _dataForm = __webpack_require__(1134);
	
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

/***/ 1134:
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
	var Option = _antd.Select.Option;
	var RadioGroup = _antd.Radio.Group;
	
	var DataForm = exports.DataForm = function (_React$Component) {
	    (0, _inherits3.default)(DataForm, _React$Component);
	
	    function DataForm(props) {
	        (0, _classCallCheck3.default)(this, DataForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (DataForm.__proto__ || (0, _getPrototypeOf2.default)(DataForm)).call(this, props));
	
	        _this.state = {
	            roleId: "",
	            account: "",
	            password: "",
	            confirmPassword: "",
	            name: "",
	            mobile: "",
	            status: "0",
	            loading: true
	        };
	        ['handleSubmit', 'checkPassword', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(DataForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            if (this.props.type == "add") {
	                this.setState({ loading: false });
	            } else {
	                ajax({
	                    url: "/auth/manage/getUserDetail",
	                    method: "post",
	                    data: {
	                        id: this.props.userID
	                    },
	                    callback: function callback(data) {
	                        that.setState({
	                            loading: false,
	                            roleId: data.data.roleId,
	                            account: data.data.account,
	                            password: data.data.password,
	                            confirmPassword: data.data.confirmPassword,
	                            name: data.data.name,
	                            mobile: data.data.mobile,
	                            status: data.data.status
	                        });
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
	                        values = (0, _assign2.default)(values, { id: _this2.props.userID });
	                    }
	                    ajax({
	                        url: "/auth/manage/updateUser",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("添加管理员成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/auth/manage");
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
	        key: 'checkPassword',
	        value: function checkPassword(rule, value, callback) {
	            var form = this.props.form;
	            if (value && value !== form.getFieldValue('password')) {
	                callback('两次密码输入不一致!');
	            } else {
	                callback();
	            }
	        }
	    }, {
	        key: 'returnList',
	        value: function returnList() {
	            _reactRouter.hashHistory.push("/auth/manage");
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
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u8D26\u53F7\u7C7B\u578B',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('roleId', {
	                            rules: [{ required: true, message: '请选择管理员类型!' }],
	                            initialValue: this.state.roleId.toString()
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { placeholder: '\u8BF7\u9009\u62E9\u8D26\u6237\u7C7B\u578B' },
	                            _react2.default.createElement(
	                                Option,
	                                { value: '1' },
	                                '\u8D85\u7EA7\u7BA1\u7406\u5458'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '2' },
	                                '\u7528\u6237\u7BA1\u7406\u5458'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '3' },
	                                '\u9879\u76EE\u7BA1\u7406\u5458'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '4' },
	                                '\u8D44\u91D1\u7BA1\u7406\u5458'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '5' },
	                                '\u5176\u4ED6\u7BA1\u7406\u5458'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u767B\u5F55\u8D26\u53F7',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('account', {
	                            rules: [{
	                                required: true, message: '请输入登录账号!'
	                            }],
	                            initialValue: this.state.account
	                        })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u53F7' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u767B\u5F55\u5BC6\u7801',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('password', {
	                            rules: [{
	                                required: true, message: '请输入登录密码!'
	                            }],
	                            initialValue: this.state.password
	                        })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u786E\u8BA4\u5BC6\u7801',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('confirmPassword', {
	                            rules: [{
	                                required: true, message: '请再次输入密码'
	                            }, {
	                                validator: this.checkPassword
	                            }],
	                            initialValue: this.state.password
	                        })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: '\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u7BA1\u7406\u5458\u59D3\u540D',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('name', {
	                            rules: [{
	                                required: true, message: '请输入管理员姓名!'
	                            }],
	                            initialValue: this.state.name
	                        })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u59D3\u540D' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u8054\u7CFB\u7535\u8BDD',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('mobile', {
	                            rules: [{
	                                required: true, message: '请输入联系电话!'
	                            }],
	                            initialValue: this.state.mobile
	                        })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u72B6\u6001'
	                        }),
	                        getFieldDecorator('status', {
	                            initialValue: this.state.status.toString()
	                        })(_react2.default.createElement(
	                            RadioGroup,
	                            null,
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u7981\u7528'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u542F\u7528'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        {
	                            wrapperCol: { span: 12, offset: 6 }
	                        },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', htmlType: 'submit', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
	                            '\u63D0\u4EA4'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { onClick: this.returnList, style: { "marginRight": "20px" } },
	                            '\u53D6\u6D88'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'danger', onClick: this.resetForm },
	                            '\u91CD\u7F6E'
	                        )
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
//# sourceMappingURL=5.chunk.js.map