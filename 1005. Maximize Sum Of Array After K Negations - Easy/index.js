function largestSumAfterKNegations(A, K) {
  // sort
  // 一番大きいもので0より小さいものをk回かえる
  // 0以降は二回変える
  // タス
  let result = 0;
  A.sort((a, b) => (a < b ? -1 : 1));
  let i = 0;
  while (i < A.length) {
    if (i < K) {
    console.log(A[i]);
      if (A[i] === 0) {
        i++;
      } else if (A[i] >= 0) {
        A[i] = -A[i];
        console.log(A[i]);
      } else {
        i++;
      }

      if (i == K - 1) {
        result += A[i];
      }
    } else {
      result += A[i];
      i++;
    }
  }
  return result;
}

// A = [4,2,3], K = 1

// 6
console.log(largestSumAfterKNegations([3,-1,0,2], 3));


// 0が来たらstop
// プラスが来た場合は偶数回残っていたら、ただプラスを回す
// 奇数回残っている場合は、一個前の値とくらべて値の小さい方を-にする