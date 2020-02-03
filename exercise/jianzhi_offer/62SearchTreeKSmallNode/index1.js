const { TreeNode } = require('../../TreeNode')
function KthNode(pRoot, k)
{
    // write code here
    if(k<=0){
        return null;
    }
    var count=0;
    function Knodes(pRoot, k){
        if(pRoot!==null){
            var node = Knodes(pRoot.left, k);
            if(node!==null){return node;}
            count++;
            if(count==k){return pRoot;}
 
            node = Knodes(pRoot.right, k);
            if(node!==null){return node;}
        }
        return null;
    }
    return Knodes(pRoot,k);
}


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
var a = KthNode(node5, 2).val
console.log(a)