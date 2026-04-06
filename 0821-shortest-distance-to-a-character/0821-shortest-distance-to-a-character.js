/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (str, c) {
  let occurrences = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      occurrences.push(i);
    }
  }

  let answer = [];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    while (j < occurrences.length - 1 && i > occurrences[j]) {
      j++;
    }

    if (j === 0) {
      answer.push(Math.abs(occurrences[j] - i));
    } else {
      answer.push(
        Math.min(
          Math.abs(occurrences[j] - i),
          Math.abs(occurrences[j - 1] - i)
        )
      );
    }
  }

  return answer;
};