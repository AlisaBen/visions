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


function baz() {
    // debugger;
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

// 默认绑定
// 非严格模式 需要在控制台下面执行
function foo1() {
    console.log(this.a);
}
var a = 2;
foo1(); // 2

// 隐式绑定
function foo2() {
    console.log(this.a);
}
var obj = { a: 2, foo: foo2 };
obj.foo(); // 2

//隐式绑定丢失
function foo3() {
    console.log(this.b);
}
var obj = { b: 2, foo: foo3 };
var bar = obj.foo; // 函数别名
var b = "oops, global";
bar(); // "oops, global"


function foo4() {
    console.log(this.c);
}
function doFoo(fn) {
    fn();
}
var obj1 = { c: 2, foo: foo4 };
var c = "oops";
doFoo(obj1.foo); // oops

//硬绑定
function foo5() {
    console.log(this.d);
}
var obj2 = { d: 2 };
var bar2 = function() {
    foo5.call(obj2);
};
bar2(); // 2
setTimeout(bar2, 100); // 2


function student(something) {
    console.log(this.a, something);
    return this.a + something;
}
var obj4 = { a: 2 };
var bar4 = student.bind(obj4);
var b = student(3); // 2 3
console.log(b); // 5

function each(el) {
    console.log(el, this.id);
}
var o = { id: "arya" };
[1, 2, 3].forEach(each,o);



