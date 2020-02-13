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
// linked-listを最後までたどる
// 最後の先が、今までの数字にあるかチェック
// あればその値のindexがpos　なけれな-1で
function hasCycle(head) {
  const array = [];
  const helper = node => {
    if (!node || !node.next) return false;
    // console.log(array.indexOf(node.next.val) >= 0)
    if (array.indexOf(node.next.val) >= 0) return true;
    array.push(node.val);
    console.log(array);
    return helper(node.next);
  };

  return helper(head);
}
