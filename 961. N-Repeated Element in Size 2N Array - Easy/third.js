// accepted but slow
const repeatedNTimes = A => {
  let set = new Set();
  for (const num of A) {
    if (set.has(num)) return num;
    set.add(num);
  }
};
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

// setにして一回でも重複がでたら、それが答え
// [5, 1, 5, 2, 5, 3, 5, 4] there are N+1 unique elements
// この場合配列の長さ8, N = 4, N+1 = 5なので5個は重複しない
// 8 - 5 = 3なので、3つには同じ値が入る e.g.[1,1,1]
// 重複は最低Nなので、この場合4つは同じ値。なのでユニークの5個から１回でも重複が出たらそれが答えÏ

// 8
// n = 4
// unique - 5
// [1,2,3,4,5,1,1,1]
