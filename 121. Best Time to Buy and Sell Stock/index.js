const maxProfit = (prices) => {
  let min = prices[0];
  // 株の売り買いの最大値
  let maxProfit = 0;
  prices.forEach((num) => {
    // 値が大きいか小さいかで分岐
    // 値が小さいとき
    if (num < min) min = num;
    // 値が大きいとき
    if (num - min > maxProfit) maxProfit = num - min;
  });
  return maxProfit;
};

// Use reduce & use Min and Max instead of if condition
const maxProfit2 = (prices) => {
  const { maxProfit } = prices.reduce(
    (acc, price) => ({
      min: Math.min(acc.min, price),
      maxProfit: Math.max(acc.maxProfit, price - acc.min),
    }),
    { min: prices[0], maxProfit: 0 }
  );

  return maxProfit;
};
