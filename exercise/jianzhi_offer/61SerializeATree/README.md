# 序列化二叉树

## 知识点

- 二叉树遍历
- 递归

## 题目

请实现两个函数，分别用来序列化和反序列化二叉树

二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，序列化的结果是一个字符串

[leetcode地址](https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/)
[牛客地址](https://www.nowcoder.com/practice/cf7e25aa97c04cc1a68c8f040e71fb84?tpId=13&tqId=11214&tPage=4&rp=4&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

## 代码


### 序列化代码

> js中数组、对象、函数属于引用类型，所以在serializeCallback函数不需要返回值就可以得到修改后的数组，因为函数的第二个参数arr是一个指针，实际修改的是内存中的一个地址

- 初识定义一个数组，将二叉树的每个节点的树枝都存于数组中
- 定义一个递归的函数，否则还需要定义全局变量，感觉这样可以将变量存在局部作用域
- 如果二叉树的根节点为空，则push特定的字符串，这里是null；如果不是null，将根节点数值push，递归执行节点的左孩子和右孩子
- 最后利用数组的join()方法将数组转换成字符串，这里是用,分割的

```javascript
var serializeCallback = function(root, arr) {
    if (root === null) {
    	arr.push("null");
    } else {
    	arr.push(root.val);
	    serializeCallback(root.left, arr);
	    serializeCallback(root.right, arr);
    }
}
// 在js中数组是引用类型
var serialize = function(root) {
	var arr = [];
	serializeCallback(root,arr);
    return arr.join();
};
```

### 反序列化


反序列化就是序列化的逆操作
- 将传入的字符串按照特定分隔符分割，输出数组
- 定义一个反序列化的递归函数，参数是待反序列化的数组
- 如果传入的字符串显示是空树，则返回null；否则，数组弹出第一个数值，因为存在空节点，空节点存在数组中是特定的字符，所以需要判断一下弹出的数值是否符合要求，如果是特定字符就返回null，否则，将该数值转换成number类型， 递归执行左子树和右子树

> 由于shift函数是将数组的第一个数据删除，并返回该数据，所以先执行递归函数，返回的就是左子树，剩下的数组递归调用反序列化函数，得到的就是右子树

```javascript

var deserializeCallback = function(arr) {
	if (arr.length === 0 || arr.length === 1 && arr[0] === 'null') return null;
	var val = arr.shift();
	var root = null;
	if (!Number.isNaN(Number(val))) {
		root = new TreeNode(val);
		root.left = deserializeCallback(arr);
		root.right = deserializeCallback(arr);
	}
	return root;
}

var deserialize = function(data) {
	var arr = data.split(',');
	return deserializeCallback(arr); 
    
};
```

### 测试代码
```javascript
var root = new TreeNode(2);
var node1 = new TreeNode(3);
var node2 = new TreeNode(4);
var node3 = new TreeNode(7);
var node4 = new TreeNode(9);
root.left = node1;
root.right = node2;
node1.left = node3;
node2.left = node4;
var s = serialize(root);
console.log(s);
const r = deserialize(s);
console.log(r);
```






