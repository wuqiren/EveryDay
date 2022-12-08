/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    while (head) {
        if (head.h) return head
        head.h = true // 第一次路过的时候就加一个变量h
        head = head.next
    }
    return null

};

var detectCycle2 = function(head) {
    let fast = slow =head
    while (fast!==null &&fast.next!==null) {
        fast =fast.next.next;
        slow = slow.next;
        if(slow==fast){
            break;
        }
    }
    if(fast===null || fast.next===null){
        return null
    }
    slow = head;
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;

};