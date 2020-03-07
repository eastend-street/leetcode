const maxProfit = prices => {
  let profit = 0;
  let current = prices[0];　// currentには一番始めの値を挿入
  // ２個目の値からチェック
  for (let i = 1; i < prices.length; i++) {
    // 今見ている値がcurrentより大きい場合は、差分を儲けに追加
    if (prices[i] > current) {
      profit += prices[i] - current;
    }
    // currentを更新
    current = prices[i];
  }
  return profit;
};

[7, 1, 5, 3, 6, 4]　// c = 7, profit = 0
[1, 5, 3, 6, 4]　// c = 1, profit = 0
[5, 3, 6, 4]　// c = 5, profit = 4
[3, 6, 4]　// c = 3, profit = 4
[6, 4]　// c = 6, profit = 7
[4]　// c = 4, profit = 7




// Input: [7,1,5,3,6,4]
// Output: 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// 安いのが先に来たら、買うものを変える
//　常に買い続けて、下がったら差し替える

// const current, profit
// if(current >price){
//   cu
// }
