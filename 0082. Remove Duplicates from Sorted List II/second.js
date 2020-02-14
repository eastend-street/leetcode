function deleteDuplicates(head) {
  const node = new ListNode(null);
  node.next = head;

  let pointer = head;
  let prev = node;
  let duplicate = false;

  while (pointer) {
    while (pointer.next && pointer.val === pointer.next.val) {
      pointer.next = pointer.next.next;
      duplicate = true;
    }
    if (duplicate) {
      prev.next = pointer.next;
      duplicate = false;
    } else {
      prev = prev.next;
    }
    pointer = pointer.next;
  }
  return node.next;
}
