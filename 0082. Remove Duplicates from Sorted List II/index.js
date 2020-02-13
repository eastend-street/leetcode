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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function deleteDuplicates(head) {
  let resultNode = new ListNode(0);
  resultNode.next = head;

  let pointer = head;
  let prev = resultNode;
  let duplicate = false;

  while (pointer !== null && pointer.next !== null) {
    while (pointer.next !== null && pointer.val === pointer.next.val) {
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
  return resultNode.next;
}
