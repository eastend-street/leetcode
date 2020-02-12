const originalList = [
  17,
  11,
  12,
  5,
  14,
  9,
  6,
  16,
  4,
  10,
  1,
  19,
  13,
  15,
  0,
  2,
  3,
  18,
  7,
  8
];

const insertionSort = list => {
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr)
      arr.push(list[i]);
    }
  }
  return arr;
};

console.log(insertionSort(originalList));
