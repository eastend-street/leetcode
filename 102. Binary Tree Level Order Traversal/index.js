const levelOrder = root => {
  if (!root) return [];

  const queue = []; // キューを定義
  queue.push(root); 
  const result = [];
  while (queue.length > 0) { // キューに値があるうちはループ
    const size = queue.length; // キューのサイズを定義。for文上で行うと、キューのサイズが変わってしまうため、変数で定義しておく。
    const temp = [];　// １段の値を入れるtempを定義
    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // １つめを取り出す
      temp.push(node.val); 
      if (node.left) queue.push(node.left); // とりだした値の子要素をキューに追加
      if (node.right) queue.push(node.right);　// とりだした値の子要素をキューに追加
    }
    result.push(temp);　// 1段をプッシュ
  }

  return result;
};
