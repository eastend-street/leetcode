/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  const stack = [];

  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === ")" || map[s[i]] === "}" || map[s[i]] === "]") {
      stack.push(map[s[i]]);
    } else {
        if(stack.length === 0 || stack.pop() !== s[i]){
            return false
        }
    }
  }
  return true;
};

const testData = ["()", "()[]{}", "(]", "([)]", "{[]}"];
for (let i = 0; i < testData.length; i++) {
    console.log(isValid(testData[i]));
}
