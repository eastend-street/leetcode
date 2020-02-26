const removeElements = (head, val) => {
  while (head !== null && head.val === val) {
    head = head.next;
  }
  if (!head) return head;
  let dummy = head;
  while (dummy.next !== null) {
    dummy.next.val === val
      ? (dummy.next = dummy.next.next)
      : (dummy = dummy.next);
  }
  return head;
};
