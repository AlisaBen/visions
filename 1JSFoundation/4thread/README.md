# 异步和单线程

## 题目

- 同步和异步的区别是什么？分别举例

    同步会阻塞代码执行，而异步不会
    alert是同步，setTimeout是异步

- 一个关于setTimeout的笔试题

```javascript
console.log(1);
setTimeout(function(){
    console.log(2);
});
console.log(3);
setTimeout(function(){
    console.log(4)
},100);
console.log(5);
```
- 前端使用异步的场景有哪些？
    - 定时任务：setTimeout,setInterval
    - 网络请求：ajax请求，动态<img>加载
    - 事件绑定
    特点：需要等待
    等待不能阻塞，js是单线程，一次只做一件事，

## 知识点

- 什么是异步
异步就是在将来的某个时刻执行
```javascript
console.log(100);
setTimeout(() => {
    console.log('444');
},100);
console.log(300);
```
- 前端使用异步的场景
    - 定时任务：setTimeout,setInterval
    - 网络请求：ajax请求，动态<img>加载
    - 事件绑定

- 异步和单线程

先将同步的代码执行，对于异步的代码放在最后执行，待所有程序执行完，处于空闲状态时，会立马看有没有暂存起来的要执行，如果setTimeout中的函数无需等待时间，就立即过来执行



