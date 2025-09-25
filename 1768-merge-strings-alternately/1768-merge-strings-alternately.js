/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let size = Math.min(word1.length, word2.length);
    let str = "";
    let i;
    for(i = 0; i < size; i++) str += word1[i] + word2[i];
    if (i < word1.length) str += word1.substr(i, word1.length)
    if (i < word2.length) str += word2.substr(i, word2.length);
    return str;
};