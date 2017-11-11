webpackJsonp([20],{

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

/***/ 1160:
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
	
	var _financingItem = __webpack_require__(1161);
	
	var _financingItem2 = _interopRequireDefault(_financingItem);
	
	var _investItem = __webpack_require__(1162);
	
	var _investItem2 = _interopRequireDefault(_investItem);
	
	var _deadlineItem = __webpack_require__(1163);
	
	var _deadlineItem2 = _interopRequireDefault(_deadlineItem);
	
	var _mortgageItem = __webpack_require__(1164);
	
	var _mortgageItem2 = _interopRequireDefault(_mortgageItem);
	
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
	            loading: false,
	            "assetsType": {
	                "debts": [],
	                "stock": [],
	                "purchase": [],
	                "transfer": []
	            },
	            "industryList": [],
	            "cascaderRegion": [],
	            "key": "",
	            "title": "",
	            "category": "",
	            "type": "",
	            "industry": "",
	            "region": "",
	            "financingProfits": {
	                "isNeed": "",
	                "number": ""
	            },
	            "invest": {
	                "min": "",
	                "max": ""
	            },
	            "deadline": {
	                "min": "",
	                "max": ""
	            },
	            "minRate": "",
	            "mortgage": {
	                "isNeed": "",
	                "type": [],
	                "rate": {
	                    "min": "",
	                    "max": ""
	                }
	            },
	            "guarantee": {
	                "isNeed": "",
	                "method": "" },
	            "needCost": "",
	            "detail": "",
	            "accessory": {
	                "name": "",
	                "link": ""
	            }
	        };
	        ['handleSubmit', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(DebtsForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/fund/normal/getInfoDetail",
	                method: "post",
	                data: { id: that.props.infoID },
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
	                        url: "/fund/normal/audit",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("审核成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/fund/normal");
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
	                    { onSubmit: this.handleSubmit },
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u91D1\u6807\u9898',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("title", {
	                            rules: [{ require: true, message: "请输入标题!" }],
	                            initialValue: this.state.title
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.props.actionType == "detail" ? true : false }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u91D1\u7C7B\u522B'
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
	                            label: '\u6295\u8D44\u7C7B\u578B'
	                        }),
	                        _react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true, value: this.state.type },
	                            this.state.assetsType.debts.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6295\u8D44\u884C\u4E1A'
	                        }),
	                        getFieldDecorator("industry", {
	                            initialValue: this.state.industry
	                        })(_react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true },
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
	                            label: '\u6295\u8D44\u5730\u533A'
	                        }),
	                        getFieldDecorator("region", {
	                            initialValue: this.state.region
	                        })(_react2.default.createElement(_antd.Cascader, { disabled: true,
	                            options: this.state.cascaderRegion
	                        }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u878D\u8D44\u65B9\u53BB\u5E74\u51C0\u5229\u6DA6'
	                        }),
	                        getFieldDecorator("financingProfits", {
	                            initialValue: {
	                                isNeed: this.state.financingProfits.isNeed,
	                                number: this.state.financingProfits.number }
	                        })(_react2.default.createElement(_financingItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5355\u7B14\u6295\u8D44\u533A\u95F4'
	                        }),
	                        getFieldDecorator("invest", {
	                            initialValue: {
	                                min: this.state.invest.min,
	                                max: this.state.invest.max
	                            }
	                        })(_react2.default.createElement(_investItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u671F\u9650'
	                        }),
	                        getFieldDecorator("deadline", {
	                            initialValue: {
	                                min: this.state.deadline.min,
	                                max: this.state.deadline.max
	                            }
	                        })(_react2.default.createElement(_investItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6700\u4F4E\u63A5\u53D7\u5229\u7387'
	                        }),
	                        _react2.default.createElement(_antd.Input, { disabled: true, value: this.state.minRate })
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u662F\u5426\u5FC5\u987B\u6709\u62B5\u62BC\u7269'
	                        }),
	                        _react2.default.createElement(
	                            RadioGroup,
	                            { disabled: true, value: this.state.mortgage.isNeed },
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
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u62B5/\u8D28\u62BC\u7269\u7C7B\u578B'
	                        }),
	                        _react2.default.createElement(
	                            CheckboxGroup,
	                            { disabled: true, value: this.state.mortgage.type },
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
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u62B5/\u8D28\u62BC\u7269\u6298\u6263\u7387'
	                        }),
	                        getFieldDecorator("invest", {
	                            initialValue: {
	                                min: this.state.mortgage.rate.min,
	                                max: this.state.mortgage.rate.max
	                            }
	                        })(_react2.default.createElement(_mortgageItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u662F\u5426\u5FC5\u987B\u8981\u62C5\u4FDD'
	                        }),
	                        _react2.default.createElement(
	                            RadioGroup,
	                            { disabled: true, value: this.state.guarantee.isNeed },
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
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u62C5\u4FDD\u65B9\u5F0F'
	                        }),
	                        _react2.default.createElement(_antd.Input, { disabled: true, value: this.state.guarantee.method })
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u524D\u671F\u8D39\u7528'
	                        }),
	                        _react2.default.createElement(
	                            RadioGroup,
	                            { disabled: true, value: this.state.needCost },
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u6709(\u8BC4\u4F30/\u62C5\u4FDD\u7B49)'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u6CA1\u6709'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u8D44\u91D1\u8BE6\u60C5',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("detail", {
	                            rules: [{ require: true, message: "请输入资金详情!" }],
	                            initialValue: this.state.detail
	                        })(_react2.default.createElement(TextArea, { disabled: this.props.actionType == "detail" ? true : false, autosize: { minRows: 3 } }))
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
	                                { href: this.state.accessory.link },
	                                this.state.accessory.name
	                            )
	                        )
	                    ),
	                    this.props.actionType == "audit" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5BA1\u6838\u72B6\u6001',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("audit.status", {
	                            rules: [{ required: true, message: "请选择审核状态!" }],
	                            initialValue: "0"
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
	                    ) : "",
	                    this.props.actionType == "audit" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5BA1\u6838\u610F\u89C1'
	                        }),
	                        getFieldDecorator("audit.comment", {
	                            initialValue: this.state.auditComment
	                        })(_react2.default.createElement(TextArea, { autosize: { minRows: 3 } }))
	                    ) : "",
	                    _react2.default.createElement(
	                        FormItem,
	                        { wrapperCol: { span: 8, offset: 3 } },
	                        this.props.actionType == "audit" ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', htmlType: 'submit', style: { "marginRight": "20px" } },
	                            '\u63D0\u4EA4'
	                        ) : "",
	                        this.props.actionType == "audit" ? _react2.default.createElement(
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

/***/ 1161:
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
	
	var RadioGroup = _antd.Radio.Group;
	
	var FinancingItem = function (_React$Component) {
	    (0, _inherits3.default)(FinancingItem, _React$Component);
	
	    function FinancingItem(props) {
	        (0, _classCallCheck3.default)(this, FinancingItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (FinancingItem.__proto__ || (0, _getPrototypeOf2.default)(FinancingItem)).call(this, props));
	
	        var value = _this.props.value || {};
	        _this.state = {
	            isNeed: value.number || '0',
	            number: value.currency || 0
	        };
	        ['handleRadioChange', 'handleNumberChange', 'triggerChange'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(FinancingItem, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                var value = nextProps.value;
	                this.setState(value);
	            }
	        }
	    }, {
	        key: 'handleRadioChange',
	        value: function handleRadioChange(e) {
	            var isNeed = e.target.value;
	            if (!('value' in this.props)) {
	                this.setState({ isNeed: isNeed });
	            }
	            this.triggerChange({ isNeed: isNeed });
	        }
	    }, {
	        key: 'handleNumberChange',
	        value: function handleNumberChange(e) {
	            var number = parseInt(e.target.value || 0, 10);
	            if (isNaN(number)) {
	                return;
	            }
	            if (!('value' in this.props)) {
	                this.setState({ number: number });
	            }
	            this.triggerChange({ number: number });
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
	                RadioGroup,
	                { value: this.state.isNeed, onChange: this.handleRadioChange, disabled: true },
	                _react2.default.createElement(
	                    _antd.Radio,
	                    { value: '0' },
	                    '\u65E0\u8981\u6C42'
	                ),
	                _react2.default.createElement(
	                    _antd.Radio,
	                    { value: '1' },
	                    _react2.default.createElement(_antd.Input, { value: this.state.number, onChange: this.handleNumberChange, disabled: true }),
	                    '\u4E07\u5143(\u4EE5\u4E0A)'
	                )
	            );
	        }
	    }]);
	    return FinancingItem;
	}(_react2.default.Component);
	
	module.exports = FinancingItem;

