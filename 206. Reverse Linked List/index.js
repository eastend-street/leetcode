// not resolved
function reverseList(head) {
    let result = new ListNode(0)
    let dummy = result
    const helper = (node)=> {
        if(!node) {
            return
        }else{
            dummy = new ListNode(node.val)
            dummy = dummy.next
            node = node.next
        }
        helper(node)
    }
    helper(head)
    return result
};


// 1->2->3->4->5->NULL
// current= 1 , current.next = 2 prev = null,
// current = 1, current.next = null, prev= 1
// current = 2, current.next = 3 prev = 1
// current = 2. current.next = 1, prev = 2
// current = 3  current.next  = 4, prev = 3