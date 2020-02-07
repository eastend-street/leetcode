/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// unresolved
function addTwoNumbers(l1, l2) {
  if (l1.val === 0) return l2;
  if (l2.val === 0) return l1;
  let num1 = "";
  let num2 = "";
  while (l1 !== null || l2 !== null) {
    if (l1) {
      num1 = l1.val + num1;
      l1 = l1.next;
    }
    if (l2) {
      num2 = l2.val + num2;
      l2 = l2.next;
    }
  }
  strArray = String(Number(num1) + Number(num2)).split("");
  let resultNode = new ListNode(Number(strArray.pop()));
  console.log(Number(num1));
  let dummy = resultNode;
  while (strArray.length > 0) {
    dummy.next = new ListNode(Number(strArray.pop()));
    dummy = dummy.next;
  }
  return resultNode;
}
