/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

let successor = null;
var reverseN = function (head, n) {
    if(n===1){
        successor = head.next;
        return head
    }
    let last = reverseN(head.next,n-1)
    head.next.next=head;
    head.next=successor;
    return last
}
var reverseBetween = function(head, left, right) {
   if(left===1){
    return reverseN(head,right)
   }
   head.next=reverseBetween(head.next,left-1,right-1)
   return head;
};