/***/ }),

/***/ 1162:
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
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.min, onChange: this.handleMinChange, style: { width: '20%' }, disabled: true }),
	                '\xA0\xA0\u2014\u2014\xA0\xA0',
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.max, onChange: this.handleMaxChange, style: { width: '20%' }, disabled: true }),
	                '\u4E07\u5143'
	            );
	        }
	    }]);
	    return InvestItem;
	}(_react2.default.Component);
	
	module.exports = InvestItem;

/***/ }),

/***/ 1163:
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
	
	var DeadlineItem = function (_React$Component) {
	    (0, _inherits3.default)(DeadlineItem, _React$Component);
	
	    function DeadlineItem(props) {
	        (0, _classCallCheck3.default)(this, DeadlineItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (DeadlineItem.__proto__ || (0, _getPrototypeOf2.default)(DeadlineItem)).call(this, props));
	
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
	
	    (0, _createClass3.default)(DeadlineItem, [{
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
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.min, onChange: this.handleMinChange, style: { width: '20%' }, disabled: true }),
	                '\xA0\u5E74\xA0\u2014\u2014\xA0',
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.max, onChange: this.handleMaxChange, style: { width: '20%' }, disabled: true }),
	                '\xA0\u5E74'
	            );
	        }
	    }]);
	    return DeadlineItem;
	}(_react2.default.Component);
	
	module.exports = DeadlineItem;

