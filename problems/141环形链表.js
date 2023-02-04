/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let fast=slow= head;
    while(fast!==null && fast.next!==null) {
        fast = fast.next.next;
        slow = slow.next
        if(slow==fast){
            return true;
        }
    }
    return false;
};



var hasCycle = function(head) {
    let low=fast =head;
    while(fast!==null && fast.next!==null){
        fast = fast.next.next;
        low=low.next
        if(low==fast){
            return true
        }
    }
    return false
};