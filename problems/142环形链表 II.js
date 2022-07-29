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