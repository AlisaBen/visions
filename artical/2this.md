# this的优点

this提供了一种优雅的方式隐式“传递”一个对象引用，使api容易复用

下面这段代码可以在不同的上下文对象中重复使用函数identify()和speak()

```javascript
function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm" + identify.call(this);
    console.log(greeting);
}
var me = { name: "Kyle" };
var you = { name: "Reader" };
console.log(identify.call(me)); // KYLE
console.log(identify.call(you)); // READER
speak.call(me); // Hello, I'mKYLE
speak.call(you); // Hello, I'mREADER

```

如果不使用this，就需要给上面两个函数显式传入一个上下文对象，即作为函数参数传入you和me

但是要更好的使用this还需要理解它是如何工作的

# this作用域
this在任何情况下都不指向函数的词法作用域也不指向函数自身，this实际上是在函数调用时发生的绑定，this指向取决于函数在哪里被调用

要分析调用栈

```javascript
function baz() {
    debugger;
    console.log("baz");
    bar();
}
function bar() {
    console.log("bar");
    foo();
}
function foo() {
    console.log("foo")
}
baz(); // 调用栈baz->bar->foo
```
调用位置决定了this的绑定对象

## 默认绑定
函数调用时应用了this的默认绑定，所以this指向全局对象
foo()是直接使用不带任何修饰的函数引用进行调用的
在非严格模式下，默认绑定到全局对象
```javascript
function foo() {
    console.log(this.a);
}
var a = 2;
foo(); // 2
```

## 隐式绑定
调用位置是否有上下文对象，或者被某个对象拥有或包含
```javascript
function foo2() {
    console.log(this.a);
}
var obj = { a: 2, foo: foo2 };
obj.foo(); // 2
```

## 隐式丢失
this绑定常见问题是隐式绑定的函数会丢失绑定对象，由于应用了默认绑定，把this绑定到全局对象或者undefined上

```javascript
//隐式绑定丢失
function foo3() {
    console.log(this.b);
}
var obj = { b: 2, foo: foo3 };
var bar = obj.foo; // 函数别名
var b = "oops, global";
bar(); // "oops, global"
```

该例子和上面的不同就在于foo3函数的执行方式，该例子通过定义bar执行obj.foo指向的函数，也就是引用了foo3函数本身，在bar函数执行的时候obj的上下文对象已经丢失，应用了默认绑定，this指向了全局对象


```javascript
function foo4() {
    console.log(this.c);
}
function doFoo(fn) {
    fn();
}
var obj1 = { c: 2, foo: foo4 };
var c = "oops";
doFoo(obj1.foo); // oops
```

## 显式绑定

通过call()和apply()方法进行显式绑定

```javascript
function foo5() {
    console.log(this.d);
}
var obj2 = { d: 2 };
var bar2 = function() {
    foo5.call(obj2);
};
bar2(); // 2
setTimeout(bar2, 100); // 2
```
ES5提供了内置的方法Function.prototype.bind执行硬绑定

bind会返回一个硬编码的新函数

```javascript
function student(something) {
    console.log(this.a, something);
    return this.a + something;
}
var obj4 = { a: 2 };
var bar4 = student.bind(obj4);
var b = student(3); // 2 3
console.log(b); // 5
```

## api调用的上下文
第三方的许多函数，都提供了一个可选的参数，确保回调函数使用指定的this
```javascript
```



