# js高级面试题

技术：js,es6, 虚拟dom,vue,react,hybrid
- es6常用语法：class, module, promise等
- 原型高级应用:结合jquery和zepto源码
- 异步：从原理到jquery到promise

----

框架原理
- 虚拟dom:存在价值，如何使用，diff算法
- vue：MVVM,vue响应式、模板解析、渲染
- react: 组件化，jsx,vdom,setState
- 对比：有主见，自圆其说

-----

app混合开发

- hybrid：基础、和h5对比，上线流程
- 通讯： 通讯原理，JS-Bridge封装

## 高级基础

### es6

#### 模块化的使用和编译环境

模块的基本使用
```javascript
// test.js
import a from './util';
import { fn1, fn2 } from './util1';

//util.js
export default {
    a: 1
}
//util1.js
export function fn1() {
    return "est";
}
export function fn2() {
    return 3;
}
```
开发环境
#### babel
- node环境，运行npm init
- `npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest`
- 创建.babelrc文件
- `npm install --global babel-cli`
- `babel --version`
- 创建./src/index.js，内容：[1,2,3].map(item => item + 1)

- 最开始没有模块化，
- 后来amd称为标准，使用require.js（前端需要掌握）
- 前端打包工具，使得nodejs模块化可以被使用
- es6出现，想统一现在所有模块化标准
- nodejs积极支持，浏览器尚未统一，所以前端需要使用babel将es6的语法向后支持

#### webpack

#### rollup
small pieces
功能单一，可集成



## 开发环境

#### class和js构造函数的区别

语法糖：两种方法本质是一样的，只不过更加简洁易懂，系统会自动转化成底层的形式
```javascript
function MathHandle(x,y) {
	this.x = x;
	this.y = y;
}
MathHandle.prototype.add = function() {
	return this.x + this.y;
}

var math = new MathHandle(1,2);
console.log(math.add());
```
实际上class还是function，
```javascript
class MathHandle {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	add() {
		return this.x + this.y;
	}
}
const m = new MathHandle(1,2);
console.log(m.add());
console.log(MathHandle.prototype.constructor === MathHandle); // true
console.log(typeof MathHandle); // function
```

继承

```javascript
class Animal {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log('eat');

	}
}
class Dog extends Animal{
	constructor(name){
		super(name);
		this.name = name;
	}
	say() {
		console.log('say');
	}
}
const dog = new Dog('hashqi');
dog.eat();
dog.say();
console.log(Dog.prototype.constructor); //[Function: Dog]
console.log(Dog.prototype); //Dog {}
console.log(Dog.__proto__); //[Function: Animal]
console.log(dog.__proto__ === Dog.prototype) // true
```

```javascript
function Animal(name) {
	this.name = name;
	this.eat= function() {
	console.log('eat');
}
	
}

function Dog(name) {
	this.name = name;
	this.bark = function() {
	console.log('bark');
}
}

Dog.prototype = new Animal(this.name);

var dog = new Dog("hashqi");
dog.eat();
dog.bark();
```
- class在语法上更加贴合面向对象的写法
- class实现继承更加易读，易理解
- 更易于写Java等后端语言的使用
- 本质是语法糖，实际还是使用原型链的方式

#### promise的用法

异步加载的代码
```javascript
function loadImg(src, callback, fail) {
	var img = document.createElement('img');
	img.onload = function(){
		callback();
	}
	img.onerror = function(){
		fail();
	}
	img.src = src;
}
var src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580638422973&di=05d2f11208facf22839106d770457709&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F109437%2Ff%2F7334714.jpg";

loadImg(src, function(){
	console.log('success');
}, function(){
	console.log('fail');
})
```

promise的基础语法
```javascript
function loadImg(src) {
	const promise = new Promise(function(resolve, reject) {
		var img = document.createElement('img');
		img.onload = function(){
			resolve(img);
		}
		img.onerror = function(){
			reject();
		}
		img.src = src;
	});
	return promise;
}
// var src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580638422973&di=05d2f11208facf22839106d770457709&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F109437%2Ff%2F7334714.jpg";
var src = ""
var result = loadImg(src);
result.then(function(img) {
	console.log(img.width);
}, function(){
	console.log('failed');
})
result.then(function(img){
	console.log(img.height);
}, function(){
	console.log('fadaf');
})
```
#### es6其他常用功能

