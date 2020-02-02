# 事件

## 题目
- 编写一个通用的事件监听函数
- 描述事件冒泡流程
    - dom树形结构
    - 事件冒泡
    - 阻止冒泡
    - 冒泡的应用
- 对于一个无限下拉加载图片的页面，如何给每个图片绑定事件
    - 代理（代码简洁，给浏览器的压力较小，内存和渲染）

## 知识点

- 通用事件绑定

```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button id="btn">click</button>
    <script>
        var btn = document.getElementById('btn');
        console.log(btn);
        function bindEvent(ele, type, fn) {
            ele.addEventListener(type, fn);
        };
        bindEvent(btn, 'click', function(e) {
            e.preventDefault();
            console.log('click');
        })
        
    </script>
    
</body>
</html>
```

注：ie低版本使用attachEvent绑定事件，和W3C标准不一样


- 事件冒泡

我们希望点击激活页面提示激活，点击取消的时候页面提示取消，对于激活我们很容易实现，但是对于取消，如果对每个p标签都绑定点击事件的话，很麻烦，代码也很冗余，通过事件冒泡，我们找到所有取消标签的共用父标签，进行绑定，所以我们对`body`元素进行绑定取消提示，但是由于事件冒泡的机制，我们点击激活之后，提示激活，事件会一直冒泡到`body`，由于绑定了取消事件，所以还会提示一个取消，为了阻止冒泡，我们需要在绑定激活事件的时候阻止事件冒泡,通过`e.preventPropagation()`方法进行阻止。


```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="div1">
        <p id="p1">激活</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
    </div>
    <script type="text/javascript">
        function bindEvent(ele, type, fn) {
            ele.addEventListener(type, fn);
        };
        var p1 = document.getElementById('p1');
        var body = document.body;
        bindEvent(p1, 'click', function(e) {
            e.stopPropagation();
            alert('激活');
        });
        bindEvent(body, 'click', function(e) {
            alert('取消');
        })
    
    </script>
</body>
</html>
```

- 代理

在页面下拉刷新标签的时候随着标签的增多，我们希望为每个标签都绑定事件，但是我们没办法在一开始就手动为每个标签都绑定事件，这个时候用到代理，通过该标签的父级标签代理绑定事件，我们可以通过`e.target`获得我们实际点击的元素

```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="div1">
        <a href="#">a1</a>
        <a href="#">a2</a>
        <a href="#">a3</a>
        <a href="#">a4</a>
    </div>
    <script type="text/javascript">
        //代理
        var div = document.getElementById('div1');
        div.addEventListener('click', function(e) {
            var target = e.target;
            alert(target.innerHTML);
        })
    </script>
</body>
</html>
```

代理的好处
- 代码简介
- 节省浏览器内存（每绑定一次浏览器会记一次）

# 跨域

## 什么是跨域
浏览器有同源策略，不允许ajax访问其他域接口
跨域条件：协议、域名、端口，有一个不同就算跨域

可以跨域的三个标签：
    - <img src="">
    - <link href="">
    - <script src="">
    
三个标签的场景：
    - <img>用于打点同级，统计网站可能是其他域
    - <link><script>可以使用CDN,CDN也是其他域
    - <script>可以用于JSONP

跨域注意事项
    - 所有的跨域请求都必须经过信息提供方允许
    - 如果未经允许即可获取，就是浏览器的漏洞

## JSONP

JSONP实现原理

## 服务端设置http header

# 存储

请描述一下cookie，sessionStorage,和localStorage的区别？

## 





