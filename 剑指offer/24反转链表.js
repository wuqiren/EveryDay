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
var reverseList = function(head) {
    let prev=null;
    let curr=head;
    while (curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
var reverseList = function(head) {
    if(!head.next){
        return head;
    }
    const last = reverseList(head.next)
    head.next.next=head;
    head.next=null;
    return last;
};



var reverslit =function(head){
    let prev=null;
    let curr = head;
    while(curr){
        const next = curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev
}