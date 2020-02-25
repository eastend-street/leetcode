const findVowels = str => {
  const vowels = ["a", "i", "u", "e", "o"];
  const strArr = str.split("");

  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) count++;
  }

  return count;
};

// findVowels('hello') // --> 2
// findVowels('why') // --> 0

console.log(findVowels('whoareyou'));
