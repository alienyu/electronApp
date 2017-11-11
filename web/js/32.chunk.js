webpackJsonp([32],{

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

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DebtsForm = undefined;
	
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
	var CheckboxGroup = _antd.Checkbox.Group;
	var TextArea = _antd.Input.TextArea;
	
	var DebtsForm = exports.DebtsForm = function (_React$Component) {
	    (0, _inherits3.default)(DebtsForm, _React$Component);
	
	    function DebtsForm(props) {
	        (0, _classCallCheck3.default)(this, DebtsForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (DebtsForm.__proto__ || (0, _getPrototypeOf2.default)(DebtsForm)).call(this, props));
	
	        _this.state = {
	            disabled: props.actionType == "detail" ? true : false,
	            loading: false,
	            "assetsType": {
	                "debts": [],
	                "stock": [],
	                "purchase": [],
	                "transfer": []
	            },
	            "industryList": [],
	            "cascaderRegion": [],
	            "project": {
	                "key": "",
	                "title": "",
	                "category": "",
	                "type": "",
	                "detail": "",
	                "accessory": {
	                    "name": "",
	                    "link": ""
	                }
	            },
	            "financing": {
	                "industry": "",
	                "aptitude": "",
	                "parentAptitue": "",
	                "region": [],
	                "previousProfits": "",
	                "recentProfits": "",
	                "nextProfits": "",
	                "number": "",
	                "deadline": "",
	                "maxRate": "" },
	            "mortgage": {
	                "isNeed": "",
	                "type": [],
	                "name": "",
	                "value": "",
	                "rate": "" },
	            "guarantee": {
	                "isNeed": "",
	                "method": "" },
	            "stock": {
	                "type": "",
	                "property": "",
	                "number": "",
	                "rate": "",
	                "value": "",
	                "estimate": {
	                    "times": "",
	                    "type": ""
	                }
	            },
	            "subject": {
	                "name": "",
	                "industry": "",
	                "region": "",
	                "previousProfits": "",
	                "recentProfits": "",
	                "nextProfits": ""
	            },
	            "assets": {
	                "region": "",
	                "number": "",
	                "value": ""
	            },
	            "audit": {
	                "status": "",
	                "comment": ""
	            }
	        };
	        ['handleSubmit', 'resetForm', 'financingIndustryChange', 'mortgageChange', 'guaranteeChange'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(DebtsForm, [{
	        key: 'guaranteeChange',
	        value: function guaranteeChange(e) {
	            this.setState({
	                guarantee: {
	                    isNeed: e.target.value
	                }
	            });
	        }
	    }, {
	        key: 'mortgageChange',
	        value: function mortgageChange(e) {
	            this.setState({
	                mortgage: {
	                    isNeed: e.target.value
	                }
	            });
	        }
	    }, {
	        key: 'financingIndustryChange',
	        value: function financingIndustryChange(e) {
	            var value = e.target.value;
	
	            if (value == "1") {
	                this.setState({
	                    financing: {
	                        industry: value
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/delegateProject/getInfoDetail",
	                method: "post",
	                data: { id: that.props.infoID ? that.props.infoID : "" },
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
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            this.props.form.validateFields(function (err, values) {
	                if (!err) {
	                    ajax({
	                        url: "/delegateProject/edit",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("保存成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/delegateProject");
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
	        key: 'return',
	        value: function _return() {
	            history.back();
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
	                labelCol: { span: 3 },
	                wrapperCol: { span: 14 }
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
	                            label: '\u9879\u76EE\u6807\u9898',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.title", {
	                            rules: [{ required: true, message: "请输入标题!" }],
	                            initialValue: this.state.project.title
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u7C7B\u522B',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("category", {
	                            initialValue: "1"
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true },
	                            _react2.default.createElement(
	                                Option,
	                                { value: '1' },
	                                '\u503A\u6743'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '2' },
	                                '\u80A1\u6743'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '4' },
	                                '\u8D44\u91D1\u8F6C\u8BA9'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u7C7B\u578B',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.type", {
	                            rules: [{
	                                required: true,
	                                message: "请选择项目类型!"
	                            }],
	                            initialValue: this.state.project.type
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: this.state.disabled },
	                            this.state.assetsType.debts.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u878D\u8D44\u65B9\u540D\u79F0'
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            '\u8BE6\u89C1\u6211\u7684\u8054\u7CFB\u65B9\u5F0F'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u878D\u8D44\u65B9\u6240\u5C5E\u884C\u4E1A',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("industry", {
	                            rules: [{
	                                required: true,
	                                message: "请选择所属行业!"
	                            }],
	                            initialValue: this.state.financing.industry
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { onChange: this.financingIndustryChange, disabled: this.state.disabled },
	                            this.state.industryList.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        ))
	                    ),
	                    this.state.financing.industry == 1 ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u878D\u8D44\u65B9\u5F00\u53D1\u8D44\u8D28',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("financing.aptitude", {
	                            rules: [{
	                                required: true,
	                                message: "请输入融资方开发资质!"
	                            }],
	                            initialValue: this.state.financing.aptitude
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ) : "",
	                    this.state.financing.industry == 1 ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6BCD\u516C\u53F8\u5F00\u53D1\u8D44\u8D28',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("financing.parentAptitue", {
	                            rules: [{
	                                required: true,
	                                message: "请输入母公司开发资质!"
	                            }],
	                            initialValue: this.state.financing.parentAptitue
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ) : "",
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u878D\u8D44\u65B9\u6240\u5728\u5730',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("financing.region", {
	                            rules: [{
	                                required: true,
	                                message: "请设置地区!"
	                            }],
	                            initialValue: this.state.financing.region
	                        })(_react2.default.createElement(_antd.Cascader, { disabled: this.state.disabled, options: this.state.cascaderRegion }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u878D\u8D44\u65B9\u53BB\u5E74\u51C0\u5229\u6DA6',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("financing.previousProfits", {
	                            rules: [{
	                                required: true,
	                                message: "请输入去年净利润!"
	                            }],
	                            initialValue: this.state.financing.previousProfits
	                        })(_react2.default.createElement(_antd.Input, { style: { width: "93%" }, disabled: this.state.disabled }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u878D\u8D44\u91D1\u989D',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("financing.number", {
	                            rules: [{
	                                required: true,
	                                message: "请输入融资金额!"
	                            }],
	                            initialValue: this.state.financing.number
	                        })(_react2.default.createElement(_antd.Input, { style: { width: "93%" }, disabled: this.state.disabled })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u671F\u9650',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("financing.deadline", {
	                            rules: [{
	                                required: true,
	                                message: "请输入期限"
	                            }],
	                            initialValue: this.state.financing.deadline
	                        })(_react2.default.createElement(_antd.Input, { style: { width: "93%" }, disabled: this.state.disabled })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u5E74'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6700\u9AD8\u63A5\u53D7\u5229\u7387',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("financing.maxRate", {
	                            rules: [{
	                                required: true,
	                                message: "请输入最高接受利率"
	                            }],
	                            initialValue: this.state.financing.maxRate
	                        })(_react2.default.createElement(_antd.Input, { style: { width: "93%" }, disabled: this.state.disabled })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '%'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6709\u65E0\u62B5/\u8D28\u62BC\u7269',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("mortgage.isNeed", {
	                            rules: [{
	                                required: true,
	                                message: "请设置是否需要抵押物!"
	                            }],
	                            initialValue: this.state.mortgage.isNeed
	                        })(_react2.default.createElement(
	                            RadioGroup,
	                            { onChange: this.mortgageChange, disabled: this.state.disabled },
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u662F'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u5426'
	                            )
	                        ))
	                    ),
	                    this.state.mortgage.isNeed == "1" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u62B5/\u8D28\u62BC\u7269\u7C7B\u578B'
	                        }),
	                        getFieldDecorator("mortgage.type", {
	                            initialValue: this.state.mortgage.type
	                        })(_react2.default.createElement(
	                            CheckboxGroup,
	                            { disabled: this.state.disabled },
	                            _react2.default.createElement(
	                                _antd.Checkbox,
	                                { value: '1' },
	                                '\u56FA\u5B9A\u8D44\u4EA7'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Checkbox,
	                                { value: '2' },
	                                '\u6709\u4EF7\u8BC1\u5238'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Checkbox,
	                                { value: '3' },
	                                '\u5176\u4ED6'
	                            )
	                        ))
	                    ) : "",
	                    this.state.mortgage.isNeed == "1" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u62B5/\u8D28\u62BC\u7269\u540D\u79F0'
	                        }),
	                        getFieldDecorator("mortgage.name", {
	                            initialValue: this.state.mortgage.name
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ) : "",
	                    this.state.mortgage.isNeed == "1" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u62B5/\u8D28\u62BC\u7269\u4EF7\u503C'
	                        }),
	                        getFieldDecorator("mortgage.value", {
	                            initialValue: this.state.mortgage.value
	                        })(_react2.default.createElement(_antd.Input, { style: { width: "93%" }, disabled: this.state.disabled })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ) : "",
	                    this.state.mortgage.isNeed == "1" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u62B5/\u8D28\u62BC\u7269\u6298\u6263\u7387'
	                        }),
	                        getFieldDecorator("mortgage.rate", {
	                            initialValue: this.state.mortgage.rate
	                        })(_react2.default.createElement(_antd.Input, { style: { width: "95%" }, disabled: this.state.disabled })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '%'
	                        )
	                    ) : "",
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6709\u65E0\u62C5\u4FDD',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("guarantee.isNeed", {
	                            rules: [{
	                                required: true,
	                                message: "请设置担保信息!"
	                            }],
	                            initialValue: this.state.guarantee.isNeed
	                        })(_react2.default.createElement(
	                            RadioGroup,
	                            { onChange: this.guaranteeChange, disabled: this.state.disabled },
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u662F'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u5426'
	                            )
	                        ))
	                    ),
	                    this.state.guarantee.isNeed == "1" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u62C5\u4FDD\u65B9\u5F0F'
	                        }),
	                        getFieldDecorator("guarantee.method", {
	                            initialValue: this.state.guarantee.method
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ) : "",
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u8BE6\u60C5',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.detail", {
	                            rules: [{ require: true, message: "请输入项目详情!" }],
	                            initialValue: this.state.project.detail
	                        })(_react2.default.createElement(TextArea, { disabled: this.state.disabled, autosize: { minRows: 3 } }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u9644\u4EF6'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement(
	                                'a',
	                                { href: this.state.project.accessory.link },
	                                this.state.project.accessory.name
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        { wrapperCol: { span: 8, offset: 3 } },
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
	                            '\u7ACB\u5373\u53D1\u5E03'
	                        ) : "",
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'danger', onClick: this.resetForm, style: { "marginRight": "20px" } },
	                            '\u91CD\u7F6E'
	                        ) : "",
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
	    return DebtsForm;
	}(_react2.default.Component);
	
	var WrappedDebtsForm = _antd.Form.create({})(DebtsForm);
	
	module.exports = WrappedDebtsForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.StockForm = undefined;
	
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
	
	var _benefitsItem = __webpack_require__(1202);
	
	var _benefitsItem2 = _interopRequireDefault(_benefitsItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	var RadioGroup = _antd.Radio.Group;
	var TextArea = _antd.Input.TextArea;
	
	var StockForm = exports.StockForm = function (_React$Component) {
	    (0, _inherits3.default)(StockForm, _React$Component);
	
	    function StockForm(props) {
	        (0, _classCallCheck3.default)(this, StockForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (StockForm.__proto__ || (0, _getPrototypeOf2.default)(StockForm)).call(this, props));
	
	        _this.state = {
	            disabled: props.actionType == "detail" ? true : false,
	            loading: false,
	            "assetsType": {
	                "debts": [],
	                "stock": [],
	                "purchase": [],
	                "transfer": []
	            },
	            "industryList": [],
	            "cascaderRegion": [],
	            "project": {
	                "key": "",
	                "title": "",
	                "category": "",
	                "type": "",
	                "detail": "",
	                "accessory": {
	                    "name": "",
	                    "link": ""
	                }
	            },
	            "financing": {
	                "industry": "",
	                "aptitude": "",
	                "parentAptitued": "",
	                "region": [],
	                "previousProfits": "",
	                "recentProfits": "",
	                "nextProfits": "",
	                "number": "",
	                "deadline": "",
	                "maxRate": "" },
	            "mortgage": {
	                "isNeed": "",
	                "type": [],
	                "name": "",
	                "value": "",
	                "rate": "" },
	            "guarantee": {
	                "isNeed": "",
	                "method": "" },
	            "stock": {
	                "type": "",
	                "property": "",
	                "number": "",
	                "rate": "",
	                "estimate": {
	                    "times": "",
	                    "type": ""
	                }
	            },
	            "target": {
	                "name": "",
	                "industry": "",
	                "region": "",
	                "value": "",
	                "previousProfits": "",
	                "recentProfits": "",
	                "nextProfits": ""
	            },
	            "assets": {
	                "region": "",
	                "number": "",
	                "value": ""
	            }
	        };
	        ['handleSubmit', 'resetForm', 'stockPropertyChange'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(StockForm, [{
	        key: 'stockPropertyChange',
	        value: function stockPropertyChange(val) {
	            (0, _assign2.default)(this.state.stock, { property: val });
	            this.setState({
	                stock: this.state.stock
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/delegateProject/getInfoDetail",
	                method: "post",
	                data: { id: that.props.infoID ? that.props.infoID : "" },
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
	        value: function handleSubmit(e) {
	            var _this2 = this;
	
	            e.preventDefault();
	            this.props.form.validateFields(function (err, values) {
	                if (!err) {
	                    ajax({
	                        url: "/delegateProject/edit",
	                        method: "post",
	                        data: _this2.props.actionType == "edit" ? (0, _assign2.default)(values, { id: _this2.props.infoID }) : values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("保存成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/delegateProject");
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
	        key: 'return',
	        value: function _return() {
	            history.back();
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
	                labelCol: { span: 4 },
	                wrapperCol: { span: 14 }
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
	                            label: '\u9879\u76EE\u6807\u9898',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.title", {
	                            rules: [{ required: true, message: "请输入标题!" }],
	                            initialValue: this.state.project.title
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u7C7B\u522B',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.category", {
	                            initialValue: "2"
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true },
	                            _react2.default.createElement(
	                                Option,
	                                { value: '1' },
	                                '\u503A\u6743'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '2' },
	                                '\u80A1\u6743'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '3' },
	                                '\u8D44\u91D1\u6536\u8D2D'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u53C2/\u63A7\u80A1',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("stock.type", {
	                            rules: [{
	                                required: true,
	                                message: "请选择类型!"
	                            }],
	                            initialValue: this.state.stock.type
	                        })(_react2.default.createElement(
	                            RadioGroup,
	                            { disabled: this.state.disabled },
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u53C2\u80A1\u578B\u6295\u8D44'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '2' },
	                                '\u63A7\u80A1\u578B\u6295\u8D44'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u7C7B\u578B',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.type", {
	                            rules: [{
	                                required: true,
	                                message: "请选择项目类型!"
	                            }],
	                            initialValue: this.state.project.type
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: this.state.disabled },
	                            this.state.assetsType.stock.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u80A1\u6743\u6027\u8D28',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("stock.property", {
	                            rules: [{
	                                required: true,
	                                message: "请选择股权性质"
	                            }],
	                            initialValue: this.state.stock.property
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { onChange: this.stockPropertyChange, disabled: this.state.disabled },
	                            _react2.default.createElement(
	                                Option,
	                                { value: '1' },
	                                '\u8001\u80A1\u8F6C\u8BA9'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '2' },
	                                '\u65B0\u80A1\u589E\u53D1'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: this.state.stock.property == "1" ? "转让方名称" : "融资方名称"
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            '\u8BE6\u89C1\u6211\u7684\u8054\u7CFB\u65B9\u5F0F'
	                        )
	                    ),
	                    this.state.stock.property == "1" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6807\u7684\u4F01\u4E1A\u540D\u79F0',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("target.name", {
	                            rules: [{
	                                required: true,
	                                message: "请输入标的企业名称!"
	                            }],
	                            initialValue: this.state.target.name
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ) : "",
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: this.state.stock.property == "1" ? "标的企业所属行业" : "融资方所属行业",
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator(this.state.stock.property == "1" ? "target.industry" : "financing.industry", {
	                            rules: [{
	                                required: true,
	                                message: "请设置所属行业!"
	                            }],
	                            initialValue: this.state.stock.property == "1" ? this.state.target.industry : this.state.financing.industry
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: this.state.disabled },
	                            this.state.industryList.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: this.state.stock.property == "1" ? "标的企业所在地" : "融资方所在地",
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator(this.state.stock.property == "1" ? "target.region" : "financing.region", {
	                            rules: [{
	                                required: true,
	                                message: "请设置所在地!"
	                            }],
	                            initialValue: this.state.stock.property == "1" ? this.state.target.region : this.state.financing.region
	                        })(_react2.default.createElement(_antd.Cascader, { disabled: this.state.disabled,
	                            options: this.state.cascaderRegion }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: this.state.stock.property == "1" ? "标的企业去年利润" : "融资方去年利润",
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator(this.state.stock.property == "1" ? "target.previousProfits" : "financing.previousProfits", {
	                            rules: [{
	                                required: true,
	                                message: '请输入去年净利润!'
	                            }],
	                            initialValue: this.state.stock.property == "1" ? this.state.target.previousProfits : this.state.financing.previousProfits
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: this.state.stock.property == "1" ? "转让金额" : "融资金额",
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("stock.number", {
	                            rules: [{
	                                required: true,
	                                message: "请输入金额!"
	                            }],
	                            initialValue: this.state.stock.number
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u51FA\u8BA9\u80A1\u6743\u6BD4\u4F8B',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("stock.rate", {
	                            initialValue: this.state.stock.rate
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '%'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u4F01\u4E1A\u6574\u4F53\u4F30\u503C'
	                        }),
	                        getFieldDecorator(this.state.stock.property == "1" ? "target.number" : "financing.number", {
	                            initialValue: this.state.stock.property == "1" ? this.state.target.number : this.state.financing.number
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u6295\u8D44\u4F30\u503C\u500D\u6570'
	                        }),
	                        getFieldDecorator("stock.estimate", {
	                            initialValue: {
	                                times: this.state.stock.estimate.times,
	                                type: this.state.stock.estimate.type
	                            }
	                        })(_react2.default.createElement(_benefitsItem2.default, { disabled: this.state.disabled }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u4F01\u4E1A\u4ECA\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'
	                        }),
	                        getFieldDecorator(this.state.stock.property == "1" ? "target.recentProfits" : "financing.recentProfits", {
	                            initialValue: this.state.stock.property == "1" ? this.state.target.recentProfits : this.state.financing.recentProfits
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u4F01\u4E1A\u660E\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'
	                        }),
	                        getFieldDecorator(this.state.stock.property == "1" ? "target.nextProfits" : "financing.nextProfits", {
	                            initialValue: this.state.stock.property == "1" ? this.state.target.nextProfits : this.state.financing.nextProfits
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u8BE6\u60C5',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.detail", {
	                            rules: [{ required: true, message: "请输入资金详情!" }],
	                            initialValue: this.state.project.detail
	                        })(_react2.default.createElement(TextArea, { disabled: this.state.disabled, autosize: { minRows: 3 } }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u9644\u4EF6'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement(
	                                'a',
	                                { href: this.state.project.accessory.link },
	                                this.state.project.accessory.name
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        { wrapperCol: { span: 8, offset: 3 } },
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
	                            '\u7ACB\u5373\u53D1\u5E03'
	                        ) : "",
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'danger', onClick: this.resetForm, style: { "marginRight": "20px" } },
	                            '\u91CD\u7F6E'
	                        ) : "",
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
	    return StockForm;
	}(_react2.default.Component);
	
	var WrappedStockForm = _antd.Form.create({})(StockForm);
	
	module.exports = WrappedStockForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var Option = _antd.Select.Option;
	
	var BenefitsItem = function (_React$Component) {
	    (0, _inherits3.default)(BenefitsItem, _React$Component);
	
	    function BenefitsItem(props) {
	        (0, _classCallCheck3.default)(this, BenefitsItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (BenefitsItem.__proto__ || (0, _getPrototypeOf2.default)(BenefitsItem)).call(this, props));
	
	        var value = _this.props.value || {};
	        _this.state = {
	            times: value.times || 0,
	            type: value.type || "1"
	        };
	        ['handleTimesChange', 'handleTypeChange', 'triggerChange'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(BenefitsItem, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                var value = nextProps.value;
	                this.setState(value);
	            }
	        }
	    }, {
	        key: 'handleTimesChange',
	        value: function handleTimesChange(e) {
	            var times = parseInt(e.target.value || 0, 10);
	            if (!('value' in this.props)) {
	                this.setState({ times: times });
	            }
	            this.triggerChange({ times: times });
	        }
	    }, {
	        key: 'handleTypeChange',
	        value: function handleTypeChange(type) {
	            if (!('value' in this.props)) {
	                this.setState({ type: type });
	            }
	            this.triggerChange({ type: type });
	        }
	    }, {
	        key: 'triggerChange',
	        value: function triggerChange(changedValue) {
	            var onChange = this.props.onChange;
	            if (onChange) {
	                onChange((0, _assign2.default)({}, this.state, changedValue));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_antd.Input, {
	                    disabled: this.props.disabled,
	                    type: 'text',
	                    value: this.state.times,
	                    onChange: this.handleTimesChange,
	                    style: { width: '25%' }
	                }),
	                '\xA0\u500D\xA0',
	                _react2.default.createElement(_antd.Icon, { type: 'close' }),
	                _react2.default.createElement(
	                    _antd.Select,
	                    { disabled: this.props.disabled,
	                        value: this.state.type,
	                        style: { width: '25%' },
	                        onChange: this.handleTypeChange
	                    },
	                    _react2.default.createElement(
	                        Option,
	                        { value: '1' },
	                        '\u53BB\u5E74\u51C0\u5229\u6DA6'
	                    ),
	                    _react2.default.createElement(
	                        Option,
	                        { value: '2' },
	                        '\u4ECA\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'
	                    ),
	                    _react2.default.createElement(
	                        Option,
	                        { value: '3' },
	                        '\u660E\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'
	                    )
	                )
	            );
	        }
	    }]);
	    return BenefitsItem;
	}(_react2.default.Component);
	
	module.exports = BenefitsItem;

/***/ }),

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TransferForm = undefined;
	
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
	
	var _investItem = __webpack_require__(1204);
	
	var _investItem2 = _interopRequireDefault(_investItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	var RadioGroup = _antd.Radio.Group;
	var TextArea = _antd.Input.TextArea;
	
	var TransferForm = exports.TransferForm = function (_React$Component) {
	    (0, _inherits3.default)(TransferForm, _React$Component);
	
	    function TransferForm(props) {
	        (0, _classCallCheck3.default)(this, TransferForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (TransferForm.__proto__ || (0, _getPrototypeOf2.default)(TransferForm)).call(this, props));
	
	        _this.state = {
	            disabled: props.actionType == "detail" ? true : false,
	            loading: false,
	            "assetsType": {
	                "debts": [],
	                "stock": [],
	                "purchase": [],
	                "transfer": []
	            },
	            "industryList": [],
	            "cascaderRegion": [],
	            "project": {
	                "key": "",
	                "title": "",
	                "category": "",
	                "type": "",
	                "detail": "",
	                "accessory": {
	                    "name": "",
	                    "link": ""
	                }
	            },
	            "financing": {
	                "industry": "",
	                "aptitude": "",
	                "parentAptitued": "",
	                "region": [],
	                "previousProfits": "",
	                "recentProfits": "",
	                "nextProfits": "",
	                "number": "",
	                "deadline": "",
	                "maxRate": "" },
	            "assets": {
	                "region": ["0", "1", "2"],
	                "value": 214,
	                "number": 2145
	            },
	            "mortgage": {
	                "isNeed": "",
	                "type": [],
	                "name": "",
	                "value": "",
	                "rate": "" },
	            "guarantee": {
	                "isNeed": "",
	                "method": "" },
	            "stock": {
	                "type": "",
	                "property": "",
	                "number": "",
	                "rate": "",
	                "estimate": {
	                    "times": "",
	                    "type": ""
	                }
	            },
	            "target": {
	                "name": "",
	                "industry": "",
	                "region": "",
	                "value": "",
	                "previousProfits": "",
	                "recentProfits": "",
	                "nextProfits": ""
	            }
	        };
	        ['handleSubmit', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(TransferForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/delegateProject/getInfoDetail",
	                method: "post",
	                data: { id: that.props.infoID ? that.props.infoID : "" },
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
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            this.props.form.validateFields(function (err, values) {
	                if (!err) {
	                    ajax({
	                        url: "/delegateProject/audit",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("保存成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/delegateProject");
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
	        key: 'return',
	        value: function _return() {
	            history.back();
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
	                labelCol: { span: 3 },
	                wrapperCol: { span: 14 }
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
	                            label: '\u9879\u76EE\u6807\u9898',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.title", {
	                            rules: [{ require: true, message: "请输入标题!" }],
	                            initialValue: this.state.project.title
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u7C7B\u522B',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.category", {
	                            initialValue: "4"
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true },
	                            _react2.default.createElement(
	                                Option,
	                                { value: '1' },
	                                '\u503A\u6743'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '2' },
	                                '\u80A1\u6743'
	                            ),
	                            _react2.default.createElement(
	                                Option,
	                                { value: '4' },
	                                '\u8D44\u91D1\u8F6C\u8BA9'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u9879\u76EE\u7C7B\u578B',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.type", {
	                            rules: [{
	                                required: true,
	                                message: "请选择项目类型!"
	                            }],
	                            initialValue: this.state.project.type
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: this.state.disabled },
	                            this.state.assetsType.transfer.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u4EA7\u8F6C\u8BA9\u4EBA'
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            '\u8BE6\u89C1\u6211\u7684\u8054\u7CFB\u65B9\u5F0F'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u4EA7\u6240\u5728\u5730',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("assets.region", {
	                            rules: [{
	                                required: true,
	                                message: "请选择资产所在地!"
	                            }],
	                            initialValue: this.state.assets.region
	                        })(_react2.default.createElement(_antd.Cascader, { disabled: this.state.disabled,
	                            options: this.state.cascaderRegion }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8F6C\u8BA9\u91D1\u989D',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("assets.number", {
	                            rules: [{
	                                required: true,
	                                message: "请输入转让金额!"
	                            }],
	                            initialValue: this.state.assets.number
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u4EA7\u4EF7\u503C',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("assets.value", {
	                            rules: [{
	                                required: true,
	                                message: "请输入资产价值!"
	                            }],
	                            initialValue: this.state.assets.value
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, style: { width: "93%" } })),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text', style: { marginLeft: 7 } },
	                            '\u4E07\u5143'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u9879\u76EE\u8BE6\u60C5',
	                            hasFeedback: !this.state.disabled
	                        }),
	                        getFieldDecorator("project.detail", {
	                            rules: [{ require: true, message: "请输入项目详情!" }],
	                            initialValue: this.state.project.detail
	                        })(_react2.default.createElement(TextArea, { disabled: this.state.disabled, autosize: { minRows: 3 } }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u9644\u4EF6'
	                        }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-form-text' },
	                            _react2.default.createElement(
	                                'a',
	                                { href: this.state.project.accessory.link },
	                                this.state.project.accessory.name
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        { wrapperCol: { span: 8, offset: 3 } },
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
	                            '\u7ACB\u5373\u53D1\u5E03'
	                        ) : "",
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'danger', onClick: this.resetForm, style: { "marginRight": "20px" } },
	                            '\u91CD\u7F6E'
	                        ) : "",
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
	    return TransferForm;
	}(_react2.default.Component);
	
	var WrappedTransferForm = _antd.Form.create({})(TransferForm);
	
	module.exports = WrappedTransferForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var InvestItem = function (_React$Component) {
	    (0, _inherits3.default)(InvestItem, _React$Component);
	
	    function InvestItem(props) {
	        (0, _classCallCheck3.default)(this, InvestItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (InvestItem.__proto__ || (0, _getPrototypeOf2.default)(InvestItem)).call(this, props));
	
	        var value = _this.props.value || {};
	        _this.state = {
	            min: value.min || 0,
	            max: value.max || 0
	        };
	        ['handleMinChange', 'handleMaxChange', 'triggerChange'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(InvestItem, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                var value = nextProps.value;
	                this.setState(value);
	            }
	        }
	    }, {
	        key: 'handleMinChange',
	        value: function handleMinChange(e) {
	            var min = e.target.value;
	            if (!('value' in this.props)) {
	                this.setState({ min: min });
	            }
	            this.triggerChange({ min: min });
	        }
	    }, {
	        key: 'handleMaxChange',
	        value: function handleMaxChange(e) {
	            var max = parseInt(e.target.value || 0, 10);
	            if (!('value' in this.props)) {
	                this.setState({ max: max });
	            }
	            this.triggerChange({ max: max });
	        }
	    }, {
	        key: 'triggerChange',
	        value: function triggerChange(changedValue) {
	            var onChange = this.props.onChange;
	            if (onChange) {
	                onChange((0, _assign2.default)({}, this.state, changedValue));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.min, onChange: this.handleMinChange, style: { width: '20%' }, disabled: this.props.disabled }),
	                '\xA0\xA0\u2014\u2014\xA0\xA0',
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.max, onChange: this.handleMaxChange, style: { width: '20%' }, disabled: this.props.disabled }),
	                '\u4E07\u5143'
	            );
	        }
	    }]);
	    return InvestItem;
	}(_react2.default.Component);
	
	module.exports = InvestItem;

/***/ }),

/***/ 1205:
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
	
	var _reactRouter = __webpack_require__(170);
	
	var _antd = __webpack_require__(329);
	
	var _debtsForm = __webpack_require__(1200);
	
	var _debtsForm2 = _interopRequireDefault(_debtsForm);
	
	var _stockForm = __webpack_require__(1201);
	
	var _stockForm2 = _interopRequireDefault(_stockForm);
	
	var _transferForm = __webpack_require__(1203);
	
	var _transferForm2 = _interopRequireDefault(_transferForm);
	
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
	                    this.props.location.query.assetsType == 1 ? _react2.default.createElement(_debtsForm2.default, { infoID: this.props.params.id, actionType: 'edit' }) : this.props.location.query.assetsType == 2 ? _react2.default.createElement(_stockForm2.default, { infoID: this.props.params.id, actionType: 'edit' }) : _react2.default.createElement(_transferForm2.default, { infoID: this.props.params.id, actionType: 'edit' })
	                )
	            );
	        }
	    }]);
	    return Edit;
	}(_react2.default.Component);
	
	module.exports = Edit;

/***/ })

});
//# sourceMappingURL=32.chunk.js.map