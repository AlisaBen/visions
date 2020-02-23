# 什么是闭包

定义在一个函数内部的函数，可以重用一个变量，又保护变量不被污染的一种机制

一个闭包的例子
```javascript
function closure() {
    var a = 1;
    return function() {
        console.log(a);
    }
}
var closure = closure();
closure(); // 1
```
# 为什么使用闭包

在JavaScript中有两种作用域即全局作用域和块作用域，块作用域可以访问全局作用域的变量，但是全局作用域不可访问块作用域，在一些场景中，我们希望读取函数内部的变量，又不希望定义全局变量以防止被污染


# 如何使用

1. 用外层函数包裹要保护的变量和内层函数
2. 外层函数将内层函数返回到外部
3. 调用外层函数，获得内层函数的对象

下面的例子外层函数包括保护的变量是n，返回内层匿名函数，执行result()打印10，执行nAdd()函数，由于nAdd变量前没有var关键字，所以定义为全局变量，但是该变量要在f1函数执行后才可以访问
执行nAdd()函数对n加1操作，nAdd实际上也是闭包，访问内层函数中的n
再执行result()函数时，打印11
闭包使用后，不能单单通过释放result变量来释放变量n，因为nAdd函数也有对变量n的引用，所以需要将nAdd也释放

```javascript

function f1() {
    var n = 10;
    nAdd = function() { 
        n += 1;
        console.log(n);
    }; // 全局变量,也是一个闭包
    return function f2() { console.log(n) };
}

var result = f1();
result(); // 10
nAdd(); // 11
result(); // 11
result = null;
nAdd(); // 12

```

# 闭包的缺点

由于闭包形成，外层函数作用域无法释放，变量始终存储在内存中，占用内存
解决方案就是闭包不再使用之后，及时释放，将引用内层函数对象的变量设置为null

# 闭包的使用场景

## 场景一

给对象设置私有变量，并且利用特权方法去访问私有属性

```javascript

function Fun() {
    var name = 'tom';
    this.age = 21;
    this.getName = function() {
        return name;
    }
}
var fun = new Fun();
console.log(fun.name, fun.age); // undefined, 21
console.log(fun.getName()); // tom
console.log(fun);

```
## 场景二
延迟执行的函数

```javascript
function fun(x) {
    var age = x;
    return function(){ console.log(age) };
}
var getAge = fun(200); // 闭包
var age = setTimeout(getAge, 1000); // 避免在setTimeout的时候传入变量，避免全局变量

```

