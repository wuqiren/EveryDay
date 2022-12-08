/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while(p1!==p2){
        if(p1===null){
            p1=headB
        }else{
            p1=p1.next;
        }
        if(p2===null){
            p2=headA
        }else{
            p2=p2.next;
        }
    }
    return p1
};

var getIntersectionNode = function(headA, headB) {
   let lenA= 0;
   let lenB=0;
   let p1= headA;
   let p2= headB
    while(p1){
        lenA++;
        p1=p1.next
    }
    while(p2){
        lenB++;
        p2=p2.next
    }
     p1= headA;
     p2= headB
    if(lenA<lenB){
        for(let i=0; i<lenB-lenA; i++){
            p2=p2.next;
        }
    }else{
        for(let i=0; i<lenA-lenB; i++){
            p1=p1.next;
        }
    }
    while(p1!=p2){
        p1=p1.next;
        p2=p2.next
    }
    return p1
};