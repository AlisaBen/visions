#  其他知识

## 题目

- 获取2017006-10格式的日期
- 获取随机数，要求是长度一致的字符串格式
- 写一个能遍历对象和数组的通用forEach函数

## 知识点
- 日期
- Math
- 数组API
    - forEach 遍历所有元素
    - every 判断所有元素是否都符合条件
    - some 判断是否有至少一个元素符合条件
    - sort 排序
    - map 对元素重新组装，生成新数组
    - filter 过滤符合条件的元素

```javascript
var arr = [1,3,5,6,7,9,45,23,67];
var arr1 = [7,8,9];
var arr2 = [1,2,3];
arr.forEach(function(item,index){
    console.log(index,item);
});

console.log('----every-----');
var fun = function (item, index) {
    if (item > 6) return true;
}
console.log(arr.every(fun)); // false
console.log(arr1.every(fun)); // true

console.log('------some------');
console.log(arr.some(fun)); // true
console.log(arr2.some(fun)); // false

console.log('---------filter---------');
var newArr = arr.filter(fun); // [ 7, 9, 45, 23, 67 ]
console.log(newArr);

console.log('---------map---------');
var newArr1 = arr1.map((item) => {
    return `item:${item}`;
})
console.log(newArr1); // [ 'item:7', 'item:8', 'item:9' ]

```
- 对象API

### 获取2017006-10格式的日期

```javascript
function formatDate(dt) {
    if(!dt){
        dt = new Date();
    }
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var date = dt.getDate();
    if(date < 10){
        date = `0${date}`;
    }
    if(month < 10){
        month = `0${month}`;
    }
    return `${year}-${month}-${date}`;
}
var date = formatDate(new Date());
console.log(date);
```
### 获取随机数，要求是长度一致的字符串格式
```javascript
var random = Math.random();
random = random + '0000000000';
random = random.slice(0,10);
console.log(random);
```

### 写一个能遍历对象和数组的通用forEach函数

```javascript
function forEach(obj, fn) {
    var key;
    if(obj instanceof Array){
        obj.forEach(function(item, index) {
            fn(item, index);
        });
    } else {
        for (key in obj){
            if(obj.hasOwnProperty(key)){
                fn(key, obj[key]);
            }
        }
    }
}

var arr = [1,2,3];
forEach(arr, function(item, index) {
    console.log(item, index);
})
var obj = {a: 1, b: '45'};
forEach(obj, function(key, value) {
    console.log(key, value);
})
```