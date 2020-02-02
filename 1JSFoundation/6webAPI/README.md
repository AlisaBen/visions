# JS-Web-API

常说的js（浏览器执行的js）包含两部分：
- js基础知识（ECMA262标准）
- JS-Web-API(W3C标准)


## DOM（document object model）操作

### DOM本质

一种文档格式
xml可扩展性语言
可以描述任何结构化的数据
树形数据结构
html是特殊的xml
html就是字符串格式，加载到浏览器中已经被结构化解析成浏览器可识别的树形结构

### DOM节点操作

#### 获取DOM节点

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
        <div>1</div>
        <div>2</div>
    </div>
    <div class="container"></div>
    <div class="container"></div>
    <p>e</p>
    <p>g</p>
    <script type="text/javascript">
        var div1 = document.getElementById('div1');
        var divList = document.getElementsByTagName('div');
        console.log(divList.length);
        console.log(divList[0]);
        var containerList = document.getElementsByClassName('container');
        console.log(containerList.length);
        var pList = document.querySelectorAll('p');
        console.log(pList);
    </script>
    
</body>
</html>
```

### property
对象的属性

我们通过DOM操作获取的是js对象，属性可扩展，每个DOM节点都有style属性

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
        <div>1</div>
        <div>2</div>
    </div>
    <div class="container"></div>
    <div class="container"></div>
    <p>e</p>
    <p>g</p>
    <script type="text/javascript">
        var div1 = document.getElementById('div1');
        console.log(div1.style);
        div1.style.width = '100px';
        console.log(div1.className); // ''
        div1.className = 'div2';
        console.log(div1.className); // div2
        console.log(div1.nodeName); // DIV
        console.log(div1.nodeType); // 1

    </script>
    
</body>
</html>
```

### Attribute

Attribute属性就是对应标签中的一些属性，比如style\href等

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
        123
        <div>1</div>
        <div>2</div>
    </div>
    <div class="container"></div>
    <div class="container"></div>
    <p>e</p>
    <p>g</p>
    <script type="text/javascript">
        var div1 = document.getElementById('div1');
        div1.getAttribute('data-name');
        div1.setAttribute('data-name', 'imooc');
        div1.getAttribute('style');
        div1.setAttribute('style','font-size:30px')

    </script>
    
</body>
</html>
```

## DOM结构操作

### 新增节点
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
    </div>
    <div class="container"></div>
    <script type="text/javascript">
        setTimeout(function() {
            // 获取节点
            var div1 = document.getElementById('div1');
            // 创建节点
            var child = document.createElement('div');
            child.innerHTML = 'child';
            div1.appendChild(child);
        }, 1000);
    </script>
</body>
</html>
```

### 获取父元素

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
        <div>1</div>
        <div>2</div>
    </div>
    <div class="container"></div>
    <script type="text/javascript">
        // 获取节点
        var div1 = document.getElementById('div1');
        // 创建节点
        var childList = div1.children; // 集合
        
        if(childList.length > 0){
            // 父元素
            console.log(childList[0].parentElement);
        }
        console.log(childList[0]);
        console.log(childList);
    </script>
</body>
</html>
```

### 获取子元素

`childNodes`和`children`都可以获取子元素，但是对子元素筛选不同，`childNodes`计算节点数量会计算节点后面的空白文本节点，常用`children`

```javascript
var div1 = document.getElementById('div1');
// 创建节点
var childList = div1.children; // 集合
if(childList.length > 0){
    // 父元素
    console.log(childList[0].parentElement);
}
console.log(childList[0]);
console.log(childList);
console.log(div1.childNodes);
```
### 删除节点
```javascript
var div1 = document.getElementById('div1');
// 创建节点
var childList = div1.children; // 集合
setTimeout(function() {
    div1.removeChild(childList[0]);
}, 1000);
```

## 题目

- DOM是哪种基本的数据结构？

树形结构

- DOM操作的常用API有哪些？

    - Attribute
        - getAttribute
        - setAttribute
    - getElementById
    - getElementsByTagName
    - getElementsByClassName
    - children
    - parentElement
    - createElement
    - removeElement

- DOM节点的attr和property有何区别？

    - property是一个js对象的属性
    - attribute是标签的属性


## BOM（browser object model）操作
- 如何检测浏览器的类型
- 拆解url的各部分

知识点
- navigator
- screen
- location
- history
```javascript
var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log(ua);
console.log(isChrome);
console.log(screen.width);
console.log(screen.height);
console.log(location.href); // https://pan.baidu.com/disk/home#/all?vmode=list&path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2F%E5%89%8D%E7%AB%AF
console.log(location.protocol); // https:
console.log(location.host); // pan.baidu.com
console.log(location.hash); // #/all?vmode=list&path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2F%E5%89%8D%E7%AB%AF
console.log(location.pathname); // /disk/home
```