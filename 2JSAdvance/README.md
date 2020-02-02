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



#### es6其他常用功能

### 异步
#### 什么是单线程，和异步有什么关系？
#### 什么是event-loop
#### 目前js解决异步的方案有哪些
#### 如果只用jquery如何解决异步
#### promise的标准
#### async/await 的使用

### 原型
#### 原型如何实际应用
#### 原型如何满足扩展


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
