/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const hash = new Map();
  hash.set("(", ")");
  hash.set("{", "}");
  hash.set("[", "]");

  let stack = [];
  const array = s.split("");

  for (let i = 0; i < array.length; i++) {
    if (hash.has(array[i])) {
      stack.push(hash.get(array[i]));
    } else {
      if (stack[stack.length - 1] === array[i]) {
        stack.pop();
      } else {
        stack.push(array[i]);
      }
    }
  }
  return stack.length === 0 ? true : false;
}
