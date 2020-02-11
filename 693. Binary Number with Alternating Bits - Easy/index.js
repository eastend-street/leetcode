const hasAlternatingBits = n => {
  const strArr = n.toString(2).split("");
  for (let i = 0; i < strArr.length -1; i++) {
      if(strArr[i] === strArr[i+1]) return false
  }
  return true;
};

console.log(hasAlternatingBits(11));