- let/const
- 多行字符串/模板变量
- 解构赋值
- 块级作用域
- 函数默认参数
- 箭头函数

块级作用域
```javascript
var obj = {a: 100, b: 200};
for (var item in obj) {
	console.log(item);
}
console.log(item + 'aaa');

const obj1 = {a: 100,b:200};
for (let item1 in obj1) {
	console.log(item1);
}
console.log(typeof item1);
```

```javascript
function(a=1){

}
```


```javascript
function fn() {
	console.log(this);
}
fn.call({a:100})
```
### 原型

#### 原型如何实际应用

> **描述jquery/zepto如何使用原型，结合自己的项目经验，说一个自己开发的例子**

jquery和zepto的简单使用
zepto如何使用原型
jquery如何使用原型

通过$符号传入css选择器，实例化构造函数，构造函数的原型中有css和html这两个api

```javascript
<!DOCTYPE html>
<html>
<head>
	<title>test</title>
</head>
<body>
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<div id="div1">
		<p>this is a test</p>
	</div>
	<script type="text/javascript" src="./jquery.js"></script>
	<script type="text/javascript">
		var $p = $('p');
		$p.css('font-size' , '40px');
		alert($p.html());
		var $div1 = $('#div1');
		$div1.css('color', 'blue');
		alert($div1.html())
	</script>
</body>
</html>
```

通过自定义jquery实现原型
- 通过选择器实例化构造函数，利用数组中的slice方法，筛选选择器的dom元素，遍历数组中的元素转换为自己的元素，并将原型指向$.fn，该对象定义了css和html等api，可以供用户调用
- 实际上在$.fn中还定义了constructor属性，在原型扩展中将会提到，该属性的value为jQuery，该源码暴露给用户的只有$符号，所以我们不能在init中扩展属性，只能在$.fn中进行扩展，通过该属性，我们可以访问到除了css和html等api之外的dom元素，length\selector属性，方便扩展

```javascript
(function (window) {
	var jQuery = function (selector) {
		return new jQuery.fn.init(selector) // 实例化构造函数
	}
	jQuery.fn = {
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
```

zepto的源码和jquery的差不多
```javascript
(function (window) {
	var zepto = {

	}
	function Z(dom, selector) {
		var i, len = dom ? dom.length : 0
		for(i = 0;i < len;i++){
			this[i] = dom[i]
		}
		this.length = len
		this.selector = selector || ''
	}
	zepto.Z = function (dom, selector) {
		return new Z(dom, selector)
	}
	zepto.init = function (selector) {
		var slice = Array.prototype.slice
		var dom = slice.call(document.querySelectorAll(selector))
		return zepto.Z(dom,selector)
	}
	var $ = function (selector) {
		return zepto.init(selector)
	}
	$.fn = {
		css: function(key, value) {
			alert('ff')
		},
		html: function(value) {
			alert('html1')
		}
	}
	Z.prototype = $.fn
	window.$ = $
})(window)
```

#### 原型如何满足扩展

- 插件机制,怎么写，扩展到哪里，原因是什么，好处是什么

为什么把原型方法放在$.fn
```javascript
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

$.fn = {
	constructor: zepto.Z,
	css: function(key, value) {
		alert('ff')
	},
	html: function(value) {
		alert('html1')
	}
}
```

一个扩展jquery插件

将定义的插件属性放入到init原型中，但是方式是通过jQuery.fn进行转化
> **只有$会暴露在window全局变量，不能通过构造函数原型拓展(限制)，将插件扩展统一到$.fn.xxx这一个接口，方便使用（好处）**

```javascript
$.fn.getNodeName = function() {
	return this[0].nodeName
}
```


### 异步

#### 什么是单线程，和异步有什么关系？

