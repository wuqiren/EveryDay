 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 function makeList1(arr) {
    let list = null
    arr.forEach((item) => {
      if (!list) list = new ListNode(item)
      else list = new ListNode(item, list)
    })
    return list
  }
  

var addTwoNumbers = function(l1, l2) {
     let arr = [],arr2=[];
     while(l1) {
         arr.push(l1.val)
         l1 = l1.next
     }
     while(l2) {
        arr2.push(l2.val)
        l2= l2.next
    }
    console.log(arr,arr2)
    let result = (Number(arr.join(''))+Number(arr2.join(''))).toString().split('');
    console.log(makeList1(result),'result')
    return makeList1(result)
};
let l1 = makeList1([2, 4, 9])
let l2 = makeList1([5,6,4,9])
addTwoNumbers(l1,l2)