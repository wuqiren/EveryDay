/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    var mergeKTwoList = function(list1,list2){
        let nodelist= new ListNode(-1)
        let prev = nodelist;
        while(list1!==null && list2!==null){
            if(list1.val < list2.val){
                prev.next = list1;
                list1=list1.next;
            }else{
                prev.next = list2;
                list2=list2.next;
            }
            prev = prev.next;
        }
        prev.next = list1?list1: list2;
        return nodelist.next
    }
    let len= lists.length;
    if(len===1){
        return list1[0]
    }
    if(len===2){
        return mergeKTwoList(lists[0],lists[1])
    }
    let  newlist =  mergeKTwoList(lists[0],lists[1])
    while(len>1){
        newlist=mergeKTwoList(newlist,lists[len-1])
        len--
    }
    return newlist
};