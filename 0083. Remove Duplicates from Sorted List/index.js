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
function deleteDuplicates(head) {
    if(!head || !head.next) return head
    let set = new Set()
    let pointer = head
    while(pointer != null && pointer.next != null){
        set.add(pointer.val)
        if(set.has(pointer.next.val)){
            pointer.next = pointer.next.next
        }
        pointer = pointer.next
    }
    console.log(pointer)
    if(head.next && head.val === head.next.val) head.next = null
    return head
};