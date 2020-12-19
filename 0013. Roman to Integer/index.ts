const romanToInt = (s: string): number => {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  return s.split('').reduce((acc, current, index, array) => {
    const currentNum = Number(romanMap[current]);
    const nextNum = Number(romanMap[array[index + 1]]);
    return index < array.length - 1 && currentNum < nextNum ? acc - currentNum : acc + currentNum;
  }, 0);
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
