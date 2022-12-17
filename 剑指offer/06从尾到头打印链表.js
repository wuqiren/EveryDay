/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    const arr = [];
    while (head){
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse();
};

console.log(reversePrint([1,2,3,4]))