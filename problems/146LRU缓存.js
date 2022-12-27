/**
 * @param {number} capacity
 */

var ListNode = function(key,val){
    this.key = key;
    this.val = val;
    this.next=null;
    this.prev=null;
}

var LRUCache = function(capacity) {
    this.capacity=capacity;
    this.curSize=0;
    this.listNodeMap={}
    this.head=new ListNode(-1,-1)
    this.tail=new ListNode(-1,-1)
    this.head.next=this.tail;
    this.tail.prev=this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.listNodeMap[key];
    if(node){
        this.moveToHead(node)
        return node.val
    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.listNodeMap[key]
    if(node){
        node.val=value;
        this.moveToHead(node)
    }else{
        let listNode = new ListNode(key,value)
        this.listNodeMap[key]=listNode;
        this.addToHead(listNode)
    }
};
LRUCache.prototype.moveToHead=function(node){
    node.next.prev=node.prev;
    node.prev.next=node.next;
    node.next=this.head.next;
    this.head.next.prev=node;
    this.head.next=node;
    node.prev=this.head;
}
LRUCache.prototype.addToHead=function(node){
    this.curSize++;
    node.next=this.head.next;
    this.head.next.prev=node;
    this.head.next=node;
    node.prev=this.head;
    if(this.curSize>this.capacity){
        const deleteNode= this.tail.prev;
        this.tail.prev.prev.next=this.tail;
        this.tail.prev=this.tail.prev.prev
        this.curSize--;
        delete this.listNodeMap[deleteNode.key]
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */