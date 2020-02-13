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
// also it doesn't need to use value
function detectCycle(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (true) {
    if (!fast.next || !fast.next.next) return null;
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
