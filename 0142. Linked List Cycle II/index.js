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
// accepted but modified head and slow
// also it doesn't need to use value → Use Set object
function detectCycle(head) {
    // check list to the end
    // find cycle
    // detect index number(the next of theend)
    if(!head) return null
    let hashMap = new Map();
    let pointer = head
    
    while(pointer.next != null){
        if(hashMap.has(pointer.next)){
            return pointer.next 
        } 
        hashMap.set(pointer,pointer.next)
        pointer = pointer.next
    }
    
    // no cycle
    return null
};