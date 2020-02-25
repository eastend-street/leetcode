const palindrome = str => {
  if (typeof str !== "string") {
    console.log("enter String");
    return false;
  }
  const reversedStr = str
    .split("")
    .reverse()
    .join("");

  return str === reversedStr;
};

// palindrome('racecar')  ===  true
// palindrome('table')  ===  false

console.log(palindrome(1));
