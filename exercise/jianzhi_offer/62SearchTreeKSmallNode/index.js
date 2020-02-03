/* 执行用时68ms，击败98.92% 内存消耗：39.4MB,击败59.26% */
// 通过了leetcode，没有通过牛客
const { TreeNode } = require('../../TreeNode')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var dfs = function(root, k, obj) {
    if (!root) return ;
    if (root.left) {
        dfs(root.left, k, obj);
    }
    if (++obj.index === k) {
        obj.result = root.val;
    }
    if (root.right) {
        dfs(root.right, k, obj);
    }
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var obj = {index: 0, result: undefined}
    dfs(root, k, obj);
    return obj.result;
};

var kthSmallest1 = function(root, k) {
    var index = 0;
    var dfs1 = function(root, k) {
        // if (!root) return null;
        if (root) {
            var node = dfs1(root.left, k);
            if (node) return node;
            // if (root.left) {
            //     var node = dfs1(root.left, k);
            //     if (node) return node;
            // }
            if (++index === k) {
                return root;
            }
            var node = dfs1(root.right, k);
            if (node) return node;
            // if (root.right) {
            //     var node = dfs1(root.right, k);
            //     if (node) return node;
            // }
        }
        return null;
    }
    // var res = dfs1(root, k);
    // if (res) return res.val;
    return dfs1(root, k).val;
};

node3 = new TreeNode(3);
node2 = new TreeNode(2);
node5 = new TreeNode(5);
node6 = new TreeNode(6);
node4 = new TreeNode(4);
node1 = new TreeNode(1);
node5.left = node3;
node5.right = node6;
node3.left = node2;
node3.right = node4;
node2.left = node1;
var s = kthSmallest1(node5, 3);
console.log(s)

// if(!null){
//     console.log('fff')
// }
