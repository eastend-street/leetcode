// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const checkUniqueChara = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};
