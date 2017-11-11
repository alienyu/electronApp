webpackJsonp([39],{

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

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Add = undefined;
	
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
	
	var _dataForm = __webpack_require__(1216);
	
	var _dataForm2 = _interopRequireDefault(_dataForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Content = _antd.Layout.Content;
	
	var Add = exports.Add = function (_React$Component) {
	    (0, _inherits3.default)(Add, _React$Component);
	
	    function Add(props) {
	        (0, _classCallCheck3.default)(this, Add);
	        return (0, _possibleConstructorReturn3.default)(this, (Add.__proto__ || (0, _getPrototypeOf2.default)(Add)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Add, [{
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
	                    _react2.default.createElement(_dataForm2.default, { type: 'add' })
	                )
	            );
	        }
	    }]);
	    return Add;
	}(_react2.default.Component);
	
	module.exports = Add;

/***/ }),

/***/ 1216:
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
	
	var _uploadImg = __webpack_require__(1217);
	
	var _uploadImg2 = _interopRequireDefault(_uploadImg);
	
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
	            img: {
	                file: {},
	                fileList: []
	            },
	            time: "",
	            status: "1",
	            link: "",
	            loading: true
	        };
	        ['checkImg', 'handleSubmit', 'resetForm', 'showLoading', 'hideLoading'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(DataForm, [{
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
	                    url: "/notice/getInfoDetail",
	                    method: "post",
	                    data: {
	                        id: this.props.noticeID
	                    },
	                    callback: function callback(data) {
	                        if (data.status == 200) {
	                            that.setState({
	                                loading: false,
	                                title: data.data.detailInfo.title,
	                                img: {
	                                    file: {},
	                                    fileList: [{
	                                        uid: -1,
	                                        name: data.data.detailInfo.img.split("/").pop(),
	                                        status: "done",
	                                        url: data.data.detailInfo.img
	                                    }]
	                                },
	                                time: data.data.detailInfo.time,
	                                status: data.data.detailInfo.status,
	                                link: data.data.detailInfo.link
	                            });
	                            that.KE = K.create('#content', {
	                                allowFileManager: true,
	                                afterChange: function afterChange() {
	                                    that.props.form.setFieldsValue({ "content": this.html() });
	                                }
	                            });
	                            that.KE.html(data.data.detailInfo.content);
	                            if (that.state.disabled) {
	                                that.KE.readonly();
	                            }
	                            if (that.state.disabled) {
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
	                        values = (0, _assign2.default)(values, { id: _this2.props.noticeID });
	                    }
	                    values.img = values.img.fileList[0].response ? values.img.fileList[0].response.data.imgUrl : values.img.fileList[0].url;
	                    ajax({
	                        url: "/notice/updateInfo",
	                        data: values,
	                        callback: function callback(data) {
	                            if (data.status == 200) {
	                                _antd.message.success("设置成功!", 1, function () {
	                                    _reactRouter.hashHistory.push("/notice");
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
	            _reactRouter.hashHistory.push("/notice");
	        }
	    }, {
	        key: 'resetForm',
	        value: function resetForm() {
	            this.setState({
	                fileList: []
	            });
	            this.props.form.resetFields();
	        }
	    }, {
	        key: 'checkImg',
	        value: function checkImg(rule, value, callback) {
	            if (value.fileList.length > 0 && value.fileList[0].status == "done") {
	                callback();
	                return;
	            }
	            callback("请选择图片!");
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
	                            label: '\u56FE\u7247',
	                            hasFeedback: true
	                        }),
	                        getFieldDecorator('img', {
	                            rules: [{
	                                validator: this.checkImg
	                            }],
	                            initialValue: this.state.img
	                        })(_react2.default.createElement(_uploadImg2.default, { showLoading: this.showLoading, hideLoading: this.hideLoading }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u72B6\u6001'
	                        }),
	                        getFieldDecorator('status', {
	                            initialValue: this.state.status.toString()
	                        })(_react2.default.createElement(
	                            RadioGroup,
	                            { disabled: this.state.disabled },
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '0' },
	                                '\u65E0\u6548'
	                            ),
	                            _react2.default.createElement(
	                                _antd.Radio,
	                                { value: '1' },
	                                '\u6709\u6548'
	                            )
	                        ))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u6D3B\u52A8\u8BE6\u60C5',
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
	                        (0, _extends3.default)({}, formItemLayout, {
	                            label: '\u94FE\u63A5\u5730\u5740'
	                        }),
	                        getFieldDecorator('link', {
	                            rules: [{ required: true, message: '请输入链接!' }],
	                            initialValue: this.state.link
	                        })(_react2.default.createElement(_antd.Input, { disabled: this.state.disabled, type: 'text' }))
	                    ),
	                    _react2.default.createElement(
	                        FormItem,
	                        {
	                            wrapperCol: { span: 12, offset: 6 }
	                        },
	                        !this.state.disabled ? _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', htmlType: 'submit', onClick: this.handleSubmit, style: { "marginRight": "20px" } },
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

/***/ 1217:
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
	
	var UploadImg = function (_React$Component) {
	    (0, _inherits3.default)(UploadImg, _React$Component);
	
	    function UploadImg(props) {
	        (0, _classCallCheck3.default)(this, UploadImg);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (UploadImg.__proto__ || (0, _getPrototypeOf2.default)(UploadImg)).call(this, props));
	
	        var value = _this.props.value || {};
	        _this.state = {
	            file: value.file || {},
	            fileList: value.fileList || [],
	            previewVisible: false,
	            previewImage: ''
	        };
	        ['handleCancel', 'handleChange', 'handlePreview'].forEach(function (m) {
	            return _this[m] = _this[m].bind(_this);
	        });
	        return _this;
	    }
	
	    (0, _createClass3.default)(UploadImg, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                var value = nextProps.value;
	                this.setState(value);
	            }
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
	        key: 'handlePreview',
	        value: function handlePreview(file) {
	            this.setState({
	                previewImage: file.url || file.thumbUrl,
	                previewVisible: true
	            });
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel() {
	            this.setState({ previewVisible: false });
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(info) {
	            var that = this;
	            var file = info.file;
	            var fileList = info.fileList;
	            this.setState({
	                fileList: fileList
	            });
	            this.props.showLoading();
	            if (fileList.length > 0) {
	                if (fileList[0].status == "error") {
	                    fileList = [];
	                    _antd.message.error("上传图片失败!");
	                    this.setState({
	                        fileList: fileList
	                    });
	                }
	                this.props.hideLoading();
	            } else {
	                this.props.hideLoading();
	            }
	            this.triggerChange({ fileList: fileList });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var uploadButton = _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_antd.Icon, { type: 'plus' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ant-upload-text' },
	                    'Upload'
	                )
	            );
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _antd.Upload,
	                    {
	                        action: '/upload',
	                        listType: 'picture-card',
	                        fileList: this.state.fileList,
	                        onPreview: this.handlePreview,
	                        onChange: this.handleChange
	                    },
	                    this.state.fileList.length >= 1 ? null : uploadButton
	                ),
	                _react2.default.createElement(
	                    _antd.Modal,
	                    { visible: this.state.previewVisible, footer: null, onCancel: this.handleCancel },
	                    _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: this.state.previewImage })
	                )
	            );
	        }
	    }]);
	    return UploadImg;
	}(_react2.default.Component);
	
	module.exports = UploadImg;

/***/ })

});
//# sourceMappingURL=39.chunk.js.map