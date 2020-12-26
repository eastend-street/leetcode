
// 見ないでやったパターン
// whileを抜けたときにtrueで、while内でnullが見つかった時にfalseの方が早めにチェックできる
const hasCycle = head => {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;

  while (fast !== null) {
    if (!fast.next) return false;
    if (slow == fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
