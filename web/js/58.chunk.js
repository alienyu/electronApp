webpackJsonp([58],{

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

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Edit = undefined;
	
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
	
	var _dataForm = __webpack_require__(1253);
	
	var _dataForm2 = _interopRequireDefault(_dataForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var Edit = exports.Edit = function (_React$Component) {
	    (0, _inherits3.default)(Edit, _React$Component);
	
	    function Edit(props) {
	        (0, _classCallCheck3.default)(this, Edit);
	        return (0, _possibleConstructorReturn3.default)(this, (Edit.__proto__ || (0, _getPrototypeOf2.default)(Edit)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Edit, [{
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
	                    _react2.default.createElement(_dataForm2.default, null)
	                )
	            );
	        }
	    }]);
	    return Edit;
	}(_react2.default.Component);
	
	module.exports = Edit;

/***/ }),

/***/ 1253:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DataForm = undefined;
	
	var _extends2 = __webpack_require__(332);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
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
	            loading: true,
	            "exchangeNumber": "",
	            "helpNumber": "",
	            "fax": "",
	            "address": "",
	            "postcode": "",
	            "email": ""
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
	            this.setState({ loading: false });
	            ajax({
	                url: "/platform/contact/getInfoDetail",
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        var _data$data$detailInfo = data.data.detailInfo,
	                            exchangeNumber = _data$data$detailInfo.exchangeNumber,
	                            helpNumber = _data$data$detailInfo.helpNumber,
	                            fax = _data$data$detailInfo.fax,
	                            address = _data$data$detailInfo.address,
	                            postcode = _data$data$detailInfo.postcode,
	                            email = _data$data$detailInfo.email;
	
	                        that.setState({
	                            loading: false,
	                            exchangeNumber: exchangeNumber,
	                            helpNumber: helpNumber,
	                            fax: fax,
	                            address: address,
	                            postcode: postcode,
	                            email: email
	                        });
	                    } else {
	                        _antd.message.error(data.errMsg, 1);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            this.props.form.validateFields(function (err, values) {
	                if (!err) {
	                    ajax({
	                        url: "/platform/contact/updateInfo",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("设置成功!", 1);
	                            } else {
	                                _antd.message.error(data.errMsg, 1);
	                            }
	                        }
	                    });
	                }
	            });
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
	                            label: '\u603B\u673A\u7535\u8BDD',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('exchangeNumber', {
	                            rules: [{ required: true, message: '请输入总机电话!' }],
	                            initialValue: this.state.exchangeNumber
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5BA2\u670D\u7535\u8BDD',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('helpNumber', {
	                            rules: [{ required: true, message: '请输入客服电话!' }],
	                            initialValue: this.state.helpNumber
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u4F20\u771F',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('fax', {
	                            rules: [{ required: true, message: '请输入传真!' }],
	                            initialValue: this.state.fax
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5730\u5740',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('address', {
	                            rules: [{ required: true, message: '请输入客服电话!' }],
	                            initialValue: this.state.address
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u90AE\u7F16',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('postcode', {
	                            rules: [{ required: true, message: '请输入邮编!' }],
	                            initialValue: this.state.postcode
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u90AE\u7BB1',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('email', {
	                            rules: [{ required: true, message: '请输入邮箱!' }],
	                            initialValue: this.state.email
	                        })(_react2.default.createElement(_antd.Input, { type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        {
	                            wrapperCol: { span: 12, offset: 6 }
	                        },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
	                            '\u63D0\u4EA4'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'default', onClick: this.resetForm },
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
//# sourceMappingURL=58.chunk.js.map