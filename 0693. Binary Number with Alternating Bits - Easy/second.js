const hasAlternatingBits = n => {
  const strArr = n.toString(2).split("");
  console.log(n.toString(2))
  console.log((n >>> 1).toString(2))
//   j = strArr.length - 1;
//   for (let i = 0; i < strArr.length - 1; i++) {
//     if (strArr[i] === ~strArr[j]) return false;
//   }
  return true;
};

console.log(hasAlternatingBits(11));
