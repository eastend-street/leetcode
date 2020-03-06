// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

// sort version
// O(n log n)
const sortStrs1 = str => {
  return str.split(" ").sort((a, b) => {
    const tmp1 = a.replace(/[^0-9]/g, "");
    const tmp2 = b.replace(/[^0-9]/g, "");
    return tmp1 < tmp2 ? -1 : 1;
  });
};

// Make new array version
//O(n)
const sortStrs2 = str => {
  const strArr = str.split(" ");
  const result = new Array(strArr.length);
  for (let i = 0; i < strArr.length; i++) {
    const tmp = strArr[i].replace(/[^0-9]/g, "");
    result[tmp - 1] = strArr[i];
  }
  return result;
};

console.log(sortStrs2("is2 Thi1s T4est 3a"));

// Binary searchの解説
// [1,2,3,4,5,6,7,8,9,10]
// [6,7,8,9,10]
// [8,9,10]
// [9,10]
// [10]
