/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  const beginWordArray = beginWord.split('');
  const endWordArray = endWord.split('');

  const count = 0;

  const queue = [];
  wordList.forEach((word) => {
    if (isOneCharacterDifference(beginWord, word)) {
      queue.push(word);
    }
  });

  console.log(queue);
  return count;
};

const isOneCharacterDifference = (wordA, wordB) => {
  const wordAArray = wordA.split('');
  const wordBArray = wordB.split('');
  let diffCharacterCount = 0;
  wordAArray.forEach((characterA, index) => {
    if (characterA !== wordBArray[index]) diffCharacterCount++;
  });
  return diffCharacterCount === 1;
};

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
