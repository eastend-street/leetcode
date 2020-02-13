const isUpperCase = c => {
  return /^[A-Z]+$/g.test(c);
};

function letterCasePermutation(S) {
  let result = [S];
  const array2 = S.split("");
  for (let i = 0; i < array2.length; i++) {
    const array = S.split("");
    if (isUpperCase(array[i])) {
      array[i] = array[i].toLowercase();
    } else {
      array[i] = array[i].toUpperCase();
    }
    result.push(array)
  }
  result.push(S.toUpperCase());

  var b = result.filter(function(x, i, self) {
    return self.indexOf(x) === i;
  });

  return b;
}

// １文字ずつに分解
// １つの文字につき、表現できるパターンすべて洗い出す
// 次の文字に移動

console.log(letterCasePermutation("a1b2"));
