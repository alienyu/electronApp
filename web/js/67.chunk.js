webpackJsonp([67],{

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

/***/ 1267:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _searchForm = __webpack_require__(1268);
	
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
	                title: '用户名',
	                dataIndex: 'name'
	            }, {
	                title: '金额',
	                dataIndex: 'number'
	            }, {
	                title: '时间',
	                dataIndex: 'time'
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

/***/ }),

/***/ 1268:
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
	
	var _moment = __webpack_require__(436);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FormItem = _antd.Form.Item;
	var RangePicker = _antd.DatePicker.RangePicker;
	
	var SearchForm = exports.SearchForm = function (_React$Component) {
	    (0, _inherits3.default)(SearchForm, _React$Component);
	
	    function SearchForm(props) {
	        (0, _classCallCheck3.default)(this, SearchForm);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (SearchForm.__proto__ || (0, _getPrototypeOf2.default)(SearchForm)).call(this, props));
	
	        _this.state = {
	            time: ""
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
	                var params = {};
	                if (values.time) {
	                    params.startTime = (0, _moment2.default)(values.time[0]).format("YYYY-MM-DD HH:mm");
	                    params.endTime = (0, _moment2.default)(values.time[1]).format("YYYY-MM-DD HH:mm");
	                }
	                ajax({
	                    url: "/finance/recharge/getInfoList",
	                    data: (0, _assign2.default)(params, values, {
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
	                        label: '\u65F6\u95F4'
	                    },
	                    getFieldDecorator('time')(_react2.default.createElement(RangePicker, {
	                        showTime: { format: 'HH:mm' },
	                        format: 'YYYY-MM-DD HH:mm',
	                        placeholder: ['开始时间', '结束时间']
	                    }))
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
//# sourceMappingURL=67.chunk.js.map