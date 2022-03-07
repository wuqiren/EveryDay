/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
 let fast =slow= head
 while (fast&&fast.next) {
    slow = slow.next;
    fast = fast.next.next
 }
 return slow
};

let arr =[1,2,3,4,5]
console.log(middleNode(arr))