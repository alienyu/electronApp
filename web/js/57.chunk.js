webpackJsonp([57],{

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

/***/ 1248:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax, $) {'use strict';
	
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
	var RadioGroup = _antd.Radio.Group;
	var TextArea = _antd.Input.TextArea;
	
	var DataForm = exports.DataForm = function (_React$Component) {
	    (0, _inherits3.default)(DataForm, _React$Component);
	
	    function DataForm(props) {
	        (0, _classCallCheck3.default)(this, DataForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (DataForm.__proto__ || (0, _getPrototypeOf2.default)(DataForm)).call(this, props));
	
	        _this.state = {
	            disabled: props.type == "detail" ? true : false,
	            title: "",
	            source: "",
	            content: "",
	            loading: true
	        };
	        ['handleSubmit', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(DataForm, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var that = this;
	            if (this.props.type == "add") {
	                this.setState({ loading: false });
	                that.KE = window.K.create('#content', {
	                    allowFileManager: true,
	                    afterChange: function afterChange() {
	                        that.props.form.setFieldsValue({ "content": this.html() });
	                    }
	                });
	            } else {
	                ajax({
	                    url: "/platform/report/getInfoDetail",
	                    method: "post",
	                    data: {
	                        id: this.props.id
	                    },
	                    callback: function callback(data) {
	                        if (data.status == 200) {
	                            var _data$data$detailInfo = data.data.detailInfo,
	                                title = _data$data$detailInfo.title,
	                                source = _data$data$detailInfo.source,
	                                content = _data$data$detailInfo.content;
	
	                            that.setState({
	                                loading: false,
	                                title: title,
	                                source: source,
	                                content: content
	                            });
	                            that.KE = K.create('#content', {
	                                allowFileManager: true,
	                                afterChange: function afterChange() {
	                                    that.props.form.setFieldsValue({ "content": this.html() });
	                                }
	                            });
	                            that.KE.html(content);
	                            if (that.state.disabled) {
	                                that.KE.readonly();
	                                $(".anticon-delete").remove();
	                            }
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
	                        url: "/platform/report/updateInfo",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("设置成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/platform/report");
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
	            _reactRouter.hashHistory.push("/platform/report");
	        }
	    }, {
	        key: 'resetForm',
	        value: function resetForm() {
	            this.props.form.resetFields();
	            this.KE.html(this.props.form.getFieldValue("content"));
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
	                            label: '\u6807\u9898',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('title', {
	                            rules: [{ required: true, message: '请输入标题!' }],
	                            initialValue: this.state.title
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6765\u6E90',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('source', {
	                            rules: [{ required: true, message: '请输入来源!' }],
	                            initialValue: this.state.source
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5185\u5BB9',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('content', {
	                            rules: [{
	                                required: true,
	                                message: "请输入内容!"
	                            }],
	                            initialValue: this.state.content
	                        })(_react2.default.createElement(TextArea, { disabled: this.state.disabled, placeholder: '\u8FD9\u91CC\u8F93\u5165\u5185\u5BB9', autosize: { minRows: 6 } }))
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124), __webpack_require__(1125)))

/***/ }),

/***/ 1249:
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
	
	var _dataForm = __webpack_require__(1248);
	
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
	                    _react2.default.createElement(_dataForm2.default, { type: 'edit', id: this.props.params.id })
	                )
	            );
	        }
	    }]);
	    return Edit;
	}(_react2.default.Component);
	
	module.exports = Edit;

/***/ })

});
//# sourceMappingURL=57.chunk.js.map