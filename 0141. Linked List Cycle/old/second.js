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
// あればその値のindexがposがなけれな-1で

// accepted but slow
// next.next.valで次の値と比べられるが、nodeを持たないと厳密に判定できないのでダメ。
function hasCycle(head) {
  const hash = {};
  const helper = node => {
    if (!node || !node.next) return false;
    if (hash.hasOwnProperty(node.next.val)) {
      if (!node.next.next) return false;
      if (hash[node.next.val] === node.next.next.val) {
        return true;
      }
    }
    hash[node.val] = node.next.val;
    return helper(node.next);
  };
  return helper(head);
}
