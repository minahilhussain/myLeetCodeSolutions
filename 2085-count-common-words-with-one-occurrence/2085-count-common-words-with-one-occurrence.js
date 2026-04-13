/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const freq1 = {};
  const freq2 = {};

  for (const w of words1) {
    freq1[w] = (freq1[w] || 0) + 1;
  }

  for (const w of words2) {
    freq2[w] = (freq2[w] || 0) + 1;
  }

  let count = 0;

  for (const key in freq1) {
    if (freq1[key] === 1 && freq2[key] === 1) {
      count++;
    }
  }

  return count;
};