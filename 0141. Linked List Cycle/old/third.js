/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 速度の違うポインタを2つおいて、ループを回していく。
// fastとslowのノードが一緒だったら、それはcircleしているのでtrueを返す
// fastの先がなくなったら、circleしていないlinkedListなので、falseを返す
function hasCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
