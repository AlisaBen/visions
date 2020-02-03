## 战胜13%
class TreeNode:
	def __init__(self, val):
		self.val = val
		self.left = None
		self.right = None

class SerializeATree:

    def serializeCallback(self, root, arr):
        if root == None:
            arr.append("null")
        else:
            arr.append(root.val)
            self.serializeCallback(root.left, arr)
            self.serializeCallback(root.right, arr)

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        arr = []
        self.serializeCallback(root, arr)
        return ",".join(str(i) for i in arr)
        
    def deserializeCallback(self, arr):
        if len(arr) == 0 or len(arr) == 1 and arr[0] == "null":
            return None
        value = arr.pop(0)
        node = None
        if value != "null":
            print(value)
            node = TreeNode(value)
            node.left = self.deserializeCallback(arr)
            node.right = self.deserializeCallback(arr)
        return node


    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        arr = data.split(",")
        return self.deserializeCallback(arr)

if __name__ == '__main__':
    root = TreeNode(1)
    node2 = TreeNode(2)
    node3 = TreeNode(3)
    node4 = TreeNode(4)
    node5 = TreeNode(5)
    root.left = node2
    root.right = node3
    node3.left = node4
    node3.right = node5
    serial = SerializeATree()
    str = serial.serialize(root)
    # print('ff')  
    print(str)
    node = serial.deserialize(str)

    print(node)


    

