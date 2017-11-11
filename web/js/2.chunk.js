webpackJsonp([2],{

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Welcome = undefined;
	
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
	
	var Content = _antd.Layout.Content;
	
	var Welcome = exports.Welcome = function (_React$Component) {
	    (0, _inherits3.default)(Welcome, _React$Component);
	
	    function Welcome(props) {
	        (0, _classCallCheck3.default)(this, Welcome);
	        return (0, _possibleConstructorReturn3.default)(this, (Welcome.__proto__ || (0, _getPrototypeOf2.default)(Welcome)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Welcome, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _antd.Layout,
	                { style: { padding: '0 24px 24px' } },
	                _react2.default.createElement(
	                    _antd.Breadcrumb,
	                    { style: { margin: '12px 0' } },
	                    _react2.default.createElement(
	                        _antd.Breadcrumb.Item,
	                        null,
	                        '\u9996\u9875'
	                    ),
	                    _react2.default.createElement(
	                        _antd.Breadcrumb.Item,
	                        null,
	                        '\u6B22\u8FCE'
	                    )
	                ),
	                _react2.default.createElement(
	                    Content,
	                    { style: { background: '#fff', padding: 24, margin: 0, minHeight: 280 } },
	                    '\u6B22\u8FCE\u4F7F\u7528\u9633\u5149\u878D\u8D44\u7BA1\u7406\u540E\u53F0'
	                )
	            );
	        }
	    }]);
	    return Welcome;
	}(_react2.default.Component);
	
	module.exports = Welcome;

/***/ })

});
//# sourceMappingURL=2.chunk.js.map