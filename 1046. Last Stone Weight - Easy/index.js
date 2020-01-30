function lastStoneWeight(stones) {
  //ソート
  //後ろのふたつとって比べる。数値が違う場合はｘ-yを挿入
  //
  function compareFunc(a, b) {
    return a - b;
  }
  while (stones.length > 1) {
    stones.sort(compareFunc);
    const y = stones.pop();
    const x = stones.pop();
    if (x === y) {
      continue;
    } else {
      stones.push(y - x);
    }
  }
  
  if (stones.length === 0) {
    return 0;
  } else {
    return stones[0];
  }
}

console.log(lastStoneWeight([2, 2]));
