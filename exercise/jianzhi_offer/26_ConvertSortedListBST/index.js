//牛客网
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function findLastNode (pRootOfTree) {
    if (!pRootOfTree) return null;
    while(pRootOfTree.right != null) {
        pRootOfTree = pRootOfTree.right;
    }
    return pRootOfTree;
}
function Convert(pRootOfTree)
{
    // write code here
    if (!pRootOfTree) return pRootOfTree;
    var left = Convert(pRootOfTree.left);
    var lastnode = findLastNode(left);
    if(lastnode)lastnode.right = pRootOfTree;
    pRootOfTree.left = lastnode;
    var right = Convert(pRootOfTree.right);
    if (right) right.left = pRootOfTree;
    pRootOfTree.right = right;
    return left == null ? pRootOfTree : left;
}