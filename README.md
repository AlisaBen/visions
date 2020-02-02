# visions
前端面试相关的基础知识

[变量类型和计算](./1JSFoundation/1variable/README.md)

[原型和原型链](./1JSFoundation/2prototype/README.md)

[作用域和闭包](./1JSFoundation/3scope/README.md)

[异步和单线程](./1JSFoundation/4thread/README.md)

[其他基础知识](./1JSFoundation/5others/README.md)

[DOM](./1JSFoundation/6webAPI/README.md)

[事件](./1JSFoundation/7event/README.md)

[开发环境](./1JSFoundation/8environment/README.md)

----

# 页面加载过程

1. 从输入url到得到html的详细过程
2. window.onload和DOMContentLoaded的区别


## 加载资源的形式

- 输入url（或跳转页面）加载html
- 加载html中的静态资源 `<script src=""></script>`

## 加载一个资源的过程

- 浏览器根据DNS服务器得到域名的ip地址
- 向这个ip的机器发送http请求
- 服务器收到、处理并返回http请求
- 浏览器得到返回内容

## 浏览器渲染页面的过程

- 根据html结构生成DOM树
- 根据css生成cssdom
- 将DOM和cssom整合成渲染树render tree
- 根据render tree开始渲染和展示
- 遇到<script>，会执行并阻塞渲染（js有权改变dom树）

## window.onload
- 页面的全部资源加载完才会执行，包括图片，视频等
- dom渲染完即可执行，此时图片和视频还没有加载完



# 性能优化

- 多使用内存和缓存或者其他方法
- 减少cpu计算，减少网络请求，减少io

## 怎么加载更快（加载资源优化）
1. 静态资源的压缩合并
2. 静态资源缓存
3. 使用CDN让资源加载更快
4. 使用SSR后端渲染，数据直接输出到html中

## 渲染优化
1. css放前面，js放后面
2. 懒加载（图片懒加载，下拉加载更多）
3. 减少dom查询，对dom查询做缓存
4. 减少dom操作，多个操作尽量合并一起执行
5. 事件节流
6. 尽早执行操作

### dom缓存
```javascript

var i;
for(i = 0; i < document.getElementsByTagName('p').length; i++) {
    // todo
}
// 缓存了dom查询
var pList = document.getElementsByTagName('p');
var i
for(i = 0; i < pList.length; i++) {
    // todo
}
```

### 合并dom插入
```javascript
var listNode = document.getElementById('list');

var frag = document.createDocumentFragment();
var x,li;
for(x = 0;x < 10; x++) {
    li = document.createElement("li");
    li.innnerHTML= "list item " + x;
    frag.appendChild(li)l
}
listNode.appendChild(frag);
```

### 事件节流
监听事件时，如果事件触发非常频繁，没必要每次都刷新，可以在一定时间之后再进行刷新
```javascript
var textarea = document.getElementById('text');
var timeoutId;
textarea.addEventListener('keyup'), function() {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function() {
        // 触发change事件
    }, 100);
})
```

### 尽早操作

```javascript
window.addEventListener('load', function() {
    // 页面的全部资源加载完才会执行，包括图片、视频等
});
document.addEventListener('DOMContentLoaded', function() {
    // DOM渲染完即可执行，此时图片、视频还可能没有加载完
})
```

## 缓存
- 通过连接名称控制缓存
- 只有内容改变的时候，链接名称才会改变

# 安全性

## xss跨站请求攻击
## xsrf跨站请求伪造