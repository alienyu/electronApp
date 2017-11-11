webpackJsonp([11],{

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

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.List = undefined;
	
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
	
	var _searchForm = __webpack_require__(1144);
	
	var _searchForm2 = _interopRequireDefault(_searchForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var List = exports.List = function (_React$Component) {
	    (0, _inherits3.default)(List, _React$Component);
	
	    function List(props) {
	        (0, _classCallCheck3.default)(this, List);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));
	
	        _this.state = {
	            columns: [{
	                title: '手机号',
	                dataIndex: 'mobile'
	            }, {
	                title: '真实姓名',
	                dataIndex: 'name'
	            }, {
	                title: '性别',
	                dataIndex: 'gender',
	                render: function render(gender) {
	                    return gender == 0 ? "男" : "女";
	                }
	            }, {
	                title: '公司名称',
	                dataIndex: 'companyName'
	            }, {
	                title: '用户类型',
	                dataIndex: 'type',
	                render: function render(type) {
	                    switch (type) {
	                        case "0":
	                            return "所有";
	                            break;
	                        case "1":
	                            return "资金方";
	                            break;
	                        case "2":
	                            return "项目方";
	                            break;
	                    }
	                }
	            }, {
	                title: '注册日期',
	                dataIndex: 'registerTime'
	            }, {
	                title: '状态',
	                dataIndex: 'status',
	                render: function render(status) {
	                    switch (status) {
	                        case "0":
	                            return "所有";
	                            break;
	                        case "1":
	                            return "已认证";
	                            break;
	                        case "2":
	                            return "待审核";
	                            break;
	                        case "3":
	                            return "未通过";
	                            break;
	                    }
	                }
	            }, {
	                title: "操作",
	                render: function render(data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { style: { "textAlign": "center" } },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: _this.checkAudit.bind(_this, data.key), style: { "marginRight": "20px" } },
	                            '\u5BA1\u6838'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { onClick: _this.checkUserDetail.bind(_this, data.key), style: { "marginRight": "20px" } },
	                            '\u67E5\u770B'
	                        ),
	                        _react2.default.createElement(
	                            _antd.Popconfirm,
	                            { placement: 'left', title: '\u662F\u5426\u786E\u8BA4\u5220\u9664?', onConfirm: _this.deleteUser.bind(_this, data.key), okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' },
	                            _react2.default.createElement(
	                                _antd.Button,
	                                { style: { marginRight: 20 }, type: 'danger' },
	                                '\u5220\u9664'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _antd.Popconfirm,
	                            { placement: 'left', title: '\u662F\u5426\u786E\u8BA4\u6B64\u64CD\u4F5C?', onConfirm: _this.setForbidden.bind(_this, data), okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' },
	                            _react2.default.createElement(
	                                _antd.Button,
	                                { type: 'danger' },
	                                data.forbidden ? "解禁" : "禁言"
	                            )
	                        )
	                    );
	                }
	            }],
	            dataSource: [],
	            pagination: {
	                current: 1,
	                total: 0
	            },
	            loading: false
	        };
	        ['changePage', 'handleSearch', 'showLoading', 'hideLoading'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(List, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.formRef.handleSubmit(1);
	        }
	    }, {
	        key: 'showLoading',
	        value: function showLoading() {
	            this.setState({ loading: true });
	        }
	    }, {
	        key: 'hideLoading',
	        value: function hideLoading() {
	            this.setState({ loading: false });
	        }
	    }, {
	        key: 'checkAudit',
	        value: function checkAudit(key) {
	            _reactRouter.hashHistory.push("/user/manage/audit/" + key);
	        }
	    }, {
	        key: 'checkUserDetail',
	        value: function checkUserDetail(key) {
	            _reactRouter.hashHistory.push("/user/manage/detail/" + key);
	        }
	    }, {
	        key: 'setForbidden',
	        value: function setForbidden(selectedData) {
	            var that = this;
	            ajax({
	                url: "user/manage/setForbidden",
	                data: {
	                    id: selectedData.id,
	                    forbidden: !selectedData.forbidden
	                },
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        _antd.message.success("设置成功!", 1);
	                        that.state.dataSource.filter(function (item) {
	                            if (item.id == selectedData.id) {
	                                item.forbidden = !item.forbidden;
	                            }
	                        });
	                        that.setState({ dataSource: that.state.dataSource });
	                    } else {
	                        _antd.message.error(data.errMsg, 1);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'deleteUser',
	        value: function deleteUser(key) {
	            var that = this;
	            ajax({
	                url: "/user/manage/deleteUser",
	                method: "post",
	                data: { id: key },
	                callback: function callback(data) {
	                    if (data.status == 200) {
	                        _antd.message.success("删除成功", 1);
	                        var newDataSource = that.state.dataSource.filter(function (item) {
	                            return item.key != key;
	                        });
	                        that.setState({ dataSource: newDataSource });
	                    } else {
	                        _antd.message.error(data.errMsg, 1);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'handleSearch',
	        value: function handleSearch(result) {
	            this.setState({
	                pagination: {
	                    current: result.current,
	                    total: result.total
	                },
	                dataSource: result.list
	            });
	        }
	    }, {
	        key: 'changePage',
	        value: function changePage(pagination) {
	            this.formRef.handleSubmit(pagination.current);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
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
	                    _react2.default.createElement(
	                        'div',
	                        { style: { "marginBottom": "30px" } },
	                        _react2.default.createElement(_searchForm2.default, { searchFuc: this.handleSearch, showLoading: this.showLoading, hideLoading: this.hideLoading, wrappedComponentRef: function wrappedComponentRef(inst) {
	                                return _this2.formRef = inst;
	                            } })
	                    ),
	                    _react2.default.createElement(_antd.Table, {
	                        bordered: true,
	                        dataSource: this.state.dataSource,
	                        columns: this.state.columns,
	                        pagination: this.state.pagination,
	                        onChange: this.changePage,
	                        loading: this.state.loading
	                    })
	                )
	            );
	        }
	    }]);
	    return List;
	}(_react2.default.Component);
	
	module.exports = List;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SearchForm = undefined;
	
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
	var Option = _antd.Select.Option;
	
	var SearchForm = exports.SearchForm = function (_React$Component) {
	    (0, _inherits3.default)(SearchForm, _React$Component);
	
	    function SearchForm(props) {
	        (0, _classCallCheck3.default)(this, SearchForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (SearchForm.__proto__ || (0, _getPrototypeOf2.default)(SearchForm)).call(this, props));
	
	        _this.state = {
	            keyWord: "",
	            type: "",
	            status: ""
	        };
	        ['handleSubmit', 'resetForm'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(SearchForm, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(page) {
	            var that = this;
	            this.props.form.validateFields(function (err, values) {
	                that.props.showLoading();
	                ajax({
	                    url: "/user/manage/getUserList",
	                    method: "post",
	                    data: (0, _assign2.default)(values, {
	                        current: page
	                    }),
	                    callback: function callback(data) {
	                        that.props.hideLoading();
	                        if (data.status == 200) {
	                            that.props.searchFuc(data.data);
	                        } else {
	                            _antd.message.error(data.errMsg, 1);
	                        }
	                    }
	                });
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
	
	            return _react2.default.createElement(
	                _antd.Form,
	                { layout: 'inline' },
	                _react2.default.createElement(
	                    FormItem,
	                    {
	                        label: '\u5173\u952E\u5B57'
	                    },
	                    getFieldDecorator('keyWord')(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u516C\u53F8\u6216\u59D3\u540D' }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    {
	                        label: '\u7528\u6237\u7C7B\u578B'
	                    },
	                    getFieldDecorator('type', {
	                        initialValue: "0"
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        null,
	                        _react2.default.createElement(
	                            Option,
	                            { value: '0' },
	                            '\u6240\u6709'
	                        ),
	                        _react2.default.createElement(
	                            Option,
	                            { value: '1' },
	                            '\u8D44\u91D1\u65B9'
	                        ),
	                        _react2.default.createElement(
	                            Option,
	                            { value: '2' },
	                            '\u9879\u76EE\u65B9'
	                        )
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    {
	                        label: '\u72B6\u6001'
	                    },
	                    getFieldDecorator('status', {
	                        initialValue: "0"
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        null,
	                        _react2.default.createElement(
	                            Option,
	                            { value: '0' },
	                            '\u6240\u6709'
	                        ),
	                        _react2.default.createElement(
	                            Option,
	                            { value: '1' },
	                            '\u5DF2\u8BA4\u8BC1'
	                        ),
	                        _react2.default.createElement(
	                            Option,
	                            { value: '2' },
	                            '\u5F85\u5BA1\u6838'
	                        ),
	                        _react2.default.createElement(
	                            Option,
	                            { value: '3' },
	                            '\u672A\u901A\u8FC7'
	                        )
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    null,
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { icon: 'search', type: 'primary', onClick: this.handleSubmit.bind(this, 1), style: { "marginRight": "20px" } },
	                        '\u67E5\u8BE2'
	                    ),
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { icon: 'reload', onClick: this.resetForm },
	                        '\u91CD\u7F6E'
	                    )
	                )
	            );
	        }
	    }]);
	    return SearchForm;
	}(_react2.default.Component);
	
	var WrappedSearchForm = _antd.Form.create({})(SearchForm);
	
	module.exports = WrappedSearchForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1124)))

/***/ })

});
//# sourceMappingURL=11.chunk.js.map