webpackJsonp([1],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.App = undefined;

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
	
	var _header = __webpack_require__(1123);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _menuBar = __webpack_require__(1129);
	
	var _menuBar2 = _interopRequireDefault(_menuBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Sider = _antd.Layout.Sider;
	
	var App = exports.App = function (_React$Component) {
	    (0, _inherits3.default)(App, _React$Component);
	
	    function App(props) {
	        (0, _classCallCheck3.default)(this, App);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
	
	        _this.state = {};
	        return _this;
	    }
	
	    (0, _createClass3.default)(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _antd.Layout,
	                null,
	                _react2.default.createElement(_header2.default, null),
	                _react2.default.createElement(
	                    _antd.Layout,
	                    null,
	                    _react2.default.createElement(
	                        Sider,
	                        { width: 200, style: { background: '#fff' } },
	                        _react2.default.createElement(_menuBar2.default, null)
	                    ),
	                    this.props.children
	                )
	            );
	        }
	    }]);
	    return App;
	}(_react2.default.Component);
	
	module.exports = App;

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdminHeader = undefined;
	
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
	
	var _changePwdForm = __webpack_require__(1128);
	
	var _changePwdForm2 = _interopRequireDefault(_changePwdForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Header = _antd.Layout.Header;
	
	var AdminHeader = exports.AdminHeader = function (_React$Component) {
	    (0, _inherits3.default)(AdminHeader, _React$Component);
	
	    function AdminHeader(props) {
	        (0, _classCallCheck3.default)(this, AdminHeader);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (AdminHeader.__proto__ || (0, _getPrototypeOf2.default)(AdminHeader)).call(this, props));
	
	        _this.state = {
	            visible: false
	        };
	        ['showModal', 'handleSave', 'hideModal', 'logout'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(AdminHeader, [{
	        key: 'showModal',
	        value: function showModal() {
	            this.setState({
	                visible: true
	            });
	        }
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {
	            this.setState({
	                visible: false
	            });
	        }
	    }, {
	        key: 'handleSave',
	        value: function handleSave() {
	            this.formRef.handleSubmit();
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            ajax({
	                url: "/logout",
	                method: "post",
	                data: {},
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        _reactRouter.hashHistory.push("/common/login");
	                    } else {
	                        message.error(data.errMsg, 1);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                Header,
	                { className: 'header' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'logo' },
	                    '\u9633\u5149\u878D\u8D44\u7BA1\u7406\u540E\u53F0'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'info' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'name' },
	                        '\u60A8\u597D! ',
	                        localStorage.getItem("name")
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btns' },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', style: { "marginRight": "10px" }, onClick: this.showModal },
	                            '\u4FEE\u6539\u5BC6\u7801'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Modal,
	                            {
	                                title: '\u4FEE\u6539\u5BC6\u7801',
	                                visible: this.state.visible,
	                                onOk: this.handleSave,
	                                onCancel: this.hideModal
	                            },
	                            _react2.default.createElement(_changePwdForm2.default, { wrappedComponentRef: function wrappedComponentRef(inst) {
	                                    return _this2.formRef = inst;
	                                }, closeModal: this.hideModal })
	                        ),
	                        _react2.default.createElement(
	                            _antd.Popconfirm,
	                            { placement: 'bottom', title: '\u662F\u5426\u786E\u8BA4\u9000\u51FA?', onConfirm: this.logout, okText: 'Yes', cancelText: 'No' },
	                            _react2.default.createElement(
	                                _antd.Button,
	                                null,
	                                '\u9000\u51FA'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return AdminHeader;
	}(_react2.default.Component);
	
	module.exports = AdminHeader;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

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
		var activeIP = require("electron").remote.getGlobal("activeIP");
		var config = (0, _assign2.default)({
	        url: "",
	        data: "",
	        callback: function callback() {}
	    }, ops);
	    if (config.url.match(/^\//)) {
	        config.url = config.url.substr(1, config.url.length);
	    }
	    $.ajax({
	        url: `http://${activeIP}/v1/` + config.url,
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

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ChangePwdForm = undefined;
	
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
	
	var _antd = __webpack_require__(329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FormItem = _antd.Form.Item;
	
	var ChangePwdForm = exports.ChangePwdForm = function (_React$Component) {
	    (0, _inherits3.default)(ChangePwdForm, _React$Component);
	
	    function ChangePwdForm(props) {
	        (0, _classCallCheck3.default)(this, ChangePwdForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (ChangePwdForm.__proto__ || (0, _getPrototypeOf2.default)(ChangePwdForm)).call(this, props));
	
	        ['handleSubmit', 'checkPassword'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(ChangePwdForm, [{
	        key: 'checkPassword',
	        value: function checkPassword(rule, value, callback) {
	            var form = this.props.form;
	            if (value && value !== form.getFieldValue('newPassword')) {
	                callback('两次密码输入不一致!');
	            } else {
	                callback();
	            }
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit() {
	            var that = this;
	            this.props.form.validateFieldsAndScroll(function (err, values) {
	                if (!err) {
	                    ajax({
	                        url: "/changePwd",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("修改密码成功!", 1);
	                                hashHistory.push("/common/login");
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
	
	            var formItemLayout = {
	                labelCol: {
	                    xs: { span: 24 },
	                    sm: { span: 6 }
	                },
	                wrapperCol: {
	                    xs: { span: 24 },
	                    sm: { span: 14 }
	                }
	            };
	            return _react2.default.createElement(
	                _antd.Form,
	                { onSubmit: this.handleSubmit },
	                _react2.default.createElement(
	                    FormItem,
	                    (0, _extends3.default)({}, formItemLayout, {
	                        label: '\u65E7\u5BC6\u7801',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('password', {
	                        rules: [{
	                            required: true, message: '请输入旧密码'
	                        }]
	                    })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801' }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    (0, _extends3.default)({}, formItemLayout, {
	                        label: '\u65B0\u5BC6\u7801',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('newPassword', {
	                        rules: [{
	                            required: true, message: '请输入新密码'
	                        }]
	                    })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801' }))
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
	                        }]
	                    })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: '\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801' }))
	                )
	            );
	        }
	    }]);
	    return ChangePwdForm;
	}(_react2.default.Component);
	
	var WrappedChangePwdForm = _antd.Form.create()(ChangePwdForm);
	
	module.exports = WrappedChangePwdForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MenuBar = undefined;
	
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
	
	var SubMenu = _antd.Menu.SubMenu;
	
	var MenuBar = exports.MenuBar = function (_React$Component) {
	    (0, _inherits3.default)(MenuBar, _React$Component);
	
	    function MenuBar(props) {
	        (0, _classCallCheck3.default)(this, MenuBar);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (MenuBar.__proto__ || (0, _getPrototypeOf2.default)(MenuBar)).call(this, props));
	
	        _this.state = {
	            menuData: {},
	            rootSubmenuKeys: ['auth', 'user', 'fund', 'project', 'delegateFund', 'delegateProject', 'report', 'notice', 'adv', 'activity', 'platform', 'help', 'finance', 'link'],
	            openKeys: ['']
	        };
	        ['onOpenChange', 'menuChange', 'filterSubMenuKeys'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(MenuBar, [{
	        key: 'onOpenChange',
	        value: function onOpenChange(openKeys) {
	            var _this2 = this;
	
	            var latestOpenKey = openKeys.filter(function (key) {
	                return _this2.state.openKeys.indexOf(key) === -1;
	            })[0];
	            console.log(latestOpenKey);
	            if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
	                this.setState({ openKeys: openKeys });
	            } else {
	                this.setState({
	                    openKeys: latestOpenKey ? [latestOpenKey] : []
	                });
	            }
	        }
	    }, {
	        key: 'menuChange',
	        value: function menuChange(e) {
	            _reactRouter.hashHistory.push(e.item.props.url);
	        }
	    }, {
	        key: 'filterSubMenuKeys',
	        value: function filterSubMenuKeys(data) {
	            var arr = [];
	            data.map(function (item, index) {
	                arr.push(item.key);
	            });
	            return arr;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            ajax({
	                url: "/getMenuItems",
	                method: "post",
	                data: {},
	                callback: function callback(data) {
	                    that.setState({
	                        menuData: data.data.menuItems,
	                        rootSubmenuKeys: that.filterSubMenuKeys(data.data.menuItems)
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.menuData.length > 0) {
	                return _react2.default.createElement(
	                    _antd.Menu,
	                    {
	                        mode: 'inline',
	                        openKeys: this.state.openKeys,
	                        onOpenChange: this.onOpenChange,
	                        onClick: this.menuChange,
	                        defaultSelectedKeys: [''],
	                        defaultOpenKeys: [''],
	                        style: { height: '100%', borderRight: 0 } },
	                    this.state.menuData.map(function (item) {
	                        if (item.children && item.children.length > 0) {
	                            return _react2.default.createElement(
	                                SubMenu,
	                                { key: item.key, title: item.name },
	                                item.children.map(function (secondItem) {
	                                    if (secondItem.children && secondItem.children.length > 0) {
	                                        return _react2.default.createElement(
	                                            SubMenu,
	                                            { key: secondItem.key, title: secondItem.name },
	                                            secondItem.children.map(function (thirdItem) {
	                                                return _react2.default.createElement(
	                                                    _antd.Menu.Item,
	                                                    { key: thirdItem.key, url: thirdItem.url },
	                                                    thirdItem.name
	                                                );
	                                            })
	                                        );
	                                    } else {
	                                        return _react2.default.createElement(
	                                            _antd.Menu.Item,
	                                            { key: secondItem.key, url: secondItem.url },
	                                            secondItem.name
	                                        );
	                                    }
	                                })
	                            );
	                        } else {
	                            return _react2.default.createElement(
	                                _antd.Menu.Item,
	                                { key: item.key, url: item.url },
	                                item.name
	                            );
	                        }
	                    })
	                );
	            } else {
	                return _react2.default.createElement('div', null);
	            }
	        }
	    }]);
	    return MenuBar;
	}(_react2.default.Component);
	
	module.exports = MenuBar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ })

});
//# sourceMappingURL=1.chunk.js.map