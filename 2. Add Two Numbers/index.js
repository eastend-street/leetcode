/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const convertToNum = list => {
    let str = "";
    for (let i = list.length - 1; i >= 0; i--) {
      str += String(list[i]);
    }
    return Number(str);
  };

  let result = []
  const resultStr =  String(convertToNum(l1) + convertToNum(l2)).split("")
  for(let i =0; i < resultStr.length; i++){
      result.push(Number(resultStr[i]))
  }
  return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
