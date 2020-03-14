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


//　currentの次の値を保存しておく (tmp = 2)

// temp = 2
// 1 -> null
// prev = 1
// current = 2

// temp = 3
// 2 ->1
// prev = 2
// current = 3
