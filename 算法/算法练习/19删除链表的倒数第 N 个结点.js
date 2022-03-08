/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
     let temp = head;
    let cur = 0;
    while (temp.next!==null) {
        cur++;
        temp=temp.next
    }
    let del = head;
    let prev = head;
    for (let i = 0; i < cur-n; i++) {
        prev=del;
        del=del.next;
    }
    if(del === head) {
        head = del.next;
    }else{
        prev.next = del.next;
    }
    return head
};
var removeNthFromEnd = function(head, n) {
    let ret = new ListNode(0, head),
        slow = fast = ret;
    while(n--) fast = fast.next;
    if(!fast) return ret.next;
    while (fast.next) {
        fast = fast.next; 
        slow = slow.next
    };
    slow.next = slow.next.next;
    return ret.next;
};