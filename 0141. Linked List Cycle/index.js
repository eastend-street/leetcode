// hash table
const hasCycle = head => {
  if (!head?.next) return false;
  let current = head;
  let nodeSet = new Set();

  while (current.next) {
    if (nodeSet.has(current.next)) {
      return true;
    } else {
      nodeSet.add(current);
    }
    current = current.next;
  }
  return false;
};

// two pointers
const hasCycle2 = head => {
  if (!head?.next || !head?.next?.next) return false;

  let slow = head.next;
  let fast = head.next.next;
  while (fast?.next || fast?.next?.next) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

// references (No optional chaining)
// http://leetcode.com/problems/linked-list-cycle/discuss/226855/JavaScript
const hasCycle3 = head => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};

