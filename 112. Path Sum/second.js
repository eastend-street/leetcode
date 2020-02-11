const hasPathSum = (root, sum) => {
  if (!root) return false; // root.valが存在しない場合
  if (!root.left && !root.right) return sum === root.val; // root.valはあるが下がない場合（つまり葉の場合）は合計とsumを比べる。
  //sumは下をたどるごとにその値が引かれているので、最終的に葉の値=sumとなればtrue

  let left = hasPathSum(root.left, sum - root.val); // 左の要素を下までたどる。途中でsumと等しい場合はtrueが帰ってくる
  let right = hasPathSum(root.right, sum - root.val); // 右の要素を下までたどる。途中でsumと等しい場合はtrueが帰ってくる

  return left || right;　//下まで辿った合計がsumと等しいかチェック
};
