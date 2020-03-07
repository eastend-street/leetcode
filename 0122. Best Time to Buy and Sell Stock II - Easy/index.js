// ブルートフォースでやってみて、DPかなと思って引き続き解いてみたが途中でmemo化の条件が複雑になって失敗
const maxProfit = prices => {
  let profit = 0;

  const map = {};
  for (let i = 0; i < prices.length; i++) {
    let max = 0;
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > max) {
        max = currentProfit;
        map[currentProfit] = j;
      }
    }
  }

  console.log(map)
  for(const key in map){
      console.log(map[key])
  }

  return profit;
};

// Input: [7,1,5,3,6,4]
// Output: 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// [最初の考え]
// それぞれの日の儲けの最大値を調べる。（いつ売るのかも保存する）
// 一番儲けが多い組み合わせでかつ、売る・買うがかぶっていないものをreturn する
