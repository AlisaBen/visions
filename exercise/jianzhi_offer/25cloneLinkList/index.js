/*
复杂链表的赋值
*/
function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
    this.copy = false;
}
function Clone(pHead)
{
    // write code here
    if (!pHead) return null;
    // 赋值链表中每一个节点，穿插到链表中
    var p = pHead;
    while (p) {
    	var q = new RandomListNode(p.label);
    	q.next = p.next;
    	p.next = q;
    	p = p.next.next;
    }
    // 赋值random节点
    p = pHead;
    while(p) {
    	if (p.random) {
    		p.next.random = p.random.next;
    	}
    	p = p.next.next;
    }
    p = pHead.next;
    while (p && p.next) {
    	p.next = p.next.next;
    	p = p.next;
    }
    return pHead.next;
}

var node1 = new RandomListNode(1);
var node2 = new RandomListNode(2);
var node3 = new RandomListNode(3);
node1.next = node2;
node2.next = node3;
node1.random = node3;
var res = Clone(node1);
console.log(res)