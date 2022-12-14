/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseList = function (head) {
    let curr=head;
    let prev =null;
    while (curr){
      const next=curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev
}
var reverseList = function (head) {
    if(head===null||head.next===null)return head;
    const last = reverseList(head.next)
    head.next.next=head;
    head.next=null;
    return last;
}
var reverse = function(a,b){
    let pre= null;
    let curr=a;
    let next =b;
    while (curr!==b){
        next=curr.next;
        curr.next=pre;
        pre=curr;
        curr=next;
    }
    return pre;
}
var reverseKGroup = function(head, k) {
    if(head===null) return head;
    let a =b =head;
    for(let i=0;i<k;i++){
        if(b==null)return head;
        b=b.next;
    }
    const newHead=reverse(a,b);
    a.next=reverseKGroup(b,k);
    return newHead
};