- 单线程：只有一个线程，同一时间只能做一件事情，避免dom渲染的冲突，解决方案就是异步
比如alert阻塞，setTimeout和$.ajax就是异步的方法

h5中webworker支持多线程，但是不能访问dom

异步存在的问题
- 没有按照书写方式执行，可读性差
- callback中不容易模块化

#### 什么是event-loop

- 事件轮询，js实现异步的具体解决方案
- 同步代码，直接执行
- 异步函数先放在异步队列中
- 待同步函数执行完毕，轮询执行异步队列的函数

```javascript
setTimeout(function(){
	console.log(100)
})
setTimeout(function(){
	console.log(300)
}， 100)
console.log(200)
```

轮询
```javascript
//主进程
console.log(200)
//异步队列
//立刻被放入
function() {
	console.log(100)
}
//100ms之后被放入
function(){
	console.log(300)
}
```
开放封闭原则ajax,promise:对扩展开发，对修改封闭

#### 目前js解决异步的方案有哪些
#### 如果只用jquery如何解决异步

jQuery Deferred
jQuery 1.5对ajax的改变举例
说明如何简单的封装使用Deferred
说明promise和Deferred的区别：promise只能被动监听.fail  .done的结果，不能干预成功或者失败的情况

```javascript
var ajax = $.ajax('data.json')
ajax.done(function() {
	console.log('')
})
.fail(function() {
	console.log('')
})
.done(function() {

})
console.log(ajax) // 返回deferred对象
```

另外一种写法
```javascript
var ajax = $.ajax('data.json')
ajax.then(function() {
	console.log('success')
}, function() {
	console.log('fail')
}) // (成功函数，失败函数)
console.log(ajax) // 返回deferred对象
```

只能通过写法上杜绝callback的形式

#### promise的标准

异常捕获：
可以捕获代码中语法的报错，也可以捕获reject

```javascript
result.then(function(img) {
	console.log('success')
	return img;
}).then(function(img) {
	console.log('success1')
}).catch(function(ex) {
	//统一异常捕获接口
	console.log(ex);
})
```

串联：

```javascript
var src1 = 'https://www.imooc.com...'
var result1 = loadImg(src1)
var src2 = ''
var result2 = loadImg(src2)
result1.then(function() {
	console.log('第一个图片加载完成')
	return result2;
}).then(function() {
	console.log('第二个图片加载完成')
}).catch(function(ex) {
	console.log(ex);
})
```

```javascript
Promise.add([result1,result2]).then(datas => {
	// 待全部执行完成之后，统一执行success，依次包含了多个promise返回的内容
	console.log(datas[0])
	console.log(datas[1])
})
//Promise.rac接收一个包含多个promise对象的数组
//只要有一个执行完毕，就执行success
Promise.race([result1,result2]).then(data => {
	console.log(data)
})
```
三种状态：pending,fulfilled rejected
初始状态：pending
不可逆
pending-->fulfilled
pending-->rejected

then中没有显式返回promise，则返回原来的promise

#### async/await 的使用（同步）

用法：
- 使用await，函数必须用async标识
- await后面跟的是一个promise实例
- 需要babel-polyfill

```javascript
const load = async function() {
	const result1 = await loadImg(src1)
	console.log(result1)
	const result2 = await loadImg(src2)
	console.log(result2)
}
load()
```


## 框架原理

### vdom
#### 什么是vdom，为何要用vdom
#### vdom如何使用，核心函数有哪些
#### 了解diff算法么

### MVVM
#### 之前使用jquery和现在使用vue和react框架的区别
#### 如何理解MVVM
#### vue如何实现响应式
#### vue如何解析模板
#### 介绍vue的实现流程

### 组件化
#### 对组件化的理解
#### jsx是什么
#### jsx和vdom是什么关系
#### 简述react的setState
#### 简述自己如何比较react和vue



## app混合开发

### hybrid
#### hybrid是什么，为何要用hybrid
#### hybrid如何更新上线
#### hybrid和h5有何区别
#### js如何与客户端通信
