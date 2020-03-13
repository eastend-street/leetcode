const findUniq = arr => {
  const map = new Map();
  for (const num of arr) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  for (const [key, value] of map) {
    if (value < 2) return key;
  }
};

console.log(findUniq([1, 1, 1, 2, 1, 1, 3, 3]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

// 2n

// [1, 1, 1, 2, 1, 1, 3, 3]

// 00000000
// 00000001
1

00000001
00000010 3

00000011 
00000001

00000010 2
00000001

3

[4,1,2,1,2]

// 00000001 = [1]

// 00000111 = 7
// 00000001 = 1

// 00000110 = 6

[1,2,1]

00000010
11111101

11111111

00000010
11111111

00000010  //1
11111101

00000000 // 0
