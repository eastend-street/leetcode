function reverseList(head) {
  // while loop
  // swap next node and current node
  let prev = null;
  let current = head;
  while (current !== null) {
    let tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  return prev;
}

// recursion still need to understand
function reverseList(head) {
    if(!head || !head.next) return head
    let node = reverseList(head.next)
    head.next.next = head;
    head.next = null
    return node
};