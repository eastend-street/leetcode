// accepted
// Discussionにはsumを使わない方法が多いので、そっちでやってみる

// p,qがあるところまで降りていって、あった場合はsumを+1して返す。
// p,qが存在しない場合は0を返す。
// sumが2以上になった場合は、それが祖先なので、resultに今いるnodeを代入して、0を返す。
const lowestCommonAncestor = (root, p, q) => {
  let result;
  const helper = node => {
    if (!node) return 0;
    let sum = 0;
    sum += helper(node.left);
    sum += helper(node.right);
    if (node === p || node === q) sum += 1;
    if (sum >= 2) {
      result = node;
      return 0;
    }
    return sum;
  };
  helper(root);
  return result;
};


