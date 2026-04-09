/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

var uncommonFromSentences = function (s1, s2) {
  const freq = {};
  const words = (s1 + " " + s2).split(" ");
  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  const res = [];
  for (let word in freq) {
    if (freq[word] === 1) {
      res.push(word);
    }
  }
  return res;
};
