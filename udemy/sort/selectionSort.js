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

const selectionSort = list => {
  for (let i = 0; i < list.length; i++) {
    let min = list[i];
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (min > list[j]) {
        min = list[j];
        minIndex = j;
      }
    }
    const tmp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = tmp;
  }
  return list;
};

console.log(selectionSort(originalList));
