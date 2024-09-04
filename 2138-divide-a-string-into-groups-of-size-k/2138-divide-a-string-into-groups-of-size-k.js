/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(str, k, fill) {
    if(str.length % k !== 0) {
        const remainder = str.length % k;
        for(let i = 0; i < k - remainder; i++){
            str+= fill;
        }
    }
    let word = '', words = [];
    for(let i = 0; i < str.length; i++ ) {
        word += str[i];
        if((i !== 0 || k === 1) && (i + 1) % k === 0) {
            words.push(word);
            word = ''
        }
    }
    return words;
};