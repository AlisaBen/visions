const { TreeNode } = require('../TreeNode');
var serializeCallback = function(root, arr) {
    if (root === null) {
    	arr.push("null");
    } else {
    	arr.push(root.val);
	    serializeCallback(root.left, arr);
	    serializeCallback(root.right, arr);
    }
    // return arr;
}
// 在js中数组是引用类型
var serialize = function(root) {
	var arr = [];
	serializeCallback(root,arr);
    return arr.join();
};

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
	// console.log(arr);
	return deserializeCallback(arr); 
    
};
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

console.log({a:1,a:1})




