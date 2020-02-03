(function (window) {
	var jQuery = function (selector) {
		return new jQuery.fn.init(selector) // 实例化构造函数
	}
	jQuery.fn = {
		constructor: jQuery,
		css: function (key, value) {
			alert('css')
		},
		html: function(value) {
			alert('html')
			// return 'html'
		}
	}
	var init = jQuery.fn.init = function (selector) {
		var slice = Array.prototype.slice
		// 通过selector找到dom中的选择器，变成数组
		var dom = slice.call(document.querySelectorAll(selector))
		var i, len = dom ? dom.length : 0
		// 遍历数组，把数组中的每个元素都变成自己的元素
		for (i = 0;i < len;i++) {
			this[i] = dom[i]
		}
		// len和selector也拓展为对象属性
		this.length = len
		this.selector = selector || ''
	}
	init.prototype = jQuery.fn // 构造函数的原型赋值道jquery.fn，就拥有了css和html函数
	window.$ = jQuery
})(window)