/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(str, letter) {
    let count = 0;
    for (let s of str) {
        if (s === letter) count++;
    }
    return count === 0 ? 0 : Math.floor((count * 100) / str.length);
};