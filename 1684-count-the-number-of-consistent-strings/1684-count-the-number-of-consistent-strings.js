/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(word of words) {
      let flag = 0;
      for(char of word) {
          if (!allowed.includes(char)) flag = 1;
      }
      if (flag !== 1) count++;
    }
    return count;
};