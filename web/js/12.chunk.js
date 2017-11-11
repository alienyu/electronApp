webpackJsonp([12],{

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

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Detail = undefined;
	
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
	
	var _dataForm = __webpack_require__(1146);
	
	var _dataForm2 = _interopRequireDefault(_dataForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var Detail = exports.Detail = function (_React$Component) {
	    (0, _inherits3.default)(Detail, _React$Component);
	
	    function Detail(props) {
	        (0, _classCallCheck3.default)(this, Detail);
	        return (0, _possibleConstructorReturn3.default)(this, (Detail.__proto__ || (0, _getPrototypeOf2.default)(Detail)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Detail, [{
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
	                    _react2.default.createElement(_dataForm2.default, { type: 'detail', userID: this.props.params.id })
	                )
	            );
	        }
	    }]);
	    return Detail;
	}(_react2.default.Component);
	
	module.exports = Detail;

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DetailForm = undefined;
	
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
	
	var _antd = __webpack_require__(329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FormItem = _antd.Form.Item;
	var RadioGroup = _antd.Radio.Group;
	
	var DetailForm = exports.DetailForm = function (_React$Component) {
	    (0, _inherits3.default)(DetailForm, _React$Component);
	
	    function DetailForm(props) {
	        (0, _classCallCheck3.default)(this, DetailForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (DetailForm.__proto__ || (0, _getPrototypeOf2.default)(DetailForm)).call(this, props));
	
	        _this.state = {
	            loading: false,
	            name: "",
	            gender: "",
	            nickName: "",
	            headPic: "",
	            licensePic: "",
	            companyPic: "",
	            privatePic: "",
	            idPic: "",
	            region: "",
	            company: "",
	            department: "",
	            position: "",
	            mobile: "",
	            phone: "",
	            mail: "",
	            qq: "",
	            wx: "",
	            weibo: "",
	            audit: "0"
	        };
	        ['handleSubmit'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(DetailForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/user/manage/getUserDetail",
	                method: "post",
	                data: { id: that.props.userID },
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        var newData = data.data;
	                        that.setState((0, _assign2.default)({ loading: false }, newData));
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit() {
	            var that = this;
	            this.props.form.validateFields(function (err, values) {
	                that.setState({ loading: true });
	                ajax({
	                    url: "/user/manage/audit",
	                    method: "post",
	                    data: (0, _assign2.default)({ id: that.props.userID }, values),
	                    callback: function callback(data) {
	                        if (data.status == 200) {
	                            _antd.message.success("审核成功!", 1, function () {
	                                history.back();
	                            });
	                        } else {
	                            _antd.message.error(data.errMsg, 1);
	                        }
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'return',
	        value: function _return() {
	            history.back();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;
	
	            var formItemLayout = {
	                labelCol: { span: 3 },
	                wrapperCol: { span: 14 }
	            };
	            return _react2.default.createElement(
	                _antd.Spin,
	                { spinning: this.state.loading, tip: 'Loading...' },
	                _react2.default.createElement(
	                    _antd.Form,
	                    { className: 'userDetailForm' },
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u59D3\u540D'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.name
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u6027\u522B'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.gender == 0 ? "男" : "女"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u6635\u79F0'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.nickName
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5934\u50CF'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement('img', { src: this.state.headPic, style: { width: "200px", height: "200px" } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u8425\u4E1A\u6267\u7167'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement('img', { src: this.state.licensePic, style: { width: "200px", height: "200px" } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u516C\u53F8\u540D\u7247'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement('img', { src: this.state.companyPic, style: { width: "200px", height: "200px" } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u4E2A\u4EBA\u7167\u7247'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement('img', { src: this.state.privatePic, style: { width: "200px", height: "200px" } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u8EAB\u4EFD\u8BC1\u6B63\u9762'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement('img', { src: this.state.idPic, style: { width: "200px", height: "200px" } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5730\u533A'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.region
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u516C\u53F8'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.company
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u90E8\u95E8'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.department
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u804C\u4F4D'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.position
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u624B\u673A'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.mobile
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u56FA\u5B9A\u7535\u8BDD'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.phone
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u90AE\u7BB1'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.mail
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: 'QQ'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.qq
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5FAE\u4FE1'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.wx
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u65B0\u6D6A\u5FAE\u535A'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            this.state.weibo
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5BA1\u6838\u72B6\u6001',
	                            className: this.props.type == "detail" ? "hide" : "show" }),
	                        getFieldDecorator("audit", {
	                            initialValue: this.state.audit.toString()
	                        })(_react2.default.createElement(
	                            RadioGroup,
	                            null,
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u4E0D\u901A\u8FC7'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u901A\u8FC7'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        { wrapperCol: { span: 8, offset: 3 } },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { className: this.props.type == "detail" ? "hide" : "btn-show", icon: 'check', type: 'primary', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
	                            '\u5BA1\u6838'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { icon: 'rollback', onClick: this.return },
	                            '\u8FD4\u56DE'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return DetailForm;
	}(_react2.default.Component);
	
	var WrappedDetailForm = _antd.Form.create({})(DetailForm);
	
	module.exports = WrappedDetailForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ })

});
//# sourceMappingURL=12.chunk.js.map