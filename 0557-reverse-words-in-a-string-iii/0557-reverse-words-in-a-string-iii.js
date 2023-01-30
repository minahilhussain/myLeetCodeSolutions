/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
    let s = str.split(' ');
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i].split("").reverse().join(""));
    }
    return arr.join(' ');
};