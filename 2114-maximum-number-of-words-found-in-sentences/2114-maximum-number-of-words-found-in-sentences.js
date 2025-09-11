/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let i = 0; i < sentences.length; i++) {
        const len = sentences[i].split(' ').length;
        if(max < len) max = len;
    }
    return max;
};