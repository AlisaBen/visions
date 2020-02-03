/*执行用时 88ms,内存消耗44.5MB,击败98.17% */
const {TreeNode} = require('../TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = '';
    function dfs(node) {
        if (!node) {
            res += '#,';
            return;
        }
        res += node.val + ',';
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let index = 0;
    function dfs() {
        let start = index;
        while (data[index] !== ',') index++;
        const str = data.slice(start, index);
        index++;
        
        if (str === '#') return null;
        
        const root = new TreeNode(Number(str));
        root.left = dfs();
        root.right = dfs();
        return root;
    }
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */