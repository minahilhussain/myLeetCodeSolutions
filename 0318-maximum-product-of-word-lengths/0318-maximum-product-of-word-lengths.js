/**
 * @param {string[]} words
 * @return {number}
 */
var haveCommonLetter = function(s1, s2) {
    for (let ch of s1) {
        if (s2.includes(ch)) {
          return true;
        }
    }
    return false;
}
var maxProduct = function(words) {
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if(!haveCommonLetter(words[i], words[j])) {
                max = Math.max(max, words[i].length * words[j].length)
            }
        }
    }
    return max;
};