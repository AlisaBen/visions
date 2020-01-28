# 作用域和闭包

通过function定义的函数是一个声明，在执行js代码的时候会将声明提到前面执行，所以在声明前调用函数不会报错
```javascript
console.log(fn);
fn(); // 不会报错
// 函数声明
// 声明的函数会提到前面去
function fn(){
    console.log('rr');
}
```
下面这段代码会报错，因为通过const定义的fn1会提到前面执行，但是在执行函数的时候fn1是undefined，执行函数会报错
注意这里不能使用es6的定义变量的方法const和let，因为const和let是局部声明变量，不能变量提升，而var是声明全局变量，在执行前会进行变量提升

```javascript
console.log(fn1);
fn1(); // 报错，执行fn1的时候还不是函数
//函数表达式
var fn1 = function(){
    console.log('fn1');
}

console.log(a);
var a = 100;
```

## 全局作用域

没有var声明的变量是全局变量，在函数内外都可以访问到，而函数参数属于局部作用域只有在函数内部可以访问到

```javascript
fn('zhangsan');
function fn(name){
    age = 20;
    console.log(name + age + ' [fn]'); // zhangsan20 [fn]
}
console.log(age); // 20
console.log(name);
```
与下面代码不同的是,我们在下面对age变量进行声明，声明age变量为局部变量，我们便不能在函数外面访问到

```javascript
fn('zhangsan');
function fn(name){
    age = 20;
    console.log(name + age + ' [fn]'); // zhangsan20 [fn]
    var age;
}
console.log(age); // 20
```

## 题目
- 说一下对变量提升的理解
- 说明this几种不同的使用场景
- 创建10个<a>标签，点击的时候弹出来对应的序号
- 如何理解作用域
- 实际开发中闭包的应用

## 执行上下文
    范围： 一段script或者一个函数
    全局：变量定义、函数声明（script）
    函数：变量定义、函数声明，this，arguments（函数）

## this
    this要在执行时才能确认值，定义时无法确认
```javascript
var a = {
    name: 'A',
    fn: function(){
        console.log(this.name);
    }
}
a.fn(); // A
a.fn.call({name:'B'}); // B
var fn1 = a.fn;
fn1(); // undefined
```

this的使用场景
- 作为构造函数执行
- 作为对象属性执行
- 作为普通函数执行
- call apply bind
```javascript
function fn(name,age){
    console.log(name, age); //zhangsan 20
    console.log(this); // {x: 100}
}
fn.call({x:100},'zhangsan',20);
fn.apply({x:100},['zhangsan',20])
```
bind方法是对函数表达式方式的一种对象限制
所以不能通过函数声明的方式进行绑定
```javascript
var fn = function(name,age){
    console.log(name, age); //zhangsan 20
    console.log(this); // {x: 100}
}.bind({x:100});
fn('zhangsan', 20);
```
## 作用域
- 没有块级作用域
- 只有函数和全局作用域

只有函数的大括号内定义的变量属于局部变量，对于其他的大括号内部都不属于块级作用域，js中没有块级作用域的概念，所以下面的代码在大括号内外定义name变量的效果都是一样的

```javascript 
// var name = 'zhangsan';
if(true){
    var name = 'zhangsan';
}
console.log(name);
```

```javascript
var a = 100;
function fn(){
    var a = 200;
    console.log('fn:', a);
}
console.log(a); // 100
fn(); // fn:200
```
## 作用域链
> 自由变量：当前作用域没有定义的变量
当前作用域调用没有定义的变量，会到父级作用域寻找该变量

## 闭包

在返回的函数中，变量a是自由变量，打印a需要到父级作用域中寻找
```javascript
/*闭包 */
function fn1(){
    var a = 100;
    return function(){
        console.log(a);
    }
}
var f1 = fn1();
var a = 200;
f1(); // 100
```
### 闭包的使用场景
- 函数作为返回值
- 函数作为参数传递

对于fn中的父级作用域是全局作用域，所以打印的b是全局作用域中的b，而不是fn2中的b
```javascript
var b = 500;
var fn = function(){
    console.log(b);
}
function fn2(fn){
    var b = 300;
    fn();
}
fn2(fn); // 500
```

### 闭包在实际开发中的应用
封装变量，收敛权限

```javascript
function isFirstLoad(){
    var _list = [];
    return function(id){
        if(_list.indexOf(id) >= 0){
            return false;
        }else{
            _list.push(id);
            return true;
        }
    }
}
var firstLoad = isFirstLoad();
console.log(firstLoad(10)); // true
console.log(firstLoad(10)); // false
console.log(firstLoad(30)); // true
```

# 解题

## 说一下对变量提升的理解

对于**变量定义**和**函数声明**两种情况，在执行的时候会将声明变量提前到所有代码执行前

## 说明this几种不同的使用场景

- 作为构造函数执行
- 作为对象属性执行
- 作为普通函数执行（window）
- call apply bind

## 创建10个<a>标签，点击的时候弹出来对应的序号

通过在for循环中定义10个函数执行，限制i为局部变量，在执行监听函数的时候，自由变量i在父级作用域中，可以正确执行，但是如果不通过function的方式将代码包裹起来，就是全局作用域，当代码执行的时候，全局作用域的i已经变成10了

> 自执行函数：就是不用调用，只要定义完成，立即执行的函数


```javascript
var i;
for(i = 0; i < 10; i++){
    (function(i){
        var a = document.createElement('a');
        a.setAttribute('style', 'width:200px');
        a.innerHTML = i + '<br>';
        
        a.addEventListener('click',function(e){
            e.preventDefault();
            console.log('ttt');
            console.log(i);
            alert(i);
        })
        console.log(a);
        document.body.appendChild(a);
    })(i);
}
```

## 如何理解作用域

作用域分为函数作用域和全局作用域，函数作用域中定义的变量仅在函数作用域中可以使用，全局作用域无法获取，函数作用域中调用未在函数作用域中定义的变量称为自由变量，当函数内部调用未在函数中定义的变量或者作为参数传递的函数执行的时候，对自由变量的查找需要不断查找对应的父级作用域，形成一个作用域链

- 自由变量
- 作用域链，即自由变量的查找
- 闭包的两个场景


