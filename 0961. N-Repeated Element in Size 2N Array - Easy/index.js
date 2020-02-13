// accepted but slow
const repeatedNTimes = A => {
  const count = A.length / 2;

  let hash = new Map();
  for (let i = 0; i < A.length; i++) {
    if (hash.has(A[i])) hash.get(A[i]).val++;
    else hash.set(A[i], { val: 1 });

    if (hash.get(A[i]).val === count) return A[i];
  }
};
// Input: [1,2,3,3]
// Output: 3
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

// setにして一回でも重複がでたら、それが答え
// [5, 1, 5, 2, 5, 3, 5, 4] there are N+1 unique elements
// この場合配列の長さ8, N = 4, N+1 = 5なので5個は重複しない
// 8 - 5 = 3なので、3つには同じ値が入る e.g.[1,1,1]
// 重複は最低Nなので、この場合4つは同じ値。なのでユニークの5個から１回でも重複が出たらそれが答えÏ 

