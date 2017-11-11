webpackJsonp([73],{

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

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Login = undefined;
	
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
	
	var _loginForm = __webpack_require__(1279);
	
	var _loginForm2 = _interopRequireDefault(_loginForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Login = exports.Login = function (_React$Component) {
	    (0, _inherits3.default)(Login, _React$Component);
	
	    function Login(props) {
	        (0, _classCallCheck3.default)(this, Login);
	        return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Login, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'loginPage' },
	                _react2.default.createElement(
	                    _antd.Row,
	                    { style: { height: "100%" }, type: 'flex', justify: 'center', align: 'middle' },
	                    _react2.default.createElement(
	                        _antd.Col,
	                        { style: { height: "300px" }, span: 12 },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'title' },
	                            '\u6B22\u8FCE\u4F7F\u7528\u878D\u8001\u677F\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF'
	                        ),
	                        _react2.default.createElement(_loginForm2.default, { returnPath: this.props.location.query.returnPath })
	                    )
	                )
	            );
	        }
	    }]);
	    return Login;
	}(_react2.default.Component);
	
	module.exports = Login;

/***/ }),

/***/ 1279:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
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
	
	var LoginForm = function (_React$Component) {
	    (0, _inherits3.default)(LoginForm, _React$Component);
	
	    function LoginForm(props) {
	        (0, _classCallCheck3.default)(this, LoginForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (LoginForm.__proto__ || (0, _getPrototypeOf2.default)(LoginForm)).call(this, props));
	
	        _this.state = {
	            buttonDisabled: false
	        };
	        ['handleSubmit'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(LoginForm, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            var _this2 = this;
	
	            var that = this;
	            e.preventDefault();
	            this.props.form.validateFields(function (err, values) {
	                if (!err) {
	                    _this2.setState({ buttonDisabled: true });
	                    ajax({
	                        url: "/login",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            that.setState({ buttonDisabled: false });
	                            if (data.status == 200) {
	                                localStorage.setItem("token", data.data.token);
	                                localStorage.setItem("name", values.name);
	                                if (that.props.returnPath) {
	                                    _reactRouter.hashHistory.push(that.props.returnPath == that.props.returnPath.match(/login/) ? "/" : that.props.returnPath);
	                                } else {
	                                    _reactRouter.hashHistory.push("/");
	                                }
	                            } else {
	                                _antd.message.error(data.errMsg, 1);
	                            }
	                        }
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;
	
	            return _react2.default.createElement(
	                _antd.Form,
	                { className: 'login-form' },
	                _react2.default.createElement(
	                    FormItem,
	                    null,
	                    getFieldDecorator('name', {
	                        rules: [{
	                            required: true,
	                            message: '请输入用户名!'
	                        }]
	                    })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'user', style: { fontSize: 13 } }), placeholder: 'UserName' }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    null,
	                    getFieldDecorator('password', {
	                        rules: [{
	                            required: true,
	                            message: '请输入密码!'
	                        }]
	                    })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'lock', style: { fontSize: 13 } }), type: 'password', placeholder: 'Password' }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    null,
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { type: 'primary', onClick: this.handleSubmit, className: 'login-form-button', style: { width: "100%" }, disabled: this.state.buttonDisabled },
	                        'Log in'
	                    )
	                )
	            );
	        }
	    }]);
	    return LoginForm;
	}(_react2.default.Component);
	
	var WrappedNormalLoginForm = _antd.Form.create({})(LoginForm);
	
	module.exports = WrappedNormalLoginForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ })

});
//# sourceMappingURL=73.chunk.js.map