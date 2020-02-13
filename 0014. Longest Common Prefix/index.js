const param = ["flower", "flow", "flight"];

var longestCommonPrefix = function(strs) {
  let str1 = strs[0];
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      console.log("strs", strs[j][i]);
      console.log("str1", str1[i]);
      if (str1[i] !== strs[j][i]) {
        result = str1.slice(0, i);
        break;
      }
    }
  }
  console.log(result);
};

longestCommonPrefix(param);
