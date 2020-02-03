# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        self.index = 0
        def dfs(root: TreeNode, k: int) -> TreeNode:
            if root is not None:
                node = dfs(root.left, k)
                if node is not None:
                    return node
                self.index += 1
                if self.index == k:
                    return root
                node = dfs(root.right, k)
                if node is not None:
                    return node
            return None
        self.index = 0
        return dfs(root, k).val

if __name__ == '__main__':
    node3 = TreeNode(3)
    node2 = TreeNode(2)
    node3.left = node2
    obj = Solution()
    res = obj.kthSmallest(node3, 2)
    print(res)
    # print('ff')