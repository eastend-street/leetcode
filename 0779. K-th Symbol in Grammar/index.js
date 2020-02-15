// over memory
const kthGrammar = (N, K) => {
  if (N === 1) return 0;
  let prev = "0";
  let current = "";
  for (let i = 1; i < N; i++) {
    const arr = prev.split("");
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "0") current += "01";
      else current += "10";
    }
    prev = current;
    if (i === N - 1) return parseInt(current.split("")[K - 1]);
    current = "";
  }
};

// Input: N = 1, K = 1
// Output: 0

// Input: N = 2, K = 1
// Output: 0

// Input: N = 2, K = 2
// Output: 1

// Input: N = 4, K = 5
// Output: 1

// Explanation:
// row 1: 0
// row 2: 01
// row 3: 0110
// row 4: 01101001

console.log(kthGrammar(30, 1));
