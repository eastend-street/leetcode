const ladderLength = (beginWord, endWord, wordList) => {
  const arrBegin = beginWord.split("");
  const arrEnd = endWord.split("");
  let count = 0;
  for (let i = 0; i < arrBegin.length; i++) {
    for (let j = 0; j < arrBegin.length; j++) {
      count = Math.max(count, search(i, j, arrBegin, arrEnd, wordList));
    }
  }
  return;
};

const search = (i, j, arrBegin, arrEnd, wordList) => {
    let count = 0;
    if(!arrBegin[i] || arrEnd[j]){
        
    }
    return count
};

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
