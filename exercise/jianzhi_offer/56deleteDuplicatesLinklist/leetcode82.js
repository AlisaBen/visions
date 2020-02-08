/**
 * 删除链表中重复元素
 * 执行用时64，击败99.27%
 * 内存消耗35.9，击败56%
 */
//  Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    const result = new ListNode(-1); // 假数据
    let k = result;
    let p = head; // 返回最后结果的指针
    let q = head.next;
    let store = true; // p指针指向的元素是否需要存储
    // if (p.val !== p.next.val)
    while(q !== null) {
        // 比较p节点数值和q节点数值是都相等，如果相等，
        if(p.val === q.val) {
            store = false;
            q = q.next;
        } else {
            if (store) {
                k.next = p;
                k = k.next;
                k.next = null;
            }
            p = q;
            q = q.next;
            store = true;
        }

    }
    if (store) k.next = p;
    return result.next;
    
};

var node1 = new ListNode(1);
var node2 = new ListNode(1);
var node3 = new ListNode(1);
var node4 = new ListNode(2);
var node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
const res = deleteDuplicates(node1);
console.log(res)