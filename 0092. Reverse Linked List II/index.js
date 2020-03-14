const reverseBetween = (head, m, n) => {
  let dummy = head;
  for (let i = 1; i < m; i++) {
    dummy = dummy.next;
  }

  let prev = null;
  let current = dummy;
  for (let j = 0; j < n - m; j++) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  console.log(dummy);
  return head;
};

const reverseList = head => {
  let prev = null;
  let current = head;

  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

// let tmp = current.next;
// current.next = prev;
// prev = current;
// current = tmp;
