# 关于面试
1. 基层工程师-基础知识
- 工程师的自我修养-基础
- 扎实的基础会让你搞笑的学习新技术
2. 高级工程师-项目经验
3. 架构师-解决方案
## 几个面试题
1. js中使用typeof能得到的哪些类型  基本类型
2. 何时使用===，何时使用==   强制类型转换
3. window.onload和DCMContentLoaded的区别    浏览器的渲染过程
4. 用js创建10个<a>标签，点击的时候弹出来对应的序号   作用域
5. 简述如何实现一个模块加载器，实现类似require.js的基本功能(思路)  js模块化
6. 实现数组的随机排序   js基础算法
## 思考：
- 拿到一个面试题，第一事件看到的是什么 -- 考点
- 如何看待题海--不变应万变
- 如何对待接下来遇到的面试题--题目到知识再到题目

# 基础知识
原型 原型链

作用域  闭包

异步 单线程

# 变量类型和计算
## 问题
1. js中使用typeof能得到哪些类型
2. 何时使用===何时使用==
3. js有哪些内置函数
4. js变量按照存储方式区分为哪些类型，并描述其特点
5. 如何理解json

## 变量类型
- 值类型和引用类型
值类型包括number\string\boolean\undefined\

### 引用类型：
引用类型包括对象、数组、函数
引用类型可以通过指针的方式，避免在内存中复制很多份数据，占用很大的内存空间

引用类型通过指针指向对象的内存地址，a位置存储的是指向对象的指针，b位置存储的也是指向该对象的指针，通过b修改该对象的属性，a对应的属性也会随之更新
- 
const a = { age: 20 };
const b = a;
b.age = 21;
console.log(a.age);

const c = [2,3];
const d = c;
d[1] = 4;
console.log(c[1]);


## typeof运算符详解
typeof只能区分值类型的详细类型，不能区分引用类型的详细类型，引用类型除了function类型，其他都为object
/*typeof 能得到哪些基本类型 */
const print = (str) => {
    console.log(str);
}
print(typeof 124); //number
print(typeof '23'); //string
print(typeof {});//object
print(typeof print);//function
print(typeof true);//boolean
print(typeof undefined);//undefined
print(typeof [2,3]); //object

## 变量计算-强制类型转换（值类型）

- 字符串拼接
console.log(10 + 100); // 110
console.log(10 + '100'); // 10100
- ==运算符
console.log(10 == '10'); // true
console.log(10 === '10'); // false
console.log(0 == null); // false
console.log(0 == ''); // true
console.log(null == undefined); // true
- 
- if语句
if(12){
    console.log(12); // 12
}
if(null){
    console.log('null');
}
if(0){
    console.log('0');
}
if(''){
    console.log('kong');
}
if('123'){
    console.log('123'); // 123
}
if(undefined){
    console.log('undefined');
}
- 逻辑运算
console.log(10 && 0); // 0
console.log('' || 'abc'); // abc
const a = 100;
console.log(!!a); // true


## 什么时候使用==

const obj = { a: 1, c: null };
/*这里相当于obj.a === null || obj.a === undefined */
if(obj.a == null){
    console.log('fff');
}else if(obj.b == null){
    console.log(obj.b); //undefined
}

## JS中的内置函数
Object
Array
Boolean
Number
String
Function
Date
RegExp
Error


## JS按照存储方式区分变量类型

值类型属于数据的拷贝，引用类型是公用一个内存空间，指针的拷贝，修改数据是相互干预的

## 如何理解json

一种数据格式，一个js对象，常用的方法API,字符串和json对象相互转换
console.log(JSON.stringify({a:10,b:4})); //{"a":10,"b":4}
console.log(JSON.parse('{"a":10,"b":4}')); // { a: 10, b: 4 }
