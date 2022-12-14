/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head===null||head.next===null)return true;
    const arr = [];
    let curr = head;
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }

    while (arr.length) {
        if (arr.length === 1) {
          return true;
        }
        const left = arr.shift();
        const right = arr.pop();
        if (left !== right) {
          return false;
        }
      }
    return true;
};