/***/ }),

/***/ 1164:
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
	
	var MortgageItem = function (_React$Component) {
	    (0, _inherits3.default)(MortgageItem, _React$Component);
	
	    function MortgageItem(props) {
	        (0, _classCallCheck3.default)(this, MortgageItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (MortgageItem.__proto__ || (0, _getPrototypeOf2.default)(MortgageItem)).call(this, props));
	
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
	
	    (0, _createClass3.default)(MortgageItem, [{
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
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.min, onChange: this.handleMinChange, style: { width: '20%' }, disabled: true }),
	                '\xA0%\xA0\u2014\u2014\xA0',
	                _react2.default.createElement(_antd.Input, { type: 'text', value: this.state.max, onChange: this.handleMaxChange, style: { width: '20%' }, disabled: true }),
	                '\xA0%'
	            );
	        }
	    }]);
	    return MortgageItem;
	}(_react2.default.Component);
	
	module.exports = MortgageItem;

/***/ }),

/***/ 1165:
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
	
	var _financingItem = __webpack_require__(1161);
	
	var _financingItem2 = _interopRequireDefault(_financingItem);
	
	var _investItem = __webpack_require__(1162);
	
	var _investItem2 = _interopRequireDefault(_investItem);
	
	var _benefitsItem = __webpack_require__(1166);
	
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
	            loading: false,
	            "assetsType": {
	                "debts": [],
	                "stock": [],
	                "purchase": [],
	                "transfer": []
	            },
	            "industryList": [],
	            "cascaderRegion": [],
	            "key": "",
	            "title": "",
	            "category": "",
	            "stockType": "",
	            "type": "",
	            "industry": "",
	            "region": "",
	            "companyProfits": {
	                "isNeed": "",
	                "number": ""
	            },
	            invest: {
	                min: "",
	                max: ""
	            },
	            "estimateBenefits": {
	                "times": "",
	                "type": ""
	            },
	            "needCost": "1",
	            "detail": "",
	            "accessory": {
	                "name": "",
	                "link": ""
	            }
	        };
	        ['handleSubmit', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(StockForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/fund/normal/getInfoDetail",
	                method: "post",
	                data: { id: that.props.infoID },
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
	                        url: "/fund/normal/audit",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("审核成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/fund/normal");
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
	                    { onSubmit: this.handleSubmit },
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u91D1\u6807\u9898',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("title", {
	                            rules: [{ require: true, message: "请输入标题!" }],
	                            initialValue: this.state.title
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.props.actionType == "detail" ? true : false }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u91D1\u7C7B\u522B'
	                        }),
	                        _react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true, value: '2' },
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
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u53C2/\u63A7\u80A1'
	                        }),
	                        _react2.default.createElement(
	                            RadioGroup,
	                            { disabled: true, value: this.state.stockType },
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
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6295\u8D44\u7C7B\u578B'
	                        }),
	                        _react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true, value: this.state.type },
	                            this.state.assetsType.stock.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6295\u8D44\u884C\u4E1A'
	                        }),
	                        _react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true, value: this.state.industry },
	                            this.state.industryList.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6295\u8D44\u5730\u533A'
	                        }),
	                        _react2.default.createElement(_antd.Cascader, { disabled: true, value: this.state.region, options: this.state.cascaderRegion
	                        })
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6807\u7684\u4F01\u4E1A\u53BB\u5E74\u5229\u6DA6'
	                        }),
	                        getFieldDecorator("companyProfits", {
	                            initialValue: {
	                                isNeed: this.state.companyProfits.isNeed,
	                                number: this.state.companyProfits.number }
	                        })(_react2.default.createElement(_financingItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5355\u7B14\u6295\u8D44\u533A\u95F4'
	                        }),
	                        getFieldDecorator("invest", {
	                            initialValue: {
	                                min: this.state.invest.min,
	                                max: this.state.invest.max
	                            }
	                        })(_react2.default.createElement(_investItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6295\u8D44\u4F30\u503C\u500D\u6570'
	                        }),
	                        getFieldDecorator("estimateBenefits", {
	                            initialValue: {
	                                times: this.state.estimateBenefits.times,
	                                type: this.state.estimateBenefits.type
	                            }
	                        })(_react2.default.createElement(_benefitsItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u524D\u671F\u8D39\u7528'
	                        }),
	                        _react2.default.createElement(
	                            RadioGroup,
	                            { disabled: true, value: this.state.needCost },
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u6709(\u8BC4\u4F30/\u62C5\u4FDD\u7B49)'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u6CA1\u6709'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u8D44\u91D1\u8BE6\u60C5',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("detail", {
	                            rules: [{ require: true, message: "请输入资金详情!" }],
	                            initialValue: this.state.detail
	                        })(_react2.default.createElement(TextArea, { disabled: this.props.actionType == "detail" ? true : false, autosize: { minRows: 3 } }))
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
	                                { href: this.state.accessory.link },
	                                this.state.accessory.name
	                            )
	                        )
	                    ),
	                    this.props.actionType == "audit" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5BA1\u6838\u72B6\u6001',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("audit.status", {
	                            rules: [{ required: true, message: "请选择审核状态!" }],
	                            initialValue: "0"
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
	                    ) : "",
	                    this.props.actionType == "audit" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5BA1\u6838\u610F\u89C1'
	                        }),
	                        getFieldDecorator("audit.comment", {
	                            initialValue: this.state.auditComment
	                        })(_react2.default.createElement(TextArea, { autosize: { minRows: 3 } }))
	                    ) : "",
	                    _react2.default.createElement(
	                        FormItem,
	                        { wrapperCol: { span: 8, offset: 3 } },
	                        this.props.actionType == "audit" ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', htmlType: 'submit', style: { "marginRight": "20px" } },
	                            '\u63D0\u4EA4'
	                        ) : "",
	                        this.props.actionType == "audit" ? _react2.default.createElement(
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

/***/ 1166:
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
	                    disabled: true,
	                    type: 'text',
	                    value: this.state.times,
	                    onChange: this.handleTimesChange,
	                    style: { width: '25%' }
	                }),
	                '\xA0\u500D\xA0',
	                _react2.default.createElement(_antd.Icon, { type: 'close' }),
	                _react2.default.createElement(
	                    _antd.Select,
	                    { disabled: true,
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

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PurchaseForm = undefined;
	
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
	
	var _investItem = __webpack_require__(1162);
	
	var _investItem2 = _interopRequireDefault(_investItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	var RadioGroup = _antd.Radio.Group;
	var TextArea = _antd.Input.TextArea;
	
	var PurchaseForm = exports.PurchaseForm = function (_React$Component) {
	    (0, _inherits3.default)(PurchaseForm, _React$Component);
	
	    function PurchaseForm(props) {
	        (0, _classCallCheck3.default)(this, PurchaseForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (PurchaseForm.__proto__ || (0, _getPrototypeOf2.default)(PurchaseForm)).call(this, props));
	
	        _this.state = {
	            loading: false,
	            "assetsType": {
	                "debts": [],
	                "stock": [],
	                "purchase": [],
	                "transfer": []
	            },
	            "industryList": [],
	            "cascaderRegion": [],
	            "key": "",
	            "title": "",
	            "category": "",
	            "type": "",
	            "industry": "",
	            "region": "",
	            invest: {
	                min: "",
	                max: ""
	            },
	            "needCost": "",
	            detail: "",
	            accessory: {
	                name: "",
	                link: ""
	            }
	        };
	        ['handleSubmit', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(PurchaseForm, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.setState({ loading: true });
	            ajax({
	                url: "/fund/normal/getInfoDetail",
	                method: "post",
	                data: { id: that.props.infoID },
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
	                        url: "/fund/normal/audit",
	                        method: "post",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("审核成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/fund/normal");
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
	                    { onSubmit: this.handleSubmit },
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u91D1\u6807\u9898',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("title", {
	                            rules: [{ require: true, message: "请输入标题!" }],
	                            initialValue: this.state.title
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.props.actionType == "detail" ? true : false }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u8D44\u91D1\u7C7B\u522B'
	                        }),
	                        getFieldDecorator("category", {
	                            initialValue: "3"
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
	                            label: '\u6295\u8D44\u7C7B\u578B'
	                        }),
	                        _react2.default.createElement(
	                            _antd.Select,
	                            { disabled: true, value: this.state.type },
	                            this.state.assetsType.purchase.map(function (item) {
	                                return _react2.default.createElement(
	                                    Option,
	                                    { value: item.key, key: item.key },
	                                    item.value
	                                );
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u6295\u8D44\u5730\u533A'
	                        }),
	                        getFieldDecorator("region", {
	                            initialValue: this.state.region
	                        })(_react2.default.createElement(_antd.Cascader, { disabled: true,
	                            options: this.state.cascaderRegion
	                        }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5355\u7B14\u6295\u8D44\u533A\u95F4'
	                        }),
	                        getFieldDecorator("invest", {
	                            initialValue: {
	                                min: this.state.invest.min,
	                                max: this.state.invest.max
	                            }
	                        })(_react2.default.createElement(_investItem2.default, { actionType: this.props.actionType }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u524D\u671F\u8D39\u7528'
	                        }),
	                        _react2.default.createElement(
	                            RadioGroup,
	                            { disabled: true, value: this.state.needCost },
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u6709(\u8BC4\u4F30/\u62C5\u4FDD\u7B49)'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u6CA1\u6709'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u8D44\u91D1\u8BE6\u60C5',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("detail", {
	                            rules: [{ require: true, message: "请输入资金详情!" }],
	                            initialValue: this.state.detail
	                        })(_react2.default.createElement(TextArea, { disabled: this.props.actionType == "detail" ? true : false, autosize: { minRows: 3 } }))
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
	                                { href: this.state.accessory.link },
	                                this.state.accessory.name
	                            )
	                        )
	                    ),
	                    this.props.actionType == "audit" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({
	                            required: true
	                        }, formItemLayout, {
	                            label: '\u5BA1\u6838\u72B6\u6001',
	                            hasFeedback: this.props.actionType == "audit" ? true : false
	                        }),
	                        getFieldDecorator("audit.status", {
	                            rules: [{ required: true, message: "请选择审核状态!" }],
	                            initialValue: "0"
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
	                    ) : "",
	                    this.props.actionType == "audit" ? _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u5BA1\u6838\u610F\u89C1'
	                        }),
	                        getFieldDecorator("audit.comment", {
	                            initialValue: this.state.auditComment
	                        })(_react2.default.createElement(TextArea, { autosize: { minRows: 3 } }))
	                    ) : "",
	                    _react2.default.createElement(
	                        FormItem,
	                        { wrapperCol: { span: 8, offset: 3 } },
	                        this.props.actionType == "audit" ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', htmlType: 'submit', style: { "marginRight": "20px" } },
	                            '\u63D0\u4EA4'
	                        ) : "",
	                        this.props.actionType == "audit" ? _react2.default.createElement(
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
	    return PurchaseForm;
	}(_react2.default.Component);
	
	var WrappedPurchaseForm = _antd.Form.create({})(PurchaseForm);
	
	module.exports = WrappedPurchaseForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Audit = undefined;
	
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
	
	var _debtsForm = __webpack_require__(1160);
	
	var _debtsForm2 = _interopRequireDefault(_debtsForm);
	
	var _stockForm = __webpack_require__(1165);
	
	var _stockForm2 = _interopRequireDefault(_stockForm);
	
	var _purchaseForm = __webpack_require__(1167);
	
	var _purchaseForm2 = _interopRequireDefault(_purchaseForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var Audit = exports.Audit = function (_React$Component) {
	    (0, _inherits3.default)(Audit, _React$Component);
	
	    function Audit(props) {
	        (0, _classCallCheck3.default)(this, Audit);
	        return (0, _possibleConstructorReturn3.default)(this, (Audit.__proto__ || (0, _getPrototypeOf2.default)(Audit)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Audit, [{
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
	                    this.props.location.query.assetsType == 1 ? _react2.default.createElement(_debtsForm2.default, { infoID: this.props.params.id, actionType: 'audit' }) : this.props.location.query.assetsType == 2 ? _react2.default.createElement(_stockForm2.default, { infoID: this.props.params.id, actionType: 'audit' }) : _react2.default.createElement(_purchaseForm2.default, { infoID: this.props.params.id, actionType: 'audit' })
	                )
	            );
	        }
	    }]);
	    return Audit;
	}(_react2.default.Component);
	
	module.exports = Audit;

/***/ })

});
//# sourceMappingURL=20.chunk.js.map