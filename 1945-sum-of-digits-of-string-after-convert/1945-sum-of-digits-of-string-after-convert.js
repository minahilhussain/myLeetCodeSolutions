/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let asciiString = "";
    for (let ch of s) {
        asciiString += ch.charCodeAt(0) - 96
    }
    let count = 0;
    for (let i = 0; i < k ; i++) {
        count = 0;
        for (let j = 0; j < asciiString.length; j++) {
            count += Number(asciiString[j]);
        }
        asciiString = count.toString();
    }
    return count;
};