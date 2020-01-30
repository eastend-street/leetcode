function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const rest = stones.pop() - stones.pop();
    if (rest !== 0) {
      stones.push(rest);
    }
  }
  return stones[0] || 0;
}

console.log(lastStoneWeight([2, 2]));
