// Implement a function that will receive 2 array as parameters, will check if they have repeated items. if yes, it should be removed.
// Your function need to return one array without the repeated characters.
// checkArray([2,4,5,6],[8,9,5,2,4]; (return: [6,8,9])

const checkArray = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  for (const num of set1) {
    if (set2.has(num)) set2.delete(num);
    else set2.add(num);
  }
  return Array.from(set2);
};

console.log(checkArray([2, 4, 5, 6], [8, 9, 5, 2, 4]));
