// accepted
const lowestCommonAncestor = (root, p, q) => {
  let result = root;
  const helper = node => {
    let sum = 0;
    if (!node) return 0;
    if (node.left) sum += helper(node.left);
    if (node.right) sum += helper(node.right);

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

// 自分がp,qでなかったら0を返す
// 自分がp.qなら1を返す
// 自分 + 左　＋　右を足して 2以上ならその値が祖先

// 自分　+左 = 2なら終わり
//
