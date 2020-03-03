const pathSum = (root, sum) => {
  if (!root) return 0;
  const result = [];
  const helper = (node, arr, count) => {
    if (!node) return;
    sum -= node.val;
    arr.push(node.val);
    if (sum === 0 && !node.left && !node.right) result.push(arr.slice());
    else {
      helper(node.left, sum, arr);
      helper(node.right, sum, arr);
    }
  };

  helper(root, sum, []);
  return result;
};

// 上から足して、葉まで見る。
// sumと一致した場合、配列をコピーしてresultに追加する
// 葉まで見て違った場合は、popして、隣の葉を見る
