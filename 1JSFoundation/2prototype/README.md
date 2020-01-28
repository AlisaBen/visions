# 原型和原型链

- 如何准确判断一个变量是数组类型？
- 写一个原型链继承的例子
- 描述new一个对象的过程
- zepto（或其他框架）源码中如何使用原型链
---
## 构造函数
编程习惯：函数首字母大写，标识构造函数
1. 将构造函数的参数传递进去
2. this指向空对象
3. 通过this.xxx初始化this指向对象的属性
4. 最后返回this指向的对象

```javascript
function Foo(name,age){
    this.name = name;
    this.age = age;
    this.class = 'class-1';
}
var f = new Foo('zhangsan', 16);
```

## 构造函数-扩展

```javascript
var a = {} 其实是var a = new Object()的语法糖
var a = []其实是var a = new Array()的语法糖
function Foo(){...}其实是var Foo = new Function(...)
```

## 原型规则和示例

- 5条原型规则
  1. 所有引用类型（数组、对象、函数）都具有对象特性，即可以自由扩展属性（除了null）
  2. 所有引用类型（数组、对象、函数）都有一个__proto__（隐式原型）属性，属性值是一个普通的对象
  3. 所有的函数，都有一个prototype（显式原型）属性，属性值也是一个普通的对象
  4. 所有的引用类型（数组、对象、函数）__proto__属性值指向他的构造函数的prototype属性值
  5. 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（即它的构造函数的prototype）中寻找
```javascript
const obj = {};
obj.a = 10;
const array = [];
array[0] = 3;
const func = function test(){
    console.log('test');
}
console.log(obj.__proto__); // {}
console.log(array.__proto__); // []
console.log(func.__proto__); // [Function]
console.log(func.prototype);
console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.prototype); //undefined
```

- 定义Foo构造函数，并且显式原型添加alertName函数
- 通过new初始化一个对象，并且扩展该对象的显示原型，添加printName属性
- 执行f.printName()方法，在f显式原型中寻找该方法，执行
- 执行f.alertName()方法，在f显式原型中寻找该方法，没有，在隐式原型中寻找，f的隐式原型指向其构造函数的显示原型也就是Foo.prototype中寻找该方法，执行
```javascript
function Foo(name){
    this.name = name;
}
Foo.prototype.alertName = function(){
    console.log(this.name + ' [alert]');
}

const f = new Foo('zhangsan');
f.printName = function(){
    console.log(this.name + ' [print]');
}
f.printName();
f.alertName();
```

- 原型规则是学习原型链的基础

### 循环对象自身的属性
在下面的例子中，对象f有三个属性，但是其中一个属性是继承原型链中的属性，属于构造函数的属性，我们希望只打印属于该构造函数的属性，通过hasOwnProperty方法判断
```javascript
function Foo(name){
    this.name = name;
}
Foo.prototype.alertName = function(){
    console.log(this.name + ' [alert]');
}

const f = new Foo('zhangsan');
f.printName = function(){
    console.log(this.name + ' [print]');
}

for(const item in f){
    // console.log(item);
    if(f.hasOwnProperty(item)){
        console.log(item); // name printName
    }
}
```

## 原型链

f.toString()方法会调用f.__proto__中寻找该方法，未果，寻找Foo.__proto__中的方法，Foo的隐式原型指向Object的显式方法，找到toString()方法执行
Instanceof
用于判断引用类型属于哪个构造函数的方法,根据原型链的规则，最后寻找Foo.prototype
```javascript
function Foo(name){
    this.name = name;
}
const f = new Foo('zhangsan');
console.log(f instanceof Foo); // true
```
