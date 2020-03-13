// XOR(^)を使う（ビット演算子で比べる）

const singleNumber = nums => {
  let result = 0;
  for (const num of nums) {
    result = result ^ num;
  }
  return result;
};

// Input: [2,2,1]
// Output: 1

console.log(singleNumber([2, 2, 1]));

//　解説
// XORを使うと、片方がtrueの場合のみtrueとなる
// True ^ True → false
// False ^ True → true
// True ^ False → true
// False ^ False → false

// 例）違う値どうしの場合は0にならないで足される
// 00000000 →　0
// 00000001 →  1
// 00000001 答えは1

// 00000001 →　0
// 00000010 →  2
// 00000011 答えは3

//　例）どちらも同じ値の場合は0になる
// 00000001 →  1
// 00000001 →  1
// 00000000 答えは0

// よって、XORを用いることで、2回繰り返している数を0にできる。1回しかでない数は残る
