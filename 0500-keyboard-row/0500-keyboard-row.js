/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const firstRow = 'qwertyuiop';
  const secondRow = 'asdfghjkl';
  const thirdRow = 'zxcvbnm';

  let flag = 1;
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (!firstRow.includes(word[j])) {
        flag = 0;
        break;
      }
      flag = 1;
    }
    if (!flag) {
      for (let j = 0; j < word.length; j++) {
        if (!secondRow.includes(word[j])) {
          flag = 0;
          break;
        }
        flag = 1;
      }
      if (!flag) {
        for (let j = 0; j < word.length; j++) {
          if (!thirdRow.includes(word[j])) {
            flag = 0;
            break;
          }
          flag = 1;
        }
        if (flag) {
          result.push(words[i]);
        }
      } else {
        result.push(words[i]);
      }
    } else {
      result.push(words[i]);
    }
  }
  return result;
};