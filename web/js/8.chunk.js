webpackJsonp([8],{

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

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
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
	var CheckboxGroup = _antd.Checkbox.Group;
	
	var ManageListForm = function (_React$Component) {
	    (0, _inherits3.default)(ManageListForm, _React$Component);
	
	    function ManageListForm(props) {
	        (0, _classCallCheck3.default)(this, ManageListForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (ManageListForm.__proto__ || (0, _getPrototypeOf2.default)(ManageListForm)).call(this, props));
	
	        _this.state = {
	            loading: false,
	            options: [],
	            defaultValue: []
	        };
	        ['handleSubmit'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(ManageListForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            var optionsData = [];
	            var defaultValue = [];
	            this.setState({ loading: true });
	            ajax({
	                url: "/auth/admin/getAuthList",
	                method: "post",
	                data: { roleId: that.props.type },
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        data.data.map(function (item) {
	                            if (item.checked == true) {
	                                defaultValue.push(item.id);
	                            }
	                            optionsData.push({
	                                label: item.name,
	                                value: item.id
	                            });
	                        });
	                        that.setState({
	                            loading: false,
	                            options: optionsData,
	                            defaultValue: defaultValue
	                        });
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            var that = this;
	            e.preventDefault();
	            this.props.form.validateFields(function (err, values) {
	                if (!err) {
	                    that.setState({ loading: true });
	                    ajax({
	                        url: "/auth/admin/setAuthList",
	                        method: "post",
	                        data: (0, _assign2.default)(values, { roleId: that.props.type }),
	                        callback: function callback(data) {
	                            that.setState({ loading: false });
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
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;
	
	            return _react2.default.createElement(
	                _antd.Spin,
	                { spinning: this.state.loading, tip: 'Loading...' },
	                _react2.default.createElement(
	                    _antd.Form,
	                    null,
	                    _react2.default.createElement(
	                        FormItem,
	                        null,
	                        getFieldDecorator('authList', {
	                            rules: [{
	                                required: true,
	                                message: '请选择一项权限!'
	                            }],
	                            initialValue: this.state.defaultValue
	                        })(_react2.default.createElement(
	                            CheckboxGroup,
	                            null,
	                            _react2.default.createElement(
	                                _antd.Row,
	                                null,
	                                this.state.options.map(function (item) {
	                                    return _react2.default.createElement(
	                                        _antd.Col,
	                                        { span: 24, key: item.value },
	                                        _react2.default.createElement(
	                                            _antd.Checkbox,
	                                            { value: item.value },
	                                            item.label
	                                        )
	                                    );
	                                })
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        null,
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: this.handleSubmit },
	                            '\u63D0\u4EA4'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return ManageListForm;
	}(_react2.default.Component);
	
	var WrappedManageListForm = _antd.Form.create({})(ManageListForm);
	
	module.exports = WrappedManageListForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Project = undefined;
	
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
	
	var _manageListForm = __webpack_require__(1138);
	
	var _manageListForm2 = _interopRequireDefault(_manageListForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var Project = exports.Project = function (_React$Component) {
	    (0, _inherits3.default)(Project, _React$Component);
	
	    function Project(props) {
	        (0, _classCallCheck3.default)(this, Project);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (Project.__proto__ || (0, _getPrototypeOf2.default)(Project)).call(this, props));
	
	        _this.state = {
	            defaultValue: []
	        };
	        return _this;
	    }
	
	    (0, _createClass3.default)(Project, [{
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
	                    _react2.default.createElement(_manageListForm2.default, { type: '3' })
	                )
	            );
	        }
	    }]);
	    return Project;
	}(_react2.default.Component);
	
	module.exports = Project;

/***/ })

});
//# sourceMappingURL=8.chunk.js.map